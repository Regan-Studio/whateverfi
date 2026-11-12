# Buffer

Buffer is a social media management platform for planning, creating, scheduling, and publishing content across connected channels.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/buffer/.

## Actions

- **Create Idea**: Create a persistent content idea in a Buffer organization.
- **Create Post Draft**: Create an internal text-post draft for exactly one Buffer channel.
- **Delete Post**: Permanently delete a Buffer post by ID, including a draft created for cleanup.
- **Delete Post Template**: Delete a writable private Buffer template, or an internal template when the connected user is an organization admin or owner.
- **Get Account Context** (read-only): Return the connected Buffer account, its organizations, and the accessible social channels in each organization so an agent can discover…
- **List Idea Groups** (read-only): List the idea workflow groups in a Buffer organization so an agent can discover group IDs for filtering or idea creation.
- **List Ideas** (read-only): List content ideas in a Buffer organization, optionally filtering by explicit idea groups or grouped versus ungrouped workflow membership.
- **List Post Templates** (read-only): List Buffer public templates and templates visible to the connected user in an organization, optionally filtered by visibility.
- **List Posts** (read-only): List and filter posts in a Buffer organization without requesting OAuth-inaccessible analytics fields.
- **Publish Posts**: Queue, schedule, or immediately publish the same text post to one to 10 Buffer channels.
- **Save Post Template**: Create a private or internal Buffer post template, or update an existing writable template when template_id is supplied.
