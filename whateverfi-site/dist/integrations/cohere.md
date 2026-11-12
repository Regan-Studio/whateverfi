# Cohere

Cohere provides enterprise language and multimodal AI models for chat, embeddings, reranking, classification, and related workflows.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/cohere/.

## Actions

- **Cancel Batch**: Cancel one in-progress Cohere batch.
- **Cancel Embed Job**: Irreversibly cancel one active Cohere asynchronous embed job by ID.
- **Chat** (read-only): Generate one non-streaming Cohere chat response from an ordered conversation, optionally using documents, tools, structured output, or…
- **Check API Key** (read-only): Check whether the connected Cohere API key is valid and return its organization and owner identifiers when available.
- **Create Batch**: Start one asynchronous Cohere batch from an existing validated batch request dataset and return immediately without polling.
- **Create Dataset**: Upload a Cohere dataset and start asynchronous validation.
- **Create Embed Job**: Start one asynchronous Cohere embedding job for a validated embed-input dataset and return immediately without polling.
- **Delete Dataset**: Permanently delete a Cohere dataset by ID.
- **Detokenize Tokens** (read-only): Convert ordered Cohere token IDs back to text using the tokenizer for an explicit matching model.
- **Embed Inputs** (read-only): Create v2 embeddings from exactly one input form.
- **Get Batch** (read-only): Retrieve one asynchronous Cohere batch's status and counters by batch ID.
- **Get Dataset** (read-only): Retrieve one Cohere dataset by ID, including its asynchronous validation state, schema, files, parsing details, and metrics.
- **Get Dataset Usage** (read-only): Read the organization's Cohere dataset-storage consumption in bytes.
- **Get Embed Job** (read-only): Retrieve one Cohere asynchronous embedding job's current status, model, and input and output dataset identifiers by job ID.
- **Get Model** (read-only): Retrieve a Cohere model's endpoint compatibility, context size, features, tokenizer, and default sampling parameters by model name.
- **List Batches** (read-only): Return one page of asynchronous Cohere batches and their statuses without creating or cancelling work.
- **List Datasets** (read-only): Return one offset-based page of Cohere datasets, optionally filtered by type, validation status, or creation time.
- **List Embed Jobs** (read-only): List Cohere asynchronous embedding jobs and their current statuses.
- **List Models** (read-only): Discover Cohere model names and capabilities, optionally filtered to an endpoint or its default model.
- **Rerank Documents** (read-only): Rank text documents by relevance to a query and return the highest-scoring source documents.
- **Tokenize Text** (read-only): Convert text into token IDs with an explicit Cohere model.
- **Transcribe Audio** (read-only): Transcribe an uploaded audio file to text with a Cohere transcription model.
