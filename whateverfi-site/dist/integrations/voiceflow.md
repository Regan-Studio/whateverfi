# Voiceflow

Voiceflow is a platform for building, deploying, testing, and analyzing conversational AI agents.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/voiceflow/.

## Actions

- **Create Variable**: Create one user-defined variable in a Voiceflow project environment and return its assigned ID and configuration.
- **Delete Variable**: Permanently delete one user-defined variable by ID.
- **Export Environment** (read-only): Return a complete JSON snapshot of one Voiceflow environment, including agent, workflows, tools, functions, variables, and knowledge-base…
- **Get Agent Configuration** (read-only): Return one project environment's agent configuration.
- **Get Conversation State** (read-only): Read a user's Voiceflow conversation variables, storage, and execution stack for a draft or published environment.
- **Get Transcript** (read-only): Return one transcript with its full conversation logs, properties, evaluations, and recording URL.
- **Import Knowledge Document from URL**: Crawl one public web URL into a Voiceflow knowledge base and return the created document and ingestion status.
- **List Agent Components** (read-only): List playbooks, API tools, functions, project-level evaluations, MCP servers or tools, attached tools, or tests for a Voiceflow project…
- **List Environments** (read-only): Return a project's environments, aliases, release history, and live traffic percentages.
- **List Knowledge Documents** (read-only): Return all knowledge-base documents in one project environment with their IDs, sources, ingestion status, and chunking settings.
- **List Projects** (read-only): Return every Voiceflow project in one workspace, including project IDs used by agent, runtime, and authoring tools.
- **List Variables** (read-only): Return system and user-defined variables in one project environment with IDs, defaults, descriptions, and ownership flags.
- **List Workspaces** (read-only): Return every Voiceflow workspace accessible to the connected account, including IDs needed to list projects.
- **Publish Environment**: Publish a Voiceflow environment as a named release.
- **Query Knowledge Base** (read-only): Retrieve relevant document chunks and optionally synthesize an answer from a project's draft or published Voiceflow knowledge base.
- **Query Project Analytics** (read-only): Return one Voiceflow project-level analytics metric as a time series for a requested date range and interval.
- **Search Transcripts** (read-only): Search a project's conversation transcripts by time, environment, version, session, and transcript-property filters, returning one bounded…
- **Send Conversation Message**: Send one text turn to a Voiceflow agent and return its typed response traces.
- **Update Conversation Variables**: Merge named variable values into one user's existing conversation state without replacing storage or the execution stack.
- **Update Variable**: Update selected editable fields of one user-defined variable.
