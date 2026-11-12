# Let AI agents use your own computer

Most of the time an AI agent should work on a computer of its own, away from your files. Sometimes the work is on your machine: a document open in a desktop app, a folder only you have, a program you can't install anywhere else. For that, you can let a bot use your actual Mac or PC, with your files, apps and logins.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each one gets its own computer with a desktop, browser, terminal and files that you can watch and take over. The WhatEverFi [desktop app](https://whateverfi.com/download/) for Mac, Windows and Linux can also open the computer it runs on to your bots. There are two ways to do that, and they behave quite differently.

Updated November 4, 2026.

## Two ways to let bots use your computer

Let bots use this computer works when the desktop app is connected to WhatEverFi Cloud or another WhatEverFi server. The app's own local server uses Use this Mac instead. The bot keeps its own computer and gets your computer as an extra place to work. It asks you before its first command in a space and before it first uses each app, in every approval mode, and you answer Allow in this space or Deny.

Use this Mac (Use this computer on Windows and Linux) is for when the desktop app runs WhatEverFi itself on your machine. Your computer then replaces the bot's computer entirely, and bots run commands on it without asking.

## What a bot can do on your computer

In both modes, commands run as your user account, with your permissions. A bot can:

- Run commands in a shell, so it can read and change your files, use command-line tools you've installed and launch apps.
- With Let bots use this computer on a Mac or Windows PC, see and use apps on your screen: take screenshots, click and type. Each app needs its own approval.
- Work with the apps and files you already have, without copying anything to a separate computer first.

## When to choose your own computer

Choose it when the work really lives on your machine and you are there to approve it. For anything you'd leave running overnight or hand to a team, a separate computer is safer: [Docker](https://whateverfi.com/sandboxes/docker/) runs bot computers on your own server, and hosted sandboxes such as [Boat](https://whateverfi.com/sandboxes/boat/), which WhatEverFi Cloud uses, or [E2B](https://whateverfi.com/sandboxes/e2b/) keep them in the cloud. With those, a mistake stays on the bot's computer and you can reset it. The [sandbox comparison](https://whateverfi.com/sandboxes/) covers every option.

## What it costs

Using your own computer adds no sandbox bill. With Use this Mac, the desktop app runs a free, self-hosted WhatEverFi in Docker on your machine, and bots work on your computer instead of a separate one, so you pay only your model provider. With Let bots use this computer, you pay for the WhatEverFi server you're connected to as usual, and the bot keeps its own computer there as well.

The hidden cost is that the machine has to stay on and the app open. An always-on Mac mini draws about 4 W idle and up to about 65 W under full load, according to Apple.

**Your own computer next to a hosted sandbox, per month**

| Option | Isolation | 4 hours a workday | Around the clock |
| --- | --- | --- | --- |
| A Mac mini you already own | None, by design | Under $1 of electricity | About $3 at 20 W average and $0.20 per kWh |
| [Docker](https://whateverfi.com/sandboxes/docker/) on that same Mac | Container | Same electricity | Same electricity |
| [E2B](https://whateverfi.com/sandboxes/e2b/), 2 vCPU / 4 GB | microVM | $14.57 | $119.23, or $269.23 with Pro for 24-hour sessions |
| [Boat](https://whateverfi.com/sandboxes/boat/), 4 vCPU / 8 GB | VM | $20 minimum | $25.92 |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Electricity is an estimate; your rate and load will differ.

## Limits and security

This is not a sandbox. There is no isolation between a bot and your account, so only allow bots you'd trust to work on your computer unattended.

- With Let bots use this computer, a bot can reach your computer only in your own chats with your own bots. Routines, webhooks, chat-app channels and other people's messages can't use it.
- With Let bots use this computer, commands, their output and screenshots pass through the WhatEverFi server you're connected to. Your files stay on your computer unless a bot reads them.
- Screen control works on Mac and Windows. On a Mac it needs Accessibility and Screen Recording permission in System Settings. On Linux, bots can run commands but not control the screen.
- With Use this Mac, bots run commands without asking, including in routines. Using apps on screen still asks per app, and only in your own chats. Don't choose it for a server other people use.
- The desktop app has to stay open for bots to reach your computer.

## How to set it up

Anyone with the desktop app can do this; no server admin is needed. Install it from the [download page](https://whateverfi.com/download/), then pick the mode that matches how you use WhatEverFi. The [desktop app guide](https://whateverfi.com/docs/desktop-app/) covers both.

1. To use Let bots use this computer, sign in to WhatEverFi Cloud or another server in the desktop app, open Settings → General, and turn on Let bots use this computer under Computers. Confirm when the app asks Allow bots to use this computer?
2. On a Mac, allow WhatEverFi in System Settings → Privacy & Security → Accessibility and Screen Recording if you want bots to use apps on screen, then reopen the app.
3. Ask a bot to do something on your computer, and choose Allow in this space when it asks.
4. To use Use this Mac instead, choose This computer when the app asks which server to use. It runs WhatEverFi locally in Docker. When it asks Where should bots run?, choose Use this Mac.
5. To stop, turn off Let bots use this computer in Settings, or choose Revoke Local Computer Access in the app menu for Use this Mac.

## FAQ

### Can an AI agent control my Mac?

Yes, with the WhatEverFi desktop app and Let bots use this computer turned on. After you grant Accessibility and Screen Recording permission, a bot can see and use apps on your screen, and it asks before it first uses each app in a space.

### Is it safe to let an AI agent use my computer?

It's as safe as the bot you allow. Commands run as you, with no sandbox, so a bot can read and change anything your account can. Keep it to bots you trust, and use a [Docker](https://whateverfi.com/sandboxes/docker/) or hosted computer for everything else.

### Does it work on Windows and Linux?

Commands work on Mac, Windows and Linux. Screen control works on Mac and Windows only.

### Can a routine use my computer while I'm away?

Not with Let bots use this computer, which only works in your own chats. With Use this Mac, routines do use your computer, as long as the desktop app is open.

### How do I turn it off?

Turn off Let bots use this computer in Settings → General, or choose Revoke Local Computer Access in the app menu if you use Use this Mac. Let bots use this computer also ends when you sign out of that account.

## More sandboxes for AI agents

- [Compare all sandboxes](https://whateverfi.com/sandboxes/)
- [Boat](https://whateverfi.com/sandboxes/boat/): Many bots with separate logins
- [E2B](https://whateverfi.com/sandboxes/e2b/): Public or multi-user deployments
- [Daytona](https://whateverfi.com/sandboxes/daytona/): Teams already on Daytona
- [Novita](https://whateverfi.com/sandboxes/novita/): Bots that pick up where they left off
- [InstaBox](https://whateverfi.com/sandboxes/instabox/): Low-cost computers that pause with memory
- [Railway](https://whateverfi.com/sandboxes/railway/): Running everything in one Railway account
- [Wuying](https://whateverfi.com/sandboxes/wuying/): Windows apps, Alibaba Cloud and mainland China
- [Docker](https://whateverfi.com/sandboxes/docker/): Self-hosting with no cloud account
- [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/): Teams that already run Kubernetes

## Sources

- [WhatEverFi, desktop app](https://github.com/elie222/rakazo/blob/main/docs/desktop-app.md)
- [WhatEverFi, use your own computer](https://github.com/elie222/rakazo/blob/main/docs/computer.md#use-your-own-computer)
- [WhatEverFi, approvals](https://github.com/elie222/rakazo/blob/main/docs/approvals.md)
- [Apple, Mac mini power consumption](https://support.apple.com/en-us/103253)
- [E2B pricing](https://e2b.dev/pricing)
- [Boat pricing](https://boat.dev)
