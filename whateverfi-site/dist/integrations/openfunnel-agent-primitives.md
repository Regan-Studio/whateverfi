# OpenFunnel Agent Primitives

OpenFunnel Agent Primitives provides composable company search, research, lookup, and enrichment APIs for AI sales agents.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/openfunnel-agent-primitives/.

## Actions

- **Cancel Bulk Lookalike Search**: Irreversibly request cancellation of a pending or running bulk lookalike job.
- **Get Bulk Lookalike Results** (read-only): Check an asynchronous bulk lookalike job and return one result page.
- **Get Credit Balance** (read-only): Return total, used, and remaining credits for the connected OpenFunnel account before or after paid searches.
- **List Country Codes** (read-only): List all ISO 3166-1 alpha-3 country codes accepted by tech-search country filters, ordered by company volume.
- **List Firmographic Options** (read-only): List the live funding stages, location codes, and employee bounds accepted by lookalike search filters.
- **Lookup Companies** (read-only): Resolve a batch of 1-100 company names, domains, or LinkedIn URLs to ordered candidate records.
- **Research Company** (read-only): Qualify one known company from recent hiring activity, current team composition, or both, with cited evidence.
- **Search Companies by Tech Stack** (read-only): Return one fixed page of 50 companies whose recent job postings mention a technology.
- **Search Lookalike Companies** (read-only): Find up to 100 companies similar to a natural-language trait or seed domains.
- **Start Bulk Lookalike Search**: Start an asynchronous lookalike job for up to 10,000 companies.
