# Daily

Daily provides WebRTC video and audio APIs for creating rooms, meetings, recordings, live streams, transcriptions, and telephony experiences.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/daily/.

## Actions

- **Batch Create Rooms**: Create 1 to 1,000 Daily rooms in one atomic request.
- **Create Meeting Token**: Issue a time-bounded meeting token for one Daily room and participant.
- **Create Room**: Create a named Daily room with privacy and optional safe meeting defaults.
- **Delete Room**: Permanently delete one Daily room by name.
- **Get Domain Config** (read-only): Return the connected Daily domain identity and stable account capability signals.
- **Get Room** (read-only): Return a Daily room's current privacy and configuration by room name.
- **Get Room Presence** (read-only): Return the current participants visible in one Daily room, optionally filtered by user ID or display name.
- **List Meetings** (read-only): Return one page of Daily meeting-session analytics, filtered by room, time range, or session state.
- **List Rooms** (read-only): Return one reverse-chronological page of Daily rooms.
- **Update Room**: Update a Daily room's privacy or safe meeting defaults.
- **Validate Meeting Token** (read-only): Validate a Daily meeting token and return its effective room and participant settings without joining a call.
