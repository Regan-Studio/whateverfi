#!/usr/bin/env bash
# Fails if WhatEverFi / Regan.Studio branding is missing, Rakazo copyright was
# stripped from LICENSE, the product tab title or home-screen name is still
# Rakazo, or user-facing clone/install/issue/GHCR links still point at
# elie222/rakazo (except overlays, LICENSE, and documented exceptions).
# Usage: bash overlays/whateverfi/scripts/branding-guard.sh [repo-root]
# Exit 0 OK | 6 missing branding / stripped copyright | 7 forbidden links
set -euo pipefail
ROOT="$(cd "${1:-.}" && pwd)"
cd "$ROOT"
missing=0
forbidden=0

need() {
  local file="$1" needle="$2"
  if [[ ! -f "$file" ]]; then
    echo "MISSING file $file (expected to contain: $needle)" >&2
    missing=1
    return
  fi
  if ! grep -qF -- "$needle" "$file"; then
    echo "MISSING branding in $file: $needle" >&2
    missing=1
  fi
}

need "README.md" "WhatEverFi"
need "README.md" "Regan.Studio"
need "README.md" "Based on Rakazo"
need "README.md" "Apache-2.0"
need "LICENSE" "Copyright 2026 Rakazo contributors"
need "LICENSE" "Apache License"
need "apps/www/src/pages/about.astro" "WhatEverFi"
need "apps/www/src/pages/about.astro" "Regan.Studio"
need "apps/www/src/pages/about.astro" "Based on Rakazo (Apache-2.0)"
need "apps/www/src/components/Footer.astro" "Based on Rakazo"

# Tab title and home-screen name people see in the web and desktop shells.
need "apps/web/index.html" "<title>WhatEverFi</title>"
need "apps/web/index.html" 'name="apple-mobile-web-app-title" content="WhatEverFi"'
need "apps/desktop/src/setup.html" "<title>Set up WhatEverFi</title>"
need "apps/web/src/pwa/plugin.ts" 'name: "WhatEverFi"'
need "apps/web/src/pwa/plugin.ts" 'short_name: "WhatEverFi"'

# Fail if the product name or tab title has slipped back to Rakazo.
# "Based on Rakazo", LICENSE copyright, package scopes, and RAKAZO_* env names
# are not matched by these patterns.
forbid_product_title() {
  local file="$1"
  if [[ ! -f "$file" ]]; then
    return 0
  fi
  if grep -qE '<title>Rakazo(</title>|[[:space:]·—-])' "$file" \
    || grep -qE 'apple-mobile-web-app-title" content="Rakazo"' "$file" \
    || grep -qE 'name="application-name" content="Rakazo"' "$file"; then
    echo "FORBIDDEN: product title or home-screen name is still Rakazo in $file" >&2
    forbidden=1
  fi
}
forbid_product_title "apps/web/index.html"
forbid_product_title "apps/desktop/src/setup.html"
if [[ -f apps/web/dist/index.html ]]; then
  forbid_product_title "apps/web/dist/index.html"
  if ! grep -qF -- "<title>WhatEverFi</title>" apps/web/dist/index.html; then
    echo "MISSING <title>WhatEverFi</title> in apps/web/dist/index.html (built shell still unbranded)" >&2
    missing=1
  fi
fi
if [[ -f apps/www/dist/index.html ]]; then
  forbid_product_title "apps/www/dist/index.html"
fi
for f in apps/desktop/assets/es.lproj/InfoPlist.strings apps/desktop/assets/pl.lproj/InfoPlist.strings; do
  if [[ -f "$f" ]] && grep -qF -- "Rakazo" "$f"; then
    echo "FORBIDDEN: desktop permission prompt still says Rakazo in $f" >&2
    forbidden=1
  fi
done

# Clone/install/issue/GHCR links that should already have been retargeted.
# Allowed to mention elie222/rakazo: LICENSE (not present), overlays (rules),
# this script, PUSH-PLAN / GHCR-UNPUBLISHED, and the weekly sync workflow
# (it fetches the upstream remote).
tmp="$(mktemp)"
set +e
grep -RIn --binary-files=without-match \
  --exclude-dir=.git --exclude-dir=node_modules --exclude-dir=dist \
  --exclude-dir=.cache --exclude-dir=overlays --exclude-dir=.turbo \
  --exclude='branding-guard.sh' --exclude='GHCR-UNPUBLISHED.md' \
  --exclude='PUSH-PLAN.md' --exclude='LICENSE' \
  --exclude='whateverfi-product-sync-upstream.yml' \
  -e 'github.com/elie222/rakazo' \
  -e 'raw.githubusercontent.com/elie222/rakazo' \
  -e 'ghcr.io/elie222/rakazo' \
  -e 'api.github.com/repos/elie222/rakazo' \
  . > "$tmp"
grep_code=$?
set -e
if [[ "$grep_code" -eq 0 ]]; then
  echo "FORBIDDEN: elie222/rakazo source/install/issue/image link outside allowed files:" >&2
  cat "$tmp" >&2
  forbidden=1
elif [[ "$grep_code" -gt 1 ]]; then
  echo "branding-guard: grep failed with $grep_code" >&2
  rm -f "$tmp"
  exit 6
fi
rm -f "$tmp"

# Built marketing artifacts (run after `pnpm build`).
# The weekly sync builds first. The pull-request branding workflow may set
# BRANDING_GUARD_ALLOW_UNBUILT=1 to skip dist-only checks.
if [[ ! -d apps/www/dist ]]; then
  if [[ "${BRANDING_GUARD_ALLOW_UNBUILT:-}" == "1" ]]; then
    echo "branding-guard: skipping built-site checks (apps/www/dist missing, BRANDING_GUARD_ALLOW_UNBUILT=1)"
  else
    echo "MISSING apps/www/dist (run pnpm build before branding-guard)" >&2
    missing=1
  fi
else
  if [[ ! -f apps/www/dist/_redirects ]]; then
    echo "MISSING apps/www/dist/_redirects" >&2
    missing=1
  elif ! grep -qF -- '/api/download https://app.whateverfi.com/ 302' apps/www/dist/_redirects; then
    echo "MISSING /api/download -> app.whateverfi.com rule in apps/www/dist/_redirects" >&2
    missing=1
  fi
  if [[ ! -f apps/www/dist/build-info.json ]]; then
    echo "MISSING apps/www/dist/build-info.json" >&2
    missing=1
  elif ! grep -qF -- 'upstreamSha' apps/www/dist/build-info.json; then
    echo "MISSING upstreamSha in apps/www/dist/build-info.json" >&2
    missing=1
  fi
fi

if ! python3 overlays/whateverfi/scripts/check-branded-images.py "$ROOT"; then
  missing=1
fi

if [[ "$missing" -ne 0 ]]; then exit 6; fi
if [[ "$forbidden" -ne 0 ]]; then exit 7; fi
echo "branding-guard: OK"
