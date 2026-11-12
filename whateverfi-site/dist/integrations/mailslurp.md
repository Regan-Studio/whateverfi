# MailSlurp

MailSlurp provides programmable email and SMS inboxes, sending, testing, webhooks, and deliverability tools through a REST API.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/mailslurp/.

## Actions

- **Create Inbox**: Create a MailSlurp HTTP or SMTP inbox.
- **Delete Inbox**: Permanently delete one MailSlurp inbox by UUID, including its email address and all emails it contains.
- **Get Account Info** (read-only): Return the connected MailSlurp account identity, state, account type, subscription type, and creation time.
- **Get Email**: Get one fully hydrated received email by UUID, including parsed headers, body content, recipients, and attachment IDs.
- **Get Inbox** (read-only): Get one MailSlurp inbox by UUID, including its email address, type, labels, and lifecycle state.
- **List Contact Groups** (read-only): List saved MailSlurp contact groups with optional creation-time filters.
- **List Contacts** (read-only): List saved MailSlurp contacts with optional search and creation-time filters.
- **List Domains** (read-only): List custom domains configured for the connected MailSlurp account, including identifiers, domain type, and DNS verification state.
- **List Email Templates** (read-only): List saved MailSlurp email templates with optional creation-time filters.
- **List Emails** (read-only): List received emails across the account or one selected inbox with unread, exact-search, favorite, plus-address, and time filters.
- **List Inboxes** (read-only): List MailSlurp inboxes with optional search, tag, type, domain, favorite, and creation-time filters.
- **List Sent Emails** (read-only): List sent-email records, optionally filtered by source inbox, exact identifier/address search, and creation time.
- **Send Email**: Send an email from a specific MailSlurp inbox to addresses, saved contacts, or one contact group.
- **Update Inbox**: Update an inbox's name, description, tags, expiration, or favorite status.
