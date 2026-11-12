# Pivot

Pivot is a team collaboration platform for managing organizations, spaces, rooms, messages, goals, members, and shared work.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/pivot/.

## Actions

- **Add Block Response Attachment**: Attach an existing Pivot file to a block response.
- **Add Group Members**: Add one or more existing Pivot users to a group.
- **Add Group To Space**: Grant an existing Pivot group access to a space with specified space roles.
- **Add Room Members**: Add one or more existing Pivot users to a room with a shared role.
- **Add Space Labels**: Add one or more labels to a Pivot space without removing labels already assigned to it.
- **Add Space Members**: Add one or more existing Pivot users to a space, optionally assigning space roles and member titles.
- **Copy Space**: Start an asynchronous copy of a Pivot space.
- **Create Block Response**: Create a Pivot block response from plain text, or use advanced rich content for formatting.
- **Create Block Sharing Rule**: Create a sharing rule that grants a subject access to a Pivot block.
- **Create Label**: Create a label in a Pivot organization.
- **Create Room**: Create a Pivot chat, direct, post, audio, video, or streaming room.
- **Create Space**: Create a blank Pivot space or organization template synchronously, or create an independent space from a template.
- **Create Space Role**: Create a custom role in a Pivot space with an explicit set of permissions.
- **Create Subgoal**: Create a goal directly under an existing Pivot goal.
- **Create Webhook**: Create a Pivot webhook for an organization and return its one-time signing secret.
- **Delete Block Response**: Delete a response from a Pivot block by its response UUID.
- **Delete Block Response Attachment**: Delete a file attached to a block response by attachment UUID.
- **Delete Block Sharing Rule**: Delete a sharing rule from a Pivot block by sharing-rule UUID.
- **Delete Label**: Permanently delete a Pivot label by its label UUID.
- **Delete Room Message**: Delete a sent Pivot room message.
- **Delete Space**: Permanently delete a Pivot space or template using its ordinary space lifecycle.
- **Delete User**: Permanently delete a Pivot user account, not merely remove a space membership.
- **Delete User or Remove Membership**: Delete a Pivot user globally when the specified organization verified that user.
- **Delete Webhook**: Permanently delete a Pivot webhook by its webhook UUID.
- **Get Block** (read-only): Return a block by ID, optionally including all visible descendant blocks.
- **Get Room** (read-only): Return a Pivot room by its ID.
- **Get Room Message** (read-only): Retrieve one Pivot room message by its ID and send timestamp.
- **Get Room Recording** (read-only): Return a specific Pivot room recording by ID, including transcript, chapter, summary, and caption assets.
- **Get Space** (read-only): Return a Pivot space by ID with its settings, roles, member summaries, and labels.
- **Get Space Operation** (read-only): Get the status of an asynchronous Pivot space copy or template application.
- **Get User Context** (read-only): Return a Pivot user's profile, space memberships, and groups within an organization.
- **Hide Space**: Hide an existing Pivot space from view.
- **Invite To Room**: Invite people to a Pivot room by email.
- **Invite To Space**: Invite people to a Pivot space by email.
- **List Block Responses** (read-only): Return the responses attached to a Pivot block.
- **List Block Sharing Rules** (read-only): Return the sharing rules configured for a Pivot block.
- **List Group Members** (read-only): Return the users in a specified Pivot group.
- **List Groups** (read-only): Return one page of groups in a Pivot organization.
- **List Labels** (read-only): Return the labels configured in a Pivot organization.
- **List Organization Users** (read-only): Return one page of users in a Pivot organization.
- **List Room Messages** (read-only): Return one page of room messages, newest first.
- **List Room Recordings** (read-only): Return one page of recordings for a Pivot room, including transcripts and other recording assets.
- **List Space Assignment Blocks** (read-only): Return all assignment blocks in a Pivot space.
- **List Space Description Blocks** (read-only): Return a space's description blocks and all of their descendants.
- **List Space Home Blocks** (read-only): Return the blocks displayed on a Pivot space home.
- **List Space Members** (read-only): Return one page of members in a Pivot space.
- **List Space Roles** (read-only): Return the roles available in a Pivot space.
- **List Space Room Blocks** (read-only): Return all room blocks and their parallel room metadata in a Pivot space.
- **List Spaces** (read-only): Return one page of spaces visible in a Pivot organization.
- **List Thread Messages** (read-only): Return one page of messages in a Pivot thread, oldest first.
- **List Webhook Logs** (read-only): Return one page of delivery logs for a Pivot webhook.
- **List Webhooks** (read-only): Return webhooks for a Pivot organization, optionally filtering by a case-insensitive substring of the webhook name.
- **Remove Group Members**: Remove one or more users from a Pivot group.
- **Remove Space Label**: Remove one label from a Pivot space by space and label UUID.
- **Remove Space Member**: Remove a user from a Pivot space by space-member UUID.
- **Request Recording Download**: Ensure a downloadable MP4 rendition exists for a Pivot room recording.
- **Revoke Organization Invite**: Revoke a Pivot organization invitation by its invitation ID and email address.
- **Revoke Room Invite**: Revoke a Pivot room invitation by room ID and email address.
- **Revoke Space Invite**: Revoke a Pivot space invitation by organization, space, and email address.
- **Rotate Webhook Secret**: Rotate the organization-wide webhook signing secret used for future Pivot webhooks.
- **Send Room Message**: Send plain text or an advanced rich-content document to a Pivot room, optionally with file attachments or as a thread, inline, or…
- **Submit Block Response**: Irreversibly submit a Pivot block response.
- **Update Block**: Update exactly one property of a Pivot block.
- **Update Block Response**: Replace a Pivot block response with plain text, or use advanced rich content for formatting.
- **Update Block Sharing Rule**: Set the access level for a user, group, space role, membership tier, or space identified by the subject of a sharing rule on a Pivot block.
- **Update Label**: Update the name, color, or both for a Pivot label.
- **Update Room**: Update one or more settings for a Pivot room, including its name, topic, type, and recording preferences.
- **Update Room Message**: Replace a sent Pivot room message with plain text or an advanced rich-content document.
- **Update Space**: Update one or more settings or metadata fields for an existing Pivot space.
- **Update Space Member**: Update a Pivot space member's roles, title, status, or any combination of those fields.
- **Update Webhook**: Update one or more properties of a Pivot webhook.
