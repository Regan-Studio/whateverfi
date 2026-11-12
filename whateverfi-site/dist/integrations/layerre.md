# Layerre

Layerre automates the creation of image and PDF variants from reusable Canva-based design templates.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/layerre/.

## Actions

- **Analyze Canva Design** (read-only): Extract colors, fonts, and images from a public Canva share URL without creating a documented template resource.
- **Create Layer**: Create a text or image layer on a template and return the new layer.
- **Create Template**: Import a public Canva share URL as a Layerre template.
- **Create Variant**: Synchronously render one template variant and return its signed output URL.
- **Create Variants in Bulk**: Synchronously render multiple variants with one shared output format.
- **Delete Layer**: Soft-delete one layer from a Layerre template and confirm the request succeeded.
- **Delete Template**: Soft-delete one Layerre template and confirm the request succeeded.
- **Delete Variant**: Soft-delete one generated Layerre variant and confirm the request succeeded.
- **Get Layer** (read-only): Return one template layer, refreshing its signed image URL when needed.
- **Get Template** (read-only): Return one template with its layers and refreshed signed image URLs.
- **Get Variant** (read-only): Return one generated variant with a refreshed signed output URL.
- **List Template Variants** (read-only): Return one page of a template's generated variants with refreshed signed URLs and an opaque cursor for the next page.
- **List Templates** (read-only): Return one page of the connected account's templates, most recently modified first, with an opaque cursor for the next page.
- **Update Layer**: Update a layer and return the refreshed layer.
- **Update Template**: Update a template and return the refreshed template.
