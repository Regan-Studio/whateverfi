# Ngram

Ngram creates AI-generated videos and images, manages rendering jobs, and delivers completion events through webhooks.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/ngram/.

## Actions

- **Cancel Video**: Irreversibly request cancellation of an in-progress Ngram video render.
- **Create Webhook Subscription**: Subscribe a public HTTPS endpoint to all account-wide Ngram video completion or failure events of one type.
- **Delete Webhook Subscription**: Delete an Ngram webhook subscription by ID.
- **Generate Image**: Spend Ngram credits to start one image generation job from a prompt, optionally using one to four public HTTPS reference images for…
- **Generate Video**: Spend Ngram credits to start one asynchronous video render from text or a public URL.
- **Get Account** (read-only): Return the authenticated Ngram account identity, including its id, email, and name.
- **Get Credits** (read-only): Return the connected account's plan and available, reserved, and effective credits.
- **Get Image** (read-only): Return an image job's current status and generated output by its UUID.
- **Get Render Options** (read-only): Return Ngram's live catalog of supported video and image capabilities, voices, styles, formats, durations, models, templates, and other…
- **Get Video** (read-only): Return a video's render status, progress, output URL, or failure information by video ID.
- **List Brand Kits** (read-only): Return the brand kits available to the connected account for use in generation requests.
- **List Images** (read-only): Return up to 100 account image jobs matching an optional status and created-at upper bound.
- **List Videos** (read-only): Return up to 100 account videos matching an optional render status and created-at lower bound.
- **List Webhook Subscriptions** (read-only): Return the account's video completion and failure webhook subscriptions.
