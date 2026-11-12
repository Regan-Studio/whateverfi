# BotMape

BotMape provides APIs for creating and managing AI agents, knowledge bases, conversations, messages, and usage analytics.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/botmape/.

## Actions

- **Add Knowledge**: Add and automatically embed training content in one AI agent's knowledge base, optionally with source or categorization metadata.
- **Create AI Agent (No API Delete)**: Permanently create a BotMape AI agent.
- **Delete Knowledge Entry**: Permanently delete one knowledge-base entry from an AI agent using both the agent ID and knowledge entry ID.
- **Get AI Agent** (read-only): Return the detailed configuration, behavior prompt, appearance, and active state of one AI agent by ID.
- **Get Platform Analytics** (read-only): Return account-wide BotMape message and conversation totals, daily activity, averages, and per-agent statistics.
- **List AI Agents** (read-only): Return all AI agents owned by the connected BotMape account, including the IDs needed by single-agent, chat, and knowledge tools.
- **List Knowledge Entries** (read-only): Return all knowledge-base entries currently attached to one AI agent, including entry IDs needed for deletion.
- **Send Message to AI Agent**: Immediately send a visitor message to an AI agent, creating a conversation or continuing the supplied conversation, and return the…
