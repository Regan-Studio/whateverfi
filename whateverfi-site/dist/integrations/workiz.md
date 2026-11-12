# Workiz

Workiz is a field service management platform for scheduling jobs, managing leads and teams, and recording payments.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/workiz/.

## Actions

- **Add Client Note**: Add a text note to a Workiz client and optionally pin it.
- **Assign Technician**: Assign a technician to a Workiz job or lead, optionally replacing the existing technician when the account disallows multiple technicians.
- **Assign Technicians**: Assign up to 25 technicians to one Workiz job or lead on a multi-technician account and return a separate success or failure result for…
- **Convert Lead to Job**: Irreversibly convert an existing Workiz lead into a job and return the resulting job.
- **Create Job**: Create a scheduled or unscheduled Workiz job for an existing client, or match or create an inline client and create the job for them.
- **Create Lead**: Create a scheduled or unscheduled Workiz lead for an existing client, or match or create an inline client and create the lead for them.
- **Get Client** (read-only): Retrieve one Workiz client with service and billing addresses, contacts, tags, notes, custom fields, and other detail fields.
- **Get Invoice or Estimate** (read-only): Retrieve one Workiz invoice or estimate with line items, payments, client and job links, totals, and status.
- **Get Job or Lead** (read-only): Retrieve one Workiz job or lead, selected by record_type, including its client, schedule, status, and resource-specific detail fields.
- **List Assigned Technicians** (read-only): List one page of technicians assigned to a Workiz job or lead.
- **List Client Notes** (read-only): List one page of notes recorded on a Workiz client, ordered by creation date descending.
- **List Clients** (read-only): List and search Workiz clients with balance, tag, created-date, and sort filters.
- **List Invoices or Estimates** (read-only): List Workiz invoices or estimates with optional created or updated date filtering.
- **List Jobs or Leads** (read-only): List one page of Workiz jobs or leads, selected by record_type, with optional open-state, date, and sort filters, and return a…
- **List Users** (read-only): List Workiz users and technicians for assignment and attribution workflows.
- **List Workiz Reference Data** (read-only): List IDs and names needed to create or update Workiz records, such as job types, ad groups, tags, statuses, and custom fields.
- **Remove Technician**: Remove a technician assignment from a Workiz job or lead.
- **Search Workiz Records** (read-only): Search jobs, leads, clients, and invoices by a name, phone, email, address, serial number, or custom-field value.
- **Set Primary Technician**: Make an already assigned technician the primary technician on a Workiz job or lead.
- **Update Job**: Update only the selected fields of an existing Workiz job.
- **Update Lead**: Update only selected fields of an existing Workiz lead, including status, schedule, client details, tags, and custom fields.
