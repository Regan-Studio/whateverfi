# Speechmatics

Speechmatics provides asynchronous speech-to-text transcription, job management, transcript retrieval, and usage reporting for audio and video.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/speechmatics/.

## Actions

- **Create Transcription Job**: Create an asynchronous Speechmatics transcription job from a publicly fetchable media URL and return its job ID.
- **Delete Transcription Job**: Delete a transcription job and its associated transcript and resources, optionally forcing termination of a running job.
- **Discover Speech Features** (read-only): Return Speechmatics' current Batch languages, locales, domains, translation support, and language-identification capabilities.
- **Get Transcript** (read-only): Retrieve a transcription job's completed transcript as structured JSON v2, plain text, or SRT text.
- **Get Transcription Job** (read-only): Get a transcription job's status, configuration, duration, and processing errors, optionally waiting briefly for a terminal state.
- **Get Usage** (read-only): Get Batch transcription counts and audio duration aggregated over an optional UTC date range.
- **List Transcription Jobs** (read-only): List transcription jobs in the connected US1 project, newest first, with an agent-controlled continuation cursor.
