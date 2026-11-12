# AI agent sandboxes on Kubernetes

If your team already runs [Kubernetes](https://kubernetes.io), your AI agents' computers can run there too. Each computer becomes a pod in a namespace you choose, on your own nodes and network, scheduled and limited like any other workload.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and each one gets its own computer with a desktop, browser, terminal and files that you can watch and take over. When you [host WhatEverFi yourself](https://whateverfi.com/self-hosted-ai-agent/) on a cluster, it can create those computers as pods directly through the Kubernetes API, with no Docker socket and no outside sandbox provider.

Updated November 4, 2026.

## What is a Kubernetes sandbox?

Kubernetes runs containers across a cluster of machines and keeps them within the limits and rules you set. An AI agent sandbox on Kubernetes is a pod set aside for one agent's computer, kept apart from your other workloads by the cluster's own controls.

WhatEverFi creates one plain pod per bot computer from its published computer image, the same Linux desktop it uses for Docker. The WhatEverFi API and worker talk to the Kubernetes API with their own service account, run commands and move files through `pods/exec`, and show the screen through a gateway inside the pod. That is why they normally run in the same cluster.

## What Kubernetes computers cost

WhatEverFi and Kubernetes are free, so you pay for the nodes the pods run on and, on some clouds, a fee for the cluster's control plane. Like a server, a node costs the same whether bots are busy or not.

WhatEverFi sets no CPU or memory limits unless you do. For a desktop and Chromium, 2 CPU and 4Gi per pod is a sensible start. WhatEverFi sets only limits, and Kubernetes then reserves the full limit for every pod, so an 8 vCPU / 16 GB node fits about three computers once the node's own system pods have their share.

**A small cluster for bot computers, per month**

| Where | Control plane | One 8 vCPU node | Notes |
| --- | --- | --- | --- |
| DigitalOcean Kubernetes | Free, or $40 for high availability | $96 for 16 GB | Simplest managed option at this size |
| Google Kubernetes Engine | $0.10 an hour, about $73. A monthly free credit covers one zonal cluster | Varies by machine type | GKE Sandbox gives you gVisor with no extra fee |
| Amazon EKS | $0.10 an hour, about $73. $0.60 an hour on extended support | About $294 for an m7i.2xlarge with 32 GB | m7i and similar types support nested virtualization, so Kata works |
| Azure AKS | Free tier without an SLA, or a paid tier | Varies by VM size | Microsoft suggests the free tier only up to 10 nodes |
| k3s on Hetzner | Free, you run it | €16.49 for a CX43 with 16 GB | Kata needs nested virtualization, which Hetzner doesn't offer on cloud VMs; its dedicated servers work |

Prices in US dollars unless marked, from each provider's pricing page, checked November 2026. Your model provider bills separately. Hetzner prices exclude VAT. AWS price for us-east-1 on demand.

- Three always-available computers on one DigitalOcean node cost $96 a month. The same three on [E2B](https://whateverfi.com/sandboxes/e2b/) for 4 hours a workday would be about $44, and around the clock about $508 with the Pro plan. Kubernetes pays off when computers are busy most of the day or you already have spare capacity.
- Kata adds about 250m CPU and 160Mi of memory per pod for its VM. gVisor costs nothing extra but slows system calls, which a browser makes many of.
- WhatEverFi, the API and the worker need their own pods in the same cluster, plus a Postgres database.

## Kubernetes Agent Sandbox and WhatEverFi

[Agent Sandbox](https://agent-sandbox.sigs.k8s.io) is a Kubernetes SIG project that adds a `Sandbox` resource for agents: one stateful pod with a stable identity, optional storage and pause and resume, plus templates, claims and warm pools of ready sandboxes. Its API is beta (`agents.x-k8s.io/v1beta1`) and it ships weekly releases. Like WhatEverFi's pods, its isolation comes from the runtime class you choose, gVisor or Kata.

WhatEverFi doesn't use it. It creates plain pods through the Kubernetes API, so it needs no custom resources or controllers, and it handles persistence itself by saving each bot's workspace. If you already run Agent Sandbox for other agents, the two can share a cluster.

## What a bot can do on a Kubernetes computer

From the chat it looks the same as any other WhatEverFi computer. The bot gets a desktop you can watch and take over, and it can:

- Browse the web, sign in to sites and download files.
- Run commands in a terminal, clone repositories and run scripts.
- Read and write files in its workspace, which WhatEverFi saves when the computer stops and puts back when a new pod starts.
- Keep its home folder on a persistent volume instead, if you point WhatEverFi at the volume that holds its data.

## When to choose Kubernetes

Choose Kubernetes when you already run WhatEverFi or other services on a cluster and want bot computers under the same scheduling, quotas and network policy. It is also the self-hosted way to get a VM-like boundary: set a runtime class such as gVisor or Kata and every computer pod uses it.

If you have one server and no cluster, [Docker](https://whateverfi.com/sandboxes/docker/) is simpler and is WhatEverFi's default. If you don't want to run the computers at all, a hosted sandbox such as [Boat](https://whateverfi.com/sandboxes/boat/), which WhatEverFi Cloud uses, or [E2B](https://whateverfi.com/sandboxes/e2b/) does it for you. The [sandbox comparison](https://whateverfi.com/sandboxes/) covers every option.

## Limits and security

Each pod runs as the image's own non-root user, with no service account token mounted, all Linux capabilities dropped, privilege escalation off and the `RuntimeDefault` seccomp profile. Those are the same protections WhatEverFi gives a Docker computer.

- Without a runtime class, a pod shares its node's kernel like any container. Set `KUBERNETES_SANDBOX_RUNTIME_CLASS_NAME` to gVisor or Kata for a stronger boundary, if your cluster has one installed.
- WhatEverFi doesn't create a NetworkPolicy. Add one that admits only the WhatEverFi API, worker and web pods to the computer pods and blocks their egress to private ranges.
- CPU and memory limits are unset unless you set them, so add limits or a namespace quota.
- Pods are disposable. Anything installed outside the workspace is gone when a pod is replaced, unless the home folder is on a volume.

## How to set it up

These steps are for the admin of a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/) running on a cluster. Kubernetes is configured through the server's environment, not in the app's Settings. The [computer providers guide](https://whateverfi.com/docs/self-host-sandbox-providers/) has every variable and a sample Role.

1. Run the WhatEverFi API, worker and web app in your cluster from the published app image. WhatEverFi doesn't ship Kubernetes manifests, so you write your own deployments; the [self-hosting guide](https://whateverfi.com/docs/self-host/) lists the services and the settings each one needs.
2. Create a namespace for computers. The default name is `rakazo-sandboxes`.
3. Give the API and worker's service account a Role in that namespace that can create, get and delete `pods` and create and get `pods/exec`, and bind it with a RoleBinding.
4. Set `SANDBOX_PROVIDER=kubernetes` on the API and worker, plus `KUBERNETES_SANDBOX_NAMESPACE` if you chose another name. Pin `KUBERNETES_SANDBOX_COMPUTER_IMAGE` to a digest for production.
5. Optionally set `KUBERNETES_SANDBOX_RUNTIME_CLASS_NAME`, `KUBERNETES_SANDBOX_CPU_LIMIT` and `KUBERNETES_SANDBOX_MEMORY_LIMIT`, and add a NetworkPolicy.
6. Make sure the API, worker and web pods can reach computer pods on port 6080 and the display ports from 6100 up, then open a bot's computer to check that the desktop comes up.

## FAQ

### Do bots lose their files when a pod is deleted?

Not their workspace. WhatEverFi saves it when a computer stops and restores it into the next pod. Software installed elsewhere on the pod is lost unless you keep the home folder on a persistent volume.

### Can the WhatEverFi API run outside the cluster?

It can use a kubeconfig, but it also needs to reach each pod's IP for the screen, so in practice the API and worker run inside the cluster.

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
- [Your computer](https://whateverfi.com/sandboxes/your-computer/): Bots that need your real apps and logins

## Sources

- [Kubernetes](https://kubernetes.io)
- [Kubernetes, runtime classes](https://kubernetes.io/docs/concepts/containers/runtime-class/)
- [gVisor](https://gvisor.dev)
- [Kata Containers](https://katacontainers.io)
- [Kubernetes Agent Sandbox](https://agent-sandbox.sigs.k8s.io)
- [Agent Sandbox on GitHub](https://github.com/kubernetes-sigs/agent-sandbox)
- [GKE Sandbox](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods)
- [GKE pricing](https://cloud.google.com/kubernetes-engine/pricing)
- [Amazon EKS pricing](https://aws.amazon.com/eks/pricing/)
- [Azure AKS pricing](https://azure.microsoft.com/en-us/pricing/details/kubernetes-service/)
- [DigitalOcean Kubernetes pricing](https://www.digitalocean.com/pricing/kubernetes)
- [AWS, nested virtualization](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/amazon-ec2-nested-virtualization.html)
- [DigitalOcean Droplet pricing](https://www.digitalocean.com/pricing/droplets)
- [Hetzner Cloud pricing](https://www.hetzner.com/cloud/cost-optimized/)
- [E2B pricing](https://e2b.dev/pricing)
- [WhatEverFi, computer providers](https://github.com/elie222/rakazo/blob/main/docs/self-host-sandbox-providers.md)
- [WhatEverFi, computer runtime and isolation](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)
- [WhatEverFi, self-hosting](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
