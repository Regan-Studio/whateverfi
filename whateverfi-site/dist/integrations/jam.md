# Jam

Jam helps teams capture, inspect, organize, and collaborate on browser bug reports and recordings through its hosted MCP API.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/jam/.

## Actions

- **Analyze Jam Video** (read-only): Extract structured user goals, reported issues, feedback, visual observations, interactions, and technical indicators from a video Jam.
- **Get Console Logs** (read-only): Get captured browser console errors, warnings, information, debug output, and stack traces from a Jam.
- **Get Jam Details** (read-only): Get the core details and debugging context for a Jam.
- **Get Jam Metadata** (read-only): Get custom application debugging context attached through the jam.metadata() SDK, such as user IDs, versions, and feature flags.
- **Get Jam Screenshots** (read-only): Get screenshots and image attachments from a screenshot-type Jam for visual inspection.
- **Get Jam Video Frames** (read-only): Get still frames from a video Jam as an overview grid, exact timestamps, or an evenly sampled time window.
- **Get Jam Video Transcript** (read-only): Get the timestamped WebVTT speech transcript from a microphone-enabled video Jam when available.
- **Get Network Requests** (read-only): Get captured HTTP requests and WebSocket frames from a Jam, with filters for failures, hosts, methods, content types, and response bodies.
- **Get Recording Link** (read-only): Get one Recording Link's settings and submitted-Jam count by public ID.
- **Get User Events** (read-only): Get the chronological user interaction timeline from a Jam, including clicks, inputs, submissions, navigation, and scrolling.
- **List Jam Folders** (read-only): Browse or search one page of workspace folders and return their IDs, names, Jam counts, and timestamps.
- **List Jam Members** (read-only): Browse or search one page of workspace members by name or email for author discovery and attribution.
- **List Jams** (read-only): Search and browse workspace Jams by text, type, folder, author, source URL, or creation date.
- **List Recording Domains** (read-only): List the workspace's connected recording domains and whether each is verified to capture console and network logs.
- **List Recording Link Jams** (read-only): List Jams submitted through one Recording Link, newest first.
- **List Recording Links** (read-only): List workspace Recording Links newest first, optionally including revoked links.
