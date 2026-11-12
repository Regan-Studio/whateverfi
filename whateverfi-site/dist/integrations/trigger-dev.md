# Trigger.dev

Trigger.dev is a platform for building, deploying, and managing reliable background tasks and workflows.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/trigger-dev/.

## Actions

- **Batch Trigger Task**: Start multiple runs of one deployed Trigger.dev task in one provider-side batch and return the batch and run IDs.
- **Execute TRQL Query** (read-only): Run one read-only Trigger.dev Query Language SELECT statement for custom run analytics and return JSON rows or CSV text.
- **Get Batch** (read-only): Retrieve a task batch's status, run IDs, completion counts, and item errors.
- **Get Batch Results** (read-only): Retrieve the success or failure outcome and encoded output for every run in a completed task batch.
- **Get Error** (read-only): Retrieve one Trigger.dev error group's message, occurrence history, affected versions, and resolution or ignore state.
- **Get Run** (read-only): Retrieve one run's status, timing, payload, output, attempts, metadata, relationships, schedule, and cost details.
- **Get Run Result** (read-only): Retrieve one run's compact success or failure result, including its encoded output or error and usage duration.
- **List Errors** (read-only): Return one forward page of Trigger.dev error groups, optionally filtered by task, version, status, text, or time window.
- **List Runs** (read-only): Return one forward page of runs in the connected environment, optionally filtered by time, status, task, version, tags, schedule, bulk…
- **Trigger Task**: Start one run of a deployed Trigger.dev task and return the new run ID.
