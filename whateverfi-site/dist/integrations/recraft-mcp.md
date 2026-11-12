# Recraft MCP

Generate and edit visual assets, manage custom styles, and inspect account information through Recraft’s provider-hosted MCP server.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/recraft-mcp/.

## Actions

- **Call agent**: Talk to Recraft's Design Agent in a chat.
- **Create style**: Create a custom style from one or more reference images.
- **Creative upscale**: Input must have at most 4194304 pixels (4 MP), sides from 256 to 4096 pixels, and at most 48 MiB of raster data.
- **Crisp upscale**: Input must have at most 4194304 pixels (4 MP), sides from 32 to 4096 pixels, and at most 48 MiB of raster data.
- **Delete style**: Delete a custom style by its style_id.
- **Erase region**: Erase a masked region from an image, filling it with content-aware background.
- **Generate background**: Generate a background for a masked region of an image based on a text prompt.
- **Generate image**: Generate an image from a text prompt.
- **Get style** (read-only): Get details of a specific style by its style_id.
- **Get user** (read-only): Get information about the current user (ID, email, name, and the remaining credits balance on the account).
- **Image edit**: Edit one or more input images according to a text prompt, producing new image(s).
- **Image to image**: Transform an existing image based on a text prompt.
- **Inpaint image**: Fill in a masked region of an image based on a text prompt.
- **List basic styles** (read-only): Lists the built-in styles configured in this environment.
- **List styles** (read-only): List all custom styles created by the current user.
- **Remove background**: Remove the background from an image.
- **Replace background**: Replace the background of an image based on a text prompt.
- **Request upload url**: Issue an upload URL for a direct image upload.
- **Subscription plans** (read-only): List available Recraft subscription plans with their plan IDs, credits granted per refill period, and prices.
- **Suggest model** (read-only): Suggest a supported image generation or instruction-editing model for a given user request.
- **Variate image**: Generate variations of an existing image.
- **Vectorize image**: Convert a raster image to a vector format.
