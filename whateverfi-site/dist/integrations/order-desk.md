# Order Desk

Order Desk is an order management platform for managing orders, shipments, inventory, and store data across ecommerce integrations.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/order-desk/.

## Actions

- **Add Order History Note**: Append a timestamped note permanently to an existing order's history.
- **Add Order Item**: Add one line item to an existing order.
- **Add Order Items**: Add two to 10 line items sequentially to the same order and return a result for every processed item.
- **Create Inventory Item**: Create one inventory item with a unique SKU and return its positive Order Desk ID and complete created representation.
- **Create Inventory Items**: Create two to 10 inventory items sequentially and return each created ID or error.
- **Create Shipments**: Create one or more shipment records across orders in one request and report the success or error returned for every shipment.
- **Delete Inventory Item**: Permanently delete one inventory item by its positive Order Desk ID.
- **Delete Order Item**: Permanently remove one line item from an order.
- **Delete Shipment**: Permanently remove one shipment record from an order.
- **Get Inventory Item** (read-only): Get one inventory item by its positive Order Desk ID.
- **Get Order** (read-only): Get one order and its addresses, line items, shipments, metadata, notes, and discounts by Order Desk internal ID.
- **Get Store Metadata** (read-only): Return safe store identity, locale, timezone, page-size settings, and folder IDs and names without exposing credentials or email…
- **List Inventory Items** (read-only): Search inventory items in the connected store by ID, SKU, name, metadata, manufacturer SKU, location, or update time.
- **List Order Items** (read-only): Return all line items for one order.
- **List Order Shipments** (read-only): Return all shipments recorded for one order.
- **List Orders** (read-only): Find orders in the connected store using at least one narrowing filter and return one bounded page.
- **Move Orders**: Move one or more orders to exactly one destination folder selected by positive ID or exact name, with a result for every order.
- **Update Inventory Items**: Safely update selected fields on one or more inventory items while preserving every omitted field.
- **Update Order Item**: Safely update selected fields on one order line item while preserving every omitted field.
- **Update Shipment**: Safely update selected fields on one shipment while preserving every omitted field.
