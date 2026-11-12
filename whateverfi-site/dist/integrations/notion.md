# Notion

Notion centralizes notes, docs, wikis, and tasks in a unified workspace, letting teams build custom workflows for collaboration and knowledge management

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/notion/.

## Actions

- **Add multiple content blocks (bulk, user-friendly)**: Efficiently adds multiple standard content blocks to a notion page in a single api call with automatic markdown parsing.
- **Create comment**: Adds a comment to a notion page (via parent page id) or to an existing discussion thread (via discussion id).
- **Create Notion Database**: Creates a new notion database as a subpage under a specified parent page with a defined properties schema.
- **Create Notion page**: Creates a new empty page in a notion workspace.
- **Delete a block**: Archives a notion block, page, or database using its id, which sets its 'archived' property to true (like moving to "trash" in the ui) and…
- **Fetch comments** (read-only): Fetches unresolved comments for a specified notion block or page id.
- **Fetch Database** (read-only): Fetches a notion database's structural metadata (properties, title, etc.) via its database id, not the data entries.
- **Fetch database row** (read-only): Retrieves a notion database row's properties and metadata.
- **Fetch Notion Block Children** (read-only): Retrieves a paginated list of direct, first-level child block objects along with contents for a given parent notion block or page id.
- **Get About Me** (read-only): Retrieves the user object for the bot associated with the current notion integration token, typically to obtain the bot's user id for…
- **Get about user** (read-only): Retrieves detailed information about a specific notion user, such as their name, avatar, and email, based on their unique user id.
- **Insert row database**: Creates a new page (row) in a specified notion database.
- **List users** (read-only): Retrieves a paginated list of users (excluding guests) from the notion workspace.
- **Query database** (read-only): Queries a notion database for pages (rows), where rows are pages and columns are properties.
- **Retrieve Comment**: Retrieve a specific comment by its id.
- **Retrieve Database Property**: Retrieve a specific property object of a notion database.
- **Search Notion page** (read-only): Searches notion pages and databases by title.
- **Update database schema**: Updates an existing notion database's title, description, and/or properties.
- **Update Page**: Update the properties, icon, cover, or archive status of a page.
- **Update row database**: Updates or archives an existing notion database row (page) using its row id, allowing modification of its icon, cover, and/or properties.
- **Append complex blocks (advanced, full control)**: Appends complex blocks with full notion block structure to a parent block or page.
- **Archive Notion Page**: Archives (moves to trash) or unarchives (restores from trash) a specified notion page.
- **Duplicate page**: Duplicates a notion page, including all its content, properties, and nested blocks, under a specified parent page or workspace.
- **Fetch Notion block metadata** (read-only): Fetches metadata for a notion block (or page, as pages are blocks) using its valid uuid.
- **Fetch Notion Data** (read-only): Fetches notion items (pages and/or databases) from the notion workspace, use this to get minimal data about the items in the workspace…
- **Get page property** (read-only): Call this to get a specific property from a notion page when you have a valid page id and property id.
- **Update block**: Updates an existing notion block's textual content or type-specific properties (e.g., 'checked' status, 'color'), using its block id and…
