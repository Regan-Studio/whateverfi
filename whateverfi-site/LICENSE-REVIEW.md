# License & brand review — read before public launch

Status: **not legal advice**. This lists what the automation does and what a human (ideally
counsel) must decide before whateverfi.com is published. Upstream examined:
elie222/rakazo `main` @ `1115613b8d007328c5a625a1cc2b096161a5788c` (2026-11-12).

## License findings (upstream)

| Item | Finding |
|---|---|
| License | Apache License 2.0 (root `LICENSE`; `package.json` and `apps/www/package.json` say `Apache-2.0`). |
| Copyright line | `Copyright 2026 Rakazo contributors` (appendix of LICENSE). The site says it is maintained by Inbox Zero Inc. |
| NOTICE file | None upstream, so §4(d) adds no notice text to carry. We add our own `NOTICE` (allowed by §4(d)). |
| Other licenses / `ee/` | None. No `ee/` or commercial folder; `LICENSE` is the only license file outside `node_modules`. |
| Trademarks | Apache-2.0 §6 grants **no** trademark rights. Upstream terms page: "It does not grant rights to the Rakazo name or logo; do not use them in a way that suggests we operate or endorse something we do not." |
| Modified-file notice | §4(b) requires modified files to carry prominent change notices. Met by `NOTICE` + `overrides/brand.json`, which is the exact list of changes. |

## What the overlay does (per the user's instruction: Rakazo → WhatEverFi, company → Regan.Studio)

- Every user-facing "Rakazo" becomes "WhatEverFi": titles, meta/OG/Twitter tags, JSON-LD, UI copy,
  docs pages, llms.txt and `.md` endpoints, the header wordmark, brand-kit wordmark images, social
  cards (the 38 OG images are re-rendered, `og-image.png` is patched), and text inside screenshots
  (rewritten via OCR).
- "Inbox Zero Inc." / "Inbox Zero" become "Regan.Studio". The footer links to https://regan.studio.
- `rakazo.com` URLs and e-mail addresses become `whateverfi.com` (`hello@`, `security@`).
- `scripts/verify-build.mjs` fails the build if the old names are still visible: text, SEO
  metadata, JS-bundled copy, or OCR of images.

## Exceptions kept on purpose (disclosed)

1. **Attribution.** `LICENSE` (with "Copyright 2026 Rakazo contributors") is unmodified. `NOTICE`
   and `/NOTICE.txt` (linked from every page footer as "Apache-2.0 · Open-source notices") name
   elie222/rakazo and Inbox Zero Inc. Removing these would misstate ownership and breach §4.
2. **Repository and third-party URLs** that contain "rakazo" are kept so they stay accurate:
   github.com/elie222/rakazo (source, docs, releases, star count, "Recent updates" list),
   ghcr.io images, raw.githubusercontent install script, App Store / Play Store listings,
   x.com/rakazobot, and the catalog bucket. The visible link text is rebranded; the URLs are not.
3. **Technical identifiers inside code samples** of the self-host docs, such as `/srv/rakazo`,
   the `rakazo` database/user, `rakazo://` URL schemes and `RAKAZO_*` env vars. These are names
   the upstream software really uses, so renaming them would break the instructions.
4. **Build-time data feeds** (integration catalog, integration claims, GitHub API) still read from
   upstream sources. They are never rendered as brand text.

## Must be decided or replaced before launch

| # | Item | Why | Default applied |
|---|---|---|---|
| 1 | **Mascot / app icon / favicons / brand-kit mascot** (`/brand/whateverfi-mark.png`, `icon-*.png`, `favicon*`, `apple-touch-icon.png`, `brand/kit/whateverfi-{icon,mascot}*`) | This is the upstream logo artwork. §6 gives no rights to it. | Kept, because there is no replacement art. **Replace with Regan.Studio-owned artwork.** |
| 2 | **Testimonials** with real @handles (@dilog1114, @bc101101, @michaelortnerit, @notabot_92732, @hey_cabron, @mithril0x) | These are quotes about Rakazo. Rebranding them would fabricate endorsements. | **Removed** (array emptied, section hidden). |
| 3 | **Terms and Privacy pages** | Inbox Zero's legal text, mechanically rebranded to Regan.Studio (postal address removed). Regan.Studio has not adopted these terms. | Rebranded and flagged. **Legal must rewrite or approve them.** |
| 4 | **Product claims**: pricing, "WhatEverFi Cloud is in beta at app.whateverfi.com", plans and credits, enterprise, support chat, iOS/Android/desktop apps | These describe the upstream hosted service. app.whateverfi.com does not exist (no DNS at check time). Desktop downloads (`/api/download` → GitHub releases) and store links deliver **upstream-branded** apps. | Rebranded text, links unchanged. **Decide:** run the product, rewrite the pages, or remove them. |
| 5 | **Plugin submission form** (`/plugins/submit/`) | It now posts to `https://app.whateverfi.com/api/v1/plugin-submissions`, which does not exist. | Broken until a backend exists, or the page is removed. |
| 6 | **Mailboxes** hello@ / security@whateverfi.com | Referenced site-wide. Not verified to exist. | Rebranded. Create them, or change the rule. |
| 7 | **Font** `public/fonts/aeonik-medium.woff` (Aeonik, a commercial typeface) | Shipped by upstream. Its license is not Apache-2.0 and may not cover redistribution by Regan.Studio. | Kept. **Verify the license or swap the font.** |
| 8 | **Third-party logos** (integration, sandbox and voice provider logos; Grok comparison screenshots) | Nominative use of third-party marks. | Kept as upstream uses them. |
| 9 | **"Recent updates" and GitHub star count** | Pulled live from elie222/rakazo at build time. They show upstream PRs and stars as if they were WhatEverFi's. | Kept; it is accurate about the source code. |
| 10 | **SEO duplicate content** | The site is near-identical to rakazo.com. | Canonicals point to whateverfi.com. |
