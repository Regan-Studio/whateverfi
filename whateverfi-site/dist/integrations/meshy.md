# Meshy

Meshy provides generative 3D, image, motion, animation, model-processing, and Creative Lab APIs.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/meshy/.

## Actions

- **Cancel Creative Lab Task**: Cancel a Creative Lab task only while it is PENDING or IN_PROGRESS.
- **Create Animation Task**: Start a 3-credit task that applies either a selected library animation or a succeeded Text to Motion clip to a completed rigging task and…
- **Create Auto Split Task**: Split a succeeded untextured Meshy 6 or Meshy 7 model into separately printable parts and return the task ID.
- **Create Collapsible Fidget Task**: Start an entitled 6-credit task that generates a collapsible fidget directly from an image and return the task ID.
- **Create Convert Task**: Start a 1-credit task that converts a model into one or more requested formats.
- **Create Creative Lab Build**: Start a 3D build from a succeeded matching Creative Lab prototype.
- **Create Creative Lab Prototype**: Start an entitled image-to-prototype task for a fixed Creative Lab product.
- **Create Image to 3D Task**: Start a 3D generation task from one to four views of one object or a prior task's input images.
- **Create Image to Image Task**: Start a credit-consuming task that edits or restyles one to five reference images from a text instruction.
- **Create Multi-Color Print Task**: Start a 10-credit task that converts a GLB or FBX model from a prior Meshy task or direct URL into a limited-color 3MF for 3D printing,…
- **Create Print Analysis Task**: Start a free task that analyzes a GLB, GLTF, OBJ, FBX, or STL model from a prior Meshy task or direct URL for printability defects and…
- **Create Print Repair Task**: Start a 10-credit task that repairs a GLB, GLTF, OBJ, FBX, or STL model from a prior Meshy task or direct URL for 3D printing and return…
- **Create Remesh Task**: Start a 5-credit task that remeshes a model to the requested topology and polygon count, optionally resizes it, and exports the remeshed…
- **Create Resize Task**: Start a 1-credit task that scales a model by height, longest side, or automatic sizing and return the task ID.
- **Create Retexture Task**: Start a credit-consuming task that applies one text, image, or multiview style source to an existing 3D model.
- **Create Rigging Task**: Start a 5-credit task that rigs a GLB character with a biped or quadruped skeleton and return the task ID.
- **Create Text to 3D Task**: Start a new Text to 3D preview or fused geometry-and-texture task and return its task ID.
- **Create Text to Image Task**: Start a credit-consuming 2D image generation task from a text prompt.
- **Create Text to Motion Task**: Start an entitled motion-generation task from a text prompt and return its task ID.
- **Create UV Unwrap Task**: Start a 5-credit task that generates UV coordinates for a GLB model and return the task ID.
- **Delete Task**: Permanently delete a GA or Text-to-Motion task and its retained outputs.
- **Get Credit Balance** (read-only): Return the connected Meshy account's available credit balance before starting paid generation tasks.
- **Get Task** (read-only): Retrieve current status, errors, and available outputs for one task from a selected Meshy task family.
- **List Animation Library** (read-only): Search or filter Meshy's unpaginated animation catalog and return action IDs for use when creating animation tasks.
- **List Tasks** (read-only): Return one page of tasks for one selected Meshy task family, with an opaque cursor for safe continuation.
- **List Usage Records** (read-only): Return one page of terminal API-task usage and consumed credits for the connected Meshy team.
- **Refine Text to 3D Task**: Apply texture to a succeeded Text to 3D preview and return the new refine task ID.
