# WhatEverFi branding overlay

This folder is the source of truth for WhatEverFi / Regan.Studio branding applied
on top of the imported `elie222/rakazo` engine.

- `brand.json` — rewrite rules (domains, GitHub/GHCR links, visible brand names)
- `scripts/apply-overlay.mjs` — applies rules, copies `files/`, runs rebrand; never
  touches `LICENSE` or `Copyright 2026 Rakazo contributors`
- `scripts/rebrand-assets.py` — restores live kit/OG assets; generates any new
  upstream Open Graph cards with a WhatEverFi lockup
- `scripts/postbuild.mjs` — after `apps/www` build, writes `_redirects` (including
  `/api/download` → `https://app.whateverfi.com/`), `_headers`, and `build-info.json`
- `scripts/branding-guard.sh` — CI check (source branding, no elie222 install links,
  built `_redirects` / `build-info.json`, no Rakazo text in marketing images)
- `scripts/check-branded-images.py` — OCR + golden-hash image check used by the guard
- `files/` — verbatim copies (README, SECURITY, CONTRIBUTING, CODE_OF_CONDUCT,
  issue/PR templates, docs/readme-hero.png, download page, RepoCard note, live
  WhatEverFi kit and social cards)
- `GHCR-UNPUBLISHED.md` — `ghcr.io/regan-studio/whateverfi` images are not live yet

Do not restore the Abacus-generated `NOTICE.txt`. Attribution is the Apache-2.0
LICENSE plus the footer / about line “Based on Rakazo (Apache-2.0)” linking
`/about/#license`.

The weekly workflow at `.github/workflows/whateverfi-product-sync-upstream.yml`
fast-forwards `upstream-mirror`, merges, reapplies this overlay, runs tests,
gitleaks, a marketing-site build, and the branding guard, and opens a PR. It
never auto-merges.
