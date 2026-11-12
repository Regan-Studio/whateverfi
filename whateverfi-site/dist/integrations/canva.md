# Canva

Canva offers a drag-and-drop design suite for creating social media graphics, presentations, and marketing materials with prebuilt templates and a vast element library

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/canva/.

## Actions

- **Revoke oauth tokens**: Revoke a refresh token to end its lineage and user consent, requiring re-authentication.
- **Access user specific brand templates list** (read-only): This year, brand template ids will change.
- **Create canva design with optional asset**: Create a new canva design using a preset or custom dimensions, and add an asset with asset id from a user's project using relevant apis.
- **Create comment reply in design**: This preview api allows replying to comments within a design on canva, with a limit of 100 replies per comment.
- **Create design comment in preview api**: This api is in preview and may change without notice.
- **Create user or sub folder**: This api creates a folder in a canva user's projects at the top level or within another folder, returning the new folder's id and…
- **Delete asset by id**: You can delete an asset by specifying its assetid.
- **Exchange oauth 2 0 access or refresh token** (read-only): The oauth 2.0 endpoint issues time-limited (4-hour) access tokens of up to 4kb for user authorization via codes or refresh tokens.
- **Fetch asset upload job status** (read-only): Summarize asset upload outcome by repeatedly calling the endpoint until a 'success' or 'failed' status is received after using the create…
- **Fetch canva connect signing public keys** (read-only): The api for verifying canva webhooks, 'connect/keys,' is in preview, meaning unstable, not for public integrations, and provides a…
- **Fetch current user details** (read-only): Returns the user id, team id, and display name of the user account associated with the provided access token.
- **Fetch design metadata and access information** (read-only): Gets the metadata for a design.
- **Get design export job result** (read-only): Get the outcome of a canva design export job.
- **Initiate canva design autofill job**: Upcoming brand template id updates require migration within 6 months.
- **Initiates canva design export job**: Canva's new job feature exports designs in multiple formats using a design id, with provided download links.
- **List design pages with pagination** (read-only): Preview api for canva.
- **List folder items by type with sorting** (read-only): Lists the items in a folder, including each item's type.
- **List User Designs** (read-only): Provides a summary of canva user designs, includes search filtering, and allows showing both self-created and shared designs with sorting…
- **Move item to specified folder**: Transfers an item to a different folder by specifying both the destination folder's id and the item's id.
- **Remove folder and move contents to trash**: Deletes a folder by moving the user's content to trash and reassigning other users' content to their top-level projects.
- **Retrieve a specific design comment** (read-only): This preview api is subject to unannounced changes and can't be used in public integrations.
- **Retrieve app public key set** (read-only): Returns the json web key set (public keys) of an app.
- **Retrieve asset metadata by id** (read-only): You can retrieve the metadata of an asset by specifying its assetid.
- **Retrieve brand template dataset definition** (read-only): Canva's brand template ids will change later this year, including a 6-month integration migration.
- **Retrieve canva enterprise brand template metadata** (read-only): Upcoming update will change brand template ids.
- **Retrieve design autofill job status** (read-only): Api users with canva enterprise membership can retrieve design autofill job results, potentially requiring multiple requests until a…
- **Retrieve design import job status** (read-only): Gets the status and results of design import jobs created using the [create design import job api](https.
- **Retrieve folder details by id** (read-only): Gets the name and other details of a folder using a folder's folderid.
- **Retrieveuserprofiledata** (read-only): Currently, this returns the display name of the user account associated with the provided access token.
- **Update asset s name and tags by id**: You can update the name and tags of an asset by specifying its assetid.
- **Update folder details by id**: Updates a folder's details using its folderid.
- **Validate oauth token properties** (read-only): Check an access token's validity and properties via introspection, requiring authentication.
