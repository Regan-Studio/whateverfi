# DeBounce

DeBounce validates email addresses, enriches contact data, reports account usage, and processes bulk email-validation lists.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/debounce/.

## Actions

- **Get Account Balance** (read-only): Return the connected DeBounce account's remaining validation-credit balance.
- **Get API Usage** (read-only): Return the aggregate number of DeBounce API validation calls in an inclusive date range.
- **Get Bulk Validation Status** (read-only): Check progress for a bulk validation list created through the DeBounce Bulk API and return its result download URL when available.
- **Validate Email**: Validate one email address with DeBounce and return its deliverability result, reason, and remaining credit balance.
