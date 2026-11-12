# Pipeless Recommendations

Pipeless provides graph-based activity feeds and personalized recommendations from application event data.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/pipeless/.

## Actions

- **Create Event**: Record one typed relationship event for Pipeless activity and recommendation algorithms.
- **Create Events Batch**: Record 1 to 10 relationship events in one Pipeless request.
- **Delete Event**: Delete event records matching an exact start object, relationship type and timestamp, and end object.
- **List Activity Feed** (read-only): Return one cursor-controlled chronological page of actions by objects followed by a specified object.
- **List Object Activity** (read-only): Return one cursor-controlled page of incoming or outgoing relationship activity involving a specific object.
- **List Recent Events** (read-only): Return the most recent events sent to the app, up to the requested limit.
- **List Recommended Content** (read-only): Return a bounded personalized list of content recommendations for an object using configurable positive, negative, tag, author, follow,…
- **List Related Content** (read-only): Return content objects related to a target content object using optional tag and collaborative-interaction signals.
- **List Users To Follow** (read-only): Return a bounded personalized list of user or account objects that the specified object may want to follow.
- **Rank Content** (read-only): Rank a supplied set of content IDs for an object and report which IDs Pipeless could rank.
