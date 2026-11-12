# Open source Claude Duet alternative

Claude Duet is Anthropic's proactive personal agent, released as a research preview on October 21, 2026. You message it like a person. It sends a morning brief, checks your connected accounts, and works on a cloud computer Anthropic runs.

WhatEverFi is open source software for persistent AI teammates. You run it, you choose the model, and you can have more than one bot. For Claude models, connect an Anthropic API key.

Public descriptions as of October 24, 2026.

## Comparison

| Topic | WhatEverFi | Claude Duet |
| --- | --- | --- |
| Product | Open source platform for persistent AI teammates. WhatEverFi is in beta. | A standalone Anthropic app with one ongoing thread, by text or voice. Anthropic says it is for professionals and small business owners. |
| Who runs it | You do when you self-host with Docker or point the desktop and mobile apps at a server you operate. WhatEverFi Cloud, in beta, runs it for you. | Anthropic. Duet works on its own cloud virtual machine with a browser. The help center says you cannot watch or take over that browser. |
| Source | Apache-2.0 source on GitHub. | Hosted service from Anthropic. Its pages do not describe self-hosting. |
| Model | Bring your own model credentials, including ChatGPT sign-in, API keys, and a local server. Each bot can use a different model. | Claude Opus 5.5. The help center says you cannot choose a model. |
| Connections | Composio or Pipedream Connect, or a Treg, remote MCP, or OpenAPI source you install. Bots also get a sandboxed browser, terminal, files, and a graphical desktop. | Claude's connectors and plugins, which Anthropic puts at more than 6,000. The help center names Gmail, Google Calendar, Google Drive, Slack, QuickBooks, HubSpot, Docusign, and Calendly. Microsoft 365 is not available yet. Purchases use Link by Stripe or Shop Pay with one-time virtual cards. |
| Ongoing work | Each bot keeps conversations, memory, routines, and history. Routines are readable Markdown and can run on a schedule. A bot can delegate to a peer bot or a short-lived subagent. | A morning brief, then check-ins on your accounts. The announcement says every few hours; the help center says set intervals. Duet uses your Claude memory, skills, and connectors. |
| Control and availability | A bot can pause for approval at a boundary you set, and actions are recorded in an audit log. The web, desktop, and mobile clients are available with self-hosting now. | Duet asks before it sends a message, makes a payment, signs a document, or deletes anything. Trading securities, moving money between accounts, and accessing someone else's account are blocked. Pro and Max only, in the US, from a waitlist. Usage counts against the plan's limits. |

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

### Can WhatEverFi use my Claude subscription?

Use an Anthropic API key for Claude models. Pro and Max subscriptions do not include API credit. See Model subscriptions in the docs for provider restrictions.

### Is Claude Duet open source or self-hosted?

Anthropic's Duet pages do not describe source you can run or a self-hosted install. Duet runs on a cloud computer Anthropic operates. WhatEverFi is Apache-2.0, and you can run it yourself.

### Where do the Claude Duet details come from?

The Claude Duet column summarizes Anthropic's October 21, 2026 announcement, the product page, the help center article, and the October 23, 2026 safety post. Duet is a research preview, so check those pages before you rely on a detail.

## Sources

- [Anthropic, Introducing Claude Duet (October 21, 2026)](https://claude.com/resources/articles/claude-duet)
- [Claude Duet](https://claude.com/product/claude-duet)
- [Claude Help Center, Get started with Claude Duet](https://support.claude.com/en/articles/17631495)
- [Anthropic, Claude Duet: Safety, Privacy, and Security (October 23, 2026)](https://claude.com/resources/articles/claude-duet-safety-privacy-and-security)
- [Claude pricing](https://claude.com/pricing)
