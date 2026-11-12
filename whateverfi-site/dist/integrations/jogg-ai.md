# JoggAI

JoggAI provides APIs for creating AI avatar, product, lip-sync, template, and translated videos and managing their supporting media assets.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/jogg-ai/.

## Actions

- **Animate Photo Avatar**: Create a reusable animated avatar from a photo-avatar image.
- **Animate Product Avatar**: Add motion and a voice to a selected JoggAI product-avatar image generation.
- **Create Asset Upload URL**: Create a signed URL for uploading an asset to JoggAI.
- **Create Lip Sync Video**: Start an asynchronous lip-sync video from publicly reachable video and audio URLs.
- **Create Product**: Create product information from exactly one source.
- **Create Product Video**: Start a product video using a saved product and nested video, avatar, voice, audio, and script settings.
- **Create Product Video Previews**: Generate product-video previews for one or more visual styles.
- **Create Talking Avatar Video**: Start a talking-avatar video using an avatar and either a text script or hosted audio.
- **Create Template Video**: Start rendering a JoggAI v2 template with typed text, script, image, or video variables and optional avatar, voice, captions, and music…
- **Create Webhook**: Create a JoggAI webhook endpoint with a callback URL, delivery status, and event subscriptions.
- **Delete Webhook**: Permanently delete one JoggAI webhook endpoint.
- **Generate AI Scripts**: Start asynchronous AI script generation from a saved product or inline product details.
- **Generate Photo Avatar Image**: Start AI photo-avatar image generation using JoggAI's exact demographic, style, model, and aspect-ratio modes.
- **Generate Product Avatar Images**: Start asynchronous generation of one to four product-avatar images from a public product image and an existing avatar, reference image, or…
- **Get Account and Credit Balance** (read-only): Return the connected JoggAI user and remaining credit balance.
- **Get AI Script Task** (read-only): Check an AI script generation task and return generated scripts when completed.
- **Get Lip Sync Video** (read-only): Check a lip-sync task and return its output URLs and duration when successful.
- **Get Photo Avatar** (read-only): Check photo-avatar motion generation and return the reusable avatar details when complete.
- **Get Photo Avatar Image** (read-only): Check photo-avatar image generation and return the generated image URLs and keys when ready.
- **Get Product Avatar** (read-only): Check product-avatar motion generation and return the reusable avatar when complete.
- **Get Product Avatar Image Task** (read-only): Check a product-avatar image generation batch and return its status summary and generated image candidates.
- **Get Product Video** (read-only): Check one product video and return its generated media when available.
- **Get Talking Avatar Video** (read-only): Check a talking-avatar video and return its media URLs when completed.
- **Get Template Video** (read-only): Check a template-rendered video and return its output details when complete.
- **Get Video Translation** (read-only): Check a video translation and return translated media when complete.
- **List Avatars** (read-only): List public, instant, photo, or product avatars available for JoggAI video generation.
- **List Creation Assets** (read-only): Browse one music, template, visual-style, or voice catalog used to create JoggAI media.
- **List Product Previews** (read-only): List generated JoggAI product-video previews and their statuses one page at a time.
- **List Product Videos** (read-only): List product videos with status and sort filters, one bounded page at a time.
- **List Translation Languages** (read-only): Return currently supported lowercase target-language identifiers for JoggAI video translation.
- **List Webhook Events** (read-only): Return event identifiers that can be subscribed to by a JoggAI webhook.
- **List Webhooks** (read-only): List webhook endpoints registered on the connected JoggAI account.
- **Render Product Video Preview**: Render one selected product preview into a final video.
- **Translate Video**: Start asynchronous video translation with optional audio-only translation, dubbing, lip sync, subtitles, and dynamic duration.
- **Update Product**: Update an existing JoggAI product's descriptive fields.
- **Update Webhook**: Fully replace an existing JoggAI webhook's callback URL, delivery status, and event subscriptions.
