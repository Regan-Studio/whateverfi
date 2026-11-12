# Strale

Strale provides API capabilities, reusable solutions, trust checks, and EUR wallet-backed execution through a single developer platform.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/strale/.

## Actions

- **Get Capability** (read-only): Get one capability's current price, execution input schema, output schema, and catalog metadata by slug.
- **Get Execution** (read-only): Get full authenticated detail for one capability or solution execution, including resource type, status, input, output or error,…
- **Get Solution** (read-only): Get one bundled solution's full steps, input mapping, component capabilities, pricing breakdown, and related solutions by slug.
- **Get Wallet Balance** (read-only): Return the connected Strale wallet's available balance in EUR cents before or after a capability run.
- **List Capabilities** (read-only): Return a filtered, bounded view of Strale's capability catalog with current EUR prices and free-tier status.
- **List Executions** (read-only): Return the connected account's capability and solution execution history with resource type, transaction IDs, status, price, latency, and…
- **List Solutions** (read-only): Return a filtered, bounded view of Strale's bundled multi-step solutions with EUR prices and component capabilities.
- **List Wallet Transactions** (read-only): Return the connected wallet's credit and debit ledger, including amounts, types, descriptions, and timestamps.
- **Preflight Capability** (read-only): Quote and validate one Strale capability without executing it or charging the connected EUR wallet.
- **Run Capability**: Execute one Strale capability and irreversibly debit its quoted price from the connected EUR wallet.
- **Search Catalog** (read-only): Search Strale capability and solution names by keyword and return compact priced matches.
