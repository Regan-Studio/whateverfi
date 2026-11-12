# Printify

Printify is a print-on-demand platform for managing merchant shops, products, orders, uploads, catalog data, and webhooks.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/printify/.

## Actions

- **Archive Uploaded Image**: Irreversibly archive an image in the connected merchant's Printify media library.
- **Calculate Order Shipping** (read-only): Calculate available shipping-cost estimates for proposed line items and a destination.
- **Create Draft Product**: Create a new product draft in a Printify shop.
- **Create Webhook**: Create a persistent webhook subscription for a Printify shop.
- **Delete Product**: Permanently delete a product from a Printify shop.
- **Delete Webhook**: Permanently delete a Printify webhook subscription so future events are no longer delivered.
- **Get Blueprint** (read-only): Get the full catalog record for one Printify product blueprint, including its description and images.
- **Get Catalog Shipping Details** (read-only): Get per-variant shipping costs and handling-time ranges for one advertised V2 shipping method.
- **Get Order** (read-only): Get complete details for one Printify order, including its recipient address, line items, status, shipping method, shipments, and…
- **Get Product** (read-only): Get the complete Printify record for one product in a shop, including variants, print areas, images, visibility, and sales-channel…
- **List Blueprint Print Providers** (read-only): List print providers that can fulfill a specific Printify blueprint.
- **List Blueprint Variants** (read-only): List purchasable variants and print placeholders for a blueprint and print provider.
- **List Catalog Shipping Methods** (read-only): List the V2 shipping methods actually available for a Printify blueprint and print provider.
- **List Orders** (read-only): Return one page of orders in a Printify shop, optionally filtered by provider status or exact SKU.
- **List Products** (read-only): Return one page of products in a Printify shop.
- **List Shops** (read-only): List shops available to the connected Printify merchant account.
- **List Uploaded Images** (read-only): Return one page of images in the connected merchant's Printify media library.
- **List Webhooks** (read-only): List webhook subscriptions configured for a Printify shop.
- **Mark Product Unpublished**: Notify Printify that a product has been unpublished from the connected sales channel.
- **Publish Product Changes**: Start asynchronous publication of one or more fields selected in fields_to_publish from Printify to the shop's connected sales channel.
- **Search Catalog Blueprints** (read-only): Search Printify's product blueprint catalog by case-insensitive text in title, brand, or model.
- **Simulate Webhook Event**: Ask Printify to send a simulated event to an existing webhook's external callback URL.
- **Update Product Draft**: Update selected fields of an existing Printify product.
- **Update Webhook URL**: Replace the callback URL of an existing Printify webhook subscription.
- **Upload Image**: Add an image to the connected merchant's Printify media library from either a public HTTP(S) URL or base64 content.
