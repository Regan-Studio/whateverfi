#!/usr/bin/env bash
# Create/reuse the "whateverfi-app" Cloudflare Tunnel, set its ingress, and store the connector
# token in the runtime .env (never printed). Touches nothing on whateverfi.com / www.
#   CF_API_TOKEN=... CF_ACCOUNT_ID=... scripts/cloudflare-tunnel.sh            # tunnel + token
#   CF_API_TOKEN=... CF_ACCOUNT_ID=... scripts/cloudflare-tunnel.sh --cutover  # + move app.whateverfi.com
# Token permissions: Account > Cloudflare Tunnel > Edit; for --cutover also
#   Account > Cloudflare Pages > Edit and Zone (whateverfi.com) > Zone > Read + DNS > Edit.
# Without CF_* env vars it falls back to the Abacus secrets file if present.
set -euo pipefail

SECRETS=/home/ubuntu/.config/abacusai_auth_secrets.json
if [[ -z "${CF_API_TOKEN:-}" && -f "$SECRETS" ]]; then
  CF_API_TOKEN=$(jq -r '.cloudflare.secrets.cloudflare_api_token.value' "$SECRETS")
  CF_ACCOUNT_ID=$(jq -r '.cloudflare.secrets.cloudflare_account_id.value' "$SECRETS")
fi
: "${CF_API_TOKEN:?set CF_API_TOKEN}" "${CF_ACCOUNT_ID:?set CF_ACCOUNT_ID}"

NAME=whateverfi-app
HOST=app.whateverfi.com
ZONE=whateverfi.com
PAGES_PROJECT=whateverfi-app   # current "coming soon" placeholder holding app.whateverfi.com
RUNTIME="${WHATEVERFI_RUNTIME_DIR:-$HOME/whateverfi-app-runtime}"
API=https://api.cloudflare.com/client/v4
cf() { curl -fsS -H "Authorization: Bearer $CF_API_TOKEN" -H "Content-Type: application/json" "$@"; }
ok() { jq -e '.success' >/dev/null || { echo "Cloudflare API call failed: $1" >&2; exit 1; }; }

TID=$(cf "$API/accounts/$CF_ACCOUNT_ID/cfd_tunnel?name=$NAME&is_deleted=false" | jq -r '.result[0].id // empty')
if [[ -z "$TID" ]]; then
  TID=$(cf -X POST "$API/accounts/$CF_ACCOUNT_ID/cfd_tunnel" \
    -d "{\"name\":\"$NAME\",\"config_src\":\"cloudflare\"}" | jq -r '.result.id') \
    || { echo "Tunnel create failed: token needs Account > Cloudflare Tunnel > Edit" >&2; exit 1; }
  echo "Created tunnel $NAME ($TID)"
else
  echo "Reusing tunnel $NAME ($TID)"
fi

cf -X PUT "$API/accounts/$CF_ACCOUNT_ID/cfd_tunnel/$TID/configurations" -d "{\"config\":{\"ingress\":[
  {\"hostname\":\"$HOST\",\"service\":\"http://web:5173\"},
  {\"service\":\"http_status:404\"}]}}" | ok "set ingress"
echo "Ingress: $HOST -> http://web:5173"

TOKEN=$(cf "$API/accounts/$CF_ACCOUNT_ID/cfd_tunnel/$TID/token" | jq -r '.result')
mkdir -p "$RUNTIME"; touch "$RUNTIME/.env"; chmod 600 "$RUNTIME/.env"
grep -v '^TUNNEL_TOKEN=' "$RUNTIME/.env" > "$RUNTIME/.env.tmp" || true
printf 'TUNNEL_TOKEN=%s\n' "$TOKEN" >> "$RUNTIME/.env.tmp"; mv "$RUNTIME/.env.tmp" "$RUNTIME/.env"; chmod 600 "$RUNTIME/.env"
echo "Connector token stored in $RUNTIME/.env"

[[ "${1:-}" == "--cutover" ]] || { echo "Done (no DNS change). Start the stack, check the tunnel is HEALTHY, then rerun with --cutover."; exit 0; }

STATUS=$(cf "$API/accounts/$CF_ACCOUNT_ID/cfd_tunnel/$TID" | jq -r '.result.status')
[[ "$STATUS" == healthy ]] || { echo "Tunnel status is '$STATUS', not healthy: refusing to move $HOST." >&2; exit 1; }

ZID=$(cf "$API/zones?name=$ZONE" | jq -r '.result[0].id // empty')
[[ -n "$ZID" ]] || { echo "Zone $ZONE not visible: token needs Zone > Zone > Read + DNS > Edit for $ZONE" >&2; exit 1; }

# Detach the placeholder Pages custom domain (only app.whateverfi.com; the whateverfi-splash project is not touched).
cf -X DELETE "$API/accounts/$CF_ACCOUNT_ID/pages/projects/$PAGES_PROJECT/domains/$HOST" >/dev/null || true

REC=$(cf "$API/zones/$ZID/dns_records?name=$HOST" | jq -r '.result[0].id // empty')
BODY="{\"type\":\"CNAME\",\"name\":\"$HOST\",\"content\":\"$TID.cfargotunnel.com\",\"proxied\":true,\"comment\":\"WhatEverFi app tunnel\"}"
if [[ -n "$REC" ]]; then cf -X PUT "$API/zones/$ZID/dns_records/$REC" -d "$BODY" | ok "update CNAME"
else cf -X POST "$API/zones/$ZID/dns_records" -d "$BODY" | ok "create CNAME"; fi
echo "Cutover done: $HOST -> $TID.cfargotunnel.com (proxied)."
echo "Rollback: delete that CNAME and re-add $HOST as a custom domain of Pages project $PAGES_PROJECT."
