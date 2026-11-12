# OneDrive

OneDrive is Microsoft’s cloud storage solution enabling users to store, sync, and share files across devices, offering offline access, real-time collaboration, and enterprise-grade security

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/one-drive/.

## Actions

- **Copy Item**: Copy a driveitem (file or folder) to a new location asynchronously.
- **Create Sharing Link**: Create a sharing link for a driveitem (file or folder) by its unique id.
- **Delete Item**: Delete a driveitem (file or folder) by its unique id from the authenticated user's onedrive.
- **Get Drive** (read-only): Retrieves the properties and relationships of a drive resource by its unique id.
- **Get Drive Quota** (read-only): Retrieve the quota information for the authenticated user's onedrive.
- **Get Item Metadata** (read-only): Retrieves the metadata of a driveitem by its unique id.
- **Get Item Permissions** (read-only): Retrieves the permissions of a driveitem by its unique id or path within a specific drive.
- **Get Item Thumbnails** (read-only): Retrieve the thumbnails associated with a driveitem.
- **Get Item Versions** (read-only): Retrieve the version history of a driveitem by its unique id.
- **Get Recent Items** (read-only): Retrieves a list of items that have been recently used by the authenticated user.
- **Get Shared Items** (read-only): Retrieve a list of items that have been shared with the authenticated user.
- **Get SharePoint List Items** (read-only): Get the items (list items) within a specific sharepoint list on a site.
- **Get SharePoint Site Page Content** (read-only): Gets the content of a modern sharepoint site page.
- **Get Site Details** (read-only): Retrieves metadata for a specific sharepoint site by its id.
- **Invite User to Drive Item**: Invite users or grant permissions to a specific item in a onedrive drive.
- **List Drive Item Activities** (read-only): List recent activities for a specific item in a onedrive drive.
- **List Drives** (read-only): Retrieve a list of drive resources available to the authenticated user, or for a specific user, group, or site.
- **List Root Drive Changes** (read-only): List changes in the root of the user's primary drive using a delta token.
- **List SharePoint List Items Delta** (read-only): Track changes to items in a sharepoint list using a delta query.
- **List Site Columns** (read-only): List all column definitions for a sharepoint site.
- **List Site Drive Items Delta** (read-only): Track changes to driveitems in the default document library of a sharepoint site.
- **List Site Lists** (read-only): List all lists under a specific sharepoint site.
- **List Site Subsites** (read-only): List all subsites of a sharepoint site.
- **List Subscriptions** (read-only): List the current subscriptions for the authenticated user or app.
- **Move Item**: Move a file or folder to a new parent folder in onedrive.
- **Preview Drive Item** (read-only): Generates or retrieves a short-lived embeddable url for a preview of a specific item.
- **Search Items** (read-only): Searches for driveitems in onedrive that match the specified query.
- **Update Drive Item Metadata**: Update the metadata of a specific item (file or folder) in onedrive.
- **Create a new text file**: Creates a new text file with specified content in a onedrive folder, using either the folder's unique id or its absolute path (paths are…
- **Create folder**: Creates a new folder in the user's onedrive, automatically renaming on conflict, optionally within a specified parent folder (by id or…
- **Download a file** (read-only): Downloads a file from a user's onedrive using its item id, which must refer to a file and not a folder.
- **Find Folder** (read-only): Finds folders by name within an accessible parent folder in onedrive, or lists all its direct child folders if no name is specified.
- **Find Item** (read-only): Non-recursively finds an item (file or folder) in a specified onedrive folder.
- **List OneDrive items** (read-only): Retrieves all files and folders as driveitem resources from the root of a specified user's onedrive, automatically handling pagination.
- **Upload file**: Uploads a file to a specified onedrive folder, automatically renaming on conflict and supporting large files via chunking.
