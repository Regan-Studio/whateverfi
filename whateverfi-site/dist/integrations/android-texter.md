# Android Texter

Android Texter connects Android phones to an API for sending and receiving SMS and MMS, managing contacts and devices, and automating messaging workflows.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/android-texter/.

## Actions

- **Create Quick Reply**: Create a reusable quick-reply shortcut.
- **Delete Quick Reply**: Permanently delete one saved quick reply by ID.
- **Get Message Status** (read-only): Get the provider's current queued, sent, delivered, or failed status for a message ID returned by Send Message.
- **List Contacts** (read-only): List contacts in the connected Android Texter account, optionally filtering by name or phone text and tag.
- **List Conversation History** (read-only): Return one newest-first page of inbound and outbound message history exchanged with one phone number.
- **List Devices** (read-only): List Android devices linked to the account, including IDs and online state needed to select a sending device.
- **List Messages** (read-only): List one newest-first page of messages, optionally restricting results to sent or received messages.
- **List Quick Replies** (read-only): List saved quick-reply shortcuts that can be reused when composing messages.
- **Send Message**: Immediately queue a real SMS or MMS to one phone number through a linked Android device.
- **Send Messages Batch**: Sequentially queue the same real SMS or MMS for 1-10 recipients.
- **Update Quick Reply**: Replace an existing quick reply's shortcut, title, and body.
