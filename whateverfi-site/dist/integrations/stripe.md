# Stripe

Stripe offers online payment infrastructure, fraud prevention, and APIs enabling businesses to accept and manage payments globally

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/stripe/.

## Actions

- **Cancel subscription**: Cancels a customer's active stripe subscription at the end of the current billing period, with options to invoice immediately for metered…
- **Create a price**: Creates a new stripe price for a product, defining its charges (one-time or recurring) and billing scheme.
- **Create an invoice**: Creates a new draft stripe invoice for a customer.
- **Create Customer**: Creates a new customer in stripe, required for creating charges or subscriptions.
- **Create payment intent**: Creates a stripe paymentintent to initiate and process a customer's payment.
- **Create product**: Creates a new product in stripe, encoding the request as application/x-www-form-urlencoded by flattening nested structures.
- **Create Refund**: Creates a full or partial refund in stripe, targeting either a specific charge id or a payment intent id.
- **Create subscription**: Creates a new, highly configurable subscription for an existing stripe customer, supporting multiple items, trials, discounts, and various…
- **Delete customer**: Permanently deletes an existing stripe customer.
- **List customer payment methods** (read-only): Retrieves a list of payment methods for a given customer, supporting type filtering and pagination.
- **List payment links** (read-only): Retrieves a list of payment links from stripe, sorted by creation date in descending order by default.
- **List Refunds** (read-only): Lists stripe refunds, sorted by creation date descending (newest first), with optional filtering by charge or payment intent and…
- **List Stripe shipping rates** (read-only): Retrieves a list of stripe shipping rates, filterable by active status, creation date, and currency.
- **List tax rates** (read-only): Retrieves a list of tax rates, which are returned sorted by creation date in descending order.
- **Retrieve a refund** (read-only): Retrieves details for an existing stripe refund using its unique refund id.
- **Retrieve Charge Details** (read-only): Retrieves full details for an existing stripe charge using its unique id.
- **Retrieve payment intent** (read-only): Retrieves a paymentintent by its id.
- **Search Stripe customers** (read-only): Retrieves a list of stripe customers matching a search query that adheres to stripe's search query language.
- **Update Payment Intent**: Updates a stripe paymentintent with new values for specified parameters.
- **Update Subscription**: Updates an existing, non-canceled stripe subscription by its id, ensuring all referenced entity ids (e.g., prices, coupons) are valid and…
- **Confirm payment intent**: Confirms a stripe paymentintent to finalize a payment.
- **List Charges** (read-only): Retrieves a list of stripe charges with filtering and pagination.
- **List customers** (read-only): Retrieves a list of stripe customers, with options to filter by email, creation date, or test clock, and support for pagination.
- **List Invoices** (read-only): Retrieves a list of stripe invoices, filterable by various criteria and paginatable using invoice id cursors obtained from previous…
- **List payment intents** (read-only): Retrieves a list of stripe paymentintents, optionally filtered and paginated using paymentintent ids as cursors.
- **List products** (read-only): Retrieves a list of stripe products, with optional filtering and pagination.
- **List Stripe coupons** (read-only): Retrieves a list of discount coupons from a stripe account, supporting pagination via limit, starting after, and ending before.
- **List subscriptions** (read-only): Retrieves a list of stripe subscriptions, optionally filtered by various criteria such as customer, price, status, collection method, and…
- **List tax codes** (read-only): Retrieves a paginated list of globally available, predefined stripe tax codes used for classifying products and services in stripe tax.
- **Retrieve Balance** (read-only): Retrieves the complete current balance details for the connected stripe account.
- **Retrieve customer** (read-only): Retrieves detailed information for an existing stripe customer using their unique customer id.
- **Retrieve subscription** (read-only): Retrieves detailed information for an existing stripe subscription using its unique id.
- **Update Customer**: Updates an existing stripe customer, identified by customer id, with only the provided details.
