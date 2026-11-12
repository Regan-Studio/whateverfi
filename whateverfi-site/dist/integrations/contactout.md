# ContactOut

ContactOut provides professional profile enrichment, contact discovery, people and company search, email verification, usage reporting, and campaign management APIs.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/contactout/.

## Actions

- **Add Campaign Recipients**: Add 1-100 recipients to an existing campaign.
- **Check LinkedIn Contact Availability** (read-only): Check whether a LinkedIn profile has a personal email, work email, or phone without revealing it or consuming credits.
- **Count People** (read-only): Estimate matching people and available personal emails, work emails, and phones from substantive People Search filters without consuming…
- **Create Bulk Email Verification Job**: Queue asynchronous deliverability verification for 1-100 email addresses, optionally delivering results to an HTTP or HTTPS callback URL.
- **Create LinkedIn Contact Info Batch Job**: Queue asynchronous contact discovery for 1-1000 LinkedIn profiles, optionally delivering results to a callback URL.
- **Enrich Companies by Domain** (read-only): Return company profiles for 1-30 domains.
- **Enrich LinkedIn Profile** (read-only): Return a professional profile for a regular LinkedIn profile URL, optionally including contact data.
- **Enrich Person** (read-only): Find and enrich one person using a LinkedIn URL, email, or phone.
- **Enrich Person by Email** (read-only): Return a professional profile matched from an email address, optionally requesting real-time work-email verification.
- **Find LinkedIn Profile by Email** (read-only): Resolve an email address to its matching LinkedIn profile URL.
- **Get API Usage Stats** (read-only): Return ContactOut API credit usage and quotas for a billing month.
- **Get Bulk Email Verification Job** (read-only): Get the status and available per-email results of an asynchronous bulk email-verification job.
- **Get Campaign** (read-only): Return one campaign's sequence steps and optionally its performance statistics.
- **Get Hashed Email Identifiers** (read-only): Return unordered SHA-256 hashes of normalized personal emails found for 5-100 distinct LinkedIn profiles.
- **Get LinkedIn Contact Info** (read-only): Reveal email and optionally phone contact information for one regular LinkedIn profile URL.
- **Get LinkedIn Contact Info Batch** (read-only): Synchronously reveal contact information for 1-100 LinkedIn profiles.
- **Get LinkedIn Contact Info Batch Job** (read-only): Get the status and available results of an asynchronous LinkedIn contact-info batch job.
- **List Campaigns** (read-only): Return one page of email campaigns and their lifecycle statuses.
- **List Decision Makers** (read-only): Return one page of key decision makers for the best-matching company.
- **Remove Campaign Recipients**: Destructively remove 1-100 recipients from an existing campaign by email.
- **Search Companies** (read-only): Return one page of companies matching identity, size, location, industry, technology, revenue, or founding-year filters.
- **Search People** (read-only): Return one page of professional profiles matching person, role, employer, education, location, and contact-availability filters.
- **Start Campaign**: Start a draft ContactOut campaign or resume a stopped campaign.
- **Stop Campaign**: Stop a running ContactOut campaign, interrupting its outreach.
- **Verify Email** (read-only): Check one email address for valid, invalid, accept-all, disposable, or unknown deliverability.
