# BrowserAct

BrowserAct runs hosted browser-automation workflows and exposes task execution, workflow discovery, templates, and proxy-region APIs.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/browseract/.

## Actions

- **Cancel Task**: Immediately and permanently cancel a running BrowserAct task.
- **Get Task** (read-only): Return either a task's current status or its full progress, outputs, files, live-view details, and failure information.
- **Get Workflow** (read-only): Return a custom workflow's metadata and expected input parameter definitions before a run.
- **Get Workflow Template** (read-only): Return an official template's metadata and expected input parameter definitions before a run.
- **List Proxy Regions** (read-only): Return the supported proxy region names and codes for official template runs.
- **List Tasks** (read-only): Return one cursor-controlled page of workflow tasks, optionally filtered by status, workflow, name, or creation time.
- **List Workflow Templates** (read-only): Search official BrowserAct workflow templates and return one cursor-controlled page of summaries.
- **List Workflows** (read-only): Return one cursor-controlled page of custom workflows in the connected workspace.
- **Resume Task**: Resume a paused task from its current state.
- **Run Workflow**: Start a custom BrowserAct workflow.
- **Run Workflow Template**: Start an official BrowserAct workflow template.
