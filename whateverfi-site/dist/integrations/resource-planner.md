# Resource Planner

Resource Planner helps teams schedule people, manage projects and assignments, and review workspace time entries.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/resource-planner/.

## Actions

- **Create Assignment**: Assign one resource to one project for a date range and return the created assignment ID.
- **Create Project**: Create a project with a title and optional note, color, and visibility, then return its project ID.
- **Create Resource**: Create a workspace resource with optional capacity, workdays, note, and visibility, then return its resource ID.
- **Delete Assignment**: Permanently delete one assignment by its assignment ID.
- **Delete Assignments**: Permanently delete 1-25 assignments sequentially.
- **Delete Project**: Permanently delete a project and all of its assignments.
- **Delete Resource**: Permanently delete a resource and all of its assignments.
- **Get Project** (read-only): Retrieve one current workspace project by its project ID.
- **Get Resource** (read-only): Retrieve one current workspace resource by its resource ID.
- **List Assignments** (read-only): Return all assignments, optionally narrowed to a project, a resource, or both.
- **List Projects** (read-only): Return every project in the connected Resource Planner workspace, including project IDs and editable planning fields.
- **List Resources** (read-only): Return every resource in the connected Resource Planner workspace, including resource IDs needed for assignment workflows.
- **List Time Entries** (read-only): Return one page of workspace time entries, with an optional total-duration summary and a cursor for the next page.
- **Update Assignment**: Replace an assignment's internal note and return all affected assignment IDs.
- **Update Project**: Update at least one of a project's title, note, color, or visibility.
- **Update Resource**: Replace a resource's internal note without changing its scheduling fields, then return the current resource.
