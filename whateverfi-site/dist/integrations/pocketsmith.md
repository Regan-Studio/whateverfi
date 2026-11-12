# PocketSmith

PocketSmith is a personal finance platform for tracking accounts and transactions, managing budgets, and forecasting financial outcomes.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/pocketsmith/.

## Actions

- **Create Category**: Create one category for a PocketSmith user with optional hierarchy and budgeting behavior.
- **Create Transaction**: Create one transaction in a specified transaction account and return the created financial record.
- **Get Budget** (read-only): Return a PocketSmith user's current category-level actual and forecast budget analysis.
- **Get Budget Summary** (read-only): Analyze the user's combined income and expense budget over a required date range and period interval.
- **Get Current User** (read-only): Return the PocketSmith user authorized by the connected developer key, including the user ID needed by user-scoped tools.
- **Get Transaction** (read-only): Return one PocketSmith transaction by ID with its amount, date, payee, category, labels, and review state.
- **List Accounts** (read-only): Return all financial accounts belonging to a PocketSmith user, including account, primary transaction-account, and scenario IDs.
- **List Categories** (read-only): Return all categories belonging to a PocketSmith user, including hierarchy and budgeting flags.
- **List Transaction Accounts** (read-only): Return the transaction accounts belonging to a PocketSmith user, including IDs and balances needed to create and query transactions.
- **List Transactions** (read-only): Return one page of a user's transactions with optional date, state, type, and keyword filters, plus a cursor for the next page.
- **Update Account**: Update selected metadata on one financial account without deleting it or changing transaction-account balances.
- **Update Category**: Update selected hierarchy, display, and budgeting fields on one category without deleting it.
- **Update Transaction**: Update selected fields on one existing transaction without deleting or splitting it.
- **Update Transactions**: Update 1-20 distinct transactions sequentially.
