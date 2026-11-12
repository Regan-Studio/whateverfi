# Siteleaf

A friendly CMS for static sites. Powered by Jekyll, with GitHub sync, and a complete API.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/siteleaf/.

## Actions

- **Cancel Job**: Cancel an active Siteleaf job by job ID.
- **Create Collection**: Create a content collection in a Siteleaf site.
- **Create Collection File**: Upload one static file to a Siteleaf collection identified by its path.
- **Create Document**: Create a document in a Siteleaf collection with content, taxonomy, metadata, and visibility.
- **Create or Replace Source File**: Create or replace one raw source file in a Siteleaf site.
- **Create Page**: Create a page in a Siteleaf site.
- **Create Role**: Grant a Siteleaf user an admin, publisher, or writer role on a site.
- **Create Site**: Create a Siteleaf site with its domain, timezone, metadata, and defaults.
- **Delete Collection**: Permanently delete a Siteleaf collection by site ID and collection path.
- **Delete Document**: Permanently delete a Siteleaf document by ID.
- **Delete Page**: Permanently delete a Siteleaf page by ID.
- **Delete Role**: Delete a Siteleaf role by ID, removing the user's access to its site.
- **Delete Site**: Permanently delete a Siteleaf site by ID.
- **Delete Source File**: Permanently delete one raw source file from a Siteleaf site.
- **Get Collection** (read-only): Get a collection by site ID and collection path.
- **Get Current User** (read-only): Return the Siteleaf user authenticated by the connected API key.
- **Get Document** (read-only): Get a Siteleaf document by ID.
- **Get Job** (read-only): Get the complete buffered status stream for a Siteleaf job, including all status events and the latest status details.
- **Get Page** (read-only): Get a Siteleaf page by ID.
- **Get Role** (read-only): Get a Siteleaf site-access role by ID.
- **Get Site** (read-only): Get one Siteleaf site by ID, including its settings and current or most recent preview, publish, and synchronization job states.
- **Get Site Taxonomy** (read-only): Return the unique post tags and categories used by a Siteleaf site.
- **Get Source** (read-only): Get raw source-file metadata or list a source directory for a Siteleaf site.
- **List Collection Files** (read-only): Search and list static files in a Siteleaf collection with sorting and agent-controlled pagination.
- **List Collections** (read-only): List content collections in a Siteleaf site with agent-controlled pagination.
- **List Documents** (read-only): Search and list documents in a Siteleaf collection with visibility, extension, sorting, and pagination filters.
- **List Pages** (read-only): Search and list pages in a Siteleaf site with visibility, extension, sorting, and pagination filters.
- **List Site Users** (read-only): List users who have access to a Siteleaf site with agent-controlled pagination.
- **List Sites** (read-only): List sites accessible to the connected Siteleaf account, with optional sorting and agent-controlled pagination.
- **Publish Site**: Start an asynchronous compile-and-publish job for a Siteleaf site and return its job ID.
- **Update Collection**: Update at least one of a collection's title, path, permalink, output behavior, or metadata.
- **Update Document**: Update at least one of a document's content, path, taxonomy, visibility, metadata, or date.
- **Update Page**: Update at least one of a page's content, path, visibility, metadata, or publication date.
- **Update Role**: Change an existing Siteleaf role to admin, publisher, or writer.
- **Update Site**: Update at least one of a site's title, domain, timezone, metadata, or Jekyll content defaults.
