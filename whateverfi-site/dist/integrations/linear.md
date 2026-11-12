# Linear

Linear is a streamlined issue tracking and project planning tool for modern teams, featuring fast workflows, keyboard shortcuts, and GitHub integrations

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/linear/.

## Actions

- **Get current user** (read-only): Gets the currently authenticated user's id, name, email, and other profile information.
- **Remove label from Linear issue**: Removes a specified label from an existing linear issue using their ids.
- **Run Query or Mutation**: Wildcard action that executes any graphql query or mutation against the linear api.
- **Update issue**: Updates an existing linear issue using its issue id.
- **Create a comment**: Creates a new comment on a specified linear issue.
- **Create a label**: Creates a new label in linear for a specified team, used to categorize and organize issues.
- **Create linear attachment**: Creates a new attachment and associates it with a specific, existing linear issue.
- **Create linear issue**: Creates a new issue in a specified linear project and team, requiring a title and description, and allowing for optional properties like…
- **Delete issue**: Archives an existing linear issue by its id, which is linear's standard way of deleting issues.
- **Download issue attachments** (read-only): Downloads a specific attachment from a linear issue.
- **Get all cycles** (read-only): Retrieves all cycles (time-boxed iterations for work) from the linear account.
- **Get all teams** (read-only): Retrieves all teams from the linear workspace without requiring any parameters.
- **Get create issue default params** (read-only): Fetches a linear team's default issue estimate and state, useful for pre-filling new issue forms.
- **Get cycles by team ID** (read-only): Retrieves all cycles for a specified linear team id.
- **Get labels by team** (read-only): Retrieves all labels associated with a given team id in linear.
- **Get Linear issue** (read-only): Retrieves an existing linear issue's comprehensive details, including title, description, attachments, and comments.
- **Get teams by project** (read-only): Retrieves all teams, including their members, and filters each team's associated projects by the provided 'project id'.
- **List Linear issues** (read-only): Lists non-archived linear issues.
- **List linear projects** (read-only): Retrieves all projects from the linear account.
- **List Linear states** (read-only): Retrieves all workflow states for a specified team in linear, representing the stages an issue progresses through in that team's workflow.
- **List Linear users** (read-only): Lists all users in the linear workspace with their ids, names, emails, and active status.
