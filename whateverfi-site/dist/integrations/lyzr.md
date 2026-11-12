# Lyzr

Build, run, evaluate, and manage AI agents and related Lyzr Studio services, including voice, responsible AI, simulation, memory, scheduling, workflows, and knowledge bases.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/lyzr/.

## Actions

- **Add Memory Messages**: Store a batch of conversation messages in Lyzr Memory for an owner, session, and optional agent, with optional synchronous fact extraction.
- **Chat With Agent**: Send a message or message history to an active Agent Studio agent and return its synchronous inference response for a session.
- **Clear Memory Session**: Permanently clear messages and memories for one explicit owner and session in Lyzr Memory.
- **Create Agent**: Create a single-task Agent Studio agent with an LLM provider, model, instructions, and optional tool configuration.
- **Create Agent Schedule**: Create a cron schedule that runs one Agent Studio agent with a message in a specified timezone.
- **Delete Agent**: Permanently delete one Agent Studio agent by ID.
- **Delete Agent Schedule**: Permanently delete one agent cron schedule and remove its associated scheduler job.
- **Evaluate Text With RAI Policy**: Apply one owned Responsible AI policy to text and return processed text, block decisions, warnings, detections, and redactions.
- **Get Agent** (read-only): Return the current configuration and status of one Agent Studio agent by ID.
- **Get Knowledge Base** (read-only): Return one Lyzr Knowledge Base configuration by its known RAG configuration ID.
- **Get Simulation Overview** (read-only): Return aggregate Agent Simulation counts and average evaluation pass rate for the connected workspace.
- **List Agent Schedules** (read-only): Return one page of agent cron schedules, optionally filtered by user, agent, or active state.
- **List Agent Simulation Issues** (read-only): Return recent performance, error, and Responsible AI issues across monitored agents, optionally filtered by resolution and severity.
- **List Agents** (read-only): Return all Agent Studio agents owned by the connected API key, including IDs needed by lifecycle and inference tools.
- **List RAI Policies** (read-only): Return Responsible AI policies owned by the authenticated user, including policy IDs and enabled guardrail configuration.
- **List SuperFlow Executions** (read-only): Return one page of SuperFlow execution records, optionally filtered by workflow and execution status.
- **List SuperFlow Workflows** (read-only): Return all SuperFlow workflow definitions accessible to the connected API key, including workflow IDs and graph data.
- **List Voice Agents** (read-only): Return saved Voice agents accessible to the connected organization, including IDs used to filter transcripts.
- **List Voice Transcripts** (read-only): Return one page of accessible Voice call transcripts, optionally filtered by agent, session, organization, or date range.
- **Retrieve Knowledge** (read-only): Retrieve relevant documents from a known Lyzr Knowledge Base using configurable basic, MMR, hypothetical-document, or time-aware retrieval.
- **Search Memories** (read-only): Semantically search stored memories for one owner, within one session or across that owner's sessions, using Lyzr's hybrid vector and BM25…
- **Set Agent Status**: Activate or deactivate an Agent Studio agent.
