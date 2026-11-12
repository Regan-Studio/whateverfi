# LLM API

LLM API provides a unified inference API for text, embeddings, images, audio, video, files, and batch workloads across multiple AI providers.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/llm-api/.

## Actions

- **Cancel Batch**: Request best-effort cancellation of an in-progress batch.
- **Count Anthropic Message Tokens** (read-only): Count input tokens for an Anthropic-compatible message request without generating a model response.
- **Create Anthropic Message**: Generate one complete, non-streaming Anthropic-compatible message with flexible content blocks, system prompts, and tool use.
- **Create Chat Completion**: Generate a complete, non-streaming OpenAI-compatible chat response from role-based messages, optionally using tools, multimodal content,…
- **Create Embeddings**: Create vector embeddings for one text or a batch of texts with a selected embedding model.
- **Create Response**: Generate one complete, non-streaming OpenAI Responses-compatible result from text or structured input, preserving reasoning and tool items.
- **Delete File**: Permanently delete a caller-owned or explicitly authorized project file.
- **Discover Models** (read-only): Return one model's full live capabilities by ID, or browse a compact, bounded view of the live model catalog using local capability filters.
- **Get Account and Credits** (read-only): Return the connected user, project, organization, purchased and bonus credit balances, funding mode, and balance gating in one…
- **List or Get Batches** (read-only): Return one asynchronous batch and its latest lifecycle, token, and cost status by ID, or one provider-default page of project batches when…
- **List or Get Files** (read-only): Return metadata for one project file by ID, or one provider-default page of project file metadata when no file ID is supplied.
- **Submit Batch**: Create an asynchronous batch from an existing purpose=batch file ID, or upload a JSONL input file with purpose=batch and create the batch…
