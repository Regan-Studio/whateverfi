# Conductor

Conductor is a cloud development platform for creating workspaces, running coding-agent sessions, exchanging messages, and searching session transcripts.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/conductor/.

## Actions

- **Change Workspace State**: Put a workspace to sleep or archive it.
- **Create Session**: Create another agent chat session in an existing workspace.
- **Create Workspace**: Create a cloud workspace and its first agent session.
- **Get Current User** (read-only): Return the user and organization represented by the connected Conductor API key.
- **Get Message** (read-only): Get one transcript message by id.
- **Get Project** (read-only): Get one Conductor project and its repository remote by project id.
- **Get Session** (read-only): Get one agent session's configuration and current idle, working, or error status in one read.
- **Get Workspace** (read-only): Get a workspace's metadata and current lifecycle status in one read, including initialization progress or errors.
- **List Messages** (read-only): Read one page of a session transcript or incrementally read messages after a known message ID.
- **List Projects** (read-only): List repositories available to the connected account for creating Conductor workspaces.
- **List Sessions** (read-only): List one page of agent chat sessions in a Conductor workspace.
- **List Workspaces** (read-only): List one page of workspaces belonging to a Conductor project, including deep links and recent activity.
- **Query Transcripts** (read-only): Run one read-only SQL SELECT against the organization's session_transcripts_view.
- **Rename Session**: Change an existing Conductor session's display name without stopping its agent.
- **Rename Workspace**: Change the display name of an existing Conductor workspace without changing its lifecycle state.
- **Send Message**: Send a prompt to a Conductor session agent.
- **Stop Session**: Cancel only the current turn and queued messages, or archive the entire session.
