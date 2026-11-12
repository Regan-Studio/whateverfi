# Human Approval - HITL Platform

HITL.sh adds human approval and review workflows to AI agents and automations through loops and structured requests.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/hitl/.

## Actions

- **Cancel Approval Request**: Irreversibly cancel a pending approval request so reviewers can no longer complete it.
- **Create Approval Request**: Create and broadcast one human approval request to active members of an owned loop, consuming one provider request allowance.
- **Create Loop**: Create an approval loop and return its loop ID and human invitation links.
- **Delete Loop**: Permanently delete an owned loop and all of its memberships, approval requests, responses, feedback, and analytics.
- **Get Account Status** (read-only): Return the connected HITL account identity, status, permissions, and provider-reported request allowance before creating an approval…
- **Get Approval Request** (read-only): Get the current status, configuration, and human response for one approval request.
- **List Approval Requests** (read-only): Return approval requests created by the connected API key, optionally restricted to one loop.
- **List Loop Members** (read-only): Return a loop's active and pending human reviewers so an agent can verify readiness before broadcasting an approval request.
- **List Loops** (read-only): Return all approval loops owned by the connected account, including embedded members and membership counts.
- **Update Loop**: Update one or more display fields of an owned approval loop without changing its members or requests.
