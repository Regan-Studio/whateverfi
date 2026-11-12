# Deploying and updating whateverfi.com

This repo builds the WhatEverFi marketing site (`apps/www` from the public upstream
repo [elie222/rakazo](https://github.com/elie222/rakazo)) and applies a brand overlay:
WhatEverFi as the brand and Regan.Studio as the company. The upstream code is never
edited in place. Every build fetches the pinned upstream commit, applies
`overrides/`, builds the site and verifies the output.

> **Current state (2026-11-12):** nothing is deployed. whateverfi.com is on Cloudflare
> DNS (`dora.ns.cloudflare.com`, `brodie.ns.cloudflare.com`) and still serves its existing
> placeholder page (`<title>whateverfi.com</title>`). `www.whateverfi.com` returns
> Cloudflare error 522. No Cloudflare credentials were available to this build, so no
> Pages project, DNS record or custom domain has been created.

> **Layout in Regan-Studio/whateverfi:** this wrapper lives in the `whateverfi-site/` subdirectory.
> GitHub only reads workflows from the repo root. The root-ready copies are staged in `whateverfi-site/github-root-workflows/` (move them to `.github/workflows/` to activate; see the README there):
> `.github/workflows/whateverfi-site-{ci,sync-upstream,deploy,rollback}.yml` (they run with
> `working-directory: whateverfi-site` and path filters on `whateverfi-site/**`). The files in
> `whateverfi-site/.github/workflows/` are the standalone originals and are inert here.
> In this repo the deploy workflow runs only on push to `main` and is skipped unless the secret
> `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` (secret or variable) are set; deploy tags are
> `whateverfi-deploy-*`.

### 1. What you need

| Item | Where it goes | Notes |
|---|---|---|
| A GitHub repo you own (e.g. `regan-studio/whateverfi-site`) | push this repo to it | This bundle has no remote yet. |
| `CLOUDFLARE_API_TOKEN` | repo **secret** | A custom token with **Account › Cloudflare Pages › Edit**. Attaching the custom domain also needs **Zone › DNS › Edit** on the zone `whateverfi.com` (the attach script below only). |
| `CLOUDFLARE_ACCOUNT_ID` | repo **variable** | Shown on the Cloudflare dashboard overview page. |
| `DEPLOY_TARGET` | repo **variable** | `cloudflare-pages`. When it is unset or `none`, deploy only builds and uploads an artifact. |
| `CF_PAGES_PROJECT` | repo variable (optional) | Defaults to `whateverfi-site`. |
| `SYNC_TOKEN` | repo secret (optional) | A fine-grained PAT (contents + pull requests + issues: write). Use it so that sync PRs trigger `ci`, because PRs opened with `GITHUB_TOKEN` do not trigger other workflows. |
| GitHub environment `production` | Settings › Environments | Add required reviewers if you want a second gate before deploys. |

Also enable *Settings › Actions › General › Allow GitHub Actions to create and approve pull requests*.

### 2. First deploy (Cloudflare Pages)

```bash
git remote add origin git@github.com:<owner>/whateverfi-site.git
git push -u origin main          # triggers deploy.yml once the secrets and variables above are set
```

`deploy.yml` runs `scripts/sync-upstream.sh --ocr` and then `scripts/deploy.sh production`:
`wrangler pages project create` (only if missing), then `wrangler pages deploy dist --branch main`.
A successful run tags the commit `deploy-<timestamp>-<sha7>`.

Local equivalent:

```bash
export PATH=/path/to/node24/bin:$PATH        # Node >= 24 (upstream engines), pnpm via corepack
scripts/sync-upstream.sh --ocr               # build + verify into ./dist
CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... DEPLOY_TARGET=cloudflare-pages scripts/deploy.sh production
```

### 3. Custom domain and DNS (conditional on Cloudflare Pages)

These records apply **only if the target is Cloudflare Pages with project `whateverfi-site`**.
For any other host the records are different and cannot be given until that host is chosen.

1. After the first successful deploy, a human runs:
   `CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... scripts/cloudflare-attach-domain.sh --yes`
   This attaches `whateverfi.com` and `www.whateverfi.com` to the Pages project. You can do the
   same in the dashboard under Pages › project › Custom domains.
2. DNS in the `whateverfi.com` zone (proxied, orange cloud):

   | Type | Name | Target |
   |---|---|---|
   | CNAME | `@` (apex, flattened by Cloudflare) | `whateverfi-site.pages.dev` |
   | CNAME | `www` | `whateverfi-site.pages.dev` |

   **This replaces the record that currently serves the placeholder page.** That is a
   destructive change, so check what is there before switching. When the domain is
   attached through the dashboard, Cloudflare creates the records for you.
3. www → apex: add a Redirect Rule (`http.host eq "www.whateverfi.com"` → `https://whateverfi.com${path}`,
   301, preserve the query string). Upstream does this in `vercel.json`, but the generated
   `_redirects` file cannot match on host.
4. `app.whateverfi.com` has no DNS. Upstream links point "Get started" at the hosted product
   (`app.<domain>`). Until a WhatEverFi product instance exists, those links lead nowhere.
   See *Feasibility* below.

### 4. How upstream updates flow

```
every 6h (cron 17 */6 * * *) or manual dispatch
  sync-upstream.yml ── upstream HEAD == upstream.json sha? ── yes → stop
        │ no
        ├─ scripts/sync-upstream.sh --ref <sha> --pin --ocr
        │     fetch → patches → brand overlay → asset rebrand → install → build → astro check → verify
        ├─ success → push branch sync/upstream-<sha12>, open/update a PR, close older sync PRs
        └─ failure → open/update an issue labelled `upstream-sync` (exit code explains why)
human reviews the PR (ci.yml builds it again, with an optional Pages preview) → merge
  deploy.yml → production
```

Nothing is merged or deployed without a human merge. To pin a specific upstream ref by
hand: *Actions › sync-upstream › Run workflow › ref = <sha|branch|tag|latest>*.

#### Exit codes of `scripts/sync-upstream.sh`

| Code | Meaning | What to do |
|---|---|---|
| 3 | A file in `overrides/patches/` no longer applies | Re-create the patch against the new upstream (`git diff` in `.cache/upstream`). |
| 4 | A **required** brand rule matched nothing (upstream moved or renamed the text) | Update `find` for that rule in `overrides/brand.json`. Run `node scripts/apply-overlay.mjs .cache/upstream` to see hit counts. |
| 5 | Toolchain or install failure (Node/pnpm version, lockfile) | Update `node`/`pnpm` in `upstream.json` to match the upstream `package.json`. |
| 6 | Type check failed, or **branding verification failed** | Read the listed files. Either add a rule to `brand.json`, or, if the text is a legitimate upstream reference, add it to `verify.allowedPatterns`. |

#### Why old branding cannot come back silently

- `overrides/brand.json` is the single source of truth: brand `WhatEverFi`, company `Regan.Studio`,
  domain `whateverfi.com`.
- `scripts/verify-build.mjs` scans every built HTML, XML, TXT, JSON and MD file, the JS
  bundles, and (with `--ocr`) every image for `rakazo`, `inbox zero` and `getinboxzero`. Any hit
  outside the allowlist fails the build with exit 6. This was tested by injecting
  "Inbox Zero Inc … Rakazo" into a page; the result was exit 6.
- Required rules fail with exit 4 when upstream changes the text they target. This was
  tested by breaking the `footer-notice` rule; the result was exit 4.
- New brand-named files are renamed by pattern, and new images are OCR-scanned.
  New raster logos that OCR cannot read are a known gap (see LICENSE-REVIEW.md).

### 5. Rollback

*Actions › rollback › Run workflow › ref = `deploy-…` tag or any commit SHA.* This checks out
that ref, rebuilds it against the upstream SHA pinned in it, redeploys, and tags `rollback-…`.
Cloudflare Pages also keeps every deployment, so you can roll back instantly in the dashboard
under Pages › Deployments › ⋯ › Rollback.

### 6. Feasibility: what "always in sync" can and cannot mean

- **Overlay conflicts are inevitable.** The brand overlay is text substitution plus a few
  targeted rules. When upstream rewrites the footer, testimonials or the company copy,
  a required rule stops matching and the sync stops (exit 4) until someone updates
  `brand.json`. This is deliberate: it is better than shipping old branding.
- **Upstream breaking changes** (Node or pnpm bumps, a framework major, new build-time data
  feeds, new env-dependent pages) can break the build. Sync PRs then fail CI and need a human.
- **Build-time network dependencies.** The upstream build fetches the integration catalogue and
  GitHub data (stars, releases). The overlay keeps the integration-claims feed on
  `app.rakazo.com` (the only source; it is not shown to users). If upstream takes it down or
  changes it, the build breaks.
- **Hosted-only parts of the live site are not in this repo, or are Vercel-specific:** the
  product at `app.rakazo.com` (the "Get started" target), markdown content negotiation
  (`middleware.ts`), the `/api/download` function (replaced here by a static 302 to GitHub
  releases), the www→apex host redirect, analytics and chat keys (`PUBLIC_POSTHOG_*`,
  `PUBLIC_CRISP_WEBSITE_ID`, unset here), and a real 404 page.
- **The full product is not a static site.** web, api, worker, desktop and mobile need Docker,
  PostgreSQL, object storage, sandbox/computer providers, model API keys and email. It cannot run
  on Cloudflare Pages. Running a WhatEverFi product instance would be a separate self-hosting
  project (see `docs/self-host*.md` upstream). Until then, `app.whateverfi.com` does not exist.
- **No owned repo or credentials yet.** None of the workflows have run on GitHub. They are
  written and validated with actionlint, and the sync script was run locally end to end.
- **Human merge gate.** Updates reach production only after a person merges a sync PR. With a
  6-hour cron and a human review, the site lags upstream by hours to days, not seconds.
- **Legal and brand items** must be resolved before public launch (testimonials, mascot artwork,
  terms and privacy text written for another company, the commercial Aeonik font). See
  `LICENSE-REVIEW.md`.

### Appendix: environment variables of the full self-hosted product (names only)

Informational only, taken from upstream `.env.example` at the pinned SHA. **Not needed for
this static site.** The static site uses only `PUBLIC_POSTHOG_KEY`, `PUBLIC_POSTHOG_HOST`,
`PUBLIC_CRISP_WEBSITE_ID` and `GITHUB_TOKEN` (all optional). Upstream names prefixed
`RAKAZO_` are code identifiers and are listed unchanged.

| Area | Variable names |
|---|---|
| Core / URLs / runtime | `AGENT_RUNTIME`, `API_HOST`, `API_URL`, `CLIENT_IP_HEADER`, `DATA_DIR`, `DOCKER_SOCKET`, `EXPO_ACCESS_TOKEN`, `EXPO_PUBLIC_DEFAULT_UI_LOCALE`, `GIT_SHA`, `GRAPHILE_WORKER_CONCURRENCY`, `LOG_FORMAT`, `LOG_LEVEL`, `NODE_ENV`, `TRUSTED_PROXIES`, `VITE_DEFAULT_UI_LOCALE`, `WAKEUP_DRIVER`, `WEB_ORIGIN` |
| Database | `DATABASE_MIGRATION_URL`, `DATABASE_URL`, `DB_POOL_MAX`, `POSTGRES_APP_PASSWORD`, `POSTGRES_DB`, `POSTGRES_EFFECTIVE_CACHE_SIZE`, `POSTGRES_HOST_PORT`, `POSTGRES_MEMORY_LIMIT`, `POSTGRES_PASSWORD`, `POSTGRES_SHARED_BUFFERS`, `POSTGRES_USER` |
| Auth / accounts | `AUTH_BREACHED_PASSWORD_CHECK_ENABLED`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `MESSAGING_OPEN_SIGNUP`, `PASSKEY_ANDROID_CERT_SHA256`, `PASSKEY_APPLE_APP_IDS`, `SCIM_BEARER_TOKEN`, `SIGNUPS_ENABLED`, `SIGNUP_ALLOWLIST`, `USER_DEVICES_ENABLED` |
| Encryption / secrets | `AWS_KMS_ACCESS_KEY_ID`, `AWS_KMS_KEY_ARN`, `AWS_KMS_SECRET_ACCESS_KEY`, `CONTENT_ENCRYPTION`, `ENCRYPTION_KEY`, `ENCRYPTION_MASTER_KEYS`, `INFISICAL_ALLOW_INSECURE_HTTP`, `INFISICAL_CLIENT_ID`, `INFISICAL_CLIENT_SECRET`, `INFISICAL_ENVIRONMENT`, `INFISICAL_FOLDER`, `INFISICAL_PROJECT_ID`, `INFISICAL_URL`, `MASTER_KEY_PROVIDER`, `SECRET_STORE` |
| Models / AI | `ANTHROPIC_API_KEY`, `BOAT_API_KEY`, `BOAT_API_URL`, `CURSOR_API_KEY`, `DEEPSEEK_API_KEY`, `FISH_TTS_MODEL`, `MAX_TOOL_CALLS_PER_TURN`, `MEDIA_GENERATION_API_KEY`, `MEDIA_GENERATION_BASE_URL`, `MEDIA_GENERATION_IMAGE_MODEL`, `MEDIA_GENERATION_PROVIDER`, `MEDIA_GENERATION_VIDEO_MODEL`, `MODEL_CONNECT_TIMEOUT_MS`, `MODEL_STREAM_IDLE_TIMEOUT_MS`, `MODEL_STREAM_MAX_RETRIES`, `MODEL_STREAM_TIMEOUT_MS`, `NOVITA_API_KEY`, `OPENROUTER_API_KEY`, `PI_DEFAULT_CREDENTIALS`, `PI_DEFAULT_MODEL`, `PI_DEFAULT_PROVIDER`, `PI_SESSION_RECORDING`, `TEAM_CHAT_BOT_ID`, `TEAM_CHAT_JUDGE_MODEL`, `TEAM_CHAT_JUDGE_PROVIDER`, `TYPESAFE_API_KEY` |
| Sandboxes / computers | `BOXD_API_KEY`, `BOXD_ORG`, `CLOUD_AGENT_PROVIDER`, `CLOUD_AGENT_SPACE_ID`, `COMPUTER_MAX_ACTIVE_MS`, `COMPUTER_MAX_ACTIVE_UNBILLED_MS`, `COMPUTER_SETTINGS_ENABLED`, `CREATEOS_SANDBOX_API_KEY`, `CREATEOS_SANDBOX_BASE_URL`, `CREATEOS_SANDBOX_ROOTFS`, `CREATEOS_SANDBOX_SHAPE`, `DAYTONA_API_KEY`, `DAYTONA_API_URL`, `DAYTONA_SNAPSHOT`, `DAYTONA_TARGET`, `E2B_API_KEY`, `INCUS_SANDBOX_CLIENT_CERT`, `INCUS_SANDBOX_CLIENT_KEY`, `INCUS_SANDBOX_COMPUTER_IMAGE`, `INCUS_SANDBOX_CPU_LIMIT`, `INCUS_SANDBOX_MEMORY_LIMIT`, `INCUS_SANDBOX_PROCESS_LIMIT`, `INCUS_SANDBOX_PROJECT`, `INCUS_SANDBOX_SERVER_CERT`, `INCUS_SANDBOX_URL`, `INSTABOX_API_KEY`, `RAILWAY_API_TOKEN`, `RAILWAY_ENVIRONMENT_ID`, `RAILWAY_MAX_WORKSPACE_FILE_BYTES`, `SANDBOX_COMMAND_TIMEOUT_MS`, `SANDBOX_COMPUTER_DNS`, `SANDBOX_COMPUTER_EGRESS`, `SANDBOX_COMPUTER_MOUNTS`, `SANDBOX_CONTROL_VIA_LOOPBACK`, `SANDBOX_IDLE_MS`, `SANDBOX_MAX_COMPUTERS_PER_SPACE`, `SANDBOX_MAX_COMPUTERS_PER_USER`, `SANDBOX_PROVIDER`, `SANDBOX_SUPERVISOR_TOKEN`, `SANDBOX_SUPERVISOR_URL`, `SANDBOX_TEAM_SCREEN_LIMIT`, `SANDBOX_TEMPLATE`, `SCREEN_PROXY_SECRET`, `WUYING_ACCESS_KEY_ID`, `WUYING_ACCESS_KEY_SECRET`, `WUYING_DESKTOP_ID`, `WUYING_END_USER_ID`, `WUYING_MCP_TOKEN`, `WUYING_MCP_URL`, `WUYING_REGION_ID` |
| Integrations / MCP | `COMPOSIO_API_KEY`, `INTEGRATIONS_CATALOG_URL`, `MCP_ALLOW_PRIVATE_ENDPOINT`, `MCP_DISCOVERY_TIMEOUT_MS`, `MCP_MAX_PAGES`, `MCP_MAX_TOOLS`, `MCP_PACKAGES_DIR`, `MCP_STDIO_ALLOWED_COMMANDS`, `MCP_STDIO_ENABLED`, `MCP_STDIO_IDLE_MS`, `MCP_STDIO_INSTALL_TIMEOUT_MS`, `MCP_STDIO_STARTUP_TIMEOUT_MS`, `PIPEDREAM_CLIENT_ID`, `PIPEDREAM_CLIENT_SECRET`, `PIPEDREAM_ENVIRONMENT`, `PIPEDREAM_PROJECT_ID` |
| Messaging channels | `BOT_MESSAGE_MAX_HOPS`, `LARK_APP_ID`, `LARK_APP_SECRET`, `LARK_DOMAIN`, `LARK_ENCRYPT_KEY`, `LARK_VERIFICATION_TOKEN`, `PHONE_CALLS_ENABLED`, `PHONE_CALL_COOLDOWN_MINUTES`, `PHONE_CALL_RING_SECONDS`, `PHOTON_PROJECT_ID`, `PHOTON_PROJECT_SECRET`, `PHOTON_WEBHOOK_SECRET`, `SENDBLUE_API_KEY_ID`, `SENDBLUE_API_SECRET`, `SENDBLUE_PHONE_NUMBER`, `SENDBLUE_SIGNING_SECRET`, `SLACK_BOT_TOKEN`, `SLACK_CLIENT_ID`, `SLACK_CLIENT_SECRET`, `SLACK_SIGNING_SECRET`, `TEAMS_APP_ID`, `TEAMS_APP_PASSWORD`, `TEAMS_APP_TENANT_ID`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_WEBHOOK_SECRET_TOKEN`, `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_APP_SECRET`, `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_VERIFY_TOKEN` |
| Email | `EMAIL_API_KEY`, `EMAIL_EMULATOR`, `EMAIL_FROM`, `EMAIL_PROVIDER`, `EMAIL_REPLY_TO`, `INBOUND_EMAIL_DOMAIN`, `INBOUND_EMAIL_RELAY_ARC_DOMAIN`, `INBOUND_EMAIL_SECRET`, `SMTP_URL`, `WELCOME_EMAIL_ENABLED` |
| Storage | `MAX_ATTACHMENTS_PER_MESSAGE`, `MAX_UPLOAD_SIZE_MB`, `OBJECT_STORAGE_ACCESS_KEY_ID`, `OBJECT_STORAGE_BUCKET`, `OBJECT_STORAGE_ENDPOINT`, `OBJECT_STORAGE_PATH_STYLE`, `OBJECT_STORAGE_PREFIX`, `OBJECT_STORAGE_REGION`, `OBJECT_STORAGE_SECRET_ACCESS_KEY` |
| Billing / payments | `PAID_SERVICES_API_KEY`, `PAID_SERVICES_BASE_URL`, `PAID_SERVICES_PROVIDER`, `PAYMENT_WALLET_CLIENT_ID`, `PAYMENT_WALLET_PROVIDER`, `STRIPE_PRICE_ID`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` |
| Observability / analytics / audit | `ANALYTICS_HOST`, `ANALYTICS_KEY`, `ANALYTICS_PROVIDER`, `ANALYTICS_PSEUDONYM_SECRET`, `AUDIT_EVENT_RETENTION_DAYS`, `AUDIT_LOG_WEBHOOK_AUTHORIZATION`, `AUDIT_LOG_WEBHOOK_URL`, `AXIOM_DATASET`, `AXIOM_EDGE`, `AXIOM_EDGE_URL`, `AXIOM_TOKEN`, `CRISP_WEBSITE_ID`, `OTEL_CAPTURE_CONTENT`, `OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_EXPORTER_OTLP_HEADERS`, `OTEL_SERVICE_NAME`, `PUBLIC_CRISP_WEBSITE_ID`, `PUBLIC_POSTHOG_HOST`, `PUBLIC_POSTHOG_KEY`, `SECURITY_EVENT_RETENTION_DAYS`, `SENTRY_BROWSER_DSN`, `SENTRY_DSN`, `SENTRY_ENVIRONMENT`, `SENTRY_RELEASE` |
| Upstream-prefixed deployment & tuning (RAKAZO_*) | `RAKAZO_ADMIN_EMAILS`, `RAKAZO_API_MEMORY_LIMIT`, `RAKAZO_AUTO_REVIEW_MIN_CONFIDENCE`, `RAKAZO_AUTO_REVIEW_MODEL`, `RAKAZO_AUTO_REVIEW_PROVIDER`, `RAKAZO_COMPOSE_FILE`, `RAKAZO_COMPUTER_CPUS`, `RAKAZO_COMPUTER_MEMORY`, `RAKAZO_COMPUTER_PIDS_LIMIT`, `RAKAZO_CSP_CONNECT_SRC`, `RAKAZO_CSP_SCRIPT_SRC`, `RAKAZO_DEPLOY_DIR`, `RAKAZO_DEV_RUN_WITH`, `RAKAZO_DEV_TAILNET`, `RAKAZO_EXTRA_AUTH_ORIGINS`, `RAKAZO_IMAGE`, `RAKAZO_IMAGE_TAG`, `RAKAZO_IMAGE_TAG_PREVIOUS`, `RAKAZO_LOCAL_CONTEXT_WINDOW`, `RAKAZO_LOCAL_MAX_TOKENS`, `RAKAZO_LOCAL_MODELS`, `RAKAZO_LOCAL_MODELS_API_KEY`, `RAKAZO_LOCAL_MODELS_URL`, `RAKAZO_LOCAL_REASONING_MODELS`, `RAKAZO_LOCAL_VISION_MODELS`, `RAKAZO_MESSAGE_USER_MAX_CHARS`, `RAKAZO_MIN_CLIENT_BUILD`, `RAKAZO_NAV_LINKS`, `RAKAZO_OPENAI_COMPATIBLE_VISION_MODELS`, `RAKAZO_OPENAI_COMPAT_ALLOW_PUBLIC`, `RAKAZO_OPENAI_COMPAT_PRIVATE_HOSTS`, `RAKAZO_SECRETS_ALLOW_PRIVATE_HTTP`, `RAKAZO_THEME`, `RAKAZO_UPDATER_IMAGE`, `RAKAZO_UPDATER_IMAGE_TAG`, `RAKAZO_UPDATER_TOKEN`, `RAKAZO_UPDATE_SERVICES`, `RAKAZO_WEB_BIND`, `RAKAZO_WORKER_MEMORY_LIMIT` |
| Other | `TICKET_BOARD_ENABLED`, `VOICE_SUMMARY_MIN_CHARS` |

266 names in total. Values belong in a secret manager, never in this repo.
