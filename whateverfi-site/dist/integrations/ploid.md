# Ploid

Ploid provides people research, identity enrichment, public LinkedIn intelligence, and agent-powered research APIs.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/ploid/.

## Actions

- **Cancel People Set**: DESTRUCTIVE.
- **Cancel Person Run**: Irreversibly cancel an active deep-person research run.
- **Compile Monitor** (read-only): Preview a social-monitor plan, resolved targets, relevance rules, and output schema without creating a monitor or scheduling runs.
- **Create Dataset**: Create a persistent typed dataset and fill 1-30 columns for seeded people, companies, or custom entities.
- **Create Monitor**: Create a persistent scheduled social monitor and immediately start a silent baseline run.
- **Create People Set**: Create a persistent preview People Set and start durable verified background work that may continue after this call returns.
- **Delete Monitor**: Destructively and irreversibly disable a monitor.
- **Enrich Person Contact** (read-only): Resolve requested work email, personal email, and/or phone fields for one person.
- **Enrich Social Profile** (read-only): Resolve one public social profile from a supported platform handle, vanity slug, or profile URL.
- **Export People Set** (read-only): Export admitted items from a preview People Set.
- **Get Account Credits** (read-only): Return the workspace ACU balance and the calling API key's daily and monthly spending-budget state.
- **Get Account Profile** (read-only): Return the signed-in user's WorkOS-linked Ploid account profile.
- **Get Account Usage** (read-only): Preferred connection diagnostic for verifying which Ploid workspace and API key are connected.
- **Get Dataset** (read-only): Return a dataset's lifecycle status, configured columns, row-processing progress, and rows URL.
- **Get LinkedIn Company** (read-only): Fetch public LinkedIn company details by URL, universal name, or search term.
- **Get LinkedIn Profile** (read-only): Fetch one public LinkedIn profile by full URL, vanity slug, or @handle.
- **Get Monitor** (read-only): Return one monitor and its current configuration.
- **Get Monitor Run** (read-only): Return one monitor run by monitor and run ID, including lifecycle state, usage, error, and webhook delivery outcome.
- **Get People Set** (read-only): Return a preview People Set's status, progress, and searches, newest first.
- **Get Person**: Get an evidence-backed reviewed person record or start a durable research run.
- **Get Person Run** (read-only): Get the current state or terminal result of a deep-person research run.
- **List Company Recruiters** (read-only): Return recruiters and role counts for up to 10 companies.
- **List Dataset Rows** (read-only): Return one integer-cursor page of dataset rows in seed order, including rows available before asynchronous processing finishes.
- **List LinkedIn Company Posts** (read-only): Return one provider page of posts for a LinkedIn company.
- **List LinkedIn Posts** (read-only): Return up to 20 recent posts for one public LinkedIn profile identified by profile URL, vanity slug, or @handle.
- **List LinkedIn Profile Comments** (read-only): Return one provider page of comments made by a LinkedIn profile.
- **List Monitor Items** (read-only): Return one cursor-controlled page of emitted monitor items, optionally limited to one run.
- **List Monitor Runs** (read-only): Return one cursor-controlled page of a monitor's runs, newest first.
- **List Monitors** (read-only): Return one cursor-controlled page of monitors, newest first.
- **List People Set Items** (read-only): Return one caller-controlled page of admitted, criterion-verified people while or after a preview People Set runs.
- **List People Sets** (read-only): List the workspace's recent People Sets.
- **Resolve Person** (read-only): Resolve a named person plus at least one identity clue to a permanent Ploid person ID.
- **Run Monitor**: Queue a persistent monitor run now.
- **Search GitHub Accounts** (read-only): Search Ploid's GitHub account index by profile, repository, language, and activity filters.
- **Search GitHub People** (read-only): Search GitHub accounts, link unambiguous accounts to indexed LinkedIn people, and enforce optional LinkedIn filters as hard requirements.
- **Search LinkedIn People** (read-only): Return one cursor-controlled page of public LinkedIn people matching structured keyword, location, title, current-company, and school…
- **Search People** (read-only): Search for up to 150 people and return typed results inline.
- **Search People Candidates** (read-only): Search the indexed people directory for up to 10 unverified identity candidates.
- **Test Monitor** (read-only): Fetch and evaluate a monitor's current targets without saving a run, items, seen-ledger entries, or snapshots.
- **Test Monitor Webhook**: Immediately send one signed monitor.webhook.test event to the monitor's configured external webhook.
- **Update Account Profile**: REAL ACCOUNT MUTATION.
- **Update Monitor**: Update, pause, or resume a monitor by providing at least one field to change.
