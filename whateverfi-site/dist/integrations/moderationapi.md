# Moderation API

Moderation API provides content detection, human review workflows, author management, and moderation actions for online platforms.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/moderationapi/.

## Actions

- **Evaluate Content Without Storage**: Evaluate content without retaining it or adding it to a review queue, and return policy findings and the recommended moderation action.
- **Execute Moderation Action**: Apply a discovered moderation action to content items or authors.
- **Get Account and Quota** (read-only): Return the connected Moderation API account, plan, current project, and current quota values.
- **Get Review Queue** (read-only): Return metadata and item counts for a review queue by ID.
- **Get Wordlist** (read-only): Return one wordlist and its current words by ID.
- **List Moderation Actions** (read-only): List moderation actions available to the organization, optionally restricted to a review queue.
- **List Review Queue Items** (read-only): List and filter one page of moderation items in a review queue.
- **List Wordlists** (read-only): List the organization's wordlists and their identifiers.
- **Modify Wordlist Words**: Add words to or remove words from an existing wordlist.
- **Set Review Queue Item Status**: Mark a review queue item resolved or return it to pending.
- **Submit Content for Moderation**: Evaluate content and allow Moderation API to retain it and add it to a review queue according to the project's configuration.
