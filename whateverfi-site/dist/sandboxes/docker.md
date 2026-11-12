# Run AI agents in Docker, on your own machine

An AI agent that does real work needs a computer: a browser, a terminal and somewhere to keep files. With Docker, that computer is a container on a machine you control. Nothing runs in someone else's cloud, and you don't need an account with a sandbox provider.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each one gets its own computer with a desktop, browser, terminal and files that you can watch and take over. When you [host WhatEverFi yourself](https://whateverfi.com/self-hosted-ai-agent/), Docker is the default: the same install that starts WhatEverFi also starts your bots' computers next to it.

Updated November 4, 2026.

## What is a Docker computer?

[Docker](https://www.docker.com) runs software in containers: isolated processes with their own files, network and limits, on the same machine as everything else. WhatEverFi uses it to give each bot computer its own container, built from a published Debian image that has a full desktop in it.

A small service called the supervisor creates, starts and removes those containers. It runs inside the WhatEverFi install, holds the Docker socket, and is never exposed outside it. The WhatEverFi API asks the supervisor for a computer; it never touches Docker directly.

This is WhatEverFi's own setup, not Docker's separate Docker Sandboxes product, and it isn't made or endorsed by Docker.

## What Docker computers cost

Docker Engine and WhatEverFi are free and open source, so the cost is the machine they run on. A server costs the same whether bots work one hour a day or all day, which is the main difference from hosted sandboxes that bill by the second.

Each computer is capped at 2 GB of memory and 2 CPUs by default. Most of the time a bot's desktop is waiting on the model, so memory usually runs out before CPU does. The table assumes about 4 GB for WhatEverFi itself and its database, and 2 GB for each computer.

**Servers for a self-hosted WhatEverFi with Docker computers**

| Server | vCPU / memory | Per month | Computers that fit in memory |
| --- | --- | --- | --- |
| A spare Mac, PC or Linux box | Whatever it has | Electricity only | Depends on its memory |
| Hetzner CX33 | 4 / 8 GB | €8.99 | 2 |
| Hetzner CX43 | 8 / 16 GB | €16.49 | About 6 |
| DigitalOcean Basic Droplet | 8 / 16 GB | $96 | About 6 |
| Hetzner AX42 dedicated server | 8 cores, 16 threads / 64 GB | From €79, plus €49 setup | About 30, though fewer can work hard at once |
| AWS EC2 m7i.2xlarge | 8 / 32 GB | About $294 | About 14 |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Hetzner prices exclude VAT, and its cloud plans have limited stock after two price rises in 2026. AWS price for us-east-1 on demand.

- For comparison, one 2 vCPU / 4 GB computer working 4 hours a workday costs $14.57 on [E2B](https://whateverfi.com/sandboxes/e2b/) or [Daytona](https://whateverfi.com/sandboxes/daytona/), and [Boat](https://whateverfi.com/sandboxes/boat/)'s minimum is $20. A €16.49 server runs WhatEverFi and several computers for less, but you look after it.
- Computers share the server's CPU. If several bots run heavy pages at once, raise `RAKAZO_COMPUTER_CPUS` and `RAKAZO_COMPUTER_MEMORY` or pick a bigger server.
- Docker Engine on Linux is free for any use. On a Mac or Windows PC, Docker Desktop is free for personal use and companies under 250 employees and $10 million revenue, and costs $9 to $24 per user a month otherwise. OrbStack is $8 per user a month for commercial use.
- You still pay your model provider, unless you run models yourself.

## What a bot can do on a Docker computer

Each computer is a small Linux desktop. The bot works on it the way a person would, and you see its screen in the chat.

- Browse the web in Chromium, sign in to sites and download files. You can watch the screen live and take over the mouse and keyboard at any time.
- Run commands in a terminal, install tools and write scripts.
- Keep its work. Each bot's home folder lives on your server's disk, so files are still there after the computer or the whole server restarts.
- Share a computer with its teammates. By default, one person's bots in a space use that person's team computer, each with its own screen, and you can give a bot a private computer instead.
- Read folders you choose. An admin can mount host folders, such as a shared docs folder, into every computer, read-only unless they say otherwise.

## When to choose Docker

Choose Docker when you want everything on hardware you own, with no sandbox account and no bot computers in anyone else's cloud. It is the quickest way to try a self-hosted WhatEverFi, and it suits a person or a team on a machine they trust.

If you'd rather keep bots off your own server, a hosted sandbox puts their computers in someone else's cloud. [Boat](https://whateverfi.com/sandboxes/boat/) is what WhatEverFi Cloud uses, and [E2B](https://whateverfi.com/sandboxes/e2b/) pauses idle computers instead of deleting them. If you already run a cluster, [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) gives you one pod per computer and lets you add gVisor or Kata for a stronger boundary. For a bot that needs your real apps and logins, see [your own computer](https://whateverfi.com/sandboxes/your-computer/). The [sandbox comparison](https://whateverfi.com/sandboxes/) puts every option side by side.

## Limits and security

Every computer container starts with all Linux capabilities dropped and `no-new-privileges` set, so nothing inside can gain root powers. By default each one is capped at 2 GB of memory, 2 CPUs and 2048 processes, and each bot gets its own network that only the supervisor and screen proxy join.

- A container shares your server's kernel. It is not a virtual machine, so a kernel bug could let a process escape it. If that matters to you, use a hosted provider or Kubernetes with gVisor or Kata.
- Restricted networking gives computers the public internet but blocks your LAN, the Docker host and cloud metadata addresses. It needs Linux Docker Engine with iptables and the host rules from `infra/compose/restrict-computer-egress.sh`. By default the stack checks for those rules and falls back to open networking without them, so a server without the rules lets bots reach your LAN. Set `SANDBOX_COMPUTER_EGRESS=restricted` to refuse to start computers instead. Docker Desktop for Mac or Windows, rootless Docker and nftables hosts can't use restricted networking. The [Docker computers guide](https://github.com/elie222/rakazo/blob/main/docs/self-host-docker-computers.md) has the details.
- There is no per-domain allowlist. A bot can reach any public website.
- Anyone who controls the supervisor controls Docker on that machine, which is why it stays on the internal network behind its own token.

## How to set it up

These steps are for whoever runs a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/). Docker computers come with the published install, so there's no extra provider to configure, and they are set by the server's environment, not in the app's Settings. If you'd rather not run a server, the [desktop app](https://whateverfi.com/download/) can start the same install on your Mac or PC.

1. Install Docker Engine 26 or newer with the Compose plugin on the machine that will run WhatEverFi.
2. Run the installer from the [self-hosting guide](https://whateverfi.com/docs/self-host/). It writes a `.env` with random secrets, including the `SANDBOX_SUPERVISOR_TOKEN` the supervisor needs, and starts WhatEverFi with `SANDBOX_PROVIDER=docker`.
3. On Linux Docker Engine, let the installer apply the restricted-networking rules when it asks for sudo, or run `sudo bash infra/compose/restrict-computer-egress.sh` later.
4. Optionally change the limits with `RAKAZO_COMPUTER_MEMORY`, `RAKAZO_COMPUTER_CPUS` and `RAKAZO_COMPUTER_PIDS_LIMIT`, or share host folders with `SANDBOX_COMPUTER_MOUNTS`, as described in [Docker computers](https://whateverfi.com/docs/self-host-docker-computers/).
5. Sign up, open a bot and open its computer to check that the desktop comes up.

## FAQ

### Is Docker safe enough for AI agents?

For a personal or team server you control, a locked-down container is a reasonable boundary. WhatEverFi drops every capability, blocks privilege escalation and caps memory, CPU and processes. A container still shares the host kernel, so for strangers' bots or a public instance, prefer a provider with its own kernel per computer, such as [E2B](https://whateverfi.com/sandboxes/e2b/) or [Boat](https://whateverfi.com/sandboxes/boat/), or Kubernetes with gVisor or Kata.

### Can I run AI agents in Docker on a Mac?

Yes. The WhatEverFi desktop app's This computer option runs the whole install in Docker Desktop or OrbStack on your Mac. Restricted networking isn't applied there, so bots can reach your local network.

### Is this the same as Docker Sandboxes?

No. Docker Sandboxes is Docker's own microVM product for coding agents. It is free to run locally, and its hosted Cloud Sandboxes cost $0.14 an hour for 2 vCPU / 4 GB as of November 2026. WhatEverFi doesn't use it; it runs its computers as ordinary containers through its own supervisor.

### Do I need a cloud account to run bots in Docker?

No sandbox account is needed. You still need a model, which can be a hosted API key or a model server you run yourself.

## More sandboxes for AI agents

- [Compare all sandboxes](https://whateverfi.com/sandboxes/)
- [Boat](https://whateverfi.com/sandboxes/boat/): Many bots with separate logins
- [E2B](https://whateverfi.com/sandboxes/e2b/): Public or multi-user deployments
- [Daytona](https://whateverfi.com/sandboxes/daytona/): Teams already on Daytona
- [Novita](https://whateverfi.com/sandboxes/novita/): Bots that pick up where they left off
- [InstaBox](https://whateverfi.com/sandboxes/instabox/): Low-cost computers that pause with memory
- [Railway](https://whateverfi.com/sandboxes/railway/): Running everything in one Railway account
- [Wuying](https://whateverfi.com/sandboxes/wuying/): Windows apps, Alibaba Cloud and mainland China
- [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/): Teams that already run Kubernetes
- [Your computer](https://whateverfi.com/sandboxes/your-computer/): Bots that need your real apps and logins

## Sources

- [Docker](https://www.docker.com)
- [WhatEverFi, Docker computers](https://github.com/elie222/rakazo/blob/main/docs/self-host-docker-computers.md)
- [WhatEverFi, self-hosting](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
- [Hetzner Cloud pricing](https://www.hetzner.com/cloud/cost-optimized/)
- [Hetzner dedicated servers](https://www.hetzner.com/dedicated-rootserver/matrix-ax/)
- [DigitalOcean Droplet pricing](https://www.digitalocean.com/pricing/droplets)
- [AWS EC2 on-demand pricing](https://aws.amazon.com/ec2/pricing/on-demand/)
- [Docker pricing FAQ](https://www.docker.com/pricing/faq/)
- [OrbStack pricing](https://orbstack.dev/pricing)
- [Docker Sandboxes](https://docs.docker.com/ai/sandboxes/)
- [Docker, Cloud Sandboxes](https://www.docker.com/blog/introducing-cloud-sandboxes-start-on-your-laptop-finish-in-the-cloud/)
- [E2B pricing](https://e2b.dev/pricing)
- [Boat pricing](https://boat.dev)
- [WhatEverFi, computer providers](https://github.com/elie222/rakazo/blob/main/docs/self-host-sandbox-providers.md)
- [WhatEverFi, computer runtime and isolation](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
