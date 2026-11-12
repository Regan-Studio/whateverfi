# ApexVerify

ApexVerify validates and normalizes email addresses and phone numbers individually or in batches to improve contact-data quality.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/apexverify/.

## Actions

- **Delete Batch**: Permanently delete one ApexVerify batch by its exact UUID.
- **Export Batch Results** (read-only): Export a completed batch as structured JSON for analysis or as a downloadable XLSX workbook.
- **Get Account Credits** (read-only): Return the connected ApexVerify account's available email and phone verification credit balances.
- **Get Batch Details** (read-only): Get an ApexVerify batch's status, metadata, parsed-content counts, estimated verification cost, parameters, and final statistics.
- **Launch Batch Verification**: Launch paid verification for a prepared batch.
- **List Batches** (read-only): List verification batches, optionally restricted by creation time, one offset-controlled page at a time.
- **Normalize Data File** (read-only): Normalize email addresses or phone numbers from a line-delimited TXT file without performing verification or consuming verification credits.
- **Prepare Batch**: Start or repeat asynchronous parsing, deduplication, format cleanup, and verification-cost calculation for an uploaded batch.
- **Upload Verification Batch**: Create an ApexVerify verification batch from a line-delimited TXT file.
- **Verify Email or Phone**: Verify one email address or phone number in real time.
