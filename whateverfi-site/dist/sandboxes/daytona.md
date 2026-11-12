# Daytona sandboxes for AI agents: pricing, limits and alternatives

[Daytona](https://www.daytona.io) is a hosted service for running AI-generated code in sandboxes. Each sandbox is an isolated Linux machine with its own disk, which can be stopped, archived and started again later.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each one gets its own computer with a desktop, browser, terminal and files that you can watch and take over. If your team already uses Daytona, a self-hosted WhatEverFi can put those computers there. Daytona supplies the sandbox. WhatEverFi installs the desktop, gives each bot its own screen, saves its work, and decides when the sandbox stops.

This page covers what Daytona costs as of November 2026, the limits that catch people out, what its move to closed source means, and how it compares with E2B, Modal, Vercel Sandbox and the rest.

Updated November 4, 2026.

## What is Daytona?

[Daytona](https://www.daytona.io) gives developers and AI agents sandboxes they can create through an API. Sandboxes start from snapshots, run in shared US or EU regions or in a region of your own, and keep their disk when they stop. A sandbox that has been archived is moved to cheaper storage and copied back when it wakes. Daytona claims sandbox creation in under 90 ms.

By default a Daytona sandbox is a container that shares its host's kernel. Linux VM, Windows and macOS sandboxes are also available, and only VMs can pause with their memory. Daytona reports SOC 2 Type II.

## Daytona pricing

Daytona has no plans or monthly fee. You pay per second for the CPU and memory a sandbox has while it runs, and per hour for disk beyond the first 5 GiB. New accounts get $200 of free compute with no card needed.

**Daytona rates as of November 2026**

| What | Price |
| --- | --- |
| CPU | $0.0504 per vCPU-hour, billed per second |
| Memory | $0.0162 per GiB-hour |
| Disk | First 5 GiB free, then $0.000108 per GiB-hour |
| Windows sandboxes | $0.0858 per vCPU-hour |
| GPUs | From $0.57 an hour (RTX 4090) to $4.08 (B300), preemptible |
| Free credit | $200, and up to $50,000 for startups |
| Enterprise | Custom, with SSO, audit logs and your own cloud |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Source: [Daytona pricing](https://www.daytona.io/pricing).

- What you pay depends on the sandbox's state. Running bills CPU, memory and disk. Stopped and paused bill disk only. Archived bills nothing. Snapshots keep billing for storage even after the sandbox is deleted.
- Your account's tier caps the total CPU, memory and disk of everything running at once. Tier 1, with a verified email, allows 10 vCPU and 10 GiB in total. A $25 top-up with a card moves you to 100 vCPU and 200 GiB, and larger top-ups go further.
- A single sandbox can have at most 4 vCPU, 8 GiB of memory and 10 GiB of disk.

## What a WhatEverFi computer costs on Daytona

Monthly costs follow [the method on the comparison page](https://whateverfi.com/sandboxes/#pricing): one person's bots sharing one 2 vCPU / 4 GB computer, running 4 hours a workday or around the clock. For N people, multiply by N. WhatEverFi doesn't set a size on Daytona, so a computer gets the size of the snapshot it starts from. Daytona's default is 1 vCPU and 1 GiB, which is tight for a desktop and Chromium; for real browser work, point `DAYTONA_SNAPSHOT` at a 2 vCPU / 4 GiB snapshot, such as Daytona's `daytona-medium` size.

**One WhatEverFi computer on Daytona**

| How long it runs | 1 vCPU / 1 GiB (default) | 2 vCPU / 4 GiB |
| --- | --- | --- |
| One hour | $0.07 | $0.17 |
| 4 hours a workday, 88 hours a month | $5.86 | $14.57 |
| Around the clock, 720 hours | $47.95 | $119.23 |

Computed from Daytona's rates, checked November 2026, before the $200 credit. Disk under 5 GiB is free; an 8 GiB disk adds about $0.24 a month. A stopped computer bills only for disk. Your model provider bills separately.

- Tier 1's 10 GiB limit fits only two 2 vCPU / 4 GiB computers at once. Top up once to lift it.
- On WhatEverFi Cloud you don't pay Daytona at all. Cloud computers run on [Boat](https://whateverfi.com/sandboxes/boat/) and are included in the [plan](https://whateverfi.com/pricing/).

## What your bots can do on a Daytona computer

On Daytona, each WhatEverFi bot works on a real Linux desktop. You see its screen in the chat and can take over the mouse and keyboard at any time.

- Browse the web in Chromium, with its own screen and browser profile. Signed-in sessions stay between runs.
- Run shell commands, read and write files, and open a terminal you can type in yourself.
- Share one computer. By default, one person's bots in a space share that person's team computer, each on its own screen. A bot can have a computer of its own instead.
- Keep their files. A stopped computer keeps its disk, and WhatEverFi also keeps its own copy of each bot's workspace, so a lost sandbox is replaced from the saved work.

## Daytona vs E2B and other alternatives

Daytona and E2B charge exactly the same per second, so price alone won't decide it. The differences are isolation, session limits, what survives a stop and who controls the code.

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

- **Daytona vs E2B.** Daytona has no monthly fee and no session cap, which suits long-running agents. [E2B](https://whateverfi.com/sandboxes/e2b/) needs its $150 Pro plan for sessions over an hour, but every sandbox is a Firecracker microVM with its own kernel, it pauses with memory, and it is open source. In WhatEverFi, E2B starts from a ready desktop template and resumes in seconds; Daytona installs the desktop on first start.
- **Daytona vs Modal.** Modal runs sandboxes on gVisor, costs about 44% more for this computer, and has GPUs and many regions. WhatEverFi doesn't support Modal.
- **Daytona vs Vercel Sandbox.** Vercel uses Firecracker microVMs and bills CPU only while it is busy, but caps sessions at 24 hours and keeps only the filesystem. WhatEverFi doesn't support Vercel Sandbox.
- **If you left because of the closed source.** E2B is the main open source hosted option. Northflank runs sandboxes in your own cloud. To keep everything on your own machines, WhatEverFi runs computers in [Docker](https://whateverfi.com/sandboxes/docker/) or on [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/).

## Is Daytona open source?

Not anymore. Daytona announced in June 2026 that it was going closed source, citing security. Its [GitHub repository](https://github.com/daytonaio/daytona) is archived, and the README says core development moved to a private codebase. The last public release, v0.190.0, remains under the AGPL-3.0 license, but it gets no updates.

That matters if you picked Daytona to self-host. Enterprise customers can still run Daytona in their own cloud, but the control plane is Daytona's. For a fully self-hosted setup with WhatEverFi, use [Docker](https://whateverfi.com/sandboxes/docker/) or [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/).

## When to choose Daytona

Choose Daytona when your team already has a Daytona account, billing or targets you want to reuse, or when you want hosted sandboxes with no monthly fee and no session cap.

If you are picking a hosted provider from scratch, [E2B](https://whateverfi.com/sandboxes/e2b/) starts from a ready desktop template and pauses idle computers, and [Boat](https://whateverfi.com/sandboxes/boat/) is what WhatEverFi Cloud runs on. [Novita](https://whateverfi.com/sandboxes/novita/) keeps open programs in memory when it pauses. To avoid a cloud account, use [Docker](https://whateverfi.com/sandboxes/docker/) or [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/). The [sandbox comparison](https://whateverfi.com/sandboxes/) has them all side by side.

## Limits

- The first start of a new computer installs the desktop, so it is slower than later starts.
- A computer stopped for 7 days is archived by Daytona. Waking it copies its disk back first and can take up to 10 minutes.
- A bot sees a command's output when the command finishes, not while it runs.
- WhatEverFi runs Linux computers only on Daytona, without volumes, and the only location choice is `DAYTONA_TARGET`.
- Default sandboxes are containers that share their host's kernel, a weaker boundary than a microVM such as E2B's.
- Like other hosted providers that bill while running, a computer is stopped after two hours of continuous uptime by default unless a bot is still working on it or you are in control.

## How to set it up

These steps are for the admin of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/). WhatEverFi Cloud users don't need a Daytona account.

1. Create an API key in your Daytona account.
2. Either set `SANDBOX_PROVIDER=daytona` and `DAYTONA_API_KEY` on the WhatEverFi API and worker, or sign in as an admin and choose Daytona under Settings → Computer, then paste the key.
3. Optionally set `DAYTONA_API_URL` for a different Daytona endpoint and `DAYTONA_TARGET` for where sandboxes run. Both are also in Settings → Computer.
4. Optionally set `DAYTONA_SNAPSHOT` in the environment to start new computers from a Daytona snapshot of your own, for example one with 2 vCPU and 4 GiB. Leave it unset to use Daytona's default.
5. Open a bot's computer in WhatEverFi and wait for the first start to install the desktop.

## FAQ

### Is Daytona free?

New accounts get $200 of free compute with no card needed, about 1,200 hours of a 2 vCPU / 4 GiB sandbox. After that you pay for usage, with no monthly fee.

### Does Daytona delete idle sandboxes?

Not the ones WhatEverFi creates. WhatEverFi turns off Daytona's auto-stop and auto-delete, and its own idle timer stops the computer, which keeps its disk. Daytona archives a computer that stays stopped for a week; it wakes more slowly but keeps its files.

## More sandboxes for AI agents

- [Compare all sandboxes](https://whateverfi.com/sandboxes/)
- [Boat](https://whateverfi.com/sandboxes/boat/): Many bots with separate logins
- [E2B](https://whateverfi.com/sandboxes/e2b/): Public or multi-user deployments
- [Novita](https://whateverfi.com/sandboxes/novita/): Bots that pick up where they left off
- [InstaBox](https://whateverfi.com/sandboxes/instabox/): Low-cost computers that pause with memory
- [Railway](https://whateverfi.com/sandboxes/railway/): Running everything in one Railway account
- [Wuying](https://whateverfi.com/sandboxes/wuying/): Windows apps, Alibaba Cloud and mainland China
- [Docker](https://whateverfi.com/sandboxes/docker/): Self-hosting with no cloud account
- [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/): Teams that already run Kubernetes
- [Your computer](https://whateverfi.com/sandboxes/your-computer/): Bots that need your real apps and logins

## Sources

- [Daytona](https://www.daytona.io)
- [Daytona pricing](https://www.daytona.io/pricing)
- [Daytona, sandboxes](https://www.daytona.io/docs/en/sandboxes)
- [Daytona, limits](https://www.daytona.io/docs/en/limits)
- [Daytona, billing](https://www.daytona.io/docs/en/billing/)
- [Daytona is going closed source](https://www.daytona.io/dotfiles/updates/daytona-is-going-closed-source)
- [Daytona on GitHub (archived)](https://github.com/daytonaio/daytona)
- [E2B pricing](https://e2b.dev/pricing)
- [Modal pricing](https://modal.com/pricing)
- [Vercel Sandbox pricing](https://vercel.com/docs/vercel-sandbox/pricing)
- [Northflank pricing](https://northflank.com/pricing)
- [Blaxel pricing](https://blaxel.ai/pricing)
- [Novita sandbox pricing](https://docs.novita.ai/guides/sandbox-pricing)
- [Boat pricing](https://boat.dev)
- [CreateOS sandbox pricing](https://createos.sh/pricing/sandbox)
- [WhatEverFi, computer providers](https://github.com/elie222/rakazo/blob/main/docs/self-host-sandbox-providers.md)
- [WhatEverFi, computer runtime and isolation](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
