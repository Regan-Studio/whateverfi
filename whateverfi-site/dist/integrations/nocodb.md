# NocoDB

Free & open source Airtable alternative. NocoDB turns any database into a smart spreadsheet with REST APIs.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/nocodb/.

## Actions

- **Get Application Info** (read-only): Get comprehensive NocoDB application information including authentication settings, version, limits, and deployment configuration.
- **Get Table Schema** (read-only): Retrieve complete schema information for a specific table.
- **Get User Info** (read-only): Get authenticated user information including email, name, roles, and profile details.
- **List Integrations** (read-only): Retrieve all available integrations in NocoDB.
- **List Notifications** (read-only): Retrieve paginated notification records for the authenticated user.
- **List Workspace Bases** (read-only): List all bases in a NocoDB workspace.
- **Sign Out User**: Sign out the authenticated user and clear their refresh token from the database and cookie.
- **Update User Profile**: Update authenticated user's profile information including display name, first name, and last name.
- **Convert URL to Database Config** (read-only): Convert JDBC URL or database connection URL to connection configuration object.
- **Delete Notification**: Delete a notification for the authenticated user.
- **Delete Table View Row**: Delete a specific row from a table view in NocoDB.
- **Delete View**: Delete a view from a NocoDB table.
- **Forgot Password**: Initiate password reset process by sending a reset email to the user.
- **Get Aggregated Meta Info** (read-only): Get aggregated meta information such as tableCount, dbViewCount, viewCount and other statistics about the NocoDB instance.
- **Get Application Health Status** (read-only): Get the NocoDB application health status.
- **Get Cloud Features** (read-only): Get NocoDB Cloud features.
- **Get Command Palette Suggestions** (read-only): Get dynamic command palette suggestions based on scope.
- **Get Integration Info** (read-only): Retrieve metadata for a specific NocoDB integration by type and subtype.
- **Get Plugin Status** (read-only): Check if a NocoDB plugin is active or not.
- **Get Product Feed** (read-only): Get NocoDB product feed from social media sources including GitHub, YouTube, Twitter, and Cloud.
- **Get Sort Metadata** (read-only): Retrieve sort configuration by ID from NocoDB.
- **List Public Shared View Grouped Data** (read-only): Retrieve grouped data from a publicly shared NocoDB view.
- **Poll Notifications** (read-only): Poll for notifications using long-polling mechanism.
- **Report Error**: Report errors to NocoDB's error tracking system.
- **Store Integration Configuration**: Store configuration for a NocoDB integration.
- **Update View Column**: Update a column configuration in a view.
- **Upload Attachments by URL**: Upload attachments from remote URLs to NocoDB storage.
