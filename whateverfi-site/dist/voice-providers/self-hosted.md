# Self-hosted voice for AI agents: Kokoro, Whisper and open source TTS

You don't need a voice vendor to talk to an AI agent. Open models such as [Kokoro](https://huggingface.co/hexgrad/Kokoro-82M) for speech and Whisper for transcription run on an ordinary computer, and several open source servers put them behind the same API shape OpenAI uses. Point an agent at that server and no voice vendor ever hears you. The finished audio still goes to whichever device is listening.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and you can also talk to it by voice: hold the mic to speak, have replies read aloud, or call a bot in real time. Its **Self-hosted** voice option connects to any OpenAI-compatible speech server you run, so a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/) can have voice with no hosted service at all.

This page compares the open source speech models people actually run in 2026, their licenses and hardware, what self-hosting costs against hosted APIs, and how to connect a server to WhatEverFi.

Updated November 4, 2026.

## What is a self-hosted speech server?

It's a small web service on a machine you control that answers OpenAI's audio API: `POST /v1/audio/speech` turns text into audio and `POST /v1/audio/transcriptions` turns audio into text. Because the shape is shared, one client works with many servers and models.

[Kokoro-FastAPI](https://github.com/remsky/Kokoro-FastAPI) serves the Apache-licensed Kokoro-82M model and only speaks. [Speaches](https://github.com/speaches-ai/speaches) does both, with faster-whisper for transcription and Kokoro or Piper for speech. [mlx-audio](https://github.com/Blaizzy/mlx-audio) runs Kokoro, Whisper and many newer models on Apple Silicon. WhatEverFi's default model names match mlx-audio's.

## Kokoro TTS

Kokoro-82M is the open model most people start with. It has only 82 million parameters, is licensed Apache 2.0 for commercial use, and ranks close to much larger models on public listening tests. It ships 54 preset voices across American and British English, Spanish, French, Hindi, Italian, Japanese, Brazilian Portuguese and Mandarin; the English voices such as `af_heart` are the strongest. It can't clone a voice, only blend the presets.

It is fast enough for a CPU. Testers report about 6 times faster than real time on an M3 Pro's CPU, under a second to first audio on Apple Silicon, and 35 to 100 times real time on a mid-range NVIDIA GPU, using 2 to 4 GB of memory. On a Raspberry Pi 5 it runs at roughly real time. Kokoro sounds best on sentences of moderate length, which suits WhatEverFi, since replies are spoken a sentence at a time.

## Best open source text to speech models in 2026

Kokoro is the safe default, but it isn't the only option. The table lists the open models with the most use, what their licenses allow, and whether you can put them behind the OpenAI-shaped API WhatEverFi talks to. Several of the highest-rated open-weight models are research or non-commercial only, which matters if your bots work for a business.

**Open text to speech models, as of November 2026**

| Model | License for the weights | Size and hardware | Cloning | OpenAI-compatible server |
| --- | --- | --- | --- | --- |
| [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M) | Apache 2.0, commercial use | 82M, CPU is fine | No | Kokoro-FastAPI, Speaches, mlx-audio |
| [Piper](https://github.com/OHF-Voice/piper1-gpl) | GPL-3.0 code; voices vary | Tiny, real time on a Pi 4 | No | Speaches |
| [Chatterbox](https://github.com/resemble-ai/chatterbox) | MIT, every clip watermarked | 110M to 500M, GPU or Apple Silicon | Yes, from about 10 seconds | mlx-audio |
| [Orpheus](https://github.com/canopyai/Orpheus-TTS) | Apache 2.0 | 3B, a GPU for real time | Weak | Community wrappers |
| [Dia](https://github.com/nari-labs/dia) | Apache 2.0 | 1.6B, about 4.4 GB of GPU memory | Yes | mlx-audio |
| [Fish Audio S2-Pro, Drama 3](https://whateverfi.com/voice-providers/fish-audio/) | Fish Audio license, non-commercial without a paid license | 4B; 35B with 3B active | Yes | mlx-audio |
| [F5-TTS](https://github.com/SWivid/F5-TTS) | CC-BY-NC, non-commercial | GPU | Yes | No |
| [XTTS-v2](https://huggingface.co/coqui/XTTS-v2) | Coqui Public Model License, non-commercial; no commercial license is sold | GPU | Yes, from 6 seconds | No |

From each project's README or model card, checked November 2026. Check the license file yourself before commercial use.

## Open source speech to text

For transcription, Whisper is still the default. `whisper-large-v3-turbo` (MIT, 809M parameters) is several times faster than large-v3 with similar accuracy in the main languages, and faster-whisper runs it with int8 in about 3 GB of GPU memory. On a CPU, a smaller Whisper model is the practical choice, and short hold-to-talk clips transcribe in a second or two. NVIDIA's Parakeet TDT 0.6B (CC-BY-4.0) is far faster and among the most accurate open models for English and 25 European languages, and runs through mlx-audio on a Mac.

WhatEverFi sends transcription to the same address as speech, so pick a server that does both: Speaches (faster-whisper with Kokoro or Piper) or mlx-audio on a Mac. Kokoro-FastAPI alone only speaks.

## What self-hosted voice costs

The models are free; you pay for the machine. If WhatEverFi already runs on a Mac or a PC at home, Kokoro and a small Whisper model fit alongside it and the extra cost is electricity. A dedicated machine for voice ranges from a small rented CPU server to a GPU.

**Hardware for a self-hosted speech server, as of November 2026**

| Machine | Cost | Good for |
| --- | --- | --- |
| A computer you already own | Electricity only | Kokoro and a small Whisper for one household or team |
| Small cloud CPU server, 4 vCPU and 8 GB | From about $10 a month (Hetzner, €8.99) | Kokoro; Whisper is slow on long clips |
| Mac mini | From $899 (M6) | Kokoro and Whisper or Parakeet on mlx-audio, quickly |
| Rented RTX 4090 | $0.34 to $0.89 an hour, about $245 to $641 a month always on | Many users, larger models such as Chatterbox or Orpheus |
| Rented NVIDIA L4 | $0.44 to $0.59 an hour | Same, with less memory |

From the Hetzner, Apple and RunPod pricing pages, checked November 2026.

## Self-hosted vs hosted voice APIs

The worked example is one bot that reads about 30 minutes of replies aloud each day and transcribes about 30 minutes of what you say, every day for a month: 15 hours of speech (about 810,000 characters) and 15 hours of transcription. Hosted, that ranges from about $14 on xAI to about $49 on Cartesia a month. Self-hosted on hardware you already have, it costs close to nothing, and on a small rented server about $10. A GPU only pays off with many users: at $0.34 an hour, always on, it costs more than ElevenLabs until you generate about 113 hours of speech a month.

What you give up is polish. The best hosted voices still sound more natural than Kokoro, cloning is easier, and someone else keeps the server running.

**One bot, 30 minutes of speech and 30 of transcription a day**

| Option | Speech | Transcription | A month |
| --- | --- | --- | --- |
| [Self-hosted](https://whateverfi.com/voice-providers/self-hosted/) on a computer you own | Electricity | Electricity | About $0 |
| Self-hosted on a small rented CPU server | Included | Included | About $10, slower |
| xAI | $12.15 | $1.50 | About $14 |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) | About $13.50 | $2.70 | About $16, until the 2027 shutdown |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) | $12.15 | $5.40 | About $18 |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) | $32.40 | $3.30 | About $36 |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) | $49 (Startup plan fee) | $0, your device listens | $49 |

Usage prices from each provider's pricing page, checked November 2026. Where speech is bought as a monthly plan, as with Cartesia, the cost shown is the fee for the smallest plan that covers it. WhatEverFi doesn't charge for voice: you connect your own key and the provider bills you.

## Hosted servers that copy OpenAI's audio API

**Self-hosted** isn't limited to your own machine. It accepts any public HTTPS address with an API key, so a hosted service that serves OpenAI's audio endpoints can work there too: DeepInfra and Together AI host Kokoro for $0.99 and $4 per million characters, and Groq serves Whisper for $0.04 an hour. We haven't tested these with WhatEverFi, and two details matter. WhatEverFi sends speech and transcription to the same address, so the service needs to do both. And the voice list comes from the server; when a server doesn't publish one, WhatEverFi offers Kokoro's voice names, which only work if the service runs Kokoro.

Deepgram, Google, Azure and Amazon use their own API shapes, so **Self-hosted** can't reach them directly.

**Self-hosted and hosted open models compared**

| Option | Speech per 1M characters | About per hour of speech | Transcription per hour | Free to start | In WhatEverFi |
| --- | --- | --- | --- | --- | --- |
| [Kokoro and Whisper](https://whateverfi.com/voice-providers/self-hosted/) on your hardware | Hardware only | Hardware only | Hardware only | Open source | Built in as **Self-hosted** |
| Kokoro on DeepInfra or Together AI | $0.99 or $4 | $0.05 or $0.22 | Whisper from $0.012 (DeepInfra) | Pay as you go | Possibly through **Self-hosted**, untested |
| [Server (Mac)](https://whateverfi.com/voice-providers/macos/) | Free | Free | None; your device listens | Built into macOS | Built in when the server runs on a Mac |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) `gpt-4o-mini-tts` | About $17, billed in tokens | About $0.90 | $0.18 (`gpt-4o-mini-transcribe`) | None | Built in until January 6, 2027 |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) S2.1 Pro | $15 per 1M bytes, the same as characters in English | $0.81 | $0.36 | Free app plan, about 7 minutes a month | Built in, speaks and transcribes |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) Flash v2.5 | $40 | $2.16 | $0.22 (Scribe v2) | 10,000 credits a month, non-commercial | Built in, speaks and transcribes |

Prices in US dollars from each provider's pricing page, checked November 2026. An hour of speech is taken as about 54,000 characters (150 words a minute); real voices run a little faster or slower. Fish Audio bills per UTF-8 byte, which is one byte per character in English.

## What you can do with self-hosted voice in WhatEverFi

WhatEverFi sends both speech and transcription to the one **Server URL** you enter. If that server does both, you get every voice feature in the [voice and calls guide](https://whateverfi.com/docs/voice-and-calls/).

- Talk instead of typing. Hold the mic in the composer and your server transcribes what you say.
- Hear replies. Choose **Speak this reply** on a message, or turn on **Read replies aloud** in a bot's settings.
- Call a bot with **Call** at the top of the chat, or let a bot call you, for example when you ask it to call you at 5.
- Pick a voice from the server's own list. Kokoro voices show their language, and WhatEverFi passes that language to the server so a French voice reads with French pronunciation.
- Choose the models. **Speech model** and **Transcription model** take whatever names your server uses.

## When to choose self-hosted voice

Choose it when you don't want a hosted vendor to process your voice, when you want voice with no vendor account or usage bill, or when you already run local models. It pairs naturally with a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/) and a local model, so the whole assistant can work offline.

Hosted providers are less work and usually sound more polished. [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) and [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) offer cloning, [OpenAI](https://whateverfi.com/voice-providers/openai/) reuses a key you may already have, xAI can use the Grok sign-in you connect for models, and [Cartesia](https://whateverfi.com/voice-providers/cartesia/) is tuned for low latency. If WhatEverFi runs directly on a Mac, [Server (Mac)](https://whateverfi.com/voice-providers/macos/) speaks with nothing to install, but doesn't transcribe. See the [comparison](https://whateverfi.com/voice-providers/) for every option.

## Limits and network rules

- Quality and speed depend on your models and hardware. Whisper on a CPU can be slow on a call.
- A speech-only server such as Kokoro-FastAPI can't transcribe. Use a server that does both if you want to hold the mic or make calls.
- Addresses on your own network, `localhost` and `host.docker.internal` are refused unless the server sets `MCP_ALLOW_PRIVATE_ENDPOINT=true` on the API and worker. That setting applies to every user, so leave it off on a public install.
- A hostname that resolves to a private address must also be listed in `RAKAZO_OPENAI_COMPAT_PRIVATE_HOSTS`. Cloud metadata and link-local addresses are always blocked.
- A public address must use HTTPS if you add an API key. Setting `RAKAZO_OPENAI_COMPAT_ALLOW_PUBLIC=0` blocks public servers, and hides the option if private ones aren't allowed either.
- Watch the license. Several popular open models, including F5-TTS, XTTS-v2 and Fish Audio's open weights, aren't free for commercial use.
- On the mobile app, calls can use your phone's own voices if you pick a **Device voice** in the bot's settings. Otherwise replies use this provider.

## How to set it up

Whoever runs the WhatEverFi server allows the address once; then each person connects in the app. The [self-hosted model settings](https://whateverfi.com/docs/self-host-models/) cover the network options in full.

1. Start a speech server, for example the Kokoro-FastAPI Docker image, Speaches, or `mlx_audio.server` on a Mac.
2. On the WhatEverFi API and worker, set `MCP_ALLOW_PRIVATE_ENDPOINT=true` for a server on your network, and `PHONE_CALLS_ENABLED=true` to turn on hold-to-talk and calls. Restart them.
3. Open **Settings → Voice**, set **Provider** to **Self-hosted** and enter the **Server URL**, such as `http://192.168.1.10:8880/v1`. WhatEverFi adds `/v1` if you leave it off. A `localhost` URL reaches the computer running WhatEverFi, even when WhatEverFi runs in Docker.
4. Add an **API key** only if your server needs one. Change **Speech model** and **Transcription model** if your server uses other names; Kokoro-FastAPI expects `kokoro`.
5. Choose **Connect**, pick a **Voice** and choose **Hear a sample**.

## FAQ

### What is Kokoro TTS?

Kokoro-82M is a small open source text to speech model, licensed Apache 2.0, with 54 voices in nine language variants. It runs faster than real time on an ordinary CPU and much faster on a GPU or Apple Silicon. It doesn't clone voices.

### Can I use Kokoro TTS with an AI agent?

Yes. Run Kokoro behind an OpenAI-compatible server such as Kokoro-FastAPI, Speaches or mlx-audio, then enter its URL under **Self-hosted** in WhatEverFi's voice settings. WhatEverFi lists the Kokoro voices and reads replies with the one you pick.

### What is the best open source text to speech model?

For most self-hosters, Kokoro: it's small, fast on a CPU and free for commercial use. For cloning under a permissive license, Chatterbox. Some higher-rated open-weight models, such as Fish Audio's, F5-TTS and XTTS-v2, are non-commercial.

### Can I use a local Whisper server for speech to text?

Yes, if it answers `/v1/audio/transcriptions` the way OpenAI does. Speaches and mlx-audio both do. Set **Transcription model** to the model name your server expects.

### Is self-hosting Whisper cheaper than the Whisper API?

For one person, on hardware you already have, yes: it costs only electricity, against $0.36 an hour for OpenAI's Whisper or $0.18 for `gpt-4o-mini-transcribe`. Renting a GPU just for transcription costs more than the API unless you transcribe many hours a day.

### Does self-hosted voice work offline?

Voice does: speech and transcription go only to your server. For a fully offline assistant, also self-host WhatEverFi and use a local language model.

### Why can't WhatEverFi reach my speech server on localhost?

Private addresses are refused until the server sets `MCP_ALLOW_PRIVATE_ENDPOINT=true` on the API and worker. In Docker on Linux, the speech server must listen on an address the Docker bridge can reach, not only `127.0.0.1`.

## More voice providers for AI agents

- [Compare all voice providers](https://whateverfi.com/voice-providers/)
- [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/): The most natural voices, including ones you clone
- [OpenAI](https://whateverfi.com/voice-providers/openai/): Reusing an OpenAI key you already have
- [Cartesia](https://whateverfi.com/voice-providers/cartesia/): Fast, natural voices on calls
- [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/): Expressive voices and your own cloned voice
- [macOS voices](https://whateverfi.com/voice-providers/macos/): Running WhatEverFi on a Mac with no voice key

## Sources

- [Kokoro-FastAPI](https://github.com/remsky/Kokoro-FastAPI)
- [Kokoro-82M model](https://huggingface.co/hexgrad/Kokoro-82M)
- [Speaches](https://github.com/speaches-ai/speaches)
- [mlx-audio](https://github.com/Blaizzy/mlx-audio)
- [faster-whisper](https://github.com/SYSTRAN/faster-whisper)
- [Whisper large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo)
- [Parakeet TDT 0.6B v3](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3)
- [Artificial Analysis, text to speech leaderboard](https://artificialanalysis.ai/text-to-speech/leaderboard)
- [RunPod, pricing](https://www.runpod.io/pricing)
- [Hetzner, cloud servers](https://www.hetzner.com/cloud/)
- [Groq, speech to text](https://console.groq.com/docs/speech-to-text)
- [WhatEverFi, voice and calls](https://github.com/elie222/rakazo/blob/main/docs/voice-and-calls.md)
- [WhatEverFi, self-hosted voice settings](https://github.com/elie222/rakazo/blob/main/docs/self-host-models.md#voice)
- [DeepInfra, Kokoro-82M](https://deepinfra.com/hexgrad/Kokoro-82M)
- [Together AI, pricing](https://www.together.ai/pricing)
- [OpenAI, API pricing](https://developers.openai.com/api/docs/pricing)
- [Fish Audio, API pricing and rate limits](https://docs.fish.audio/developer-guide/models-pricing/pricing-and-rate-limits)
- [Fish Audio, plans](https://fish.audio/plan)
- [ElevenLabs, API pricing](https://elevenlabs.io/pricing/api)
- [xAI, models and pricing](https://docs.x.ai/developers/models)
- [Cartesia, pricing](https://cartesia.ai/pricing)
