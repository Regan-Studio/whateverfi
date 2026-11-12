# mailfloss

mailfloss provides email verification APIs for checking individual addresses and processing asynchronous verification batches.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/mailfloss/.

## Actions

- **Cancel Batch Verification**: Cancel a pending or in-progress batch verification job.
- **Check API Key** (read-only): Verify that the connected Mailfloss API key is valid.
- **Create Batch Verification**: Submit email addresses for asynchronous batch verification and return the job ID.
- **Erase Verification Records**: Permanently erase stored verification records for the supplied email addresses.
- **Get Account** (read-only): Return the authenticated Mailfloss account holder's identity, contact details, security posture, notification preferences, and signup time.
- **Get Batch Verification Results** (read-only): Return one cursor-controlled page of stored batch results after organization floss-setting overrides.
- **Get Batch Verification Status** (read-only): Read an asynchronous batch verification job's state and available counters.
- **Get Organization** (read-only): Return the authenticated Mailfloss organization's plan, credit balances, current-period usage, trial state, account status, and feature…
- **Get Usage Report** (read-only): Return verification usage for a UTC calendar period, optionally scoped to one ESP connection.
- **Get Verification Job** (read-only): Return one verification job and its complete verdict breakdown.
- **List Verification Jobs** (read-only): Return one page of the organization's verification-job history, newest first, with optional source and lifecycle filters.
- **Verify Email**: Verify one email address and return Mailfloss's raw engine verdict without organization floss-setting overrides.
