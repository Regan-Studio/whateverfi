# HackMD

HackMD is a collaborative Markdown workspace for creating, organizing, and sharing personal and team notes.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/hackmd/.

## Actions

- **Create Note**: Create a Markdown note in the personal workspace or a specified team workspace.
- **Get Account** (read-only): Return the HackMD profile for the connected token and the teams visible to it.
- **Get Note** (read-only): Get a note by ID, including its Markdown content.
- **List Folders** (read-only): List all folders in the personal workspace, or in one team workspace when team_path is supplied.
- **List Notes** (read-only): List all notes in the personal workspace, or in one team workspace when team_path is supplied.
- **List Trash** (read-only): List soft-deleted notes in the personal workspace.
- **Move Note to Trash**: Soft-delete a note by moving it to trash in the personal workspace or an explicitly selected team workspace.
- **Restore Notes**: Restore one or more personal notes from HackMD trash.
