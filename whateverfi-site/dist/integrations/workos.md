# WorkOS

WorkOS provides enterprise identity and user management APIs for organizations, directory sync, connections, invitations, and users.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/workos/.

## Actions

- **Create Organization**: Create a WorkOS organization in the connected environment.
- **Create Organization Membership**: Grant an AuthKit user active membership in an organization.
- **Create User**: Create a passwordless AuthKit user record in the connected WorkOS environment.
- **Delete Organization**: Permanently delete a WorkOS organization.
- **Delete Organization Membership**: Permanently remove an organization membership and its access.
- **Delete User**: Permanently delete an AuthKit user.
- **Get Connection** (read-only): Get one WorkOS connection by ID.
- **Get Directory** (read-only): Get one WorkOS Directory Sync directory by ID.
- **Get Directory Group** (read-only): Get one WorkOS Directory Sync group by its exact group ID.
- **Get Directory User** (read-only): Get one WorkOS Directory Sync user by exact ID, including identity-provider attributes, roles, and any groups returned by WorkOS.
- **Get Invitation** (read-only): Get WorkOS AuthKit invitation status and metadata by invitation ID without exposing acceptance credentials.
- **Get Organization** (read-only): Get one WorkOS organization by its WorkOS ID or external ID.
- **Get Organization Membership** (read-only): Get one WorkOS AuthKit organization membership by ID.
- **Get User** (read-only): Get one WorkOS AuthKit user by WorkOS ID or external ID.
- **List Connections** (read-only): List one page of WorkOS SSO and OAuth connections, optionally filtered by connection type, domain, organization, or name.
- **List Directories** (read-only): List one page of WorkOS Directory Sync directories, optionally filtered by organization, directory name, or domain.
- **List Directory Groups** (read-only): List one page of WorkOS Directory Sync groups for a directory, a directory user, or both.
- **List Directory Users** (read-only): List one page of WorkOS Directory Sync users for a directory or group, optionally filtering a directory by exact identity-provider ID or…
- **List Invitations** (read-only): List one page of WorkOS AuthKit invitations by organization or exact recipient email without exposing acceptance credentials.
- **List Organization Memberships** (read-only): List one page of WorkOS AuthKit organization memberships for a specific organization or user, optionally including inactive or pending…
- **List Organizations** (read-only): List one page of WorkOS organizations, optionally filtered by domain or organization name.
- **List Users** (read-only): List one page of WorkOS AuthKit users, optionally filtered by organization or exact email address.
- **Resend Invitation**: Send another real invitation email to the existing recipient of a pending WorkOS AuthKit invitation.
- **Revoke Invitation**: Revoke a pending AuthKit invitation so it can no longer be accepted.
- **Send Invitation**: Create an AuthKit invitation and immediately send a real invitation email to the recipient.
- **Set Organization Membership Status**: Activate or deactivate a WorkOS organization membership without deleting it.
- **Update Organization**: Update selected properties of an existing WorkOS organization.
- **Update Organization Membership Roles**: Replace the role assignment on an existing WorkOS organization membership.
- **Update User**: Update selected profile fields on an AuthKit user without invoking email delivery flows.
