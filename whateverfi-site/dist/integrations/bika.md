# Bika.ai

Bika.ai is an AI automation database platform for managing spaces, teams, records, automations, and outgoing webhooks.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/bika/.

## Actions

- **Create Records**: Create one to ten records in a Bika database in one request and return every created record ID and field value.
- **Delete Records**: Permanently delete one to ten explicitly identified records from a Bika database and return a deletion result for each ID.
- **Get Database Schema** (read-only): Get a Bika database's metadata, views, and field definitions, including the field IDs needed to read and write records by ID.
- **Get Record** (read-only): Get one Bika record by ID, with field values keyed by field name or field ID.
- **List Nodes** (read-only): List the nodes in a Bika space so an agent can discover database and automation resource IDs by name, type, and path.
- **List Records** (read-only): Return one cursor-controlled page of records from a Bika database, optionally selecting specific fields by name or ID.
- **List Spaces** (read-only): List spaces available to the connected Bika account and return the space IDs needed by database tools.
- **Update Records**: Update fields on one to ten existing Bika records in one request and return the updated records.
