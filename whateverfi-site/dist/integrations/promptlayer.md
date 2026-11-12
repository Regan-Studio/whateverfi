# PromptLayer

PromptLayer is a prompt management and observability platform for versioning, evaluating, running, and analyzing LLM applications.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/promptlayer/.

## Actions

- **Get Prompt Template** (read-only): Retrieve a prompt template version, release label, messages, model metadata, snippets, and optionally provider-ready kwargs without…
- **Get Registered Tool** (read-only): Retrieve a PromptLayer registered tool definition by ID or name at a selected version or release label without test execution.
- **Get Request Log** (read-only): Retrieve one PromptLayer request log with its recorded input, output, timing, usage, metadata, tags, and scores.
- **Get Skill Collection** (read-only): Retrieve a PromptLayer skill collection and its files as JSON at a selected version or release label.
- **Get Table** (read-only): Retrieve one PromptLayer Table's metadata and per-sheet row counts by UUID.
- **Get Workflow** (read-only): Retrieve a PromptLayer workflow definition by ID or name at a specific version or release label without running it.
- **List Folder Entities** (read-only): Browse or search PromptLayer folders and registry entities in the API-key workspace, optionally recursively and with metadata.
- **List Prompt Templates** (read-only): Search and page through PromptLayer prompt templates and snippets without executing a model.
- **List Registered Tools** (read-only): List and filter tools defined in PromptLayer's tool registry without executing them.
- **List Skill Collections** (read-only): List and filter PromptLayer skill collections available in the API-key workspace.
- **List Table Columns** (read-only): List one page of user and optionally system columns for a PromptLayer Table sheet.
- **List Table Rows** (read-only): Read one page of rows and cells from a PromptLayer Table sheet, with optional schema and execution aggregates.
- **List Table Sheets** (read-only): List one page of sheets in a PromptLayer Table, optionally filtering by referenced prompt.
- **List Tables** (read-only): Search and page through PromptLayer Tables by folder, name, or referenced prompt.
- **List Workflows** (read-only): Search and page through PromptLayer workflows without running them.
- **Search Request Logs** (read-only): Search PromptLayer request logs by text or structured filters and return one rate-limited page sorted by operational fields.
