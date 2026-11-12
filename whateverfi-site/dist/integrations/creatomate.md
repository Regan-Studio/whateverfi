# Creatomate

Creatomate is an API for generating and managing automated videos, images, GIFs, and reusable media templates.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/creatomate/.

## Actions

- **Create Render**: Start one asynchronous image, video, or GIF render from either a template or a direct RenderScript.
- **Create Template**: Create a reusable project template from a RenderScript without starting a render, returning the saved template and any non-fatal warnings.
- **Delete Template**: Permanently delete one project template.
- **Get Render** (read-only): Return the current status and available output metadata for one asynchronous render.
- **Get Template** (read-only): Return one project template including its complete RenderScript source.
- **List Templates** (read-only): Return metadata for every template in the connected project, optionally filtered by any of the supplied comma-separated tags.
- **Update Template**: Partially update a template's name, replacement tag list, or complete replacement RenderScript source.
