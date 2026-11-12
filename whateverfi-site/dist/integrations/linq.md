# Linq

Send and manage iMessage, RCS, and SMS conversations, attachments, phone numbers, payments, and webhooks through the Linq Partner API.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/linq/.

## Actions

- **Add Chat Participant**: Add an external participant to an existing group chat.
- **Add Poll Options**: Irreversibly add recipient-visible options to an existing iMessage poll.
- **Block Handle**: Block a handle account-wide from inbound and direct outbound messaging.
- **Cancel Payment**: Irreversibly cancel a financial payment and close its virtual card.
- **Cancel Payment Request**: Irreversibly cancel an unpaid payment request and its underlying payment intent.
- **Check Messaging Capability** (read-only): Check whether a recipient can receive iMessage or RCS without sending a message.
- **Connect Payment Handle**: Start the financial-consent ceremony for a customer phone number or email so an agent can later pay on that customer's behalf.
- **Create Chat**: Create or reuse a chat on an explicit sending line and send an irreversible recipient-visible initial message.
- **Create Payment**: Create or advance a real financial payment on a connected customer's behalf, potentially minting a single-use virtual card.
- **Create Payment Request**: Create a customer-facing checkout that can collect a one-time charge or start an auto-renewing subscription.
- **Create Poll**: Irreversibly send a recipient-visible iMessage poll to an existing chat.
- **Create Webhook Subscription**: Create a webhook subscription for selected Linq events at a controlled HTTPS callback.
- **Delete Attachment**: Permanently delete a Linq attachment and its stored bytes.
- **Delete Message**: Irreversibly delete a message record from Linq.
- **Delete Webhook Subscription**: Permanently delete a Linq webhook subscription and stop its future event deliveries.
- **Edit Message**: Irreversibly change recipient-visible text in one part of a message sent within the last 15 minutes.
- **Get Attachment** (read-only): Return metadata and current status for a Linq attachment referenced by a message.
- **Get Available Number** (read-only): Select an available Linq sending number, optionally for recipients or a line type.
- **Get Chat** (read-only): Return one chat by ID, including participants, service, state, and health information.
- **Get Chat Location** (read-only): Return precise locations currently shared by contacts in a chat.
- **Get Experience** (read-only): Return one Linq experience and preserve its dynamic action field definitions.
- **Get Message** (read-only): Return one Linq message by ID with its content parts, sender, actual and preferred transport, delivery state, reply target, and timestamps.
- **Get Payment** (read-only): Read a payment's financial state, amount, customer handle, merchant details, and any customer-action URL.
- **Get Payment Credentials** (read-only): Return the complete, highly sensitive short-lived handoff used to reveal a ready payment's virtual card directly from the provider.
- **Get Payment Handle Connection** (read-only): Read the financial-consent connection status for a customer phone number or email.
- **Get Payment Provider** (read-only): Read the organization's onboarding status for a payment provider.
- **Get Payment Request** (read-only): Return one payment request's amount, lifecycle status, checkout details, and provider join keys.
- **Get Poll** (read-only): Return an iMessage poll's current options, voters, and distinct voter count.
- **Get Reputation Audit** (read-only): Return a Linq line reputation audit created with explicit approval.
- **Get Webhook Subscription** (read-only): Return one Linq webhook subscription by ID, including its callback URL, event and phone filters, active state, and configured…
- **Leave Chat**: Leave an iMessage group chat.
- **List Blocked Handles** (read-only): Return phone numbers, email addresses, short codes, and sender IDs currently blocked account-wide from inbound and direct outbound…
- **List Chats** (read-only): Return one page of chats, optionally filtered by sending line or participant, with a cursor for the next page.
- **List Contact Cards** (read-only): Return Linq account contact-card identity data, optionally for one E.164 sending line.
- **List Experiences** (read-only): Discover Linq experiences and their dynamic action fields.
- **List Message Thread** (read-only): Return one page containing the origin message and threaded replies, starting from any message in the thread.
- **List Messages** (read-only): Return one page of messages from a chat, including content, sender, transport, delivery state, direction, reply target, and timestamps,…
- **List Payment Requests** (read-only): Return one newest-first page of payment requests for reconciliation, optionally filtered by lifecycle status.
- **List Phone Numbers** (read-only): Return the connected Linq account's sending lines with line type, forwarding configuration, and reputation status.
- **List Webhook Events** (read-only): Return the webhook event types currently available for subscription on the connected Linq account.
- **List Webhook Subscriptions** (read-only): Return the connected Linq account's webhook subscriptions, including event and phone-number filters, target URLs, active state, and…
- **Mark Chat As Read**: Mark every message in a chat as read and send an irreversible read receipt.
- **Remove Chat Background**: Reset a chat's recipient-visible transcript background to the default.
- **Remove Chat Participant**: Remove an external participant from a group chat.
- **Request Attachment Upload**: Reserve persistent attachment storage and return a 15-minute presigned upload URL.
- **Request Chat Location**: Prompt a contact in a one-to-one iMessage chat to consent to sharing their precise location.
- **Revoke Payment Handle Connection**: Irreversibly revoke this partner's financial-consent grant for a customer phone number or email.
- **Send Message**: Send one irreversible, externally visible message to phone numbers or emails.
- **Send Message to Chat**: Send one follow-up or threaded reply to an existing Linq chat using its established sending line.
- **Send Voice Memo to Chat**: Irreversibly send recipient-visible audio as a native iMessage voice memo bubble to every participant in an existing Linq chat.
- **Set Chat Background**: Set a recipient-visible color, animated, or photo transcript background.
- **Set Up Contact Card**: Create or replace a Linq contact card for a sending line.
- **Share Contact Card With Chat**: Share the connected sending line's active contact card with a chat.
- **Start Payment Provider Onboarding**: Create a hosted payment-provider onboarding session for the organization.
- **Start Reputation Audit**: Start a potentially metered or limited reputation audit for a Linq sending line.
- **Start Typing Indicator**: Show a best-effort recipient-visible typing indicator for about 85-90 seconds.
- **Stop Chat Location Sharing**: Stop a specific contact's inbound location share.
- **Stop Typing Indicator**: Immediately clear the connected line's recipient-visible typing indicator for a chat.
- **Toggle Poll Vote**: Irreversibly send a recipient-visible update that adds or removes the connected line's vote on one option of an iMessage poll.
- **Unblock Handle**: Remove an account-wide messaging block.
- **Update Chat**: Update a group chat's display name or icon.
- **Update Contact Card**: Update the public contact-card identity for one Linq sending line.
- **Update iMessage App Card**: Irreversibly send a recipient-visible in-place update to an iMessage app card.
- **Update Message Reaction**: Irreversibly mutate recipient-visible reaction state by adding or removing a tapback, or by adding an iMessage sticker.
- **Update Phone Number**: Change a Linq sending line's production forwarding configuration.
- **Update Sticker Placement**: Irreversibly send a recipient-visible update that moves, resizes, or rotates an existing iMessage sticker on a message.
- **Update Webhook Subscription**: Update a Linq webhook subscription's callback, filters, active state, or routing-header names.
- **Verify Payment Handle**: Submit a customer's single-use OTP to complete the financial-consent ceremony and authorize future payments on the customer's behalf.
