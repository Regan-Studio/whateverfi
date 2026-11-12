# Pinata

Manage public IPFS files and groups, inspect gateways and upload metadata, and create constrained signed upload URLs through Pinata's V3 APIs.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/pinata/.

## Actions

- **Create Public Group**: Create a group for organizing files on the connected account's public IPFS network.
- **Create Signed Public Upload URL**: Create a 60-second signed URL for one size- and MIME-constrained public IPFS upload.
- **Delete Public Group**: Permanently delete one public-network group by ID.
- **Get Public Group** (read-only): Return one public-network group by its Pinata group ID.
- **List Gateways** (read-only): Return one page of gateways owned by the connected Pinata account without changing gateway configuration.
- **List Public Files** (read-only): Return one page of files on the connected account's public IPFS network, optionally filtered by file attributes.
- **List Public Groups** (read-only): Return one page of groups that organize files on the connected account's public IPFS network.
- **List Upload Metadata** (read-only): List upload-service records, including upload IDs, filenames, CIDs, sizes, group IDs, and timestamps.
- **Update Public Group**: Update the name, visibility flag, or both for one public-network group.
