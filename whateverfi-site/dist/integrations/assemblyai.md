# AssemblyAI

AssemblyAI provides speech-to-text transcription and audio intelligence APIs for uploaded and remotely hosted media.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/assemblyai/.

## Actions

- **Delete Transcript Content**: Irreversibly delete a transcript's stored content.
- **Export Subtitles** (read-only): Export a completed transcript as raw SRT or WebVTT subtitle text.
- **Get Redacted Audio** (read-only): Get the processing status and short-lived signed download URL for PII-redacted audio.
- **Get Transcript** (read-only): Retrieve an AssemblyAI transcript's current state and results, optionally waiting until asynchronous processing completes or fails.
- **Get Transcript Segments** (read-only): Return sentence- or paragraph-level segments, timestamps, confidence, and words for a completed transcript.
- **List Transcripts** (read-only): List project transcripts from the last 90 days, newest first, with optional filters and a cursor for the next older page.
- **Search Transcript** (read-only): Find words or phrases in a completed transcript and return occurrence counts and timestamps.
- **Submit Transcript**: Queue an asynchronous pre-recorded transcription from a reachable media URL.
- **Upload Media**: Upload an audio or video file to AssemblyAI and return the project-private URL to use when submitting a transcript.
