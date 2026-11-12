# Browser Use

Browser Use Cloud provides hosted browser agents, managed browser sessions, workspaces, profiles, and integrations for automating web tasks.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/browser-use/.

## Actions

- **Archive Workspace**: Archive a workspace so it is no longer readable through the workspace API.
- **Cancel Queued Message**: Cancel a queued session message while it is still pending.
- **Cancel Run**: Idempotently cancel an in-flight browser-agent run.
- **Create Browser Profile**: Create a persistent browser profile for reusable cookies and browser state.
- **Create Browser Session**: Launch a paid managed browser for direct CDP control.
- **Create Workspace**: Create an empty workspace for browser-run input files and outputs.
- **Delete Browser Profile**: Permanently delete a persistent browser profile and its configuration.
- **Delete Session**: Soft-delete a conversation session and cancel its active run and pending messages.
- **Delete Workspace File**: Permanently delete one exact relative file path from a workspace.
- **Disconnect Integration**: Disconnect a downstream provider from the Browser Use project, revoking its availability to future runs.
- **Get Browser Profile** (read-only): Get one persistent browser profile's metadata and observed cookie domains.
- **Get Browser Session** (read-only): Get a managed browser's status, control URLs, costs, metadata, and recording state.
- **Get Integration Status** (read-only): Check whether one downstream integration provider is connected to the Browser Use project.
- **Get Queued Message** (read-only): Get one queued session message, including its terminal handoff state.
- **Get Run** (read-only): Get a run's full result, usage, and optionally its ordered input-file attachments.
- **Get Run Status** (read-only): Read a run's lightweight indexed status for caller-controlled polling.
- **Get Session** (read-only): Get one conversation session's latest-run summary and busy or idle status.
- **Get Session Feedback** (read-only): Get all feedback votes recorded for a conversation session.
- **Get Session Share** (read-only): Get a session's current or inactive public share-link state without changing its exposure.
- **Get Workspace** (read-only): Get workspace metadata and optionally its current storage use and plan quota.
- **List Browser Downloads** (read-only): List one page of files downloaded by a managed browser, optionally including presigned URLs that expire after 15 minutes.
- **List Browser Profiles** (read-only): List or search persistent browser profiles one page at a time.
- **List Browser Sessions** (read-only): List managed browser sessions with status, metadata, and agent-session filters, one page at a time.
- **List Integration Categories** (read-only): List the category names used to organize Browser Use integration providers.
- **List Integrations** (read-only): Search Browser Use integration providers and filter by popularity or project connection status, one page at a time.
- **List Run Events** (read-only): Read one page of a run's execution events incrementally, with optional event output payloads.
- **List Run Payment Methods** (read-only): Return AgentCard wallets and the project's active Stripe Link connection that browser runs can use for payments.
- **List Runs** (read-only): List browser-agent runs, optionally restricted to one conversation session, one page at a time.
- **List Session Queue** (read-only): List pending and recently delivered messages for a conversation session, including transcript cutoffs created by steering interrupts.
- **List Sessions** (read-only): List conversation sessions with each session's latest run and busy or idle status, one page at a time.
- **List Workspace Files** (read-only): List one page of files in a workspace by path prefix, optionally including temporary download URLs.
- **Queue Session Message**: Queue a follow-up for a conversation session, optionally interrupting its active run.
- **Set Session Feedback**: Set, replace, or clear feedback for one session chat item.
- **Set Session Sharing**: Enable or disable a session's stable public share link, creating or reactivating it when enabled.
- **Start Browser Run**: Start an asynchronous hosted browser-agent task that may make irreversible changes on external sites and consume project credits.
- **Stop Browser Session**: Stop a managed browser session and refund unused prepaid time subject to the one-minute minimum charge.
- **Update Browser Profile**: Update a persistent browser profile's name, user identifier, or both.
- **Update Session**: Rename a conversation session or explicitly clear its title.
- **Update Workspace**: Rename a workspace or explicitly clear its name.
