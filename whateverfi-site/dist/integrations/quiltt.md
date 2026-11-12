# Quiltt

Quiltt provides financial data aggregation APIs for managing Profiles, connections, accounts, transactions, statements, and webhooks.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/quiltt/.

## Actions

- **Create Profile**: Create a Profile in the Quiltt Environment with optional identity, contact, address, and custom metadata fields.
- **Create Webhook Subscription**: Create a webhook subscription that sends selected Quiltt events to an HTTPS callback URL.
- **Delete Webhook Subscription**: Permanently remove one webhook subscription so Quiltt stops sending events to its callback URL.
- **Get Profile** (read-only): Retrieve one Profile by its Quiltt Profile ID or UUID.
- **List Finicity Remote Data** (read-only): List one page of Quiltt resource IDs with Finicity Remote Data for the selected resource type.
- **List Profiles** (read-only): Return one page of Profiles in the Quiltt Environment and a cursor for the next page.
- **List Webhook Subscriptions** (read-only): Return one page of webhook subscriptions and a cursor for the next page, including callback URLs, event types, and disabled state.
- **Search Institutions** (read-only): Find financial institutions associated with a US Federal Reserve routing number.
- **Update Profile**: Update explicitly supplied contact, legal identity, address, or custom metadata fields on an existing Quiltt Profile.
- **Update Webhook Subscription**: Update explicitly supplied fields on a Quiltt webhook subscription, including its name, HTTPS callback URL, or event types.
