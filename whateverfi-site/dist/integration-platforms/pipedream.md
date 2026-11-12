# Pipedream Connect for AI agents: pricing, MCP and alternatives

[Pipedream Connect](https://pipedream.com/connect) is the part of Pipedream that lets AI agents act in other apps on behalf of each user. Pipedream runs the sign-in for each app, stores the tokens, and serves the app's actions as tools from a remote MCP server. Development is free; production starts at $99 a month billed yearly. Pipedream is owned by Workday.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and bots use tools in your apps as well as their own computer. When you host WhatEverFi yourself, a Pipedream Connect project can supply the apps people connect. Pipedream supplies the tools and logins. WhatEverFi picks which connected account each bot acts as and asks you before anything that changes data.

Updated November 4, 2026.

## What is Pipedream Connect?

[Pipedream](https://pipedream.com) started as a workflow automation tool. Workday bought it in a deal announced in November 2025, and Pipedream now focuses on Connect: managed sign-in for 3,000+ APIs, 10,000+ prebuilt actions and triggers, an API proxy for calls no action covers, and a remote MCP server that serves those actions to any MCP client.

Pipedream's Workflows product is in maintenance mode and shuts down on March 31, 2027. Pipedream says Connect, its MCP servers and the API proxy are not affected. The code for Pipedream's integrations is public on GitHub under its own source-available license, which bars competing commercial use, so it is not open source, and the service can't be self-hosted. Pipedream says every plan is covered by SOC 2 Type 2 and GDPR, with HIPAA on its Business plan.

## What is Pipedream MCP?

Pipedream MCP is Pipedream's remote [MCP server](https://whateverfi.com/integration-platforms/mcp/). Any MCP client, such as Claude, Cursor or an agent you build, can connect to it and get the actions for an app as tools. Pipedream identifies each end user with an external user ID, runs the sign-in for that user, and calls the app's API as them. It is included in every Connect plan, and each tool call is billed like any other action.

WhatEverFi uses Pipedream through that server. It opens one MCP connection per connected account, so a person with two Gmail accounts gets two labeled sets of Gmail tools, and a bot can't mix them up.

## Pipedream Connect pricing

Connect is billed on two meters: **external users**, the people your app connects accounts for, and **credits**. A credit buys 30 seconds of compute at the default 256 MB of memory, and running an action, an MCP tool call, a proxy request or a trigger event each uses at least one. Listing apps and accounts and other management calls are free. Most app actions finish well inside 30 seconds, so in practice one call is one credit; a slow call costs more.

**Pipedream Connect plans as of November 2026**

| Plan | Free | Startup | Business |
| --- | --- | --- | --- |
| Price | $0 | $99/mo billed yearly, or $150 monthly | Custom, yearly contract |
| Production use | No: development only | Yes | Yes |
| External users | 10 test users in development | 100 included, then $2 per user a month | Volume pricing |
| Credits | Development only | 10,000 a month, then $0.012 each | Volume pricing |
| Apps and tools | 3,000+ apps, 10,000+ tools, MCP, proxy | Same | Same |
| Your own OAuth clients | Yes | Yes | Yes |
| Compliance | SOC 2 Type 2, GDPR | SOC 2 Type 2, GDPR | Adds HIPAA, SSO, SCIM, static egress IPs |
| Support | Community | Email | SLA and a shared Slack channel |

Prices from [Pipedream's pricing page](https://pipedream.com/pricing) and [Connect environments docs](https://pipedream.com/docs/connect/environments), checked November 2026. A user counts once however many apps they connect.

- The development environment is for your own testing. It allows 10 external users, and connecting an app only works in a browser signed in to pipedream.com, so it can't serve a team.
- Credits scale with memory: an action given 1 GB uses four credits per 30 seconds.
- Unlike Composio, there is no free production tier. The smallest real deployment is $99 a month on a yearly plan.

## What WhatEverFi bots cost on Pipedream

WhatEverFi gives Pipedream one external user per person per space, so someone in two spaces counts as two users. The examples assume one space and calls that finish within 30 seconds. A small team is 5 people whose bots run about 40 app actions each per workday, about 4,400 calls a month. A larger team is 20 people at about 100 actions each, about 44,000 calls.

**Monthly Pipedream Connect bill for a team of WhatEverFi bots**

| Workload | Startup, billed yearly | Startup, billed monthly |
| --- | --- | --- |
| 5 people, 4,400 calls | $99, inside the 10,000 credits | $150 |
| 20 people, 44,000 calls | About $507: $99 plus 34,000 credits at $0.012 | About $558 |
| 150 people, the same 44,000 calls | About $607: the above plus 50 users at $2 | About $658 |

Worked from [Pipedream's pricing page](https://pipedream.com/pricing), checked November 2026. Model usage and the bots' computers are billed separately, by your model provider or by WhatEverFi.

## Pipedream vs Composio

They do the same job in WhatEverFi: a hosted catalog with managed sign-in. The difference is mostly price shape and catalog size. [Composio](https://whateverfi.com/integration-platforms/composio/) is free for real use at small volume and cheap per call; Pipedream has about twice as many apps, a fixed monthly floor, and a per-user charge that grows with your team.

**Pipedream Connect and Composio side by side**

| Compared | Pipedream Connect | Composio |
| --- | --- | --- |
| Apps | 3,000+ APIs, 10,000+ tools | 1,500+ toolkits |
| Free tier | Development only, 10 test users | 100,000 calls/mo, 20,000 on managed apps |
| Paid from | $99/mo billed yearly | $29/mo, as usage credit |
| Billed by | External user and 30 s of compute | Tool call, priced by app tier |
| 20 people, 44,000 calls | About $507/mo | About $48 to $240/mo on managed apps, $29 on your own |
| Managed OAuth | Yes, or your own OAuth client | Yes, or your own auth config |
| Source and self-hosting | Source-available, no self-hosting | MIT SDKs; self-hosting on Enterprise |
| Compliance | SOC 2 Type 2 on every plan, HIPAA on Business | SOC 2 Type II, ISO 27001; BAA as an add-on |
| Owner | Workday | Independent |
| Setup in WhatEverFi | Project ID, OAuth client ID and secret | One API key |
| How bots get tools | Pipedream's MCP server, one connection per account | Search Composio's actions and run them in batches |

Prices from [Pipedream](https://pipedream.com/pricing) and [Composio](https://composio.dev/pricing), checked November 2026.

## Pipedream alternatives

- **[Composio](https://whateverfi.com/integration-platforms/composio/)** is the closest, built into WhatEverFi, and much cheaper for a small team.
- **Zapier MCP** reaches 9,000+ apps and spends 2 Zapier tasks per call; the free plan's 100 tasks cover about 50 calls and paid plans start at $19.99 a month billed yearly ([pricing](https://zapier.com/pricing)). It isn't built into WhatEverFi, but you can add it as a remote [MCP server](https://whateverfi.com/integration-platforms/mcp/). It acts as the Zapier account that set it up.
- **Arcade** charges $25 a month plus $0.01 a call and focuses on authorization for each user. **Nango** publishes its source and suits teams adding integrations to their own product. Neither is built into WhatEverFi.
- **For Pipedream Workflows users**: Connect is not an automation builder. If you need scheduled workflows rather than tools for agents, look at n8n, Make or Windmill, or give a WhatEverFi bot a [routine](https://whateverfi.com/docs/routines/).
- **No middleman**: an app's own [MCP server](https://whateverfi.com/integration-platforms/mcp/) or an [API connector](https://whateverfi.com/integration-platforms/api-connectors/) adds no fee on top of the app.

## What your bots can do with Pipedream

With Pipedream set up, the Apps list under Integrations shows every Pipedream app that has actions. Many are also in the catalog on the [integrations page](https://whateverfi.com/integrations/), such as [HubSpot](https://whateverfi.com/integrations/hubspot/), [Slack](https://whateverfi.com/integrations/slack/), [Zendesk](https://whateverfi.com/integrations/zendesk/), [Google Sheets](https://whateverfi.com/integrations/googlesheets/) and [Jira](https://whateverfi.com/integrations/jira/).

- Connect an app on Pipedream's page. Choose Connect under Integrations, or ask a bot to connect it and use the card it posts. Pipedream's Connect Link opens for that app and you sign in there.
- Share it across the space. Once an app is connected, every bot in that space can use it.
- Use more than one account of the same app. Each connected account gets its own set of tools, labeled with the account. If that account goes away, WhatEverFi stops instead of using another one.
- Keep the tool list short. When the connected apps add up to more than 20 tools, bots get a searchable list instead of every tool up front.
- Ask before changes. Pipedream tools follow your [approval settings](https://whateverfi.com/docs/approvals/) like any other tool.
- Keep identities private. Pipedream sees an opaque ID for each person and space, not their name or email.

## When to choose Pipedream

Choose Pipedream when you self-host WhatEverFi and already use Pipedream Connect, need an app only Pipedream covers, or want SOC 2 coverage without an enterprise contract. Its tools reach WhatEverFi through Pipedream's own MCP server, one connection per account.

[Composio](https://whateverfi.com/integration-platforms/composio/) is the other managed option and the simpler one to set up: a single API key. You can run both, and the Apps list shows apps from each. On [WhatEverFi Cloud](https://whateverfi.com/pricing/) you don't need a Pipedream account: connecting apps is part of every plan. For an app that publishes its own [MCP server](https://whateverfi.com/integration-platforms/mcp/), or one you can reach with an [API connector](https://whateverfi.com/integration-platforms/api-connectors/), you don't need a hosted middleman at all. The [comparison](https://whateverfi.com/integration-platforms/) puts them side by side.

## Limits

- Pipedream's development environment is for testing with your own accounts. It allows 10 users, and connecting an app only works in a browser signed in to pipedream.com. WhatEverFi uses development unless you set production, which needs a Connect plan from Pipedream.
- WhatEverFi derives each person's Pipedream ID from `ENCRYPTION_KEY`. Change that key and existing Pipedream connections are orphaned and must be connected again.
- Logins live with Pipedream, not on your server, and every tool call goes through Pipedream's service.
- Pipedream is configured for the whole server. A space or user can't bring their own project.
- WhatEverFi refreshes Pipedream's app list every 10 minutes.

## How to set it up

These steps are for the admin of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/). WhatEverFi Cloud users don't need a Pipedream account; they [connect apps](https://whateverfi.com/docs/integrations/) from Integrations.

1. In [Pipedream](https://pipedream.com), create a project and an OAuth client for its API. Copy the client ID, client secret and project ID.
2. Set `PIPEDREAM_CLIENT_ID`, `PIPEDREAM_CLIENT_SECRET` and `PIPEDREAM_PROJECT_ID` on the WhatEverFi API and worker.
3. Set `PIPEDREAM_ENVIRONMENT` to `development` to test, or `production` for real users, then restart the API and worker.
4. Open Integrations in WhatEverFi, connect one app, and ask a bot to read something from it.

## FAQ

### How much does Pipedream Connect cost?

As of November 2026, development is free. Production needs the Startup plan: $99 a month billed yearly or $150 monthly, with 100 external users and 10,000 credits, then $2 per extra user and $0.012 per extra credit. A credit is 30 seconds of compute. Business is custom. See [Pipedream's pricing page](https://pipedream.com/pricing).

### Is Pipedream free?

Only for development: up to 10 test users, each connecting from a browser signed in to pipedream.com. Serving real users needs a paid plan.

### What is Pipedream MCP?

Pipedream's remote MCP server. It serves the actions for each app a user has connected as MCP tools, with Pipedream handling sign-in. It is included in every Connect plan, and each tool call uses credits. WhatEverFi connects to it once per connected account.

### Is Pipedream shutting down?

Pipedream Workflows and String shut down on March 31, 2027. Pipedream says Connect, its MCP servers and the API proxy are unaffected and still developed, and those are what WhatEverFi uses.

### Is Pipedream open source?

No. Pipedream's integration code is public on [GitHub](https://github.com/PipedreamHQ/pipedream) under the Pipedream Source Available License, which forbids competing commercial use. The hosted service is closed. WhatEverFi uses it through your project's credentials.

### Pipedream vs Composio for AI agents?

Both host app logins and give agents thousands of actions. Pipedream has more apps and bills per user and per 30 seconds of compute, from $99 a month. [Composio](https://whateverfi.com/integration-platforms/composio/) bills per call and is free up to 100,000 calls. In WhatEverFi, Composio takes one API key and bots search its actions; Pipedream takes a project and OAuth client and serves each account's tools over its MCP server. You can turn on both.

### What is a good Pipedream alternative?

[Composio](https://whateverfi.com/integration-platforms/composio/) for agents, which WhatEverFi also supports. Zapier MCP for the largest catalog, which works in WhatEverFi as a remote MCP server. For workflow automation rather than agent tools, n8n, Make or Windmill.

### Who owns Pipedream?

Workday. It announced the deal in November 2025 and reported it closed in its February 2026 results.

### Does WhatEverFi need Pipedream?

No. Pipedream is optional. Bots can use [Composio](https://whateverfi.com/integration-platforms/composio/), [MCP servers](https://whateverfi.com/integration-platforms/mcp/) or [API connectors](https://whateverfi.com/integration-platforms/api-connectors/) instead, or alongside it.

## More ways to give AI agents tools

- [Compare all integration platforms](https://whateverfi.com/integration-platforms/)
- [Composio](https://whateverfi.com/integration-platforms/composio/): A large app catalog with no OAuth apps to register
- [MCP servers](https://whateverfi.com/integration-platforms/mcp/): Apps that publish their own MCP server
- [API connectors](https://whateverfi.com/integration-platforms/api-connectors/): APIs with a key and no MCP server

## Sources

- [Pipedream Connect](https://pipedream.com/connect)
- [Pipedream pricing](https://pipedream.com/pricing)
- [Pipedream, Connect environments](https://pipedream.com/docs/connect/environments)
- [Pipedream, Workflows shutdown notice](https://pipedream.com/docs/workflows)
- [Pipedream on GitHub](https://github.com/PipedreamHQ/pipedream)
- [Workday, fourth quarter fiscal 2026 results](https://www.sec.gov/Archives/edgar/data/1327811/000132781126000010/wday-01312026x991.htm)
- [Composio pricing](https://composio.dev/pricing)
- [Zapier pricing](https://zapier.com/pricing)
- [Zapier MCP](https://zapier.com/mcp)
- [Arcade pricing](https://www.arcade.dev/pricing)
- [WhatEverFi, tools and integrations](https://github.com/elie222/rakazo/blob/main/docs/self-host-integrations.md)
