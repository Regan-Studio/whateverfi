# Open source Hermes Agent alternative

Hermes Agent is Nous Research's open source AI agent, released under the MIT license. You can run it on your own machine. The project site also offers optional Nous Portal credits and cloud hosting.

The main difference is simplicity. Like Grok Bot, WhatEverFi is just chat: you set up the bot and manage it from that chat. Hermes documents a desktop app and a command-line quickstart. Desktop onboarding can reach a first message without the CLI. The quickstart is an installer, a setup wizard, a model command, and config files. Messaging platforms are a separate gateway.

Both are open source and can run on hardware you control. This comparison uses each project's public docs. It is not a measured benchmark.

## Setup

WhatEverFi's self-host path is the published Docker installer, or the desktop app starting that stack on this computer. You create an account and connect a model. From there it is just chat, on the web, desktop, and mobile apps. A new bot interviews you about the work, and you manage the bot from that chat. Routines are readable Markdown.

Hermes Desktop is a native app on macOS, Windows, and Linux. It shares config, API keys, sessions, skills, and memory with the CLI. The desktop guide says first-run onboarding gets you to a first message in seconds, and Choose provider later skips provider setup. Settings cover providers, models, tools, credentials, MCP servers, the gateway, and sessions. The app starts its own local `hermes serve` backend. That chat does not require the CLI or the web dashboard.

The CLI quickstart is a separate path: a shell install (`install.sh` on Linux, macOS, and WSL2; a PowerShell script on Windows), then `hermes setup` (Quick Setup with Nous Portal, Full Setup, or Blank Slate) and `hermes model`. Secrets go in `~/.hermes/.env` and other settings in `~/.hermes/config.yaml`. The first terminal chat is `hermes` or `hermes --tui`. Telegram, Discord, Slack, WhatsApp, Signal, Email, and other platforms use `hermes gateway setup` and a gateway process you start separately. The desktop guide says that messaging gateway is a different process from the app's local backend.

## Day-to-day management

Day to day, you manage WhatEverFi from the same chat. Schedules, memory, and approval boundaries stay with that bot. Optional connectors can attach Slack, WhatsApp, Telegram, iMessage via Sendblue, and Feishu/Lark. They are not required to use the product.

Hermes Desktop manages providers, models, tools, credentials, and sessions in Settings. The CLI quickstart sends a broken setup through `hermes doctor`, `hermes model`, `hermes setup`, `hermes sessions list`, and `hermes gateway status`. Tool access is `hermes tools`. Cron, skills, and MCP servers are further configuration. Messaging platforms still need that separately running gateway.

Public descriptions as of October 7, 2026.

## Comparison

| Topic | WhatEverFi | Hermes Agent |
| --- | --- | --- |
| Setup | Docker installer or the desktop app's local stack, then an account and a model. After that WhatEverFi is just chat: a new bot interviews you, and you manage it from the chat. | Desktop: first-run onboarding in the app, with Choose provider later if you skip a provider. The app shares `~/.hermes/` with the CLI and starts its own local backend. CLI: `hermes setup` and `hermes model`, then `hermes` or `hermes --tui`. Messaging platforms use `hermes gateway setup` and a separate gateway process. |
| Day-to-day management | You manage the bot from the same chat on the web, desktop, and mobile apps. Routines are readable Markdown and can run on a schedule. A bot can pause for approval at a boundary you set. | Desktop settings cover providers, models, tools, credentials, MCP, and sessions. The CLI recovery commands are `hermes doctor`, `hermes model`, `hermes setup`, and `hermes gateway status`. Chat apps need a gateway process kept running apart from the desktop's local backend. |
| Product | Open source platform for persistent AI teammates. WhatEverFi is in beta. | Nous Research describes a self-improving agent: it creates skills from experience, keeps memory across sessions, and can run scheduled jobs. The README also documents a terminal UI and a messaging gateway. |
| Source | Apache-2.0 source on GitHub. | MIT source on GitHub, built by Nous Research. |
| Model | Bring your own model credentials. Multiple providers are supported, including a custom model server. Each bot can use a different model. | You choose a provider with `hermes model`. The quickstart lists many, including Nous Portal, OpenAI, Anthropic, OpenRouter, Google, a custom OpenAI-compatible endpoint, and local servers such as Ollama and LM Studio. It says a model needs at least 64,000 tokens of context. |
| Computer | Sandboxed browser, terminal, files, and a graphical desktop. Docker is the default local computer, with optional E2B, Daytona, CreateOS, Boat, or a trusted local computer. | The README lists seven terminal backends: local, Docker, SSH, Singularity, Modal, Daytona, and Vercel Sandbox. The quickstart shows `hermes config set terminal.backend` for Docker or SSH. The security guide says dangerous-command checks are skipped inside Docker, Singularity, Modal, Daytona, and Vercel Sandbox, because the container is the boundary. |
| Connections | Composio or Pipedream Connect, or a Treg, remote MCP, or OpenAPI source you install. Connector credentials are encrypted on the server and are not returned by the API. | MCP servers are configured in `config.yaml`. The project site also describes web search, browser automation, vision, image generation, and text-to-speech, including a Nous Portal Tool Gateway that bundles several of those. |
| Where you talk to it | The WhatEverFi web, desktop, and mobile apps are the main surface. Optional connectors can attach Slack, WhatsApp, Telegram, iMessage via Sendblue, and Feishu/Lark. | Hermes Desktop is a chat window that shares sessions with the CLI and TUI. The gateway adds Telegram, Discord, Slack, WhatsApp, Signal, Email, and other platforms, and the desktop guide says that gateway is a separate process. |
| Ongoing work | Each bot keeps conversations, memory, routines, and history. A bot can delegate to a peer bot or a short-lived subagent. | The README describes agent-curated memory, skills that can be created after a task, a built-in cron scheduler, and isolated subagents. Scheduled jobs can be delivered back to a connected platform. |
| Approval | A bot can pause for approval when a task crosses a boundary you set. Actions are recorded in an audit log. | The security guide documents approval for dangerous shell commands (`approvals.mode` defaults to smart), file-write checks, and allowlists for who can message the gateway. Container backends skip the dangerous-command check. Cron and other unattended sessions deny those commands unless you change that setting. |

## Why open source and self-hosted

- The source is Apache-2.0 and public on GitHub.
- You can run the published Docker images, or a source checkout, on a machine you control. The desktop app can start that stack locally or connect to a server you already run.
- You bring the model credentials. Connector credentials are encrypted on the server and are not returned by the API.
- Routines are readable Markdown. A bot can pause for approval at a boundary you set, and actions are recorded in an audit log.
- The web app, the Electron desktop app, and the Expo mobile app are clients of the same API.

## Get started

Start on WhatEverFi Cloud, in beta, or self-host.

- [Self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
- [View on GitHub](https://github.com/Regan-Studio/whateverfi)

## FAQ

### Is WhatEverFi simpler to set up than Hermes Agent?

The documented paths are different. WhatEverFi's self-host guide is a Docker installer, or the desktop app starting that stack, then an account and a model. After that WhatEverFi is just chat, and you manage the bot from that chat. Hermes Desktop can reach a first message from in-app onboarding without the CLI, and you manage providers and tools in Settings. The CLI quickstart is `hermes setup`, `hermes model`, config files under `~/.hermes/`, and a terminal chat. Messaging apps are an extra gateway process on either path.

### Is WhatEverFi a drop-in replacement for Hermes Agent?

No. WhatEverFi does not import Hermes config, skills, or gateway sessions. Both are open source agents you can run yourself. They differ in license, interface, and how much of the setup lives in a chat versus Hermes's CLI and desktop settings.

### Do both keep the software on my machine?

Yes for the software you run. A WhatEverFi deployment stores its database and bot data on your host. Hermes stores config, memory, and skills on the machine where you install it, by default under `~/.hermes/`. In both cases, prompts go to the model provider you configure. Hermes's site also offers optional Nous Portal and cloud hosting.

### Where do the Hermes details come from?

The Hermes column summarizes the Hermes Agent site, the quickstart, the configuration guide, the security guide, the desktop guide, and the project README on GitHub. This is Nous Research's Hermes Agent, not a different product with the same name. Check those pages before you rely on a specific command.

## Sources

- [Hermes Agent](https://hermes-agent.nousresearch.com/)
- [Hermes Agent quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)
- [Hermes Agent configuration](https://hermes-agent.nousresearch.com/docs/user-guide/configuration)
- [Hermes Agent security](https://hermes-agent.nousresearch.com/docs/user-guide/security)
- [Hermes Desktop](https://hermes-agent.nousresearch.com/docs/user-guide/desktop)
- [Hermes Agent source](https://github.com/NousResearch/hermes-agent)
