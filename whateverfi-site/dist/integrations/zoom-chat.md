# Zoom Team Chat

Zoom Team Chat is Zoom's persistent messaging product: channels, direct messages, threads, reactions, file sharing, reminders and shared spaces, all accessible through the Zoom REST API as the connected user

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/zoom-chat/.

## Actions

- **Add Shared Space Members**: Add members to a Zoom Team Chat shared space by email address or Zoom user ID.
- **Archive or Unarchive Channels**: Archive or unarchive up to 10 Zoom Team Chat channels in one call.
- **Bookmark or Unbookmark Message**: Add or remove a bookmark on a Zoom Team Chat message.
- **Create Channel**: Create a new Zoom Team Chat channel for the authenticated user, optionally inviting initial members by email.
- **Create Message Reminder**: Set a reminder on a Zoom Team Chat message, either after a delay (delay_seconds) or at an absolute time (remind_time).
- **Create Shared Space**: Create a Zoom Team Chat shared space (a container that groups related channels).
- **Delete Channel**: Delete a Zoom Team Chat channel the user owns or is a member of.
- **Delete Message**: Delete a Zoom Team Chat message the connected user sent, identified by message_id plus the conversation it lives in.
- **Delete Message Reminder**: Delete the reminder set on a Zoom Team Chat message.
- **Delete Scheduled Message**: Delete a scheduled (draft) Zoom Team Chat message before it is sent, identified by draft_id plus the conversation it is addressed to.
- **Delete Shared Space**: Delete a Zoom Team Chat shared space.
- **Get Channel** (read-only): Get full information about a Zoom Team Chat channel, including its settings.
- **Get Chat Contact** (read-only): Get a single Zoom Team Chat contact by email or user ID, optionally with live presence status.
- **Get Message** (read-only): Get a single Zoom Team Chat message by ID, including its deep-link URL.
- **Get Message Thread** (read-only): Retrieve a Zoom Team Chat message's thread.
- **Get Shared Space** (read-only): Get details of a Zoom Team Chat shared space, including its owner and settings.
- **Invite Channel Members**: Invite members to a Zoom Team Chat channel by email address.
- **Join Channel**: Join a public Zoom Team Chat channel as the authenticated user.
- **Leave Channel**: Leave a Zoom Team Chat channel.
- **List Bookmarks** (read-only): List the authenticated user's bookmarked Zoom Team Chat messages, optionally filtered to one channel (to_channel) or one 1.
- **List Channel Members** (read-only): List the members of a Zoom Team Chat channel.
- **List Channels** (read-only): List the Zoom Team Chat channels the authenticated user is a member of.
- **List Chat Contacts** (read-only): List the authenticated user's Zoom Team Chat contacts.
- **List Chat Sessions** (read-only): List the user's recent Zoom Team Chat sessions (channels and 1.
- **List Messages** (read-only): List Zoom Team Chat messages exchanged in a channel or a 1.
- **List Pinned Messages** (read-only): List the pinned messages of a Zoom Team Chat channel.
- **List Reminders** (read-only): List the authenticated user's Zoom Team Chat message reminders.
- **List Scheduled Messages** (read-only): List the user's scheduled (draft) Zoom Team Chat messages queued to send to a channel or a 1.
- **List Shared Space Channels** (read-only): List the channels grouped inside a Zoom Team Chat shared space.
- **List Shared Space Members** (read-only): List the members and administrators of a Zoom Team Chat shared space.
- **List Shared Spaces** (read-only): List the Zoom Team Chat shared spaces the authenticated user belongs to.
- **Mark Message Read or Unread**: Mark a Zoom Team Chat message as read or unread.
- **Move Channels Into/Out of Shared Space**: Move existing Zoom Team Chat channels into or out of a shared space.
- **Pin or Unpin Message**: Pin or unpin a message in a Zoom Team Chat channel.
- **React to Message**: Add or remove an emoji reaction on a Zoom Team Chat message.
- **Remove Channel Member**: Remove a single member from a Zoom Team Chat channel.
- **Remove Shared Space Members**: Remove members or administrators from a Zoom Team Chat shared space by user ID or member ID (the shared space owner cannot be removed).
- **Search Channels** (read-only): Search Zoom Team Chat channels by name — fuzzy keywords or an exact channel name — across the channels the user has joined or the org's…
- **Search Company Contacts** (read-only): Search the connected user's organization directory for contacts by keyword (first name, last name, or email address).
- **Send Message**: Send a Zoom Team Chat message to a channel or a 1.
- **Star or Unstar Conversation**: Star or unstar a Zoom Team Chat channel or contact for the authenticated user.
- **Update Channel**: Rename a Zoom Team Chat channel or update its type/settings.
- **Update Message**: Edit the text of an existing Zoom Team Chat message.
- **Update Shared Space**: Update a Zoom Team Chat shared space's name, description, or settings.
