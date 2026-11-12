# CloudPDF

CloudPDF provides APIs for creating, uploading, managing, and securely sharing PDF documents and webhooks.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/cloud-pdf/.

## Actions

- **Create Webhook**: Create a CloudPDF webhook subscription for selected document, collection, tracker, lead, or file-processing events.
- **Delete Document**: Permanently delete one known CloudPDF document by UUID.
- **Delete Webhook**: Delete one CloudPDF webhook subscription by its decimal ID.
- **Get Account** (read-only): Return the connected CloudPDF organization's plan, allowances, and current upload, view, and storage usage.
- **Get Document** (read-only): Retrieve one CloudPDF document by ID, including metadata, default permissions, and current file processing status.
- **Get Document File** (read-only): Retrieve one known CloudPDF file version and its processing status.
- **Get Webhook** (read-only): Retrieve one CloudPDF webhook subscription by its ID.
- **List Webhooks** (read-only): Return all webhook subscriptions configured for the connected CloudPDF organization.
- **Update Document**: Update selected metadata or default-permission fields on a known CloudPDF document without requiring unchanged values to be resent.
- **Update Webhook**: Update selected fields of a CloudPDF webhook subscription without requiring unchanged values to be resent.
