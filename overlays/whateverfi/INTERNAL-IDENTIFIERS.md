# Internal identifiers that stay `rakazo` / `RAKAZO_*`

These are runtime, package, and protocol names. Renaming them would break
weekly upstream sync, existing self-host `.env` files, and installed clients.
They are not shown as the product name in the UI. Do not "clean" them as
branding debt.

| Identifier                                                                                                                                                                         | Where                       | Risk of renaming                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------ |
| `@rakazo/*` npm scope                                                                                                                                                              | workspace packages          | Breaks every import; leave until a coordinated package rename.           |
| `RAKAZO_*` environment variables (`RAKAZO_HOST`, `RAKAZO_IMAGE`, `RAKAZO_IMAGE_TAG`, `RAKAZO_WEB_BIND`, `RAKAZO_WEB_PORT`, `RAKAZO_API_PORT`, and others in `.env.images.example`) | Compose and docs            | Breaks every existing self-host `.env` and Abacus deploy.                |
| Compose project name `rakazo`; Postgres user `rakazo`, database `rakazo`, app role `rakazo_app`                                                                                    | `infra/compose`             | Breaks migrations and running volumes.                                   |
| Mobile bundle ID `com.rakazo.app` and app groups                                                                                                                                   | `apps/mobile`               | Needs Apple / Google / Expo accounts; do not change until those exist.   |
| `Rakazo.icon` filename                                                                                                                                                             | `packages/ui-tokens/assets` | Electron / Xcode asset catalog name; referenced by desktop package.json. |
| `RakazoPage`, `isRakazoHealth`, `data-rakazo-*`, `@rakazo/contracts` types                                                                                                         | source                      | Internal APIs; renaming is a large refactor with no user-facing benefit. |
| `PRECACHE_PLACEHOLDER = "__RAKAZO_SW_PRECACHE__"` and similar                                                                                                                      | service worker              | Build-time placeholders; not shown to users.                             |
| "Based on Rakazo (Apache-2.0)" and `Copyright 2026 Rakazo contributors`                                                                                                            | LICENSE, footers, about     | Required attribution. Never remove.                                      |

The product name, tab title, and home-screen name are **WhatEverFi**.
`overlays/whateverfi/scripts/branding-guard.sh` fails a build if
`<title>Rakazo</title>` or `apple-mobile-web-app-title` "Rakazo" comes back
in the web or desktop shells (source or built `apps/web/dist/index.html`).
