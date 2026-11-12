# lc.cx

lc.cx provides URL shortening, branded domains, workspaces, tags, click statistics, and QR code generation through its API.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/lc-cx/.

## Actions

- **Create Short Link**: Shorten one destination URL on lc.cx, optionally choosing its path, tags, note, and workspace.
- **Create Tags**: Create one or more tags in a workspace and return their ids for attaching to short links.
- **Delete Short Link**: Permanently delete one short link.
- **Delete Tag**: Permanently delete one tag from the selected workspace.
- **Get Account Context** (read-only): Return lc.cx plan and short-link quota information together with available domains and workspaces needed to create and route short links.
- **Get Short Link** (read-only): Retrieve one short link by its lc.cx link id from the selected workspace.
- **List Short Links** (read-only): Return one page of recently created short links in the selected workspace, with an offset for the next page when one may exist.
- **List Tags** (read-only): Return all tags available in the selected workspace for organizing short links.
- **Update Short Link**: Update a short link's destination, note, or complete tag assignment.
- **Update Tag**: Update the name or color of one tag in the selected workspace.
