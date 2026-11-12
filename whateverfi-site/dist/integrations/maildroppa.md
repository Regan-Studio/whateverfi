# Maildroppa

Maildroppa is an email marketing platform for managing subscribers, segmentation, newsletters, transactional email, events, and webhooks.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/maildroppa/.

## Actions

- **Archive Tag**: Archive one customer-managed tag.
- **Count Segment Subscribers** (read-only): Return the current number of subscribers matching one stored segment.
- **Create Segment**: Create a subscriber segment from field, tag, or nested-segment conditions.
- **Create Subscriber**: Create a subscriber without sending an opt-in message, with optional typed field values and tag assignments.
- **Create Subscribers**: Sequentially create 1-25 subscribers without sending opt-in messages.
- **Create Tag**: Create a customer-managed tag that can be assigned to subscribers.
- **Delete Segment**: Permanently delete exactly one stored subscriber segment identified by an explicit segment ID.
- **Delete Subscriber**: Permanently delete exactly one subscriber identified by an explicit subscriber ID.
- **Get Form Embedding** (read-only): Return an active Maildroppa form's ordered input-field definition for rendering in a trusted website integration.
- **Get Segment** (read-only): Return one stored subscriber segment and its complete filter expression by ID.
- **Get Subscriber** (read-only): Return one Maildroppa subscriber by ID, including display field values, tag IDs, status, registration date, and GDPR agreement.
- **Get Tag Usage** (read-only): Return subscriber assignments and archive or permanent-delete blockers for one Maildroppa tag.
- **List Forms** (read-only): Return signup form overviews with IDs, type, status, publication state, and public routing details.
- **List RSS Newsletters** (read-only): Return the account's RSS newsletter configurations without activating, checking, or sending them.
- **List RSS Sender Profiles** (read-only): Return sender profiles available to RSS newsletters, including verification and delivery readiness.
- **List Segments** (read-only): Return the account's stored subscriber segments and filter expressions.
- **List Subscriber Activity** (read-only): Return one page of a subscriber's activity timeline with delivery eligibility and summary counts.
- **List Subscriber Fields** (read-only): Return built-in and custom subscriber field definitions, optionally including archived custom fields.
- **List Subscribers** (read-only): Return one page of subscribers, optionally filtered by free text, status, or structured segment conditions.
- **List Tags** (read-only): Return account tags, optionally including archived tags.
- **Restore Tag**: Restore an archived customer-managed Maildroppa tag so it can be assigned to subscribers again.
- **Update Segment**: Replace a segment's name and complete filter expression.
- **Update Tag**: Rename an existing customer-managed tag.
