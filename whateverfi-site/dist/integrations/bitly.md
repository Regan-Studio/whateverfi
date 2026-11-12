# Bitly

Bitly is a link management platform for shortening, customizing, sharing, and measuring links and QR codes.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/bitly/.

## Actions

- **Delete Bitlink**: Permanently delete an eligible unedited hash Bitlink.
- **Expand Link** (read-only): Resolve a Bitlink to its current destination and destination history, when available.
- **Get Account Context** (read-only): Return the authenticated Bitly user together with accessible groups and organizations needed by other tools.
- **Get Bitlink** (read-only): Retrieve full Bitlink metadata, including destination, title, tags, archive or deletion state, and associated QR code IDs.
- **Get Bitlink Activity** (read-only): Return paid-plan click or engagement analytics for a Bitlink as a timeline or summary.
- **Get Bitlink Traffic Sources** (read-only): Break down paid-plan Bitlink click analytics by country, city, device, referrer, or referring domain.
- **Get Usage and Limits** (read-only): Inspect monthly plan quotas, hourly endpoint budgets, and optional group feature usage before performing quota-consuming work.
- **List Bitlinks** (read-only): List or search Bitlinks owned by a group, one cursor-controlled page at a time.
- **Shorten Link**: Create an ordinary Bitly short link for a long URL in a specific group.
- **Update Bitlink**: Update safe metadata or archive state for a Bitlink.
