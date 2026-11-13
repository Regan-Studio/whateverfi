#!/usr/bin/env bash
# Install / update the WhatEverFi app stack on a Docker host (e.g. scarecrow.abacusai.cloud).
# Uses upstream's own installer, pinned to the commit in ../upstream.env, plus our override/theme.
#   scripts/install.sh                 # prepare runtime folder + start the stack
#   scripts/install.sh --prepare-only  # prepare .env etc. without starting
# Runtime folder (holds the real .env and Compose state, never committed):
#   WHATEVERFI_RUNTIME_DIR (default: $HOME/whateverfi-app-runtime)
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
# shellcheck source=../upstream.env
source "$HERE/upstream.env"
RUNTIME="${WHATEVERFI_RUNTIME_DIR:-$HOME/whateverfi-app-runtime}"
BASE="https://raw.githubusercontent.com/${UPSTREAM_REPO}/${UPSTREAM_SHA}/infra/compose"

command -v docker >/dev/null || { echo "docker not found" >&2; exit 1; }
docker info >/dev/null 2>&1 || { echo "Docker daemon is not reachable (docker info failed)." >&2; exit 1; }
docker compose version >/dev/null || { echo "docker compose plugin missing" >&2; exit 1; }

mkdir -p "$RUNTIME"
cd "$RUNTIME"
echo "Runtime folder: $RUNTIME (upstream ${UPSTREAM_SHA:0:7})"

curl -fsSLo install-images.sh "$BASE/install-images.sh"
cp "$HERE/docker-compose.override.yml" docker-compose.override.yml
rm -rf theme && cp -r "$HERE/theme" theme

export RAKAZO_DOWNLOAD_BASE="$BASE"
export RAKAZO_IMAGE_TAG RAKAZO_IMAGE RAKAZO_COMPUTER_IMAGE
export RAKAZO_COMPUTER_IMAGE_TAG="$RAKAZO_IMAGE_TAG"

# First run: let upstream create .env with fresh random secrets. Reruns keep the existing .env.
# (cloudflare-tunnel.sh may have created a .env holding only TUNNEL_TOKEN; keep that line.)
if ! grep -qE '^BETTER_AUTH_SECRET=.+' .env 2>/dev/null; then
  saved=$(grep -E '^TUNNEL_TOKEN=' .env 2>/dev/null || true)
  rm -f .env
  bash install-images.sh --prepare-only
  [[ -n "$saved" ]] && printf '%s\n' "$saved" >> .env
fi
# Layer our non-empty values on top (secrets are never touched).
set_kv() { # key value -> replace or append in .env without echoing the value
  local k="$1" v="$2"
  if grep -qE "^${k}=" .env; then
    awk -v k="$k" -v v="$v" 'BEGIN{FS=OFS="="} $1==k{$0=k"="v} {print}' .env > .env.tmp && mv .env.tmp .env
  else
    printf '%s=%s\n' "$k" "$v" >> .env
  fi
}
while IFS='=' read -r k v; do
  [[ -z "$k" || "$k" == \#* || -z "$v" ]] && continue
  # Never overwrite a value the operator already set for these.
  case "$k" in OPENROUTER_API_KEY|COMPOSIO_API_KEY|SMTP_URL|EMAIL_FROM|TUNNEL_TOKEN) continue ;; esac
  set_kv "$k" "$v"
done < "$HERE/.env.example"
grep -qE '^TUNNEL_TOKEN=' .env || printf 'TUNNEL_TOKEN=\n' >> .env
chmod 600 .env

if ! grep -qE '^TUNNEL_TOKEN=.+' .env && [[ "${1:-}" != "--prepare-only" ]]; then
  echo "TUNNEL_TOKEN is empty: run scripts/cloudflare-tunnel.sh first, or use --prepare-only." >&2
  exit 1
fi
bash install-images.sh "$@"
