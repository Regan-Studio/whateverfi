# Turn any OpenAPI or GraphQL API into tools for your AI agents

Many apps have an API but no MCP server and no ready-made integration. An API connector closes that gap: point it at the API's [OpenAPI](https://www.openapis.org) description or GraphQL endpoint, and each operation becomes a tool an AI agent can call. There is no platform fee in the middle: you pay only what the API itself charges. [integrations.sh](https://integrations.sh) is an open source catalog that helps you find those descriptions.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, bots use tools in your apps, and each bot also has its own computer. You can use it on WhatEverFi Cloud or host it yourself. API connectors let your bots use apps that aren't in the [integrations catalog](https://whateverfi.com/integrations/), with only an API key.

Updated November 4, 2026.

## What is an API connector?

An OpenAPI document lists a REST API's operations, their parameters and the shape of each request. A GraphQL API describes its own schema when asked, through introspection. An API connector reads that description and turns each operation into a tool, so an agent can call the API without anyone writing code for it.

[integrations.sh](https://integrations.sh) is an [open source](https://github.com/UsefulSoftwareCo/integrations) registry of the ways agents can reach a service: MCP servers, OpenAPI descriptions, GraphQL endpoints and command-line tools, grouped by domain, with notes on how each signs in. Services list themselves by publishing a `/.well-known/integrations.json` file.

## What bots can do with API connectors in WhatEverFi

- Use a REST API from its OpenAPI description. Paste the document's URL, in JSON or YAML, and WhatEverFi turns every operation with an `operationId` into a tool, up to 100 per API.
- Use a GraphQL API from its endpoint. WhatEverFi introspects the schema and turns queries and mutations into tools, up to 100 per API.
- Authenticate with a bearer token or an API key header. The key is encrypted, never sent to the model, and removed from what the API sends back.
- Find an API by domain. When the operator points `INTEGRATIONS_CATALOG_URL` at an integrations.sh-compatible catalog, **Search by domain** adds a service's OpenAPI description or MCP server with the address and sign-in method filled in.
- Read without asking. A `GET` operation or a GraphQL query counts as reading, so in **Ask** mode it usually runs without a card. Writes ask first, under your [approval settings](https://whateverfi.com/docs/approvals/).
- Share it. Every bot in the [spaces](https://whateverfi.com/docs/spaces/) you choose can use the connector. API connectors share one tool count with the MCP servers installed from **Integrations**: past 20 tools in total, a bot searches for the operations it needs instead of loading them all.

## What API connectors cost

WhatEverFi adds nothing per call: API connectors are part of every plan on WhatEverFi Cloud and free when you host WhatEverFi yourself. integrations.sh is free and open source. The cost is whatever the API's owner charges for the calls your bot makes, under your own account and key, and it comes in three shapes.

Many business apps include API access in the plan you already pay for and limit how fast you can call it. Some services charge for each request or for what the request does, such as sending a text message. And your own company's APIs cost only the servers they run on. Either way the bill comes from the API's owner, on the terms of your account with them.

**What a bot's API calls cost, by example**

| API | What the API costs | Limits that matter for a bot |
| --- | --- | --- |
| GitHub REST API | Included with any GitHub account | 5,000 requests an hour with a personal access token |
| HubSpot API | Included in every HubSpot plan, Free included | 100 requests per 10 seconds and 250,000 a day on Free and Starter; 190 and 625,000 on Professional |
| Twilio SMS | $0.0083 per US message segment, plus a carrier fee of $0.0025 to $0.005 | Business texting in the US needs A2P 10DLC registration first |
| Your own API | Your hosting | Whatever you set |

From [GitHub's rate limit docs](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api), [HubSpot's usage guidelines](https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines) and [Twilio's US SMS pricing](https://www.twilio.com/en-us/sms/pricing/us), checked November 2026.

- A worked example: a bot that texts 300 appointment reminders a month through Twilio spends about 300 × ($0.0083 + $0.0045) ≈ $3.84, plus the phone number's monthly fee. The same bot reading 2,000 HubSpot records a month costs nothing beyond your HubSpot plan, well inside its limits.
- The cost people miss is model tokens. Every response an API sends back goes into the bot's context and is billed as input by your model provider. WhatEverFi cuts responses at 1 MB, but asking for only the fields you need, through an operation's filters, saves more.
- Rate limits belong to your account or key, so several bots sharing one key share one limit. A bot that hits a limit gets the API's error and can wait and try again.
- Compared with a hosted platform: [Composio](https://whateverfi.com/integration-platforms/composio/) charges from $0.30 to $10 per 1,000 calls past its free tier and [Pipedream Connect](https://whateverfi.com/integration-platforms/pipedream/) starts at $99 a month, on top of the same API limits. An API connector skips that layer when a key is all you need.

## API connector vs MCP server vs a hosted platform

**Three ways to give a bot tools for an app**

| Compared | API connector | MCP server | Composio or Pipedream |
| --- | --- | --- | --- |
| Who writes the tools | Generated from the API's description | The app's team or whoever runs the server | The platform |
| Sign-in | API key or token | OAuth, token or header | Managed OAuth |
| Cost on top of the app | None | None for an app's own server | Per call, credit or user |
| Where logins live | Encrypted in WhatEverFi | Encrypted in WhatEverFi | With the platform |
| Tool quality | As good as the API's descriptions | Usually written for agents | Written for agents |
| Best for | APIs with a key and no MCP server, and your own APIs | Apps that publish a server | Apps that need OAuth and have no server |

## When to choose API connectors

Choose an API connector when an app has a documented API and an API key, but no MCP server and no integration in the catalog. That covers many smaller SaaS tools and your company's own APIs, and needs no other service.

If the app publishes an [MCP server](https://whateverfi.com/integration-platforms/mcp/), use that instead: its tools are written for agents and it can sign you in with OAuth. If the app needs an OAuth sign-in and has no MCP server, [Composio](https://whateverfi.com/integration-platforms/composio/) or [Pipedream](https://whateverfi.com/integration-platforms/pipedream/) handle that for you. The [comparison](https://whateverfi.com/integration-platforms/) covers all four.

## Limits and security

- There is no OAuth sign-in for API connectors. Use an API key or a long-lived token; a token that expires has to be replaced by hand.
- An OpenAPI document must list a server URL, give operations an `operationId` and be under 2 MB. Only the first 100 operations are imported, and request bodies are JSON.
- A GraphQL API must allow introspection. Larger schemas are cut to 100 operations, split between queries and mutations.
- APIs must be at public addresses. Localhost and private networks are refused unless the operator sets `MCP_ALLOW_PRIVATE_ENDPOINT=true` on the API and worker, which allows them for every user. Cloud metadata addresses stay blocked.
- The Settings form sends a key as a bearer token or a header. Connectors installed through WhatEverFi's API can also put it in the URL as a query parameter, so avoid that for sensitive keys. Redirects aren't followed, each call has 30 seconds and responses over 1 MB are cut short.

## How to set it up

Anyone with an account can add an API connector, on WhatEverFi Cloud or a self-hosted server. The catalog search is an optional setting for the admin of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/). See [Connect apps](https://whateverfi.com/docs/integrations/) and the [tools and integrations guide](https://whateverfi.com/docs/self-host-integrations/).

1. Find the API's OpenAPI document or GraphQL endpoint in its developer docs or on [integrations.sh](https://integrations.sh).
2. Open **Integrations** from **Connect apps** at the bottom of the sidebar, choose **+**, then **OpenAPI** or **GraphQL**.
3. Paste the URL, choose **No auth**, **Bearer token** or **API key header**, enter the key, and choose **Verify and add**.
4. Ask a bot to use the API, and approve any call that changes something.
5. Optionally, an admin sets `INTEGRATIONS_CATALOG_URL` on the API to `https://integrations.sh` or a compatible mirror to turn on **Search by domain**.

## FAQ

### Can an AI agent use any REST API?

Any that has an OpenAPI description: WhatEverFi turns each operation into a tool. For an API without one, ask the bot to save your key as a [reusable credential](https://whateverfi.com/docs/bot-secrets/), and it can call the API without ever seeing the key.

### What is integrations.sh?

An open source catalog of the MCP servers, OpenAPI descriptions, GraphQL APIs and command-line tools that services offer, grouped by domain. WhatEverFi searches it to find an app's MCP server, and can search it or a mirror to find an app's API.

### Should I use an API connector or an MCP server?

Use the app's [MCP server](https://whateverfi.com/integration-platforms/mcp/) when it has one. Its tools are designed for agents and it supports OAuth. Use an API connector when the app only offers an API and a key.

### How much does it cost to connect an AI agent to an API?

WhatEverFi charges nothing per call. You pay the API's own price under your account, which for many business apps is included in your plan with a rate limit, and for metered services such as SMS or search is a price per request. The bot's model tokens for reading the responses are billed by your model provider.

### Does the model see my API key?

No. WhatEverFi stores the key encrypted, adds it to each request itself, and removes it from responses before the bot sees them.

## More ways to give AI agents tools

- [Compare all integration platforms](https://whateverfi.com/integration-platforms/)
- [Composio](https://whateverfi.com/integration-platforms/composio/): A large app catalog with no OAuth apps to register
- [Pipedream](https://whateverfi.com/integration-platforms/pipedream/): Teams already on Pipedream Connect
- [MCP servers](https://whateverfi.com/integration-platforms/mcp/): Apps that publish their own MCP server

## Sources

- [integrations.sh](https://integrations.sh)
- [integrations.sh on GitHub](https://github.com/UsefulSoftwareCo/integrations)
- [integrations.sh, publishing a service](https://integrations.sh/publishing/)
- [OpenAPI Initiative](https://www.openapis.org)
- [GraphQL, introspection](https://graphql.org/learn/introspection/)
- [GitHub, REST API rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)
- [HubSpot, API usage guidelines](https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines)
- [Twilio, US SMS pricing](https://www.twilio.com/en-us/sms/pricing/us)
- [WhatEverFi, tools and integrations](https://github.com/elie222/rakazo/blob/main/docs/self-host-integrations.md)
- [WhatEverFi, connect apps](https://github.com/elie222/rakazo/blob/main/docs/integrations.md)
