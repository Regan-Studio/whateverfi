# Chatforma

Chatforma is a chatbot automation platform for managing bots, users, segments, broadcasts, dialogs, forms, notifications, and variables.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/chatforma/.

## Actions

- **Get User Variable** (read-only): Get the current value of one bot variable for one bot user.
- **List Bots** (read-only): List bots belonging to the connected Chatforma account so their IDs can be used in bot-scoped tools.
- **List Dialog Messages** (read-only): Return one page of messages exchanged in a specific user's bot dialog, with a cursor for continuing the history.
- **List Predefined Messages** (read-only): List predefined messages configured in a bot so a message ID can be selected for sending.
- **List Segments** (read-only): List the user segments configured for a bot, including segment IDs needed for targeted sends.
- **List Users** (read-only): List a bot's users, members of one segment, or users with open dialogs.
- **List Variables** (read-only): List variables configured for a bot, including IDs and types needed to read user-specific values.
- **Send Dialog Message**: Immediately send a user-visible text message into a specific user's bot dialog.
- **Send Predefined Message**: Send a configured bot message to one user or dispatch it to a segment.
- **Send Text Dispatch**: Create a user-visible text dispatch for one bot user or a segment.
