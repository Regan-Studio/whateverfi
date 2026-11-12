# ElevenLabs

Create natural AI voices instantly in any language - perfect for video creators, developers, and businesses.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/elevenlabs/.

## Actions

- **Add new project with attributes**: Create a new elevenlabs project for text-to-speech synthesis (e.g., audiobooks).
- **Delete project by id**: Irreversibly delete a specific project by its project id.
- **Get project by ID** (read-only): Retrieve all details for a specific project, including its chapters and their conversion statuses, by providing the project's unique id.
- **Get projects** (read-only): Fetches a list of all projects and their details associated with the user's elevenlabs account.
- **Add a pronunciation dictionary from file**: Adds a new pronunciation dictionary from a lexicon file to improve speech synthesis accuracy.
- **Add a voice**: Adds a custom voice, requiring a name and a files list with at least one audio sample, to initiate cloning.
- **Add rules to the pronunciation dictionary**: Adds one or more custom pronunciation rules (alias or phoneme) to an existing pronunciation dictionary.
- **Add sharing voice**: Adds an existing, shareable voice to a specified user's elevenlabs account library under a new custom name, requiring the user's public id…
- **Archive project snapshot**: Archives an existing project snapshot by its id, creating a permanent, immutable, and typically irreversible copy of its state.
- **Convert a project**: Converts an existing elevenlabs studio project, including all its chapters and using its configured settings and voices, into speech.
- **Convert chapter to audio**: Converts the textual content of a chapter, identified by chapter id within a project id, into audio format.
- **Create a previously generated voice**: Finalizes the creation of a voice using its generated voice id from a previous generation step by assigning a name, description, and…
- **Create an AudioNative enabled project**: Creates an elevenlabs audionative project, generating an embeddable audio player from a provided content file using text-to-speech,…
- **Delete a dubbing project**: Permanently deletes a dubbing project by its id.
- **Delete chapter from project**: Irreversibly deletes a specific, existing chapter from an existing project, typically to remove unwanted or obsolete content.
- **Delete history item**: Permanently deletes a specific history item (including its audio file and metadata) using its history item id.
- **Delete voice by id**: Permanently and irreversibly deletes a specific custom voice using its voice id.
- **Delete voice sample**: Permanently deletes a specific voice sample for a given voice id.
- **Download history items** (read-only): Downloads audio clips from history by id(s), returning a single file or a zip archive, with an optional output format (e.g., 'wav').
- **Dub a video or an audio file**: Dub a video or audio file into a specified target language, requiring 'file' or 'source url', 'target lang', and 'csv file' if 'mode' is…
- **Edit voice**: Updates the name, audio files, description, or labels for an existing voice model specified by voice id.
- **Edit voice settings**: Edits key voice settings (e.g., stability, similarity enhancement, style exaggeration, speaker boost) for an existing voice, affecting all…
- **Generate a random voice** (read-only): Generates a unique, random elevenlabs text-to-speech voice based on input text and specified voice characteristics.
- **Get API documentation** (read-only): Retrieves the content of the official elevenlabs api documentation page hosted on mintlify.
- **Get audio from history item** (read-only): Retrieves the audio content for a specific history item from elevenlabs, using a history item id that must correspond to a previously…
- **Get chapter by ID** (read-only): Fetches comprehensive details for a specific chapter within a given project, including its metadata (name, id), conversion status,…
- **Get chapter snapshots** (read-only): Retrieves all saved version snapshots for a specific chapter within a given project, enabling review of its history or reversion to prior…
- **Get chapters by project id** (read-only): Retrieves a list of all chapters, their details, and conversion status for a project, useful for managing content or tracking progress.
- **Get default voice settings** (read-only): Retrieves the elevenlabs text-to-speech service's default voice settings (stability, similarity boost, style, speaker boost) that are…
- **Get dubbed audio for a language** (read-only): Retrieves an existing dubbed audio file for a specific dubbing id and language code.
- **Get dubbing project metadata** (read-only): Retrieves metadata and status for a specific dubbing project by its id.
- **Get dubbing transcript by language** (read-only): Retrieves the textual transcript for a specified dubbing project and language, if one exists for that language in the project.
- **Get generated items** (read-only): Retrieves metadata for a list of generated audio items from history, supporting pagination and optional filtering by voice id.
- **Get history item by id** (read-only): Retrieves detailed information (excluding the audio file) for a specific audio generation history item from elevenlabs, using its unique id.
- **Get models** (read-only): Retrieves a detailed list of all available elevenlabs text-to-speech (tts) models and their capabilities.
- **Get project snapshots** (read-only): Retrieves all available snapshots (saved states or versions) for an existing project, enabling history tracking, version comparison, or…
- **Get pronunciation dictionaries** (read-only): Retrieves a paginated list of pronunciation dictionaries, used to customize how specific words or phrases are pronounced by the…
- **Get pronunciation dictionary metadata** (read-only): Retrieves metadata for a specific, existing pronunciation dictionary from elevenlabs using its id.
- **Get pronunciation dictionary version** (read-only): Downloads the pronunciation lexicon specification (pls) file for an existing version of a pronunciation dictionary from elevenlabs, used…
- **Get sample audio** (read-only): Retrieves the audio for a given sample id that must belong to the specified voice id.
- **Get shared voices** (read-only): Retrieves a paginated and filterable list of shared voices from the elevenlabs voice library.
- **Get sso provider admin** (read-only): Retrieves the sso provider configuration for a specified workspace, typically for review purposes, and will indicate if no configuration…
- **Get user info** (read-only): Retrieves detailed information about the authenticated elevenlabs user's account, including subscription, usage, api key, and status.
- **Get user profile by handle** (read-only): Retrieves the public profile information for an existing elevenlabs user based on their unique handle.
- **Get user subscription info** (read-only): Retrieves detailed subscription information for the currently authenticated elevenlabs user.
- **Get voice** (read-only): Retrieves comprehensive details for a specific, existing voice by its voice id, optionally including its settings.
- **Get voice settings** (read-only): Retrieves the stability, similarity, style, and speaker boost settings for a specific, existing elevenlabs voice using its voice id.
- **Get voices list** (read-only): Retrieves a list of all available voices along with their detailed attributes and settings.
- **Remove rules from pronunciation dictionary**: Permanently removes exact-match pronunciation rules from a specified elevenlabs pronunciation dictionary using a list of rule strings.
- **Speech to speech** (read-only): Converts an input audio file to speech using a specified voice.
- **Speech to speech streaming** (read-only): Converts an input audio stream to a different voice output stream in real-time, using a specified speech-to-speech model.
- **Stream chapter audio** (read-only): Streams the audio for a specified chapter snapshot from an elevenlabs project, optionally converting the output to mpeg format.
- **Stream project audio** (read-only): Streams audio from a specific project snapshot, optionally converting it to mpeg format.
- **Text to speech** (read-only): Converts text to speech using a specified elevenlabs voice and model, returning a downloadable audio file.
- **Text to speech stream** (read-only): Converts text to a spoken audio stream, allowing latency optimization, specific output formats (some tier-dependent), and custom…
- **Update project pronunciation dictionaries**: Updates a project's pronunciation dictionaries on elevenlabs to improve text-to-speech accuracy for specialized terms.
- **Voice generation parameters retrieval** (read-only): Fetches configurable parameters for elevenlabs voice generation, used to determine available settings (e.g., accents, character limits)…
