# Apollo

Apollo provides CRM and lead generation capabilities, helping businesses discover contacts, manage outreach, and track sales pipelines for consistent customer relationship development

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/apollo/.

## Actions

- **Add Contacts to Sequence**: Adds contacts to a specified apollo email sequence by initiating an asynchronous background job and returning its details.
- **Apollo people search** (read-only): Searches apollo's contact database for people using various filters.
- **Bulk organization enrichment** (read-only): Enriches data for up to 10 organizations simultaneously by providing a list of their base company domains (e.g., 'apollo.io', not…
- **Bulk people enrichment** (read-only): Enrich multiple person profiles simultaneously with comprehensive data from apollo's database.
- **Bulk update account stage**: Bulk updates the stage for specified existing apollo.io accounts, moving them to a valid new account stage.
- **Get Labels** (read-only): Retrieves all labels from apollo.io, used for organizing contacts and accounts.
- **Get opportunity stages** (read-only): Retrieves all configured opportunity (deal) stages from the apollo.io account.
- **Get Organization Job Postings** (read-only): Retrieves paginated job postings for a specified organization by its id, optionally filtering by domain.
- **Get typed custom fields** (read-only): Retrieves all typed custom field definitions available in the apollo.io instance, detailing their types and configurations.
- **List email accounts** (read-only): Retrieves all email accounts and their details for the authenticated user.
- **Search sequences** (read-only): Searches for sequences (e.g., automated email campaigns) in apollo.io.
- **Search tasks** (read-only): Searches for tasks in apollo.io using filters like keywords, date ranges (due, created, updated), priorities, types, assigned users,…
- **Update contact ownership**: Updates the ownership of specified apollo contacts to a given apollo user, who must be part of the same team.
- **Update contact stage**: Updates the stage for one or more existing contacts in apollo.io to a new valid contact stage, useful for managing sales funnel progression.
- **Update contact status in sequence**: Updates a contact's status within a designated apollo sequence, but cannot set the status to 'active'.
- **Create an Apollo account**: Creates a new account in apollo.io.
- **Create Apollo contact**: Creates a new contact in apollo.io.
- **Create Apollo deal**: Creates a new sales opportunity (deal) in apollo.io.
- **Create Apollo Task**: Creates a distinct apollo.io task for each contact id in contact ids, assigning them to user id.
- **Enrich organization data** (read-only): Fetches comprehensive organization enrichment data from apollo.io for a given company domain.
- **Enrich person with Apollo** (read-only): Enriches and retrieves information for a person from apollo.io, requiring one of.
- **List Apollo account stages** (read-only): Retrieves all available apollo.io account stages, each including its unique id and name.
- **List apollo contact stages** (read-only): Retrieves all available contact stages from an apollo account, including their unique ids and names.
- **List Apollo deals** (read-only): Retrieves a list of deals from apollo, using apollo's default sort order if 'sort by field' is omitted.
- **List Apollo Users** (read-only): Retrieves a list of all users (teammates) associated with the apollo account, supporting pagination via page and per page parameters.
- **Search Apollo Accounts** (read-only): Searches for accounts within your existing apollo.io database using various criteria.
- **Search Apollo contacts** (read-only): Searches apollo contacts using keywords, stage ids (from 'list contact stages' action), or sorting (max 50,000 records.
- **Search organizations in Apollo** (read-only): Searches apollo's database for organizations using various filters.
- **Update an Apollo account**: Updates specified attributes of an existing account in apollo.io.
- **Update Apollo contact**: Updates specified attributes of an existing apollo.io contact, identified by contact id.
- **Update Apollo deal**: Updates specified fields of an existing apollo.io deal (opportunity), requiring a valid opportunity id.
