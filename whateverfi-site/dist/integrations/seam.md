# Seam

Control smart locks, access systems, thermostats, sensors, and other connected devices in a Seam workspace.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/seam/.

## Actions

- **Add Access Methods to Grant**: Request additional PIN, card, mobile-key, or cloud-key methods for an existing access grant.
- **Create Access Grant**: Grant an existing or new user identity access to spaces, devices, or access-control entrances, requesting PIN, card, mobile-key, or…
- **Delete Access Grant**: Permanently revoke and delete an access grant by UUID, removing the access it manages.
- **Get Access Grant** (read-only): Get one access grant by its Seam UUID or unique workspace key.
- **List Access Grants** (read-only): List access grants in the workspace, optionally filtered by space, device, entrance, user identity, reservation, customer, key, or IDs.
- **List Action Attempts** (read-only): Inspect asynchronous Seam operation status, errors, and results in bulk by action-attempt IDs or by device, returning one…
- **List Connected Accounts** (read-only): List and search provider accounts connected to the workspace, optionally filtering by space, customer, user, or metadata.
- **List Devices** (read-only): List and search devices in the workspace, optionally filtering by account, space, IDs, type, manufacturer, customer, creation time, or…
- **List Spaces** (read-only): List and search spaces in the workspace by name, key, or customer, returning one cursor-controlled page of grantable locations.
- **Update Access Grant**: Update an access grant's name or validity window by UUID or unique workspace key.
