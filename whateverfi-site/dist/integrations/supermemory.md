# Supermemory

Supermemory is a memory and context API for ingesting, organizing, searching, and recalling information across applications.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/supermemory/.

## Actions

- **Add Document**: Ingest text or a public URL as a Supermemory document and return its document ID and initial processing status.
- **Add Documents**: Add 1 to 600 documents in one request, with explicit per-document metadata and processing options.
- **Delete Document**: Permanently delete one document by ID.
- **Get Account Status** (read-only): Return the connected Supermemory organization's plan, credit balance, high-level usage, and reset date.
- **Get Document** (read-only): Get one document's content, metadata, source details, and processing status by document ID.
- **Get Document Chunks** (read-only): Return the ordered extracted chunks for one processed document.
- **Get Profile** (read-only): Retrieve the static, dynamic, or bucketed profile learned for one container tag, optionally with matching search results.
- **List Documents** (read-only): List documents, optionally filtered by containers, metadata, or filepath, one page at a time.
- **List Memories** (read-only): List extracted memory entries for one or more container tags, one page at a time.
- **Search Memory** (read-only): Semantically search Supermemory memories, document chunks, or both, with optional container and metadata filters.
- **Update Document**: Update the content, metadata, container, or processing configuration of one existing document.
