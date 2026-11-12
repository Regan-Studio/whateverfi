# Crisp

Crisp is a customer messaging platform for managing conversations, contacts, operators, helpdesk content, campaigns, and workspace settings.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/crisp/.

## Actions

- **Assign Conversation**: Assign a conversation to one operator or explicitly remove its current operator assignment.
- **Get Conversation** (read-only): Get one conversation's status, assignment, inbox, visitor metadata, unread counts, and latest-message summary.
- **Get People Profile** (read-only): Get one customer profile by its Crisp people ID or exact email address.
- **List Conversation Messages** (read-only): Return a batch of messages from a conversation, optionally before, after, or around one millisecond timestamp.
- **List Conversations** (read-only): List or search workspace conversations with support-focused filters, one page at a time.
- **List Inboxes** (read-only): List configured Crisp inboxes and their operator/team membership, one page at a time.
- **List Operators** (read-only): List workspace operators and pending members with their IDs, roles, and current availability.
- **List People Profiles** (read-only): List or search customer profiles by text, creation date, and sort order, one page at a time.
- **Move Conversation to Inbox**: Move a conversation to a specific Crisp inbox, or remove its inbox categorization when inbox_id is null.
- **Send Conversation Message**: Send a visitor-visible text reply to an existing Crisp conversation immediately.
- **Update Conversation Meta**: Update support-relevant visitor details, subject, segments, or custom data on a conversation without replacing unspecified fields.
- **Update Conversation State**: Set a conversation to pending, unresolved, or resolved.
