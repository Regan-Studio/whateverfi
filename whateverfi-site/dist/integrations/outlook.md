# Outlook

Outlook is Microsoft's email and calendaring platform integrating contacts and scheduling, enabling users to manage communications and events in a unified workspace

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/outlook/.

## Actions

- **Add mail attachment**: Add an attachment to an email message.
- **Create Calendar Event**: Creates a new outlook calendar event, ensuring start datetime is chronologically before end datetime.
- **Create contact**: Creates a new contact in a microsoft outlook user's contacts folder.
- **Create email draft**: Creates an outlook email draft with subject, body, recipients, and an optional attachment.
- **Create Email Rule**: Create email rule filter with conditions and actions
- **Delete mail folder**: Delete a mail folder from the user's mailbox.
- **Download Outlook attachment** (read-only): Downloads a specific file attachment from an email message in a microsoft outlook mailbox.
- **Get calendar event** (read-only): Retrieves the full details of a specific calendar event by its id from a user's outlook calendar, provided the event exists.
- **Get contact** (read-only): Retrieves a specific outlook contact by its contact id from the contacts of a specified user id (defaults to 'me' for the authenticated…
- **Get mail delta** (read-only): Retrieve incremental changes (delta) of messages in a mailbox.
- **Get mail tips** (read-only): Retrieve mail tips such as automatic replies and mailbox full status.
- **Get Outlook profile** (read-only): Retrieves the microsoft outlook profile for a specified user.
- **List events** (read-only): Retrieves events from a user's outlook calendar via microsoft graph api, supporting pagination, filtering, property selection, sorting,…
- **List mail folders** (read-only): List a user's top-level mail folders.
- **List Messages** (read-only): Retrieves a list of email messages from a specified mail folder in an outlook mailbox, with options for filtering (including by…
- **List Outlook calendars** (read-only): List calendars in the signed-in user's mailbox.
- **Move message to folder**: Move a message to another folder within the specified user's mailbox.
- **Reply to Email**: Sends a plain text reply to an outlook email message, identified by message id, allowing optional cc and bcc recipients.
- **Send email**: Sends an email with subject, body, recipients, and an optional attachment via microsoft graph api.
- **Update email message**: Updates specified properties of an existing email message.
- **Update mailbox settings**: Update mailbox settings for the signed-in user.
- **Add event attachment**: Adds an attachment to a specific outlook calendar event.
- **Create a draft reply**: Creates a draft reply in the specified user's outlook mailbox to an existing message (identified by a valid message id), optionally…
- **Create calendar**: Create a new calendar in the signed-in user's mailbox.
- **Create contact folder**: Create a new contact folder in the user's mailbox.
- **Create mail folder**: Create a new mail folder.
- **Create master category**: Create a new category in the user's master category list.
- **Delete Calendar Event**: Deletes an existing calendar event, identified by its unique event id, from a specified user's microsoft outlook calendar, with an option…
- **Delete Contact**: Permanently deletes an existing contact, using its contact id (obtainable via 'list user contacts' or 'get contact'), from the outlook…
- **Get contact folders** (read-only): Retrieve a list of contact folders in the signed-in user's mailbox.
- **Get email message** (read-only): Retrieves a specific email message by its id from the specified user's outlook mailbox.
- **Get mailbox settings** (read-only): Retrieve mailbox settings.
- **Get master categories** (read-only): Retrieve the user's master category list.
- **Get schedule** (read-only): Retrieves free/busy schedule information for specified email addresses within a defined time window.
- **Get supported languages** (read-only): Retrieve supported languages in the user's mailbox.
- **Get supported time zones** (read-only): Retrieve supported time zones in the user's mailbox.
- **List event attachments** (read-only): List attachments for a specific outlook calendar event.
- **List event reminders** (read-only): Retrieve reminders for events occurring within a specified time range.
- **List Outlook attachments** (read-only): Lists metadata (like name, size, and type, but not contentbytes) for all attachments of a specified outlook email message.
- **List Outlook contacts** (read-only): Retrieves a user's microsoft outlook contacts, from the default or a specified contact folder.
- **Search Outlook messages** (read-only): Searches messages in a microsoft 365 or enterprise outlook account mailbox, supporting filters for sender, subject, attachments,…
- **Update calendar event**: Updates specified fields of an existing outlook calendar event.
- **Update Contact**: Updates an existing outlook contact, identified by contact id for the specified user id, requiring at least one other field to be modified.
