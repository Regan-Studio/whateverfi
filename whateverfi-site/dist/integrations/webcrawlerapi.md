# WebCrawlerAPI

WebCrawlerAPI provides crawling, page scraping, AI web agents, and monitored website feeds through a unified API.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/webcrawlerapi/.

## Actions

- **Create Crawl**: Start a metered asynchronous crawl over a site and return its job ID.
- **Create Feed**: Create a recurring website-change feed.
- **Delete Feed**: Permanently cancel a feed so it cannot be resumed.
- **Get Crawl Job** (read-only): Get a crawl job's status, configuration, per-page results, content URLs, errors, and observed costs.
- **Get Feed** (read-only): Get one feed's configuration, lifecycle status, and recent run history, including per-run crawl counts and cost.
- **Get Organization Costs** (read-only): Return current spendable balance plus request count and USD usage for a date range.
- **List Feed Changes** (read-only): Return one page of detected feed changes as structured JSON, with an opaque continuation cursor for older pages.
- **List Feeds** (read-only): List active and paused feeds for the connected organization, newest first.
- **Scrape Page** (read-only): Scrape one web page synchronously and return requested content or structured extraction.
- **Set Feed State**: Pause an active feed's future scheduled runs or resume a paused feed.
