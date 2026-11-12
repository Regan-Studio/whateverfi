# Best voice APIs for AI agents in 2026: text to speech and transcription compared

Typing isn't always the fastest way to work with an AI agent. Sometimes you want to say what you need on the way out the door, hear the answer while you cook, or have the agent call you when something can't wait. That takes two things: a voice that sounds right, and transcription that hears you correctly.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and you can also hold the mic to speak, have replies read aloud, or call a bot. A bot can call you too. The voice provider you connect does the speaking and, for most providers, the listening. This page compares every option WhatEverFi supports, from hosted voices to a server you run yourself, against the other voice APIs people consider, with prices as of November 2026.

Updated November 4, 2026.

## Compared

| Provider | Does | Runs | Best for |
| --- | --- | --- | --- |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) | Speaks and transcribes | Hosted | The most natural voices, including ones you clone |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) | Speaks and transcribes | Hosted | Reusing an OpenAI key you already have |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) | Speaks only | Hosted | Fast, natural voices on calls |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) | Speaks and transcribes | Hosted | Expressive voices and your own cloned voice |
| [Self-hosted voice](https://whateverfi.com/voice-providers/self-hosted/) | Speaks and transcribes, if your server does | Your server | Private, offline voice with no vendor account |
| [macOS voices](https://whateverfi.com/voice-providers/macos/) | Speaks only | Your Mac | Running WhatEverFi on a Mac with no voice key |

## Text to speech API pricing compared

Voice APIs price speech per character or per token and transcription per minute, and their plans bundle credits differently, so the table converts everything to the same units: dollars per million characters, per hour of generated speech, and per hour of transcribed audio. WhatEverFi doesn't charge for voice; you connect your own key and the provider bills you.

**Voice APIs for AI agents, as of November 2026**

| Option | Speech per 1M characters | About per hour of speech | Transcription per hour | Free to start | In WhatEverFi |
| --- | --- | --- | --- | --- | --- |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) Flash v2.5 | $40 | $2.16 | $0.22 (Scribe v2) | 10,000 credits a month, non-commercial | Built in, speaks and transcribes |
| ElevenLabs v4 or Multilingual v2 | $80 | $4.32 | Same as above | Same plans | Not selectable |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) `gpt-4o-mini-tts` | About $17, billed in tokens | About $0.90 | $0.18 (`gpt-4o-mini-transcribe`) | None | Built in until January 6, 2027 |
| OpenAI `tts-1` or `tts-1-hd` | $15 or $30 | $0.81 or $1.62 | $0.36 (Whisper) | None | Not used |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) Sonic 3 | $37.38 to $50, by plan | $2.02 to $2.70 | $0.40 to $0.54 (Ink, not used by WhatEverFi) | 20,000 credits a month | Built in, speaks only |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) S2.1 Pro | $15 per 1M bytes, the same as characters in English | $0.81 | $0.36 | Free app plan, about 7 minutes a month | Built in, speaks and transcribes |
| xAI Grok text to speech | $15 | $0.81 | $0.10 batch, $0.20 streaming | Pay as you go | Built in, speaks and transcribes, with a key or a Grok sign-in |
| [Kokoro and Whisper](https://whateverfi.com/voice-providers/self-hosted/) on your hardware | Hardware only | Hardware only | Hardware only | Open source | Built in as **Self-hosted** |
| Kokoro on DeepInfra or Together AI | $0.99 or $4 | $0.05 or $0.22 | Whisper from $0.012 (DeepInfra) | Pay as you go | Possibly through **Self-hosted**, untested |
| [Server (Mac)](https://whateverfi.com/voice-providers/macos/) | Free | Free | None; your device listens | Built into macOS | Built in when the server runs on a Mac |
| Deepgram Aura-2 and Nova-3 | $30 | $1.62 | $0.26 batch, $0.46 streaming | $200 credit | Not available |
| Google Cloud Chirp 3 HD | $30 | $1.62 | $0.96 | 1M characters a month | Not available |
| Azure AI Speech, neural or HD | $15 or $22 | $0.81 or $1.19 | $1 real time, $0.18 batch | 0.5M characters and 5 hours a month | Not available |
| Amazon Polly neural or generative | $16 or $30 | $0.86 or $1.62 | $0.36 batch, $0.60 streaming (Transcribe) | Neural: 1M characters a month for a year | Not available |
| Inworld TTS-2 or TTS-2 Flash | $25 or $15 | $1.35 or $0.81 | $0.15 | Up to 70 minutes of speech | Not available |

Prices in US dollars from each provider's pricing page, checked November 2026. An hour of speech is taken as about 54,000 characters (150 words a minute); real voices run a little faster or slower. Fish Audio bills per UTF-8 byte, which is one byte per character in English.

## What a talking AI agent costs a month

The worked example is one bot that reads about 30 minutes of replies aloud each day and transcribes about 30 minutes of what you say, every day for a month: 15 hours of speech (about 810,000 characters) and 15 hours of transcription.

Speech is usually the larger charge, so how much your bots say matters more than how much you say. The exception is where a free speech allowance covers most of the month, as with Google and Azure here, which leaves transcription as the main cost. In Chrome on a desktop or in the mobile app, your device often does the transcription for free. A self-hosted WhatEverFi can also set `VOICE_SUMMARY_MIN_CHARS` so long replies are read as a short summary instead of in full.

**One bot, 30 minutes of speech and 30 of transcription a day**

| Option | Speech | Transcription | A month |
| --- | --- | --- | --- |
| [Server (Mac)](https://whateverfi.com/voice-providers/macos/) | $0 | $0, your device listens | $0 |
| [Self-hosted](https://whateverfi.com/voice-providers/self-hosted/) on a computer you own | Electricity | Electricity | About $0 |
| Self-hosted on a small rented CPU server | Included | Included | About $10, slower |
| xAI | $12.15 | $1.50 | About $14 |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) | About $13.50 | $2.70 | About $16, until the 2027 shutdown |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) | $12.15 | $5.40 | About $18 |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) | $32.40 | $3.30 | About $36 |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) | $49 (Startup plan fee) | $0, your device listens | $49 |
| Deepgram (not in WhatEverFi) | $24.30 | $3.87 | About $28 |
| Google Cloud (not in WhatEverFi) | $0, inside the free 1M | $14.40 | About $14 |
| Azure AI Speech (not in WhatEverFi) | $4.65 after the free 0.5M | $10 after 5 free hours | About $15 |

Usage prices from each provider's pricing page, checked November 2026. Where speech is bought as a monthly plan, as with Cartesia, the cost shown is the fee for the smallest plan that covers it. WhatEverFi doesn't charge for voice: you connect your own key and the provider bills you.

## What each option does in WhatEverFi

**Voice options in WhatEverFi**

| Option | Speaks with | Transcribes with | Your cloned voices | Audio goes to |
| --- | --- | --- | --- | --- |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) | Flash v2.5 | Scribe v2 | Yes | ElevenLabs |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) | `gpt-4o-mini-tts`, until January 6, 2027 | `gpt-4o-mini-transcribe`, until February 26, 2027 | No | OpenAI |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) | Sonic 3 | Your device | Yes | Cartesia |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) | S2.1 Pro, or a model you choose | `transcribe-1-pro` | Yes | Fish Audio |
| xAI | Grok voices | Grok speech to text | No | xAI |
| [Self-hosted](https://whateverfi.com/voice-providers/self-hosted/) | Your model, such as Kokoro | Your model, such as Whisper | If your model clones | Your server |
| [Server (Mac)](https://whateverfi.com/voice-providers/macos/) | macOS voices | Your device | No | The Mac running WhatEverFi |

## Voice APIs WhatEverFi doesn't connect to

Plenty of good voice APIs have no built-in connection in WhatEverFi. Here is how they compare, so you can judge what you'd be missing.

- Deepgram is best known for transcription: Nova-3 costs $0.26 an hour in batch and $0.46 streaming, with a $200 starting credit, and many voice agents use it to listen. Its Aura-2 voices cost $30 per million characters and sound plainer than ElevenLabs. It uses its own API, not OpenAI's.
- Google Cloud's Chirp 3 HD voices cost $30 per million characters with the first 1M free each month, and its Speech-to-Text costs about $0.96 an hour. Gemini's speech models are billed per token.
- Azure AI Speech has neural voices at $15 per million characters, HD voices at $22, and transcription from $0.18 an hour in batch, with a monthly free tier of 0.5M characters and 5 hours.
- Amazon Polly's neural voices cost $16 and generative voices $30 per million characters. Amazon Transcribe costs about $0.36 an hour in batch.
- Inworld sells low-cost voices for agents, $15 to $25 per million characters. Hume's Octave focuses on emotional delivery; its rates were no longer on its pricing page in November 2026.
- AssemblyAI ($0.15 to $0.45 an hour) and Groq's hosted Whisper ($0.04 an hour) are strong for transcription. Groq serves OpenAI's audio API shape, so it may be reachable through **Self-hosted**, but WhatEverFi would send speech there too.
- PlayHT, once a common ElevenLabs alternative, shut down its platform and API at the end of 2025.

## How to choose

### You want the most natural voices

[ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) speaks and transcribes with one key, and any voice you clone in ElevenLabs shows up in WhatEverFi's voice picker. It costs about $2.16 per hour of speech. [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) is the other pick when the voice itself matters, with expressive speech, your own cloned voice and a large public library, at $0.81 an hour.

### You want the lowest bill

Free options first: [Server (Mac)](https://whateverfi.com/voice-providers/macos/) if WhatEverFi runs on a Mac, or a [self-hosted](https://whateverfi.com/voice-providers/self-hosted/) Kokoro and Whisper server on hardware you already own. Among hosted APIs, [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/), xAI and [OpenAI](https://whateverfi.com/voice-providers/openai/) each cost under a dollar per hour of speech.

### You already have an OpenAI key

[OpenAI](https://whateverfi.com/voice-providers/openai/) is quick to set up, with built-in voices and solid transcription. OpenAI is shutting down the speech model WhatEverFi uses on January 6, 2027, and the transcription model on February 26, 2027, so treat it as a convenient start.

### You mostly call your bots

[Cartesia](https://whateverfi.com/voice-providers/cartesia/) voices start fast and sound natural on calls. It only speaks, so your browser, the desktop app or your phone does the listening, which also means no transcription bill.

### You want audio to stay on your own hardware

[Self-hosted voice](https://whateverfi.com/voice-providers/self-hosted/) works with any OpenAI-compatible speech server, such as Kokoro for speech and a Whisper server for transcription. If you run WhatEverFi directly on a Mac, [Server (Mac)](https://whateverfi.com/voice-providers/macos/) speaks with the built-in voices and no key at all.

### You need compliance paperwork

Zero data retention, data residency and HIPAA agreements are Enterprise features at ElevenLabs, Cartesia and Fish Audio; OpenAI offers zero retention with its approval. If audio can't leave your network at all, [self-host](https://whateverfi.com/voice-providers/self-hosted/) it.

[Voice and calls guide](https://whateverfi.com/docs/voice-and-calls/)

## FAQ

### What is the best text to speech API for AI agents?

For the most natural voices, [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/). For the lowest latency on calls, [Cartesia](https://whateverfi.com/voice-providers/cartesia/). For price, [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) or a [self-hosted](https://whateverfi.com/voice-providers/self-hosted/) Kokoro server. All four work in WhatEverFi.

### Which text to speech API is free?

macOS voices and open models such as Kokoro are free to run yourself. Among hosted APIs, Google gives 1M Chirp 3 HD characters a month, Azure 0.5M, ElevenLabs 10,000 credits for non-commercial use, and Cartesia 20,000 credits. Fish Audio's free plan covers its app only; its API is pay as you go.

### What is the most accurate speech to text API?

It depends on your audio and language, and independent tests disagree. Deepgram Nova-3, AssemblyAI, ElevenLabs Scribe v2 and OpenAI's transcription models are all near the top for English. Open models such as Whisper large-v3-turbo and NVIDIA Parakeet are close behind and free to run.

### Is there an API that can convert audio to text?

Yes, many: OpenAI, ElevenLabs, Fish Audio, xAI, Deepgram, AssemblyAI, Groq, Google, Azure and Amazon all do. Across the models and modes on this page, prices run from about $0.04 an hour (Groq) to $1.02 (OpenAI). In WhatEverFi, ElevenLabs, OpenAI, Fish Audio, xAI and self-hosted servers transcribe what you say.

### Is the Whisper API free?

No. OpenAI charges $0.36 an hour for Whisper, and it shuts down on February 26, 2027. The Whisper model itself is open source, so you can run it free on your own hardware and connect it to WhatEverFi as a [self-hosted](https://whateverfi.com/voice-providers/self-hosted/) server.

### Is Deepgram text to speech?

Both. Deepgram is known for speech to text (Nova-3) and also sells Aura-2 voices. WhatEverFi doesn't connect to Deepgram.

### Can I talk to my AI agent by voice?

Yes. Connect a provider in **Settings → Voice**, then hold the mic to speak, have replies read aloud, or call a bot. On a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/), the admin turns on calls and hold-to-talk with `PHONE_CALLS_ENABLED=true`.

### Which voice providers can transcribe?

ElevenLabs, OpenAI, Fish Audio, xAI, and self-hosted servers that support transcription. Cartesia and **Server (Mac)** only speak, so your browser, the desktop app or your phone listens instead.

### Can AI agents use voice without a hosted vendor?

Yes. Point WhatEverFi at a [self-hosted speech server](https://whateverfi.com/voice-providers/self-hosted/), or use [Server (Mac)](https://whateverfi.com/voice-providers/macos/) when the server runs on a Mac.

### Is using an AI voice legal?

Generally yes, for voices you have the right to use. Cloning someone's voice without consent can break laws on likeness and fraud, and OpenAI's policies ask you to tell listeners the voice is AI-generated. Only clone voices you have permission for.

### Can each bot have its own voice?

Yes. In a bot's settings, turn on **Read replies aloud** and pick a **Voice** next to it to override your default for that bot.

### Can my bot call me?

Yes, in a one-to-one chat once you've connected a voice provider and calls are on. Ask "call me at 5 to go over the day", or a bot may call when you've missed the same reminder several times.

## Sources

- [ElevenLabs, pricing](https://elevenlabs.io/pricing)
- [ElevenLabs, API pricing](https://elevenlabs.io/pricing/api)
- [OpenAI, API pricing](https://developers.openai.com/api/docs/pricing)
- [Cartesia, pricing](https://cartesia.ai/pricing)
- [Fish Audio, API pricing and rate limits](https://docs.fish.audio/developer-guide/models-pricing/pricing-and-rate-limits)
- [Fish Audio, plans](https://fish.audio/plan)
- [xAI, models and pricing](https://docs.x.ai/developers/models)
- [Deepgram, pricing](https://deepgram.com/pricing)
- [Google Cloud, Text-to-Speech pricing](https://cloud.google.com/text-to-speech/pricing)
- [Google Cloud, Speech-to-Text pricing](https://cloud.google.com/speech-to-text/pricing)
- [Azure AI Speech, pricing](https://azure.microsoft.com/pricing/details/cognitive-services/speech-services/)
- [Amazon Polly, pricing](https://aws.amazon.com/polly/pricing/)
- [Amazon Transcribe, pricing](https://aws.amazon.com/transcribe/pricing/)
- [Inworld, pricing](https://inworld.ai/pricing)
- [DeepInfra, Kokoro-82M](https://deepinfra.com/hexgrad/Kokoro-82M)
- [Together AI, pricing](https://www.together.ai/pricing)
- [Groq, speech to text](https://console.groq.com/docs/speech-to-text)
- [AssemblyAI, pricing](https://www.assemblyai.com/pricing)
- [Hetzner, cloud servers](https://www.hetzner.com/cloud/)
- [WhatEverFi, voice and calls](https://github.com/elie222/rakazo/blob/main/docs/voice-and-calls.md)
