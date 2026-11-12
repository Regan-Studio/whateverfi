# Eranol

Eranol provides API-driven video, audio, and media conversion workflows powered by FFmpeg.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/eranol/.

## Actions

- **Caption Video**: Transcribe a publicly downloadable video's audio, burn styled captions into the video, and produce subtitles.
- **Concatenate Videos**: Join two or more ordered, publicly downloadable video clips, optionally with one transition between clips.
- **Convert Media**: Convert a publicly downloadable media URL to MP3, WAV, JPG, WebP, MP4, or WebM using one fixed route selected by output_format.
- **Delete Job**: Cancel or delete an Eranol media job and remove its generated output immediately.
- **Enhance Audio**: Enhance speech in publicly downloadable audio or video with noise reduction, voice profiling, optional loudness normalization, and…
- **Get Account Credits** (read-only): Return the connected Eranol account ID and remaining processing credits.
- **Get Job Result** (read-only): Return a completed Eranol media job's download URL and output metadata, or its status and progress while still processing.
- **Get Job Status** (read-only): Return an Eranol media job's state, progress, timestamps, error, and nested result metadata when available.
- **Trim Video**: Create a losslessly trimmed clip from a publicly downloadable video URL and start/end times.
- **Watermark Video**: Add an image watermark to a publicly downloadable video with position, margin, opacity, and scale controls.
