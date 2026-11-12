# Open source Hark Pro alternative

Hark Pro is the personal agent at hark.com, launched October 6, 2026. It is a hosted app on the web, iOS, and Android. The launch article says every feature stays free, with $20 a month for twice the usage and $100 a month for ten times the usage.

Like Grok Bot, WhatEverFi is just chat: you set up the bot and manage it from that chat. Hark Pro feels like a messaging app. The same article describes Home, Action Buttons, and Panels, Projects as dedicated chats with their own threads, and a cloud computer called Handoff that Hark operates.

Hark introduced Handoff, its computer-use agent, on August 5, 2026. This comparison uses Hark's public pages. It is not a measured benchmark.

Public descriptions as of October 7, 2026.

## Comparison

| Topic | WhatEverFi | Hark Pro |
| --- | --- | --- |
| Product | Open source platform for persistent AI teammates. WhatEverFi is in beta. | Hark Pro, a hosted personal agent launched October 6, 2026, on the web, iOS, and Android. Hark says it remembers what you tell it and can act on the web. |
| Who runs it | You do when you self-host with Docker or point the desktop and mobile apps at a server you operate. WhatEverFi Cloud, in beta, runs it for you. | The terms name Hark Labs, Inc. as the operator of the hosted service. They do not describe a self-host install, and they restrict reverse engineering the service. |
| Price | No seat fee for the open source software. You pay the model and computer providers you use. | Free, including the features named in the launch article. $20 a month is twice the usage. $100 a month is ten times the usage. |
| Day-to-day management | After you connect a model, WhatEverFi is just chat. You manage the bot from that chat on the web, desktop, and mobile apps. Routines are readable Markdown. | The launch article describes a messaging-style conversation. Projects are dedicated chats with their own threads. Home, Action Buttons, and Panels sit beside that. The privacy policy says you can review, edit, or delete memory by asking the agent. |
| Model | Bring your own model credentials. Multiple providers are supported, including a custom model server. Each bot can use a different model. | The launch article says Hark is training models. The security page says Hark prioritizes its own models, and that models from vetted third parties keep no data. The terms do not name a public model you can swap. They say Hark may train on what you submit unless you opt out, though feedback and material flagged for safety review can still be used. |
| Computer | Sandboxed browser, terminal, files, and a graphical desktop. Docker is the default local computer, with optional E2B, Daytona, CreateOS, Boat, or a trusted local computer. | Handoff, introduced August 5, 2026, is a virtual computer with a browser, files, and a terminal. The October 6 launch article says it can run up to 6 browsers at once and log in on your behalf. Hark operates that computer. |
| Connected apps | Composio or Pipedream Connect, or a Treg, remote MCP, or OpenAPI source you install. Connector credentials are encrypted on the server and are not returned by the API. | The launch article names Google and Outlook APIs, files, external databases, and MCP. Passwords and cards sit in Secured by Hark, which Hark says it cannot see inside. |
| Ongoing work | Each bot keeps conversations, memory, routines, and history. A bot can delegate to a peer bot or a short-lived subagent. | Memory persists unless you ask Hark to forget. You can create scheduled tasks. Action Buttons are suggested from what Hark knows, and a tap runs that action. |
| Approval | A bot can pause for approval when a task crosses a boundary you set. Actions are recorded in an audit log. | The homepage says Hark checks in before an action that needs approval. The security page says tasks start from consent, you can watch the computer-use agent, and you can cancel. The launch article says that if you allow it, Hark can finish some tasks on its own. |
| Where you use it | The WhatEverFi web, desktop, and mobile apps. Optional connectors can attach Slack, WhatsApp, Telegram, iMessage via Sendblue, and Feishu/Lark. | The web app, iOS, and Android. The privacy policy says you work through one ongoing conversation, and that inputs can include chat, voice, and file uploads. You must be 18 or older. |

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

### Is WhatEverFi a replacement for Hark Pro?

No. Hark Pro is a hosted personal agent at hark.com, operated by Hark Labs, Inc. WhatEverFi is open source software for persistent AI teammates on infrastructure you control. Both can take on tasks from a conversation. They differ on hosting, model choice, and who operates the computer.

### Can I self-host WhatEverFi?

Yes. Self-hosting is available now with published Docker images or a source checkout. Hosted WhatEverFi Cloud is in beta.

### How do you manage each one day to day?

After a Docker or desktop install and a model connection, WhatEverFi is just chat, like Grok Bot, and you manage the bot from that chat. Hark Pro feels like a messaging app. The launch article adds Home, Action Buttons, and Panels, and Projects as dedicated chats with their own threads.

### Does WhatEverFi order things or run Handoff the way Hark describes?

No. Ordering, bill pay, and Handoff are Hark behaviors described on its site. WhatEverFi's clients are the web app, the Electron desktop app, and the Expo mobile app. A bot can use a browser, terminal, files, and a desktop you run, and it can pause for approval at a boundary you set.

### Where do the Hark Pro details come from?

The Hark Pro column summarizes the homepage, the Introducing Hark Pro article published October 6, 2026, the Introducing Hark Handoff article published August 5, 2026, the privacy policy last updated October 1, 2026, the terms posted June 30, 2026, and the security page. This page is about Hark Pro at hark.com. Check those pages before you rely on a specific capability.

## Sources

- [Hark homepage](https://hark.com/)
- [Introducing Hark Pro (October 6, 2026)](https://hark.com/articles/introducing-hark-pro)
- [Introducing Hark Handoff (August 5, 2026)](https://hark.com/articles/introducing-hark-handoff)
- [Hark privacy policy (last updated October 1, 2026)](https://hark.com/privacy-policy)
- [Hark terms of service (posted June 30, 2026)](https://hark.com/terms)
- [Hark security](https://hark.com/security)
