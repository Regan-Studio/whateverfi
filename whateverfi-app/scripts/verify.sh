#!/usr/bin/env bash
# Report the real state of the WhatEverFi app: containers, local web, public URL, marketing site.
set -uo pipefail
RUNTIME="${WHATEVERFI_RUNTIME_DIR:-$HOME/whateverfi-app-runtime}"
code() { curl -s -m 15 -o /dev/null -w '%{http_code}' "$1"; }

if [[ -f "$RUNTIME/docker-compose.images.yml" ]] && docker info >/dev/null 2>&1; then
  (cd "$RUNTIME" && docker compose -f docker-compose.images.yml -f docker-compose.override.yml ps --format 'table {{.Service}}\t{{.State}}\t{{.Health}}')
else
  echo "containers: stack not installed here or Docker unreachable"
fi
echo "local  http://127.0.0.1:5173            -> $(code http://127.0.0.1:5173)"
echo "local  http://127.0.0.1:5173/api/health -> $(code http://127.0.0.1:5173/api/health)"
echo "public https://app.whateverfi.com       -> $(code https://app.whateverfi.com) ($(curl -s -m 15 https://app.whateverfi.com | grep -o '<title>[^<]*' | head -1 | cut -c8-))"
echo "site   https://whateverfi.com           -> $(code https://whateverfi.com)"
echo "site   https://www.whateverfi.com       -> $(code https://www.whateverfi.com)"
