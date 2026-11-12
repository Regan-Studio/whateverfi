# Weights & Biases

Read W&B Models projects, runs, sweeps, artifact types, reports, automations, integrations, teams, and organizations through the W&B Cloud GraphQL API.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/weights-and-biases/.

## Actions

- **Get Current Viewer** (read-only): Return the authenticated W&B user, default entity, and team names for connection context.
- **Get Organization** (read-only): Return a W&B organization's identifiers and organization entity by exact name.
- **Get Team** (read-only): Return a W&B team's identity and bounded membership metadata by exact team entity name.
- **List Artifact Types** (read-only): Return one page of artifact types defined in a W&B project.
- **List Automations** (read-only): Return one page of W&B automations accessible under an entity.
- **List Integrations** (read-only): List one page of Slack workspace/channel metadata and webhook integration names for a W&B entity.
- **List Projects** (read-only): Return one page of W&B projects visible under an entity.
- **List Reports** (read-only): Return one page of beta W&B reports for a project.
- **List Runs** (read-only): List one page of runs with IDs, display names, states, and creation times.
- **List Sweeps** (read-only): Return one page of hyperparameter sweeps from a W&B project when sweeps are enabled for the account.
