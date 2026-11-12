# Orshot

Orshot generates images, PDFs, and videos from templates and manages workspace templates, brand assets, and social publishing.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/orshot/.

## Actions

- **Add Brand Color**: Save a hex, RGB, HSL, or gradient color to the workspace brand assets and return its new ID.
- **Delete Brand Color**: Permanently delete one saved workspace brand color by ID.
- **Get Profile** (read-only): Return the authenticated Orshot profile and the IDs, names, and slugs of its accessible workspaces.
- **Get Studio Template** (read-only): Return one Studio template's metadata, pages, and available render modifications by template ID.
- **List Brand Assets** (read-only): List one category of workspace brand assets, optionally requiring all supplied tags.
- **List Social Accounts** (read-only): Return connected social-account IDs and platforms, optionally checking whether each account needs reconnection.
- **List Studio Templates** (read-only): Return one filtered page of Studio templates in the API key's workspace, with an opaque cursor for the next page.
- **Render Studio Template**: Render an owned Studio template as an image or PDF URL/base64 result.
