# E2B for AI agents: pricing, limits and alternatives

[E2B](https://e2b.dev) is an open source cloud for running AI agents in isolated sandboxes. Each sandbox is a small Linux virtual machine in E2B's cloud, so agent code and commands never run on your own server.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each one gets its own computer with a desktop, browser, terminal and files that you can watch and take over. E2B can be the place those computers live when you host WhatEverFi yourself. E2B supplies the sandbox. WhatEverFi puts each bot's screen on it, saves its work, and pauses it when nobody is using it.

This page covers what E2B costs as of November 2026, the limits that matter for a bot that works for hours, and how it compares with Daytona, Modal, Vercel Sandbox and the other options.

Updated November 4, 2026.

## What is E2B?

[E2B](https://e2b.dev) runs sandboxes for AI agents as a hosted service. Each sandbox is a Firecracker microVM, a lightweight virtual machine with its own kernel, so what an agent does inside it stays inside it. Firecracker is the same technology AWS Lambda runs on. The SDKs and the sandbox runtime are open source under the Apache-2.0 license.

Sandboxes start from templates, can be paused with their memory and files and resumed later, and are billed per second only while they run. E2B also publishes a desktop sandbox with a graphical Linux desktop, which is what WhatEverFi builds on. E2B reports SOC 2 Type II, and runs in the US by default, with Europe and Asia available on request.

## E2B pricing

E2B charges for the CPU and memory a sandbox has while it runs, by the second, plus a monthly fee on paid plans. Disk is included. A paused sandbox stops billing for compute. The free Hobby plan has no monthly fee and a one-time $100 credit, with no card needed.

**E2B plans as of November 2026**

| Plan | Monthly fee | Usage | Longest session | Running at once |
| --- | --- | --- | --- | --- |
| Hobby | $0, with a one-time $100 credit | $0.000014 per vCPU-second, $0.0000045 per GiB-second | 1 hour | 20 |
| Pro | $150 | Same rates | 24 hours | 100, or 600 and 1,100 with add-ons at $650 and $1,150 a month |
| Enterprise | Custom, $3,000 monthly minimum | Custom | Custom | Custom |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Hobby includes 10 GiB of disk per sandbox and Pro 20 GiB. E2B has no GPU sandboxes. Source: [E2B pricing](https://e2b.dev/pricing).

- In hourly terms that is about $0.05 per vCPU and $0.016 per GiB of memory, so the default 2 vCPU / 4 GiB sandbox costs about $0.17 an hour.
- Upgrading to Pro doesn't add credit. The $150 buys longer sessions, more sandboxes at once and custom CPU and memory sizes.
- Pausing takes about 4 seconds per GiB of memory and resuming about a second. A paused sandbox is kept until you delete it, and each resume starts a new session.

## What a WhatEverFi computer costs on E2B

Monthly costs follow [the method on the comparison page](https://whateverfi.com/sandboxes/#pricing): one person's bots sharing one 2 vCPU / 4 GB computer, running 4 hours a workday or around the clock. For N people, multiply by N. WhatEverFi's `rakazo-computer` template is exactly that size.

**One 2 vCPU / 4 GB computer on E2B**

| How long it runs | On Hobby | On Pro |
| --- | --- | --- |
| One hour | $0.17 | $0.17, plus the $150 fee |
| 4 hours a workday, 88 hours a month | $14.57. The $100 credit lasts about 6 months | $164.57 |
| Around the clock, 720 hours | $119.23. Works, but each session ends after an hour, so long uninterrupted work is cut off hourly | $269.23 |

Computed from E2B's per-second rates, checked November 2026, before the free credit. Your model provider bills separately.

- If you skip the template build, WhatEverFi falls back to E2B's stock desktop template, which reserves 8 vCPU and 8 GB. That is about $0.53 an hour, more than three times as much.
- On WhatEverFi Cloud you don't pay E2B at all. Cloud computers run on [Boat](https://whateverfi.com/sandboxes/boat/) and are included in the [plan](https://whateverfi.com/pricing/).

## What your bots can do on an E2B computer

On E2B, each WhatEverFi bot works on a real Linux desktop. You see its screen in the chat and can take the mouse and keyboard at any time.

- Browse the web in Chromium, with its own screen and browser profile. Signed-in sessions stay between runs.
- Run shell commands, read and write files, and open a terminal you can type in yourself.
- Share one computer. By default, one person's bots in a space share that person's team computer, each on its own screen. A bot can have a computer of its own instead.
- Come back to the same machine. After 10 minutes without use the computer pauses instead of being deleted, and stops billing for compute. The next time a bot needs it, the same computer resumes with its files. Removing the computer deletes it.
- Survive a lost sandbox. WhatEverFi keeps its own copy of each bot's workspace, so the E2B disk is a cache. If a sandbox disappears, a new one starts from the saved work.

## E2B vs Daytona, Modal, Vercel and other alternatives

Most E2B alternatives charge almost the same for compute. E2B and Daytona use identical per-second rates. The real differences are isolation, how long a session may run, what survives a stop, and whether you can run it yourself. The table prices the same 2 vCPU / 4 GB computer for 88 hours a month everywhere.

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

- **E2B vs Daytona.** Same price per second, but Daytona has no monthly fee and no session cap, while E2B needs the $150 Pro plan for sessions over an hour. E2B gives every sandbox its own kernel; Daytona's default sandboxes are containers that share the host's kernel. E2B is open source; [Daytona](https://whateverfi.com/sandboxes/daytona/) closed its source in June 2026. In WhatEverFi, E2B starts from a ready desktop template; Daytona installs the desktop on first start.
- **E2B vs Modal.** Modal Sandboxes run on gVisor and cost about 44% more for this computer, but the free plan's $30 monthly credit covers light use and Modal has GPUs. WhatEverFi doesn't support Modal.
- **E2B vs Vercel Sandbox.** Both are Firecracker microVMs. Vercel bills CPU only while it is busy, which is cheap for a bot that mostly waits on a model, and keeps the filesystem when stopped but not running programs. WhatEverFi doesn't support Vercel Sandbox.
- **Cheaper per hour.** Northflank lists the lowest rate for this size and can run in your own cloud. [Novita](https://whateverfi.com/sandboxes/novita/) works with the E2B SDK at about 30% less and pauses with memory too.
- **Not per hour at all.** [Boat](https://whateverfi.com/sandboxes/boat/) has a flat monthly minimum that covers hundreds of hours. [Docker](https://whateverfi.com/sandboxes/docker/) on a server you rent costs the same however much the bots work.

## When to choose E2B

Choose E2B when you self-host WhatEverFi for other people, such as a team or a public instance, and you don't want bots running on the same server as WhatEverFi. WhatEverFi's own setup docs suggest it for that case, and WhatEverFi's live computer acceptance test runs on E2B. It is also the safest bet if open source matters to you: if E2B the company disappeared, the code would not.

Look elsewhere if your bots run long jobs and you don't want the $150 Pro fee, or if your team is small and price matters more than the microVM boundary. [Boat](https://whateverfi.com/sandboxes/boat/) is what WhatEverFi Cloud runs on: long-lived VMs that keep their disk when stopped. [Novita](https://whateverfi.com/sandboxes/novita/) uses a similar sandbox model and keeps open programs in memory when it pauses. [Daytona](https://whateverfi.com/sandboxes/daytona/) suits teams already on it. For no cloud account at all, use [Docker](https://whateverfi.com/sandboxes/docker/) on your own machine, or [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) on a cluster you run. The [sandbox comparison](https://whateverfi.com/sandboxes/) has them all side by side.

## Limits

- On Hobby a session lasts at most one hour and 20 sandboxes can run at once. Pro raises that to 24 hours and 100.
- WhatEverFi doesn't expose a region choice, a custom image, or E2B's own snapshots, volumes or network rules.
- Computers use the `rakazo-computer` template at 2 vCPU and 4 GB once you build it. Before that, they use E2B's stock desktop at 8 vCPU and 8 GB. An existing computer keeps the size it was created with until it is replaced.
- Like other hosted providers that bill while running, a computer is paused after two hours of continuous uptime by default unless a bot is still working on it or you are in control.
- Public status pages recorded short E2B outages in 2026, such as a few minutes of failed sandbox starts in March and August. WhatEverFi keeps the saved workspace, so a failed start loses no work.

## Can you self-host E2B?

Yes, with effort. E2B's runtime is open source and runs on Linux machines with KVM, using Terraform on AWS or Google Cloud, Kubernetes, or a single-node package. E2B also offers a managed deployment inside your own AWS, Google Cloud or Azure account on Enterprise. WhatEverFi's settings take only an API key for E2B's hosted service; pointing it at a self-hosted E2B isn't a documented setup. If you want everything on your own machines, WhatEverFi's [Docker](https://whateverfi.com/sandboxes/docker/) and [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) computers are the simpler path.

## How to set it up

These steps are for the admin of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/). WhatEverFi Cloud users don't need an E2B account.

1. Create an account at [e2b.dev](https://e2b.dev) and copy an API key.
2. Either set `SANDBOX_PROVIDER=e2b` and `E2B_API_KEY` on the WhatEverFi API and worker, or sign in as an admin and choose E2B under Settings → Computer, then paste the key.
3. Build the smaller template once with `E2B_API_KEY=<your key> pnpm sandbox:e2b-template`, in the E2B team that owns the key. Run it again when WhatEverFi's template definition changes.
4. Open a bot's computer in WhatEverFi to check that the desktop comes up.

## FAQ

### Is the E2B sandbox free?

There is a free Hobby plan with a one-time $100 usage credit and no card needed. After the credit, you pay per second of use. Hobby sessions last up to an hour; longer ones need the $150 a month Pro plan.

### Does E2B use Firecracker?

Yes. Every E2B sandbox is a Firecracker microVM with its own kernel, which is a stronger boundary than a container that shares the host's kernel.

### Is E2B open source?

Yes. E2B's SDKs and runtime are on [GitHub](https://github.com/e2b-dev/E2B) under the Apache-2.0 license, and you can run the runtime yourself. WhatEverFi uses E2B's hosted service through its API key.

### Do I need E2B to run WhatEverFi?

No. [Docker](https://whateverfi.com/sandboxes/docker/) is the default when you self-host and needs no cloud account. E2B is one optional place to run bot computers.

## More sandboxes for AI agents

- [Compare all sandboxes](https://whateverfi.com/sandboxes/)
- [Boat](https://whateverfi.com/sandboxes/boat/): Many bots with separate logins
- [Daytona](https://whateverfi.com/sandboxes/daytona/): Teams already on Daytona
- [Novita](https://whateverfi.com/sandboxes/novita/): Bots that pick up where they left off
- [InstaBox](https://whateverfi.com/sandboxes/instabox/): Low-cost computers that pause with memory
- [Railway](https://whateverfi.com/sandboxes/railway/): Running everything in one Railway account
- [Wuying](https://whateverfi.com/sandboxes/wuying/): Windows apps, Alibaba Cloud and mainland China
- [Docker](https://whateverfi.com/sandboxes/docker/): Self-hosting with no cloud account
- [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/): Teams that already run Kubernetes
- [Your computer](https://whateverfi.com/sandboxes/your-computer/): Bots that need your real apps and logins

## Sources

- [E2B](https://e2b.dev)
- [E2B pricing](https://e2b.dev/pricing)
- [E2B, persistence](https://docs.e2b.dev/sandbox/persistence)
- [E2B security](https://e2b.dev/security)
- [E2B on GitHub](https://github.com/e2b-dev/E2B)
- [E2B runtime on GitHub](https://github.com/e2b-dev/runtime)
- [E2B status](https://status.e2b.dev)
- [Daytona pricing](https://www.daytona.io/pricing)
- [Modal pricing](https://modal.com/pricing)
- [Vercel Sandbox pricing](https://vercel.com/docs/vercel-sandbox/pricing)
- [Northflank pricing](https://northflank.com/pricing)
- [Blaxel pricing](https://blaxel.ai/pricing)
- [Novita sandbox pricing](https://docs.novita.ai/guides/sandbox-pricing)
- [Boat pricing](https://boat.dev)
- [CreateOS sandbox pricing](https://createos.sh/pricing/sandbox)
- [WhatEverFi, computer providers](https://github.com/elie222/rakazo/blob/main/docs/self-host-sandbox-providers.md)
- [WhatEverFi, computer runtime and isolation](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
