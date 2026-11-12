# CompanyCam

CompanyCam is a photo-first jobsite management platform for documenting projects, coordinating teams, and sharing project updates.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/companycam/.

## Actions

- **Add Comment**: Add a comment to either a CompanyCam project or photo.
- **Add Photo Tags**: Attach media tags by display name.
- **Add Project Labels**: Attach project labels by display name.
- **Add Project Photo From URL**: Add a photo to a CompanyCam project by having CompanyCam fetch a publicly reachable HTTPS image URL.
- **Create Customer**: Create a CompanyCam customer with optional contact details, company status, notes, address, and initial contacts.
- **Create Photo Tag**: Create a reusable CompanyCam media tag for organizing photos.
- **Create Project**: Create a CompanyCam project with its required address and optional contact, customer, location, and template details.
- **Create Project Task**: Create a task on a CompanyCam project with task details and optional assignees.
- **Get Account Context** (read-only): Return the connected CompanyCam user and company so an agent can identify the account, role, and company before acting.
- **Get Photo** (read-only): Get one CompanyCam photo by ID.
- **Get Project** (read-only): Get one CompanyCam project by ID.
- **List Comments** (read-only): List comments attached to either a CompanyCam project or photo.
- **List Customers** (read-only): List or search CompanyCam customers by name or contact text.
- **List Photo Tags** (read-only): List reusable CompanyCam media tags and return an opaque cursor for the next page.
- **List Project Labels** (read-only): List reusable CompanyCam project labels that can be attached to projects.
- **List Project Photos** (read-only): List and filter photos in a CompanyCam project by tags, users, or groups, one cursor page at a time.
- **List Project Tasks** (read-only): List tasks for a CompanyCam project, including status, completion, assignees, and attached media.
- **List Projects** (read-only): List projects with optional lifecycle and assigned-user filters, one cursor page at a time.
- **List Users** (read-only): List CompanyCam users available for task assignment and project workflows.
- **Search Projects** (read-only): Search CompanyCam projects by a free-text query when project list filters are insufficient.
- **Set Photo Description**: Create or replace the description attached to a CompanyCam photo.
- **Update Customer**: Update the name, notes, city, or postal code of an existing CompanyCam customer.
- **Update Project**: Update editable project identity, address, or primary-contact fields without changing archive state.
- **Update Project Task**: Update a CompanyCam project task's details or add and retain assignees.
