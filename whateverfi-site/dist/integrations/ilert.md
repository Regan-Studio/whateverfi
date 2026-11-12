# iLert

iLert is an incident response platform for managing alerts, on-call schedules, escalations, incidents, and status pages.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/ilert/.

## Actions

- **Get Alert** (read-only): Get one iLert alert by its numeric ID, optionally expanding escalation rules, the next escalation user, or custom details.
- **Get Current User** (read-only): Return the authenticated iLert user, including identity, role, timezone, and active team context.
- **Get Incident** (read-only): Get one iLert status incident by numeric ID, optionally including subscription state, affected teams, or history.
- **List Alerts** (read-only): List iLert alerts with optional state, source, escalation-policy, responder, and report-time filters.
- **List Incidents** (read-only): List iLert status incidents with optional lifecycle-state, affected-service, and report-time filters.
- **List On Calls** (read-only): Find who is on call for selected escalation policies, schedules, users, and a time window of at most three months.
- **List Resources** (read-only): List one incident-response resource catalog.
- **List Schedules** (read-only): List iLert on-call schedules, optionally expanding current or next shifts and schedule definitions.
