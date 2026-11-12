# Mintlify

Mintlify is a documentation platform. This toolkit exposes the Admin API for managing docs programmatically — trigger deployments and previews, run automations, drive the docs-editing agent, and export analytics (feedback, searches, views, visitors and assistant conversations).

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/mintlify/.

## Actions

- **Create Agent Job**: Start a background documentation agent job from a natural-language prompt.
- **Get Agent Job** (read-only): Retrieve the status and details (status, PR link, model, source repo/ref) of a docs agent job.
- **Get Assistant Caller Stats** (read-only): Get assistant query counts broken down by caller type (web, api, other, total) for a date range.
- **Get Assistant Conversations** (read-only): Export the AI assistant conversation history (question, answer, cited sources, resolution status) for a Mintlify project, optionally…
- **Get Feedback** (read-only): Export a project's user feedback (thumbs / contextual comments / agent feedback), optionally filtered by date, source and status.
- **Get Feedback By Page** (read-only): Get feedback counts (thumbs up/down, code, total) aggregated per documentation page path for a date range.
- **Get Page Views** (read-only): Export per-path and site-wide content view counts split by human vs AI traffic.
- **Get Search Queries** (read-only): Export documentation search terms ordered by hit count (with CTR and top clicked page).
- **Get Unique Visitors** (read-only): Export per-path and site-wide approximate distinct visitor counts split by human vs AI traffic.
- **Get Update Status** (read-only): Get the status and details (queued / in_progress / success / failure, logs, commit, screenshot) of a triggered deployment update by its…
- **Send Agent Message**: Send a follow-up instruction to an existing, in-progress docs agent job (asynchronous).
- **Trigger Automation**: Trigger a custom-schedule automation (workflow) to run immediately.
- **Trigger Preview**: Create or update a preview deployment of the docs project for a Git branch (redeploys if a preview already exists for that branch).
- **Trigger Update**: Queue a production deployment of the docs project from its configured branch.
