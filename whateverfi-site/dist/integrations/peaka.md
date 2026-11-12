# Peaka

Peaka is a data integration and AI platform for managing organizations, projects, data connections, catalogs, queries, metadata, and analytics workflows.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/peaka/.

## Actions

- **Create Project**: Create a project in a Peaka workspace and return its project ID and available project details for use with Peaka data and query tools.
- **Create Workspace**: Create a workspace in an organization and return its workspace ID and details.
- **Delete Project**: Permanently delete a project and its project-scoped data from a Peaka workspace.
- **Delete Workspace**: Permanently delete a workspace.
- **Execute Query** (read-only): Execute one read-only SQL SELECT or CTE ending in LIMIT 1-1000 in a Peaka project and return rows in SIMPLE object format.
- **List Data Resources** (read-only): Browse a project's catalogs, schemas, tables, or columns to discover qualified resources for SQL queries.
- **List Hierarchy** (read-only): List organizations, workspaces in an organization, or projects in a workspace, returning the IDs needed for hierarchy administration.
- **Update Project**: Replace the name and optional description of a project in its current workspace.
- **Update Workspace**: Replace the name and optional description of an existing workspace.
