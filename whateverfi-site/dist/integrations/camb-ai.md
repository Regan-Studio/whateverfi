# CAMB.AI

CAMB.AI provides hosted APIs for multilingual dubbing, speech synthesis, transcription, translation, voice cloning, and audio generation.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/camb-ai/.

## Actions

- **Dub Media**: Dub media from a URL into one or more target languages, wait for completion, and return the output video, audio, and structured transcript.
- **Generate Subtitles**: Generate translated subtitles for media in one or more languages, wait for CAMB.AI to finish, and return structured subtitle cues.
- **Get Run Result** (read-only): Fetch the structured JSON result for a successful CAMB.AI translation, transcription, dubbing, or subtitle run when its run ID is known.
- **Get Task Status** (read-only): Check one CAMB.AI translation, transcription, dubbing, or subtitle task without waiting.
- **List Supported Languages** (read-only): List CAMB.AI source and target languages, including locale tags and numeric IDs used by generation tools.
- **List Voices** (read-only): Find CAMB.AI voices by name, description, language ID, gender, or publication state before choosing a voice for speech workflows.
- **Transcribe Media**: Transcribe an uploaded audio/video file or a media URL, wait for CAMB.AI to finish, and return a structured speaker-and-timing transcript.
- **Translate Text**: Translate one or more text segments and wait for CAMB.AI to return all translated segments in input order.
