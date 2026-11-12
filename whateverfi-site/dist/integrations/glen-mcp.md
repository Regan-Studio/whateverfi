# Glen MCP

Access organizational memory and context from Glen through its official hosted MCP server, using the connected user's authorized Glen workspace.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/glen-mcp/.

## Actions

- **Glen artifact create**: Save a document (Markdown or HTML+CSS, no JavaScript) to the org's artifact library.
- **Glen artifact delete**: Permanently delete an artifact you authored, by its exact slug.
- **Glen artifact get** (read-only): Fetch a saved artifact (document) from the org's artifact library by its exact slug.
- **Glen artifact search** (read-only): Find a saved document in the org's artifact library by intent or keywords.
- **Glen artifact share**: Share an artifact you authored.
- **Glen code search** (read-only): Trace specific lines of code back to the agent conversations that produced them.
- **Glen dependency search** (read-only): Search the org's existing dependencies (tools/runtimes a skill needs) before creating a new one, so you reuse a match instead of…
- **Glen feedback**: Send a bug report (kind.
- **Glen forget**: Exclude one or more verified wrong, stale, or irrelevant evidence items from future Glen recall.
- **Glen import**: Import one turn of a past coding-agent conversation into the org's shared memory.
- **Glen invite**: Invite one or more teammates by email to the active organization so they share its memory.
- **Glen list orgs** (read-only): List the organizations the user belongs to.
- **Glen restore**: Restore one or more previously forgotten Glen evidence references.
- **Glen search** (read-only): Search the organization's shared memory for a query.
- **Glen set recording**: Set the user's glen mode, account-wide on every machine and agent.
- **Glen set suggestions**: Turn glen's skill suggestions on or off for the user, account-wide.
- **Glen skill create**: Save a new reusable skill (a markdown prompt) to your Glen skill library.
- **Glen skill delete**: Permanently delete a skill you authored, by its exact slug, for you and everyone it's shared with.
- **Glen skill search** (read-only): Find a reusable skill in the org's shared library by intent and/or author.
- **Glen skill share**: Share a skill you authored.
- **Glen skill use** (read-only): Fetch a skill's instructions by its exact slug.
- **Glen status** (read-only): Show the user's current glen settings.
