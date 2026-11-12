# Fish Audio for AI agents: pricing, API and setup

[Fish Audio](https://fish.audio) is a hosted voice platform for text to speech, voice cloning and speech to text. It has a large library of voices that its users have published, and you can clone a voice of your own from a short recording. Everything it does in the app is also available through its API.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and you can also talk to it by voice: hold the mic to speak, have replies read aloud, or call a bot in real time. With a Fish Audio key, your bots speak in a Fish Audio voice and Fish Audio turns what you say into text.

This page covers Fish Audio's plans and API prices as of November 2026, what a bot that talks every day costs, its open models and licensing, and how it compares with ElevenLabs and others.

Updated November 4, 2026.

## What is Fish Audio?

Fish Audio offers three things that matter to an AI agent: speech, cloning and transcription. Its speech models turn text into audio in a chosen voice, and its [documentation](https://docs.fish.audio) recommends `s2.1-pro` for production, which supports 83 languages. Its transcription model, `transcribe-1-pro`, handles several languages and multiple speakers. A newer, larger model, `drama-3`, is aimed at multi-character scenes and long content.

Every voice is a model in your Fish Audio account or in its public library. Clone one from a clip in the Fish Audio app and it becomes a voice your API key can use.

## Fish Audio pricing: app plans

The Fish Audio app is sold in monthly plans with credits. By the minutes Fish Audio lists for each plan, a minute of generated speech uses about 1,150 to 1,250 credits. Unused credits don't roll over. These plans cover the app; API use is billed separately, below.

**Fish Audio app plans, as of November 2026**

| Plan | A month | Credits a month | About minutes of speech | Cloned voices |
| --- | --- | --- | --- | --- |
| Free | $0 | 8,000 | 7 | Public voices only |
| Plus | $15, or $11 billed yearly | 250,000 | 200 | 10 private, 1 professional |
| Pro | $100, or $75 billed yearly | 2,000,000 | 1,620 | Unlimited, 5 professional |

From [Fish Audio's plans page](https://fish.audio/plan), checked November 2026. The plan card and the FAQ disagree on whether the Free plan allows commercial use; the FAQ says personal, non-commercial only.

## Fish Audio API pricing

The API is pay as you go with no subscription. Speech is priced per million bytes of UTF-8 text, so English costs the same per character, while Chinese, Japanese and Korean text, at three bytes a character, costs about three times as much per character. At $15 per million bytes and about 54,000 characters an hour of English speech, an hour costs about $0.81.

Fish Audio sometimes offers a model free for a limited time; check its pricing page. Because WhatEverFi lets you enter a Fish Audio **Speech model**, you can use such a model by entering its name there.

**Fish Audio API prices, as of November 2026**

| Model | Price | About per hour |
| --- | --- | --- |
| `s2.1-pro` (WhatEverFi's default) | $15 per 1M bytes | $0.81 |
| `s2-pro` | $15 per 1M bytes | $0.81 |
| `drama-3` | $50 per 1M bytes | $2.70 |
| `transcribe-1-pro` (WhatEverFi's default) | $0.36 per audio hour | $0.36 |

From [Fish Audio's API pricing page](https://docs.fish.audio/developer-guide/models-pricing/pricing-and-rate-limits), checked November 2026. Hourly speech figures assume about 54,000 bytes of English text an hour. Transcription bills the full recording, rounded up to the second; failed requests aren't billed.

## What a talking WhatEverFi bot costs on Fish Audio

WhatEverFi calls Fish Audio with your key, so Fish Audio bills you and WhatEverFi adds nothing.

The worked example is one bot that reads about 30 minutes of replies aloud each day and transcribes about 30 minutes of what you say, every day for a month: 15 hours of speech (about 810,000 characters) and 15 hours of transcription. On Fish Audio that is $12.15 of S2.1 Pro speech and $5.40 of transcription: about $18 a month, about 49% of what ElevenLabs costs for the same use.

**One bot, 30 minutes of speech and 30 of transcription a day**

| Option | Speech | Transcription | A month |
| --- | --- | --- | --- |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) | $12.15 | $5.40 | About $18 |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) | $32.40 | $3.30 | About $36 |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) | About $13.50 | $2.70 | About $16, until the 2027 shutdown |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) | $49 (Startup plan fee) | $0, your device listens | $49 |
| [Self-hosted](https://whateverfi.com/voice-providers/self-hosted/) on a computer you own | Electricity | Electricity | About $0 |

Usage prices from each provider's pricing page, checked November 2026. Where speech is bought as a monthly plan, as with Cartesia, the cost shown is the fee for the smallest plan that covers it. WhatEverFi doesn't charge for voice: you connect your own key and the provider bills you.

## Fish Audio vs ElevenLabs and other voice APIs

Fish Audio's pitch is ElevenLabs-class expressive voices and cloning at a fraction of the price. Per character it costs about 38% of ElevenLabs Flash v2.5, and independent blind tests have ranked its models near the top. ElevenLabs still has the more established platform, broader compliance paperwork and enterprise data residency. Per hour, Fish Audio's transcription is more expensive than ElevenLabs Scribe v2.

**Fish Audio compared with other voice APIs**

| Option | Speech per 1M characters | About per hour of speech | Transcription per hour | Free to start | In WhatEverFi |
| --- | --- | --- | --- | --- | --- |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) S2.1 Pro | $15 per 1M bytes, the same as characters in English | $0.81 | $0.36 | Free app plan, about 7 minutes a month | Built in, speaks and transcribes |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) Flash v2.5 | $40 | $2.16 | $0.22 (Scribe v2) | 10,000 credits a month, non-commercial | Built in, speaks and transcribes |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) `gpt-4o-mini-tts` | About $17, billed in tokens | About $0.90 | $0.18 (`gpt-4o-mini-transcribe`) | None | Built in until January 6, 2027 |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) Sonic 3 | $37.38 to $50, by plan | $2.02 to $2.70 | $0.40 to $0.54 (Ink, not used by WhatEverFi) | 20,000 credits a month | Built in, speaks only |
| Deepgram Aura-2 and Nova-3 | $30 | $1.62 | $0.26 batch, $0.46 streaming | $200 credit | Not available |
| Google Cloud Chirp 3 HD | $30 | $1.62 | $0.96 | 1M characters a month | Not available |
| [Kokoro and Whisper](https://whateverfi.com/voice-providers/self-hosted/) on your hardware | Hardware only | Hardware only | Hardware only | Open source | Built in as **Self-hosted** |

Prices in US dollars from each provider's pricing page, checked November 2026. An hour of speech is taken as about 54,000 characters (150 words a minute); real voices run a little faster or slower. Fish Audio bills per UTF-8 byte, which is one byte per character in English.

## Is Fish Audio open source?

Partly. The [fish-speech](https://github.com/fishaudio/fish-speech) code and some model weights are public: S2-Pro (4B parameters) and Drama 3 can be downloaded from Hugging Face. They are released under Fish Audio's own licenses, which allow research and non-commercial use for free and require a separate license for commercial use. The S2.1 Pro weights that the API serves are not public.

So you can run Fish models yourself for a personal assistant, but a business needs a license from Fish Audio. Fish Audio's own self-hosted deployment is an enterprise contract, starting at $10,000 plus a $10,000 monthly minimum. For voice models you can run commercially for free, such as Kokoro, see [self-hosted voice](https://whateverfi.com/voice-providers/self-hosted/).

## What you can do with Fish Audio in WhatEverFi

Fish Audio both speaks and transcribes, so one key covers every voice feature. The [voice and calls guide](https://whateverfi.com/docs/voice-and-calls/) walks through each one.

- Talk instead of typing. Hold the mic in the composer and speak; Fish Audio transcribes it and the bot gets your message.
- Hear replies. Choose **Speak this reply** on any message, or turn on **Read replies aloud** in a bot's settings to hear every reply in its voice.
- Call a bot. Choose **Call** at the top of the chat to talk in real time. The transcript stays in the chat afterwards.
- Let bots call you. Ask "call me at 5 to go over the day", and the bot rings you at five.
- Give each bot its own voice. The **Voice** picker lists your own Fish Audio voices first, including ones you cloned, then popular public voices. A bot's settings can override your default.
- Choose the speech model. Enter another Fish Audio model name under **Speech model**, such as `s2-pro`, instead of the default `s2.1-pro`.

## When to choose Fish Audio

Choose Fish Audio when the voice itself matters and so does the price: a cloned voice, an unusual character, or a language where you want more choice than a fixed set of voices gives you. It speaks and transcribes, so one account does both.

[ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) is the other choice for cloning and polished voices, with more enterprise controls. [OpenAI](https://whateverfi.com/voice-providers/openai/) is simplest if you already have a key, and [Cartesia](https://whateverfi.com/voice-providers/cartesia/) is built for low-latency speech but does not transcribe. To keep voice off hosted services entirely, run a [self-hosted speech server](https://whateverfi.com/voice-providers/self-hosted/), or use the [voices built into a Mac](https://whateverfi.com/voice-providers/macos/) when WhatEverFi runs on one. The [voice provider comparison](https://whateverfi.com/voice-providers/) puts every option side by side.

## Limits and gotchas

- Fish Audio is a hosted service. The text your bots speak and the audio you record are sent to it, and use comes out of your Fish Audio account. Its free app plan is for personal use only.
- Data is hosted in the US, with processing in the US and Tokyo. Zero data retention is for enterprise contracts, and its SOC 2 audit was still underway as of November 2026.
- API requests at once depend on how much you've prepaid in total: 5 under $100, 15 from $100, 50 from $1,000. Over the limit, requests fail until one finishes.
- The public voice library includes voices uploaded by other users, and voice actors have reported clones made without consent. Fish Audio handles DMCA takedowns. Only use voices you have the right to use, especially for anything public.
- WhatEverFi asks Fish Audio for each reply as a finished clip. It doesn't use Fish Audio's realtime streaming API.
- The voice picker shows your own voices and the top public voices, not the whole library.
- When your Fish Audio balance runs out or the key is rejected, speaking and transcribing stop until you fix the account.
- On the mobile app, calls can use your phone's own voices if you pick a **Device voice** in the bot's settings. Otherwise replies use this provider.

## How to set it up

Each person connects their own key in the app, on WhatEverFi Cloud or a [self-hosted WhatEverFi](https://whateverfi.com/self-hosted-ai-agent/). A space can use different voice settings from the rest of your account.

1. Create an API key in your Fish Audio account. To use your own voice, clone it in the Fish Audio app first.
2. In WhatEverFi, open **Settings → Voice**, set **Provider** to **Fish Audio** and paste the key.
3. Pick a **Voice**, then choose **Hear a sample** to check it.
4. Optionally enter a **Speech model** to use a Fish Audio model other than the default `s2.1-pro`.
5. If you host WhatEverFi yourself, set `PHONE_CALLS_ENABLED=true` on the API and worker to turn on hold-to-talk and calls. Server admins can change the defaults with `FISH_TTS_MODEL` and `FISH_ASR_MODEL`.

## FAQ

### How much does Fish Audio cost?

As of November 2026, the app has a Free plan, Plus at $15 a month ($11 billed yearly) and Pro at $100 ($75 yearly). The API is pay as you go: $15 per million bytes of text for S2.1 Pro, about $0.81 per hour of English speech, and $0.36 per hour of transcription.

### Is Fish Audio free?

The app has a free plan with about 7 minutes of speech a month for personal use. The API is pay as you go.

### Is Fish Audio safe to use?

It's an established service with millions of users, and paid plans include commercial rights. The concerns people raise are about its public voice library, where some voices were uploaded without the speaker's consent, and that your text and audio are processed on its servers in the US. Use your own or licensed voices.

### Can I use a cloned Fish Audio voice for my AI agent?

Yes. Clone the voice in your Fish Audio account, then pick it from the **Voice** list in WhatEverFi's voice settings. Your own voices are listed before public ones.

### Does the Fish Audio API do speech to text?

Yes. WhatEverFi uses it to transcribe what you say when you hold the mic or talk on a call, with `transcribe-1-pro` by default, at $0.36 per hour of audio.

### Which Fish Audio model does WhatEverFi use?

`s2.1-pro` for speech and `transcribe-1-pro` for transcription. You can enter another speech model in **Settings → Voice**, and a self-hosted server can change both defaults.

### Fish Audio vs ElevenLabs?

Both offer expressive voices, cloning and transcription, and both work fully in WhatEverFi. Per character, Fish Audio costs about 38% of ElevenLabs Flash v2.5, and per hour its transcription is more expensive than ElevenLabs Scribe v2. [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) has a more established platform and enterprise options such as EU data residency.

## More voice providers for AI agents

- [Compare all voice providers](https://whateverfi.com/voice-providers/)
- [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/): The most natural voices, including ones you clone
- [OpenAI](https://whateverfi.com/voice-providers/openai/): Reusing an OpenAI key you already have
- [Cartesia](https://whateverfi.com/voice-providers/cartesia/): Fast, natural voices on calls
- [Self-hosted voice](https://whateverfi.com/voice-providers/self-hosted/): Private, offline voice with no vendor account
- [macOS voices](https://whateverfi.com/voice-providers/macos/): Running WhatEverFi on a Mac with no voice key

## Sources

- [Fish Audio](https://fish.audio)
- [Fish Audio documentation](https://docs.fish.audio)
- [Fish Audio, API pricing and rate limits](https://docs.fish.audio/developer-guide/models-pricing/pricing-and-rate-limits)
- [Fish Audio, plans](https://fish.audio/plan)
- [Fish Audio, enterprise](https://fish.audio/enterprise/)
- [fish-speech on GitHub](https://github.com/fishaudio/fish-speech)
- [WhatEverFi, voice and calls](https://github.com/elie222/rakazo/blob/main/docs/voice-and-calls.md)
- [WhatEverFi, self-hosted voice settings](https://github.com/elie222/rakazo/blob/main/docs/self-host-models.md#voice)
- [ElevenLabs, API pricing](https://elevenlabs.io/pricing/api)
- [OpenAI, API pricing](https://developers.openai.com/api/docs/pricing)
- [Cartesia, pricing](https://cartesia.ai/pricing)
- [Deepgram, pricing](https://deepgram.com/pricing)
- [Google Cloud, Text-to-Speech pricing](https://cloud.google.com/text-to-speech/pricing)
- [Google Cloud, Speech-to-Text pricing](https://cloud.google.com/speech-to-text/pricing)
