# WoopSocial

WoopSocial provides social media publishing, scheduling, media, project, account, and webhook management through its REST API.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/woop-social/.

## Actions

- **Create Draft Post**: Save a post as a WoopSocial draft without publishing it externally.
- **Create Project**: Create a WoopSocial project in the API key's organization.
- **Delete Media**: Permanently delete one WoopSocial media-library item by its exact, explicitly supplied media ID.
- **Delete Post**: Permanently delete a parent post by its exact ID.
- **Delete Project**: Permanently delete a WoopSocial project by an exact, explicitly supplied project ID.
- **Delete Social Account**: Permanently remove a connected social account from WoopSocial using its exact ID.
- **Delete Social Account Post**: Permanently delete one social-account-specific post delivery using its exact delivery ID.
- **Delete Webhook**: Permanently delete one WoopSocial webhook endpoint using its exact, explicitly supplied webhook ID.
- **Get Post** (read-only): Get a parent post and its per-social-account delivery records by post ID.
- **Get Social Account Platform Inputs** (read-only): Get dynamic Pinterest board choices or TikTok posting-policy options for a connected social account before constructing a post target.
- **List Media** (read-only): List one page of WoopSocial media-library items, optionally filtered by project or exact media IDs.
- **List Projects** (read-only): List all projects accessible to the connected WoopSocial API key.
- **List Social Account Posts** (read-only): List one page of per-account post deliveries, optionally filtered by projects, social accounts, parent posts, platforms, or delivery…
- **List Social Accounts** (read-only): List connected social accounts available for publishing, optionally within one project.
- **List Webhooks** (read-only): List registered WoopSocial webhook endpoints and their subscribed events.
- **Publish Post Now**: Publish a post to external social platforms now.
- **Register Webhook**: Register a public HTTPS endpoint for WoopSocial publishing-success and/or publishing-failure events.
- **Schedule Post**: Schedule automatic future publication to external social platforms.
- **Upload Media**: Upload one image or video of at most 100 MB into a WoopSocial project using the atomic multipart endpoint.
- **Validate Post** (read-only): Validate a proposed WoopSocial post without creating it.
