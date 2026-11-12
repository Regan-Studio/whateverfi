# CertSeal

CertSeal provides APIs for issuing and managing verifiable digital certificates, recipients, batches, designs, and webhook subscriptions.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/cert-seal/.

## Actions

- **Create Batch**: Create a persistent certificate batch from an existing CertSeal design and optional email template.
- **Create Webhook Subscription**: Create a persistent webhook subscription for selected certificate events.
- **Delete Recipient**: Permanently delete an issued recipient from an active batch.
- **Delete Webhook Subscription**: Permanently delete a webhook subscription and stop future deliveries.
- **Get Batch** (read-only): Get one active or archived certificate batch by ID.
- **Get Certificate** (read-only): Look up an issued certificate using either its human-readable certificate ID or its public-viewer share token, and return its recipient,…
- **Get Current Workspace** (read-only): Verify the connected CertSeal API key and return the workspace ID and username it belongs to.
- **Get Recipient** (read-only): Get one issued certificate recipient record by batch ID and recipient ID.
- **Get Webhook Subscription** (read-only): Get one webhook subscription by ID.
- **Issue and Send Certificates**: Atomically issue certificates for 1-100 recipients and queue email delivery for every created certificate.
- **Issue Certificates**: Atomically issue certificates without sending email for 1-100 recipients in one active batch.
- **List Batches** (read-only): Return one newest-first page of certificate batches in the connected workspace, optionally filtered by archive state.
- **List Designs** (read-only): Return one newest-first page of reusable certificate designs.
- **List Recipients** (read-only): Return one page of issued certificate recipients in a batch, optionally filtered by email delivery status.
- **List Webhook Subscriptions** (read-only): Return one newest-first page of webhook subscriptions.
- **Rotate Webhook Signing Secret**: Immediately invalidate a webhook subscription's current signing secret and replace it.
- **Send Certificate Emails**: Sequentially queue real certificate emails for 1-25 existing recipients in one active batch.
- **Send Recipient Certificate Email**: Queue asynchronous certificate email delivery to one recipient.
- **Set Batch Archived State**: Idempotently archive or unarchive a batch.
- **Test Webhook Subscription**: Enqueue one synthetic signed event through CertSeal's normal webhook dispatcher.
- **Update Recipient**: Partially update an issued certificate recipient.
