# The Companies API

Search, enrich, and analyze company data, technologies, locations, lists, and related business intelligence.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/thecompaniesapi/.

## Actions

- **Create List**: Create an empty static company list with email notifications disabled.
- **Delete List**: Permanently delete a company list by ID and return the deleted list record.
- **Enrich Job Title** (read-only): Normalize a job title and infer its department and seniority classification.
- **Get Account Context** (read-only): Return the connected user, current team, subscription state, and remaining credit balance.
- **Get Company** (read-only): Return the cached company profile for an exact domain, optionally in a compact form.
- **List Companies In List** (read-only): Return one page of companies currently contained in a specified company list.
- **List Lists** (read-only): Return one page of company lists owned by the connected account.
- **Rename List**: Rename an existing company list without changing its query, synchronization, or notification settings.
- **Search Companies** (read-only): Search the company database with text or structured segmentation conditions and return one page of matching company profiles.
- **Search Taxonomy** (read-only): Search provider taxonomy values for industries, technologies, or geographic levels and return normalized identifiers for company filters.
