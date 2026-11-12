# Run WhatEverFi and your agents' computers on Railway

Railway is a cloud platform for deploying apps and databases without managing servers. It also runs sandboxes: short-lived Linux machines that a program can create through Railway's API.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each bot gets its own computer with a desktop, a browser and files. You can watch its screen and take over at any time. On Railway, one template runs the WhatEverFi app, its Postgres database and those bot computers, all in your own Railway account. You don't need a Docker host or a separate sandbox provider.

Updated November 4, 2026.

## What is Railway?

[Railway](https://railway.com) deploys services from a repository or image and gives them HTTPS domains, volumes and managed databases. Usage is billed to your Railway workspace. Its [sandboxes](https://docs.railway.com/sandboxes) are separate machines created on demand, which WhatEverFi uses as bot computers.

Because the app and the computers live in the same account, you manage one set of credentials and one bill for hosting. Your model provider is still billed separately.

Each sandbox is its own virtual machine. New sandboxes run in US West unless a region is chosen.

## Railway pricing

Railway charges a small plan fee that counts toward usage, then bills per second. Sandboxes are billed at virtual machine rates for the CPU they actually use and the memory they actually hold, not for their size, so a mostly idle desktop costs much less than its ceiling. The WhatEverFi app and its database run as ordinary services at the cheaper container rates.

**Railway plans and rates as of November 2026**

| Plan | Trial and Free | Hobby | Pro |
| --- | --- | --- | --- |
| Plan fee | $0. Trial gives $5 of credit, Free $1 a month | $5 a month, including $5 of usage | $20 a month per workspace, including $20 of usage |
| Largest sandbox | 2 vCPU / 2 GB | 8 vCPU / 8 GB | 32 vCPU / 32 GB |
| Sandbox idle timeout | 1 to 5 minutes, always on | 1 to 120 minutes, or off | 1 to 120 minutes, or off |
| Sandboxes running at once | 10 | 50 | 100 |
| Sandbox CPU and memory | $50 per vCPU-month used, $50 per GB-month held | Same | Same |
| App and database | $20 per vCPU-month, $10 per GB-month | Same | Same |
| Volumes and egress | $0.15 per GB-month, $0.05 per GB out | Same | Same |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Sources: [Railway pricing](https://railway.com/pricing) and [Railway sandboxes](https://docs.railway.com/sandboxes).

## What WhatEverFi on Railway costs a month

Railway bills what a computer actually uses rather than its size, so this estimate departs from [the method on the comparison page](https://whateverfi.com/sandboxes/#pricing). It assumes the Hobby plan and one bot computer running 4 hours a workday, 88 hours a month, with a desktop and Chromium using about 0.5 vCPU and 2.5 GB of memory on average. The WhatEverFi service and Postgres run all month. Actual use varies with what bots do.

**Estimated monthly bill on Railway Hobby**

| Part | Assumption | Cost |
| --- | --- | --- |
| Bot computer | 0.5 vCPU and 2.5 GB, 88 hours | About $18 |
| WhatEverFi app | About 1 GB and 0.1 vCPU, all month | About $12 |
| Postgres and volumes | A small database and a few GB of files | About $4 |
| Total | The $5 plan fee counts toward this | About $34 |

Estimated from Railway's rates, checked November 2026. A computer left running around the clock at the same load would cost about $150 on its own. Your model provider bills separately.

- Memory dominates: Railway counts the operating system and file cache as memory in use, so a browser with many tabs costs more than its CPU suggests.
- WhatEverFi stops idle computers, and the template allows each user up to three, which keeps the bill bounded.
- On WhatEverFi Cloud you don't need Railway at all; computers are included in the [plan](https://whateverfi.com/pricing/).

## What a bot can do on a Railway computer

Each Railway sandbox becomes a Linux bot computer. You see it in the computer panel next to the chat, and you can step in when a bot asks for help.

- Use a Linux desktop and browser, with each bot on its own screen when several bots share one computer.
- Run shell commands and read and write files.
- Watch the screen live and take over, for example to finish a login.
- Keep its workspace between sessions. WhatEverFi saves the workspace before a computer stops and restores it on the next start.

## When to choose Railway

Choose Railway when you want a personal WhatEverFi with nothing to run yourself and only one account to manage. It suits bots that browse, research and edit files, where a restart from saved files is fine.

If bots need to come back to the same open programs, [Novita](https://whateverfi.com/sandboxes/novita/) and [E2B](https://whateverfi.com/sandboxes/e2b/) pause computers with their memory instead. [Boat](https://whateverfi.com/sandboxes/boat/), which WhatEverFi Cloud uses, keeps each computer's disk and a Chrome profile per bot. If you'd rather use a server you already have, [Docker](https://whateverfi.com/sandboxes/docker/) is the default when you self-host. The [sandbox comparison](https://whateverfi.com/sandboxes/) covers every option.

## Limits

- No pause. Stopping deletes the sandbox, and the next start restores the bot's saved workspace. Open programs and anything outside the workspace are lost.
- There is no terminal you can open yourself, and a command's output arrives when it finishes rather than while it runs.
- The desktop installs the first time a computer is used, which can take a few minutes.
- On Railway's Trial and Free plans, the short idle timeout can delete a computer before its work is saved, and computers are capped at 2 GB of memory, which is tight for a desktop and Chromium. Use Hobby or Pro.
- Each workspace file WhatEverFi saves is capped at 64 MiB by default (`RAILWAY_MAX_WORKSPACE_FILE_BYTES`).

## How to set it up

Whoever owns the Railway account does this. The [Railway template](https://github.com/elie222/rakazo/blob/main/infra/railway/README.md) is the quickest path and gives you a personal, [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/).

1. Create a Railway API token that can create environments and sandboxes. A dedicated Railway workspace is safest.
2. Deploy the WhatEverFi template on Railway. Enter your email in `OWNER_EMAIL` and the token in `RAILWAY_API_TOKEN`.
3. Wait for WhatEverFi to become healthy, then open its generated HTTPS domain.
4. Sign in with your email and the generated `OWNER_PASSWORD` from the WhatEverFi service's Variables tab, then change the password.
5. Connect your model account in WhatEverFi and send a bot a message. Its computer starts the first time it needs one.

## Using Railway computers with an existing WhatEverFi

If WhatEverFi already runs somewhere else, its admin can still put the computers on Railway. Set `SANDBOX_PROVIDER=railway`, `RAILWAY_API_TOKEN` and `RAILWAY_ENVIRONMENT_ID` on the API and worker, and optionally `RAILWAY_SANDBOX_REGION`. Or choose Railway in Settings → Computer and fill in the same values. The [computer providers guide](https://whateverfi.com/docs/self-host-sandbox-providers/) lists every option.

## FAQ

### Can I host WhatEverFi on Railway?

Yes. The WhatEverFi template deploys the app, a Postgres database and its bot computers into your Railway account. It's meant for a personal deployment: public registration stays closed and you sign in as the owner.

### Do I need E2B or another sandbox provider on Railway?

No. Railway's own sandboxes run the bot computers. You only need a Railway API token and a model account.

### Can Railway bot computers reach my database?

With the template, no. Computers run in a separate, empty Railway environment, so they can't reach the app's private database network. Don't put trusted services or secrets in that environment.

### Why choose Railway over E2B or Novita?

Everything runs in one account, from one template. If your bots need to keep programs running between sessions, [E2B](https://whateverfi.com/sandboxes/e2b/) or [Novita](https://whateverfi.com/sandboxes/novita/) pause computers instead of rebuilding them.

## More sandboxes for AI agents

- [Compare all sandboxes](https://whateverfi.com/sandboxes/)
- [Boat](https://whateverfi.com/sandboxes/boat/): Many bots with separate logins
- [E2B](https://whateverfi.com/sandboxes/e2b/): Public or multi-user deployments
- [Daytona](https://whateverfi.com/sandboxes/daytona/): Teams already on Daytona
- [Novita](https://whateverfi.com/sandboxes/novita/): Bots that pick up where they left off
- [InstaBox](https://whateverfi.com/sandboxes/instabox/): Low-cost computers that pause with memory
- [Wuying](https://whateverfi.com/sandboxes/wuying/): Windows apps, Alibaba Cloud and mainland China
- [Docker](https://whateverfi.com/sandboxes/docker/): Self-hosting with no cloud account
- [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/): Teams that already run Kubernetes
- [Your computer](https://whateverfi.com/sandboxes/your-computer/): Bots that need your real apps and logins

## Sources

- [Railway](https://railway.com)
- [Railway sandboxes, pricing and limits](https://docs.railway.com/sandboxes)
- [Railway pricing](https://railway.com/pricing)
- [Railway, pricing reference](https://docs.railway.com/reference/pricing)
- [WhatEverFi Railway template](https://github.com/elie222/rakazo/blob/main/infra/railway/README.md)
- [WhatEverFi, computer providers](https://github.com/elie222/rakazo/blob/main/docs/self-host-sandbox-providers.md)
- [WhatEverFi, computer runtime and isolation](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
