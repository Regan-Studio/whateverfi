# Composio for AI agents: pricing, limits and alternatives

[Composio](https://composio.dev) is a hosted service that gives AI agents actions in other apps, such as sending an email in Gmail or opening an issue in GitHub. It runs the sign-in for each app, stores the tokens, and calls the app's API when an agent asks it to. It is free up to 100,000 tool calls a month, and the paid plan starts at $29 a month plus usage.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and bots use tools in your apps as well as their own computer. When you host WhatEverFi yourself, one Composio API key fills the app catalog people connect from. Composio supplies the app actions and logins. WhatEverFi decides which account each bot acts as and asks you before anything that changes data.

Updated November 4, 2026.

## What is Composio?

[Composio](https://composio.dev) is an integration platform for AI agents. It has a catalog of toolkits, one per app, each with actions an agent can call. Composio says it has 1,500+ toolkits. It handles the OAuth sign-in and keeps the tokens encrypted, so the agent never sees a password or token. It also serves its tools over MCP for agents that speak that protocol, and offers triggers that fire when something happens in an app.

Its SDKs for TypeScript and Python are open source under the MIT license. The service behind them, including the app catalog and stored logins, is hosted by Composio. Running it in your own VPC or fully self-hosted is part of the Enterprise plan. Composio says it holds SOC 2 Type II and ISO 27001 certifications.

## Composio pricing

Composio bills by tool call, and the price of a call depends on whose OAuth app it goes through. A **managed app** is one of Composio's own shared OAuth apps, so you skip registering anything with Google or Slack. Calls through your own OAuth app or API key, set up in Composio as a custom auth config, are much cheaper. Composio's FAQ says managed apps work in production but are not built for production scale, and suggests moving to your own app before you grow.

**Composio plans as of November 2026**

| Plan | Hobby | Pro | Enterprise |
| --- | --- | --- | --- |
| Price | $0 | $29/mo, as $29 of usage credit | Custom, committed volume |
| Tool calls included | 100,000/mo, then usage stops | 100,000/mo, then billed | Custom |
| Of those, on managed apps | Up to 20,000 | Up to 20,000 | Custom |
| Extra calls, your own app | None, hard cap | $0.30 per 1,000 | Custom |
| Extra calls, managed apps | None, hard cap | $0.50 per 1,000 for most apps, $2 for apps like Gmail, Slack and HubSpot, $10 for apps like Salesforce and LinkedIn | Custom |
| Connected accounts | Unlimited on your apps, 1,000 on managed apps | Unlimited on your apps; managed apps past 1,000 cost $0.10 once each | Custom |
| Rate limit | 2,000 requests/min | 10,000 requests/min | Custom |
| Team | 3 members | Unlimited | Unlimited, SSO and SCIM |
| Compliance | None listed | Self-serve DPA; BAA and zero data retention as per-call add-ons | MSA, DPA, BAA, customer-managed keys |

Prices from [Composio's pricing page](https://composio.dev/pricing), checked November 2026. The rates apply to sign-ups from August 15, 2026; earlier customers keep their old plan until December 31, 2026. Pro credit doesn't roll over.

- Instant Tools, formerly Premium tools, call a paid third-party service such as a web search API with no account of your own. Composio passes on the provider's price with no markup, on top of the normal tool-call charge.
- Triggers are billed separately: $0.003 per event on your own apps on Pro, and $0.003 to $0.006 on managed apps after 10,000 free a month.
- Pro has per-meter spend caps. The free plan never bills you; it pauses until the next month instead.
- Accepted startups get six months of Pro free through Composio's [startup program](https://composio.dev/startups).

## What WhatEverFi bots cost on Composio

WhatEverFi uses Composio's managed apps unless you add your own auth config in Composio. A small team is 5 people whose bots run about 40 app actions each per workday, about 4,400 calls a month. A larger team is 20 people at about 100 actions each, about 44,000 calls. Bots in WhatEverFi also search Composio's catalog for the right action; if every search counted as a call, double these numbers.

**Monthly Composio bill for a team of WhatEverFi bots**

| Workload | Hobby | Pro |
| --- | --- | --- |
| 5 people, 4,400 calls on apps like Gmail and Slack | $0 | $29 |
| 20 people, 44,000 calls on apps like Gmail and Slack | Pauses after 20,000 calls | About $48: 24,000 extra calls at $2 per 1,000 |
| 20 people, 44,000 calls on apps like Salesforce | Pauses after 20,000 calls | About $240: 24,000 extra calls at $10 per 1,000 |
| 20 people, 44,000 calls through your own OAuth apps | $0 | $29 |

Worked from [Composio's pricing page](https://composio.dev/pricing), checked November 2026. Model usage and the bots' computers are billed separately, by your model provider or by WhatEverFi.

## Composio vs Pipedream and other alternatives

The pricing units differ, so compare a real workload, not the headline price. Composio charges per call and its free tier is the largest. [Pipedream Connect](https://whateverfi.com/integration-platforms/pipedream/) charges per user and per 30 seconds of compute, and has no free production use. Zapier MCP spends 2 Zapier tasks per call. Arcade charges $0.01 per call.

**Composio and its main alternatives**

| Option | Free tier | Paid from | Billed by | Apps | Self-host | In WhatEverFi |
| --- | --- | --- | --- | --- | --- | --- |
| Composio | 100,000 calls/mo, 20,000 on managed apps | $29/mo, as usage credit | Tool call, $0.30 to $10 per 1,000 | 1,500+ | Enterprise only | Built in: one API key |
| [Pipedream Connect](https://whateverfi.com/integration-platforms/pipedream/) | Development only, 10 test users | $99/mo yearly, $150 monthly | User ($2 past 100) and credit ($0.012 per 30 s) | 3,000+ | No | Built in: project and OAuth client |
| [Zapier MCP](https://zapier.com/mcp) | 100 tasks/mo, about 50 calls | $19.99/mo yearly for 750 tasks | 2 tasks per call | 9,000+ | No | As a remote MCP server |
| [Arcade](https://www.arcade.dev/pricing) | 2,000 calls/mo | $25/mo plus usage | $0.01 per call | 7,500+ tools in 81 toolkits | Enterprise only | Not built in |
| [Merge Agent Handler](https://www.merge.dev/pricing/agent-handler) | 2,000 credits/mo | $1,000/mo for 25,000 credits | Credit | Not stated | Enterprise only | Not built in |
| [Nango](https://nango.dev/pricing) | 10 connections | $50/mo of usage | $0.29 per connection, $0.72 per compute hour | 1,000+ | Enterprise only; source on GitHub | Not built in |

Prices from each provider's pricing page, checked November 2026: [Composio](https://composio.dev/pricing), [Pipedream](https://pipedream.com/pricing), [Zapier](https://zapier.com/pricing), Arcade, Merge and Nango as linked.

- **Pipedream Connect** is the closest match: another hosted catalog with managed logins, about twice as many apps, and SOC 2 Type 2 on every plan. It costs more at low volume and charges per user. WhatEverFi supports it too, and you can run both.
- **Zapier MCP** has the most apps and suits one person's own accounts. It signs in as the Zapier account that set it up, so every bot using it acts as that person.
- **Arcade** focuses on fewer, deeper toolkits and on authorization for each user. It is not built into WhatEverFi; its MCP gateways work only if their sign-in fits what WhatEverFi sends: OAuth, a bearer token or one custom header.
- **Nango** and **Paragon** are for software companies adding integrations to their own product. They are a poor fit for a team that just wants its bots in Gmail.
- **No middleman**: if an app publishes its own [MCP server](https://whateverfi.com/integration-platforms/mcp/) or has an API key, connect it directly or with an [API connector](https://whateverfi.com/integration-platforms/api-connectors/). You pay nothing extra.

## Is Composio safe?

Composio keeps the OAuth tokens for every app your bots connect, so its security matters as much as WhatEverFi's. In May 2026 it [disclosed a breach](https://composio.dev/blog/composio-may-2026-security-incident): an attacker reached internal systems and took about 0.3% of active connections, almost all of them GitHub. A cache it likely reached held 5,241 API keys, which Composio revoked. Composio made every customer rotate their API keys within about two days and revoked the tokens it could.

Since then, Composio says its APIs no longer return account tokens, OAuth credentials use envelope encryption, API keys are stored as hashes, and customers can restrict keys by IP address. Weigh that history against the alternatives, and keep [approvals](https://whateverfi.com/docs/approvals/) on for actions that change data, whichever platform you choose.

## What your bots can do with Composio

With Composio set up, the Apps list under Integrations shows Composio's catalog. Browse what is in it on the [integrations page](https://whateverfi.com/integrations/), for example [Gmail](https://whateverfi.com/integrations/gmail/), [Slack](https://whateverfi.com/integrations/slack/), [GitHub](https://whateverfi.com/integrations/github/), [Notion](https://whateverfi.com/integrations/notion/) and [HubSpot](https://whateverfi.com/integrations/hubspot/).

- Connect an app in one step. Choose Connect under Integrations, or ask a bot to "connect my Google Calendar" and use the card it posts. You sign in on the app's own page through Composio.
- Share it across the space. Once an app is connected, every bot in that space can use it. You don't set it up per bot.
- Keep accounts apart. WhatEverFi pins each connection to the exact account you signed in with, so a bot never falls back to another mailbox or workspace. You can connect more than one account of the same app.
- Find the right action. Bots search Composio's actions and can run several in one batch.
- Ask before changes. [Approvals](https://whateverfi.com/docs/approvals/) judge each action inside a batch on its own, so allowing one action never allows the rest.
- Run code on their own computer. WhatEverFi turns off Composio's hosted code sandbox in the sessions it creates, so you don't pay for sandbox runs.

## When to choose Composio

Choose Composio when you self-host WhatEverFi and want a broad app catalog that works with a single API key, without registering an OAuth app with Google, Slack or anyone else. For a small team its free tier covers real use, which no other managed option here matches.

Choose something else when you need production-grade sign-in for many people on apps billed at the top managed rate, when you can't send app tokens to a third party at all, or when the apps you need publish their own [MCP servers](https://whateverfi.com/integration-platforms/mcp/). On [WhatEverFi Cloud](https://whateverfi.com/pricing/) you don't need a Composio account: connecting apps is part of every plan. The [comparison](https://whateverfi.com/integration-platforms/) puts every option side by side.

## Limits

- Logins live with Composio, not on your server. Each tool call goes through Composio's service, so it has to be reachable.
- Some apps have no sign-in managed by Composio. Connecting one of them fails until you add your own auth config for it in Composio.
- The consent screen shows Composio unless you set up your own OAuth app in Composio.
- Managed apps share Composio's OAuth app, and each app's own rate limits still apply to it.
- WhatEverFi reads Composio's catalog once an hour, so newly added apps can take that long to appear.
- Composio is configured for the whole server. A space or user can't bring their own Composio key.

## How to set it up

These steps are for the admin of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/). WhatEverFi Cloud users don't need a Composio account; they [connect apps](https://whateverfi.com/docs/integrations/) from Integrations.

1. Create an account at [composio.dev](https://composio.dev) and copy an API key.
2. Set `COMPOSIO_API_KEY` on the WhatEverFi API and worker, then restart them.
3. Open Integrations in WhatEverFi and check that the Apps catalog appears.
4. Connect one app, such as Gmail, and ask a bot to read something from it.
5. To cut costs or show your own name on the consent screen, add your own OAuth app for your busiest apps as a custom auth config in Composio.

## FAQ

### How much does Composio cost?

As of November 2026, the Hobby plan is free with 100,000 tool calls a month, up to 20,000 of them on Composio's managed apps, and stops at that cap. Pro is $29 a month, paid as usage credit, and bills extra calls at $0.30 per 1,000 on your own apps and $0.50 to $10 per 1,000 on managed apps. Enterprise is custom. See [Composio's pricing page](https://composio.dev/pricing).

### Is Composio free?

Yes, for up to 100,000 tool calls a month, with no credit card. Only 20,000 of those can go through Composio's managed OAuth apps, and the plan pauses at the cap rather than billing you.

### Is Composio open source?

Partly. Composio's SDKs are on [GitHub](https://github.com/ComposioHQ/composio) under the MIT license. The hosted service that stores logins and runs actions is not, and self-hosting it is an Enterprise option. WhatEverFi uses that service through an API key.

### Is Composio safe to use?

Composio says it holds SOC 2 Type II and ISO 27001 certifications. In May 2026 it disclosed a breach that exposed some customer connections, mostly GitHub, and API keys, and it has since changed how it stores and returns credentials. Keep approvals on for actions that change data.

### Composio vs Pipedream: which is better for AI agents?

Both host app logins and give agents thousands of actions. Composio has the bigger free tier and bills per call. [Pipedream Connect](https://whateverfi.com/integration-platforms/pipedream/) has more apps, bills per user and per 30 seconds of compute, and has no free production use. In WhatEverFi, Composio needs one API key and bots search its actions; Pipedream needs a project and OAuth client and serves each account's tools over its MCP server. You can turn on both.

### What are the best Composio alternatives?

[Pipedream Connect](https://whateverfi.com/integration-platforms/pipedream/) is the closest. Zapier MCP has the most apps, Arcade focuses on per-user authorization, and Nango, which publishes its source, suits teams building integrations into a product. To skip a middleman, use the app's own [MCP server](https://whateverfi.com/integration-platforms/mcp/) or an [API connector](https://whateverfi.com/integration-platforms/api-connectors/).

### Does WhatEverFi need Composio?

No. Composio is optional. Without a managed provider, a self-hosted server shows no app catalog, but bots can still use [MCP servers](https://whateverfi.com/integration-platforms/mcp/), OpenAPI and GraphQL [API connectors](https://whateverfi.com/integration-platforms/api-connectors/), and plugins you add.

### Can a WhatEverFi bot send email through Composio without asking?

Only if you let it. In the Ask approval mode, the bot asks before any action that changes something, such as sending an email. You can allow a specific action for good or block it entirely in Settings → Approvals.

## More ways to give AI agents tools

- [Compare all integration platforms](https://whateverfi.com/integration-platforms/)
- [Pipedream](https://whateverfi.com/integration-platforms/pipedream/): Teams already on Pipedream Connect
- [MCP servers](https://whateverfi.com/integration-platforms/mcp/): Apps that publish their own MCP server
- [API connectors](https://whateverfi.com/integration-platforms/api-connectors/): APIs with a key and no MCP server

## Sources

- [Composio](https://composio.dev)
- [Composio pricing](https://composio.dev/pricing)
- [Composio startup program](https://composio.dev/startups)
- [Composio MCP gateway, compliance and deployment](https://composio.dev/mcp-gateway)
- [Composio, May 2026 security incident](https://composio.dev/blog/composio-may-2026-security-incident)
- [Composio SDKs on GitHub](https://github.com/ComposioHQ/composio)
- [Composio, custom auth configs](https://docs.composio.dev/docs/auth-configuration/custom-auth-configs)
- [Pipedream pricing](https://pipedream.com/pricing)
- [Zapier pricing](https://zapier.com/pricing)
- [Arcade pricing](https://www.arcade.dev/pricing)
- [Merge Agent Handler pricing](https://www.merge.dev/pricing/agent-handler)
- [Nango pricing](https://nango.dev/pricing)
- [WhatEverFi, tools and integrations](https://github.com/elie222/rakazo/blob/main/docs/self-host-integrations.md)
