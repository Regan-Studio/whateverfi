# SMTPing

Verify email addresses, check threat lists, and inspect SMTPing account credits and usage.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/smtping/.

## Actions

- **Check Email**: Check one email address against one selected SMTPing threat list and report whether it matched.
- **Check Email Batch**: Synchronously check 1 to 1,000 email addresses against one selected SMTPing threat list and return all results.
- **Check Email Flags**: Return all six SMTPing risk and domain flags for one email address in one request.
- **Create Bulk Check Job**: Start an asynchronous SMTPing threat-list check for 1 to 100,000 email addresses.
- **Create Bulk Verification Job**: Start asynchronous verification for 1 to 100,000 email addresses and return the job ID to use for status polling and result retrieval.
- **Export Usage** (read-only): Download SMTPing usage history as a CSV file for the provider's default date range.
- **Get Bulk Check Job** (read-only): Get progress and match counts for an asynchronous threat-list check job.
- **Get Bulk Check Results** (read-only): Return all address-level matches for a bulk threat-list check job after its status is Succeeded or Completed.
- **Get Bulk Verification Job** (read-only): Get progress and summary counts for an asynchronous bulk verification job.
- **Get Bulk Verification Results** (read-only): Return all address-level results for a bulk verification job after its status is Succeeded.
- **Get Credits** (read-only): Return the connected account's current credit balance, plan, and daily remaining credits.
- **Get Usage** (read-only): Return aggregate request, email, credit, status, endpoint, and error usage for SMTPing's current default date range.
- **List Usage Requests** (read-only): Return the newest available page of individual SMTPing API request history, up to the provider default of 50 rows, with page metadata.
- **Verify Email**: Verify one email address and return its deliverability status and domain flags.
