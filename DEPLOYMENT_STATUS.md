# WhatEverFi deployment status — 2026-11-13

| Piece | State (verified) |
|---|---|
| whateverfi.com / www (Pages `whateverfi-splash`) | **Live, 200.** Not touched. |
| app.whateverfi.com | **Still the "coming soon" page** (Pages project `whateverfi-app`, 200). Not changed. |
| App stack (API, worker, Postgres, web, bot computers) | **Not running anywhere yet.** Deployment kit ready in `whateverfi-app/`. |
| Cloudflare Tunnel `whateverfi-app` | **Not created** — API token lacks permission (below). |

## Why the app is not running yet

The agent that prepared this ran on a temporary Abacus workspace container
(`chatllm-computer-…`), **not on scarecrow.abacusai.cloud**:

- No Docker daemon (`/var/run/docker.sock` missing, no `dockerd`), container has zero Linux
  capabilities, so Docker cannot be started there. Only the docker CLI/compose plugin exist.
- That workspace shuts down after inactivity — it is not an always-on host.
- `https://scarecrow.abacusai.cloud` answers through Cloudflare with a 6-byte page (`READY`):
  the Abacus Cloud machine is up, but there was no SSH/shell access to it from this workspace.

## Verified here

- Upstream `elie222/rakazo@1115613b8d00…` exists, Apache-2.0.
- Published images `ghcr.io/elie222/rakazo/{app,computer}:sha-1115613b8d007328c5a625a1cc2b096161a5788c` exist (HTTP 200 manifests).
- `docker compose config` of upstream `docker-compose.images.yml` + our override resolves: services
  postgres, migrate, computer, data-init, supervisor, api, worker, web, cloudflared; public origin
  `https://app.whateverfi.com`; theme mounted.
- Scripts pass `bash -n` and shellcheck. They have **not** been executed against a Docker host.

## Cloudflare API token — what it can and cannot do

- Can: verify (active), list Pages projects/domains, list tunnels.
- **Missing:** `Account > Cloudflare Tunnel > Edit` (tunnel create returned "Authentication error"),
  `Zone > Zone > Read` and `Zone > DNS > Edit` for whateverfi.com (zone list returns 0 zones).
  `Account > Cloudflare Pages > Edit` is needed for the cutover (detach the placeholder domain).

## Needs from user

1. Run the runbook (`whateverfi-app/README.md`) on scarecrow — or open this project on the
   SuperComputer so the agent can run it there.
2. Cloudflare token with the permissions above (or create the tunnel in the dashboard and put its
   token in `~/whateverfi-app-runtime/.env` as `TUNNEL_TOKEN`).
3. Optional for a useful app: `OPENROUTER_API_KEY` (or connect a model in the UI after signup),
   `SMTP_URL` + `EMAIL_FROM` for password recovery, `COMPOSIO_API_KEY` for plugins. Google OAuth
   / SSO is optional per upstream docs (`docs/self-host-accounts.md`); not needed to sign up.
4. Decide signup policy before going public (`SIGNUPS_ENABLED`, `SIGNUP_ALLOWLIST`).
