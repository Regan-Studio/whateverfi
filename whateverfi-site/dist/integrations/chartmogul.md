# ChartMogul

ChartMogul is a subscription analytics and revenue data platform for managing customers, billing data, metrics, and sales opportunities.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/chartmogul/.

## Actions

- **Create Customer**: Create a customer under a ChartMogul data source using a caller-owned external ID and optional profile or lead details.
- **Delete Customer**: Request permanent deletion of a customer and all associated ChartMogul data by UUID.
- **Get Account** (read-only): Return the connected ChartMogul account's identity, reporting currency, time zone, week start, and optionally selected churn and refund…
- **Get Customer** (read-only): Return one customer and its identifiers, lifecycle status, revenue values, ownership, location, and attributes by ChartMogul UUID.
- **Get Key Metrics** (read-only): Return all key subscription metrics and current summaries for a date range, optionally grouped by interval and filtered by countries or…
- **List Activities** (read-only): Return one page of ChartMogul MRR activities for an optional date range, movement type, and date order, with a cursor when more are…
- **List Customers** (read-only): Return one page of customers filtered by source, identifier, email, status, or billing system.
- **List Plans** (read-only): Return one page of subscription plans, optionally filtered by source, external ID, or billing system.
- **List Sources** (read-only): Return the account's billing data sources, optionally filtered by name or system and with selected source settings included.
- **Update Customer**: Update selected profile, ownership, location, timing, website, or lead-status fields on an existing ChartMogul customer.
