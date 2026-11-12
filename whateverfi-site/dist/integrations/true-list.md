# TrueList

TrueList validates email addresses, manages batch validation jobs, and retrieves validation history.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/true-list/.

## Actions

- **Create Batch**: Create an asynchronous TrueList batch email-validation job from tabular rows.
- **Delete Batch**: Permanently delete one completed TrueList batch and its validation results.
- **Estimate Batch** (read-only): Estimate email count, duplicates, and processing time for tabular batch data without creating a batch or consuming batch-validation credits.
- **Get Account** (read-only): Return the connected TrueList user identity, account name, and payment plan without exposing API tokens or other account users.
- **Get Batch** (read-only): Get one TrueList batch-validation job by UUID, including progress counts and completed result download URLs.
- **List Batches** (read-only): List all batch-validation jobs in the connected TrueList account, including their current processing state, progress counts, and available…
- **List Validation History** (read-only): Return one page of previously validated email results, optionally filtered by batch, address, state, or sub-state.
- **Validate Email**: Validate one email address synchronously, consume validation capacity, and add the result to TrueList validation history.
