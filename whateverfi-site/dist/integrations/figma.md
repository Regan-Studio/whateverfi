# Figma

A collaborative interface design tool.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/figma/.

## Actions

- **Design tokens to tailwind** (read-only): Convert design tokens to tailwind css configuration.
- **Download Figma Images** (read-only): Download images from figma file nodes.
- **Extract design tokens** (read-only): Extract design tokens from figma files.
- **Extract Prototype Interactions** (read-only): Extract prototype interactions and animations from figma files.
- **Get component** (read-only): Get component data with automatic simplification.
- **Get current user** (read-only): Retrieves detailed information for the currently authenticated figma user.
- **Get file component sets** (read-only): Retrieves all published component sets from the specified figma main file (file key must not be for a branch).
- **Get file components** (read-only): Retrieves published components from a figma file, which must be a main file (not a branch) acting as a library.
- **Get file json** (read-only): Get figma file data with automatic simplification.
- **Get files in a project** (read-only): Fetches a list of files in a figma project, optionally including branch metadata.
- **Get local variables** (read-only): Retrieves all local/remote variables for a figma file/branch.
- **Get projects in a team** (read-only): Retrieves projects within a specified figma team that are visible to the authenticated user.
- **Add a comment to a file**: Posts a new comment to a figma file or branch, optionally replying to an existing root comment (replies cannot be nested).
- **Add a reaction to a comment**: Posts a specified emoji reaction to an existing comment in a figma file or branch, requiring valid file key and comment id.
- **Create a webhook**: Creates a figma webhook for a team id to send post notifications for an event type to a publicly accessible https endpoint.
- **Create dev resources**: Creates and attaches multiple uniquely-urled development resources to specified figma nodes, up to 10 per node.
- **Create, modify, or delete variables**: Manages variables, collections, modes, and their values in a figma file via batch create/update/delete operations.
- **Delete a comment**: Deletes a specific comment from a figma file or branch, provided the authenticated user is the original author of the comment.
- **Delete a reaction**: Deletes a specific emoji reaction from a comment in a figma file.
- **Delete a webhook**: Permanently deletes an existing webhook, identified by its unique webhook id.
- **Delete dev resource**: Deletes a development resource (used to link figma design elements to external developer information like code or tasks) from a specified…
- **Detect background** (read-only): Detect background layers for selected nodes.
- **Discover Figma Resources** (read-only): 🔍 smart figma resource discovery - never guess ids again!
- **Get a webhook** (read-only): Retrieves detailed information about a specific webhook by its id, provided the webhook exists and is accessible to the user.
- **Get activity logs** (read-only): Retrieves activity log events from figma, allowing filtering by event types, time range, and pagination.
- **Get comments in a file** (read-only): Retrieves all comments from an existing figma file, identified by a valid file key, returning details like content, author, position, and…
- **Get component set** (read-only): Retrieves detailed metadata for a specific published figma component set using its unique key.
- **Get dev resources** (read-only): Retrieves development resources (e.g., jira/github links) for a figma main file, optionally filtering by specific node ids.
- **Get file styles** (read-only): Retrieves a list of published styles (like colors, text attributes, effects, and layout grids) from a specified main figma file (not a…
- **Get image fills** (read-only): Retrieves temporary (14-day expiry) download urls for all image fills in a figma file.
- **Get library analytics component action data** (read-only): Retrieves component insertion and detachment analytics for a specified figma library, groupable by 'component' or 'team' and filterable by…
- **Get library analytics component usage data** (read-only): Retrieves component usage analytics for a specified figma library file (identified by file key), with data groupable by 'component' or…
- **Get library analytics style action data** (read-only): Retrieves style usage analytics (insertions, detachments) for a figma library, grouped by 'style' or 'team'.
- **Get library analytics style usage data** (read-only): Retrieves style usage analytics for a figma library (specified by a valid file key), allowing data to be grouped by 'file' or 'style'.
- **Get library analytics variable action data** (read-only): Retrieves weekly, paginated analytics data on variable insertions and detachments for a specified figma library (identified by file key),…
- **Get library analytics variable usage data** (read-only): Retrieves paginated analytics data on variable usage from a specified figma library, grouped by 'file' or 'variable', for libraries with…
- **Get payments** (read-only): Retrieves a user's payment information for a figma plugin, widget, or community file.
- **Get published variables** (read-only): Retrieves variables published from a specified figma file.
- **Get reactions for a comment** (read-only): Retrieves reactions for a specific comment in a figma file.
- **Get style** (read-only): Retrieves detailed metadata for a specific style in figma using its unique style key.
- **Get team component sets** (read-only): Retrieves a paginated list of published component sets (collections of reusable ui elements) from a specified figma team's library.
- **Get team components** (read-only): Retrieves components published in a specific figma team's library.
- **Get team styles** (read-only): Retrieves a paginated list of published styles, such as colors or text attributes, from a specified figma team's library.
- **Get team webhooks** (read-only): Retrieves all webhooks registered for a specified figma team.
- **Get versions of a file** (read-only): Retrieves the version history for a figma file or branch, as specified by its file key.
- **Get webhook requests** (read-only): Retrieves a history of webhook requests for a specific figma webhook subscription.
- **Render images of file nodes** (read-only): Renders specified nodes from a figma file as images (jpg, pdf, png, svg), returning a map of node ids to image urls (or null for failed…
- **Update a webhook**: Updates an existing figma webhook, identified by webhook id, allowing modification of its event type, endpoint, passcode, status, or…
- **Update dev resources**: Updates the name and/or url of one or more existing figma dev resources, each identified by its unique id.
