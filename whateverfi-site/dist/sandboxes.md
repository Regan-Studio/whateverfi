# Best sandboxes for AI agents in 2026

An AI agent that only chats can't do much. To clean up an inbox, research a list of companies or fix a bug, it needs a computer: a browser it can sign in with, files it can keep, and a terminal to run things in. A sandbox is that computer, kept apart from yours so a mistake stays contained.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each one gets its own computer. You can watch its screen and take over at any moment. Where that computer runs is your choice: a hosted sandbox, a container on your own server, a Kubernetes cluster, or your own Mac or PC. This page compares every option WhatEverFi supports, with prices as of November 2026, and the popular sandboxes it doesn't support, so you can see where they fit.

Updated November 4, 2026.

## Compared

| Sandbox | Runs on | Keeps between sessions | Best for |
| --- | --- | --- | --- |
| [Boat](https://whateverfi.com/sandboxes/boat/) | Hosted Ubuntu VM in the EU | Its disk and each bot's Chrome profile | Many bots with separate logins |
| [E2B](https://whateverfi.com/sandboxes/e2b/) | Hosted Linux sandbox | Its files, paused with the computer | Public or multi-user deployments |
| [Daytona](https://whateverfi.com/sandboxes/daytona/) | Hosted Linux sandbox | Its disk | Teams already on Daytona |
| [Novita](https://whateverfi.com/sandboxes/novita/) | Hosted Linux sandbox | Files, browser logins and running programs | Bots that pick up where they left off |
| [InstaBox](https://whateverfi.com/sandboxes/instabox/) | Hosted Debian microVM | Files, browser logins and running programs | Low-cost computers that pause with memory |
| [Railway](https://whateverfi.com/sandboxes/railway/) | Your Railway account | The workspace WhatEverFi saved | Running everything in one Railway account |
| [Wuying](https://whateverfi.com/sandboxes/wuying/) | Your Alibaba Cloud Windows desktop | The desktop's own disk | Windows apps, Alibaba Cloud and mainland China |
| [Docker](https://whateverfi.com/sandboxes/docker/) | Your own server or computer | Each bot's home folder, on your disk | Self-hosting with no cloud account |
| [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) | Your own cluster, one pod per computer | The workspace WhatEverFi saves, or a volume | Teams that already run Kubernetes |
| [Your computer](https://whateverfi.com/sandboxes/your-computer/) | Your Mac or PC, no isolation | Everything; it's your machine | Bots that need your real apps and logins |

## Pricing compared

Every price on these pages is for one person's bots, which share one computer by default: 2 vCPU and 4 GB of memory, enough for a Linux desktop, Chromium and a terminal, running 4 hours a workday (88 hours a month) or around the clock (720 hours). WhatEverFi gives each person one team computer per space, plus one for each bot you give a computer of its own, so for a space where N people use bots, multiply by N. WhatEverFi stops or pauses a hosted computer after 10 minutes without use, so you pay for roughly the hours bots work. Where a provider or WhatEverFi can't use that size, the row says which size it prices.

On WhatEverFi Cloud you don't pay a sandbox provider: computers run on Boat and come with the plan, and the [pricing page](https://whateverfi.com/pricing/) lists the computer hours each plan includes. The table is for a self-hosted WhatEverFi, where you bring your own provider.

**What a bot computer costs on each option WhatEverFi supports**

| Option | How you pay | Free to start | 88 hours a month | Around the clock |
| --- | --- | --- | --- | --- |
| [Boat](https://whateverfi.com/sandboxes/boat/) | Per second, $20 monthly minimum | 7-day trial, 25 hours | $20, the minimum | $20, the minimum |
| [E2B](https://whateverfi.com/sandboxes/e2b/) | Per second. Pro plan $150 a month | $100 one-time credit | $14.57 | $119.23. Hobby sessions end hourly; Pro ($269.23) allows 24 hours |
| [Daytona](https://whateverfi.com/sandboxes/daytona/) | Per second, no plan fee | $200 credit | $14.57 | $119.23 |
| [Novita](https://whateverfi.com/sandboxes/novita/) | Per second, no plan fee | $100 credit after a survey | $10.26 | $83.98 |
| [InstaBox](https://whateverfi.com/sandboxes/instabox/) | Per second. Pro plan $20 a month, returned as usage credit | Free plan for one computer | $20 on Pro, the fee, at 4 vCPU / 8 GB, the size WhatEverFi uses | $24.48 on Pro |
| [Railway](https://whateverfi.com/sandboxes/railway/) | Per second for CPU and memory used, from $5 a month | $5 trial credit | About $18 at typical use, plus about $16 for the app and database | About $150 for the computer |
| [Wuying](https://whateverfi.com/sandboxes/wuying/) | Hourly or monthly, plus disk | Alibaba Cloud promotions vary | About $17 at 4 vCPU / 8 GiB, the closest published size | About $57 on the unlimited plan |
| [Docker](https://whateverfi.com/sandboxes/docker/) | Your own server | Free software | A €16.49 server fits WhatEverFi and about 6 computers | Same |
| [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) | Your nodes, plus a control-plane fee on some clouds | Free software | A $96 DigitalOcean node fits about 3 computers | Same |
| [Your computer](https://whateverfi.com/sandboxes/your-computer/) | Nothing extra | Free | Electricity | About $3 for a Mac mini |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Usage before free credits. WhatEverFi can't run Boat at 2 vCPU / 4 GB: self-hosted installs use 4 vCPU / 8 GB machines, which cost $20 and $25.92, and larger WhatEverFi Cloud plans use [larger ones](https://whateverfi.com/sandboxes/boat/). Each option's page shows the rates and assumptions behind its numbers.

- For a few hours a day, per-second providers are cheapest. InstaBox has the lowest hourly rates here, just under Boat's, and a free plan for one computer, but more computers need its Pro plan. Of the providers with no plan fee, Novita has the lowest rate, and E2B and Daytona charge the same as each other.
- Boat's $20 minimum covers about 555 hours of the bigger computer self-hosted WhatEverFi uses, and it covers every computer on the account, so it is cheaper than E2B or Daytona once your computers run more than about 120 hours a month between them, and by far around the clock.
- InstaBox's Pro fee works the same way: the $20 comes back as usage credit, enough for about 590 hours of the 4 vCPU / 8 GB computer WhatEverFi uses there, shared by every computer on the account.
- A server you rent for Docker costs the same whether bots work or not. It's the cheapest way to run many computers, if you're happy to look after it.

## Hosted sandboxes compared, including ones WhatEverFi doesn't support

Most sandboxes that come up as E2B alternatives are built for running code, not a desktop a person can watch. Modal, Vercel Sandbox, Northflank and Blaxel are good at that, and the table includes them for reference, but WhatEverFi doesn't support them. WhatEverFi also works with CreateOS and boxd, which don't have their own page here; the [computer providers guide](https://whateverfi.com/docs/self-host-sandbox-providers/) covers them.

**Hosted sandboxes for AI agents compared**

| Sandbox | In WhatEverFi | Isolation | 88 hours at 2 vCPU / 4 GB | Longest session | Kept when stopped | Self-host or your cloud |
| --- | --- | --- | --- | --- | --- | --- |
| [Boat](https://whateverfi.com/sandboxes/boat/) | Yes. WhatEverFi Cloud runs on it | Full VM per machine | $20, the monthly minimum. WhatEverFi's smallest Boat size is 4 vCPU / 8 GB, which is also $20 | No fixed cap. WhatEverFi renews a 2-hour lease while in use | Disk | No |
| [E2B](https://whateverfi.com/sandboxes/e2b/) | Yes | Firecracker microVM | $14.57, or $164.57 with the Pro plan | 1 hour on Hobby, 24 hours on Pro | Memory and disk, when paused | Open source (Apache-2.0). Your cloud on Enterprise |
| [Daytona](https://whateverfi.com/sandboxes/daytona/) | Yes | Containers, which is how WhatEverFi creates them. VMs available outside WhatEverFi | $14.57 | No cap | Disk. Memory only on VM sandboxes | Closed source since June 2026. Your cloud on Enterprise |
| [Novita](https://whateverfi.com/sandboxes/novita/) | Yes | Not stated | $10.26 | 1 hour free, 24 hours paid | Memory and disk, when paused | No |
| [InstaBox](https://whateverfi.com/sandboxes/instabox/) | Yes | Firecracker microVM | $20 on Pro, the fee, returned as usage credit. Also $20 at WhatEverFi's 4 vCPU / 8 GB. Free for one computer | 8 hours on the free plan, no cap on paid plans | Memory and disk, when paused | Your cloud on Enterprise |
| [Railway](https://whateverfi.com/sandboxes/railway/) | Yes | VM | about $18, billed on CPU and memory actually used | Idle timeout up to 2 hours, or off | Nothing. WhatEverFi restores the saved workspace | No |
| CreateOS | Yes, set up from the computer providers guide | Firecracker microVM | $10.44 plus disk. WhatEverFi's default 2 vCPU / 2 GB shape is $8.40 | Not published | Memory and disk, when paused. Both still billed | No |
| Modal Sandboxes | No | gVisor, VM runtime optional | $20.94. The free plan's $30 monthly credit covers it | 24 hours | Filesystem snapshots. Memory snapshots are in alpha | No |
| Vercel Sandbox | No | Firecracker microVM | About $9.72 at 10% CPU, $29.99 at full CPU | 45 minutes on Hobby, 24 hours on Pro | Filesystem | No |
| Northflank | No | microVM (Kata, Cloud Hypervisor) or gVisor | $5.87 | No cap | Disk | Your cloud or on-premises |
| Blaxel | No | microVM | $14.57, billed on memory only | Not published | Memory, in standby | No |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Usage only, before free credits, at each provider's default region. Vercel bills CPU only while it is busy, so its price depends on how hard the bot works.

- None of the code-first sandboxes ships a desktop for a person to watch and take over, keeps each bot's browser logins apart, or saves a workspace that survives a switch of provider. WhatEverFi adds those on every provider it supports.
- Session caps matter for agents. E2B's Hobby plan, Novita's free tier and Vercel's Hobby plan end a session within an hour, so a bot on a long research task needs a paid plan or a provider without a cap.
- Daytona closed its source in June 2026. E2B is now the main open source hosted sandbox, and Northflank the main one that runs in your own cloud.

## Isolation: containers, gVisor and microVMs

How strongly a sandbox separates a bot from everything else depends on what sits between them. Containers share the host's kernel, so a kernel bug can let a process out. gVisor puts a kernel written in user space in the way. A microVM gives every sandbox its own small kernel behind a hypervisor. Stronger boundaries cost a little speed and, on your own hardware, need virtualization support.

**Isolation in AI agent sandboxes**

| Boundary | Who uses it | Good for | Trade-off |
| --- | --- | --- | --- |
| Container | [Docker](https://whateverfi.com/sandboxes/docker/), [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) by default, [Daytona](https://whateverfi.com/sandboxes/daytona/) by default | Your own bots on your own server | Shares the host's kernel |
| gVisor | Modal, GKE Sandbox, [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) with a runtime class | Stronger isolation without a hypervisor | Slower system calls |
| microVM: Firecracker, Kata, Cloud Hypervisor | [E2B](https://whateverfi.com/sandboxes/e2b/), [InstaBox](https://whateverfi.com/sandboxes/instabox/), CreateOS, boxd, Vercel Sandbox, Northflank, [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) with Kata | Other people's bots and public instances | Needs KVM on your own hardware |
| Full VM | [Boat](https://whateverfi.com/sandboxes/boat/), [Railway](https://whateverfi.com/sandboxes/railway/), [Wuying](https://whateverfi.com/sandboxes/wuying/) | Long-lived computers | Slower to start than a microVM |
| None | [Your computer](https://whateverfi.com/sandboxes/your-computer/) | Work that needs your real apps | A bot can reach everything you can |

## How to choose

### You want it hosted

[Boat](https://whateverfi.com/sandboxes/boat/) is what WhatEverFi Cloud runs its own bot computers on: full Linux VMs where every bot keeps its own Chrome logins, for a $20 monthly minimum. [E2B](https://whateverfi.com/sandboxes/e2b/) is the option WhatEverFi's live computer tests run on, gives every computer its own microVM, and pauses idle computers instead of deleting them. [Novita](https://whateverfi.com/sandboxes/novita/) pauses with memory, so a bot comes back to the same open programs, with no plan fee. [InstaBox](https://whateverfi.com/sandboxes/instabox/) also pauses with memory, at low hourly rates, with a free plan for one computer. [Daytona](https://whateverfi.com/sandboxes/daytona/) keeps each computer's disk, has no session cap, and suits teams already using it.

### You want the smallest bill

If bots work an hour or two a day, a per-second provider such as [Novita](https://whateverfi.com/sandboxes/novita/) or [E2B](https://whateverfi.com/sandboxes/e2b/) costs a few dollars a month, and [InstaBox](https://whateverfi.com/sandboxes/instabox/)'s free plan runs one computer at no charge. If they work most of the day, [Boat](https://whateverfi.com/sandboxes/boat/)'s flat minimum, InstaBox's Pro plan or a [Docker](https://whateverfi.com/sandboxes/docker/) server you rent is cheaper. Cheapest of all is a spare machine you already own.

### You don't want a cloud account

[Docker](https://whateverfi.com/sandboxes/docker/) is the default when you [self-host WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/): each bot gets a locked-down container with a desktop, on your own machine. [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) runs one pod per computer on a cluster you already have, with gVisor or Kata if you want VM-level isolation.

### You want one bill

[Railway](https://whateverfi.com/sandboxes/railway/) runs WhatEverFi, its database and the bot computers from one template. The trade-off is that computers are rebuilt from saved files after they stop, so open programs don't survive.

### You run bots for other people

For a public or multi-user instance, keep computers off the server that runs WhatEverFi and behind a VM boundary: [E2B](https://whateverfi.com/sandboxes/e2b/) or [Boat](https://whateverfi.com/sandboxes/boat/) hosted, or [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) with gVisor or Kata on your own cluster.

### You need Windows, or you're in mainland China

[Wuying](https://whateverfi.com/sandboxes/wuying/) lets bots use a Windows cloud computer you already have on Alibaba Cloud, which also works where other sandbox providers are hard to reach.

### You want your bots on your real apps

The WhatEverFi desktop app can let bots use [your own computer](https://whateverfi.com/sandboxes/your-computer/), with your files, apps and logins. That isn't a sandbox, so only turn it on for bots you'd trust unattended.

[Computer providers guide](https://whateverfi.com/docs/self-host-sandbox-providers/)

## FAQ

### What is an AI agent sandbox?

An isolated computer where an agent can run commands, use a browser and change files without touching your own machine. In WhatEverFi it's the bot's computer, which you can watch and take over.

### How much does an AI agent sandbox cost?

Most hosted sandboxes WhatEverFi supports charge about $0.12 to $0.17 an hour for 2 vCPU and 4 GB while running, as of November 2026, so a computer used 4 hours a workday costs about $10 to $15 a month. InstaBox charges about $0.034 an hour for the 4 vCPU / 8 GB computer WhatEverFi uses there. Boat has a $20 monthly minimum, and InstaBox's $20 Pro fee comes back as usage credit, so both cover far more hours. Self-hosting costs whatever your server does.

### What is the cheapest sandbox for AI agents?

A spare computer running [Docker](https://whateverfi.com/sandboxes/docker/), which costs only electricity. Among the hosted options compared here, [InstaBox](https://whateverfi.com/sandboxes/instabox/) and [Boat](https://whateverfi.com/sandboxes/boat/) have the lowest hourly rates. InstaBox also has a free plan for one computer, and Boat and InstaBox's Pro plan are cheapest for computers that run most of the day.

### Is the E2B sandbox free?

E2B's Hobby plan has no monthly fee and a one-time $100 credit, but sessions end after an hour. See [E2B pricing](https://whateverfi.com/sandboxes/e2b/).

### Does WhatEverFi support Modal or Vercel Sandbox?

No. WhatEverFi supports Boat, E2B, Daytona, Novita, InstaBox, Railway, Wuying, CreateOS, boxd, Docker, Kubernetes, Incus and your own computer. Modal and Vercel Sandbox are compared above for reference.

### Do I need a sandbox provider to run WhatEverFi?

No. When you [self-host](https://whateverfi.com/self-hosted-ai-agent/), Docker computers work out of the box with no cloud account. Hosted providers are optional.

### Can I switch providers later?

Yes. WhatEverFi keeps its own saved copy of each bot's workspace, so a new computer on another provider starts from the last saved version. Let bots finish and their computers stop before you switch, so recent changes are saved first. Software installed outside the workspace doesn't move.

### Is Docker a real sandbox for AI agents?

It's a real boundary but not the strongest. WhatEverFi's containers drop every Linux capability and cap memory, CPU and processes, but they share the host's kernel. For bots you don't fully trust, pick a provider that gives each computer its own kernel as WhatEverFi uses it: [E2B](https://whateverfi.com/sandboxes/e2b/), [InstaBox](https://whateverfi.com/sandboxes/instabox/) and CreateOS (Firecracker microVMs), boxd (microVMs), [Boat](https://whateverfi.com/sandboxes/boat/) and [Railway](https://whateverfi.com/sandboxes/railway/) (full VMs), or [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) with Kata. gVisor on Kubernetes is a middle ground. Not every hosted sandbox qualifies: WhatEverFi creates [Daytona](https://whateverfi.com/sandboxes/daytona/) computers as Daytona's default containers, which share the host's kernel, and Novita doesn't say what it uses.

## Sources

- [Boat pricing](https://boat.dev)
- [E2B pricing](https://e2b.dev/pricing)
- [Daytona pricing](https://www.daytona.io/pricing)
- [Novita sandbox pricing](https://docs.novita.ai/guides/sandbox-pricing)
- [InstaBox pricing](https://instabox.sh/pricing)
- [Railway sandboxes, pricing and limits](https://docs.railway.com/sandboxes)
- [Alibaba Cloud, Elastic Desktop Service billing](https://www.alibabacloud.com/help/en/wuying-workspace/product-overview/billing-overview)
- [CreateOS sandbox pricing](https://createos.sh/pricing/sandbox)
- [Modal pricing](https://modal.com/pricing)
- [Vercel Sandbox pricing](https://vercel.com/docs/vercel-sandbox/pricing)
- [Northflank pricing](https://northflank.com/pricing)
- [Blaxel pricing](https://blaxel.ai/pricing)
- [Hetzner Cloud pricing](https://www.hetzner.com/cloud/cost-optimized/)
- [DigitalOcean Droplet pricing](https://www.digitalocean.com/pricing/droplets)
- [DigitalOcean Kubernetes pricing](https://www.digitalocean.com/pricing/kubernetes)
- [WhatEverFi pricing](https://whateverfi.com/pricing/)
