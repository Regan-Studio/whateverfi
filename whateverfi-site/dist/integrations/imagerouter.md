# ImageRouter

Generate images, videos, and text with ImageRouter, inspect credits, validate normal API keys, and discover models. Management-key endpoints are excluded.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/imagerouter/.

## Actions

- **Create Chat Completion**: Create a non-streaming OpenAI-compatible chat completion with a paid text model.
- **Create Response**: Create a non-streaming OpenAI Responses API result from plain text or structured multimodal input with a selected ImageRouter text model.
- **Edit Image**: Transform or inpaint one or more existing images supplied as URLs or data URIs.
- **Generate Image**: Generate an image from a text prompt with a selected ImageRouter model.
- **Generate Video**: Generate a video from text and optional URL or data-URI image inputs.
- **Get Credits** (read-only): Inspect remaining credits, cumulative usage, deposits, and optional per-key usage before making potentially paid generation calls.
- **Get Model** (read-only): Get current capabilities, accepted parameters, and pricing for one exact ImageRouter model ID before generation.
- **List Models** (read-only): Discover current ImageRouter model IDs, modalities, supported parameters, and pricing before generation.
