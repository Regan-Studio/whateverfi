# Starshipit

Starshipit provides shipping, fulfilment, order, tracking, and warehouse management APIs for ecommerce operations.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/starshipit/.

## Actions

- **Create Manifest**: Create and finalize a Starshipit manifest PDF for only the explicitly listed shipments.
- **Create Order**: Create one unshipped Starshipit order with destination, line items, packages, sender, and customs details.
- **Create Shipping Label**: Create shipping labels for one Starshipit order.
- **Create Shipping Labels**: Create shipping labels for multiple existing Starshipit orders in one irreversible batch.
- **Get Order** (read-only): Retrieve one order by its Starshipit numeric ID or source-platform order number.
- **Get Shipping Rates** (read-only): Quote available Starshipit shipping services and prices for a destination and one or more packages.
- **Get Tracking** (read-only): Get current shipment status and carrier tracking events by tracking number or order number.
- **Get WMS Performance** (read-only): Return Starshipit WMS order-cycle and SLA performance metrics for the previous 1 to 90 days.
- **List Manifests** (read-only): Return one page of manifests in reverse chronological order.
- **List Products** (read-only): Search and page through the Starshipit product catalogue with optional sorting.
- **List Tags** (read-only): Return one page of user-defined order tags, optionally filtered by tag name.
- **List Unshipped Orders** (read-only): Return one page of unshipped orders, optionally limited to orders created or updated after a UTC timestamp.
- **List WMS Inventory** (read-only): Return one page of Starshipit WMS inventory grouped by product or location, including stock, reservation, and availability quantities.
- **Search Orders** (read-only): Search orders by a phrase and optional field, status, or child-account inclusion filter.
- **Update Order**: Update editable fields on one Starshipit order identified by order_id or order_number.
