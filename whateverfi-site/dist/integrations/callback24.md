# Callback24

Callback24 provides account APIs for managing phone calls, users, services, and routing groups.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/callback24/.

## Actions

- **Assign User to Service**: Assign a Callback24 user to a service, optionally within a routing group.
- **Batch Assign Users to Service**: Sequentially assign 1-25 Callback24 users to one service.
- **Batch Remove Users from Service**: Sequentially remove 1-25 users from a Callback24 service.
- **Cancel Upcoming Phone Calls**: Irreversibly bulk-cancel every upcoming phone call matching a phone number or lead reference.
- **Create Group**: Create a routing group within a Callback24 service, with optional localized names.
- **Create Phone Call**: Create or schedule a real phone call in Callback24.
- **Create Service**: Create a Callback24 service for a website.
- **Create User**: Create a company user in Callback24.
- **Delete Group**: Permanently and irreversibly delete one Callback24 routing group by group ID.
- **Delete Service**: Permanently and irreversibly delete one Callback24 service and its associated routing and customer-facing widget configuration.
- **Delete User**: Permanently and irreversibly delete one company user by Callback24 user ID.
- **Get Current User** (read-only): Return the Callback24 user identity associated with the connected API token.
- **Get Group** (read-only): Return one Callback24 routing group by ID with its service ID and localized names.
- **Get Phone Call** (read-only): Return detailed metadata, tags, and assigned-user information for one Callback24 phone call.
- **Get Phone Call Recording** (read-only): Return the recording URL for one recorded phone call.
- **Get Service** (read-only): Return one Callback24 service with opening hours, routing groups, and assigned users.
- **Get User** (read-only): Return one company user by Callback24 user ID.
- **List Groups** (read-only): Return all Callback24 routing groups with their service IDs and localized names.
- **List Phone Calls** (read-only): Return one page of phone-call history, optionally filtered by type, date range, phone number, users, or services.
- **List Services** (read-only): Return all Callback24 services with their nested groups, assigned users, and opening hours.
- **List Users** (read-only): Return all company users visible to the connected Callback24 account.
- **Remove User from Service**: Remove a Callback24 user's assignment from a service, optionally within a routing group.
- **Update Group**: Update one or more localized names for a Callback24 routing group.
- **Update Phone Call**: Update editable metadata for an existing phone call without changing its explicit cancellation or start/end status fields.
- **Update Phone Call Status**: Set a phone call's cancelled flag and/or recorded start and end times.
- **Update Service**: Change the website configured for an existing Callback24 service.
- **Update User**: Update one or more profile or role fields for an existing Callback24 company user.
