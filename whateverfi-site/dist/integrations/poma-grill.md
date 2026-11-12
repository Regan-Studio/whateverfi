# POMA Grill

POMA Grill is a project-scoped context engine for ingesting documents, managing indexed content, and retrieving prompt-ready context for LLM applications.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/poma-grill/.

## Actions

- **Cancel Bucket Ingest Task**: Irreversibly cancel a non-terminal POMA Grill bucket-ingest task.
- **Cancel Ingest Job**: Request best-effort cancellation and removal of an ingestion job.
- **Delete Document**: Permanently delete one deliberately selected indexed document, including its vectors and stored assets.
- **Get Bucket Ingest Task** (read-only): Get the current state, progress, processing rate, credential status, and recent failures for a POMA Grill bucket-ingest task.
- **Get Document** (read-only): Get metadata for one indexed document by its document ID.
- **Get Ingest Job** (read-only): Get an ingestion job's current status and usage.
- **Ingest Document**: Upload one file or provide one public remote URL for asynchronous indexing, and return the ingestion job ID to poll with Get Ingest Job.
- **List Bucket Ingest Failures** (read-only): Return one page of failed items for a bucket ingest task, ordered by item ID, with an opaque cursor for the next page.
- **List Documents** (read-only): List one page of document metadata from the connected project.
- **Pause Bucket Ingest Task**: Pause a non-terminal bucket ingest task in paused_user state.
- **Preview Bucket Ingest** (read-only): Validate S3 or GCS credentials and preview matching source objects without creating a bucket-ingest task.
- **Resume Bucket Ingest Task**: Resume a bucket ingest task paused by the user, restoring its pre-pause state and waking processing for the next scheduler tick.
- **Retry Bucket Ingest Failures**: Retry all or selected failed items in a bucket ingest task that is in done_with_errors or materialising.
- **Search Documents** (read-only): Search indexed content across the project or within one document, returning either prompt-ready context or structured matching chunks.
- **Submit Bucket Ingest**: Create an asynchronous task to ingest matching objects from an S3 or GCS bucket into POMA Grill, optionally delivering results to another…
- **Update Bucket Ingest Credentials**: Replace and validate the source credentials for an active bucket ingest task.
- **Update Document Attributes**: Set, change, or remove selected typed attributes on one indexed document.
