# Copper

Copper is a customer relationship management platform for managing contacts, companies, leads, opportunities, projects, tasks, activities, files, and webhooks.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/copper/.

## Actions

- **Bulk Create Activities (Beta)**: Attempt to create 1-10 user-category Copper activities and return ordered per-item successes or validation failures.
- **Bulk Create Companies (Beta)**: Attempt to create 1-10 Copper companies and return ordered per-item successes or validation failures.
- **Bulk Create Leads**: Create 1-10 Copper leads in one beta bulk request and return ordered per-item outcomes.
- **Bulk Create Opportunities (Beta)**: Attempt to create 1-10 Copper opportunities and return ordered per-item successes or validation failures.
- **Bulk Create People (Beta)**: Attempt to create 1-10 Copper people and return ordered per-item successes or validation failures.
- **Bulk Update Companies (Beta)**: Attempt to update 1-10 Copper companies and return ordered per-item successes or validation failures.
- **Bulk Update Leads**: Update 1-10 Copper leads in one beta bulk request and return ordered per-item outcomes.
- **Bulk Update People (Beta)**: Attempt to update 1-10 Copper people and return ordered per-item successes or validation failures.
- **Convert Lead**: Convert a Copper lead into a person and optionally a company and opportunity.
- **Create Activity**: Create a user-category activity such as a note on an existing Copper lead, person, company, opportunity, project, or task.
- **Create Company**: Create a Copper company with domain, contact, ownership, tag, and custom-field data.
- **Create Custom Activity Type**: Create a named Copper custom activity type with a supported icon.
- **Create Custom Field Definition**: Create a Copper custom field for selected record types.
- **Create Lead**: Create a Copper lead with contact, ownership, source, status, tag, and custom-field data.
- **Create Opportunity**: Create a Copper opportunity.
- **Create Person**: Create a Copper person with contact, company, ownership, tag, and custom-field data.
- **Create Project**: Create a Copper project, optionally related to another record and assigned to a user.
- **Create Related Link**: Connect two existing Copper records through a Connect custom field.
- **Create Task**: Create a Copper task with optional assignment, related record, due/reminder times, priority, tags, and custom fields.
- **Delete Attached File**: Permanently delete one file attached to a Copper lead, person, opportunity, company, or project.
- **Delete Custom Field Definition**: Permanently delete one Copper custom-field definition by ID.
- **Delete Lead**: Permanently delete one Copper lead by ID.
- **Delete Record**: Delete one Copper person, company, opportunity, project, task, or activity by type and ID.
- **Delete Related Link**: Delete one Copper Connect-field connection by related-link ID.
- **Get Account** (read-only): Return the connected Copper account, timezone, and feature settings.
- **Get Attached File Metadata** (read-only): Get metadata for one file attached to a Copper lead, person, opportunity, company, or project.
- **Get Current User** (read-only): Return the Copper user represented by the connected account, including the user ID used for assignments.
- **Get Custom Activity Type** (read-only): Return one Copper custom activity type's name, icon, enabled state, interaction behavior, and ownership metadata by ID.
- **Get Custom Field Definition** (read-only): Return one Copper custom field's data type, record availability, filterability, options, and currency configuration by definition ID.
- **Get Field Layout** (read-only): Return enabled and create/edit requiredness metadata for one Copper entity type.
- **Get Lead** (read-only): Return one Copper lead's contact, ownership, source, status, tags, and custom-field data by lead ID.
- **Get Person by Email** (read-only): Return the unique Copper person record matching an exact email address.
- **Get Record** (read-only): Fetch one user, person, company, opportunity, project, task, or activity by its type and ID.
- **List Attached Files** (read-only): List all files attached to one Copper lead, person, opportunity, company, or project.
- **List Custom Activity Types** (read-only): List Copper's default user-entered activity types and account-created custom activity types.
- **List Custom Field Definitions** (read-only): Return Copper custom-field IDs, types, availability, and options needed to read, filter, and write custom field values.
- **List Lead Statuses** (read-only): List Copper lead status IDs, names, display order, and default selection for use in lead writes and searches.
- **List Lead, Person, or Company Activities** (read-only): List selected activity types related to one Copper lead, person, or company.
- **List Pipeline Stages** (read-only): List Copper opportunity stages for one pipeline, or omit pipeline_id for a flat cross-pipeline list.
- **List Pipelines** (read-only): Return all configured Copper pipelines with their stages and win probabilities for opportunity creation and updates.
- **List Reference Values** (read-only): List one bounded set of Copper IDs used in write schemas.
- **List Related Links** (read-only): List Connect-field connections for one Copper source record, optionally narrowed to one Connect field.
- **List Related Records** (read-only): List records related to one Copper entity, optionally restricted to a target record type.
- **List Tags** (read-only): Return one alphabetical page of Copper tag names for filtering or assigning records.
- **List Users** (read-only): Return one page of Copper users for resolving assignee and owner IDs.
- **Relate Records**: Create a direct relationship between two existing Copper records, preserving both record types and IDs.
- **Search Activities** (read-only): Search Copper activities globally or for one parent record by activity type and date range, returning one page.
- **Search Companies** (read-only): Search Copper companies by name, domain, ownership, contact type, location, date, or custom-field criteria and return one page.
- **Search Leads** (read-only): Search Copper leads by identity, ownership, status, source, location, value, activity, date, tags, socials, or custom fields and return…
- **Search Opportunities** (read-only): Search Copper opportunities by pipeline, stage, status, contact, company, value, date, ownership, or custom-field criteria and return one…
- **Search People** (read-only): Search Copper people by contact, company, ownership, tag, date, or custom-field criteria and return one page.
- **Search Projects** (read-only): Search Copper projects by name, owner, tag, status, or custom-field criteria and return one page.
- **Search Tasks** (read-only): Search Copper tasks by name, owner, tag, related project or opportunity, status, due date, or custom-field criteria and return one page.
- **Unrelate Records**: Remove a direct relationship between two existing Copper records without deleting either record.
- **Update Activity**: Update the details, date, or both for an existing user-category Copper activity.
- **Update Company**: Update selected writable fields of an existing Copper company without replacing omitted fields.
- **Update Custom Activity Type**: Rename, change the icon, or enable or disable a Copper custom activity type.
- **Update Custom Field Definition**: Update one Copper custom-field definition by ID.
- **Update Lead**: Update selected fields of a Copper lead without replacing omitted fields.
- **Update Opportunity**: Update selected writable fields of an existing Copper opportunity without replacing omitted fields.
- **Update Person**: Update selected writable fields of an existing Copper person without replacing omitted fields.
- **Update Project**: Update selected writable fields of an existing Copper project without replacing omitted fields.
- **Update Task**: Update selected writable fields of an existing Copper task without replacing omitted fields.
- **Upload Attached File**: Get upload authorization from Copper, upload up to 20 MB of file bytes to Copper's fixed Amazon S3 bucket, and attach the uploaded key to…
- **Upsert Lead**: Create or update a Copper lead by exact name, email, or custom-field match.
