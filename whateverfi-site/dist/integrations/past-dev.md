# Past.dev

Past.dev provides durable, source-backed memory for AI agents, including ingestion and its estimation and diagnostics, recall, identities, audiences, usage, request logs, memory traces, and explicit cleanup.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/past-dev/.

## Actions

- **Create or Replace Audience**: Create or completely replace a fixed-list or trait-rule audience and its access definition.
- **Delete Audience**: DESTRUCTIVE ACCESS CHANGE.
- **Delete Identity**: DESTRUCTIVE.
- **Delete Memory Data Point**: DESTRUCTIVE.
- **Delete Memory Data Points**: DESTRUCTIVE.
- **Estimate Ingestion** (read-only): Cut files into data points, plan batches, and estimate credits without storing data or spending credits.
- **Explain Ingestion** (read-only): Diagnose how far one send progressed, including per-item searchability, memory counts, failure details, and the recommended next step.
- **Find Trace Roots** (read-only): Find memory and source nodes for lineage or timeline inspection, returning independent memory and source cursors.
- **Get API Request** (read-only): Read one API call and its retained allowlisted headers and request/response payload.
- **Get Audience** (read-only): Read one fixed, rule, or default audience with its definition and current membership and memory counts.
- **Get Identity** (read-only): Return one identity's traits, origin, timestamps, and current audience memberships.
- **Get Ingestion Status** (read-only): Poll one ingestion for processing, completion, failure, and project readiness without consuming metered request quota.
- **Get Request Histogram** (read-only): Count accepted, failed-later, and rejected API calls in provider-selected time buckets using request-log filters.
- **Get Trace Lineage** (read-only): Read what a memory or source was built from and what was built on it, including graph edges and hidden-node count.
- **Get Trace Node** (read-only): Read one memory or source node with revision, validity, replacement, request, content, and graph counts.
- **Get Trace Timeline** (read-only): Read rooted source and memory work, ingestions, recalls, and supersessions on a clock for a window of at most 31 days.
- **Get Usage** (read-only): Return the current UTC month's credit balance, metering state, and project ingestion, recall, and cap usage.
- **Ingest Memory**: Ingest one timestamped data point into durable memory, optionally associating it with an identity and audience.
- **Ingest Memory Batch**: Atomically ingest 1 to 1,000 ordered memory data points in one request, avoiding fragile per-item agent loops.
- **List API Requests** (read-only): List the connected project's API calls newest first, with filters and a cursor for the next page.
- **List Audiences** (read-only): List every audience in the connected project, including the default project audience and current membership and memory counts.
- **List Identities** (read-only): List project identities newest first, optionally filtering by one trait, and return a cursor for the next page.
- **Permanently Delete Ingestion Memory**: DESTRUCTIVE.
- **Recall Memory** (read-only): Return ranked, source-backed memory visible to an identity for a query, with optional time range, sort order, and evidence budget controls.
- **Recompute Audience**: Recompute an audience's membership from its definition and apply the refreshed access set to recall immediately.
- **Replace Identities in Bulk**: Atomically create or replace complete trait sets for up to 1,000 identities.
- **Replace Identity**: Create an identity or replace its complete trait set.
- **Retry Ingestion**: Retry a stopped or failed ingestion under its existing id without spending additional credits.
- **Update Identity Traits**: Merge selected identity traits while preserving unspecified keys.
