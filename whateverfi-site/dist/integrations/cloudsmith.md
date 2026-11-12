# Cloudsmith

Cloudsmith is a cloud-native artifact management platform for securely managing, distributing, and governing software packages across teams and repositories.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/cloudsmith/.

## Actions

- **Get Current User** (read-only): Return the identity authenticated by the connected Cloudsmith API key.
- **Get Package** (read-only): Get metadata, status, checksums, licensing, and security state for one package in a Cloudsmith repository.
- **Get Quota** (read-only): Return current storage and bandwidth usage and allowances for a Cloudsmith namespace without inferring a billing plan name.
- **Get Rate Limits** (read-only): Return Cloudsmith's current per-resource request limits, remaining counts, intervals, and throttling state for the authenticated principal.
- **Get Repository** (read-only): Get configuration, visibility, usage, and capability details for one Cloudsmith repository without returning repository signing keys or…
- **List Organizations** (read-only): List Cloudsmith organizations associated with the authenticated principal so an agent can discover namespace slugs for later calls.
- **List Repository Vulnerabilities** (read-only): List vulnerability scan summaries for packages in a Cloudsmith repository.
- **Search Audit Log** (read-only): Search paginated audit events for a Cloudsmith namespace by event, actor, or timestamp text.
- **Search Packages** (read-only): Search packages in a Cloudsmith repository by name, filename, version, distribution, architecture, format, or status.
- **Search Repositories** (read-only): Search and list repositories within a Cloudsmith namespace, returning identifiers and summary state without repository signing keys.
