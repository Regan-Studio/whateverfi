# Devolens / Cryptolens

Devolens provides the Cryptolens software licensing API for managing products, license keys, customers, usage analytics, and entitlements.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/devolens/.

## Actions

- **Get License Key** (read-only): Retrieve one license key and optional activation metadata by its product ID and key string.
- **List Customers** (read-only): Search or list customers visible to the connected Cryptolens account, including reseller-visible customer groups returned by the API.
- **List Daily Usage Aggregates** (read-only): Return one page of daily Cryptolens usage aggregates, optionally filtered by product and inclusive date range.
- **List License Keys** (read-only): List and search one page of license keys for a Cryptolens product.
- **List License Templates** (read-only): Return the license templates available to the connected Cryptolens account.
- **List License Users** (read-only): Return registered Cryptolens license users, optionally limited to one customer.
- **List Messages** (read-only): Return Cryptolens account messages, optionally filtered by channel or creation time.
- **List Products** (read-only): Return the Cryptolens products visible to the connected access token.
- **List Resellers** (read-only): Search or list resellers visible to the connected Cryptolens account.
- **List Web API Logs** (read-only): Inspect one page of Cryptolens Web API request logs with optional product, license-key, machine, event, and time filters.
