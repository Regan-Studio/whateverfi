# Fireworks AI

Fireworks AI provides APIs for serverless model inference, fine-tuning, deployments, datasets, evaluations, and account management.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/fireworks-ai/.

## Actions

- **Create Chat Completion**: Generate one non-streaming OpenAI-compatible chat completion from role-based messages using a caller-supplied Fireworks model or…
- **Create Embeddings**: Create embedding vectors for one or more caller-provided inputs using a caller-supplied Fireworks embedding model.
- **Generate Model Response**: Generate one non-streaming Responses API result, optionally continuing a stored response or using function, MCP, or SSE tools.
- **Get Deployment** (read-only): Return configuration and serving status for one Fireworks deployment without scaling or modifying it.
- **Get Model** (read-only): Return metadata and status for one model resource in a Fireworks account.
- **List Accounts** (read-only): Return one page of Fireworks accounts accessible to the API key so an agent can obtain account IDs for model and deployment discovery.
- **List Deployments** (read-only): Return one page of deployment resources in a Fireworks account for deployment ID discovery and serving-capacity and status inspection.
- **List Models** (read-only): Return one page of model resources in a Fireworks account for model-ID discovery and status inspection.
- **Rerank Documents**: Rank a provided document list by relevance to a query using an optional caller-supplied Fireworks reranker model.
