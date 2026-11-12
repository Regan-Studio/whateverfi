# BrainGraph

BrainGraph builds a searchable knowledge graph from documents, recordings, web pages, and other source material for grounded AI workflows.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/brain-graph/.

## Actions

- **Get Document Progress** (read-only): Get the current transcription, processing, and analysis status for a BrainGraph document.
- **Ingest Web Page**: Fetch readable content from a public web page and queue it for BrainGraph ingestion.
- **Ingest YouTube Video**: Submit a YouTube video for metadata, transcript, and speaker processing.
- **List Brains** (read-only): List the connected BrainGraph account's knowledge brains and identify the default brain for filtering or targeting other tools.
- **List Documents** (read-only): List BrainGraph documents newest first, optionally filtering by filename or notes, failed ingestion status, and brain.
- **List Graph Patterns** (read-only): Find recurring relationship-chain patterns in the connected BrainGraph knowledge graph, subject to a minimum occurrence count.
- **Resolve Entity** (read-only): Resolve an entity name to a canonical BrainGraph record.
- **Search Brain** (read-only): Search facts in the connected account's BrainGraph knowledge graph using a natural-language question, optionally restricted to selected…
- **Transcribe Audio**: Upload an audio file or submit a direct public audio URL for diarized transcription and graph ingestion.
- **Upload Document**: Upload a document file supplied by the caller or plain text and queue it for BrainGraph ingestion.
