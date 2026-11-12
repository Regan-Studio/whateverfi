# Boat for AI agents: a cloud computer for every bot

[Boat](https://boat.dev) rents out persistent Ubuntu virtual machines built for AI agents. Each one is a full Linux computer in the cloud that keeps its disk when it stops, so an agent can come back to the same files and installed tools later.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each one gets its own computer with a desktop, browser, terminal and files that you can watch and take over. WhatEverFi Cloud runs those computers on Boat, and if you host WhatEverFi yourself you can point it at your own Boat account. Boat supplies the machine. WhatEverFi puts the desktop on it, gives each bot its own screen and browser, and decides when to start and stop it.

Updated November 4, 2026.

## What is Boat?

[Boat](https://boat.dev) is a Y Combinator company that runs cloud VMs for agents. Its machines are Ubuntu VMs in EU regions. Unlike a short-lived code sandbox, a Boat machine is meant to stay around: you can stop it, and when it resumes the disk is still there.

That makes it a good fit for an agent that works like a person at a desk. It signs in to websites, saves files and installs tools, and it expects all of that to still be there tomorrow.

Machines run in Germany, Finland and France. Boat doesn't name the hypervisor; each machine is a full VM rather than a container, with Docker available inside.

## Boat pricing

Boat bills machines by the second while they run, with a $20 minimum a month that counts entirely as machine time. Stopped machines don't bill for compute. New accounts get a 7-day trial with 25 compute hours.

**Boat machine sizes as of November 2026**

| Size | vCPU / memory / disk | Per hour | Full month |
| --- | --- | --- | --- |
| small | 2 / 4 GB / 51 GB | $0.018 | $13 |
| default | 4 / 8 GB / 51 GB | $0.036 | $26 |
| large | 8 / 16 GB / 111 GB | $0.072 | $53 |
| xlarge | 16 / 32 GB / 251 GB | $0.200 | $146, on plans of $100 or more |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Source: [boat.dev](https://boat.dev).

- The $20 minimum buys about 555 hours of the default size.
- Saved snapshots cost $0.056 a day each. WhatEverFi keeps one base snapshot with the desktop tools installed, about $1.70 a month.
- Starting machines faster than your plan's limit costs $0.03 to $0.07 a start.
- Plans allow 100 to 2,000 machines running at once.

## What a WhatEverFi computer costs on Boat

Monthly costs follow [the method on the comparison page](https://whateverfi.com/sandboxes/#pricing): one person's bots sharing one 2 vCPU / 4 GB computer, running 4 hours a workday or around the clock. For N people, multiply by N. WhatEverFi can't run Boat at that size: its smallest Boat machine is the default 4 vCPU / 8 GB, so the table compares that size on providers that bill per second. Because Boat is cheap per hour and has a monthly minimum, most people and small teams pay exactly $20: the minimum covers all the computers on one Boat account.

**One 4 vCPU / 8 GB computer a month**

| Provider | 4 hours a workday (88 hours) | Around the clock (720 hours) |
| --- | --- | --- |
| Boat | $20, the minimum ($3.17 of usage) | $25.92 |
| [Novita](https://whateverfi.com/sandboxes/novita/) | $20.53 | $167.96 |
| [E2B](https://whateverfi.com/sandboxes/e2b/) | $29.15 | $238.46, or $388.46 with Pro for 24-hour sessions |
| [Daytona](https://whateverfi.com/sandboxes/daytona/) | $29.15 | $238.46 |
| [Docker](https://whateverfi.com/sandboxes/docker/) on a rented server | €8.99 for a 4 vCPU / 8 GB Hetzner CX33 | €8.99 |

Computed from each provider's rates, checked November 2026, before free credits. Daytona caps one sandbox at 4 vCPU / 8 GiB. The Docker server also has to run WhatEverFi itself. Your model provider bills separately.

## Which Boat size WhatEverFi uses

WhatEverFi picks a computer's size from its organization's WhatEverFi Cloud plan. A self-hosted install has no size setting, so its computers always use Boat's default machine. When the plan changes, a running computer keeps its size and moves to the new one the next time WhatEverFi starts it after a stop; if Boat refuses that size, it starts at the size it had.

**Boat machines by WhatEverFi computer size**

| Used for | Boat machine | 88 hours a month | Around the clock |
| --- | --- | --- | --- |
| WhatEverFi Cloud's Standard plan and WhatEverFi credits, and every self-hosted install | default, 4 vCPU / 8 GB | $20 | $25.92 |
| The WhatEverFi Cloud Pro plan | large, 8 vCPU / 16 GB | $20 | $51.84 |
| The WhatEverFi Cloud Max plan | xlarge, 16 vCPU / 32 GB | $20 | $144 |

What Boat charges for one machine, from its rates checked November 2026, with the monthly minimum applied. Boat offers xlarge only on plans of $100 or more. On WhatEverFi Cloud you pay WhatEverFi, not Boat; the [pricing page](https://whateverfi.com/pricing/) lists the computer hours each plan includes.

## What your bots can do on a Boat computer

When WhatEverFi runs on Boat, each bot works on a real Linux desktop. You see what it sees in the chat, and you can take the mouse and keyboard whenever you want.

- Use a Chrome browser that is only theirs. Each bot keeps its own persistent Chrome profile, so a sales bot's HubSpot login is never visible to the inbox bot.
- Read web pages as text as well as by screenshot. On Boat, WhatEverFi installs a page-reading helper so bots can follow links and fill forms without guessing from pixels.
- Run shell commands, read and write files, and open a terminal you can type in yourself.
- Share one computer. By default, one person's bots in a space share that person's team computer, each on its own screen. A bot can have a computer of its own instead.
- Pick up where they left off. Stopping a computer keeps its disk, and WhatEverFi also saves each bot's workspace and browser profile on its own side.

## When to choose Boat

Choose Boat when you want hosted computers that behave like long-lived machines, and your bots sign in to many different sites. It is what WhatEverFi Cloud uses, so it is the most exercised path for that kind of work.

[E2B](https://whateverfi.com/sandboxes/e2b/) is the other well-tested hosted option. It pauses idle computers, and WhatEverFi's live computer test runs on it. [Novita](https://whateverfi.com/sandboxes/novita/) pauses with memory, so open programs survive a stop. [Daytona](https://whateverfi.com/sandboxes/daytona/) suits teams that already have an account there. If you don't want a cloud account at all, [Docker](https://whateverfi.com/sandboxes/docker/) runs computers on your own server. The [sandbox comparison](https://whateverfi.com/sandboxes/) puts them all side by side.

## Limits

- Boat's regions are in the EU, and WhatEverFi doesn't offer a region choice, a machine size or a custom image for Boat on a self-hosted install.
- Boat is a young company. Its code isn't open source, and you can't run it on your own machines.
- Stopping keeps the disk but not running programs. A long job that was running when the computer stopped has to start again.
- Until WhatEverFi's base snapshot is ready, new computers install the desktop tools themselves, so the first ones start more slowly.
- WhatEverFi creates every Boat machine without your account's environment variables, so nothing from your Boat account leaks into a bot's computer. Anything a bot needs has to come through WhatEverFi.
- Like other hosted providers that bill while running, a computer is stopped after two hours of continuous uptime by default unless a bot is still working on it or you are in control.

## How to set it up

On WhatEverFi Cloud there is nothing to set up: bot computers already run on Boat. These steps are for the admin of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/).

1. Create a Boat account at [boat.dev](https://boat.dev) and make an API key.
2. Either set `SANDBOX_PROVIDER=boat` and `BOAT_API_KEY` on the WhatEverFi API and worker, or sign in as an admin and choose Boat under Settings → Computer, then paste the key. `BOAT_API_URL` is optional.
3. Optionally run `pnpm sandbox:boat-snapshot` with the same key to build the base snapshot ahead of time. If you skip it, WhatEverFi builds it once in the background.
4. Open a bot's computer in WhatEverFi to check that the desktop comes up.

## FAQ

### Boat vs E2B for AI agents?

Both give WhatEverFi bots a Linux desktop, terminal and files. Boat machines are long-lived VMs that keep their disk when stopped, cost a flat $20 minimum for most small teams, and WhatEverFi Cloud runs on them. [E2B](https://whateverfi.com/sandboxes/e2b/) bills every second at a higher rate, pauses idle sandboxes with their memory, runs in the US, and is open source. WhatEverFi keeps its own copy of each bot's workspace on both.

### Do I need Boat to self-host WhatEverFi?

No. [Docker](https://whateverfi.com/sandboxes/docker/) is the default and needs no cloud account. Boat is one optional place to run bot computers.

## More sandboxes for AI agents

- [Compare all sandboxes](https://whateverfi.com/sandboxes/)
- [E2B](https://whateverfi.com/sandboxes/e2b/): Public or multi-user deployments
- [Daytona](https://whateverfi.com/sandboxes/daytona/): Teams already on Daytona
- [Novita](https://whateverfi.com/sandboxes/novita/): Bots that pick up where they left off
- [InstaBox](https://whateverfi.com/sandboxes/instabox/): Low-cost computers that pause with memory
- [Railway](https://whateverfi.com/sandboxes/railway/): Running everything in one Railway account
- [Wuying](https://whateverfi.com/sandboxes/wuying/): Windows apps, Alibaba Cloud and mainland China
- [Docker](https://whateverfi.com/sandboxes/docker/): Self-hosting with no cloud account
- [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/): Teams that already run Kubernetes
- [Your computer](https://whateverfi.com/sandboxes/your-computer/): Bots that need your real apps and logins

## Sources

- [Boat pricing](https://boat.dev)
- [Boat docs, pricing](https://docs.boat.dev/pricing)
- [E2B pricing](https://e2b.dev/pricing)
- [Daytona pricing](https://www.daytona.io/pricing)
- [Novita sandbox pricing](https://docs.novita.ai/guides/sandbox-pricing)
- [Hetzner Cloud pricing](https://www.hetzner.com/cloud/cost-optimized/)
- [WhatEverFi pricing](https://whateverfi.com/pricing/)
- [WhatEverFi, computer providers](https://github.com/elie222/rakazo/blob/main/docs/self-host-sandbox-providers.md)
- [WhatEverFi, computer runtime and isolation](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
