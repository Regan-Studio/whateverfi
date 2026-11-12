# Money Forward

Access Money Forward business tenant details and Cloud Accounting offices, master data, journals, trade partners, and financial reports.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/money-forward/.

## Actions

- **Create Journal**: Create and persist an accounting journal with one to 300 debit and credit lines.
- **Create Trade Partners**: Create and persist one or more Cloud Accounting trade-partner master records in one batch.
- **Create Transactions**: Create and persist a batch of one to 1,000 manual transactions under one Money Forward connected service.
- **Create Vouchers**: Persist one to five base64-encoded voucher files in Money Forward Cloud Accounting and optionally attach them to a journal.
- **Delete Journal**: Permanently delete one Money Forward Cloud Accounting journal by ID.
- **Detach Voucher From Journal**: Remove the association between one Money Forward voucher and one journal.
- **Get Account Balance Trends** (read-only): Return monthly balance-sheet or profit-and-loss trends for a fiscal period.
- **Get Accounting Office** (read-only): Return the connected Cloud Accounting office and its accounting periods.
- **Get Journal** (read-only): Return one accounting journal by its journal ID, including debit and credit branches and attached voucher IDs.
- **Get Tenant** (read-only): Return the code and name of the Money Forward business tenant authorized by the connected account.
- **Get Trial Balance** (read-only): Return a balance-sheet or profit-and-loss trial balance for a fiscal period.
- **Journalize Transaction**: Create and persist a journal from one Money Forward transaction using the supplied account classification.
- **List Accessible Accounting Offices** (read-only): List every Cloud Accounting office available to the current authorization.
- **List Accounts** (read-only): List Cloud Accounting chart-of-account entries and their IDs for use in journals and reports.
- **List Connected Accounts** (read-only): List external financial services connected to the current Cloud Accounting office, including manual status and linked account and…
- **List Departments** (read-only): List Cloud Accounting departments and their IDs for interpreting or constructing journal lines.
- **List Journals** (read-only): Return one page of accounting journals whose transaction dates fall in the requested period, optionally filtered by account, transaction…
- **List Sub-Accounts** (read-only): List Cloud Accounting sub-accounts, optionally limited to one parent account, and return their IDs and tax mappings.
- **List Tax Categories** (read-only): List Cloud Accounting tax categories, rates, availability, and IDs used on journal lines.
- **List Term Settings** (read-only): Return all accounting-year settings for the connected Cloud Accounting office, ordered by descending start date.
- **List Trade Partners** (read-only): List Cloud Accounting trade partners and their codes, registration numbers, and availability for use on journal lines.
- **List Transactions** (read-only): Return one page of collected transaction details for an inclusive date range, with connected-account, amount, text, journalization-status,…
- **Update Journal**: Replace an existing accounting journal's writable fields.
