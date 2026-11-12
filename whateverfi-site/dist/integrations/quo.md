# Quo

Quo, formerly OpenPhone, is a business phone platform for managing calls, messages, contacts, conversations, tasks, users, and webhooks.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/quo/.

## Actions

- **Create Contact**: Create a Quo contact with standard fields, optional custom fields, and external source metadata.
- **Create Task**: Create a task linked to exactly one phone number, conversation, or activity.
- **Create Webhook**: Create one unified webhook subscription for selected Quo events and return its signing secret, which must be stored securely.
- **Delete Contact**: Permanently delete one Quo contact by ID.
- **Delete Task**: Permanently delete one Quo task by ID.
- **Delete Webhook**: Permanently delete one unified Quo webhook and revoke its signing secret.
- **Get Call** (read-only): Get one call and its routing, participants, status, and timing details by ID.
- **Get Call Voicemail** (read-only): Get voicemail processing status, transcript, duration, and recording URL for a Quo call.
- **Get Contact** (read-only): Get one contact with default and custom fields by Quo contact ID.
- **Get Message** (read-only): Get one message by Quo message ID, including its content, related IDs, participants, delivery status, and timestamps.
- **Get Phone Number** (read-only): Get one Quo phone number and its assignments and restrictions by ID.
- **Get Task** (read-only): Get one task and its current links, assignee, due date, and completion state.
- **Get User** (read-only): Get one workspace user by Quo user ID.
- **Get Webhook** (read-only): Get one unified Quo webhook by its numeric ID.
- **Get Webhook Delivery** (read-only): Get the payload and attempt details for one Quo webhook delivery event.
- **List Call Recordings** (read-only): List recording segments for a Quo call in chronological order.
- **List Calls** (read-only): List calls between a Quo number and one external participant with optional user and creation-time filters.
- **List Contact Custom Fields** (read-only): List the workspace's contact custom-field definitions for constructing valid contact values.
- **List Contacts** (read-only): List contacts, optionally filtered by external IDs or source, with stable-v1 phone and custom fields.
- **List Conversations** (read-only): List inbox conversations with optional phone-number, user, creation-time, update-time, and inactive-state filters.
- **List Messages** (read-only): List messages exchanged by a Quo phone number and one or more participants, optionally filtered by sender or creation time.
- **List Phone Numbers** (read-only): List Quo phone numbers and their assigned users, calling restrictions, and messaging restrictions.
- **List Tasks** (read-only): List workspace tasks with cursor-controlled pagination.
- **List Users** (read-only): List workspace users and return one cursor-controlled page.
- **List Webhook Deliveries** (read-only): List one page of delivery events for a unified Quo webhook, optionally filtered by status, event type, or dispatch time.
- **List Webhooks** (read-only): List unified Quo webhooks across call, message, contact, task, and integration event families.
- **Send Message**: Send an irreversible text message from a Quo number to one or more recipients.
- **Send Message and Mark Conversation Done**: Send an irreversible text message from a Quo number and move the resulting inbox conversation to Done.
- **Set Conversation Status**: Set a Quo conversation to read, done, or open.
- **Set Task Assignee**: Assign or unassign a Quo user on a task.
- **Set Task Completion**: Complete or reopen a Quo task.
- **Set Task Conversation Link**: Link or unlink a Quo task and conversation.
- **Set Task Due Date**: Set or remove a Quo task's due date.
- **Update Contact**: Patch selected standard, custom, or source fields on an existing Quo contact.
- **Update Task**: Replace both the title and description of an existing Quo task.
- **Update Webhook**: Partially update a unified Quo webhook.
