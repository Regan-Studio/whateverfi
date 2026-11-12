# Zep

The Foundational Memory Layer for AI. Equip your agents with the knowledge to complete tasks, from the mundane to monumental.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/zep/.

## Actions

- **Add Fact Triple**: Add a manually specified fact triple (subject-predicate-object) to the Zep knowledge graph.
- **Add Session Memory**: Add memory messages to a specified Zep session.
- **Add Thread Messages**: Add chat messages to a thread in Zep and ingest them into the user knowledge graph.
- **Create Graph**: Create a new graph by adding data to Zep.
- **Create Group**: Create a new group in Zep for multi-user graph management.
- **Create Session**: Create a new session in Zep for storing conversation memory.
- **Create Thread**: Create a new thread in Zep for a specific user.
- **Create User**: Create a new user in Zep with properties like user_id, email, and metadata.
- **Delete Graph**: Delete a graph from Zep.
- **Delete Thread**: Delete a thread and its messages from Zep.
- **Delete User**: Delete a user and all associated threads and artifacts from Zep.
- **Get Graph by ID** (read-only): Retrieve a graph by its unique identifier from Zep.
- **Get Group by ID** (read-only): Retrieve a group by ID from Zep.
- **Get Session by ID** (read-only): Retrieve a session by its unique identifier from Zep.
- **Get Session Memory** (read-only): Retrieve memory for a given session including relevant facts and entities.
- **Get Session Messages** (read-only): Retrieve messages for a given session from Zep.
- **Get Task Status** (read-only): Check the status of asynchronous operations in Zep.
- **Get Thread Messages** (read-only): Retrieve conversation history for a specific thread from Zep.
- **Get Thread User Context** (read-only): Retrieve the most relevant user context from the user graph based on thread messages.
- **Get User by ID** (read-only): Retrieve a user by their user ID from Zep.
- **Get User Nodes** (read-only): Retrieve all nodes for a specific user from their graph in Zep.
- **Graph Search** (read-only): Perform hybrid graph search combining semantic similarity and BM25 full-text search across the Zep knowledge graph.
- **List Graphs** (read-only): Retrieve all graphs from Zep with pagination support.
- **List Users Ordered** (read-only): Retrieve all users from Zep with pagination support.
- **Update User**: Update an existing user's information in Zep including email, metadata, and ontology settings.
- **Clone Graph**: Clone a user or group graph with new identifiers in Zep.
- **Delete Group**: Delete a group from Zep.
- **Delete Session Memory**: Delete a session and its memory from Zep.
- **Get Edge by UUID** (read-only): Retrieve a specific edge by its UUID from the Zep knowledge graph.
- **Get Node Entity Edges** (read-only): Retrieve all entity edges for a specific node in the Zep knowledge graph.
- **Get Project Info** (read-only): Retrieve project information based on the provided API key.
- **Get Session Message by UUID** (read-only): Retrieve a specific message by UUID from a Zep session.
- **Get User Node** (read-only): Retrieve a user's graph node and summary from Zep.
- **Get User Sessions** (read-only): Retrieve all sessions for a user from Zep.
- **Get User Threads** (read-only): Retrieve all threads for a specific user from Zep.
- **List All Threads** (read-only): List all threads with pagination and ordering support.
- **List Groups Ordered** (read-only): Retrieve all groups from Zep with pagination support.
- **List Sessions Ordered** (read-only): Retrieve all sessions from Zep with pagination and ordering support.
- **List Threads** (read-only): Retrieve all threads from Zep with pagination support.
- **Update Graph**: Update graph information in Zep including name and description.
- **Update Group**: Update group information in Zep including name, description, and fact rating instructions.
- **Update Message**: Update a message in a Zep thread.
- **Update Session Metadata**: Update session metadata in Zep.
