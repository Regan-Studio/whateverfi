# Cradl AI

Cradl AI is an API-first platform for building and operating AI-powered document extraction workflows.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/cradl-ai/.

## Actions

- **Download File** (read-only): Download document, OCR, annotation, prediction, or run-variable content from a Cradl AI file URL returned by another Cradl AI tool.
- **Get Agent Run** (read-only): Get the current state and outputs of one Cradl AI agent run.
- **Get Document** (read-only): Get metadata, processing links, and annotations for one Cradl AI document by ID.
- **Get Prediction** (read-only): Get one extracted prediction, including its status, fields, errors, and downloadable output references.
- **List Agent Runs** (read-only): List processing runs for an agent, optionally filtered by status or creation/update time.
- **List Agents** (read-only): List document-processing agents available to the connected Cradl AI workspace.
- **List Documents** (read-only): List documents in the connected Cradl AI workspace and discover document IDs and content/output file URLs.
- **List Predictions** (read-only): List extracted predictions, optionally filtered by model, and discover prediction IDs and output file URLs.
- **Process Document**: Create a persistent Cradl agent run and document, then upload one document for asynchronous extraction in a single call.
- **Start Agent Run**: Create a processing run for an existing Cradl AI agent.
- **Upload Document to Run**: Create a document attached to a Cradl AI agent run and upload its PDF, image, or email bytes.
