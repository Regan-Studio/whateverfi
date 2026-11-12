# Enrich

Enrich provides organization-scoped APIs for email validation, contact discovery, profile enrichment, lead research, and credit management.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/enrich/.

## Actions

- **Batch Find Work Emails**: Submit 1-100 people for asynchronous work-email finding, reserve up to 10 credits per case-insensitively unique lead, poll the batch to…
- **Batch Lookup People by Email**: Submit 1-100 emails for asynchronous professional-profile lookup, reserve up to 10 credits per case-insensitively unique email, poll the…
- **Batch Validate Emails**: Submit 1-100 emails as one asynchronous Enrich validation batch, reserving up to 1 credit per case-insensitively unique email.
- **Count Leads** (read-only): Count leads matching Enrich Lead Finder filters without returning lead records.
- **Find Company Employees** (read-only): Find employees at a company from its LinkedIn URL, optionally filtering by geography and role.
- **Find Work Email** (read-only): Find a person's professional email from their first name, last name, and company domain.
- **Get Credit Balance** (read-only): Return the connected organization's current Enrich credit balance and the time it was measured.
- **Get Lead Filter Options** (read-only): Return Enrich's current Lead Finder option catalog, keyed by filter name, for constructing count and search filters.
- **List Credit Transactions** (read-only): Return one page of credit top-ups and charges for the connected organization, optionally filtered by transaction type.
- **Lookup Person by Email** (read-only): Look up a professional profile from one email address.
- **Resume Existing Batch** (read-only): Recover an existing validation, work-email, or people-lookup batch after a timeout or interrupted call.
- **Search Company ICP** (read-only): Run Enrich's ranked cascade search for ideal-customer-profile employees at one company.
- **Search Leads** (read-only): Return one page of leads matching Lead Finder filters.
- **Validate Email** (read-only): Check one email address for deliverability and return Enrich's result, confidence, provider, catch-all signal, and credit usage.
