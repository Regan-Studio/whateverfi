# Rebrandly

Rebrandly is a link management platform for creating branded short links, managing domains and workspaces, and analyzing link performance.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/rebrandly/.

## Actions

- **Create Link**: Create one classic Rebrandly short link in a selected workspace.
- **Create Tag**: Create a tag for categorizing links in the default or selected Rebrandly workspace.
- **Delete Link**: Soft-delete a short link so it no longer redirects.
- **Delete Tag**: Delete a Rebrandly tag and remove that tag assignment from every associated link.
- **Get Account** (read-only): Return the connected Rebrandly account identity, current plan category, and account-specific usage limits.
- **Get Click Analytics** (read-only): Return time-grouped click analytics for the connected account, a workspace, account-owned domain, tag, or workspace teammate.
- **Get Domain** (read-only): Return details for one Rebrandly domain by public ID.
- **Get Link** (read-only): Return complete details for one Rebrandly short link by its public ID.
- **Get Tag** (read-only): Return one tag by its public ID from the default or selected Rebrandly workspace.
- **Get Workspace** (read-only): Return details, resource statistics, role, and plan context for one accessible Rebrandly workspace by public ID.
- **List Accessible Workspaces** (read-only): List workspaces the connected Rebrandly user can access, including shared workspaces not owned by the account.
- **List Account Domains** (read-only): List one cursor-paginated page of domains owned by the connected Rebrandly account, distinct from domains merely shared with a workspace.
- **List Domains** (read-only): List one cursor-paginated page of domains available to the default or selected Rebrandly workspace, with active and verification filters.
- **List Enabled Features** (read-only): List enabled or revoked Rebrandly features for the account or a workspace owner before calling feature-gated tools.
- **List Links** (read-only): List one cursor-paginated page of short links in the default or selected workspace, with exact domain, slashtag, creator, favourite, and…
- **List Revoked Entitlements** (read-only): List revoked Rebrandly workspaces, domains, and feature entitlements so an agent can diagnose why a formerly available resource or…
- **List Tags** (read-only): List or search one page of tags in the default or selected Rebrandly workspace so an agent can resolve tag IDs.
- **List Workspaces** (read-only): List one page of workspaces owned by the connected Rebrandly account so an agent can resolve workspace IDs, roles, and resource counts.
- **Search Links** (read-only): Search short links by destination, slashtag, or title, optionally narrowed to a domain.
- **Set Link Tag Assignment**: Ensure a tag is assigned to or removed from one Rebrandly short link according to the requested state.
- **Update Link**: Update a short link's destination, title, notes, or favourite status without changing its link type.
- **Update Tag**: Update at least one of a tag's name or color in the default or selected Rebrandly workspace.
