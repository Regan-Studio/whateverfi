# LINE

Use a LINE Official Account's Messaging API channel to manage messages, audiences, and rich menus.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/line/.

## Actions

- **Create Rich Menu**: Create a rich-menu definition and return its ID.
- **Create Rich Menu with Image**: Create a rich-menu definition and upload its JPEG or PNG image in one call.
- **Delete Rich Menu**: Permanently delete a rich menu by ID.
- **Download Message Content Preview** (read-only): Download LINE's reduced-size preview image for a retained image or video message whose contentProvider.type is line.
- **Get Message Delivery Count** (read-only): Get the number of reply, push, multicast, or broadcast messages sent on one UTC+9 calendar date.
- **Get Rich Menu** (read-only): Get one Messaging API rich-menu definition by ID, including its canvas, tappable areas, and actions.
- **Link or Unlink User Rich Menu**: Link or unlink a per-user rich menu.
- **List Chat Member IDs** (read-only): Return one page of member user IDs for a group or legacy room containing the bot.
- **List Follower IDs** (read-only): Return one page of user IDs for friends of the LINE Official Account.
- **List Rich Menus** (read-only): List all rich menus created through the Messaging API.
- **Mark Messages as Read**: Mark all messages through a webhook-issued read token as read.
- **Set or Clear Default Rich Menu**: Set or clear the Messaging API default rich menu.
- **Upload Rich Menu Image**: Upload a JPEG or PNG image for a rich menu.
