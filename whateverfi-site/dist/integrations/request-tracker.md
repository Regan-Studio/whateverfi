# Request Tracker (RT)

Request Tracker is a ticketing and workflow platform for managing support requests, queues, users, assets, knowledge articles, and related operations.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/request-tracker/.

## Actions

- **Add Ticket Comment**: Add a private internal comment to an RT ticket.
- **Create Ticket**: Create a durable RT ticket in a queue.
- **Get Queue** (read-only): Retrieve one visible RT queue by id or exact name, including lifecycle and capability-sensitive links.
- **Get Ticket** (read-only): Retrieve one visible RT ticket, including its current fields and capability-sensitive links for allowed follow-up operations.
- **Get Ticket History** (read-only): Return one page of detailed ticket history, including transaction types, field changes, comments, creators, and timestamps.
- **List Queues** (read-only): List queues visible to the connected RT user so an agent can select a queue for ticket search or creation.
- **List Ticket Attachments** (read-only): List attachment metadata references associated with a visible RT ticket without downloading attachment content.
- **Reply to Ticket**: Send public correspondence on an RT ticket.
- **Search Tickets** (read-only): Search visible RT tickets with an explicit TicketSQL expression and return one bounded page.
- **Search Users** (read-only): Search RT users with structured field conditions and return one bounded page of user references or selected fields for requester and owner…
- **Update Ticket**: Update selected metadata on an existing RT ticket and verify every requested field by reading it back.
