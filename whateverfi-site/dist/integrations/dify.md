# Dify

Run and inspect a published Dify Workflow app through its Service API, including configuration and workflow run history.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/dify/.

## Actions

- **Get Workflow App Configuration** (read-only): Return the connected Workflow app's identity, declared input form and upload limits, tool icons, and hosted-site settings.
- **Get Workflow Run** (read-only): Return one workflow run's status, inputs, arbitrary outputs, error, and execution metrics by run ID.
- **List Workflow Runs** (read-only): Return one page of run summaries for the connected Workflow app, with filters and a continuation cursor for older or additional runs.
- **Run Workflow**: Run the connected app's latest published workflow in blocking mode and return its app-defined outputs.
