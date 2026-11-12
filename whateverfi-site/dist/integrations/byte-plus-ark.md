# BytePlus Ark

BytePlus Ark provides regional language, vision, image, embedding, file, response, and asynchronous video generation APIs. Chat and image generation support Johor and Dublin; the other actions require Johor.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/byte-plus-ark/.

## Actions

- **Cancel or Delete Video Task**: Irreversibly cancel a video generation task when it is queued, or permanently delete its task record when it is terminal.
- **Create Video Task**: Start a potentially billable asynchronous video generation task and return its task ID.
- **Get Video Task** (read-only): Retrieve one video generation task's status, failure details, and generated output URLs by task ID.
- **List Video Tasks** (read-only): Return one page of video generation tasks, optionally filtered by status, task IDs, model, or service tier.
