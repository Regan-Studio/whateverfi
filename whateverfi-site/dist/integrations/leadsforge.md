# Leadsforge

Leadsforge provides lead search, company discovery, and contact enrichment APIs for sales prospecting workflows.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/leadsforge/.

## Actions

- **Count Leads** (read-only): Count people matching Leadsforge person and company filters without returning lead records.
- **Find Mobile Phone** (read-only): Find one person's mobile phone number synchronously using a Leadsforge person ID, LinkedIn URL, or name plus a company signal.
- **Find Work Email** (read-only): Find one person's work email synchronously from a Leadsforge person ID, LinkedIn URL, or full name plus a company signal.
- **Get Balance** (read-only): Return available and reserved credits plus current enrichment and company-discovery prices.
- **Get Company Follower Filter Values** (read-only): Return supported countries, departments, seniority levels, or states accepted by START_COMPANY_FOLLOWER_SEARCH.
- **Get Company Follower Job** (read-only): Get one company-follower job's status, progress, company context, credit accounting, result path, and webhook metadata.
- **Get Enrichment Job** (read-only): Get the current status, progress, credit accounting, result URL, and webhook metadata for one asynchronous enrichment job.
- **Get Lookalike Filter Values** (read-only): Return controlled departments, employee ranges, locations, or seniorities accepted by Leadsforge company lookalike preview and search.
- **Get Maps Categories** (read-only): Return Leadsforge's curated Google Maps business categories recommended for Start Maps Business Search.
- **Get Maps Owner Job** (read-only): Get one snapshot of a Maps owner-enrichment job's lifecycle status, business progress, owner count, credit accounting, acceptance…
- **Get Maps Search Job** (read-only): Get one local-business Maps search job's current status, search inputs, found count, credit accounting, result and status URLs, and…
- **Get Search Filter Values** (read-only): Return the exact controlled values accepted by SEARCH_LEADS for company types, departments, funding types, revenue ranges, or seniorities.
- **List Company Follower Jobs** (read-only): List and recover company-follower jobs, newest first, with optional lifecycle status, client request ID, and RFC3339 time filters.
- **List Company Follower Results** (read-only): Return one native offset-controlled page of sensitive LinkedIn follower profiles for a company-follower job.
- **List Enrichment Jobs** (read-only): List and recover enrichment jobs, newest first, with optional lifecycle status, channel, client request ID, and RFC3339 time filters.
- **List Enrichment Results** (read-only): Return one native offset-controlled page of results for an enrichment job.
- **List Maps Owner Jobs** (read-only): List and recover Maps owner-enrichment jobs, newest first, using optional status, client request ID, and RFC3339 time filters.
- **List Maps Owner Results** (read-only): Return one native offset page of sensitive owner and contact records for a Maps owner-enrichment job.
- **List Maps Search Jobs** (read-only): List and recover local-business Maps search jobs, newest first, using status, client request ID, and RFC3339 time filters.
- **List Maps Search Results** (read-only): Return one native offset/limit page of public business records found by a Maps search, including business addresses, domains, and public…
- **Preview Lookalike Companies** (read-only): Return a documented free, uncharged preview of companies similar to 1-10 source domains, optionally filtered by categories, employee…
- **Search Company Follower Job Titles** (read-only): Search one native page of supported job-title values accepted by START_COMPANY_FOLLOWER_SEARCH.
- **Search Industry Values** (read-only): Search and page the exact case-sensitive industry values accepted by SEARCH_LEADS.company_industries.
- **Search Leads** (read-only): Search people with Leadsforge person and company filters and return one cursor-controlled page of lead identities, roles, LinkedIn URLs,…
- **Search Lookalike Companies** (read-only): Run a billable paged search for companies similar to 1-10 source domains.
- **Start Bulk Email Discovery**: Start a billable asynchronous work-email discovery job for 1-500 unique people or Leadsforge person IDs.
- **Start Bulk LinkedIn Discovery**: Start a billable asynchronous LinkedIn-profile discovery job for 1-500 unique people or Leadsforge person IDs.
- **Start Bulk Phone Discovery**: Start a billable asynchronous phone-number discovery job for 1-500 unique people or Leadsforge person IDs.
- **Start Company Follower Search**: Start a billable asynchronous search of followers of one LinkedIn company page, optionally filtered by supported geography, department,…
- **Start Maps Business Search**: Start a billable asynchronous Google Maps business search.
- **Start Maps Owner Enrichment**: Start billable asynchronous owner discovery for 1-200 businesses from one Maps search job, requesting up to 1-8 owners per business and…
- **Suggest Lead Locations** (read-only): Resolve a location string to canonical region-level tokens that match people and can be passed to SEARCH_LEADS.lead_locations.
