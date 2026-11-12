# Vercel AI Gateway

Access Vercel AI Gateway's model discovery, inference, generation, and usage APIs through a unified AI model gateway.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/vercel-ai-gateway/.

## Actions

- **Compact Response**: Compact a long OpenAI Responses conversation into replayable context through Vercel AI Gateway.
- **Count Message Tokens** (read-only): Estimate input tokens for Anthropic-format messages, system content, and tools before sending a model request through Vercel AI Gateway.
- **Create Anthropic Message**: Create one non-streaming Anthropic Messages-compatible result through Vercel AI Gateway, with multimodal content, tools, extended…
- **Create Chat Completion**: Create one non-streaming OpenAI Chat Completions-compatible result through Vercel AI Gateway, with multimodal messages, tools, structured…
- **Create Embeddings**: Generate OpenAI-compatible vector embeddings through Vercel AI Gateway for text or token inputs, with optional dimensions and routing…
- **Edit Images**: Create edited images from up to 16 HTTPS or base64 data-URL source images and a text instruction.
- **Evaluate State**: Evaluate one shared state against one or more typed choice, score, or boolean questions using an AI Gateway evaluation model.
- **Evaluate with TypeSafe API**: Evaluate one shared state through AI Gateway's TypeSafe-compatible System One API.
- **Generate Images**: Generate one or more images from a text prompt through an image-only Vercel AI Gateway model.
- **Generate Response**: Generate one non-streaming OpenAI Responses-compatible result through AI Gateway, with optional instructions, tools, structured output,…
- **Generate Speech**: Generate spoken audio from text through a Vercel AI Gateway speech model.
- **Get Credit Balance** (read-only): Return the connected team's remaining AI Gateway credit balance and lifetime credit usage in USD.
- **Get Generation** (read-only): Look up cost, token usage, provider routing, latency, and finish details for one completed Vercel AI Gateway generation.
- **Get Model** (read-only): Return detailed capabilities, modalities, limits, tags, and pricing for one exact Gateway model ID.
- **Get Model Endpoints** (read-only): Compare provider endpoints serving one Vercel AI Gateway model, including limits, pricing, caching, availability, throughput, and latency.
- **Get Spend Report** (read-only): Query aggregated Vercel AI Gateway spend and token usage.
- **List Model Catalog** (read-only): List AI Gateway model-to-provider routes and capability tags, with bounded local filtering by model text, provider, or tag.
- **List TypeSafe Models** (read-only): List evaluation models available through AI Gateway's TypeSafe-compatible API, including each accepted model name, description, and…
- **Rerank Object Documents**: Rank structured object documents by relevance through the Cohere v1 route, using selected rank fields and optionally returning each source…
- **Rerank Text Documents**: Rerank string documents through the current Cohere v2 compatibility endpoint.
- **Search Models** (read-only): Search the AI Gateway model catalog by text, model type, and tags, returning capability and pricing metadata for matching models.
- **Transcribe Audio**: Transcribe base64-encoded recorded audio through a Vercel AI Gateway transcription model.
