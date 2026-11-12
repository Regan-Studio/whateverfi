# Blooio

Blooio provides stable v2 APIs for messaging, chats, contacts, groups, phone numbers, and account analytics.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/blooio/.

## Actions

- **Add Contact Tags**: Add or reactivate one or more free-form tags on a contact.
- **Create Contact**: Create a contact from an E.164 phone number or email address, optionally assigning a name.
- **Create Group**: Create a messaging group, optionally linking an existing iMessage chat and recording its members.
- **Delete Contact**: Soft-delete one contact identified by E.164 phone number or email.
- **Delete Group**: Soft-delete a group, remove its members, and exit its linked iMessage chat when one exists.
- **Get Account** (read-only): Return the authenticated organization, assigned devices, and message usage without exposing the API-key identifier.
- **Get Chat** (read-only): Return detailed counts, participant context, and latest-message metadata for one conversation.
- **Get Contact** (read-only): Return one contact by E.164 phone number or email, including its current tags.
- **Get Contact Capabilities** (read-only): Check whether a contact can receive iMessage, SMS, or FaceTime before choosing a communication path.
- **Get Group** (read-only): Return one messaging group by its grp_ identifier.
- **Get Message** (read-only): Return one message with content, reactions, delivery status, protocol, errors, and inline-reply context.
- **Get Poll Results** (read-only): Return a poll's definition, option vote counts, and total votes.
- **Get Risk Summary** (read-only): Return the cached fleet risk rollup.
- **List Chats** (read-only): Search and page through conversations, ordered by recent activity or oldest activity.
- **List Contacts** (read-only): Search and page through organization contacts by identifier or name.
- **List Group Members** (read-only): Page through the members recorded for a messaging group.
- **List Groups** (read-only): Search and page through messaging groups by name.
- **List Messages** (read-only): Page through messages in one chat with direction, time-window, and ordering filters.
- **List Numbers** (read-only): List sender phone numbers assigned to the connected API key and their availability state.
- **Mark Chat Read**: Mark every message in a chat as read and irreversibly send an externally visible read receipt to the sender.
- **Remove Contact Tags**: Soft-delete one or more exact tags from a contact sequentially.
- **Send Message**: Irreversibly send one or multiple text, attachment, multipart, or inline-reply messages.
- **Send Poll**: Irreversibly send an interactive native iMessage poll to a chat.
- **Set Message Reaction**: Add or remove a classic tapback or emoji reaction on a specific or relative message in a chat.
- **Update Contact**: Set or clear the display name of an existing contact.
- **Update Group**: Rename a group and, when linked, synchronize the new name to its iMessage chat.
