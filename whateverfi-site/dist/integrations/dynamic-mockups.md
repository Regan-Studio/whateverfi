# Dynamic Mockups

Dynamic Mockups provides APIs for generating product mockups, rendering templates, managing catalogs and collections, and creating AI-powered image and motion assets.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/dynamic-mockups/.

## Actions

- **Create MockAnything Mockup**: Create and optionally wait for a MockAnything mockup from exactly one prompt, public image URL, or uploaded image.
- **Get Generation Options** (read-only): Return current MockAnything styles and aspect-ratio support plus MotionMockups models, durations, aspect ratios, estimated times, and live…
- **Get MockAnything Product** (read-only): Get one POD product's supported sizes, colors, and decoration locations before using its UUID in MockAnything generation.
- **Get MockAnything Status** (read-only): Check one MockAnything task once, typically after Create MockAnything Mockup stops waiting.
- **Get Motion Mockup Status** (read-only): Check a submitted MotionMockups video job once and return its queue state or completed MP4 metadata.
- **List Catalogs and Collections** (read-only): Return the connected account's catalogs and collections, including the UUIDs used to filter mockups and target creation or bulk workflows.
- **List Mockups** (read-only): Find renderable mockup templates and return their mockup, smart-object, text-layer, and print-area-preset UUIDs.
- **Render Mockups**: Render one or more explicitly selected mockup templates from public artwork URLs, colors, Beta text layers, and shared export settings.
- **Search MockAnything Products** (read-only): Fuzzy-search POD products that can ground MockAnything generation.
- **Submit Motion Mockup**: WARNING.
