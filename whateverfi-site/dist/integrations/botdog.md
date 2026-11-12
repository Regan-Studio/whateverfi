# Botdog

Botdog is a LinkedIn outreach platform for managing campaigns, leads, messaging, team analytics, and connected sending accounts.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/botdog/.

## Actions

- **Add Leads to Campaign**: Create 1 to 100 lead records from LinkedIn profiles in an existing campaign.
- **Get Analytics** (read-only): Return outreach analytics for a preset period, either as team/campaign totals or as a per-user breakdown.
- **Get Campaign** (read-only): Return one campaign's identity, status, owner, and configured dates by campaign ID.
- **Get Campaign Sequence** (read-only): Return a campaign's configured workflow steps and branches in graph, tree, readable, or combined form.
- **Get Campaign Statistics** (read-only): Return invitation, message, profile-visit, and response metrics and rates for one campaign.
- **Get Current Team** (read-only): Return the name and user count of the Botdog team authenticated by the connected API key.
- **Get Daily Analytics** (read-only): Return one outreach-activity row per calendar day plus totals for an explicit date range, optionally filtered by user or campaign.
- **List Campaigns** (read-only): Return campaigns in the authenticated Botdog team, optionally filtered by status or owner user IDs.
- **List Leads** (read-only): Return one cursor-controlled page of team leads, optionally filtered by campaign, list, campaign state, reply state, unread state, or skip…
- **List LinkedIn Accounts** (read-only): Return connected LinkedIn sending accounts and their connection health for the authenticated Botdog team.
- **List Team Users** (read-only): Return Botdog users in the authenticated team so their IDs can be used in campaign and analytics filters.
- **Send or Schedule Message**: Immediately send a LinkedIn message to an existing lead conversation, or schedule delivery when send_at is provided.
