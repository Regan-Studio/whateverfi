# Jira

A tool for bug tracking, issue tracking, and agile project management.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/jira/.

## Actions

- **Add Attachment**: Uploads and attaches a file to a jira issue.
- **Add Comment**: Adds a comment using atlassian document format (adf) for rich text to an existing jira issue.
- **Add Watcher to Issue**: Adds a user to an issue's watcher list by account id.
- **Assign Issue**: Assigns a jira issue to a user, default assignee, or unassigns.
- **Bulk Create Issues**: Creates multiple jira issues (up to 50 per call) with full feature support including markdown, assignee resolution, and priority handling.
- **Create Issue**: Creates a new jira issue (e.g., bug, task, story) in a specified project.
- **Create Project**: Creates a new jira project with required lead, template, and type configuration.
- **Create Sprint**: Creates a new sprint on a jira board with optional start/end dates and goal.
- **Create Version**: Creates a new version for releases or milestones in a jira project.
- **Delete Issue**: Deletes a jira issue by its id or key.
- **Edit Issue**: Updates an existing jira issue with field values and operations.
- **Find Users** (read-only): Searches for jira users by email, display name, or username to find account ids.
- **Get all projects** (read-only): Retrieves all visible projects using the modern paginated jira api with server-side filtering and pagination support.
- **Get All Users** (read-only): Retrieves all users from the jira instance including active, inactive, and other user states with pagination support.
- **Get Current User** (read-only): Retrieves detailed information about the currently authenticated jira user.
- **Get Issue** (read-only): Retrieves a jira issue by id or key with customizable fields and expansions.
- **Get issue types** (read-only): Retrieves all jira issue types available to the user using the modern api v3 endpoint.
- **Get Transitions** (read-only): Retrieves available workflow transitions for a jira issue.
- **Link Issues**: Links two jira issues using a specified link type with optional comment.
- **List Boards** (read-only): Retrieves paginated jira boards with filtering and sorting options.
- **List Issue Comments** (read-only): Retrieves paginated comments from a jira issue with optional ordering.
- **List Sprints** (read-only): Retrieves paginated sprints from a jira board with optional state filtering.
- **Move Issues to Sprint**: Moves one or more jira issues to a specified active sprint.
- **Search issues** (read-only): Advanced jira issue search supporting structured filters and raw jql.
- **Search Issues Using JQL (GET)** (read-only): Searches for jira issues using jql with pagination and field selection.
- **Search Issues Using JQL (POST)** (read-only): Searches for jira issues using jql via post request for complex queries.
- **Transition Issue**: Transitions a jira issue to a different workflow state, with support for transition name lookup and user assignment by email.
- **Update Comment**: Updates text content or visibility of an existing jira comment.
- **Delete Comment**: Deletes a specific comment from a jira issue using its id and the issue's id/key.
- **Delete Version**: Deletes a jira version and optionally reassigns its issues.
- **Delete Worklog**: Deletes a worklog from a jira issue with estimate adjustment options.
- **Get All Issue Type Schemes** (read-only): Retrieves all jira issue type schemes with optional filtering and pagination.
- **Get Comment** (read-only): Retrieves a specific comment by id from a jira issue with optional expansions.
- **Get Issue Link Types** (read-only): Retrieves all configured issue link types from jira.
- **Get Issue Property** (read-only): Retrieves a custom property from a jira issue by key.
- **Get Issue Remote Links** (read-only): Retrieves links from a jira issue to external resources.
- **Get Issue Resolutions** (read-only): Retrieves all available issue resolution types from jira.
- **Get Issue Statuses** (read-only): Retrieves all available issue statuses from jira with details.
- **Get Issue Type Scheme** (read-only): Gets a jira issue type scheme by id with all associated issue types.
- **Get Issue Votes** (read-only): Fetches voting details for a jira issue.
- **Get Issue Watchers** (read-only): Retrieves users watching a jira issue for update notifications.
- **Get Issue Worklogs** (read-only): Retrieves worklogs for a jira issue with user permission checks.
- **Get Project Versions** (read-only): Retrieves all versions for a jira project with optional expansion.
- **Get Worklogs** (read-only): Retrieves worklogs for a specified jira issue.
- **Remove Watcher from Issue**: Removes a user from an issue's watcher list by account id.
- **Send Notification for Issue**: Sends a customized email notification for a jira issue.
