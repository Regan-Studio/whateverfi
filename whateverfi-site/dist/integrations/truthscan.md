# TruthScan

TruthScan detects AI-generated and manipulated content in images, text, PDFs, video, and audio.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/truthscan/.

## Actions

- **Analyze Audio**: Analyze exactly one public audio URL or uploaded audio/media file for AI generation.
- **Analyze Image**: Submit an image URL for AI-generation detection and, by default, wait for the asynchronous result.
- **Analyze PDF**: Submit a publicly reachable PDF URL for asynchronous tampering detection and, by default, wait for the result.
- **Analyze Text**: Submit a text value or public web URL for AI-written-text detection.
- **Analyze Video**: Analyze exactly one public video URL or uploaded video for AI generation or face swapping.
- **Check Credits** (read-only): Return the connected TruthScan account's remaining detection credits from the canonical image detector balance endpoint.
- **Download Image Asset** (read-only): Download a generated preview or heatmap for an owned TruthScan image detection job.
- **Get Detection Result** (read-only): Get the current result of an existing image, text, PDF, video, or audio detection job, optionally waiting until it finishes.
