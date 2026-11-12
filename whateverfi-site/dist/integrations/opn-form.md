# OPNForm

OPNForm is an open-source form builder for creating forms, managing workspaces, collecting submissions, and configuring integrations.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/opn-form/.

## Actions

- **Cancel Workspace Invite**: Cancel and remove a pending workspace invitation before it is accepted.
- **Create Form**: Create an OpnForm form in a workspace from a title, ordered field or layout blocks, and optional validated form settings.
- **Create Form Integration**: Create a generic webhook or Make integration for an OpnForm form.
- **Create Submission**: Submit answers to a public OpnForm form.
- **Create Workspace**: Create an OpnForm workspace.
- **Delete Form**: Permanently delete a form and all of its submissions by numeric ID.
- **Delete Form Integration**: Permanently remove a webhook integration from a form and stop its future deliveries.
- **Delete Submission**: Permanently delete one submission from a form using both numeric IDs.
- **Delete Submissions**: Permanently delete 1-25 submissions from one form through sequential provider requests.
- **Delete Workspace**: Permanently delete a workspace and its contained resources.
- **Get Current User** (read-only): Return the name and email of the OpnForm user associated with the connected personal access token.
- **Get Form** (read-only): Retrieve a form by its public slug, including its complete field and layout definitions.
- **Invite Workspace Member**: Add an existing OpnForm user to a workspace or email an invitation to a new user.
- **Invite Workspace Members**: Add or invite 1-10 users to one workspace through sequential provider requests.
- **List Form Integrations** (read-only): List webhook and Make integrations configured for a form, including IDs, status, and endpoint configuration.
- **List Forms** (read-only): Return one page of lightweight form summaries from a workspace.
- **List Integration Events** (read-only): Inspect past delivery attempts for one form integration, including the attempt date, Success or Error status, and a downstream HTTP status…
- **List Submissions** (read-only): Return one searchable page of completed, partial, or all submissions for a form.
- **List Workspace Invites** (read-only): List pending and accepted invitations for a workspace where the connected user is an administrator.
- **List Workspace Members** (read-only): List members of a workspace with their user IDs, names, emails, and workspace roles.
- **List Workspaces** (read-only): List workspaces accessible to the connected user, including IDs, plan tier, role flags, usage counts, enabled features, and plan limits.
- **Remove Workspace Member**: Remove a specified member from a workspace without deleting the member's OpnForm account.
- **Resend Workspace Invite**: Send another invitation email for an existing pending workspace invite.
- **Update Form**: Replace or change an existing form's field definitions and settings using its numeric form ID.
- **Update Form Integration**: Change a generic webhook integration's delivery URL or active status.
- **Update Form Submission Retention**: Change or disable a form's automatic submission-retention policy.
- **Update Workspace**: Change a workspace's name and icon without affecting its membership or forms.
- **Update Workspace Member Role**: Change an existing workspace member's role to admin, user, or readonly.
