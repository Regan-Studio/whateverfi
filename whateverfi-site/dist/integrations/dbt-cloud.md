# dbt Cloud

dbt Cloud provides administrative, metadata discovery, and Semantic Layer APIs for operating analytics projects and querying governed data products.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/dbt-cloud/.

## Actions

- **Admin API Delete**: Irreversibly delete one selected dbt Cloud administrative resource using a fixed documented Admin API operation from the official v2 or v3…
- **Admin API Read** (read-only): Perform one documented dbt Cloud Admin read selected by operation, using its documented path and optional query parameters from the…
- **Admin API Write**: Execute one predeclared dbt Cloud Administrative API POST, PATCH, or PUT operation.
- **Cancel Run**: Irreversibly request cancellation of a queued, starting, or running dbt Cloud run.
- **Download Run Artifact** (read-only): Download one artifact file from a completed dbt Cloud run using a path returned by List Run Artifacts.
- **Find Semantic Saved Queries** (read-only): List or search saved Semantic Layer queries, or return one exact saved query by name.
- **Get Job** (read-only): Return one dbt Cloud job definition and optionally selected related execution context.
- **Get Run** (read-only): Return one dbt Cloud run with optional job, environment, step, retry, audit, or log context.
- **Get Run Failure Details** (read-only): Return dbt Cloud status and step logs for a failed run.
- **List Environments** (read-only): Return one page of environments for a dbt Cloud project, with optional deployment and name filters.
- **List Jobs** (read-only): Return one page of dbt Cloud jobs, optionally filtered by project, environment, name, schedule, or state.
- **List Projects** (read-only): Return one page of dbt Cloud projects, optionally filtered by name, IDs, or deletion state.
- **List Run Artifacts** (read-only): Return artifact paths available for a completed dbt Cloud run.
- **List Runs** (read-only): Return one page of dbt Cloud runs, optionally filtered by job, project, environment, status, creation time, finish time, or deletion state.
- **List Semantic Attributes** (read-only): Return one page of dimensions, entities, group-bys, or queryable time granularities available for selected metrics.
- **List Semantic Metrics** (read-only): Return one page of governed Semantic Layer metrics, optionally searched or grouped.
- **Query Discovery Metadata** (read-only): List dbt metadata resources in an environment or job-run context, retrieve one node by case-sensitive unique ID, or inspect model health…
- **Query Semantic Metrics** (read-only): Submit an ad-hoc dbt Semantic Layer query using metrics and/or group-bys, or execute a saved query.
- **Retry Run**: Start a new retry from a failed dbt Cloud run and return the newly enqueued run record.
- **Trigger Job Run**: Start a new run for a dbt Cloud job, optionally overriding its revision, target, commands, docs generation, threads, or timeout.
