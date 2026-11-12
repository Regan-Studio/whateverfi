# FullStory

FullStory provides digital experience analytics APIs for managing users, events, sessions, exports, recording settings, privacy rules, and related organization data.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/fullstory/.

## Actions

- **Cancel Operation**: Irreversibly request cancellation of a cancelable in-progress FullStory operation, currently intended for segment exports.
- **Create Annotation**: Add a persistent annotation to the FullStory timeline for a point or time range.
- **Create Element Block**: Create a beta FullStory element recording or masking rule.
- **Create Extraction Rule**: Create and immediately activate one FullStory beta extraction rule using the provider's nested rule, source, and mapping contract.
- **Delete Element Block**: Permanently delete a custom FullStory privacy element-block rule.
- **Delete User Data**: Permanently delete a FullStory user and their associated data by FullStory-generated ID.
- **Get Element Block** (read-only): Get one FullStory privacy element-block rule by ID, including its exact selector source, recording or masking operation, platforms, and…
- **Get Extraction Rule** (read-only): Get one FullStory beta extraction rule by ID, including its archive state and complete nested source and mappings.
- **Get FullStory Account** (read-only): Validate the connected API key and return its FullStory organization, identity, and API-key role.
- **Get Import Status** (read-only): Get status and success/error counts for an asynchronous FullStory event or user import job.
- **Get Operation** (read-only): Get detailed status, progress, operation-specific results, and failure details for one asynchronous FullStory operation.
- **Get Organization Quotas** (read-only): Return current FullStory session and server-event quota usage, limits, and quota periods.
- **Get Recording Settings** (read-only): Get one current FullStory recording-settings category.
- **Get Segment** (read-only): Get metadata and the FullStory app URL for one segment.
- **Get User** (read-only): Retrieve one user by FullStory-generated user ID, including profile fields and a FullStory app link.
- **Import Events**: Start an asynchronous import of 1 to 50,000 server events.
- **Import Users**: Start an asynchronous upsert import of 1 to 50,000 users.
- **List Datasets** (read-only): List beta datasets readable by the connected FullStory organization.
- **List Element Blocks** (read-only): Return one page of custom and built-in FullStory privacy element-block rules.
- **List Extraction Rules** (read-only): List all FullStory beta extraction rules matching one required scope and optional filters, together with current active-rule usage and…
- **List Import Records** (read-only): Return one page of successful or failed records from a FullStory event or user import job, including failure details when requested.
- **List Operations** (read-only): Return one page of asynchronous FullStory operations, optionally filtered by state or type.
- **List Recording Settings History** (read-only): Return one page of historical FullStory recording settings for blocking, domain, geo, privacy, features, or targeting.
- **List Segments** (read-only): Return one page of FullStory segments, optionally filtered by creator.
- **List Sessions** (read-only): Find recent FullStory session replay links by application UID, email, or exact session UID.
- **Search Users** (read-only): Find FullStory users by UID, email, display name, or identification state.
- **Set Extraction Rule Archived**: Archive a FullStory beta extraction rule to stop future capture, or unarchive it to resume capture.
- **Update Element Block**: Fully replace an editable beta FullStory element recording or masking rule.
- **Update Extraction Rule**: Partially update a FullStory beta extraction rule using last-write-wins semantics.
- **Upsert User**: Create or update one FullStory user.
