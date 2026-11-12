# Run your AI agents' computers on Novita

Novita's Agent Sandbox gives AI agents their own Linux machines in the cloud, started and stopped through an API. Novita AI also sells model APIs and GPUs, and its sandbox works with the E2B SDK.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each bot gets its own computer with a desktop, a browser, a terminal and files. You can watch its screen and take over at any time. When you self-host WhatEverFi, Novita can be where those computers live. Its main strength is the pause: an idle computer is frozen with its memory intact, so a bot comes back to the same open tabs and running programs.

Updated November 4, 2026.

## What is Novita?

[Novita AI](https://novita.ai) is a cloud platform for AI developers. Alongside model APIs and GPU instances, it runs the [Agent Sandbox](https://novita.ai/sandbox): isolated Linux machines that an agent can start in seconds, run commands in, and pause when it is done. A paused sandbox keeps its disk and memory, and resumes as the same machine.

Novita offers a desktop image for these sandboxes, which is what WhatEverFi builds on. You need a Novita account and an API key. Usage is billed by Novita, not by WhatEverFi.

Sandboxes run in the US, in Phoenix by default. Novita describes the isolation only as system-level separation and doesn't name the technology.

## Novita sandbox pricing

Novita bills CPU and memory by the second while a sandbox runs, with no monthly fee. Pausing stops both. Paused sandboxes, templates and snapshots count as stored data, with 60 GB free per account. New accounts can get $100 of credit by answering a short setup survey, with no card needed.

**Novita Agent Sandbox rates as of November 2026**

| What | Price or limit |
| --- | --- |
| CPU | $0.0000098 per vCPU-second, about $0.035 an hour |
| Memory | $0.0000032 per GiB-second, about $0.012 an hour |
| Disk while running | 20 GB per sandbox, free |
| Stored data | 60 GB free per account, then $0.00009 per GB-hour |
| Free credit | $100 after a setup survey |
| Free tier limits | 5 sandboxes at once, 1-hour sessions, up to 2 vCPU / 4 GB |
| Paid limits | 100 sandboxes at once, 24-hour sessions, up to 8 vCPU / 8 GB |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Sources: [Novita sandbox pricing](https://docs.novita.ai/guides/sandbox-pricing) and the [sandbox overview](https://docs.novita.ai/guides/sandbox-overview).

## What a WhatEverFi computer costs on Novita

Monthly costs follow [the method on the comparison page](https://whateverfi.com/sandboxes/#pricing): one person's bots sharing one 2 vCPU / 4 GB computer, running 4 hours a workday or around the clock. For N people, multiply by N. WhatEverFi's `rakazo-computer` template on Novita is exactly that size, about $0.12 an hour while it runs.

**One 2 vCPU / 4 GB computer a month**

| Provider | 4 hours a workday (88 hours) | Around the clock (720 hours) |
| --- | --- | --- |
| Novita | $10.26 | $83.98 |
| [E2B](https://whateverfi.com/sandboxes/e2b/) | $14.57 | $119.23, or $269.23 with Pro for 24-hour sessions |
| [Daytona](https://whateverfi.com/sandboxes/daytona/) | $14.57 | $119.23 |
| [Boat](https://whateverfi.com/sandboxes/boat/) | $20 minimum, at the 4 vCPU / 8 GB size self-hosted WhatEverFi uses | $25.92 |

Computed from each provider's rates, checked November 2026, before free credits. Your model provider bills separately.

- The $100 credit covers about 850 hours of this computer.
- A paused computer keeps its memory as stored data. A few paused computers fit within the 60 GB free allowance; beyond it, each extra 10 GB costs about $0.65 a month.
- Around-the-clock use needs the paid tier, where a session ends after 24 hours. WhatEverFi pauses a computer after two hours of uptime, but waits while a run is executing, someone controls the screen or a coding agent is working. A computer kept busy that long can reach Novita's 24-hour limit, which cuts the work off until the next resume.

## What a bot can do on a Novita computer

WhatEverFi turns each Novita sandbox into a full bot computer. A bot works there the same way it does on any other Linux provider, and you see it in the computer panel next to the chat.

- Use a Linux desktop and browser, with each bot on its own screen when several bots share one computer.
- Run shell commands, which you or the bot can cancel, and read and write files.
- You can open a terminal on the computer yourself, watch the screen live, and take over when a bot asks for help with a login or a captcha.
- When the computer sits idle or is stopped, WhatEverFi pauses it instead of deleting it. Files, browser profiles and the memory of running programs are kept, and the next use resumes the same computer.

## When to choose Novita

Choose Novita when bots run long, multi-step work in a browser and you want them to come back to exactly where they were, not to a fresh desktop rebuilt from saved files. It also fits if you already use Novita for models or GPUs and want one fewer account.

[E2B](https://whateverfi.com/sandboxes/e2b/) pauses idle computers in a similar way and is what WhatEverFi's own live computer tests run on. [Boat](https://whateverfi.com/sandboxes/boat/) is what WhatEverFi Cloud uses, with a separate Chrome profile for each bot, but it keeps the disk, not running programs. [Railway](https://whateverfi.com/sandboxes/railway/) rebuilds a computer from saved files after every stop. If you don't want a cloud account at all, [Docker](https://whateverfi.com/sandboxes/docker/) runs computers on your own server. The [sandbox comparison](https://whateverfi.com/sandboxes/) puts them side by side.

## Limits

- It needs a one-time template build in your Novita account. WhatEverFi does not fall back to Novita's larger stock desktop.
- You can't pick a region from WhatEverFi, and Novita's standard regions are in the US.
- On the free tier a session lasts at most an hour and five sandboxes can run at once.
- Paused computers still use storage, which Novita bills and retains on its own terms.
- If WhatEverFi can't confirm that a command stopped, it pauses the computer and sets it aside. It stays paused until you choose Recover or Reset, so it is never resumed silently with a stuck command inside.
- Novita computers are for self-hosted WhatEverFi. WhatEverFi Cloud runs its computers on Boat.

## How to set it up

This is done once by the admin of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/) deployment. Everyone else on that deployment then gets Novita computers without doing anything.

1. Create an API key in your Novita account.
2. Build the computer template in that same account: `NOVITA_API_KEY=<your-key> pnpm sandbox:novita-template`. It creates a template called `rakazo-computer` with 2 vCPU and 4 GB of memory, based on Novita's desktop image.
3. Set `SANDBOX_PROVIDER=novita` and `NOVITA_API_KEY` on both the API and the worker, then restart them. Or, as an admin, open Settings → Computer and choose Novita under New computers run on.
4. Open a bot's computer to check that it starts and shows a desktop.

## Using your own template

To use a different desktop template, set `SANDBOX_TEMPLATE` to its name both when you build it and on the API and worker. Rebuild after the template definition changes. Computers that already exist keep the template and resources they started with. The [computer providers guide](https://whateverfi.com/docs/self-host-sandbox-providers/) has the full details.

## FAQ

### Is Novita cheaper than E2B?

Per second, yes: about 30% less for the same 2 vCPU / 4 GB computer, with no monthly fee for 24-hour sessions. Both pause with memory. [E2B](https://whateverfi.com/sandboxes/e2b/) uses Firecracker microVMs, is open source and has more regions.

### Is Novita's sandbox compatible with E2B?

Novita's sandbox works with the E2B SDK. In WhatEverFi they are separate providers with their own settings, so you choose [Novita](https://whateverfi.com/sandboxes/novita/) or [E2B](https://whateverfi.com/sandboxes/e2b/) with `SANDBOX_PROVIDER`.

## More sandboxes for AI agents

- [Compare all sandboxes](https://whateverfi.com/sandboxes/)
- [Boat](https://whateverfi.com/sandboxes/boat/): Many bots with separate logins
- [E2B](https://whateverfi.com/sandboxes/e2b/): Public or multi-user deployments
- [Daytona](https://whateverfi.com/sandboxes/daytona/): Teams already on Daytona
- [InstaBox](https://whateverfi.com/sandboxes/instabox/): Low-cost computers that pause with memory
- [Railway](https://whateverfi.com/sandboxes/railway/): Running everything in one Railway account
- [Wuying](https://whateverfi.com/sandboxes/wuying/): Windows apps, Alibaba Cloud and mainland China
- [Docker](https://whateverfi.com/sandboxes/docker/): Self-hosting with no cloud account
- [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/): Teams that already run Kubernetes
- [Your computer](https://whateverfi.com/sandboxes/your-computer/): Bots that need your real apps and logins

## Sources

- [Novita Agent Sandbox](https://novita.ai/sandbox)
- [Novita sandbox overview](https://docs.novita.ai/guides/sandbox-overview)
- [Novita sandbox pricing](https://docs.novita.ai/guides/sandbox-pricing)
- [E2B pricing](https://e2b.dev/pricing)
- [Daytona pricing](https://www.daytona.io/pricing)
- [Boat pricing](https://boat.dev)
- [WhatEverFi, computer providers](https://github.com/elie222/rakazo/blob/main/docs/self-host-sandbox-providers.md)
- [WhatEverFi, computer runtime and isolation](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
