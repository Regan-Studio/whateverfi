# Lakera Guard

Lakera Guard screens AI application interactions for security and safety risks and provides Enterprise APIs for managing guardrail policies and projects.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/lakera-guard/.

## Actions

- **Create Policy**: Create an Enterprise Lakera policy with built-in detectors and/or custom guardrails.
- **Create Project**: Create an Enterprise Lakera project, optionally assigning a policy, metadata, and detect-or-flag action.
- **Delete Policy**: Permanently delete an Enterprise Lakera policy by ID.
- **Delete Project**: Permanently and irreversibly delete an Enterprise Lakera project by ID.
- **Evaluate Detectors** (read-only): Evaluate content and return one confidence result per configured detector without producing an aggregate flagging decision or Guard…
- **Get Policy** (read-only): Retrieve an Enterprise Lakera policy by ID, including its detector configuration, custom guardrails, version, and assigned projects.
- **Get Project** (read-only): Retrieve an Enterprise Lakera project by ID, including its assigned policy, metadata, and detect-or-flag action.
- **Screen Content** (read-only): Screen the latest LLM or agent interaction with Lakera Guard and return the policy decision.
- **Update Policy**: Replace an Enterprise Lakera policy's complete configuration and create a new policy version.
- **Update Project**: Update an Enterprise Lakera project by ID.
