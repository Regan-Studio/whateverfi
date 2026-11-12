# Luma Labs

Create and manage AI image and video generations and reusable files through the current Luma Agents API.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/luma-labs/.

## Actions

- **Delete File**: Soft-delete a Luma file so new generations cannot reference it.
- **Edit Image**: Submit a paid, asynchronous Luma image-edit job.
- **Edit Video**: Submit a paid, asynchronous Ray 3.2 video-edit job.
- **Extract Image Layers**: Submit a paid, asynchronous Luma image layer-extraction job.
- **Generate Image**: Submit a paid, asynchronous Luma image generation job.
- **Generate Video**: Submit a paid, asynchronous Ray 3.2 video generation job.
- **Get File** (read-only): Get a Luma file's metadata and current ingest, moderation, or deletion state.
- **Get Generation** (read-only): Get the current state, failure details, and output URLs for a Luma generation.
- **List Files** (read-only): List files in the connected Luma account, newest first, with optional state and purpose filters.
- **Reframe Video**: Submit a paid, asynchronous Ray 3.2 video-reframe job.
- **Upload File**: Directly upload file bytes to Luma and return the file ID, metadata, and current upload/ingest state.
