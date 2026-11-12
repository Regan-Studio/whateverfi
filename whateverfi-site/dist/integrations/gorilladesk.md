# GorillaDesk

GorillaDesk is field service management software for pest control and other service businesses, covering customers, jobs, estimates, invoices, payments, and related operations.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/gorilladesk/.

## Actions

- **Create Customer**: Create a GorillaDesk customer together with the required primary service location.
- **Create Customer Note**: Permanently add a text note to a GorillaDesk customer and optionally notify users.
- **Get Company** (read-only): Return the company profile selected by the connected GorillaDesk API key, including contact, address, timezone, and office-hours details.
- **Get Credits** (read-only): Retrieve one customer credit by ID, or list credits, optionally filtering to one customer.
- **Get Customers** (read-only): Retrieve one customer by ID, or search and page through customers using status, state, account number, timestamps, expansions, and sorting.
- **Get Documents** (read-only): Retrieve one document by ID, or search documents by customer, job, state, status, creation time, keyword, and sorting.
- **Get Estimates** (read-only): Retrieve one estimate by ID, or search estimates by customer, job, state, status, signature status, date, keyword, expansions, and sorting.
- **Get Invoices** (read-only): Retrieve one invoice by ID, or search invoices by customer, job, state, payment/signature status, date, keyword, expansions, and sorting.
- **Get Jobs** (read-only): Retrieve one job by ID, or search jobs by customer, state, date, keyword, expansions, and sorting.
- **Get Payments** (read-only): Retrieve one payment by ID, or search payments by customer, invoice, status, date, expansions, and sorting.
- **Get Services** (read-only): Retrieve one GorillaDesk service by ID, or list configured services with sorting and offset pagination.
- **Get Users** (read-only): Retrieve one GorillaDesk user by ID, or list the company's users when no ID is supplied.
- **List Phone Types** (read-only): List the configured customer phone-type definitions, including IDs, names, default flags, and states.
