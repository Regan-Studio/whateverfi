# whateverfi-site

Builds **whateverfi.com** (brand: WhatEverFi, company: Regan.Studio) from the marketing site
(`apps/www`, Astro static output) of the Apache-2.0 project
[elie222/rakazo](https://github.com/elie222/rakazo). The upstream code is never edited in this
repo: every build fetches a pinned upstream commit and applies a small, declarative overlay.

```
upstream.json              upstream repo, branch, pinned SHA, Node/pnpm versions
overrides/brand.json       all brand/domain/company rules + verification allowlist (single source of truth)
overrides/patches/*.patch  optional structural patches (git apply; a conflict stops the sync)
overrides/files/           files copied verbatim into the checkout (public/NOTICE.txt)
scripts/sync-upstream.sh   fetch -> patch -> overlay -> assets -> install -> OG render -> build -> astro check -> verify -> dist/
scripts/apply-overlay.mjs  text rules + brand-named file renames; fails if a required rule stops matching
scripts/rebrand-assets.py  regenerates wordmark images; OCR-rewrites the name inside screenshots
scripts/verify-build.mjs   fails the build if "Rakazo"/"Inbox Zero" is visible anywhere (text, SEO, JS copy, OCR of images)
scripts/postbuild.mjs      vercel.json redirects/headers -> Cloudflare Pages _redirects/_headers
scripts/deploy.sh          DEPLOY_TARGET=none|cloudflare-pages
scripts/cloudflare-attach-domain.sh  one-time, human-run custom-domain attach (changes live DNS)
.github/workflows/         sync-upstream (6-hourly PRs), ci, deploy, rollback
```

Local build (Node >= 24.15, corepack, Chrome, python3-pil, tesseract):

```bash
scripts/sync-upstream.sh --ocr            # pinned upstream -> dist/
scripts/sync-upstream.sh --ref latest     # try upstream HEAD without pinning
npx serve dist                            # or any static server
```

See [DEPLOY.md](DEPLOY.md) for deployment, DNS and the update process, and
[LICENSE-REVIEW.md](LICENSE-REVIEW.md) for what must be reviewed before public launch.
License: Apache-2.0 (see LICENSE and NOTICE).
