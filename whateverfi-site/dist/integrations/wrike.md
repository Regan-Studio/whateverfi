# Wrike

Wrike is a project management and collaboration tool offering customizable workflows, Gantt charts, reporting, and resource management to boost team productivity

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/wrike/.

## Actions

- **Create a folder**: Creates a new wrike subfolder within the specified folderid, optionally as a project if customitemtypeid is given.
- **Create invitation**: Invites a user to a wrike workspace by email, optionally with name, specifying either usertypeid or a combination of role/external.
- **Create task in folder**: Creates a new task in a specified wrike folder.
- **Get account information** (read-only): Retrieves detailed wrike account information, where the response content is influenced by selected fields, account subscription, and user…
- **Get all custom fields** (read-only): Retrieves all custom field definitions (including id, name, type, and settings) from the wrike account.
- **Get specific contact information** (read-only): Retrieves detailed information for a specific wrike contact using their unique contactid, optionally including metadata and customfields…
- **Modify folder attributes**: Modifies an existing wrike folder.
- **Modify task**: Modifies an existing wrike task by its id, allowing updates to attributes such as title, status, dates, assignees, and custom fields.
- **Query workflows** (read-only): Fetches a list of all workflows with their detailed information from the wrike account.
- **Update account metadata**: Updates or adds custom key-value metadata to the wrike account, useful for integrations, storing app-specific data, or mapping external…
- **Bulk modify group members**: Adds or removes members for multiple wrike groups in a single request.
- **Create a group**: Creates a new user group in wrike with a specified title, optionally setting members, parent group, avatar, and custom metadata.
- **Delete custom field by id**: Permanently deletes a custom field by its id.
- **Delete folder**: Permanently deletes the folder specified by folderid and all its contents (e.g., tasks, documents, subfolders) from the wrike workspace.
- **Delete group by id**: Permanently deletes a group by its groupid.
- **Delete invitation**: Permanently deletes an existing invitation, specified by its unique invitationid.
- **Delete task**: Permanently deletes a wrike task and all its associated data by its id.
- **Fetch all tasks** (read-only): Fetches tasks from a wrike account, allowing filtering by status, due date, and subfolder inclusion, with customizable response fields and…
- **Get contacts** (read-only): Retrieves a list of wrike contacts (e.g., team members, clients, collaborators).
- **Get folders** (read-only): Retrieves folders and/or projects from wrike, with filters.
- **Get group by id** (read-only): Retrieves detailed information for a specific wrike group using its groupid, optionally including 'metadata'.
- **Get specific user** (read-only): Retrieves detailed information about a specific user in wrike using their unique user id.
- **Get task by id** (read-only): Retrieves read-only detailed information for a specific wrike task by its unique id, optionally allowing specification of fields to…
- **Launch folder blueprint async**: Asynchronously launches a new project or folder structure in wrike from a specified folder blueprint, typically returning a task id to…
- **Launch Task Blueprint Async**: Asynchronously launches a wrike task blueprint to create tasks/projects, requiring either super task id (parent task) or parent id (parent…
- **List Folder Blueprints** (read-only): Retrieves all account-level folder blueprints, which are templates for standardizing folder/project creation with predefined structures,…
- **List space folder blueprints** (read-only): Lists all folder blueprints (templates for new folders/projects) within a specified wrike space, requiring a valid and accessible space id.
- **List space task blueprints** (read-only): Lists task blueprints (templates for creating tasks with consistent structures) available in a specific, accessible wrike space.
- **List subfolders by folder id** (read-only): Lists subfolders (metadata only, not their contents) for an existing wrike folder specified by folderid, supporting recursive descent,…
- **List Task Blueprints** (read-only): Retrieves a list of defined task blueprints (predefined task templates) from the wrike account, supporting pagination.
- **Modify group**: Updates an existing wrike user group's attributes like title, members, parent, avatar, or metadata, using its groupid and specifying only…
- **Query invitations** (read-only): Retrieves all active invitations in wrike, useful for viewing and auditing pending invitations or managing user onboarding.
- **Retrieve custom field by id** (read-only): Retrieves a wrike custom field's detailed information (e.g., type, possible values for dropdowns), properties, and metadata.
- **Retrieve list of groups** (read-only): Retrieves a list of user groups from the wrike account, supporting metadata filtering, pagination, and inclusion of specific fields.
- **Update a specific user**: Updates specified profile attributes (e.g., account id, role, external status) for an existing wrike user.
- **Update custom field by id**: Updates properties of an existing wrike custom field by its id, such as its title, type, scope, or sharing settings.
- **Update invitation**: Updates a pending wrike invitation (invitationid) to resend it or change user's role/type (use usertypeid over deprecated role/external).
- **Update metadata on a specific contact**: Updates metadata, job role, or custom fields for an existing wrike contact specified by contactid.
