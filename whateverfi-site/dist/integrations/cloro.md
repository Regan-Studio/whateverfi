# Cloro

Cloro provides structured data from Google Search and leading AI assistants, with synchronous extraction and asynchronous task APIs.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/cloro/.

## Actions

- **Extract AI Answer** (read-only): Synchronously extract a Gemini or Perplexity answer for a prompt and country.
- **Extract Google AI Mode Answer** (read-only): Extract a structured Google AI Mode answer with sources and optional rich modules for a prompt and country.
- **Get Async Queue Status** (read-only): Read organization-wide queued and processing counts, priority distribution, and current async concurrency without modifying the queue.
- **Get Async Task** (read-only): Get a queued Cloro task by ID, or wait with bounded polling until it reaches COMPLETED or FAILED.
- **Get Credits** (read-only): Read the organization's current completed-charge credit balance and billing cycle.
- **List Supported Countries** (read-only): Return Cloro's current supported country codes, optionally filtered by provider model.
- **List US States** (read-only): Return the US state and DC codes accepted for state-level targeting.
- **Search Google** (read-only): Extract structured Google web or Google News results for a query and country.
- **Submit Async Task**: Queue one non-cancelable Cloro monitor task and return its task ID and estimated credit charge without waiting.
- **Submit Async Task Batch**: Queue 1-500 independently validated, non-cancelable Cloro monitor tasks.
