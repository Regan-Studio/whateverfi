# Wispr Flow MCP

Wispr Flow MCP gives authorized agents read-only access to meeting notes, summaries, transcripts, participants, scratchpad notes, calendar events, recurring meetings, and upcoming-meeting pre-reads within the user's existing Wispr Flow permissions.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/wispr-flow-mcp/.

## Actions

- **Get account info** (read-only): Get the authenticated user's own identity — their name and any display-name aliases they appear under on their calendar.
- **Get calendar event** (read-only): Get a single calendar event by its calendar_id (the id returned by search_calendar_events or resolve_calendar_link).
- **Get meeting** (read-only): Get a bounded range of the markdown notes, the complete derived markdown summary, the complete attendee list without email addresses, and…
- **Get meeting by calendar** (read-only): Get the recorded meeting — a bounded range of its markdown notes, the complete derived markdown summary, and (when requested and…
- **Get meeting participants enriched** (read-only): Who was in a meeting and which one of them is the user.
- **Get scratchpad note** (read-only): Get a bounded range of a specific note's normalized text.
- **Get upcoming meeting** (read-only): Get a single upcoming calendar event by calendar_id, with its latest pre-read when one is available.
- **List meeting series** (read-only): Given a meeting_id (from search_meetings) for a recurring meeting, list every recorded occurrence of that recurring series — newest first,…
- **List upcoming meetings** (read-only): List the user's upcoming calendar events in the next window_hours (default 24, max 168), soonest first, with an attendee preview (up to 5…
- **Resolve calendar link** (read-only): Resolve a calendar/meeting URL the user pasted (a Google Calendar event link, or a Meet/Zoom conference link) to the matching calendar…
- **Resolve share link** (read-only): Resolve a Wispr Flow shared-notes link the user pasted (https.
- **Search calendar events** (read-only): Search or list the user's Google Calendar events.
- **Search meetings** (read-only): Search or list the user's meetings captured by Wispr Flow Meeting Recorder.
- **Search scratchpad notes** (read-only): Search or list the user's notes (Wispr Flow scratchpad).
