# Run your AI agents' computers on InstaBox

[InstaBox](https://instabox.sh) gives each AI agent a Linux machine of its own in the cloud. Each machine is a Firecracker microVM running Debian, which you start, pause and delete through an API, a command-line tool or a TypeScript SDK.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each bot gets its own computer with a desktop, a browser, a terminal and files. You can watch its screen and take over at any time. When you self-host WhatEverFi, InstaBox can be where those computers live. Its strengths are price and the pause: it bills by the second at low hourly rates, and a stopped computer keeps its memory, so a bot comes back to the same open tabs and running programs.

Updated November 4, 2026.

## What is InstaBox?

[InstaBox](https://instabox.sh) runs cloud computers for AI agents. Each machine is a Firecracker microVM, a lightweight virtual machine with its own kernel, running Debian 13 with a 20 GiB disk that is kept between sessions. Machines start from templates, can be paused with their memory and resumed later, and are billed by the second while they run.

Its default template, `agent-browser`, comes with a desktop, Chromium, Docker and common programming languages, and it is what WhatEverFi builds on. You need an InstaBox account and an API key. Usage is billed by InstaBox, not by WhatEverFi.

InstaBox's API has no region setting: it decides where each machine runs.

## InstaBox pricing

InstaBox bills CPU and memory by the second while a machine runs. A paused machine costs only its disk, and its saved memory is free. Paid plans have a monthly fee that comes back as the same amount of usage credit. The free plan runs one machine and is never billed.

**InstaBox plans as of November 2026**

| Plan | Monthly fee | Machines | Sizes |
| --- | --- | --- | --- |
| Free | $0 | 1, paused ones included | 4 vCPU / 8 GiB only |
| Pro | $20, returned as usage credit | 100 running, 500 in all | Up to 8 vCPU / 16 GiB |
| Builder | $100, returned as usage credit | 200 running, 1,000 in all | Up to 16 vCPU / 32 GiB |
| Team | $500, returned as usage credit | 500 running, no cap in all | Up to 32 vCPU / 64 GiB |
| Enterprise | Custom | No cap | Up to 32 vCPU / 64 GiB |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Sources: [InstaBox pricing](https://instabox.sh/pricing) and [limits](https://instabox.sh/docs/account/limits).

- Usage costs $0.004 per vCPU-hour and $0.00225 per GiB-hour of memory, metered by the second. The default 4 vCPU / 8 GiB machine costs about $0.034 an hour.
- Disk is free on the free plan. Paid plans include disk across all their machines, 200 GiB on Pro up to 5 TiB on Team, then charge $0.08 per GiB a month.
- Each plan includes outgoing traffic, 100 GiB a month on the free plan and 1 TiB on Pro, then $0.02 per GiB. Incoming traffic is free.
- On the free plan, a machine pauses after 30 idle minutes and runs at most 8 hours at a time, both fixed, and its hours are capped each month.

## What a WhatEverFi computer costs on InstaBox

Monthly costs follow [the method on the comparison page](https://whateverfi.com/sandboxes/#pricing): one person's bots sharing one 2 vCPU / 4 GB computer, running 4 hours a workday or around the clock. For N people, multiply by N. WhatEverFi's InstaBox computers are bigger: WhatEverFi doesn't pick a size, so every computer gets the plan's default, 4 vCPU / 8 GB, about $0.034 an hour. The table compares that size. On Pro, the $20 fee comes back as usage credit, enough for about 590 hours of it a month, shared by every computer on the account.

**One 4 vCPU / 8 GB computer a month**

| Provider | 4 hours a workday (88 hours) | Around the clock (720 hours) |
| --- | --- | --- |
| InstaBox, free plan | $0, if the plan's monthly hours cover it | Not possible: each run pauses after 8 hours |
| InstaBox, Pro | $20, the fee ($2.99 of usage) | $24.48 |
| [Boat](https://whateverfi.com/sandboxes/boat/) | $20, the minimum | $25.92 |
| [Novita](https://whateverfi.com/sandboxes/novita/) | $20.53 | $167.96 |
| [E2B](https://whateverfi.com/sandboxes/e2b/) | $29.15 | $238.46, or $388.46 with Pro for 24-hour sessions |
| [Daytona](https://whateverfi.com/sandboxes/daytona/) | $29.15 | $238.46 |

Computed from each provider's rates, checked November 2026, before free credits. Your model provider bills separately.

- A paused computer costs only its disk. Each computer's 20 GiB disk counts toward the disk a paid plan includes, so ten computers fit in Pro's 200 GiB.
- Around-the-clock use needs a paid plan. WhatEverFi stops a computer after two hours of uptime, but waits while a run is executing, someone controls the screen or a coding agent is working. On the free plan, a computer kept busy that long can reach InstaBox's 8-hour limit, which pauses it, and it can't be woken until a cooldown of at least 5 minutes ends.

## What a bot can do on an InstaBox computer

WhatEverFi turns each InstaBox machine into a full bot computer. A bot works there the same way it does on any other Linux provider, and you see it in the computer panel next to the chat.

- Use a Linux desktop and Chromium, with each bot on its own screen when several bots share one computer.
- Run shell commands, which you or the bot can cancel, and read and write files.
- You can open a terminal on the computer yourself, watch the screen live, and take over when a bot asks for help with a login or a captcha.
- When the computer sits idle or is stopped, WhatEverFi pauses it instead of deleting it. Files, browser logins and the memory of running programs are kept, and the next use resumes the same computer.

## When to choose InstaBox

Choose InstaBox when you want hosted computers that pause with their memory at a low hourly price, or want to try a bot computer on a free plan before you pay anything. Each computer is a microVM with its own kernel, and the `agent-browser` template already has a desktop and Chromium, so there is no template to build first.

[Novita](https://whateverfi.com/sandboxes/novita/) and [E2B](https://whateverfi.com/sandboxes/e2b/) also pause with memory and bill by the second, at higher rates. [Boat](https://whateverfi.com/sandboxes/boat/) is what WhatEverFi Cloud uses, with a separate Chrome profile for each bot, but it keeps the disk, not running programs. If you don't want a cloud account at all, [Docker](https://whateverfi.com/sandboxes/docker/) runs computers on your own server. The [sandbox comparison](https://whateverfi.com/sandboxes/) puts them side by side.

## Limits

- The free plan allows one machine, paused ones included, which fits one person's bots in one space. More computers need a paid plan.
- You can't choose a size or a region from WhatEverFi. Every computer gets the plan's default 4 vCPU / 8 GB.
- InstaBox also pauses a computer after 30 idle minutes on its own. WhatEverFi's default idle stop, after 10 minutes, normally comes first.
- WhatEverFi creates every InstaBox computer without your account's vault, so secrets saved on that InstaBox account never reach a bot's computer. Anything a bot needs has to come through WhatEverFi.
- The desktop is served on the computer's public HTTPS address, and every screen and terminal needs its own token.
- All the computers on one API key share that account's limits on requests at once, for commands, files, screens and terminals. Many busy computers at the same moment can slow each other down.
- InstaBox computers are for self-hosted WhatEverFi. WhatEverFi Cloud runs its computers on Boat.

## How to set it up

This is done once by the admin of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/) deployment. Everyone else on that deployment then gets InstaBox computers without doing anything.

1. Create an API key on the API Keys page of the InstaBox dashboard, or with `instabox keys create --name rakazo`. Computers are created in the key's workspace, which pays for them.
2. Set `SANDBOX_PROVIDER=instabox` and `INSTABOX_API_KEY` on both the API and the worker, then restart them. Or, as an admin, open Settings → Computer and choose InstaBox under New computers run on.
3. Open a bot's computer to check that it starts and shows a desktop. A new computer is created in about two seconds, and the first start installs the rest of WhatEverFi's desktop tools in a few more.

## FAQ

### How does InstaBox's price compare with E2B?

WhatEverFi's InstaBox computer has 4 vCPU / 8 GB and costs about $0.034 an hour. Its E2B computer has 2 vCPU / 4 GB and costs about $0.17 an hour. The machines are different sizes. More than one InstaBox computer needs the $20 Pro plan, whose fee comes back as usage credit. Both use Firecracker microVMs and pause with memory. [E2B](https://whateverfi.com/sandboxes/e2b/) is open source.

### Does InstaBox's free plan work with WhatEverFi?

Yes, for one computer. The free plan can create from `agent-browser`, the template WhatEverFi uses, at the default size. A second computer, such as one for a bot with a computer of its own, needs a paid plan.

## More sandboxes for AI agents

- [Compare all sandboxes](https://whateverfi.com/sandboxes/)
- [Boat](https://whateverfi.com/sandboxes/boat/): Many bots with separate logins
- [E2B](https://whateverfi.com/sandboxes/e2b/): Public or multi-user deployments
- [Daytona](https://whateverfi.com/sandboxes/daytona/): Teams already on Daytona
- [Novita](https://whateverfi.com/sandboxes/novita/): Bots that pick up where they left off
- [Railway](https://whateverfi.com/sandboxes/railway/): Running everything in one Railway account
- [Wuying](https://whateverfi.com/sandboxes/wuying/): Windows apps, Alibaba Cloud and mainland China
- [Docker](https://whateverfi.com/sandboxes/docker/): Self-hosting with no cloud account
- [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/): Teams that already run Kubernetes
- [Your computer](https://whateverfi.com/sandboxes/your-computer/): Bots that need your real apps and logins

## Sources

- [InstaBox](https://instabox.sh)
- [InstaBox pricing](https://instabox.sh/pricing)
- [InstaBox docs, pricing](https://instabox.sh/docs/account/pricing)
- [InstaBox docs, limits](https://instabox.sh/docs/account/limits)
- [InstaBox docs, auto-pause and max-run](https://instabox.sh/docs/machines/auto-pause)
- [InstaBox docs, errors](https://instabox.sh/docs/reference/errors)
- [Boat pricing](https://boat.dev)
- [Novita sandbox pricing](https://docs.novita.ai/guides/sandbox-pricing)
- [E2B pricing](https://e2b.dev/pricing)
- [Daytona pricing](https://www.daytona.io/pricing)
- [WhatEverFi, computer providers](https://github.com/elie222/rakazo/blob/main/docs/self-host-sandbox-providers.md)
- [WhatEverFi, computer runtime and isolation](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
