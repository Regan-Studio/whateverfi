# PromptHub

Manage, retrieve, and execute versioned prompts and projects through the PromptHub API.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/prompt-hub/.

## Actions

- **Get Current Team** (read-only): Return the current PromptHub team ID for the connected account.
- **Get Project Head** (read-only): Retrieve a project's latest committed prompt and model configuration, with optional branch and variable resolution.
- **List Projects** (read-only): List projects in a PromptHub team, optionally filtered by group, model, or provider.
- **Run Project**: Execute a committed PromptHub project prompt with optional variables and return the generated text, usage, cost, and timing metadata.
