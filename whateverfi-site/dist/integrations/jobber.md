# Jobber

Jobber is a field service management platform for managing clients, jobs, scheduling, quotes, invoices, and payments.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/jobber/.

## Actions

- **Create Client**: Create an individual or company client in Jobber with optional primary email and phone contact details.
- **Create Custom Field Configuration**: Create one Jobber TEXT, LINK, AREA, TRUE_FALSE, NUMERIC, or DROPDOWN custom-field definition through a fixed type-specific mutation.
- **Create Job**: Create a basic one-off Jobber job for an existing property with an explicit invoicing strategy.
- **Create Note**: Create a note on exactly one Jobber client, job, quote, invoice, or request.
- **Create Quote**: Create a persistent draft quote for an existing Jobber client and property with one or more explicit line items.
- **Disconnect App**: Permanently disconnect this connected account from the Jobber app, immediately revoking its access and refresh tokens.
- **Get Account** (read-only): Return the connected Jobber account's identity and basic company details.
- **Get Client** (read-only): Return one client, its basic properties, and up to 10 normalized notes by opaque Jobber client ID.
- **Get Invoice** (read-only): Return one invoice's receivables summary, client, salesperson, and up to 10 normalized notes by opaque Jobber invoice ID.
- **Get Job** (read-only): Return one job's status, schedule, totals, client, property, and up to 10 normalized notes by opaque Jobber job ID.
- **Get Product Or Service** (read-only): Return one catalog product, service, or labour item by opaque Jobber catalog ID.
- **Get Property** (read-only): Return one service property and its owning client by opaque Jobber property ID.
- **Get Quote** (read-only): Return one quote's financial summary, client, property, salesperson, and up to 10 notes by opaque Jobber quote ID.
- **Get Request** (read-only): Return one work request and up to 10 normalized notes by opaque Jobber request ID.
- **Get Time Sheet Entry** (read-only): Return one time sheet entry by opaque Jobber ID.
- **Get User** (read-only): Return a Jobber user by ID, or the current authorized user when user_id is omitted.
- **List Clients** (read-only): Search and filter clients in the connected Jobber account, returning one cursor-paginated page.
- **List Custom Field Configurations** (read-only): List custom-field definitions by target, value type, or creating app, with type-specific defaults and one cursor page.
- **List Invoices** (read-only): Search and filter invoices by client, status, or due date, returning one cursor-paginated page.
- **List Jobs** (read-only): Search and filter jobs by status, type, schedule, or assignee, returning one cursor-paginated page.
- **List Notes** (read-only): List one cursor page of notes for a Jobber client, job, quote, invoice, or request.
- **List Products And Services** (read-only): Return one cursor-paginated page of catalog products, services, and labour items.
- **List Properties** (read-only): Search properties or list those belonging to a client, returning one cursor-paginated page.
- **List Quotes** (read-only): Search and filter quotes by client, status, salesperson, or creation time, returning one cursor-paginated page.
- **List Requests** (read-only): Search and filter work requests by client, property, status, assignee, or timestamp, returning one cursor-paginated page.
- **List Scheduled Items** (read-only): List visits, tasks, events, assessments, and reminders for a required date-time range, optionally including unassigned or unscheduled…
- **List Time Sheet Entries** (read-only): Filter time sheet entries by user, approval, payable state, active timer, or timestamps, returning one cursor-paginated page.
- **List Users** (read-only): Search Jobber users by name or activation status and return each user's account status and role details in one cursor-paginated page.
- **List Visits** (read-only): Filter scheduled or unscheduled visits by status, time, assignee, or billing state, returning one cursor-paginated page.
- **Update Client**: Update a Jobber client's identity, communication preferences, or tags, or add primary email or phone details.
- **Update Custom Field Configuration**: Rename or update the type-specific default of an existing Jobber custom field.
- **Update Invoice**: Update an existing Jobber invoice's customer-facing text, issue or due terms, discount, salesperson, or payment options.
- **Update Job**: Update an existing Jobber job's basic details, timeframe, salesperson, or review-request preference.
- **Update Note**: Update a note discovered on a Jobber client, job, quote, invoice, or request.
- **Update Product Or Service**: Update an existing Jobber catalog item's pricing, visibility, scheduling, classification, or self-serve quantity settings.
- **Update Quote**: Update an existing Jobber quote's customer-facing text, quote number, pricing modifiers, salesperson, or payment options.
