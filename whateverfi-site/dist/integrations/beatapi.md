# BeatAPI

BeatAPI provides asynchronous APIs for AI image and video generation, video analysis, music and ecommerce video workflows, file uploads, usage, and webhooks.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/beatapi/.

## Actions

- **Create Ecommerce Video Task**: Start a paid asynchronous BeatAPI product-ad video task from uploaded product images, and return its task ID for status polling.
- **Create Image Generation Task**: Start a paid asynchronous BeatAPI image generation task with one exact model-specific contract, and return its task ID for status polling.
- **Create Video Analysis Task**: Start a paid asynchronous analysis of an account-owned uploaded video and return its task ID for status polling.
- **Create Video Generation Task**: Start a paid asynchronous BeatAPI video generation task with an exact model-specific request.
- **Get Task** (read-only): Read the current status, stage, storyboard, output, usage, or failure details for one asynchronous BeatAPI task.
- **Get Usage** (read-only): Get the connected account's USD balance, task totals, concurrency, and usage breakdowns before or after paid work.
- **List Effects** (read-only): List currently published image and video effects with each effect's exact input and option contract.
- **List Generation Models** (read-only): List currently available image and video generation models, optionally filtered by media type, before creating a generation task.
- **List Workflows** (read-only): List BeatAPI's available high-level workflows and what each workflow produces.
- **Upload File**: Upload an image, audio file, subtitle file, or short video to BeatAPI and return an account-owned URL for generation or analysis inputs.
