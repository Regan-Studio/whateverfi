# HelloTracks

HelloTracks is a location-based workforce management platform for dispatching jobs, optimizing routes, tracking mobile teams, and managing field operations.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/hello-tracks/.

## Actions

- **Archive Job**: Archive one HelloTracks job while keeping it recoverable in HelloTracks.
- **Delete Job**: Permanently delete one HelloTracks job.
- **Get Account Context** (read-only): Identify the connected HelloTracks account and return its company, teams, units, and API-enabled state.
- **Get Current Locations** (read-only): Read precise latest-known GPS coordinates and available movement, elevation, and battery telemetry for selected visible HelloTracks…
- **Get Job** (read-only): Retrieve one HelloTracks job by its job ID.
- **List Jobs** (read-only): List HelloTracks jobs with optional time, progress, archive, external-ID, and assignee filters, returning one controllable page.
- **List Members** (read-only): Search visible HelloTracks members for identity and assignment details without returning location or device telemetry.
- **List Places** (read-only): Find visible HelloTracks places by name or place IDs for use in job planning.
- **Update Job**: Partially update the editable details of one existing HelloTracks job.
- **Upsert Job**: Create a HelloTracks job, or update the existing job when the supplied external ID already matches one.
