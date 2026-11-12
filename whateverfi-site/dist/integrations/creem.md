# Creem

Creem is a merchant-of-record platform for managing products, checkouts, subscriptions, customers, licenses, discounts, transactions, refunds, and revenue operations.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/creem/.

## Actions

- **Activate License**: Activate a Creem license key for a named device or instance.
- **Archive Product**: Archive a product so it can no longer be purchased.
- **Cancel Subscription**: Cancel an active Creem subscription immediately, at the end of its current billing period, or according to the store default.
- **Close Credit Account**: Experimental Creem API.
- **Create Checkout**: Create a live checkout session in the connected Creem production store for a one-time payment or subscription.
- **Create Credit Account**: Experimental Creem API.
- **Create Customer**: Create a customer record in the connected Creem production store.
- **Create Customer Portal Link**: Generate a sensitive customer portal link for managing billing, subscriptions, and payment methods in the connected Creem production store.
- **Create Discount**: Create a promotional discount for products in the connected Creem production store.
- **Create Product**: Create a product in the connected Creem production store for a one-time payment, free purchase, or subscription.
- **Credit Account**: Experimental Creem API.
- **Deactivate License**: Deactivate one device instance for a Creem license key and free its activation slot.
- **Debit Account**: Experimental Creem API.
- **Delete Discount**: Permanently delete a Creem discount code and prevent any further use.
- **Freeze Credit Account**: Experimental Creem API.
- **Get Affiliate** (read-only): Retrieve a single affiliate by ID, including referral link, click and conversion counts, and lifetime commission.
- **Get Checkout** (read-only): Retrieve a Creem checkout session by ID, including its status, product, customer, payment relationships, issued licenses, and metadata.
- **Get Credit Account** (read-only): Experimental Creem API.
- **Get Credit Account Balance** (read-only): Experimental Creem API.
- **Get Customer** (read-only): Retrieve one Creem customer by exactly one lookup field.
- **Get Discount** (read-only): Retrieve Creem discount details by exactly one lookup field.
- **Get Product** (read-only): Retrieve a single Creem product by its unique identifier.
- **Get Store Metrics** (read-only): Retrieve Creem store counts, revenue, and monthly recurring revenue in integer cents, optionally filtered and grouped by a date range.
- **Get Subscription** (read-only): Retrieve a Creem subscription by ID, including its status, billing cycle, customer, product, items, payment history, and timestamps.
- **Get Transaction** (read-only): Retrieve a single Creem transaction by ID, including payment amounts, status, tax details, and associated resource IDs.
- **List Affiliate Commissions** (read-only): Retrieve one page of an affiliate's commissions, optionally filtered by pending, approved, or paid settlement status.
- **List Affiliates** (read-only): Retrieve one page of joined Creem affiliates with referral links, click and conversion counts, and lifetime commission.
- **List Credit Account Entries** (read-only): Experimental Creem API.
- **List Credit Accounts** (read-only): Experimental Creem API.
- **List Customer Licenses** (read-only): Retrieve one page of license keys for a specific Creem customer.
- **List Customer Orders** (read-only): Retrieve one page of orders for a specific customer, including monetary details, statuses, related resource IDs, and pagination totals.
- **List Customers** (read-only): Retrieve one page of customers, including customer details and pagination totals.
- **List Discounts** (read-only): Search and retrieve one page of Creem discounts, optionally filtered by product, status, type, or creation date.
- **List License Instances** (read-only): Retrieve one page of activated instances for a Creem license.
- **List Products** (read-only): Search and retrieve one page of Creem products, optionally filtered by lifecycle status.
- **List Subscriptions** (read-only): Retrieve one page of Creem subscriptions across the store or for one customer, including product, customer, billing, transaction, and…
- **List Transactions** (read-only): Search and retrieve one page of Creem payment transactions, optionally filtered by customer, order, or product.
- **Pause Subscription**: Pause a Creem production subscription immediately or after its current billing period, stopping live billing while retaining it for later…
- **Refund Payment**: Issue an irreversible full refund of a payment's entire remaining refundable amount using its transaction ID.
- **Resume Subscription**: Resume a paused or scheduled-cancel Creem production subscription.
- **Reverse Credit Transaction**: Experimental Creem API.
- **Screen Prompt** (read-only): Evaluate a text prompt against Creem content policies before generation.
- **Unfreeze Credit Account**: Experimental Creem API.
- **Update Customer**: Update the name or metadata of an existing customer in the connected Creem production store.
- **Update Product**: Update at least one field on a product in the connected Creem production store.
- **Update Subscription**: Update items, units, seats, or add-ons on a Creem production subscription.
- **Upgrade Subscription**: Upgrade a subscription to a different product or plan in Creem production.
- **Validate License** (read-only): Verify that a Creem license key is valid and active for a specific instance, including its activation status and expiration.
