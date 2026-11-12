# 44API

44API validates VAT and tax identifiers, returns available company details, and manages account IP whitelists.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/44api/.

## Actions

- **Add Whitelisted IP**: Add one IPv4 or IPv6 address to the account whitelist using a verification email address.
- **List Whitelisted IPs** (read-only): List IP addresses currently allowed by the account whitelist.
- **Remove Whitelisted IP**: Remove one IPv4 or IPv6 address from the account whitelist.
- **Validate VAT Number** (read-only): Validate one VAT or tax ID for a supported country and return its validity plus any company details available on the connected plan.
