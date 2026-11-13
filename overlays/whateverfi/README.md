# WhatEverFi branding overlay

This folder is the source of truth for WhatEverFi / Regan.Studio branding applied
on top of the imported `elie222/rakazo` engine.

- `brand.json` — rewrite rules (domains, GitHub/GHCR links, visible brand names)
- `scripts/apply-overlay.mjs` — applies rules; never touches `LICENSE` or
  `Copyright 2026 Rakazo contributors`
- `scripts/branding-guard.sh` — CI check
- `scripts/rebrand-assets.py` — optional wordmark / screenshot rebrand
- `files/` — verbatim copies (download page)
- `GHCR-UNPUBLISHED.md` — `ghcr.io/regan-studio/whateverfi` images are not live yet

The weekly workflow at `.github/workflows/whateverfi-product-sync-upstream.yml`
fast-forwards `upstream-mirror`, merges, reapplies this overlay, runs tests,
gitleaks, and the branding guard, and opens a PR. It never auto-merges.
