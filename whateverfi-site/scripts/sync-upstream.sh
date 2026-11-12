#!/usr/bin/env bash
# Fetch upstream elie222/rakazo, apply the WhatEverFi overlay, build apps/www, verify, copy to dist/.
#
#   scripts/sync-upstream.sh                 # build the pinned upstream SHA (upstream.json)
#   scripts/sync-upstream.sh --ref latest    # build upstream branch HEAD
#   scripts/sync-upstream.sh --ref latest --pin   # ...and record the new SHA in upstream.json
#
# Options: --ref <sha|branch|tag|latest>  --pin  --skip-build  --skip-check  --ocr  --out <dir>
# Exit codes: 0 ok | 2 usage/env | 3 patch conflict | 4 overlay no longer matches | 5 install/build | 6 check/verify
set -Eeuo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORK="${WORK_DIR:-$ROOT/.cache/upstream}"
OUT="$ROOT/dist"
REF="" PIN=0 SKIP_BUILD=0 SKIP_CHECK=0 OCR=""

die() { local code=$1; shift; echo "::error::$*" >&2; echo "ERROR($code): $*" >&2; exit "$code"; }
step() { echo; echo "==> $*"; }

while [[ $# -gt 0 ]]; do
  case "$1" in
    --ref) REF="${2:?--ref needs a value}"; shift 2 ;;
    --pin) PIN=1; shift ;;
    --skip-build) SKIP_BUILD=1; shift ;;
    --skip-check) SKIP_CHECK=1; shift ;;
    --ocr) OCR="--ocr"; shift ;;
    --out) OUT="${2:?--out needs a value}"; shift 2 ;;
    -h|--help) sed -n '2,10p' "$0"; exit 0 ;;
    *) die 2 "unknown option $1" ;;
  esac
done

jget() { node -e 'const j=require(process.argv[1]); console.log(j[process.argv[2]] ?? "")' "$1" "$2"; }
REPO="$(jget "$ROOT/upstream.json" repo)"
BRANCH="$(jget "$ROOT/upstream.json" branch)"
PINNED="$(jget "$ROOT/upstream.json" sha)"
APP="$(jget "$ROOT/upstream.json" app)"
BRAND="$(jget "$ROOT/overrides/brand.json" brand)"

step "Resolving upstream ref"
if [[ -z "$REF" ]]; then
  SHA="$PINNED"
elif [[ "$REF" =~ ^[0-9a-f]{40}$ ]]; then
  SHA="$REF"
else
  [[ "$REF" == latest ]] && REF="$BRANCH"
  SHA="$(git ls-remote "$REPO" "refs/heads/$REF" "refs/tags/$REF" | head -n1 | cut -f1)"
  [[ -n "$SHA" ]] || die 2 "cannot resolve '$REF' on $REPO"
fi
echo "upstream $REPO @ $SHA (pinned: $PINNED)"

step "Fetching upstream into $WORK"
mkdir -p "$WORK" "$ROOT/.cache"
if [[ ! -d "$WORK/.git" ]]; then
  git -C "$WORK" init -q
  git -C "$WORK" remote add origin "$REPO"
fi
git -C "$WORK" fetch -q --depth=1 origin "$SHA" || die 2 "fetch of $SHA failed"
git -C "$WORK" checkout -qf --detach FETCH_HEAD
git -C "$WORK" reset -q --hard
git -C "$WORK" clean -qffd -e node_modules   # keep installed deps; drop previous overlay output
[[ "$(git -C "$WORK" rev-parse HEAD)" == "$SHA" ]] || die 2 "checkout mismatch"

step "Applying patches (overrides/patches)"
shopt -s nullglob
for patch in "$ROOT"/overrides/patches/*.patch; do
  if ! git -C "$WORK" apply --check "$patch" 2> "$ROOT/.cache/conflict.txt"; then
    { echo "patch: $(basename "$patch")"; echo "upstream: $SHA"; } >> "$ROOT/.cache/conflict.txt"
    cat "$ROOT/.cache/conflict.txt" >&2
    die 3 "patch $(basename "$patch") no longer applies to upstream $SHA - refresh it (see DEPLOY.md)"
  fi
  git -C "$WORK" apply "$patch"
  echo "applied $(basename "$patch")"
done

step "Applying brand overlay ($BRAND)"
node "$ROOT/scripts/apply-overlay.mjs" "$WORK" > "$ROOT/.cache/overlay.log" 2>&1 || {
  cat "$ROOT/.cache/overlay.log" >&2; cp "$ROOT/.cache/overlay.log" "$ROOT/.cache/conflict.txt"
  die 4 "brand overlay no longer matches upstream $SHA"
}
cat "$ROOT/.cache/overlay.log"
python3 "$ROOT/scripts/rebrand-assets.py" "$WORK" "$BRAND" || die 4 "asset rebrand failed"

if [[ "$PIN" == 1 && "$SHA" != "$PINNED" ]]; then
  node -e 'const fs=require("fs");const f=process.argv[1];const j=JSON.parse(fs.readFileSync(f));j.sha=process.argv[2];fs.writeFileSync(f,JSON.stringify(j,null,2)+"\n")' "$ROOT/upstream.json" "$SHA"
  echo "pinned upstream.json -> $SHA"
fi
if [[ -n "${GITHUB_OUTPUT:-}" ]]; then echo "sha=$SHA" >> "$GITHUB_OUTPUT"; fi
if [[ "$SKIP_BUILD" == 1 ]]; then echo "overlay applied; build skipped"; exit 0; fi

step "Checking toolchain"
NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
[[ "$NODE_MAJOR" -ge 24 ]] || die 2 "upstream requires Node ^24.15 or >=26 (found $(node -v))"
CHROME="${CHROME_PATH:-$(command -v google-chrome || command -v chromium || command -v chromium-browser || true)}"
[[ -x "$CHROME" ]] || die 2 "Chrome/Chromium is required to re-render branded Open Graph images (set CHROME_PATH)"

cd "$WORK"
step "Installing dependencies (pnpm, @rakazo/www and its workspace deps only)"
corepack pnpm install --frozen-lockfile --filter "@rakazo/www..." || die 5 "pnpm install failed"

step "Re-rendering Open Graph images with the new brand"
(cd "$APP" && CHROME_PATH="$CHROME" ../../node_modules/.bin/tsx scripts/render-og.mjs > "$ROOT/.cache/og.log" 2>&1) \
  || { tail -20 "$ROOT/.cache/og.log" >&2; die 5 "OG image render failed"; }
echo "rendered $(grep -c '^[a-z0-9-]*$' "$ROOT/.cache/og.log") OG images"

step "Building $APP"
corepack pnpm --filter @rakazo/www build || die 5 "astro build failed"
node "$ROOT/scripts/postbuild.mjs" "$WORK/$APP" || die 5 "postbuild failed"

if [[ "$SKIP_CHECK" == 0 ]]; then
  step "Type-checking $APP (astro check)"
  corepack pnpm --filter @rakazo/www check || die 6 "astro check failed"
fi

step "Verifying branding in build output"
node "$ROOT/scripts/verify-build.mjs" "$WORK/$APP/dist" $OCR || die 6 "branding verification failed"

step "Copying build to $OUT"
rm -rf "$OUT"
cp -a "$WORK/$APP/dist" "$OUT"
WRAPPER_SHA="$(git -C "$ROOT" rev-parse HEAD 2>/dev/null || echo uncommitted)"
printf '{"upstream":"%s","upstreamSha":"%s","wrapperSha":"%s","builtAt":"%s"}\n' \
  "$REPO" "$SHA" "$WRAPPER_SHA" "$(date -u +%FT%TZ)" > "$OUT/build-info.json"
echo "done: $(find "$OUT" -type f | wc -l) files, $(du -sh "$OUT" | cut -f1)"
