# WhatEverFi for enterprise

AI teammates on infrastructure you control, with the sign-in, audit, and encryption controls a security review asks for.

- **Single sign-on:** People sign in through your OpenID Connect provider, such as Okta, Microsoft Entra ID, or Google Workspace. Turn passwords off to make it the only way in. [Sign-in and accounts](https://whateverfi.com/docs/self-host-accounts/#openid-connect-sso)
- **Directory provisioning:** Your identity provider adds and removes people over SCIM 2.0. Turning someone off ends their sessions and cancels their runs at once. [Directory provisioning](https://whateverfi.com/docs/self-host-accounts/#directory-provisioning-scim)
- **Audit log:** Who did what: the actions bots took, who approved them, and which settings and credentials changed. Export it, or forward it to your SIEM. [Audit log](https://whateverfi.com/docs/self-host-audit-log/)
- **Encryption at rest:** Messages, memory, and files are encrypted with a separate key for each space. Keep the master key in AWS KMS, and rotate keys when you need to. [Storage and encryption](https://whateverfi.com/docs/self-host-storage/)
- **Approvals:** Bots ask before an action that changes something. Set allow and block rules for each space, and cap what a bot can spend. [Approvals](https://whateverfi.com/docs/approvals/)
- **Your infrastructure:** Run on Docker, or give every bot computer its own pod on your Kubernetes cluster. On a restricted network, install from your own mirror. [Production deployment](https://whateverfi.com/docs/self-host-production/)
- **Your models:** Connect your own provider keys, an OpenAI-compatible gateway, or a local model server. Content goes only to the provider you choose. [Models](https://whateverfi.com/docs/self-host-models/)
- **Spaces:** Keep teams and clients apart. Each space has its own bots, memory, computer, and credentials, and nothing crosses unless you allow it. [Spaces](https://whateverfi.com/docs/spaces/)
- **Open source:** Apache-2.0, with no seat fee to self-host. Your security team can read the code that runs your bots. [Source](https://github.com/Regan-Studio/whateverfi)

Email [hello@whateverfi.com](mailto:hello@whateverfi.com) to talk to us, or start with the [self-hosting guide](https://whateverfi.com/self-hosted-ai-agent/).
