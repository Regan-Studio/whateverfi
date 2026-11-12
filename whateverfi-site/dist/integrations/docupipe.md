# DocuPipe

DocuPipe provides document parsing, structured data extraction, classification, analysis, review, workflow, and export APIs.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/docupipe/.

## Actions

- **Create Schema**: Create a reusable extraction schema from a valid JSON Schema and optional extraction guidelines.
- **Delete Document**: Permanently delete one previously submitted DocuPipe document by ID.
- **Delete Documents**: Permanently delete multiple previously submitted DocuPipe documents by ID in one batch.
- **Find Documents** (read-only): Browse documents by dataset and creation time, or search filenames and document IDs when query is provided.
- **Find Jobs** (read-only): Retrieve one asynchronous job by ID, or list and filter jobs when job_id is omitted.
- **Get Account Usage** (read-only): Return current plan and credit state together with job counts and credits consumed by job type, optionally including daily usage.
- **Get Document** (read-only): Retrieve a processed document, including processing state, parsed content, page count, metadata, and file details.
- **Get Schema** (read-only): Retrieve one extraction schema and its full JSON Schema definition by ID.
- **Get Standardization** (read-only): Retrieve one completed standardization as structured JSON, including extraction data and field metadata.
- **List Schemas** (read-only): List extraction schemas available to the connected workspace, optionally including each full JSON Schema payload.
- **List Standardizations** (read-only): List structured extraction results, filtered by schema, document, or up to 1000 known standardization IDs.
- **Standardize Document**: Start V3 agentic structured extraction for one processed document and return the job and standardization IDs.
- **Upload Document**: Submit one local file or remote file URL for asynchronous parsing.
