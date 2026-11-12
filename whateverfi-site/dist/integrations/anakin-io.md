# Anakin

Anakin provides web scraping, crawling, search, browser automation, monitoring, and pre-built website actions for AI agents.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/anakin-io/.

## Actions

- **Create Monitor**: Create a recurring page or site monitor with optional structured extraction, browser rendering, and change alerts.
- **Delete Monitor**: Permanently delete a monitor and all of its retained history.
- **Execute Wire Action**: Start a parameterized asynchronous Wire action by action ID, optionally using an existing target-site credential, and return a job ID.
- **Get Agentic Search** (read-only): Check an agentic research job and return its generated summary and structured data when complete.
- **Get AI Visibility Search** (read-only): Check an AI visibility search and return its synthesis plus each engine's answer, verdict, latency, credit use, or error.
- **Get Crawl** (read-only): Check a crawl job and return page content, progress, timing, and errors.
- **Get Monitor** (read-only): Get one monitor's current configuration, schedule, and state by ID.
- **Get Monitor Snapshot Content** (read-only): Fetch the stored full-page content for a monitor snapshot identified by a detected change.
- **Get Scrape Job** (read-only): Check a single or batch scrape job and return requested content or per-URL results when complete.
- **Get Site Map** (read-only): Check a site-map job and return discovered internal and external links with timing and errors.
- **Get Wire Catalog** (read-only): Get one Wire website catalog with its executable actions, dynamic parameter schemas, authentication modes, and credit costs.
- **Get Wire Job** (read-only): Check a Wire job and return processing guidance, completed structured data or file metadata, credit use, execution time, or failure details.
- **List AI Visibility Sources** (read-only): List the AI engine slugs currently available for AI visibility searches.
- **List Monitor Changes** (read-only): List up to 200 recent detected changes for a monitor, newest first, including snapshot IDs and structured diffs.
- **List Monitors** (read-only): List all monitors owned by the connected account with their schedules, state, and configuration.
- **List Wire Jobs** (read-only): List Wire execution history one page at a time, including job status and summary statistics when available.
- **Resolve Wire Actions** (read-only): Find Wire actions by intent and optional catalog, category, or authentication filters, including required parameters and credit cost.
- **Run Monitor Now**: Queue an immediate check for an existing monitor.
- **Scrape URL**: Scrape one URL synchronously when possible, optionally using a browser, extraction schema, saved session, or page actions.
- **Search Web** (read-only): Run a synchronous AI-powered web search and return ranked pages with titles, snippets, and dates.
- **Set Monitor State**: Pause or resume a monitor.
- **Start Agentic Search**: Start a multi-stage web research job from a natural-language prompt and return its job ID for status checks.
- **Start AI Visibility Search**: Ask selected AI engines a query and return a search ID for collecting per-engine answers and synthesis.
- **Start Batch Scrape**: Start a parallel scrape of 1-10 URLs and return a job ID for Get Scrape Job.
- **Start Crawl**: Start a bounded multi-page crawl and return a job ID for Get Crawl.
- **Start Site Map**: Start a bounded site link-discovery job and return a job ID for Get Site Map.
