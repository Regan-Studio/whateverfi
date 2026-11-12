# GPTBots

GPTBots is an enterprise AI agent platform for conversations, knowledge management, databases, user data, and usage analytics. This toolkit auth config supports Singapore Agent API Keys only; JP and TH keys are unsupported because requests use the fixed Singapore base URL.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/gptbots/.

## Actions

- **Create Conversation**: Create a GPTBots conversation for a developer-defined user on the Agent connected by this API key.
- **Get Agent Information** (read-only): Return the GPTBots Agent bound to the connected Agent API Key, including its ID and runtime configuration.
- **Get Total Credit Consumption** (read-only): Return aggregate Agent credit consumption by category for a reporting range of up to 365 days.
- **List Conversation Credits** (read-only): Return one page of per-conversation Agent credit consumption for a time range of up to 30 days, optionally filtered by conversation ID.
- **List Conversation Messages** (read-only): Return one page of current v2 message details for a GPTBots conversation.
- **List Conversations** (read-only): Return one page of Agent conversations filtered by source, recent-chat time range, and optional user.
- **List Database Tables** (read-only): Return database tables configured for the Agent ID supplied by the caller.
- **List Knowledge Bases** (read-only): Return all knowledge bases attached to the GPTBots Agent connected by this API key.
- **List Knowledge Documents** (read-only): Return one page of documents in a GPTBots knowledge base.
- **List Metadata Fields** (read-only): Return global and per-knowledge-base document metadata field definitions for the connected GPTBots Agent.
- **Query User Attributes** (read-only): Return configured GPTBots Agent attributes for either developer user IDs or anonymous IDs.
- **Send Message**: Send the latest user text to a GPTBots conversation and wait for the Agent's complete blocking response.
