# Raindrop.io

Raindrop.io is a bookmark manager for organizing, searching, tagging, highlighting, sharing, importing, and exporting saved web content.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/raindrop/.

## Actions

- **Create Bookmark**: Save one URL as a Raindrop bookmark with optional organization and notes.
- **Create Bookmarks**: Create 1 to 100 bookmarks in one request with optional organization and notes.
- **Create Collection**: Create a root or nested Raindrop collection.
- **Delete Bookmark**: Move a bookmark to Trash or permanently delete a bookmark already in Trash, requiring the caller to state the intended deletion mode.
- **Delete Empty Collection**: Delete a positive-ID collection after a best-effort check that it contains no bookmarks or child collections.
- **Get Bookmark** (read-only): Get one bookmark and its highlights by Raindrop ID.
- **List Bookmarks** (read-only): List, search, filter, and sort bookmarks in a collection, all bookmarks, Unsorted, or Trash, returning one page and the next page number…
- **List Collections** (read-only): List all root and nested collections in the connected Raindrop account, including IDs, parent relationships, titles, and bookmark counts.
- **List Tags** (read-only): List tag names and bookmark counts globally or within one collection.
- **Update Bookmark**: Update selected bookmark fields, move it to another collection, or replace its tags while preserving omitted fields.
- **Update Collection**: Change selected properties of an existing Raindrop collection without replacing omitted properties.
