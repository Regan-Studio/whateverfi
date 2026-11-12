# Chameleon

Chameleon is a product adoption platform for building in-app experiences, managing customer data, and analyzing user engagement.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/chameleon/.

## Actions

- **Count Customer Records** (read-only): Count Chameleon profiles or companies matching structured filters without retrieving the matching records.
- **Get Account Identity** (read-only): Return the Chameleon account ID and admin user ID associated with the connected Account Secret.
- **Get Delivery** (read-only): Retrieve one Chameleon experience delivery by ID without triggering, changing, or cancelling it.
- **Get Experience** (read-only): Retrieve one Chameleon tour, microsurvey, launcher, embed, or tooltip by ID without modifying or publishing it.
- **List Changes** (read-only): List one page of Chameleon change history across the account or for one supported experience.
- **List Deliveries** (read-only): List one page of scheduled Chameleon experience deliveries, optionally filtered by experience or profile, without triggering a new delivery.
- **List Domains or Environments** (read-only): List one page of configured Chameleon domains or environments without changing account routing configuration.
- **List Experience Analytics** (read-only): List one page of tour interactions or microsurvey responses for a specific Chameleon experience.
- **List Experiences** (read-only): List one page of Chameleon tours, microsurveys, launchers, embeds, or tooltips without modifying or publishing them.
- **List Targeting Metadata** (read-only): List one page of Chameleon segments, tags, themes, tracked event names, or profile/company property definitions used to interpret…
- **Lookup Customer Record** (read-only): Retrieve one Chameleon profile or company by its Chameleon ID or external identifier.
- **Search Customer Records** (read-only): Search Chameleon profiles or companies with structured filters and return one offset-paginated page of matching records.
- **Track Event**: Irreversibly record one named event for a Chameleon profile identified by ID or external UID.
- **Upsert Customer Record**: Create or update one Chameleon profile or company by external UID and return its Chameleon ID.
