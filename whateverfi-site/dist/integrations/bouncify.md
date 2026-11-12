# Bouncify

Bouncify verifies individual email addresses and bulk email lists and reports the account's remaining verification credits.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/bouncify/.

## Actions

- **Create Bulk List**: Submit at least two email records for asynchronous bulk-job preparation without starting verification or consuming credits.
- **Download Bulk Results** (read-only): Download selected result classes from a completed bulk-verification job as a CSV file.
- **Get Bulk Job Status** (read-only): Return a bulk job's preparation or verification state, progress, analysis, and result counts.
- **Get Credit Balance** (read-only): Return the connected Bouncify account's remaining verification credits without consuming a credit.
- **Request Bulk List Deletion**: Permanently request deletion of a bulk list and its results.
- **Start Bulk Verification (Irreversible, Consumes Credits)**: Irreversibly start verification for a prepared bulk list.
- **Verify Email (Consumes Credit)**: Verify one email address in real time.
