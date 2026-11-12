# E2B

Open-source Code Interpreting for AI Apps. Run sandboxed code execution environments with support for multiple programming languages.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/e2b/.

## Actions

- **Connect to Sandbox**: Connect to an existing E2B sandbox and retrieve its details.
- **Create Sandbox**: Create a new E2B sandbox from a template.
- **Create Template**: Create a new E2B template with specified configuration.
- **Create Webhook**: Register a new webhook to receive sandbox lifecycle events for the team.
- **Delete Sandbox**: Terminate and permanently delete a running E2B sandbox instance.
- **Delete Webhook**: Unregister a webhook and stop receiving lifecycle events.
- **Get Sandbox** (read-only): Retrieve detailed information about a specific sandbox by its ID.
- **Get Webhook Configuration** (read-only): Retrieve the current webhook configuration for a specific webhook.
- **List All Sandboxes** (read-only): List all running and paused sandboxes associated with your team.
- **List All Templates** (read-only): List all available E2B templates for your team.
- **List All Webhooks** (read-only): Retrieve all registered webhooks for your team.
- **Pause Sandbox**: Pause a running E2B sandbox preserving its filesystem and memory state.
- **Refresh Sandbox**: Refresh an E2B sandbox and extend its time to live.
- **Set Sandbox Timeout**: Set the timeout for an E2B sandbox.
- **Start Template Build**: Start a build for an E2B template.
- **Check API Health** (read-only): Check the health status of the E2B API.
- **Get Sandbox Lifecycle Events** (read-only): Retrieve the latest lifecycle events for a particular sandbox instance.
- **Get Sandbox Logs** (read-only): Retrieve logs from a specific E2B sandbox instance.
- **Get Sandbox Metrics** (read-only): Retrieve timestamped CPU, memory, and disk usage metrics for a sandbox.
- **Get Team Maximum Metrics** (read-only): Retrieve the maximum value for a specific team metric in a given interval.
- **Get Team Metrics** (read-only): Retrieve timestamped CPU, memory, and disk usage metrics for a team.
- **Get Template Build Status** (read-only): Get the status of a template build.
- **Get Template Files** (read-only): Get an upload link for a tar file containing build layer files.
- **List Sandboxes Metrics** (read-only): Retrieve timestamped CPU, memory, and disk usage metrics for multiple sandboxes.
- **List Team Sandbox Lifecycle Events** (read-only): Retrieve the latest lifecycle events across all sandboxes associated with the team.
- **Update Template**: Update an E2B template configuration.
- **Update Webhook Configuration**: Update an existing webhook configuration including URL, enabled status, and subscribed events.
