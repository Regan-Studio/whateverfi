# Hjarni

Hjarni is a personal knowledge management platform for organizing, searching, linking, and maintaining notes, containers, and tags.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/hjarni/.

## Actions

- **Create Container**: Create a root or nested Hjarni container for organizing notes.
- **Create Note**: Create a Markdown note in the inbox or a container.
- **Create Notes**: Create 1-25 Markdown notes in order and return one result per input.
- **Create Tag**: Create a Hjarni tag for organizing notes.
- **Get Account Status** (read-only): Return the connected Hjarni identity, token scope, plan, teams, and current resource usage and quotas.
- **Get Note** (read-only): Get one Hjarni note by ID with its Markdown body, tags, container, attachments, links, and optimistic-lock version.
- **List Containers** (read-only): List Hjarni containers as active roots, archived roots, or all active containers in a flat view.
- **List Notes** (read-only): List and filter personal Hjarni notes, including active, inbox, archived, or favorited notes.
- **List Tags** (read-only): List all Hjarni tags and their note counts.
- **List Trashed Notes** (read-only): List recoverable trashed Hjarni notes with their deletion and scheduled purge times.
- **Move Note to Trash**: Move a note to recoverable Trash.
- **Rename Tag**: Rename an existing Hjarni tag without changing its note associations.
- **Restore Note**: Restore a note from Trash before its scheduled purge and return the active note.
- **Update Container**: Update a Hjarni container's name, description, parent, position, or container-specific AI instructions.
- **Update Note**: Update note metadata, placement, tags, or body.
