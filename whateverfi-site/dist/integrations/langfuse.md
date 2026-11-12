# Langfuse

Open source LLM engineering platform. Traces, evals, prompt management and metrics to debug and improve your LLM application.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/langfuse/.

## Actions

- **Create Score**: Attach an evaluation score to exactly one Langfuse trace, session, or dataset run, optionally narrowing a trace score to an observation.
- **Get Prompt** (read-only): Retrieve a Langfuse text or chat prompt by name, deployment label, or exact version, with optional dependency resolution.
- **List Annotation Queues** (read-only): List annotation queues configured for human evaluation in the connected Langfuse project.
- **List Dataset Items** (read-only): List dataset items, optionally scoped to a dataset, source trace or observation, or historical dataset version.
- **List Datasets** (read-only): List datasets available to the connected Langfuse project.
- **List Experiments** (read-only): List Langfuse experiments active in a required time range, optionally including metadata and directly attached scores.
- **List Models** (read-only): List Langfuse-managed and project-custom model pricing definitions used for usage and cost calculation.
- **List Observations** (read-only): Search Langfuse observations such as generations, spans, events, agents, and tool calls, selecting only the field groups needed.
- **List Scores** (read-only): Search numeric, boolean, categorical, text, and correction scores with subject and annotation context.
- **Query Metrics** (read-only): Run an aggregate Langfuse metrics query over observations or numeric, boolean, or categorical scores.
