# LabsMobile

LabsMobile provides APIs for sending SMS messages and retrieving account balances and country pricing.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/labsmobile/.

## Actions

- **Get Balance** (read-only): Return the connected LabsMobile account's available SMS credits.
- **Get SMS Prices** (read-only): Return current SMS credit prices for selected ISO country codes, or for all countries when no codes are supplied.
- **Send SMS**: Submit one or more real SMS messages for immediate processing, which may consume credits and trigger a configured delivery callback.
- **Simulate SMS**: Validate one or more SMS submissions without delivery or credit use.
