# whateverfi-app

Runs the signed-in **WhatEverFi app** (app.whateverfi.com) — the self-hosted stack of the
Apache-2.0 project [elie222/rakazo](https://github.com/elie222/rakazo), pinned to commit
`1115613` (same pin as `whateverfi-site/`). The marketing site (whateverfi.com, Cloudflare Pages
project `whateverfi-splash`) is separate and is not touched by anything here.

```
upstream.env                 pinned upstream commit + published image tags (sha-<commit>)
.env.example                 WhatEverFi values layered onto upstream's .env (placeholders only)
docker-compose.override.yml  WhatEverFi theme mount + cloudflared tunnel connector
theme/theme.json             WhatEverFi colors (upstream RAKAZO_THEME mechanism)
scripts/cloudflare-tunnel.sh create/reuse tunnel "whateverfi-app", ingress, token; --cutover moves DNS
scripts/install.sh           runs upstream install-images.sh pinned to the commit, with our overlay
scripts/verify.sh            containers, local web, public URL, marketing site
```

Stack (all upstream images, no build): Postgres 16, migrate, API, Graphile worker, web (Vite
preview on `127.0.0.1:5173`), Docker sandbox supervisor + bot computer image, plus `cloudflared`.
Postgres and the API are never published; the tunnel reaches `web:5173` over the Compose network.

## Requirements (the host)

A real Docker host: Docker Engine 26+ with Compose plugin, curl, openssl, jq, and enough disk for
the images (several GB). It must stay on — this is a server, not a static site. Target:
`scarecrow.abacusai.cloud` (Abacus AI Cloud / SuperComputer).

## Runbook

```bash
git clone https://github.com/Regan-Studio/whateverfi && cd whateverfi/whateverfi-app

# 1. Tunnel (token needs Account > Cloudflare Tunnel > Edit). Writes TUNNEL_TOKEN to the runtime .env.
CF_API_TOKEN=... CF_ACCOUNT_ID=... scripts/cloudflare-tunnel.sh

# 2. Stack. Runtime folder: ~/whateverfi-app-runtime (real .env + secrets live there, never in git).
scripts/install.sh
#    optional: add OPENROUTER_API_KEY / SMTP_URL to ~/whateverfi-app-runtime/.env, rerun install.sh

# 3. Check: local web 200, tunnel HEALTHY in Cloudflare dashboard (Zero Trust > Networks > Tunnels)
scripts/verify.sh

# 4. Cutover app.whateverfi.com from the "coming soon" Pages project to the tunnel
#    (needs also Zone:Read + DNS:Edit on whateverfi.com and Pages:Edit). Refuses unless tunnel is healthy.
CF_API_TOKEN=... CF_ACCOUNT_ID=... scripts/cloudflare-tunnel.sh --cutover
scripts/verify.sh
```

**Back up** `~/whateverfi-app-runtime/.env` (especially `ENCRYPTION_KEY`) — stored credentials
cannot be decrypted without it. Backups/upgrades: upstream `docs/self-host-backups.md`,
`docs/self-host-upgrading.md`. To upgrade, bump `upstream.env` + `.env.example` tags (and
`whateverfi-site/upstream.json`) together and rerun `scripts/install.sh`.

**Rollback of the cutover:** delete the `app.whateverfi.com` CNAME and re-add `app.whateverfi.com`
as a custom domain on Pages project `whateverfi-app` (the coming-soon page).

**Stop:** `cd ~/whateverfi-app-runtime && docker compose -f docker-compose.images.yml -f docker-compose.override.yml down`
(never `down -v` without a backup — it deletes the database).

## Branding limits

Runtime branding is limited to what upstream exposes: colors/fonts (`theme/theme.json`), URLs and
hostnames. The in-app product name still comes from the upstream image. Full text rebranding
would need a custom image built with the `whateverfi-site` overlay approach — not done yet.

License: upstream is Apache-2.0; keep its NOTICE/attribution when redistributing.
