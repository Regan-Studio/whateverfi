#!/usr/bin/env bash
# One-time, human-run step: attach whateverfi.com (+ www) to the Cloudflare Pages project.
# This REPLACES whatever whateverfi.com serves today, so it is never run by automation.
#
# Needs a Cloudflare API token with:  Account > Cloudflare Pages > Edit
#                                     Zone (whateverfi.com) > DNS > Edit
#   CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... scripts/cloudflare-attach-domain.sh --yes
set -Eeuo pipefail
[[ "${1:-}" == --yes ]] || { echo "Refusing to run without --yes (this changes live DNS for whateverfi.com)"; exit 2; }
: "${CLOUDFLARE_API_TOKEN:?}" "${CLOUDFLARE_ACCOUNT_ID:?}"
PROJECT="${CF_PAGES_PROJECT:-whateverfi-site}"
APEX="${SITE_DOMAIN:-whateverfi.com}"
API="https://api.cloudflare.com/client/v4"
auth=(-H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" -H "Content-Type: application/json")

for host in "$APEX" "www.$APEX"; do
  echo "Attaching $host to Pages project $PROJECT"
  curl -fsS "${auth[@]}" -X POST "$API/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$PROJECT/domains" \
    --data "{\"name\":\"$host\"}" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{const j=JSON.parse(s);console.log(j.success?"  ok: "+j.result.status:"  failed: "+JSON.stringify(j.errors))})'
done

ZONE_ID="$(curl -fsS "${auth[@]}" "$API/zones?name=$APEX" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s).result[0]?.id ?? ""))')"
[[ -n "$ZONE_ID" ]] || { echo "zone $APEX not visible to this token"; exit 1; }
cat <<EOF

Zone $APEX ($ZONE_ID). Cloudflare normally creates these records automatically when the zone is in
the same account. If not, create them (proxied) after removing conflicting apex/www records:
  CNAME  $APEX       ->  $PROJECT.pages.dev   (CNAME flattening at apex)
  CNAME  www.$APEX   ->  $PROJECT.pages.dev
Then add a Redirect Rule: host www.$APEX -> https://$APEX\${uri} (301), mirroring upstream's www->apex rule.
Check: curl -sI https://$APEX/ | grep -i server   and the page title should be "WhatEverFi | ...".
EOF
