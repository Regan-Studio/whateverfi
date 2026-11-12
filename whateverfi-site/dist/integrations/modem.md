# Modem

Modem turns customer conversations into structured topics, people, and company insights for analysis and workflow automation.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/modem/.

## Actions

- **Add People to Company**: Associate one or more existing people with an existing company.
- **Create Companies**: Create one to 50 companies in one batch.
- **Create People**: Create one to 50 people in one batch.
- **Get Channel** (read-only): Get one channel's source details, connection state, context, timestamps, and message count by UUID.
- **Get Company** (read-only): Get one company's core details, connection values, domain, logo, and VIP status by decimal ID.
- **Get Company Activity** (read-only): Get one company's message count, weekly activity series, and source-level message breakdown.
- **Get Company History** (read-only): Get up to 50 company audit records plus merge history.
- **Get Company Identities** (read-only): Get external platform identities linked to one company by Modem's identify operation.
- **Get Current Organization** (read-only): Return the organization selected by the connected API key.
- **Get Person** (read-only): Get one person's complete profile, including company, connections, tags, sources, timestamps, identities, and message activity aggregates.
- **Get Person History** (read-only): Get up to 50 person audit records plus merge history.
- **Get Person Identities** (read-only): Get all external platform identities linked to one person.
- **Get Person Source Stats** (read-only): Get one person's message counts broken down by source platform.
- **Get Topic** (read-only): Get one topic's complete details, including its summary, classification, lifecycle, priority, keywords, time range, archive state, and…
- **Get Topic Groups** (read-only): Get every message group assigned to one topic in ascending or descending group-time order.
- **Get Topic History** (read-only): Get up to 50 topic audit records plus action and merge history.
- **Get Topic People** (read-only): Get every unique person who participated in one topic, including source identities, company, profile, VIP state, and contribution count.
- **Identify External Records**: Upsert links from external platform records to Modem people and companies in batches of 50.
- **List and Search Topics** (read-only): List or search topics by keywords or semantic meaning with organization, participant, source, status, date, and classification filters,…
- **List Channels** (read-only): List organization channels with connection state and message counts, optionally filtered by source, name, or channel IDs.
- **List Companies** (read-only): List companies with person and message aggregates, optionally searching and sorting the result.
- **List Groups** (read-only): List message groups for exactly one company or one person, returning compact message content and topic context one page at a time.
- **List People** (read-only): List people with aggregated message statistics, optionally filtering by search text, ecosystem tags, or company and sorting the result.
- **Merge Companies Irreversibly**: Irreversibly merge one or more source companies into one surviving target.
- **Merge People Irreversibly**: Irreversibly merge one or more source people into one surviving target.
- **Merge Topics Irreversibly**: Irreversibly merge 1 to 50 source topics into one surviving target.
- **Update Companies**: Update one to 50 companies in one batch.
- **Update People**: Update one to 50 people in one batch.
- **Update Topic**: Update one topic's priority, lifecycle, issue type, complete keyword list, or archive state.
- **Update Topics**: Set priority or archive state for one to 100 topics at once.
