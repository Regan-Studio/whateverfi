# Tripo3D

Tripo3D provides AI-powered 3D model and image generation, model processing, mesh operations, animation, file upload, task tracking, and account usage APIs.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/tripo3d/.

## Actions

- **Check Model Riggability**: Submit an asynchronous check that determines whether a GLB model can be rigged and recommends a rig type.
- **Complete Mesh**: Submit a credit-consuming asynchronous task to complete selected segmented parts or cap open boundaries.
- **Convert Model**: Submit a credit-consuming asynchronous task to convert a model format and optionally alter topology, textures, orientation, scale, or…
- **Create Presigned Upload**: Reserve a presigned URL and file token for a client-managed upload.
- **Decimate Mesh**: Submit a credit-consuming asynchronous task to reduce a model's polygon count using basic decimation or smart retopology.
- **Edit Image**: Submit a credit-consuming asynchronous task to edit one or more reference images.
- **Edit Multiview**: Submit a credit-consuming asynchronous task to apply view-specific text edits to a multiview set.
- **Generate Image from Text**: Submit a credit-consuming asynchronous image-generation task from a text prompt.
- **Generate Model from Image**: Submit a credit-consuming asynchronous task to generate a 3D model from one image, file token, or successful image-task UUID.
- **Generate Model from Multiview**: Submit a credit-consuming asynchronous task to generate a 3D model from multiple views or one multiview task UUID.
- **Generate Model from Text**: Submit a credit-consuming asynchronous task to generate a 3D model from text.
- **Generate Multiview from Image**: Submit a credit-consuming asynchronous task to generate front, left, back, and right views from one image.
- **Generate Splat from Image**: Submit a credit-consuming asynchronous task to generate a Gaussian Splat scene from one image.
- **Get Balance** (read-only): Get the authenticated account's available and frozen Tripo credit balances.
- **Get Task** (read-only): Get status, progress, errors, credits, timestamps, and type-specific output for one asynchronous task.
- **Get Tasks** (read-only): Get snapshots for up to 100 asynchronous task UUIDs in one request.
- **Import Model**: Submit an asynchronous task to import an external model into Tripo for later processing.
- **List Usage** (read-only): Return one newest-first page of per-task credit usage and an opaque continuation cursor.
- **Retarget Animation**: Submit a credit-consuming asynchronous task to apply one or up to five preset animations to a rigged model.
- **Rig Model**: Submit a credit-consuming asynchronous task to attach a biped or creature skeleton to a model.
- **Segment Mesh**: Submit a credit-consuming asynchronous task to split a model into geometry-based or semantically labeled parts.
- **Texture Model**: Submit a credit-consuming asynchronous task to apply or regenerate textures on an existing model.
- **Upload File**: Upload one image or model to Tripo3D and return a reusable file token for generation or processing tools.
