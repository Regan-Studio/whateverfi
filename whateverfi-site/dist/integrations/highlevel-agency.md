# HighLevel Agency

Manage agency-level HighLevel company data, users, custom menus, snapshots, and installations without location-level access.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/highlevel-agency/.

## Actions

- **Create Custom Menu**: Create an agency-only custom menu link that is never shown in sub-accounts.
- **Create Snapshot Share Link**: Create an externally usable share link for a snapshot belonging to a HighLevel agency/company ID, never a location ID.
- **Delete Agency User**: Queue permanent deletion of an agency user by ID.
- **Delete Custom Menu**: Permanently delete one agency custom menu link by its ID.
- **Find Agency Users by Email** (read-only): Return one page of agency users matching an exact batch of email addresses, including deleted users when requested, for a HighLevel…
- **Get Agency User** (read-only): Return one agency user's profile, role, permissions, and scopes by user ID.
- **Get Company** (read-only): Return a HighLevel agency's company profile and plan summary using its agency/company ID, never a location ID.
- **Get Custom Menu** (read-only): Return one agency custom menu link by its ID.
- **Get Installer Details** (read-only): Return agency, installer, and Marketplace plan details for this OAuth installation using the Marketplace OAuth App ID stored in the auth…
- **Get Last Snapshot Push** (read-only): Return the latest push status and asset progress for an agency snapshot at one target HighLevel sub-account.
- **List Custom Menus** (read-only): Return one page of agency-visible custom menu links, optionally filtered by title text.
- **List Snapshot Pushes** (read-only): Return one page of sub-account push statuses for an agency snapshot within an ISO 8601 date range.
- **List Snapshots** (read-only): Return all owned and imported snapshots for a HighLevel agency/company ID, never a location ID.
- **Search Agency Users** (read-only): Return one page of agency users matching name, email, phone, role, IDs, or sync filters for a HighLevel agency/company ID, never a…
- **Update Agency User Profile**: Update an agency user's name, phone, profile photo, or language without changing company, location access, permissions, scopes, email, or…
- **Update Custom Menu**: Update selected fields of an agency custom menu while preserving omitted fields and keeping all sub-account visibility disabled.
