# Integration platforms for AI agents in 2026: pricing and comparison

An AI agent is only as useful as the apps it can work in. To triage an inbox, update a CRM or file an issue, it needs tools for those apps and a safe way to sign in to them. There are a few ways to get there: a hosted platform that manages the logins for thousands of apps, an MCP server the app publishes itself, or a connector built straight from an API's description. For the same work, the price ranges from nothing beyond the app's own plan to hundreds of dollars a month.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and it uses your apps on your behalf, asking before it changes anything you've told it to check with you. WhatEverFi supports all four ways of giving bots tools, and you can mix them. This page compares them with the main alternatives, prices included. For the individual apps bots can use, see the [integrations catalog](https://whateverfi.com/integrations/).

Updated November 4, 2026.

## Compared

| Option | Gives bots | App logins | Best for |
| --- | --- | --- | --- |
| [Composio](https://whateverfi.com/integration-platforms/composio/) | Hosted app actions with sign-in handled | Composio stores them | A large app catalog with no OAuth apps to register |
| [Pipedream](https://whateverfi.com/integration-platforms/pipedream/) | Hosted app tools over Pipedream's MCP server | Pipedream stores them | Teams already on Pipedream Connect |
| [MCP servers](https://whateverfi.com/integration-platforms/mcp/) | Tools from any MCP server, remote or local | Your OAuth grant or token, encrypted in WhatEverFi | Apps that publish their own MCP server |
| [API connectors](https://whateverfi.com/integration-platforms/api-connectors/) | One tool per operation in an OpenAPI or GraphQL API | Your API key or token, encrypted in WhatEverFi | APIs with a key and no MCP server |

## Pricing compared

On [WhatEverFi Cloud](https://whateverfi.com/pricing/), connecting apps and MCP servers is part of every plan, and you don't need an account with any of these platforms. When you host WhatEverFi yourself, WhatEverFi is free and you pay any platform you turn on directly, on its own terms. The units differ, so the next table works out a real workload.

**Integration platforms for AI agents: prices as of November 2026**

| Option | Free tier | Paid from | Billed by | Apps | In WhatEverFi |
| --- | --- | --- | --- | --- | --- |
| [Composio](https://whateverfi.com/integration-platforms/composio/) | 100,000 calls/mo, 20,000 on managed apps | $29/mo, as usage credit | Tool call, $0.30 to $10 per 1,000 | 1,500+ | Built in |
| [Pipedream Connect](https://whateverfi.com/integration-platforms/pipedream/) | Development only, 10 test users | $99/mo yearly, $150 monthly | User ($2 past 100) and credit ($0.012 per 30 s) | 3,000+ | Built in |
| [An app's own MCP server](https://whateverfi.com/integration-platforms/mcp/) | Free with the app | The app's plan | Nothing extra | Any app with a server | Built in |
| [API connectors](https://whateverfi.com/integration-platforms/api-connectors/) | Free in WhatEverFi | The API's own price | Nothing extra | Any OpenAPI or GraphQL API | Built in |
| Zapier MCP | 100 tasks/mo, about 50 calls | $19.99/mo yearly for 750 tasks | 2 tasks per call | 9,000+ | As a remote MCP server |
| Arcade | 2,000 calls/mo | $25/mo plus usage | $0.01 per call | 7,500+ tools in 81 toolkits | Not built in |
| Merge Agent Handler | 2,000 credits/mo | $1,000/mo for 25,000 credits | Credit | Not stated | Not built in |
| Nango | 10 connections | $50/mo of usage | $0.29 per connection, $0.72 per compute hour | 1,000+ | Not built in |
| Paragon | Trial | Custom quote | Connected customer | Not stated | Not built in |

Prices from each provider's pricing page, checked November 2026: [Composio](https://composio.dev/pricing), [Pipedream](https://pipedream.com/pricing), [Zapier](https://zapier.com/pricing), [Arcade](https://www.arcade.dev/pricing), [Merge](https://www.merge.dev/pricing/agent-handler), [Nango](https://nango.dev/pricing) and [Paragon](https://www.useparagon.com/pricing).

## What a team of bots costs on each

Two workloads. A small team is 5 people whose bots run about 40 app actions each per workday, about 4,400 calls a month. A larger team is 20 people at about 100 actions each, about 44,000 calls. Calls go to everyday apps like Gmail and Slack, each finishes within 30 seconds, and everyone is in one space.

**Monthly cost of 4,400 and 44,000 app actions**

| Option | 5 people, 4,400 calls | 20 people, 44,000 calls |
| --- | --- | --- |
| An app's own MCP server or an API connector | $0 beyond the apps' own plans | $0 beyond the apps' own plans |
| Composio, managed apps | $0 on Hobby | About $48 on Pro; $240 if the calls go to apps like Salesforce |
| Composio, your own OAuth apps | $0 on Hobby | $0 on Hobby, or $29 on Pro |
| Pipedream Connect | $99 billed yearly | About $507 billed yearly |
| Zapier MCP | $129 billed yearly, for 10,000 tasks | $489 billed yearly, for 100,000 tasks |
| Arcade | About $69 | About $465 |

Worked from the pricing pages above, checked November 2026. Arcade assumes no calls are included in the $25 fee, as its page lists none. Model usage and the bots' computers are separate costs.

## Sign-in, self-hosting and compliance

A managed platform holds the OAuth tokens for every account your bots use, so who holds them matters. With MCP servers and API connectors, the grant or key is stored encrypted in your WhatEverFi and the model never sees it. With Composio, Pipedream or Zapier, it lives with them.

**Who holds the logins, and what you can run yourself**

| Option | OAuth app | Source and self-hosting | Compliance |
| --- | --- | --- | --- |
| Composio | Composio's shared one, or your own as a custom auth config | MIT SDKs; VPC or self-hosted on Enterprise | SOC 2 Type II, ISO 27001 |
| Pipedream Connect | Pipedream's, or your own OAuth client | Source-available; no self-hosting | SOC 2 Type 2 on every plan; HIPAA on Business |
| MCP servers | The app's; WhatEverFi registers itself or uses a client you enter | Depends on the server; WhatEverFi is open source | The app's own |
| API connectors | None: an API key or token | WhatEverFi is open source | The API's own |
| Zapier MCP | Zapier's | No | SOC 2 Type II |
| Arcade | Arcade's, or your own | MCP framework on GitHub; self-hosting on Enterprise | Not on its pricing page |
| Nango | Yours | Source on GitHub; self-hosting on Enterprise | SOC 2 Type 2 |

From each provider's pricing and security pages, checked November 2026. In May 2026 Composio [disclosed a breach](https://composio.dev/blog/composio-may-2026-security-incident) that exposed some stored connections, mostly GitHub, and has since changed how it stores credentials.

## Alternatives that aren't built into WhatEverFi

Comparison articles often list these next to Composio and Pipedream. Here is what each is and how it fits with WhatEverFi.

- **Zapier MCP** gives an MCP client actions in 9,000+ apps through your Zapier account. It speaks Streamable HTTP and signs in with OAuth, so it works in WhatEverFi as a remote [MCP server](https://whateverfi.com/integration-platforms/mcp/). Every bot that uses it acts as the Zapier account that signed in, and each call spends 2 Zapier tasks.
- **Arcade** is a hosted runtime for agent tools, with 81 toolkits and a focus on authorizing each user. Its MCP gateways work in WhatEverFi only if their sign-in fits what WhatEverFi sends: OAuth, a bearer token or one custom header.
- **Nango** handles OAuth, syncs and tool calls for software companies building integrations into their own product, and publishes its source. It is a building block for developers, not a catalog a team connects to.
- **Paragon** and **Merge Agent Handler** serve the same product builders, with custom or high entry prices. A team that wants its own bots in Gmail and HubSpot doesn't need them.

## How to choose

### You use WhatEverFi Cloud

Connect apps from **Integrations** and add any MCP server or API you like. It is part of every [plan](https://whateverfi.com/pricing/), and you don't need a Composio or Pipedream account. The choices below matter when you host WhatEverFi yourself.

### The app has its own MCP server

If the app publishes an MCP server, [connect it directly](https://whateverfi.com/integration-platforms/mcp/): paste its URL or find it with Browse MCP servers, and sign in with OAuth. It costs nothing beyond the app, and no integration platform sits in between. On WhatEverFi Cloud, WhatEverFi stores the sign-in encrypted; when you host WhatEverFi yourself, it stays on your server. Anyone can add remote servers. Admins of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/) can also run local servers and reach internal ones.

### The app only has an API

If an app has an OpenAPI description or a GraphQL endpoint but no MCP server, an [API connector](https://whateverfi.com/integration-platforms/api-connectors/) turns its operations into tools with just an API key, and you pay only the API's own price. There's no OAuth sign-in, so for apps that need one, use Composio or Pipedream.

### You want a big app catalog with sign-in handled, cheaply

[Composio](https://whateverfi.com/integration-platforms/composio/) is the quickest way to give self-hosted bots a large app catalog: one API key, and Composio handles each app's sign-in. Its free tier covers a small team, and Pro starts at $29 a month. Bots search its actions and run them in batches, and approvals judge each action on its own. Register your own OAuth apps for the busiest apps to cut the per-call price.

### You need more apps, or already use Pipedream

[Pipedream Connect](https://whateverfi.com/integration-platforms/pipedream/), owned by Workday, hosts logins for about twice as many apps and serves each connected account's tools over its MCP server, with SOC 2 Type 2 on every plan. It takes a project and an OAuth client to set up, and real users need the Startup plan at $99 a month or more. It can run alongside Composio.

### You already pay for Zapier

Add Zapier MCP as a remote [MCP server](https://whateverfi.com/integration-platforms/mcp/). It reaches the most apps, but it acts as one Zapier account and each call spends 2 tasks, so it suits one person's bots more than a whole team's.

### You can't send app logins to a third party

Host WhatEverFi yourself and use only MCP servers and API connectors. Grants and keys are stored encrypted on your server, and calls go straight from your server to each app.

[Tools and integrations guide](https://whateverfi.com/docs/self-host-integrations/)

## FAQ

### What is an integration platform for AI agents?

A service that gives an agent ready-made tools for other apps and handles signing in to them, so you don't build and host each integration yourself. Composio and Pipedream Connect are two examples. MCP servers and API connectors get you tools without a platform in the middle.

### Composio vs Pipedream: which is cheaper?

For most teams, Composio. As of November 2026 it is free up to 100,000 calls a month, 20,000 of them on its managed apps, and Pro is $29 a month plus per-call usage. Pipedream Connect has no free production use and starts at $99 a month billed yearly, with $2 per user past 100 and $0.012 per credit past 10,000. For 44,000 calls a month, that is roughly $48 against $507.

### What is MCP, and how is it different from an API?

The Model Context Protocol is an open standard that lets an AI application discover and call tools on a server. An API is how programs talk to a service. Most MCP servers sit in front of an API and describe part of it for a model. See [MCP servers](https://whateverfi.com/integration-platforms/mcp/) for a full comparison.

### Is MCP free?

Yes. The protocol and its SDKs are open source. An app's own MCP server costs nothing beyond the app's plan; hosted gateways like Zapier MCP, Composio and Pipedream charge by use.

### Can I use Zapier MCP, Arcade or Nango with WhatEverFi?

Zapier MCP, yes, as a remote MCP server signed in with OAuth. Other hosted MCP gateways work if their sign-in is OAuth, a bearer token or one custom header. None of them is built in. Nango and Paragon are for building integrations into your own product, not for connecting a team's bots.

### Do I need Composio or Pipedream to use WhatEverFi?

No. Both are optional. Without them, bots can still use [MCP servers](https://whateverfi.com/integration-platforms/mcp/), [API connectors](https://whateverfi.com/integration-platforms/api-connectors/) and plugins you add. On a self-hosted server, the built-in app catalog appears once one of them is set up. On WhatEverFi Cloud, the catalog is there already.

### Can I use more than one?

Yes. A self-hosted server can have Composio and Pipedream on together, and the Apps list shows apps from both. MCP servers and API connectors work alongside either.

### Does the AI model see my app logins?

No. OAuth grants, tokens and API keys are stored encrypted, added to requests by the server, and never sent to the model. Hosted platforms like Composio and Pipedream keep the logins they manage on their side.
