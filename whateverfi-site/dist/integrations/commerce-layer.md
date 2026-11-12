# Commerce Layer

Commerce Layer provides transactional commerce and analytics APIs for managing orders, inventory, pricing, customers, fulfillment, and related ecommerce operations.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/commerce-layer/.

## Actions

- **Create Customer**: Create one Commerce Layer customer from an email and optional external-reference metadata.
- **Delete Customer**: Permanently delete one Commerce Layer customer by exact ID.
- **Get Customer** (read-only): Retrieve one customer by its Commerce Layer resource ID.
- **Get Order** (read-only): Retrieve one Commerce Layer order by ID, optionally including customer, line-item, shipment, or return context.
- **Get Order Metric** (read-only): Compute one common order KPI over optional date, market, currency, and status filters using the Commerce Layer Metrics API.
- **List Customers** (read-only): Return one page of customers, optionally filtered by an exact email address.
- **List Orders** (read-only): Return one page of orders, newest first by default, for operational review and follow-up by order ID.
- **List SKUs** (read-only): Return one page of catalog SKUs for product discovery and ID lookup.
- **List Stock Items** (read-only): Return one page of stock items with inventory quantities and SKU codes.
- **Update Customer**: Update selected attributes of one Commerce Layer customer.
