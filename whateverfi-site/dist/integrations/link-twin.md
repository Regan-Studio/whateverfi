# LinkTwin

LinkTwin is a link management platform for creating shortened deep links, tracking analytics, and managing domains, pixels, QR codes, and collections.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/link-twin/.

## Actions

- **Create Link**: Create a shortened deep link with optional access limits, targeting, query parameters, and pixel or collection assignments.
- **Delete Link**: Permanently delete one shortened link by numeric ID.
- **Get Account Info** (read-only): Return the connected LinkTwin account's plan, usage, timezone, and feature limits.
- **Get Link** (read-only): Return one shortened link's destination, targeting rules, assignments, access controls, and summary click analytics.
- **Get Link Analytics** (read-only): Return detailed clicks, unique clicks, time series, and geography, referrer, browser, device, language, and city breakdowns for one link.
- **List Collections** (read-only): Return one page of link collections available for organizing or assigning shortened links.
- **List Domains** (read-only): Return standard LinkTwin short domains and branded domains available to the connected account.
- **List Links** (read-only): Return one filtered page of shortened links owned by the connected account, including destination URLs, click totals, and assignments.
- **List Pixels** (read-only): Return one page of tracking pixels available for assignment to shortened links.
- **Update Link**: Partially update a shortened link's destination, access limits, targeting, query parameters, or assignments.
