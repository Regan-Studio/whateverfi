# Calendly

Calendly is an appointment scheduling tool that automates meeting invitations, availability checks, and reminders, helping individuals and teams avoid email back-and-forth

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/calendly/.

## Actions

- **Get user** (read-only): Retrieves comprehensive details for an existing calendly user.
- **Cancel event**: Permanently cancels an existing, active scheduled event by its uuid, optionally providing a reason, which may trigger notifications to…
- **Create an invitee no-show**: Marks an invitee, identified by their existing and valid uri, as a 'no show' for a scheduled event.
- **Create One-Off Event Type**: Creates a temporary calendly one-off event type for unique meetings outside regular availability, requiring valid host/co-host uris, a…
- **Create scheduling link**: Create a single-use scheduling link.
- **Create share**: Creates a customizable, one-time share link for a calendly event type, allowing specific overrides to its settings (e.g., duration,…
- **Create single use scheduling link**: Creates a one-time, single-use scheduling link for an active calendly event type, expiring after one booking.
- **Create webhook subscription**: Creates a calendly webhook subscription to notify a specified url (which must be a publicly accessible https endpoint) for selected events…
- **Delete invitee data**: Permanently removes all invitee data associated with the provided emails from past organization events, for data privacy compliance…
- **Delete invitee no show**: Deletes an invitee no-show record by its uuid to reverse an invitee's 'no-show' status.
- **Delete scheduled event data**: For enterprise users, initiates deletion of an organization's scheduled event data between a start time and end time (inclusive, where…
- **Delete webhook subscription**: Deletes an existing webhook subscription to stop calendly sending event notifications to its registered callback url.
- **Get current user** (read-only): Retrieves detailed information about the currently authenticated calendly user.
- **Get event** (read-only): Retrieve a specific calendly scheduled event by its uuid, provided the event exists in the user's calendly account.
- **Get event invitee** (read-only): Retrieves detailed information about a specific invitee of a scheduled event, using their unique uuids.
- **Get event type** (read-only): Retrieves details for a specific calendly event type, identified by its uuid, which must be valid and correspond to an existing event type.
- **Get group** (read-only): Retrieves all attributes of a specific calendly group by its uuid.
- **Get group relationship** (read-only): Retrieves a specific calendly group relationship by its valid and existing uuid, providing details on user-group associations and…
- **Get invitee no show** (read-only): Retrieves details for a specific invitee no show record by its uuid.
- **Get organization invitation** (read-only): Retrieves a specific calendly organization invitation using its uuid and the parent organization's uuid.
- **Get organization membership** (read-only): Retrieves a specific calendly organization membership by its uuid, returning all its attributes.
- **Get routing form** (read-only): Retrieves a specific routing form by its uuid, providing its configuration details including questions and routing logic.
- **Get user availability schedule** (read-only): Retrieves an existing user availability schedule by its uuid.
- **Get webhook subscription** (read-only): Retrieves the details of an existing webhook subscription, identified by its uuid, including its callback url, subscribed events, scope,…
- **Invite user to organization**: Invites a user to the specified calendly organization by email, if they aren't already a member and lack a pending invitation to it.
- **List activity log entries** (read-only): Retrieves a list of activity log entries for a specified calendly organization (requires an active enterprise subscription), supporting…
- **List event invitees** (read-only): Retrieves a list of invitees for a specified calendly event uuid, with options to filter by status or email, and sort by creation time.
- **List event type available times** (read-only): Fetches available time slots for a calendly event type within a specified time range.
- **List event type hosts** (read-only): Retrieves a list of hosts (users) assigned to a specific, existing calendly event type, identified by its uri.
- **List events** (read-only): Retrieves a list of scheduled calendly events.
- **List group relationships** (read-only): Retrieves a list of group relationships defining an owner's role (e.g., member, admin) within a group.
- **List groups** (read-only): Returns a list of groups for a specified calendly organization uri, supporting pagination.
- **List organization invitations** (read-only): Retrieves a list of invitations for a specific organization, identified by its uuid.
- **List organization memberships** (read-only): Retrieves a list of organization memberships.
- **List outgoing communications** (read-only): Retrieves a list of outgoing sms communications for a specified organization.
- **List routing forms** (read-only): Retrieves routing forms for a specified organization.
- **List user availability schedules** (read-only): Retrieves all availability schedules for the specified calendly user.
- **List user busy times** (read-only): Fetches a user's busy time intervals (internal and external calendar events) in ascending order for a period up to 7 days.
- **List user event types** (read-only): Retrieves event types for a user or organization.
- **List webhook subscriptions** (read-only): Retrieves webhook subscriptions for a calendly organization.
- **Remove user from organization**: Removes a user (who is not an owner) from an organization by their membership uuid, requiring administrative privileges.
- **Revoke a user's organization invitation**: Revokes a pending and revokable (not yet accepted or expired) organization invitation using its uuid and the organization's uuid,…
