# Crawlbase

Crawlbase provides APIs for crawling web pages, managing crawler queues, storing crawl results, and monitoring account usage.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/crawlbase/.

## Actions

- **Crawl URL**: Fetch a public HTTP or HTTPS URL through Crawlbase using the connected Normal token and return its content with separate target and…
- **Delete Stored Pages**: Irreversibly delete explicitly selected pages from Crawlbase Cloud Storage by request ID and return each page's deletion outcome.
- **Generate User Agents** (read-only): Generate one to ten realistic randomized User-Agent strings for a selected device class.
- **Get Crawling Usage** (read-only): Return current Crawling API usage and optionally previous-month statistics for the connected Crawlbase account.
- **Get Storage Count** (read-only): Return the number of pages currently held in Crawlbase Cloud Storage.
- **Get Stored Page** (read-only): Retrieve the latest Crawlbase Cloud Storage page by exactly one request ID or original URL.
- **Get Stored Pages** (read-only): Retrieve up to 100 Crawlbase Cloud Storage pages by request ID without deleting them.
- **List Stored Page IDs** (read-only): Return one page of Crawlbase Cloud Storage request IDs and a short-lived continuation cursor.
