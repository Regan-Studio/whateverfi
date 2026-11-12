# Captions

Captions provides the Mirage API for generating videos and speech and adding styled captions to videos.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/captions/.

## Actions

- **Add Captions**: Start an asynchronous job that transcribes and renders a selected caption style onto an uploaded or existing completed video.
- **Download Video** (read-only): Download the MP4 content of a completed video job and return an offloaded file reference.
- **Generate Speech**: Generate WAV speech synchronously from text using a known Mirage voice ID and return an offloaded audio file reference.
- **Generate Video**: Start an asynchronous Mirage Video 1 job that animates a portrait image using speech audio.
- **Get Caption Template** (read-only): Retrieve one caption style by ID, including its name and preview video URL.
- **Get Video Status** (read-only): Retrieve the current state, progress, and error details for a video generation or captioning job.
- **List Caption Templates** (read-only): Return one page of available caption styles, including names and preview video URLs.
- **List Videos** (read-only): Return one page of video jobs owned by the connected Mirage account, including each job's status and progress.
