# YouTube Transcript

Retrieve and store captions for one video or a bounded batch, read job and batch status, access stored transcripts and languages, and resolve playlist or channel video metadata through the YouTube Transcript REST API.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/youtube-transcript/.

## Actions

- **Get Stored Transcript** (read-only): Read a transcript already stored in the connected account without submitting new transcription work or consuming retrieval credits.
- **Get Video Transcript**: Fetch captions for one YouTube video and store the resulting transcript in the connected account.
- **Get Video Transcript Job Status** (read-only): Read one transcript job's current processing, completed, failed, or requires-ASR-confirmation state without creating work or waiting.
- **Get Video Transcripts Batch**: Fetch and store captions for 1-10 YouTube videos.
- **Get Video Transcripts Batch Status** (read-only): Read the current state and available per-video results for a transcript batch without creating work or waiting.
- **List Stored Transcripts** (read-only): List and search transcripts already stored in the connected account, one bounded page at a time.
- **List Transcript Languages** (read-only): List stored languages and YouTube translation target languages for one owned video transcript.
- **Resolve Channel Videos** (read-only): Requires Basic or higher.
- **Resolve Playlist Videos** (read-only): Requires Basic or higher.
