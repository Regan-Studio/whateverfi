# Open source OpenAI Dots alternative

Dots are OpenAI's always-on agents, announced on September 29, 2026. OpenAI says they use GPT-6 Astra, have their own cloud computer, and are rolling out on eligible Pro, Business Premium, and Enterprise plans.

WhatEverFi is separate software: open source AI teammates you can host yourself, with model credentials you bring.

Public descriptions as of October 7, 2026.

## Comparison

| Topic | WhatEverFi | Dots |
| --- | --- | --- |
| Product | Open source platform for persistent AI teammates. WhatEverFi is in beta. | Always-on agents from OpenAI. OpenAI says a dot learns from feedback and can work toward your goals continuously. |
| Who runs it | You do when you self-host with Docker or point the desktop and mobile apps at a server you operate. WhatEverFi Cloud, in beta, runs it for you. | OpenAI. The announcement says each dot has its own cloud computer. |
| Source | Apache-2.0 source on GitHub. | Hosted product from OpenAI. |
| Model | Bring your own model credentials. Multiple providers are supported, including a custom model server. | GPT-6 Astra, according to OpenAI's announcement. |
| Connections | Composio or Pipedream Connect, or a Treg, remote MCP, or OpenAPI source you install. Bots also get a sandboxed browser, terminal, files, and a graphical desktop. | OpenAI says plugins connect a dot to more than 4,000 apps, and those permissions are shared with ChatGPT. The help center says you can also give a dot its own Slack account. |
| Ongoing work | Each bot keeps conversations, memory, routines, and history. Routines are readable Markdown and can run on a schedule. A bot can delegate to a peer bot or a short-lived subagent. | OpenAI says a dot can keep working in the background. Proactive research can read permitted sources and save private notes. The help center says that research cannot send messages, change content through plugins, or control a browser or computer. |
| Control and availability | A bot can pause for approval at a boundary you set, and actions are recorded in an audit log. The web, desktop, and mobile clients are available with self-hosting now. | Built-in rules and Custom Rules say what a dot may do, must ask about, or must not do. Custom Rules cannot turn off core safety checks. The help center says changing a password or transferring money requires you to take over, and Activity View shows ongoing work. The first dot is included with Pro and Business Premium. Dots are not available to users under 18. OpenAI is also previewing specialist dots for organizations. |

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

### Is WhatEverFi a replacement for a dot?

No. A dot is an OpenAI agent on an eligible ChatGPT plan. WhatEverFi is open source software you run yourself, with your own model credentials.

### Do I need an OpenAI account to use WhatEverFi?

No. OpenAI is one supported model connection, not a requirement. You bring credentials for a provider you choose.

### Where do the Dots details come from?

The Dots column summarizes OpenAI's September 29, 2026 announcement and OpenAI's Dots privacy, security, and safety FAQ. Check those pages before you rely on a specific capability.

## Sources

- [OpenAI, Introducing dots (September 29, 2026)](https://openai.com/index/introducing-dots/)
- [OpenAI Help Center, Dots privacy, security, and safety FAQs](https://help.openai.com/en/articles/20001529-dots-privacy-security-and-safety-faqs)
