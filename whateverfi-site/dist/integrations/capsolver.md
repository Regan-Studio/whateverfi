# CapSolver

CapSolver provides APIs for CAPTCHA recognition and token-solving workflows, including task creation, polling, account balance, and solution feedback.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/capsolver/.

## Actions

- **Classify AWS WAF Image**: Classify one AWS WAF challenge image or a nine-image grid and return the immediate geometric or object result.
- **Classify reCAPTCHA V2 Image**: Classify a reCAPTCHA v2 challenge image for a documented object category and return the immediate selection result.
- **Get Balance** (read-only): Return the connected CapSolver account balance and non-secret package metadata.
- **Get Task Result** (read-only): Get one asynchronous CapSolver task result, or optionally poll it every three seconds for a bounded time.
- **Run Vision Engine**: Run one documented CapSolver vision module and return its immediate points, distance, angle, rectangles, or text result.
- **Solve AWS WAF**: Create one AWS WAF token task with or without a caller-supplied proxy and optionally poll every three seconds for a bounded time.
- **Solve BotDeflector**: Create exactly one proxyless BotDeflector task from a target flow token and optionally poll every three seconds for a bounded time.
- **Solve Cloudflare Challenge**: Create one Cloudflare challenge task through a sticky caller-supplied proxy and optionally poll every three seconds for bounded clearance…
- **Solve Cloudflare Turnstile**: Create one proxyless Cloudflare Turnstile task and optionally poll every three seconds for a bounded time.
- **Solve DataDome**: Create exactly one DataDome slider task with a caller-supplied proxy and optionally wait a bounded time for its solution cookie.
- **Solve GeeTest**: Create one GeeTest v3 or v4 token task and optionally poll every three seconds for a bounded time.
- **Solve Image To Text**: Recognize text or number answers from base64-encoded images and return the immediate recognition result.
- **Solve MTCaptcha**: Create one proxyless or caller-proxied MTCaptcha token task and optionally poll every three seconds for a bounded time.
- **Solve reCAPTCHA V2**: Solve one standard or enterprise reCAPTCHA v2 challenge in task or synchronous mode.
- **Solve reCAPTCHA V3**: Solve a standard, enterprise, or M1 reCAPTCHA v3 challenge in task or synchronous mode.
- **Submit Task Feedback**: Report whether a previously returned CapSolver token worked, using only the documented minimal task and result fields.
