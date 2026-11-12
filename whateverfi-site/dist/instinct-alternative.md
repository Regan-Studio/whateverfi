# Open source Instinct AI alternative

Instinct is a personal assistant operated by Spear Street Technology, Inc. The homepage says there are no new interfaces: you text or call it, and it can use a phone and a computer the way a person does. Examples on that page include disputing a bill, sending gifts, ordering groceries, scheduling a doctor's appointment, and planning a trip.

WhatEverFi is open source software for persistent AI teammates. You choose the model and the computer, and you can run the stack yourself. This is a comparison of public descriptions, not a measured benchmark.

Public descriptions as of October 7, 2026.

## Comparison

| Topic | WhatEverFi | Instinct |
| --- | --- | --- |
| Product | Open source platform for persistent AI teammates. WhatEverFi is in beta. | A personal assistant. The privacy policy, revised August 26, 2026, calls it an autonomous assistant that thinks, plans, and acts on everyday tasks. |
| Who runs it | You do when you self-host with Docker or point the desktop and mobile apps at a server you operate. WhatEverFi Cloud, in beta, runs it for you. | Spear Street Technology, Inc., under the Instinct name. The privacy policy describes a hosted service, including third-party hosting. It does not describe installing Instinct on a server you operate. |
| Source | Apache-2.0 source on GitHub. | Hosted service. The terms say the company owns the service and the technology that produces its actions. |
| Model | Bring your own model credentials. Multiple providers are supported, including a custom model server. | The privacy policy and terms do not name a public model. They say Instinct may train its models on what you submit unless you opt out in settings, though material flagged for safety review can still be used. Vault materials and Google Workspace data are excluded. |
| Computer | Sandboxed browser, terminal, files, and a graphical desktop, on a shared team computer or an isolated private computer. Docker is the default local computer, with optional E2B, Daytona, CreateOS, Boat, or a trusted local computer. | The homepage says Instinct can use a phone and a computer the way a person does. The privacy policy's examples include booking a ride, signing into an account with credentials you provide, and booking a medical appointment. |
| Connected apps | Composio or Pipedream Connect, or a Treg, remote MCP, or OpenAPI source you install. Connector credentials are encrypted on the server and are not returned by the API. | The terms let Instinct act in services you connect, including using a payment method for a purchase. Linking Google Workspace grants Calendar, Gmail, Drive, Docs, Sheets, Slides, and Tasks. |
| Ongoing work | Each bot keeps its own conversations, memory, routines, and history. Routines are readable Markdown and can run on a schedule. A bot can delegate to a peer bot or a short-lived subagent. | The privacy policy says the assistant is designed to be available when you engage it, and that it plans and completes tasks from the permissions you grant. |
| Approval | A bot can pause for approval when a task crosses a boundary you set. Actions are recorded in an audit log. | The terms say Instinct can act on what you send, including purchases, and that you remain responsible for those actions. Confirmation steps may exist but are not promised to prevent an unintended action. |
| Where you use it | Web app, Electron desktop app, and Expo mobile app. Voice can speak replies, take dictation, and call a bot, with your own ElevenLabs, OpenAI, Cartesia, Fish Audio, or xAI key. | The homepage says you text or call it. The privacy policy and terms also describe the Instinct website, Mac apps, and mobile apps. |

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

### Is WhatEverFi a replacement for Instinct?

No. Instinct is a hosted personal assistant you text or call, operated by Spear Street Technology, Inc. WhatEverFi is open source software for persistent AI teammates on infrastructure you control. Both can take on tasks beyond a single reply. They differ on hosting, model choice, and who operates the computer.

### Can I self-host WhatEverFi?

Yes. Self-hosting is available now with published Docker images or a source checkout. Hosted WhatEverFi Cloud is in beta.

### Does WhatEverFi text, call, or buy things the way Instinct describes?

No. Those are Instinct behaviors described on its homepage, privacy policy, and terms. WhatEverFi's clients are the web app, the Electron desktop app, and the Expo mobile app. A bot can use a browser, terminal, files, and a desktop you run, and it can pause for approval at a boundary you set.

### Where do the Instinct details come from?

The Instinct column summarizes the Instinct homepage, the privacy policy revised August 26, 2026, and the terms of service revised the same day. This page is about the personal assistant at instinct.com. Check those pages before you rely on a specific capability.

## Sources

- [Instinct homepage](https://instinct.com/)
- [Instinct privacy policy (revised August 26, 2026)](https://instinct.com/privacy-policy)
- [Instinct terms of service (revised August 26, 2026)](https://instinct.com/terms)
