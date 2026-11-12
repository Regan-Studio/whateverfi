# Gelato

Gelato is a print-on-demand platform for creating and managing orders, browsing printable products and prices, checking stock, and finding shipment methods.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/gelato/.

## Actions

- **Cancel Order**: Cancel a regular Gelato order before production advances too far.
- **Check Stock Availability** (read-only): Check current regional stock status for 1 to 250 Gelato product UIDs.
- **Create Draft Order**: Create a Gelato draft for review or later submission without entering production.
- **Create Order**: Create a production order that can immediately enter fulfillment and charge the connected account.
- **Delete Draft Order**: Permanently delete a Gelato draft.
- **Get Catalogs** (read-only): List available Gelato product catalogs, or provide catalog_uid to retrieve one catalog's full product-attribute definitions and allowed…
- **Get Order** (read-only): Retrieve the full current state, financial status, fulfillment status, shipment tracking, items, and totals of one Gelato order by its…
- **Get Product** (read-only): Retrieve one Gelato product's attributes, dimensions, weight, supported countries, printability, stockability, content areas, and valid…
- **Get Product Prices** (read-only): Return Gelato's quantity price tiers for one product, optionally localized by destination country, currency, and multipage page count.
- **Quote Order** (read-only): Quote product and shipping costs and delivery estimates for a destination before creating an order.
- **Search Orders** (read-only): Search Gelato orders with status, reference, date, country, currency, channel, type, store, or free-text filters and return one…
- **Search Products** (read-only): Search printable products in a Gelato catalog by catalog attribute values and return one offset-controlled page.
- **Submit Draft Order**: Convert an existing draft into a regular production order.
