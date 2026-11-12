# Inblog

Inblog is an AI-powered blogging platform for managing posts, authors, tags, redirects, design settings, analytics, and lead forms.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/inblog/.

## Actions

- **Create or Update Redirect**: Create a URL redirect when redirect_id is omitted, or partially update that redirect when redirect_id is provided.
- **Create or Update Tag**: Create a tag when tag_id is omitted, or partially update that tag when tag_id is provided.
- **Create Post**: Create an unpublished draft post with content, SEO metadata, and optional tag and author assignments.
- **Get Analytics** (read-only): Return a bounded blog or post analytics report for traffic trends, traffic sources, or per-post performance.
- **Get Blog** (read-only): Return the connected API key's blog identity, plan, domain, locale, timezone, assets, and integration settings.
- **List Posts** (read-only): List and filter posts in the connected blog, one page at a time, optionally including tags and authors.
- **List Redirects** (read-only): List the blog's URL redirect rules one page at a time.
- **List Tags** (read-only): Return all tags available in the connected blog for discovery and post assignment.
- **Set Post Publication**: Publish, unpublish, or schedule an existing Inblog post.
- **Update Post**: Partially update a post's content, SEO metadata, or complete tag and author assignments without changing publication state.
