#!/usr/bin/env bash
# Fails if WhatEverFi / Regan.Studio branding is missing, Rakazo copyright was
# stripped from LICENSE, or user-facing clone/install/issue/GHCR links still
# point at elie222/rakazo (except overlays, LICENSE, and documented exceptions).
# Usage: bash overlays/whateverfi/scripts/branding-guard.sh [repo-root]
# Exit 0 OK | 6 missing branding / stripped copyright | 7 forbidden links
set -euo pipefail
ROOT="$(cd "${1:-.}" && pwd)"
cd "$ROOT"
missing=0
forbidden=0

need() {
  local file="$1" needle="$2"
  if [[ ! -f "$file" ]]; then
    echo "MISSING file $file (expected to contain: $needle)" >&2
    missing=1
    return
  fi
  if ! grep -qF -- "$needle" "$file"; then
    echo "MISSING branding in $file: $needle" >&2
    missing=1
  fi
}

need "README.md" "WhatEverFi"
need "README.md" "Regan.Studio"
need "README.md" "Based on Rakazo"
need "README.md" "Apache-2.0"
need "LICENSE" "Copyright 2026 Rakazo contributors"
need "LICENSE" "Apache License"
need "apps/www/src/pages/about.astro" "WhatEverFi"
need "apps/www/src/pages/about.astro" "Regan.Studio"
need "apps/www/src/pages/about.astro" "Based on Rakazo (Apache-2.0)"
need "apps/www/src/components/Footer.astro" "Based on Rakazo"

# Clone/install/issue/GHCR links that should already have been retargeted.
# Allowed to mention elie222/rakazo: LICENSE (not present), overlays (rules),
# this script, PUSH-PLAN / GHCR-UNPUBLISHED, and the weekly sync workflow
# (it fetches the upstream remote).
tmp="$(mktemp)"
set +e
grep -RIn --binary-files=without-match \
  --exclude-dir=.git --exclude-dir=node_modules --exclude-dir=dist \
  --exclude-dir=.cache --exclude-dir=overlays --exclude-dir=.turbo \
  --exclude='branding-guard.sh' --exclude='GHCR-UNPUBLISHED.md' \
  --exclude='PUSH-PLAN.md' --exclude='LICENSE' \
  --exclude='whateverfi-product-sync-upstream.yml' \
  -e 'github.com/elie222/rakazo' \
  -e 'raw.githubusercontent.com/elie222/rakazo' \
  -e 'ghcr.io/elie222/rakazo' \
  -e 'api.github.com/repos/elie222/rakazo' \
  . > "$tmp"
grep_code=$?
set -e
if [[ "$grep_code" -eq 0 ]]; then
  echo "FORBIDDEN: elie222/rakazo source/install/issue/image link outside allowed files:" >&2
  cat "$tmp" >&2
  forbidden=1
elif [[ "$grep_code" -gt 1 ]]; then
  echo "branding-guard: grep failed with $grep_code" >&2
  rm -f "$tmp"
  exit 6
fi
rm -f "$tmp"

# Built marketing artifacts (run after `pnpm build`).
if [[ ! -d apps/www/dist ]]; then
  echo "MISSING apps/www/dist (run pnpm build before branding-guard)" >&2
  missing=1
else
  if [[ ! -f apps/www/dist/_redirects ]]; then
    echo "MISSING apps/www/dist/_redirects" >&2
    missing=1
  elif ! grep -qF -- '/api/download https://app.whateverfi.com/ 302' apps/www/dist/_redirects; then
    echo "MISSING /api/download -> app.whateverfi.com rule in apps/www/dist/_redirects" >&2
    missing=1
  fi
  if [[ ! -f apps/www/dist/build-info.json ]]; then
    echo "MISSING apps/www/dist/build-info.json" >&2
    missing=1
  elif ! grep -qF -- 'upstreamSha' apps/www/dist/build-info.json; then
    echo "MISSING upstreamSha in apps/www/dist/build-info.json" >&2
    missing=1
  fi
fi

if ! python3 overlays/whateverfi/scripts/check-branded-images.py "$ROOT"; then
  missing=1
fi

if [[ "$missing" -ne 0 ]]; then exit 6; fi
if [[ "$forbidden" -ne 0 ]]; then exit 7; fi
echo "branding-guard: OK"
