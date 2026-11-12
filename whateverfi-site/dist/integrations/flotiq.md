# Flotiq

Flotiq is an API-first headless content management system for defining content types, managing and publishing content, searching data, and handling media.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/flotiq/.

## Actions

- **Batch Upsert Content Objects**: Create or update up to 100 objects of one Flotiq content type in a batch, returning success and error counts plus per-object validation…
- **Create Content Object**: Create one object that conforms to a Flotiq content type definition.
- **Delete Content Object**: Soft-delete one Flotiq content object.
- **Get Content Object** (read-only): Get one object by content type and ID, optionally expanding its relationships.
- **Get Content Type** (read-only): Get one content type definition, including its field schema and metadata configuration.
- **List Content Objects** (read-only): List and filter objects from one Flotiq content type while preserving its dynamic fields.
- **List Content Types** (read-only): List the content type definitions visible to the connected Flotiq account, including internal types.
- **Search Content** (read-only): Full-text search across content objects visible to the API key, optionally restricted to content types, with configurable matching,…
- **Set Content Publication**: Publish a Draft & Public content object or return it to draft.
- **Update Content Object**: Partially update selected fields of one existing Flotiq content object.
