# Memelord MCP

Search meme templates, generate and edit image and video memes, upload media, and use Jester through Memelord’s hosted MCP server. Generation and editing tools spend the connected account’s usage balance; discovery, uploads, job status, and account information are free.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/memelord-mcp/.

## Actions

- **Check video status** (read-only): Check one video job from any video-producing tool.
- **Create media upload url**: Start a direct upload for a file too large to send inline (over 3 MB), typically a video.
- **Edit meme**: Change the text of an image meme you already generated.
- **Edit video meme**: Rewrite the caption of a video meme and re-render it.
- **Generate ai meme**: AI-remixed image memes.
- **Generate caption meme**: Classic caption memes.
- **Generate video meme**: Generate AI-captioned video memes from a topic.
- **Get account** (read-only): Return the authenticated Memelord account.
- **Get meme template** (read-only): Fetch one template asset by id.
- **Get trending memes** (read-only): What's trending right now.
- **List image tools** (read-only): Catalog of one-shot image tools you can run with run_image_tool.
- **List video jobs** (read-only): List your recent video jobs from every video tool, newest first, with status and MP4 URLs.
- **List video models** (read-only): List the pro AI video models this account can run — Kling 3.0, Kling O3, Seedance, Wan 3.0, Cinema Studio 4.0 (run with run_video_model) —…
- **Run agent**: Hand a natural-language request to Jester, Memelord's full meme agent — the same brain behind the Memelord chat.
- **Run genjutsu**: Genjutsu character transpose.
- **Run image tool**: Run one specific image tool from list_image_tools by tool_id — e.g.
- **Run video model**: Generate new AI video footage with one model from list_video_models.
- **Search memes** (read-only): Search Memelord's template library of memes, video clips, and stickers.
- **Upload media**: Upload the user's own photo or video into their Memelord Uploads and get back an https url to pass to generate_ai_meme…
