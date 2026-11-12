# Postal Data API

Postal Data API validates and looks up postal codes, locations, coordinates, and regional metadata across more than 240 countries and territories.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/postal-data-api/.

## Actions

- **Get API Information** (read-only): Return Postal Data API version, coverage, usage guidance, current balance, and configured rate-limit status when returned, for…
- **Get Postal Code Metadata** (read-only): Return all available country-specific metadata for a postal code, such as coordinates, timezone, county, elevation, and administrative…
- **Look Up Postal Code** (read-only): Look up the city, region, and coordinates for a postal code.
- **Search Postal Codes by City** (read-only): Return all postal codes matching a city and optional region, including fuzzy-match details.
- **Validate Postal Code** (read-only): Check whether one postal code exists without treating a nonexistent code as an execution error.
- **Validate Postal Codes in Bulk** (read-only): Validate 1 to 1,000 postal codes synchronously, including mixed-country batches.
