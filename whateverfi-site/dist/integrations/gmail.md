# Gmail

Gmail is Google’s email service, featuring spam protection, search functions, and seamless integration with other G Suite apps for productivity

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/gmail/.

## Actions

- **Create email draft**: Creates a gmail email draft, supporting to/cc/bcc, subject, plain/html body (ensure is html=true for html), attachments, and threading.
- **Delete Draft**: Permanently deletes a specific gmail draft using its id.
- **Delete message**: Permanently deletes a specific email message by its id from a gmail mailbox.
- **Fetch emails** (read-only): Fetches a list of email messages from a gmail account, supporting filtering, pagination, and optional full content retrieval.
- **Fetch message by message ID** (read-only): Fetches a specific email message by its id, provided the message id exists and is accessible to the authenticated user id.
- **Get Gmail attachment** (read-only): Retrieves a specific attachment by id from a message in a user's gmail mailbox, requiring valid message and attachment ids.
- **List drafts** (read-only): Retrieves a paginated list of email drafts from a user's gmail account.
- **Move to Trash**: Moves an existing, non-deleted email message to the trash for the specified user.
- **Patch Label**: Patches the specified label.
- **Reply to email thread**: Sends a reply within a specific gmail thread using the original thread's subject, requiring a valid thread id and correctly formatted…
- **Search People** (read-only): Searches contacts by matching the query against names, nicknames, emails, phone numbers, and organizations, optionally including 'other…
- **Send Draft**: Sends the specified, existing draft to the recipients in the to, cc, and bcc headers.
- **Send Email**: Sends an email via gmail api using the authenticated user's google profile display name, requiring is html=true if the body contains html…
- **Create label**: Creates a new label with a unique name in the specified user's gmail account.
- **Fetch Message by Thread ID** (read-only): Retrieves messages from a gmail thread using its thread id, where the thread must be accessible by the specified user id.
- **Get contacts** (read-only): Fetches contacts (connections) for the authenticated google account, allowing selection of specific data fields and pagination.
- **Get People** (read-only): Retrieves either a specific person's details (using resource name) or lists 'other contacts' (if other contacts is true), with person…
- **Get Profile** (read-only): Retrieves key gmail profile information (email address, message/thread totals, history id) for a user.
- **List Gmail labels** (read-only): Retrieves a list of all system and user-created labels for the specified gmail account.
- **List threads** (read-only): Retrieves a list of email threads from a gmail account, identified by user id (email address or 'me'), supporting filtering and pagination.
- **Modify email labels**: Adds and/or removes specified gmail labels for a message.
- **Modify thread labels**: Adds or removes specified existing label ids from a gmail thread, affecting all its messages.
- **Remove label**: Permanently deletes a specific, existing user-created gmail label by its id for a user.
