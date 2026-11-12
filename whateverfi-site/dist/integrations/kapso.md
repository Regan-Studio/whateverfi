# Kapso

Kapso provides APIs for WhatsApp messaging, customer and contact management, broadcasts, workflows, and serverless functions.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/kapso/.

## Actions

- **Get Function** (read-only): Retrieve one Kapso serverless function's code, runtime configuration, deployment status, and computed URLs without invoking or changing it.
- **Get Phone Number** (read-only): Retrieve one Kapso WhatsApp phone-number configuration by its Meta phone number ID.
- **Get Phone Number Health** (read-only): Run Kapso's live checks for one WhatsApp phone-number configuration and return its body-level health status and individual check results.
- **Get Workflow** (read-only): Retrieve one workflow's metadata, full graph definition, or available variables without executing or changing it.
- **List Conversations** (read-only): List one page of WhatsApp conversations by recent activity, with filters for phone number, status, assignment, and activity time range.
- **List Customers** (read-only): List Kapso project customers and filter them by name, external customer ID, or creation time.
- **List Functions** (read-only): List serverless functions configured in the Kapso project, including runtime and deployment state, without returning function source code…
- **List Messages** (read-only): List one page of WhatsApp message history project-wide through Kapso Platform or for one phone number through the Meta-compatible proxy.
- **List Phone Numbers** (read-only): List WhatsApp phone-number configurations in the Kapso project, with filters for account, customer, messaging state, and display name.
- **List Workflows** (read-only): List project workflows and filter them by lifecycle status, name, or creation time.
