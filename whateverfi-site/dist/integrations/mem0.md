# Mem0

Mem0 is an universal, self-improving memory layer for LLM applications.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/mem0/.

## Actions

- **Add new memory records**: Stores new memory records from a list of messages, optionally inferring structured content.
- **Add organization member**: Adds a new member, who must be a registered user, to an organization, assigning them a specific role.
- **Create a new organization entry**: Creates a new organization entry using the provided name and returns its details.
- **Create project**: Creates a new project with a given name within an organization that must already exist.
- **Delete memories**: Deletes memories matching specified filter criteria.
- **Perform semantic search on memories** (read-only): Searches memories semantically using a natural language query (required if only metadata based search is false) and/or metadata filters.
- **Retrieve memory by id** (read-only): Retrieves a complete memory entry by its unique identifier.
- **Search memories with filters** (read-only): Semantically searches memories using a natural language query and mandatory structured filters, offering options to rerank results and…
- **Add member to project**: Adds an existing user to a project (identified by project id within organization org id), assigning a valid system role.
- **Create a new agent**: Creates a new agent with a unique agent id and an optional name.
- **Create a new agent run**: Creates a new agent run in the mem0.ai system.
- **Create a new application**: Creates a new application, allowing metadata to be passed in the request body (not an explicit field in this action's request model).
- **Create a new user**: Creates a new user with the specified unique user id and supports associating metadata (not part of the request schema fields).
- **Create an export job with schema**: Initiates an asynchronous job to export memories, structured by a schema provided in the request body and allowing optional filters.
- **Create memory entry**: Lists/searches existing memory entries with filtering and pagination.
- **Delete an organization**: Permanently deletes an existing organization identified by its unique id.
- **Delete entity by type and id**: Call to permanently and irreversibly hard-delete an existing entity (user, agent, app, or run) and all its associated data, using its type…
- **Delete memory batch with uuids**: Deletes a batch of up to 1000 existing memories, identified by their uuids, in a single api call.
- **Delete memory by id**: Permanently deletes a specific memory by its unique id.
- **Delete project**: Permanently deletes a specific project and all its associated data from an organization.
- **Delete project member**: Removes an existing member, specified by username, from a project, immediately revoking their project-specific access.
- **Export data based on filters** (read-only): Retrieves memory export data, optionally filtered by various identifiers (e.g., user id).
- **Fetch details of a specific organization** (read-only): Fetches comprehensive details for an organization using its org id.
- **Get entity by id** (read-only): Fetches detailed information for an existing entity (user, agent, app, or run) identified by its type and unique id.
- **Get list of entity filters** (read-only): Retrieves predefined filter definitions for entities (e.g., by type, creation/modification date).
- **Get organization members** (read-only): Fetches a list of members for a specified, existing organization.
- **Get project details** (read-only): Fetches comprehensive details for a specified project within an organization.
- **Get project members** (read-only): Retrieves all members for a specified project within an organization.
- **Get projects** (read-only): Retrieves all projects for a given organization org id to which the caller has access.
- **Get user memory stats** (read-only): Retrieves a summary of the authenticated user's memory activity, including total memories created, search events, and add events.
- **List entities** (read-only): Retrieves a list of entities, optionally filtered by organization or project (prefer org id/project id over deprecated org name/project…
- **List organizations** (read-only): Retrieves a summary list of organizations for administrative oversight.
- **Remove a member from the organization**: Removes a member, specified by their username, from an existing organization of which they are currently a member.
- **Retrieve all events for the currently logged in user** (read-only): Retrieves a paginated list of events for the authenticated user, filterable and paginable via url query parameters.
- **Retrieve entity-specific memories** (read-only): Retrieves all memories (e.g., user preferences, chat history) for a specific entity from the mem0 platform, using its entity type and…
- **Retrieve list of memory events** (read-only): Retrieves a chronological list of all memory events (e.g., user inputs, ai responses) from the mem0 platform, providing interaction…
- **Retrieve memory history by id** (read-only): Retrieves the complete version history for an existing memory, using its unique memory id, to inspect its evolution or audit changes.
- **Retrieve memory list** (read-only): Retrieves a list of memories, supporting pagination and diverse filtering (e.g., by ids, metadata, keywords, date ranges).
- **Update memory batch with uuid**: Updates text for up to 1000 memories in a single batch, using their uuids.
- **Update memory text content**: Updates the text content of an existing memory, identified by its memory id.
- **Update organization member role**: Updates the role of an existing member to a new valid role within an existing organization.
- **Update project**: Updates a project by project id within an org id, modifying only provided fields (name, description, custom instructions, custom…
- **Update project member role**: Updates the role of a specific member within a designated project, ensuring the new role is valid and recognized by the system.
