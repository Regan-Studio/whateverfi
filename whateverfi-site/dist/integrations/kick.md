# Kick

Kick is a livestreaming platform whose Public API supports channels, streams, chat, moderation, rewards, ads, and event subscriptions.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/kick/.

## Actions

- **Ban or Time Out User**: Ban a user from a broadcaster chat, or apply a temporary timeout when duration_minutes is supplied.
- **Create Channel Reward**: Create a channel point reward owned by the connected Kick app.
- **Create Event Subscriptions**: Create one or more webhook event subscriptions for the authorized broadcaster using the Kick app's configured callback.
- **Delete Channel Reward**: Permanently delete a channel reward created by the connected Kick app.
- **Delete Chat Message**: Permanently delete a chat message by message ID using the connected moderator identity.
- **Delete Event Subscriptions**: Permanently delete one or more webhook event subscriptions by ID.
- **Enroll In Ads**: Irreversibly enroll the authorized broadcaster channel in Kick's ads program, changing account-level ad settings.
- **Get Ad Break Status** (read-only): Return ad enrollment, blocking conditions, limits, remaining capacity, and recent ad breaks for the authorized channel.
- **Get Channels** (read-only): Return the authorized channel when no selector is supplied, or look up channels by broadcaster user IDs or slugs, without exposing stream…
- **Get KICKs Leaderboard** (read-only): Return lifetime, monthly, and weekly KICKs leaderboards for the authorized broadcaster.
- **Get Livestream Stats** (read-only): Return the current aggregate count of active livestreams on Kick.
- **Get User Livestreams** (read-only): Return active Kick livestreams for 1 to 100 specific user IDs.
- **Get Users** (read-only): Return the authorized Kick user when no IDs are supplied, or look up users by ID.
- **Get Webhook Public Key** (read-only): Return Kick's PEM public key for verifying signatures on received webhook events.
- **List Categories** (read-only): Find Kick categories by names, tags, or IDs and return one cursor-paginated page.
- **List Channel Rewards** (read-only): Return all channel point rewards on the authorized broadcaster's channel.
- **List Event Subscriptions** (read-only): List webhook event subscriptions owned by the connected Kick app, optionally for one broadcaster.
- **List Livestreams** (read-only): Discover active Kick livestreams by category or language and return one cursor-paginated page.
- **List Reward Redemptions** (read-only): Return one page of channel reward redemptions filtered by reward, status, or redemption IDs.
- **Remove Moderation Ban**: Remove a user's ban or active timeout from a broadcaster chat.
- **Resolve Reward Redemptions**: Accept or reject up to 25 pending channel reward redemptions in one explicit decision.
- **Send Chat Message**: Immediately send a Kick chat message as the authorized user or connected bot, optionally as a reply.
- **Start Ad Break**: Immediately start an ad break on the authorized live Kick broadcaster channel when its ad capabilities permit it.
- **Update Channel**: Update one or more metadata fields on the authorized broadcaster's livestream channel.
- **Update Channel Reward**: Update one or more fields on a channel reward created by the connected Kick app.
