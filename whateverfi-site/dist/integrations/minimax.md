# MiniMax

MiniMax provides multimodal AI APIs for text, video, speech, image, music, and file workflows.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/minimax/.

## Actions

- **Cancel or Delete Video Task**: Cancel a queued MiniMax video v2 task, or permanently delete a completed or failed task record.
- **Clone Voice**: Create a reusable MiniMax cloned voice from an uploaded voice sample, optionally generating paid preview audio.
- **Count Message Tokens** (read-only): Count input tokens for an Anthropic-compatible message payload without generating content.
- **Create Async Speech**: Start a long-form asynchronous MiniMax speech synthesis task from inline text or one uploaded text file.
- **Create Legacy Video**: Start a MiniMax v1 Hailuo text, image, first-and-last-frame, or subject-reference video task with mode-specific validation.
- **Create OpenAI-Compatible Response**: Call MiniMax through its OpenAI Responses compatibility contract and return one non-streaming response object.
- **Create Template Video**: Start a MiniMax Video Agent task using an official template and its ordered text and media inputs.
- **Create Video**: Start a MiniMax H3 video v2 generation task from text and optional reference media.
- **Create Video Prompt**: Start a MiniMax H3 Context-IR task that converts multimodal context into an enhanced video prompt.
- **Delete File**: Permanently delete one MiniMax file by its exact ID and storage-purpose category.
- **Delete Voice**: Permanently delete an eligible MiniMax cloned or designed voice.
- **Design Voice**: Design a reusable MiniMax voice from a description and return its paid preview as a downloadable audio file.
- **Download File** (read-only): Download the binary contents of one generated MiniMax file and return a managed file reference.
- **Estimate Responses Input Tokens** (read-only): Estimate input tokens using MiniMax's OpenAI Responses compatibility contract without generating model output.
- **Generate Anthropic-Compatible Message**: Call MiniMax through its Anthropic Messages compatibility contract and return one non-streaming message response.
- **Generate Image**: Generate one or more images from a text prompt, optionally guided by a subject reference.
- **Generate Native Chat Completion**: Call MiniMax's native chatcompletion_v2 contract and return one non-streaming completion, including native sensitivity metadata.
- **Generate Text**: Generate one non-streaming OpenAI-compatible chat completion, including optional reasoning and tool calls.
- **Get Anthropic-Compatible Model** (read-only): Retrieve one MiniMax text model through the Anthropic Models compatibility contract.
- **Get Async Speech Task** (read-only): Get the status and generated file reference for a MiniMax asynchronous speech synthesis task.
- **Get File** (read-only): Retrieve metadata for one MiniMax file by its exact ID, including a temporary download URL when MiniMax provides one for a generated output.
- **Get Legacy Video Task** (read-only): Get the status and output file metadata of a MiniMax v1 legacy video task.
- **Get OpenAI-Compatible Text Model** (read-only): Retrieve one MiniMax text model through the OpenAI Models compatibility contract.
- **Get Template Video Task** (read-only): Get the status and temporary result URL of a MiniMax Video Agent template task.
- **Get Video Task** (read-only): Get the current state and output of one MiniMax video v2 task created within the last seven days.
- **List Anthropic-Compatible Models** (read-only): List one page of MiniMax text models through the Anthropic Models compatibility contract, using its after_id or before_id cursors.
- **List Files** (read-only): List MiniMax files for one upload-purpose category.
- **List Text Models** (read-only): List text model IDs currently available to the connected MiniMax API key.
- **List Video Tasks** (read-only): List one page of MiniMax video v2 tasks from the last seven days, optionally filtered by status, task ID, model, or task type.
- **List Voices** (read-only): List system, cloned, generated, or all voices that can be used for speech synthesis.
- **Regenerate Video**: Regenerate an eligible MiniMax-H3 768P source video as a 2K video, using either its task ID or the exact original inputs and source video.
- **Synthesize Speech**: Synchronously synthesize up to 9,999 characters of text and return the decoded audio as a downloadable file.
- **Transcribe Audio**: Transcribe an uploaded audio file with optional language hints, timestamps, speaker diarization, subtitle output, or assembled streaming…
- **Upload File**: Upload one file to MiniMax as multipart/form-data for voice cloning, async speech, video understanding, or video generation.
