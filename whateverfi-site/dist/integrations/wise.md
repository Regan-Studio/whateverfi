# Wise

Access supported quotes, balances, transfers, recipients, and account data for PERSONAL or BUSINESS profiles using a personal API token created from a Wise Business account.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/wise/.

## Actions

- **Create Quote**: Create a transient Wise bank-transfer quote for a personal or business profile.
- **Get Exchange Rate** (read-only): Get Wise's latest exchange rate for one source and target currency pair.
- **Get Quote** (read-only): Retrieve a Wise quote by profile and quote ID, including its current status, pricing, payment options, and expiration.
- **List Activities** (read-only): List a Wise profile's account activity with optional status, resource-type, and time filters, one page at a time.
- **List Balances** (read-only): List standard balances and savings jars for a Wise profile without creating, deleting, or moving funds between balances.
- **List Profiles** (read-only): List the connected Wise account's personal or business profiles and return the profile IDs required by profile-scoped tools.
- **List Recipients** (read-only): List Wise recipients for a profile, optionally filtering by active status, ownership, currency, or account type.
- **List Supported Currencies** (read-only): List currencies Wise currently supports for transfers, including their ISO codes and decimal support.
- **List Transfers** (read-only): List and filter existing Wise transfers for a profile, one page at a time.
