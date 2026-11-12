# Google Data Studio

Google Data Studio is Google's business intelligence platform for creating dashboards and reports; its Asset API searches organizational assets and manages their sharing permissions.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/google-data-studio/.

## Actions

- **Add Members to Asset Role**: Ensure one or more members belong to a mutable asset role and verify each requested membership after the write.
- **Get Asset Permissions** (read-only): Get every populated permission role and the current concurrency etag for one Google Data Studio asset.
- **Replace Asset Permissions**: Replace all four mutable permission-role memberships for a Google Data Studio asset, preserving owners and rejecting stale etags.
- **Revoke Asset Member Permissions**: Remove one or more members from every removable role on a Google Data Studio asset and verify whether each was removed or already absent.
- **Search Assets** (read-only): Search accessible Google Data Studio reports or data sources and return one page of asset metadata.
