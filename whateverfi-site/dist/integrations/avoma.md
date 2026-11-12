# Avoma

Avoma is an AI meeting assistant for recording, transcribing, analyzing, and managing meetings, calls, notes, scorecards, and conversation intelligence.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/avoma/.

## Actions

- **Create Call**: Submit an externally hosted call recording to Avoma for asynchronous processing.
- **Get Call** (read-only): Retrieve one externally ingested Avoma call by the dialer system's external ID.
- **Get Engagement Summary** (read-only): Aggregate Avoma engagement metrics across visible users for a required UTC date range and optional meeting and user filters.
- **Get Meeting** (read-only): Retrieve one meeting by UUID, including processing/readiness state and optionally CRM associations.
- **Get Meeting Analysis** (read-only): Return Avoma's AI insights, topical and speaker segments, and sentiment records for one processed meeting in a single read-only invocation.
- **Get Recording** (read-only): Get time-limited audio and video URLs for a meeting recording.
- **List Calls** (read-only): List externally ingested calls in a required UTC date range, optionally filtered by inbound or outbound direction.
- **List Configuration Resources** (read-only): List one Avoma configuration catalog.
- **List Engagement Metrics** (read-only): List per-user Avoma engagement metrics over a required UTC date range with meeting and user filters.
- **List Meetings** (read-only): Find meetings visible to the connected Avoma user within a required UTC date range, with optional attendee, CRM, call-type,…
- **List Notes** (read-only): Retrieve Avoma notes for meetings in a required UTC date range, optionally narrowed to a meeting or custom category and rendered as JSON,…
- **List Scorecard Evaluations** (read-only): List Avoma scorecard evaluations, optionally filtered by UTC date range, scorecard templates, meeting, or evaluated users.
- **List Snippets** (read-only): Find user-created or AI-generated meeting snippets by meeting UUID or by a UTC date range of at most 180 days.
- **List Transcriptions** (read-only): Find full meeting transcriptions by meeting UUID or by a UTC date range, with attendee and CRM filters.
- **List Users** (read-only): Return users visible in the Avoma organization, including their UUID, email, role, teams, and active status.
- **List Webhooks** (read-only): Audit the connected organization's active Avoma webhook subscriptions without reading signing secrets.
