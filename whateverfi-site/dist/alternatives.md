# Best Personal AI Agents in 2026: Grok Bot, Muse, Dots, Instinct, Hark Pro & Open Source Alternatives

A dated comparison of Grok Bot, Meta Muse, OpenAI Dots, Instinct, Claude Duet, Hark Pro, OpenClaw, Hermes Agent, and WhatEverFi. Licenses, self-hosting, model choice, price, setup, and whether you manage the agent from chat.

Updated October 24, 2026.

- Added Claude Duet.
- Added Hark Pro and the August 5 Handoff date.
- Added Instinct and Hermes Agent beside Muse, Dots, Grok Bot, and OpenClaw.
- Named Meta Muse, OpenAI Dots, Instinct AI, and Hermes Agent in the comparison titles.

## TL;DR

These are different products that all take on work beyond a single reply. This page compares their public descriptions, read between October 7 and October 24, 2026. It is not a score, a benchmark, or a claim that one of them is best at every task.

WhatEverFi is the open source option you run yourself. Like Grok Bot, it is just chat once it is running: you set up a bot and manage it from that chat. You bring the model key. The license is Apache-2.0, and there is no seat fee.

Grok Bot, Meta Muse, OpenAI Dots, Instinct, Claude Duet, and Hark Pro are hosted. You do not install their service. Grok Bot comes with paid Cursor plans and SuperGrok. Muse runs on a virtual machine Meta operates. Dots sit on eligible ChatGPT plans. Instinct is the assistant you text or call. Hark Pro has a free tier, with $20 and $100 monthly tiers for more usage.

OpenClaw and Hermes Agent are also open source and self-hosted. Their docs describe installers, config files, and a gateway. Hermes Desktop can reach a first chat without the command line. OpenClaw can chat while its Gateway runs in the terminal.

## Comparison

| Product | License | Self-host | Your model | Price | Setup | Managed from chat |
| --- | --- | --- | --- | --- | --- | --- |
| WhatEverFi | Apache-2.0 | Yes. Docker images or a source checkout. | Yes. Your key, including a local server. | No seat fee. You pay the model and computer. | Docker or the desktop app, then an account and a model. | Yes. You manage the bot from the chat. |
| Grok Bot | Hosted. No source for the bot service. | No. Cloud computer. Optional local commands. | No. Included with the plan. | Paid Cursor plans and SuperGrok at $30 a month. | Install the app. The service stays hosted. | Yes. Named bots, routines, and approvals. |
| Meta Muse | Hosted service from Meta. | No. Muse Secure VM is Meta's cloud machine. | No. The launch post names Muse Spark. | The Muse posts used here do not list a price. | Muse app or WhatsApp, in the US and Canada. | Yes, in the app or WhatsApp. |
| OpenAI Dots | Hosted product from OpenAI. | No. Each dot has a cloud computer OpenAI runs. | No. The announcement names GPT-6 Astra. | Eligible Pro, Business Premium, and Enterprise plans. | A ChatGPT plan that includes Dots. Not under 18. | Yes. A dot can keep working after you leave. |
| Instinct | Hosted. The cited pages do not publish source. | No install is described. | No public model is named. Safety review can still train. | The cited pages do not list a price. | Text or call. The policy also names apps. | Yes. You text or call. |
| Claude Duet | Hosted service from Anthropic. | No. A cloud computer Anthropic runs. | No. Claude Opus 5.5. | Included with Pro at $20 a month and Max from $100. | Waitlist, US only. iOS, Android, and claude.ai. | Yes. One ongoing thread with a morning brief. |
| Hark Pro | Hosted. The terms restrict reverse engineering. | No install is described. | No. Hark trains its own models. | Free. $20 a month is 2×. $100 a month is 10×. | Web, iOS, or Android app. | Yes. Projects are separate chats. |
| OpenClaw | MIT | Yes. You run the Gateway. | Yes, including a server you host. | No software fee. You pay models and the machine. | CLI installer and a wizard. | Chat apps and a Control UI, plus a config file. |
| Hermes Agent | MIT | Yes. It defaults to the machine you install it on. | Yes, including local. 64,000 token minimum. | MIT software. Optional Nous Portal credits. | Desktop onboarding, or a CLI wizard. | Desktop is a chat. Messaging needs a gateway. |

## The agents

### Grok Bot

Grok Bot is xAI's hosted product for named bots that can use a computer, keep routines, and pause for approval. The docs describe a cloud computer on your account, shared by the bots on that account. They do not describe installing the service yourself or connecting your own model provider. Grok Build and the older Grok-1 weights are separate open source releases, not this service. Grok Bot is included with paid Cursor plans and SuperGrok, listed at $30 a month. The free plan on the pricing page does not list it. WhatEverFi is this shape you host, with a model key you bring.

[Grok Bot alternatives (open source and hosted)](https://whateverfi.com/grok-bot-alternative/)

### Muse

Meta introduced Muse on September 8, 2026. You talk to it in the Muse app or on WhatsApp, and Meta says it keeps working after you close the app. The computer is Muse Secure VM, a cloud machine Meta operates. The launch post names Muse Spark, so you do not bring a model key. Meta says it checks before sensitive actions such as sending email or paying, and that you can opt out of using interactions to train Meta's models. The posts used here do not list a price. WhatEverFi is the opposite on hosting: you run the stack, and you pick the model.

[Open source Meta Muse alternative](https://whateverfi.com/muse-alternative/)

### Dots

OpenAI announced Dots on September 29, 2026. A dot is an always-on agent with its own cloud computer, and OpenAI says it uses GPT-6 Astra. The first dot is included with eligible Pro and Business Premium plans. Enterprise is in the rollout. Dots are not available under 18. A rules list says what the dot may do, must ask about, or must not do, and Custom Rules cannot turn off core safety checks. Changing a password or transferring money requires you to take over. WhatEverFi does not include a dot. OpenAI is one model connection you can choose.

[Open source OpenAI Dots alternative](https://whateverfi.com/dots-alternative/)

### Instinct

Instinct, on this page, is the personal assistant at instinct.com that you text or call. The homepage describes it using your phone and computer the way a person would, with examples such as a bill, gifts, or a trip. The privacy policy and terms were revised August 26, 2026. They do not name a public model. They say Instinct may train on what you submit unless you opt out, and that material flagged for safety review can still be used. Vault materials and Google Workspace data are excluded. Terms let it act in connected services, including a payment method. WhatEverFi does not text, call, or buy things that way.

[Open source Instinct AI alternative](https://whateverfi.com/instinct-alternative/)

### Claude Duet

Anthropic released Claude Duet as a research preview on October 21, 2026. It is a standalone app you message like a person, with one ongoing thread. Each morning it reviews your email and calendar, then checks connected accounts at intervals and stays quiet until something needs you. It works on a cloud computer Anthropic runs, uses Claude Opus 5.5, and you cannot choose a model. It asks before it sends a message, pays, signs, or deletes, and it will not trade securities or move money between accounts. Duet is included with Claude Pro and Max in the US, from a waitlist, and uses the plan's limits. WhatEverFi can use Claude models through an Anthropic API key, on a computer you run, with as many bots as you set up.

[Open source Claude Duet alternative](https://whateverfi.com/claude-duet-alternative/)

### Hark

Hark Pro is the personal agent at hark.com, launched October 6, 2026. It is a hosted web, iOS, and Android app. Every feature in that article stays free. Twenty dollars a month is twice the usage, and one hundred dollars a month is ten times. The article describes a messaging-style app. Projects are dedicated chats with their own threads, and Home, Action Buttons, and Panels sit beside that. Hark introduced Handoff on August 5, 2026. It is a virtual computer with a browser, files, and a terminal. The October 6 article says it can run up to six browsers at once, and Hark operates that computer. Training opt-out has exceptions for feedback and safety review. WhatEverFi uses a computer you run, and you bring the model.

[Open source Hark Pro alternative](https://whateverfi.com/hark-alternative/)

### WhatEverFi

WhatEverFi is an open source AI agent for persistent teammates. It is in beta. The clients are the web app, the Electron desktop app, and the Expo mobile app. You bring a model key, including a local server, and each bot can use a different model. The default computer is local Docker. Optional computers include E2B, Daytona, CreateOS, Boat, and a trusted local computer. Like Grok Bot, WhatEverFi is just chat once it is running: a new bot interviews you, and you manage schedules, memory, and approvals from that chat. Routines are readable Markdown. There is no seat fee. Hosted WhatEverFi Cloud is in beta.

[Open source AI agent you run yourself](https://whateverfi.com/self-hosted-ai-agent/)

### OpenClaw

OpenClaw is an MIT-licensed agent you run yourself, stewarded by the OpenClaw Foundation. The getting-started guide installs a CLI and runs a wizard. The Gateway can stay in that terminal so you can chat before openclaw gateway install, the later background service. Later changes go through openclaw configure and a JSON config file. Chat apps are the main surface, alongside the Control UI. After Docker or the desktop app, WhatEverFi is just chat, managed from that chat, like Grok Bot.

[Open source OpenClaw alternative](https://whateverfi.com/openclaw-alternative/)

### Hermes

Hermes Agent is Nous Research's MIT-licensed agent, and you can run it on your own machine. The desktop app shares config, keys, sessions, and memory with the command-line install. First-run onboarding can reach a first message without the CLI. The app starts its own local backend. Telegram, Discord, and Slack use a gateway process you start separately. The quickstart says a model needs at least 64,000 tokens of context. Like Grok Bot, WhatEverFi's ongoing management stays in the chat.

[Open source Hermes Agent alternative](https://whateverfi.com/hermes-alternative/)

## Launch timeline

- **August 5, 2026.** Hark introduced Handoff, the computer-use agent that later sits inside Hark Pro.
- **August 26, 2026.** Instinct revised its privacy policy and terms. Those pages do not give a product launch date. This roundup does not invent one.
- **September 8, 2026.** Meta introduced Muse, a personal agent on a virtual machine Meta operates.
- **September 23, 2026.** Meta's Connect recap added Muse for Mac, which can drive apps on that Mac with permission.
- **September 29, 2026.** OpenAI introduced Dots. Meta also posted about Muse for small businesses. The Muse posts used here still do not list a price.
- **October 6, 2026.** Hark launched Hark Pro: a hosted web, iOS, and Android app, free, with $20 and $100 usage tiers.
- **October 7, 2026.** The first version of this roundup. OpenClaw and Hermes Agent are ongoing open source projects. Their docs do not give a single launch day, so they are not pinned to one.
- **October 21, 2026.** Anthropic released Claude Duet as a research preview for Pro and Max in the US.

## How to choose

Choose WhatEverFi when the agent should live on hardware you control, the model key should be one you bring, and the daily surface should stay a chat. That is the Grok Bot shape without the hosted service. The cost is the install: Docker or the desktop app, then an account and a model. After that, routines, memory, and approvals stay in the chat.

Choose Grok Bot when you already pay for Cursor or SuperGrok and you want xAI to host the computer. Choose Meta Muse for Meta's agent in the Muse app or WhatsApp, on a VM Meta runs. Choose OpenAI Dots when the agent should sit on an eligible ChatGPT plan and follow OpenAI's rules for what it may do alone. Choose Instinct when you want to text or call a hosted assistant. Choose Claude Duet when you already pay for Claude Pro or Max, live in the US, and want Anthropic to watch your inbox and calendar on a computer it runs. Choose Hark Pro for a hosted conversation with a free tier and a cloud computer Hark operates.

Choose OpenClaw when the assistant should live in chat apps you already use, and you are willing to run a Gateway and a config file. Choose Hermes Agent for MIT-licensed software and a desktop app that can reach a first message without the CLI. Messaging apps on Hermes still need a separate gateway. WhatEverFi does not import a Grok Bot account, a Muse VM, a dot, an Instinct thread, a Claude Duet thread, or a Hark vault. OpenClaw documents a Hermes migration for config, memory, skills, and, if you accept it, credentials. Read the linked page before you rely on a price, a country, or a connector.

## FAQ

### Which of these can I self-host?

WhatEverFi, OpenClaw, and Hermes Agent. WhatEverFi publishes Docker images and a source checkout. OpenClaw's guide has you run the Gateway. Hermes installs on your machine, and the desktop app can start its own local backend. Grok Bot, Muse, Dots, Instinct, Claude Duet, and Hark Pro are hosted. Their pages do not describe installing the service yourself. WhatEverFi also offers a hosted beta, WhatEverFi Cloud.

### Which let me bring my own model?

WhatEverFi, OpenClaw, and Hermes Agent, including a local or compatible server. Grok Bot's docs do not describe your own provider. Muse's launch post names Muse Spark. Dots use GPT-6 Astra. Instinct's privacy policy and terms do not name a public model. Claude Duet uses Claude Opus 5.5, and you cannot choose a model. Hark says it trains its own models and prioritizes them.

### Is WhatEverFi just chat, like Grok Bot?

Yes, after it is running. You install with Docker or the desktop app, create an account, and connect a model. A new bot interviews you, and you manage it from that chat. Grok Bot is also a chat for named bots. OpenClaw adds a command-line setup and a Gateway. Hermes Desktop can reach a first message without the CLI, and messaging apps use a separate gateway. Claude Duet, Hark Pro, Muse, Dots, and Instinct are conversations too, on services you do not host.

### Is this a ranking?

No. The title lists the agents people compare in 2026. The table and the cards use each project's public description. They do not measure quality, speed, or how often a task succeeds. Where a price cell says the cited pages do not list one, that is the claim. Check the linked source before you rely on a detail.

### Where do the dates come from?

Muse's launch post is September 8, 2026, and the Connect recap is September 23, 2026. Dots were announced September 29, 2026. Hark introduced Handoff on August 5, 2026, and launched Hark Pro on October 6, 2026. Anthropic released Claude Duet on October 21, 2026. Instinct's privacy policy and terms were revised August 26, 2026, which is not a launch date. Grok Bot, OpenClaw, and Hermes Agent are compared from their current docs without a single launch day.
