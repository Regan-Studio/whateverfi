# CrewAI

Run deployed CrewAI automations and manage CrewAI AMP SaaS control-plane resources.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/crew-ai/.

## Actions

- **Get Deployment Logs** (read-only): Return deployment lifecycle logs for a CrewAI deployment UUID to diagnose build or runtime deployment failures.
- **Get Deployment Status** (read-only): Return the current AMP deployment status for one crew UUID from the SaaS control plane.
- **Get Execution Status** (read-only): Return the current state, progress, result, or error for a deployed-crew execution started with a kickoff ID.
- **Get Required Inputs** (read-only): Return the input names required by the connected deployed CrewAI automation before starting an execution.
- **List Crew Deployments** (read-only): List CrewAI crew deployments visible to the selected SaaS organization and return their identifiers for status, logs, or redeployment.
- **Redeploy Crew**: Trigger a new deployment of an existing CrewAI automation by UUID.
- **Resume Crew Execution**: Approve or retry a human-in-the-loop task and resume its paused CrewAI execution.
- **Start Crew Execution**: Start one execution of the connected deployed CrewAI automation and return its kickoff ID for status checks.
