# Grain

Grain records, transcribes, and organizes meetings so teams can review conversations, share insights, and manage meeting content.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/grain/.

## Actions

- **Create Hook**: Create a Grain webhook subscription after Grain verifies that the public HTTPS callback returns a 2xx response.
- **Create Upload**: Create a Grain transcript upload or an audio/video upload slot.
- **Delete Hook**: Permanently delete one Grain webhook subscription.
- **Download Recording** (read-only): Download a recording's original audio or video media through Composio file storage.
- **Get Connection Info** (read-only): Identify the connected Grain user or workspace and report the connection's authentication type, scope, and expiry without exposing…
- **Get Recording** (read-only): Get one Grain recording by ID, optionally including participants, summaries, notes, and other expanded meeting data.
- **Get Recording Transcript** (read-only): Get a Grain recording transcript as structured speaker segments, plain text, WebVTT, or SRT.
- **Get Upload** (read-only): Get one Grain upload by ID, including its processing status and optional attributes or transcript data.
- **List Hooks** (read-only): List Grain webhook subscriptions, optionally filtering by event type or enabled state.
- **List Recordings** (read-only): Return one page of recordings visible to the connected Grain user, with optional search filters and expanded meeting data.
- **List Reference Data** (read-only): List visible Grain users, teams, or meeting types and return their IDs for recording filters, sharing, and upload metadata.
- **List Uploads** (read-only): Return one page of Grain uploads, optionally filtered by media type and expanded with attributes or transcript data.
- **Promote Upload**: Start promotion of a manually staged Grain upload into a recording.
- **Update Recording Access**: Share a recording with one Grain user or team, or remove that user or team's access.
- **Update Recording Tag**: Add or remove one tag on a Grain recording.
- **Update Recording Title**: Replace the title of an existing Grain recording.
- **Update Upload**: Replace attributes on an awaiting or manually staged Grain upload before it is promoted.
