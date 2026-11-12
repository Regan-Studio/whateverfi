# RedCircle API

RedCircle API is the real-time Target product data API for accessing Target product catalog, reviews, and category data.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/redcircle-api/.

## Actions

- **Add Zipcodes**: Add zipcodes to your RedCircle API account for geolocation targeting.
- **Clear Collection Requests**: Remove all requests from a specified collection.
- **Create Collection**: Create a new collection for running up to 15,000 requests on a schedule.
- **Create Destination**: Create a new destination for uploading Collection Result Sets to cloud storage.
- **Create Requests**: Add up to 1,000 requests to an existing collection.
- **Delete Collection**: Remove a collection from the system by ID.
- **Delete Destination**: Remove a destination from your RedCircle API account.
- **Delete Request from Collection**: Remove an individual request from a collection.
- **Delete Requests In Bulk**: Delete multiple requests from a collection in bulk.
- **Get Account Information** (read-only): Retrieve account information, usage metrics, and platform status.
- **Get Collection** (read-only): Retrieve complete information about a specific collection.
- **Get Target Product Data** (read-only): Retrieve Target data in real-time including search results, product information, reviews, or category listings.
- **List Categories** (read-only): Retrieve all top-level (root) categories or filter results using optional parameters.
- **List Collections** (read-only): Retrieve all collections configured on your RedCircle API account with filtering and pagination.
- **List Destinations** (read-only): Retrieve all destinations configured on your RedCircle API account with pagination and filtering.
- **List Result Sets** (read-only): List all result sets for a collection.
- **Start Collection**: Initiate execution of a RedCircle API collection.
- **Stop All Collections**: Halt all currently active collections on your account.
- **Stop Collection**: Halt an active collection in queued or running state.
- **Update Collection**: Update an existing collection's configuration and settings.
- **Update Destination**: Modify an existing destination configuration on your RedCircle API account.
- **Update Request**: Modify a request within a collection.
- **Delete Zipcodes**: Remove zipcodes from your RedCircle API account.
- **Get Requests CSV Links** (read-only): Retrieve CSV download links for all requests in a collection.
- **Get Requests JSON Links** (read-only): Retrieve download links for all requests in a collection in JSON format.
- **Get Result Set CSV** (read-only): Retrieve a result set in CSV format with optional field filtering.
- **Get Result Set JSON** (read-only): Retrieve a result set in JSON format with download links.
- **Get Result Set JSON Lines** (read-only): Retrieve a result set in JSON Lines format with download links.
- **List Error Logs** (read-only): List all error logs on your RedCircle API account.
- **List Requests by Page** (read-only): Retrieve requests for a collection in paginated format.
- **List Zipcodes** (read-only): Retrieve all zipcodes associated with your account with optional filtering.
- **Resend Webhook**: Resend a previously configured webhook POST request for a result set.
