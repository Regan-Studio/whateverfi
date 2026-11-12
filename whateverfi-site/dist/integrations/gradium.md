# Gradium

Gradium provides low-latency speech generation, transcription, voice management, and pronunciation tools for real-time voice applications.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/gradium/.

## Actions

- **Create Pronunciation Dictionary**: Create a language-specific pronunciation dictionary with optional rewrite rules.
- **Delete Pronunciation Dictionary**: Permanently delete one pronunciation dictionary by UID.
- **Get Credits** (read-only): Get the connected Gradium subscription's current credit balance and billing-period metadata.
- **Get Pronunciation Dictionary** (read-only): Retrieve one pronunciation dictionary and its complete rewrite rule set by UID.
- **Get Usage Summary** (read-only): Retrieve aggregate Gradium session, message, text, audio-duration, and consumed-credit usage totals.
- **Get Voice** (read-only): Retrieve metadata for one Gradium catalog or custom voice by its UID.
- **List Pronunciation Dictionaries** (read-only): List pronunciation dictionaries for the connected organization, optionally filtered by language.
- **List Voices** (read-only): List custom voices and, by default, Gradium's public voice catalog, returning voice IDs and metadata for later selection.
- **Update Pronunciation Dictionary**: Update pronunciation dictionary metadata and optionally replace its complete rewrite rule set.
