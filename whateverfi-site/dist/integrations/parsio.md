# Parsio

Parsio extracts structured data from emails, PDFs, and other documents using configurable parsers.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/parsio/.

## Actions

- **Get Document** (read-only): Get one Parsio document and its mailbox-specific parsed JSON fields.
- **Get Mailbox** (read-only): Get settings and parser configuration for one Parsio mailbox.
- **List Documents** (read-only): List and filter documents in a Parsio mailbox, one page at a time.
- **List Mailboxes** (read-only): List the Parsio mailboxes available to the connected account so their IDs can be used for parsing and configuration tasks.
- **List Table Fields** (read-only): List the extraction fields configured for a Parsio mailbox.
- **Parse Text Document**: Submit plain text or HTML to an existing template-based or GPT-powered Parsio mailbox, optionally waiting for the parsed result.
- **Reparse Document**: Queue an existing Parsio document to be parsed again.
- **Skip Documents**: Mark one or more documents in a Parsio mailbox as skipped.
- **Update Mailbox**: Update one or more settings on an existing Parsio mailbox.
- **Upload Document**: Upload one file to a Parsio mailbox for parsing, optionally waiting for the parsed result.
