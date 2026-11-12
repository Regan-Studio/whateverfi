# Honcho

Honcho provides memory, context, and theory-of-mind infrastructure for building stateful AI agents.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/honcho/.

## Actions

- **Chat With Peer** (read-only): Run usage-bearing agentic search and reasoning over a peer's learned representation to answer a question.
- **Create Conclusions**: Store a batch of 1-100 explicit conclusions about peers, optionally tied to sessions.
- **Create Messages**: Add a batch of 1-100 attributed messages to a Honcho session.
- **Delete Session**: Permanently delete one known session and its session-scoped data.
- **Get Message** (read-only): Return one message by its exact ID within a session.
- **Get or Create Peer**: Return a peer by ID within a workspace, creating it with the supplied metadata and configuration when absent.
- **Get or Create Session**: Return a session by ID, or create it with initial peers, metadata, and configuration when absent.
- **Get or Create Workspace**: Return a workspace by ID, or create it with metadata and configuration when absent.
- **Get Peer Representation** (read-only): Return a curated subset of conclusions representing a peer.
- **List Conclusions** (read-only): Return one page of stored conclusions in a workspace.
- **List Messages** (read-only): Return one page of messages in a session.
- **List Peers** (read-only): Return one page of peers in a workspace.
- **List Sessions** (read-only): Return one page of sessions in a workspace.
- **List Workspaces** (read-only): Return one page of Honcho workspaces visible to the connected admin key.
- **Search Conclusions** (read-only): Semantically search stored conclusions in a workspace.
- **Search Messages** (read-only): Semantically search messages at workspace, peer, or session scope.
