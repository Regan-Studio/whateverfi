# Black Forest Labs

Black Forest Labs provides hosted FLUX models for generating and editing images and videos, polling asynchronous results, managing fine-tunes, and checking project credits.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/bfl/.

## Actions

- **Deblur Image**: Submit a paid asynchronous deblurring of an authorized image.
- **Edit Video**: Submit a paid asynchronous prompt-directed edit of an authorized source video.
- **Erase Image Object**: Submit a paid asynchronous removal of a masked object from an authorized image.
- **Generate Fine-Tuned Image**: Submit a paid asynchronous FLUX fine-tuned image generation using an existing LoRA.
- **Generate or Edit FLUX.2 Klein Image**: Submit a paid asynchronous FLUX.2 Klein image generation or authorized reference-image edit with the stable 4B or 9B model.
- **Generate or Edit Image**: Submit a paid asynchronous FLUX 3 image generation or authorized reference-image edit.
- **Generate Video**: Submit a paid asynchronous FLUX 3 video task from text, authorized keyframes, a source video, or a prior draft cache.
- **Get Credit Balance** (read-only): Return the connected BFL project's current credit balance so funds can be checked before a paid generation or editing request.
- **Get Fine-Tune** (read-only): Return details for one BFL fine-tune by ID.
- **Get Generation Result** (read-only): Fetch one status update for an asynchronous BFL task using its exact returned polling URL or task ID.
- **List Fine-Tunes** (read-only): Return all fine-tunes accessible to the connected BFL project in one unpaginated response.
- **Outpaint Image**: Submit a paid asynchronous expansion of an authorized image onto a larger canvas of at most 4,194,304 pixels.
- **Upscale Video**: Submit a paid asynchronous upscale for the first 20 seconds of an authorized video, with an optional content prompt and 1.5x-3x scale…
- **Virtual Try-On**: Submit a paid asynchronous virtual try-on using authorized person and garment images.
