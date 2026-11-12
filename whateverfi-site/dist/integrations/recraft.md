# Recraft

Generate, transform, upscale, vectorize, and manage image styles with Recraft's native API.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/recraft/.

## Actions

- **Create Custom Style**: Create a private reusable style in the connected Recraft account from one to ten bounded reference images, existing V2/V3 styles, or both.
- **Creative Upscale Image**: Increase one raster image's resolution while regenerating fine details and faces.
- **Crisp Upscale Image**: Increase one raster image's resolution while sharpening it without promising a specific scale factor, then return a public signed URL that…
- **Delete Custom Style**: Permanently delete one style by UUID from the connected Recraft account.
- **Enhance Image Details**: Re-render one raster image with Recraft V4.1 Pro for sharper texture and detail while retaining its composition.
- **Enhance Prompt**: Expand a text prompt with visual context, style cues, and composition details.
- **Erase Image Region**: Erase the pure-white area of a black-and-white mask from one raster or opaque untrusted SVG image.
- **Generate Image**: Generate one to six raster or vector images with any documented Recraft model, returning public signed URLs that normally expire in about…
- **Generate Image Background**: Generate a new background in the pure-white area of a mask while preserving black areas.
- **Generate Raster Image**: Generate one to six raster images with a documented raster model and return public signed URLs through Recraft's raster-only endpoint,…
- **Generate Vector Image**: Generate one to six SVG images with a documented vector model and return public signed URLs through Recraft's vector-only endpoint, which…
- **Get Current User** (read-only): Get the connected Recraft user's identity and remaining API Units balance.
- **Get Custom Style** (read-only): Get one connected-account Recraft style by UUID.
- **Inpaint Image**: Regenerate the pure-white masked area of one image from a prompt, keeping black areas unchanged.
- **List Basic Styles** (read-only): List Recraft's built-in styles and the compatible model for each.
- **List Custom Styles** (read-only): List all custom styles created in the connected Recraft account.
- **Outpaint Image**: Extend one image beyond its borders using a prompt and an output size, side expansion, or zoom-out percentage.
- **Remix Image**: Create one to six prompt-free variations of an image at a required supported aspect ratio or model-compatible exact size.
- **Remove Image Background**: Remove the background from one raster or SVG image and return a public signed result URL that normally expires in about 24 hours.
- **Replace Image Background**: Detect and redraw one image's background from a prompt.
- **Transform Image From Prompt**: Create one to six new images from a source image and prompt with controlled similarity.
- **Vectorize Image**: Convert one PNG, JPEG, or WebP raster image into an editable SVG and return a public signed URL that normally expires in about 24 hours.
