# Toggl Track

Toggl Track is a time tracking platform for recording work, managing projects and workspaces, producing reports, and configuring webhooks.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/toggl-track/.

## Actions

- **Bulk Update Time Entries**: Apply the same description and/or billable state to 1 to 100 Toggl Track time entries in one provider-native request.
- **Create Client**: Create a client in a workspace for grouping projects.
- **Create Project**: Create a project in a workspace for organizing time entries and tasks.
- **Create Task**: Create a task under an active project for more specific time-entry assignment.
- **Create Time Entry**: Create a running or completed time entry in a workspace.
- **Delete Client**: Permanently delete one client from a Toggl Track workspace.
- **Delete Project**: Delete one project while preserving its time entries by unassigning them from the project.
- **Delete Task**: Permanently delete one task from its parent project.
- **Delete Time Entry**: Permanently delete one time entry from a workspace.
- **Get Current Time Entry** (read-only): Return the currently running time entry for the connected user, or indicate that no timer is running.
- **Get Current User** (read-only): Return the connected Toggl Track user's identity and defaults, including the default workspace ID, without exposing credentials.
- **Get Time Entry** (read-only): Get one time entry by ID, with optional related-entity and sharing metadata.
- **List Time Entries** (read-only): List the connected user's time entries in an explicit date range, optionally including related project, task, user, and sharing metadata.
- **List Workspace Resources** (read-only): Find projects, clients, tags, or tasks in a workspace and return their IDs for time-entry and resource-management tools.
- **List Workspaces** (read-only): List workspaces accessible to the connected user and return the IDs needed by workspace-scoped tools, without exposing private tokens or…
- **Run Detailed Time Report** (read-only): Return one page of detailed, grouped time-entry report rows for a workspace and date range, with an opaque cursor for the next page.
- **Stop Time Entry**: Stop a currently running time entry and return its finalized timing data.
- **Update Client**: Update a client's name, notes, or external reference.
- **Update Project**: Update a project's name, client, active state, privacy, color, or date range.
- **Update Task**: Update a task's name, completion state, estimate, assignee, or external reference.
- **Update Time Entry**: Update the timing, description, assignment, billable state, or tags of an existing time entry.
