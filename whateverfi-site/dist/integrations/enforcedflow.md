# EnforcedFlow

EnforcedFlow routes work across teams with configurable advanced round-robin groups, agent criteria, availability, and email assignments.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/enforcedflow/.

## Actions

- **Get Group Routing Fields** (read-only): Get detailed routing-field configuration and metadata field names for one round-robin group.
- **List Group Agents** (read-only): List agents in a round-robin group, optionally filtering by active status, with metadata and configured field values.
- **List Round Robin Groups** (read-only): List round-robin groups accessible to the connected account, including group IDs and summary routing-field requirements.
- **Select Next Agent**: Select the next available agent for a round-robin group using optional configured criteria.
- **Upsert Group Agent**: Update the first agent matching a filter, or create an agent when the filter matches none.
