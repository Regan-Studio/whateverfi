# PayPal Zettle

PayPal Zettle provides APIs for merchant product libraries, inventory, purchases, finance, user information, and webhook subscriptions.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/zettle/.

## Actions

- **Count Products** (read-only): Retrieve the count of existing products for a merchant organization.
- **Count Products By Tax Rate** (read-only): Get each tax rate and its associated product count.
- **Create Categories**: Create one or more product categories in one request and return creation metadata.
- **Create Discount**: Create a fixed-amount or percentage discount in a product library.
- **Create Inventory**: Create one Zettle STORE inventory from its name and optional description.
- **Create Product**: Create a product and up to 99 complete embedded variants.
- **Create Tax Rates**: Create up to 15 tax rates in one request.
- **Create Webhook Subscription**: Create a Zettle webhook subscription for selected events at a public HTTPS destination and return the signing key needed to verify…
- **Delete Category**: Permanently delete a category.
- **Delete Discount**: Permanently delete one discount.
- **Delete Products**: Permanently delete one or more products and their embedded variants.
- **Delete Tax Rate**: Permanently delete one tax rate.
- **Delete Webhook Subscription**: Permanently delete a Zettle webhook subscription.
- **Fetch Product Image** (read-only): Fetch a product image by lookup key, optionally resizing, cropping, or converting it, and return a downloadable file.
- **Generate Product Slug** (read-only): Create a unique online product slug from a product name.
- **Get Discount** (read-only): Retrieve one discount from a merchant's product library.
- **Get Finance Balance** (read-only): Get the balance of the merchant's preliminary or liquid Zettle account, optionally at a specified point in time.
- **Get Import Status** (read-only): Return the latest product-library import status, or a specific import when import_uuid is provided.
- **Get Inventory** (read-only): Fetch one inventory belonging to the connected Zettle organization.
- **Get Payout Info** (read-only): Get the connected merchant's liquid-account payout balance, next payout amount, voucher discount balance, and payout schedule at a point…
- **Get Product** (read-only): Retrieve one product and its complete embedded variants.
- **Get Product Library** (read-only): Return one page of the complete product library or changes after an event-log UUID, including full products, embedded variants, and…
- **Get Product Stock** (read-only): Return one page of variant stock balances from the documented product- and inventory-specific Zettle endpoint, including low-stock…
- **Get Purchase** (read-only): Fetch one immutable Zettle purchase or refund by its UUID version 1, including complete item, payment, discount, tax, and refund details.
- **Get Selected Products Stock** (read-only): Return one page of product-variant stock balances for selected products in one Zettle inventory.
- **Get Tax Rate** (read-only): Get one tax rate.
- **Get Tax Settings** (read-only): Get organization tax settings and the organization UUID needed by other Zettle actions.
- **Get Tracking Status** (read-only): Return inventory-tracking status for selected Zettle products.
- **Import Library Items**: Start an asynchronous product import.
- **Import Product Images**: Import one or more product images from HTTPS URLs and return their lookup keys.
- **List Categories** (read-only): Retrieve all product categories for a merchant organization.
- **List Discounts** (read-only): Retrieve all discounts from a merchant's product library.
- **List Finance Transactions** (read-only): Return one page of transactions from a Zettle preliminary or liquid account within a required date range, optionally filtered by…
- **List Inventories** (read-only): List the merchant organization's inventories and the UUIDs needed for stock-management actions.
- **List Inventory Stock** (read-only): Return one page of product-variant stock balances from the documented inventory-specific Zettle endpoint, including low-stock settings and…
- **List Library Images** (read-only): Retrieve all image references used by library items.
- **List Product Options** (read-only): Retrieve aggregate active variant options in the product library.
- **List Products** (read-only): List all POS-visible products with complete embedded variants in the selected current or legacy representation.
- **List Purchases** (read-only): Return one page of purchases and refunds from up to three years ago, with date and ordering filters plus an opaque continuation cursor.
- **List Stock** (read-only): Return one page of variant stock balances across Zettle store inventories, optionally filtered by inventory or product.
- **List Stock Updates** (read-only): Return one page of stock-balance updates made at or after a timestamp, optionally filtered to specific inventories, with a continuation…
- **List Tax Rates** (read-only): List the connected merchant's tax rates.
- **List Tracked Products** (read-only): Return one page of UUIDs for Zettle products with inventory tracking enabled, with an opaque continuation cursor when more records are…
- **List Tracking Updates** (read-only): Return one page of product inventory-tracking status changes made at or after a timestamp, with a continuation cursor when more are…
- **List Webhook Subscriptions** (read-only): List all webhook subscriptions configured for a Zettle organization.
- **Move Inventory Stock**: Atomically move product-variant quantities between inventories.
- **Set Inventory Tracking**: Start or stop inventory tracking for one or more Zettle products.
- **Set Low Stock Levels**: Set low-stock refill thresholds and Zettle Go alert settings for product variants across inventories.
- **Update Category**: Rename a category.
- **Update Discount**: Update selected fields of a discount using JSON merge-patch semantics, optionally guarded by its ETag.
- **Update Product**: Replace a product using Zettle's full update contract.
- **Update Tax Rate**: Update one tax rate.
- **Update Tax Settings**: Update the organization's taxation mode.
- **Update Webhook Subscription**: Change a Zettle webhook subscription's selected events, HTTPS destination, transport, or contact email.
- **Upload Product Image**: Upload one GIF, JPEG, or PNG product image smaller than 5 MB and larger than 50 by 50 pixels.
