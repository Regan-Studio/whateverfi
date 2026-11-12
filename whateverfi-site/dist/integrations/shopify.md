# Shopify

Shopify is an e-commerce platform. This toolkit is GraphQL-first for new Admin API automations while retaining legacy REST compatibility actions for older workflows and numeric-ID interoperability

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/shopify/.

## Actions

- **Count product images** (read-only): Retrieves the total count of images for a shopify product, useful for inventory management or display logic.
- **Create a custom collection**: Creates a new custom collection in a shopify store, requiring a unique title for manually curated product groupings (e.g., 'new arrivals',…
- **Create a product**: Creates a new product in a shopify store.
- **Create an order**: Creates a new order in shopify, typically requiring line items.
- **Create Customer**: Create a new customer in shopify.
- **Create Product Image**: Create a new product image for a given product.
- **Get All Customers** (read-only): Retrieves customer records from a shopify store, with options for filtering, selecting specific fields, and paginating through the results.
- **Get Customer** (read-only): Retrieves detailed information for a specific customer from a shopify store, provided their valid and existing customer id.
- **Get Shop Details** (read-only): Retrieves comprehensive administrative information about the authenticated shopify store, as defined by the shopify api.
- **Add product to custom collection**: Adds a product to an existing *custom collection*, optionally specifying its position if the collection is manually sorted.
- **Delete a product**: Deletes a specific, existing product from a shopify store using its unique product id.
- **Delete custom collection**: Permanently deletes a custom collection from a shopify store using its collection id.
- **Delete product image**: Deletes a specific image from a product in shopify, requiring the product id of an existing product and the image id of an image currently…
- **Get collection by ID** (read-only): Retrieves a specific shopify collection by its collection id, optionally filtering returned data to specified fields.
- **Get collects** (read-only): Retrieves a list of collects from a shopify store, where a collect links a product to a custom collection.
- **Get collects count** (read-only): Retrieves the total count of collects (product-to-collection associations) in a shopify store.
- **Get custom collections** (read-only): Retrieves a list of custom collections from a shopify store, optionally filtered by ids, product id, or handle.
- **Get custom collections count** (read-only): Retrieves the total number of custom collections in a shopify store.
- **Get customer orders** (read-only): Retrieves all orders for a specific, existing customer in shopify using their unique customer id.
- **Get order by id** (read-only): Retrieves a specific shopify order by its unique id, which must correspond to an existing order.
- **Get order list** (read-only): Retrieves a list of orders from shopify using default api settings and filters.
- **Get product** (read-only): Retrieves details for an existing shopify product using its unique product id.
- **Get product image** (read-only): Retrieves detailed information for a specific product image, identified by its id and its associated product id, from a shopify store.
- **Get Product Images** (read-only): Retrieves all images for a shopify product, specified by its product id which must correspond to an existing product.
- **Get products** (read-only): Retrieves a list of products from a shopify store.
- **Get products count** (read-only): Retrieves the total, unfiltered count of all products in a shopify store.
- **Get products in collection** (read-only): Retrieves all products within a specified shopify collection, requiring a valid collection id.
- **Update Order**: Updates the phone number for an existing shopify order, identified by its id.
