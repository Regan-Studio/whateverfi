#!/usr/bin/env bash
# Deploy dist/ to the configured target.
#   scripts/deploy.sh production            # live site
#   scripts/deploy.sh preview <branch-name> # e.g. pr-12 -> <branch>.<project>.pages.dev
#
# DEPLOY_TARGET (repo variable): none (default) | cloudflare-pages
# cloudflare-pages needs: secret CLOUDFLARE_API_TOKEN (Account > Cloudflare Pages > Edit),
#   variable CLOUDFLARE_ACCOUNT_ID, optional variable CF_PAGES_PROJECT (default whateverfi-site).
# Attaching whateverfi.com to the project is a separate one-time step: scripts/cloudflare-attach-domain.sh
set -Eeuo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MODE="${1:?usage: deploy.sh production|preview <branch>}"
BRANCH="${2:-main}"
TARGET="${DEPLOY_TARGET:-none}"
DIST="${DIST_DIR:-$ROOT/dist}"
[[ -f "$DIST/index.html" ]] || { echo "dist/ missing - run scripts/sync-upstream.sh first" >&2; exit 2; }
if [[ "$MODE" == production ]]; then BRANCH=main; fi
mkdir -p "$ROOT/.cache"

case "$TARGET" in
  none)
    echo "DEPLOY_TARGET is 'none': build verified, nothing deployed (set the repo variable to deploy)."
    ;;
  cloudflare-pages)
    : "${CLOUDFLARE_API_TOKEN:?secret CLOUDFLARE_API_TOKEN is not set}"
    : "${CLOUDFLARE_ACCOUNT_ID:?variable CLOUDFLARE_ACCOUNT_ID is not set}"
    PROJECT="${CF_PAGES_PROJECT:-whateverfi-site}"
    WRANGLER=(npx --yes wrangler@4)
    if ! "${WRANGLER[@]}" pages project list 2>/dev/null | grep -qw "$PROJECT"; then
      echo "Creating Cloudflare Pages project $PROJECT (free tier, production branch main)"
      "${WRANGLER[@]}" pages project create "$PROJECT" --production-branch main
    fi
    "${WRANGLER[@]}" pages deploy "$DIST" --project-name "$PROJECT" --branch "$BRANCH" \
      --commit-hash "$(git -C "$ROOT" rev-parse HEAD)" --commit-dirty=true | tee "$ROOT/.cache/deploy.log"
    URL="$(grep -oE 'https://[a-z0-9.-]+\.pages\.dev' "$ROOT/.cache/deploy.log" | tail -n1 || true)"
    echo "deployed: ${URL:-see log}"
    if [[ -n "${GITHUB_OUTPUT:-}" ]]; then echo "url=$URL" >> "$GITHUB_OUTPUT"; fi
    ;;
  *)
    echo "unknown DEPLOY_TARGET '$TARGET' (expected none or cloudflare-pages)" >&2; exit 2 ;;
esac
