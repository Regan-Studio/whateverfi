# Pumble

Pumble is a team communication platform for channels, direct messages, scheduled messages, and workspace collaboration.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/pumble/.

## Actions

- **Delete Message**: Permanently delete one Pumble message identified by channel ID and message ID.
- **Edit Message**: Replace the text of an existing Pumble message in a channel.
- **Get Current User** (read-only): Return the Pumble user and workspace associated with the connected API key.
- **Get Message** (read-only): Fetch one Pumble message by its message ID and channel ID.
- **List Channel Messages** (read-only): Return one page of recent messages from a channel, continuing backward through history with a cursor.
- **List Channels** (read-only): List channels visible to the connected Pumble user, including channel IDs needed by message tools.
- **List Users** (read-only): List users in the current Pumble workspace with stable IDs and profile details.
- **Search Messages** (read-only): Search Pumble messages and return one bounded page.
- **Send Message**: Immediately post a text message to a Pumble channel identified by its channel ID.
