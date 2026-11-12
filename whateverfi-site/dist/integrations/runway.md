# Runway

Runway provides generative AI APIs for creating and transforming video, images, audio, avatars, voices, and media workflows.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/runway/.

## Actions

- **Cancel Task**: Cancel a running Runway task or delete its task record.
- **Create Document**: Create a Runway knowledge document from markdown or plain text for reuse by avatar workflows.
- **Create Ephemeral Upload**: Create only a temporary Runway media upload slot and return its presigned multipart form details and runway.
- **Delete Document**: Permanently delete a Runway knowledge document by its ID.
- **Generate Image**: Start a Runway text-to-image or reference-guided image generation task and return its task ID and estimated credit cost.
- **Generate Sound Effect**: Generate an audio effect from a text prompt and return the task ID and estimated credit cost.
- **Generate Speech**: Synthesize speech with Runway using an exact model-specific voice and option contract, then return the task ID and estimated credit cost.
- **Generate Video from Image**: Animate one or more input images with a selected Runway model and return the task ID and estimated credit cost.
- **Generate Video from Text**: Start a Runway text-to-video task with a model-specific typed request and return its task ID and estimated credit cost.
- **Get Document** (read-only): Get one Runway knowledge document, including its full content and the avatars that currently use it.
- **Get Organization** (read-only): Return the connected Runway organization's credit balance, monthly credit spend cap, exact per-model quotas, and current daily generation…
- **Get Task** (read-only): Get the current status, cost, output URLs, and failure details for a Runway generation task.
- **Get Usage** (read-only): Return daily Runway credit usage by model for an optional UTC date range of up to 90 days.
- **Get Workflow** (read-only): Get a published Runway workflow version and its graph so node IDs and output keys can be inspected before running the workflow.
- **Get Workflow Invocation** (read-only): Get the current status, completed node output URLs, and node or invocation failure details for a Runway workflow invocation.
- **List Documents** (read-only): List Runway knowledge documents one page at a time, with sorting and an opaque continuation cursor.
- **List Workflows** (read-only): List the connected account's published Runway workflows and their available versions, ordered as returned by Runway.
- **Run Workflow**: Invoke a published Runway workflow, optionally overriding graph node outputs, and return the created workflow invocation ID.
- **Transform Video**: Transform or restyle an existing video with Runway and return the created task ID and estimated credit cost.
- **Update Document**: Change the name, content, or both for an existing Runway knowledge document.
- **Upscale Image**: Start a Runway image upscaling task and return its task ID and estimated credit cost.
- **Upscale Video**: Start a Runway video upscaling task and return its task ID and estimated credit cost.
