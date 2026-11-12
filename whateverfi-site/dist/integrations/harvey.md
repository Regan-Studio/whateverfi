# Harvey

Harvey is a legal AI platform for agents, Assistant, Vault documents, client matters, Intake, audit logs, and usage history.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/harvey/.

## Actions

- **Add Review Table Row**: Add one processed file or a group of processed files to a Harvey review table and schedule asynchronous review processing.
- **Create Agent Thread**: Start an asynchronous Harvey agent run from a prompt and optional documents.
- **Create Assistant Completion**: Generate one non-streaming Harvey Assistant response from a prompt with optional documents or knowledge sources, matter attribution, model…
- **Create History File Download URLs**: Create time-limited pre-signed download URLs for file IDs returned by Harvey query-history exports.
- **Create Intake Request**: Submit an idempotent request and optional documents to the Harvey Intake queue.
- **Create Vault Project**: Create a Harvey Vault project or knowledge base, optionally attributed to a client matter.
- **Delete Matters**: Idempotently soft-delete 1 to 10,000 Harvey matters by firm client and matter identifiers.
- **Delete Vault File**: Permanently delete one file from a Harvey Vault project.
- **Delete Vault Project**: Move an entire Harvey Vault project and all its contents to the workspace recycle bin.
- **Export Query History** (read-only): Export enriched query history for a UTC epoch window of at most 30 days, optionally including related file IDs.
- **Export Usage History** (read-only): Export enriched Harvey workspace usage events for a UTC epoch range of at most 30 days, optionally including related file IDs.
- **Get Agent** (read-only): Return metadata for one reachable published Harvey agent.
- **Get Agent Thread** (read-only): Read one Harvey agent thread status and any available answer, citations, generated files, or error.
- **Get Current User** (read-only): Return the Harvey service-user identity associated with the connected API token.
- **Get Earliest Audit Log** (read-only): Return the earliest available Harvey audit log, optionally filtered by log type.
- **Get Intake Request** (read-only): Read one Harvey Intake request's lifecycle state, assignment, timestamps, and attachments.
- **Get Latest Audit Log** (read-only): Return the latest available Harvey audit log, optionally for one log type.
- **Get Review Table** (read-only): Return a Harvey review table's title, creation time, and associated file IDs.
- **Get Review Table Row** (read-only): Return a Harvey review-table row and its cell results for one file.
- **Get Vault Files** (read-only): Return details and processing status for up to 1,000 Harvey Vault file IDs.
- **Get Vault Project** (read-only): Return a Harvey Vault project's metadata, file identifiers and names, review tables, and storage limits.
- **List Agents** (read-only): List published Harvey agents available to the connected service user, one cursor page at a time.
- **List Audit Logs** (read-only): Page forward through Harvey audit logs from a starting log ID, optionally filtered by log type.
- **List Client Matters** (read-only): Return all Harvey client matters, including deleted records and usage statistics.
- **List Recycled Vault Projects** (read-only): List Vault projects currently in the workspace recycle bin, optionally filtered by project-name text or client matter.
- **List Vault Project Files** (read-only): List, filter, and sort files in a Harvey Vault project, one cursor page at a time.
- **List Vault Project Users** (read-only): List workspace users with direct or inherited effective access to a Harvey Vault project.
- **List Vault Projects** (read-only): List and filter workspace Vault projects and knowledge bases, one page at a time.
- **Remove Vault Project Users**: Remove direct WORKSPACE_USER shares from a Harvey Vault project by email.
- **Search Audit Logs by Time** (read-only): Return the first Harvey audit log at or after a UTC epoch timestamp, optionally filtered by log type.
- **Search Vault** (read-only): Return semantically relevant document chunks from one Harvey Vault project.
- **Update Vault Project Users**: Add workspace users or update their direct access level on a Harvey Vault project.
- **Upload Vault Files**: Upload up to 50 new or replacement files to a Harvey Vault project.
- **Upsert Clients**: Create, update, or restore up to 10,000 Harvey clients by firm client identifier.
- **Upsert Matters**: Create, update, or restore up to 10,000 Harvey matters under existing clients.
