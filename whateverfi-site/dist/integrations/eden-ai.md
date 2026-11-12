# Eden AI

Eden AI provides one API for accessing and orchestrating AI models across multiple providers for text, image, audio, document, and multimodal workloads.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/eden-ai/.

## Actions

- **Count Anthropic Tokens** (read-only): Count input tokens for an Anthropic-format message request before generation, including system content and tool definitions.
- **Create Anthropic Message** (read-only): Generate a non-streaming Anthropic-compatible message with content blocks, stop reason, token usage, provider metadata, and Eden AI cost.
- **Create Chat Completion** (read-only): Generate a non-streaming OpenAI-compatible chat completion with a current Eden AI model and return its choices, token usage, provider, and…
- **Create Embeddings** (read-only): Create embeddings for one text or a batch of texts and return vectors with model, usage, provider, and cost metadata.
- **Create Response**: Create or continue a synchronous OpenAI Responses-compatible text response, stored by default for later retrieval, and return its ID,…
- **Discover AI Capabilities** (read-only): Find current Eden AI models or inspect Universal AI feature schemas, providers, pricing, and regions before an execution call.
- **Get Cost Overview** (read-only): Return current account credits and, when a date range is supplied, aggregated consumption filtered by provider or subfeature.
- **Get Response** (read-only): Retrieve a previously stored Responses API object by ID, including its status, text output, structured output, usage, and canonical model.
- **Moderate Text** (read-only): Classify one text or a batch of texts for safety categories and return flags, category scores, applied input types, provider, and cost.
- **Run Universal AI** (read-only): Run one synchronous Eden AI Universal AI feature using a current model and feature-specific input.
