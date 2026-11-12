# Let your AI agents use a Wuying cloud computer

Wuying (无影) is Alibaba Cloud's cloud computer service, sold outside China as Elastic Desktop Service. It gives you a Windows desktop that runs in Alibaba Cloud and that you open from a browser or the Wuying client.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each bot gets a computer you can watch and take over. With Wuying, that computer is a Windows desktop you already run on Alibaba Cloud. It is the only way to give WhatEverFi bots Windows, and it suits teams on Alibaba Cloud or in mainland China, where other sandbox providers can be hard to reach.

Updated November 4, 2026.

## What is Wuying?

[Wuying](https://www.aliyun.com/product/ecs/gws) is Alibaba Cloud's line of cloud computers, also sold internationally as [Elastic Desktop Service](https://www.alibabacloud.com/en/product/cloud-desktop). Each cloud computer is a full Windows machine with its own disk, assigned to an end user and billed by Alibaba Cloud.

This is not AgentBay, Alibaba Cloud's separate sandbox service for agents. WhatEverFi uses one ordinary Wuying desktop that you have already created, and talks to it through the desktop's MCP gateway.

## Wuying pricing

Alibaba Cloud bills a Wuying computer for compute and, separately, for its disks. Compute is either pay-as-you-go by the hour, a monthly plan with 120 hours, or an unlimited monthly plan. Hours beyond a 120-hour plan are charged at the hourly rate, and stop being charged once the month's total reaches the unlimited price. Disks bill every hour they exist, even while the computer is off.

Alibaba Cloud publishes example prices in its billing docs and the exact ones on its purchase page, which depend on size, region, Windows image and promotions. It publishes no example for 2 vCPU / 4 GB; the examples below are for 4 vCPU / 8 GiB, the closest size it publishes and a comfortable one for Windows with Office apps.

**Wuying example prices for a 4 vCPU / 8 GiB computer, November 2026**

| Billing | International (USD) | Mainland China (CNY) |
| --- | --- | --- |
| Pay-as-you-go | $0.148 an hour | ¥0.727 an hour |
| 120 hours a month | $15.80 a month | ¥59 a month |
| Unlimited | $53.30 a month | ¥199 a month |
| Disk | $0.00007 per GiB-hour, or $0.051 per GiB-month | ¥0.00035 per GiB-hour, or ¥0.25 per GiB-month |
| Bandwidth | Basic 5 Mbps shared bandwidth free; faster options extra | Traffic ¥0.80 per GB |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Alibaba Cloud marks these as examples; your order shows the final price. Sources: [Elastic Desktop Service billing](https://www.alibabacloud.com/help/en/wuying-workspace/product-overview/billing-overview) and [无影 billing](https://help.aliyun.com/zh/wuying-workspace/product-overview/billing-overview).

## What a Wuying computer costs with WhatEverFi

WhatEverFi starts the desktop when a bot needs it and powers it off when the last computer on it stops, so on pay-as-you-go you pay for roughly the hours bots work. Monthly costs follow [the method on the comparison page](https://whateverfi.com/sandboxes/#pricing), at 4 vCPU / 8 GiB with an 80 GiB system disk because Alibaba Cloud publishes no 2 vCPU / 4 GB example.

**One 4 vCPU / 8 GiB Wuying computer a month, international prices**

| Usage | Pay-as-you-go | 120-hour plan | Unlimited plan |
| --- | --- | --- | --- |
| 4 hours a workday, 88 hours | About $17 ($13.02 compute, the rest disk) | About $20 | About $57 |
| Around the clock, 720 hours | About $111 | About $57, capped at the unlimited price | About $57 |

Computed from Alibaba Cloud's example prices, checked November 2026. Disk at the pay-as-you-go rate for pay-as-you-go, and at the monthly rate for plans. Your model provider bills separately.

- Pay-as-you-go is cheapest below about 107 hours a month. Above that, the 120-hour plan wins, and past about 373 hours the unlimited plan does.
- Everyone sharing the desktop shares this bill. WhatEverFi doesn't add a charge for using it.

## What a bot can do on a Wuying desktop

Bots work on the Windows desktop the same way a person would, and you see the live screen in the computer panel next to the chat in the web and desktop apps.

- Run PowerShell commands. Output is switched to UTF-8, so Chinese text comes back readable.
- Read and write files. Each bot computer gets its own home folder under `%USERPROFILE%\rakazo`, kept on the desktop's own disk.
- Take screenshots and use the mouse and keyboard, so it can work in Windows apps such as Excel, not only in a browser.
- Let you watch the screen live and take over when it needs a login or a decision.
- WhatEverFi starts the desktop when a bot needs it and powers it off when the last computer on it stops. Deleting a bot computer removes only its folder, never the desktop.

## When to choose Wuying

Choose Wuying when bots need Windows software, when your team already runs on Alibaba Cloud, or when you are in mainland China. It also lets a single person bring their own Windows desktop to a shared WhatEverFi without asking an admin.

For Linux computers with a desktop and browser, hosted options such as [Boat](https://whateverfi.com/sandboxes/boat/), [E2B](https://whateverfi.com/sandboxes/e2b/) and [Novita](https://whateverfi.com/sandboxes/novita/) give each bot more isolation, a terminal and several screens at once. [Docker](https://whateverfi.com/sandboxes/docker/) and [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/) keep computers on your own servers. To let a bot use your own Windows PC instead, see [your computer](https://whateverfi.com/sandboxes/your-computer/). The [sandbox comparison](https://whateverfi.com/sandboxes/) covers every option.

## Limits

- Everyone using the desktop, including Private Computers, shares one Windows account, its files and its signed-in apps. A screen login opened for watching can also control the desktop. Share one desktop only among people who trust each other.
- One screen viewer at a time. Opening the screen in a second browser or the Wuying client signs the other one out.
- No terminal you can open yourself, and no live screen in the mobile app.
- Each call to the desktop is capped at one minute and 16 KiB of output. Longer commands run detached and still stream their output.
- Windows-key shortcuts aren't available, and there are no snapshots.

## How to set it up

Any WhatEverFi account can point its own Team Computers at a Wuying desktop it brings. An admin can also make Wuying the default for everyone on a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/). Either way you need these from Alibaba Cloud first.

1. Create a Windows Wuying cloud computer and assign it to an end user. Screen logins are issued for that user.
2. Create a RAM user and an AccessKey allowed only `ecd:DescribeDesktops`, `ecd:StartDesktops`, `ecd:StopDesktops` and `appstream-center:GetAuthCode`.
3. Get the desktop's MCP gateway URL, which must be public HTTPS, and its bearer token.
4. If you self-host, fetch the Wuying Web SDK once before building the web app: `node scripts/wuying-web-sdk.mjs`.
5. Open Settings → Computer and choose Wuying. Admins set it for the deployment under New computers run on, or for themselves under My computers; other accounts see only their own choice. Fill in the desktop ID, end user ID, region (default `cn-hangzhou`), AccessKey ID and secret, MCP gateway URL and token, then Save.
6. WhatEverFi checks that the AccessKey can see the desktop and that the gateway answers before saving anything. Your next Team Computer starts on the Wuying desktop.

## Setting it up with environment variables

An admin can instead set `SANDBOX_PROVIDER=wuying` on the API and worker with `WUYING_ACCESS_KEY_ID`, `WUYING_ACCESS_KEY_SECRET`, `WUYING_DESKTOP_ID`, `WUYING_END_USER_ID`, `WUYING_MCP_URL`, `WUYING_MCP_TOKEN` and optionally `WUYING_REGION_ID`. A connection saved in Settings takes precedence.

The [Wuying setup guide](https://github.com/elie222/rakazo/blob/main/docs/wuying-computers.md) and the [computer providers guide](https://whateverfi.com/docs/self-host-sandbox-providers/) have the details and troubleshooting.

## FAQ

### Can an AI agent use a Windows cloud computer?

Yes. With WhatEverFi, bots can work on a Wuying Windows desktop: they run PowerShell, use files and Windows apps, and you can watch and take over the screen.

### Is this Alibaba Cloud AgentBay?

No. WhatEverFi uses a Wuying cloud computer you already have, not the AgentBay sandbox service. AgentBay bills per second for each session, at $0.027 per core-hour and $0.0113 per GB-hour as of November 2026, and WhatEverFi doesn't support it.

### Do I need to be an admin to use Wuying with WhatEverFi?

No. Any account can connect its own Wuying desktop in Settings → Computer for its Team Computers. Only an admin can make Wuying the default for the whole deployment.

### Is a shared Wuying desktop isolated between bots?

Only by folder. Each bot computer has its own home folder, but everyone on the desktop shares one Windows account, so they can reach each other's files and logins. Give each person their own desktop if that matters.

## More sandboxes for AI agents

- [Compare all sandboxes](https://whateverfi.com/sandboxes/)
- [Boat](https://whateverfi.com/sandboxes/boat/): Many bots with separate logins
- [E2B](https://whateverfi.com/sandboxes/e2b/): Public or multi-user deployments
- [Daytona](https://whateverfi.com/sandboxes/daytona/): Teams already on Daytona
- [Novita](https://whateverfi.com/sandboxes/novita/): Bots that pick up where they left off
- [InstaBox](https://whateverfi.com/sandboxes/instabox/): Low-cost computers that pause with memory
- [Railway](https://whateverfi.com/sandboxes/railway/): Running everything in one Railway account
- [Docker](https://whateverfi.com/sandboxes/docker/): Self-hosting with no cloud account
- [Kubernetes](https://whateverfi.com/sandboxes/kubernetes/): Teams that already run Kubernetes
- [Your computer](https://whateverfi.com/sandboxes/your-computer/): Bots that need your real apps and logins

## Sources

- [Alibaba Cloud Elastic Desktop Service](https://www.alibabacloud.com/en/product/cloud-desktop)
- [无影云电脑](https://www.aliyun.com/product/ecs/gws)
- [Alibaba Cloud, Elastic Desktop Service billing](https://www.alibabacloud.com/help/en/wuying-workspace/product-overview/billing-overview)
- [无影, billing overview](https://help.aliyun.com/zh/wuying-workspace/product-overview/billing-overview)
- [Alibaba Cloud, AgentBay billing](https://www.alibabacloud.com/help/en/agentbay/product-overview/agentbay-billing-instructions)
- [WhatEverFi, Wuying setup](https://github.com/elie222/rakazo/blob/main/docs/wuying-computers.md)
- [WhatEverFi, computer providers](https://github.com/elie222/rakazo/blob/main/docs/self-host-sandbox-providers.md)
- [WhatEverFi, computer runtime and isolation](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
