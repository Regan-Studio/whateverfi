# Aircall

Aircall is a cloud-based phone and call-center platform. This toolkit manages users, teams, phone numbers, calls, contacts, and tags on a single Aircall company account via the Public API.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/aircall/.

## Actions

- **Add Comment to Call**: Add a comment/note to a Call (max 5 comments per call.
- **Add Contact Method**: Add a phone number or an email address to an existing Aircall contact.
- **Add User to Team**: Add a User to a Team (membership change).
- **Create Contact**: Create a shared Aircall contact.
- **Create Tag**: Create a Tag.
- **Create Team**: Create a new Team.
- **Create User**: Create an Aircall user and send them a real invitation email, consuming a licensed seat.
- **Create Webhook**: Create an Aircall webhook targeting a public HTTPS URL.
- **Delete Call Media**: Request permanent deletion of a Call's audio recording or voicemail, for compliance or data governance.
- **Delete Contact**: Permanently delete a shared Contact and all of its phone numbers and email addresses.
- **Delete Contact Method**: Permanently remove one phone number or email address from an Aircall contact.
- **Delete Tag**: Delete a Tag by id.
- **Delete Team**: Delete a Team by id.
- **Delete User**: Permanently delete a User.
- **Delete Webhook**: Permanently delete an Aircall webhook.
- **Get Call** (read-only): Retrieve a single Call by id, with optional contact / short-url / timeline enrichment via the fetch_* flags.
- **Get Company** (read-only): Retrieve information about the connected Aircall company (name, users_count, numbers_count).
- **Get Contact** (read-only): Retrieve a single shared Contact by id, with its nested phone_numbers[] and emails[].
- **Get Number** (read-only): Retrieve a single Aircall phone Number by its numeric id.
- **Get Number Registration Status** (read-only): Check whether an Aircall phone number is registered for compliance (10DLC or other regulatory registration) by reading the status field.
- **Get Tag** (read-only): Retrieve a single Tag by id.
- **Get Team** (read-only): Retrieve a single Team by id, including its member users.
- **Get User** (read-only): Retrieve one Aircall user by numeric id or by email address.
- **Get User Availability** (read-only): Check the current availability of one User.
- **Get Webhook** (read-only): Retrieve one Aircall webhook by its UUID or legacy numeric id.
- **List Calls** (read-only): List the account's calls in chronological order, covering about 6 months of history and at most 10,000 items via pagination.
- **List Contacts** (read-only): List all shared Contacts (hard-capped at 10,000 items via pagination — window past with the from timestamp).
- **List Numbers** (read-only): List all Aircall phone Numbers in the account.
- **List Tags** (read-only): List all Tags in the account.
- **List Teams** (read-only): List all Teams in the account.
- **List User Numbers (V2)** (read-only): List all Aircall Numbers assigned to a specific User (V2, paginated).
- **List Users** (read-only): List the users in the Aircall account, one page at a time with a next_cursor to continue.
- **List Users Availability** (read-only): List the detailed availability of all Users (whether each user is available/offline/on a call, etc.).
- **List Webhooks** (read-only): List webhook subscriptions accessible to the connected Aircall company.
- **Publish Call Insight Card**: Display contextual title, short text, links, or Aircall user details to the agent handling an ongoing call.
- **Remove User from Team**: Remove a User from a Team (membership change).
- **Search Calls** (read-only): Find calls matching any combination of direction (inbound or outbound), user_id, phone_number and tag ids, optionally narrowed to a…
- **Search Contacts** (read-only): Search shared Contacts by phone_number and/or email (optionally within a from/to date window).
- **Set Call Recording State**: Pause or resume recording on an ongoing Aircall call.
- **Start Outbound Call**: Place a real, billable outbound phone call from an Aircall user's desktop Workspace to an external number.
- **Tag Call**: Tag a Call with one or more existing Tag ids (create tags first with AIRCALL_CREATE_TAG).
- **Transfer Call**: Cold-transfer a call that is live right now to one user, one team, or one external phone number.
- **Update Contact**: Update a Contact's core fields (first_name, last_name, company_name, information).
- **Update Contact Method**: Update one phone number or email address that is already on an Aircall contact.
- **Update Number**: Update at least one mutable Number field.
- **Update Tag**: Update a Tag (PUT, full replace).
- **Update User**: Update an existing Aircall user's name, availability_status, substatus, roles or wrap-up time in place.
- **Update Webhook**: Update an Aircall webhook's URL, name, active state, or event subscriptions.
