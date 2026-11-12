# WildApricot

WildApricot is an association management platform for administering contacts, memberships, events, finances, email, and online stores.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/wild-apricot/.

## Actions

- **Create Contact**: Create a WildApricot contact or member using an API key configured with Full access.
- **Delete Contact**: Permanently delete one WildApricot contact or member by ID using an API key configured with Full access.
- **Get Contact** (read-only): Get one WildApricot contact or member by ID, optionally including pending membership order, invoice, and allowed-action metadata.
- **Get Event** (read-only): Get full details for one WildApricot event by ID, including schedule, location, access, and registration settings.
- **List Accounts** (read-only): List WildApricot accounts available to this connection, including account IDs, plan indicators, contact limits, and provider-advertised…
- **List Contact Fields** (read-only): List contact and membership field definitions, including field names, types, and search/edit metadata used to construct contact filters…
- **List Event Registrations** (read-only): List event registrations for a required contact_id, event_id, or set of registration_ids, optionally including form details or waitlist…
- **List Membership Levels** (read-only): Return one page of membership levels, optionally restricted to specific IDs, with fees, application eligibility, type, and renewal metadata.
- **Search Contacts** (read-only): Return one synchronous page of contacts matching a simple text search or WildApricot filter.
- **Search Events** (read-only): Return one synchronous page of events matching a validated WildApricot event filter, ordered by event start date or session start.
