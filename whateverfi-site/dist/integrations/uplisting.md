# Uplisting

Uplisting is a vacation rental property management platform for managing properties, availability, bookings, calendars, and webhooks.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/uplisting/.

## Actions

- **Create Webhook**: Register a public callback URL for one booking or property event and return the new webhook ID.
- **Delete Webhook**: Permanently remove one Uplisting webhook subscription by its ID.
- **Get Calendar** (read-only): Return up to 12 months of daily availability, rates, and stay restrictions for one property.
- **Get Current Account** (read-only): Return the name and stable UID of the Uplisting account connected by the current API key.
- **Get Property** (read-only): Return one Uplisting property by ID with the related resources supplied by the API.
- **List Bookings** (read-only): Return one explicitly selected 0-based page of bookings for a property and optional date range, with total and total-page metadata.
- **List Properties** (read-only): Return all properties in the connected Uplisting account, including the related resources supplied by the API.
- **List Webhooks** (read-only): Return the webhook subscriptions registered for the connected Uplisting account.
- **Search Availability** (read-only): Find Uplisting properties available for optional stay dates, guest count, city, and nightly price bounds.
- **Update Calendar**: Asynchronously change availability, rates, or stay restrictions for dated days or date ranges on one property.
