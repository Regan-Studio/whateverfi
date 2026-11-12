# GetTranscribe

GetTranscribe converts supported video and media URLs into searchable transcriptions and provides tools for managing transcription jobs, results, and folders.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/get-transcribe/.

## Actions

- **Create Transcription Job**: Queue a paid asynchronous transcription job for a supported public video or direct media URL.
- **Get Current Account** (read-only): Return the connected GetTranscribe account's safe identity, plan, usage limits, and available balances.
- **Get Folder** (read-only): Retrieve one transcription folder owned by the connected account.
- **Get Transcription** (read-only): Retrieve one completed transcription with its text and media metadata.
- **Get Transcription Job** (read-only): Get the status and progress of one asynchronous transcription job, including the finished transcription ID or failure details.
- **List Folders** (read-only): List transcription folders owned by the connected account, optionally filtering by parent folder.
- **List Transcription Jobs** (read-only): List asynchronous transcription jobs for the connected account, optionally filtered by lifecycle status.
- **List Transcriptions** (read-only): List lightweight completed-transcription metadata for the connected account, with folder and platform filters.
- **Resolve Media Download URL**: Resolve a fresh direct download URL for supported social or direct media without creating a transcription.
