# Picnie

Picnie automates template-based image and PDF generation, image processing, metadata operations, asset uploads, and OCR through its REST API.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/picnie/.

## Actions

- **Add Image Metadata**: Write EXIF-style metadata into a public JPEG image URL.
- **Add Image Watermark**: Overlay a public logo or image URL on a public background image while constraining the output to the required maximum width and height.
- **Add Text Watermark**: Overlay styled text on a public image URL.
- **Apply Image Filter**: Apply one supported Picnie visual filter to a public image URL.
- **Compress Image**: Compress a public image URL at a selected Picnie quality and optionally change its format.
- **Convert Image**: Convert a public image URL to WebP, JPEG, or PNG without asking the agent to choose a compression quality.
- **Create Image**: Generate one image from a stored Picnie template and dynamic field replacements.
- **Create Image Collection**: Generate multiple images from a Picnie template group and shared replacements.
- **Create PDF**: Generate a PDF from a stored Picnie template and dynamic field replacements.
- **Create Project**: Create a persistent Picnie project for organizing generated and processed media.
- **Crop Image**: Crop a public image URL to fixed dimensions using horizontal and vertical origin alignment.
- **Get Image Metadata** (read-only): Read dimensions, file properties, and EXIF metadata from a public JPEG image URL.
- **Get Template** (read-only): Get a Picnie template's complete layout and simplified dynamic fields for constructing generation replacements.
- **List Projects** (read-only): List all projects belonging to the connected Picnie account, including IDs needed by generation and processing tools.
- **List Templates** (read-only): List templates available to the connected Picnie account so an agent can select inputs for image or PDF generation.
- **Remove Image Background**: Use Picnie AI to remove the background from a public image URL.
- **Resize Image**: Resize a public image URL either to explicit pixel dimensions or by percentage.
- **Transcribe Image** (read-only): Extract text from a public image URL with Picnie OCR.
- **Upload Asset**: Upload an image file to the connected Picnie account's persistent media library and return its public URL.
