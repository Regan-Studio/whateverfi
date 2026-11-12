# Qwilr

Save time and win more work with smart sales documents. Great for proposals, quotes and more!

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/qwilr/.

## Actions

- **Create Page**: Create a Qwilr page from exactly one template ID or an ordered list of saved blocks.
- **Create Tax**: Create a quote tax definition with a percentage rate or no rate, optionally using a stable caller-chosen ID.
- **Create Webhook Subscription**: Subscribe a publicly reachable callback URL to one Qwilr page event.
- **Delete Tax**: Permanently delete one quote tax definition by ID.
- **Delete Webhook Subscription**: Permanently cancel one webhook subscription by its subscription ID.
- **Get Page** (read-only): Return one full Qwilr page, with optional metadata and real or preview acceptance details.
- **List Pages** (read-only): Return one cursor-controlled page of visible Qwilr page summaries, optionally filtered by status, tags, folder, owner, or creation order.
- **List Payment Gateways** (read-only): Return configured Qwilr Pay gateways whose IDs can be assigned to page payment settings.
- **List Saved Blocks** (read-only): Return saved block IDs, names, and types for constructing or replacing pages.
- **List Taxes** (read-only): Return all quote tax definitions and their nullable percentage rates.
- **List Users** (read-only): Return account users with IDs, email addresses, roles, and team names for resolving page owner IDs.
- **List Webhook Subscriptions** (read-only): Return API-created webhook subscriptions with their IDs, event types, and callback URLs.
- **Replace Page Content**: Fully and irreversibly overwrite all content in a Qwilr page with saved blocks as the required primary operation, optionally changing…
- **Update Page**: Update a Qwilr page's publication, expiry, payments, folder, or additive tags.
- **Update Tax**: Change a quote tax definition's name, percentage rate, or both.
