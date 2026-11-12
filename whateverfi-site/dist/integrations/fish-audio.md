# Fish Audio

Fish Audio provides speech synthesis, transcription, voice cloning, and conversational voice-agent APIs.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/fish-audio/.

## Actions

- **Configure Agent**: Partially update an agent's draft prompt, voice, and core conversation behavior without publishing it.
- **Create Agent**: Create a private Fish Audio agent, optionally with an initial prompt, voice, and core conversation settings.
- **Delete Agent**: Permanently delete a Fish Audio agent by ID.
- **Get Account Balance** (read-only): Return the connected Fish Audio account's package allowance and API credit so an agent can distinguish free quota from paid credit.
- **Get Agent** (read-only): Return an agent's workspace metadata together with its current draft conversation configuration.
- **Get Voice Model** (read-only): Get a Fish Audio voice model by ID and inspect whether it is trained and suitable for synthesis.
- **List Agent Sessions** (read-only): List conversation sessions for the workspace or a specific agent, filtered by lifecycle status, caller, or creation time.
- **List Agents** (read-only): Search agents in the connected Fish Audio workspace, including draft or archived agents when requested.
- **List Voice Models** (read-only): Search public or workspace-owned Fish Audio voice models.
- **Synthesize Speech**: Generate downloadable speech with Fish Audio's free S2.1 model using one or more discovered voice model IDs.
