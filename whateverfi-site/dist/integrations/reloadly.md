# Reloadly

Reloadly Gift Cards Sandbox provides a safe test environment for browsing gift card products, inspecting transactions, and testing gift card orders without using production wallet funds.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/reloadly/.

## Actions

- **Calculate Gift Card FX Rate** (read-only): Convert a recipient gift card amount into the connected Reloadly Gift Cards Sandbox wallet currency before ordering.
- **Get Gift Card Discounts** (read-only): Return one page of Reloadly Gift Cards Sandbox discounts, or the current discount for a specific product when product_id is supplied.
- **Get Gift Card Product** (read-only): Get one Reloadly Gift Cards Sandbox product and its current denomination, currency, fee, status, and additional-order requirements.
- **Get Gift Card Redeem Codes** (read-only): Return sensitive card numbers, PINs, and redemption URLs issued for one successful Reloadly Gift Cards Sandbox transaction.
- **Get Gift Card Transactions** (read-only): Return one filtered page of Reloadly Gift Cards Sandbox transactions, or one transaction by ID when transaction_id is supplied.
- **Get Redeem Instructions** (read-only): Return concise and verbose redemption instructions for one Reloadly Gift Cards Sandbox product.
- **Get Sandbox Account Balance** (read-only): Return the connected Reloadly Gift Cards Sandbox test-wallet balance and currency.
- **List Catalog Reference Data** (read-only): List either Reloadly Gift Cards Sandbox product categories or supported countries from the complete, unpaginated catalog.
- **List Gift Card Products** (read-only): Search the Reloadly Gift Cards Sandbox catalog by name, country, category, denomination type, or global availability, returning one…
- **Order Sandbox Gift Cards**: Create a non-reversible Reloadly Gift Cards Sandbox order using a current product denomination.
