# Olostep

Olostep provides APIs for web scraping, crawling, search, structured answers, monitoring, and data extraction.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/olostep/.

## Actions

- **Answer Question**: Synchronously research a bounded task by searching and browsing the web, then return the completed answer and sources when available.
- **Get Credit Balance** (read-only): Return the connected team's remaining Olostep credits, credit lots, active subscription, and whether usage is enabled without consuming…
- **Get Operation Result** (read-only): Retrieve a stored scrape, search, map, answer, or crawl by its operation ID without repeating or rebilling the original work.
- **List Crawl Pages** (read-only): Return one page of URLs and retrieve IDs processed by an asynchronous crawl, with a continuation cursor for additional pages.
- **Map Website**: Synchronously discover and optionally rank URLs on a website, returning one response page and a continuation cursor.
- **Retrieve Content** (read-only): Retrieve stored page content by retrieve ID in selected live-supported formats, including hosted URLs for oversized output.
- **Scrape Page**: Synchronously scrape one web page and return requested content, links, metadata, a retrieve ID, and billing usage.
- **Search Web**: Synchronously search the web for relevant deduplicated links.
- **Start Crawl**: Start an asynchronous, usage-metered website crawl and immediately return its crawl ID and initial status.
