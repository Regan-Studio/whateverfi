# ONLYOFFICE DocSpace

ONLYOFFICE DocSpace provides tenant-hosted APIs for managing rooms, documents, files, folders, users, groups, sharing, and portal settings.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/onlyoffice-docspace/.

## Actions

- **Create Folder**: Create a named subfolder inside an existing DocSpace folder.
- **Create Text File**: Create a plain-text file with supplied content inside a DocSpace folder.
- **Delete File Or Folder**: Move one file or folder to Trash, or permanently delete it when explicitly requested, then wait for the asynchronous operation to finish.
- **Get Account Context** (read-only): Return the connected user's identity, non-secret API-key metadata, available key permissions, portal capabilities, and quota features in…
- **Get File** (read-only): Return metadata, version information, and effective security flags for one file by ID.
- **Get Room** (read-only): Return detailed metadata and effective security flags for one room by ID.
- **List Folder Items** (read-only): List files and subfolders in My Documents or a folder selected by numeric ID, with optional text or extension filtering.
- **List Groups** (read-only): List or search DocSpace groups, optionally restricted to groups associated with a user or manager role.
- **List People** (read-only): List visible DocSpace users, optionally filtering by text, group membership, or administrator status.
- **List Rooms** (read-only): List rooms visible to the connected account, optionally filtering by text and continuing from a previous page.
