# ElevenLabs for AI agents: pricing, alternatives and setup

[ElevenLabs](https://elevenlabs.io) is a voice AI company best known for natural, expressive text to speech and voice cloning. Its API also transcribes speech, so one key covers both directions of a conversation.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and you can also talk to it by voice: hold the mic to speak, have replies read aloud, or call a bot in real time. Connect ElevenLabs and it does the speaking and the transcription. WhatEverFi runs the bot, decides what it says, and keeps the transcript in the chat.

This page covers what ElevenLabs costs as of November 2026, how its plans and API billing differ, what a bot that talks every day actually costs, and how it compares with the alternatives.

Updated November 4, 2026.

## What is ElevenLabs?

[ElevenLabs](https://elevenlabs.io) makes speech models and the products built on them: an AI voice generator, dubbing, an audiobook reader, and a platform for voice agents. Developers reach the same models through its API.

Its text to speech is known for sounding human, with emotion and natural pacing, in many languages. As of November 2026 the lineup is Eleven v4, its most expressive model (released September 2026), v4 Turbo for low latency, and Flash v2.5, a fast conversational model with about 100 ms of model latency in 32 languages. Scribe v2 and Scribe v2 Realtime turn speech back into text. You can clone a voice from a recording, design a new one, or pick from a large shared voice library.

## ElevenLabs pricing in 2026

ElevenLabs sells monthly plans for its apps, and bills its API in dollars per character. The plans differ in included credits, commercial rights, voice cloning and how many requests can run at once. Annual billing costs ten months' price for twelve.

**ElevenLabs plans, as of November 2026**

| Plan | A month | Credits a month | Commercial use | Voice cloning | Requests at once |
| --- | --- | --- | --- | --- | --- |
| Free | $0 | 10,000 | No, attribution required | None | 2 |
| Starter | $6 | 30,000 | Yes | Instant | 3 |
| Creator | $22 | 121,000 | Yes | Instant, 1 Professional | 5 |
| Pro | $99 | 600,000 | Yes | Instant, 1 Professional | 10 |
| Scale | $299, 3 seats | 1.8M | Yes | 3 Professional | 15 |
| Business | $990, 10 seats | 6M | Yes | 10 Professional | 25 |
| Enterprise | Custom | Custom | Yes | Custom | Custom |

From [ElevenLabs' pricing page](https://elevenlabs.io/pricing), checked November 2026. In the apps, text to speech uses about 1 credit per character, so about 900 credits per minute of speech at the pace these tables assume.

## ElevenLabs API pricing per character and per hour

The API is what WhatEverFi uses, and it is billed differently from the apps. Each model has a dollar price per 1,000 characters that is the same on every plan; a subscription includes some usage, and Pay As You Go lets you top up a dollar balance (from $5, valid for 12 months) with or without a plan. Without auto top-up, requests stop at $0 instead of running up a bill. Older guides quoting $0.10 per 1,000 characters predate a 2026 price cut.

**ElevenLabs API rates, as of November 2026**

| Model | Per 1,000 characters | Per 1M characters | About per hour |
| --- | --- | --- | --- |
| Flash v2.5 (WhatEverFi uses this) | $0.04 | $40 | $2.16 |
| v4 Turbo, v3 Conversational | $0.04 | $40 | $2.16 |
| Eleven v4, v3, Multilingual v2 | $0.08 | $80 | $4.32 |
| Scribe v2 transcription (WhatEverFi uses this) | — | — | $0.22 of audio |
| Scribe v2 Realtime | — | — | $0.39 of audio |
| ElevenLabs Agents platform | — | — | $4.80 ($0.08 a minute) plus the LLM |

From [ElevenLabs' API pricing page](https://elevenlabs.io/pricing/api), checked November 2026. An hour of speech is taken as about 54,000 characters.

## What a talking WhatEverFi bot costs on ElevenLabs

WhatEverFi calls ElevenLabs with your key, so ElevenLabs bills you at its API rates and WhatEverFi adds nothing on top. The cost depends on how much your bots say and how much of your speech is transcribed on the server.

The worked example is one bot that reads about 30 minutes of replies aloud each day and transcribes about 30 minutes of what you say, every day for a month: 15 hours of speech (about 810,000 characters) and 15 hours of transcription. On ElevenLabs that comes to $32.40 of Flash v2.5 speech and $3.30 of Scribe v2 transcription: about $36 a month. A light user who hears and speaks 10 minutes a day pays around $12; a bot that talks for two hours a day costs about $130 in speech alone.

Two things lower the bill. In Chrome on a desktop, the mic uses the browser's own speech recognition, so that transcription costs nothing. And a self-hosted WhatEverFi can set `VOICE_SUMMARY_MIN_CHARS` so long replies are read as a short summary instead of in full, which cuts characters at the cost of one extra model call.

**One bot, 30 minutes of speech and 30 of transcription a day**

| Option | Speech | Transcription | A month |
| --- | --- | --- | --- |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) | $32.40 | $3.30 | About $36 |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) | About $13.50 | $2.70 | About $16, until the 2027 shutdown |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) | $49 (Startup plan fee) | $0, your device listens | $49 |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) | $12.15 | $5.40 | About $18 |
| [Self-hosted](https://whateverfi.com/voice-providers/self-hosted/) on a computer you own | Electricity | Electricity | About $0 |
| Deepgram (not in WhatEverFi) | $24.30 | $3.87 | About $28 |

Usage prices from each provider's pricing page, checked November 2026. Where speech is bought as a monthly plan, as with Cartesia, the cost shown is the fee for the smallest plan that covers it. WhatEverFi doesn't charge for voice: you connect your own key and the provider bills you.

## ElevenLabs vs OpenAI, Cartesia, Fish Audio and Deepgram

ElevenLabs is not the cheapest voice. Per character, Flash v2.5 is about the same as Cartesia on its Startup plan and more expensive than Deepgram's Aura-2, while Fish Audio costs about 38% of its price and OpenAI's `tts-1` about 38% of it. What you pay for is voice quality, the size of the voice library and cloning that people consistently rate among the best.

**ElevenLabs compared with other voice APIs**

| Option | Speech per 1M characters | About per hour of speech | Transcription per hour | Free to start | In WhatEverFi |
| --- | --- | --- | --- | --- | --- |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) Flash v2.5 | $40 | $2.16 | $0.22 (Scribe v2) | 10,000 credits a month, non-commercial | Built in, speaks and transcribes |
| ElevenLabs v4 or Multilingual v2 | $80 | $4.32 | Same as above | Same plans | Not selectable |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) `gpt-4o-mini-tts` | About $17, billed in tokens | About $0.90 | $0.18 (`gpt-4o-mini-transcribe`) | None | Built in until January 6, 2027 |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) Sonic 3 | $37.38 to $50, by plan | $2.02 to $2.70 | $0.40 to $0.54 (Ink, not used by WhatEverFi) | 20,000 credits a month | Built in, speaks only |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) S2.1 Pro | $15 per 1M bytes, the same as characters in English | $0.81 | $0.36 | Free app plan, about 7 minutes a month | Built in, speaks and transcribes |
| Deepgram Aura-2 and Nova-3 | $30 | $1.62 | $0.26 batch, $0.46 streaming | $200 credit | Not available |
| Google Cloud Chirp 3 HD | $30 | $1.62 | $0.96 | 1M characters a month | Not available |
| Azure AI Speech, neural or HD | $15 or $22 | $0.81 or $1.19 | $1 real time, $0.18 batch | 0.5M characters and 5 hours a month | Not available |
| [Kokoro and Whisper](https://whateverfi.com/voice-providers/self-hosted/) on your hardware | Hardware only | Hardware only | Hardware only | Open source | Built in as **Self-hosted** |

Prices in US dollars from each provider's pricing page, checked November 2026. An hour of speech is taken as about 54,000 characters (150 words a minute); real voices run a little faster or slower. Fish Audio bills per UTF-8 byte, which is one byte per character in English.

## ElevenLabs alternatives

The best alternative depends on why you're leaving. If it's price, [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) costs about 38% of the per-character price, with cloning and a big voice library, and a [self-hosted](https://whateverfi.com/voice-providers/self-hosted/) Kokoro server costs only hardware. If it's latency on calls, [Cartesia](https://whateverfi.com/voice-providers/cartesia/) is built for it, though in WhatEverFi it only speaks. If you already pay OpenAI, [OpenAI](https://whateverfi.com/voice-providers/openai/) is the quickest start, but its speech model shuts down on January 6, 2027.

Outside WhatEverFi, Deepgram is strong at transcription (Nova-3 from $0.26 an hour) with Aura-2 voices that are cheaper than Flash v2.5 but plainer; Google, Azure and Amazon Polly are cheap at scale and come with cloud compliance paperwork; Hume and Inworld focus on expressive or low-cost voices for agents. PlayHT, once a common alternative, shut down at the end of 2025. WhatEverFi has no built-in connection for any of these.

## What you can do with ElevenLabs in WhatEverFi

ElevenLabs both speaks and transcribes, so it covers every voice feature in WhatEverFi. The [voice and calls guide](https://whateverfi.com/docs/voice-and-calls/) shows where each control lives.

- Talk instead of typing. Hold the mic in the composer, speak, and let go to send. When WhatEverFi transcribes on the server, as it does in a phone browser or the desktop app, it uses ElevenLabs' `scribe_v2`.
- Hear replies. Choose **Speak this reply** on any message, or turn on **Read replies aloud** in a bot's settings to hear everything it says.
- Call a bot. Choose **Call** at the top of a chat to talk in real time. You can cut in while the bot is speaking, and the transcript stays in the chat.
- Get called. Ask "call me at 5 to go over the day" and the bot rings you then. A bot may also call if you've missed the same reminder several times.
- Give each bot its own voice. The **Voice** next to **Read replies aloud** overrides your default for that bot, so your inbox bot and your sales bot don't sound alike.
- Use your own voices. The voice picker lists the voices in your ElevenLabs account, including ones you cloned or saved from its library.
- Send voice notes from chat apps. A voice note sent to a bot through Telegram, for example, is transcribed with ElevenLabs before the bot reads it. See [messaging apps](https://whateverfi.com/docs/messaging-apps/).

## When to choose ElevenLabs

Choose ElevenLabs when the voice itself matters: you'll listen to a bot every day, you want it to sound like a person, or you want it to sound like a specific person you have permission to clone. It is also the simplest choice for full voice support, since one key speaks and transcribes, and its Scribe transcription is among the cheapest hosted options.

Skip it if cost per hour is what you're optimizing, if you need audio to stay on your own hardware, or if you need data residency or zero retention without an Enterprise contract. The [comparison](https://whateverfi.com/voice-providers/) puts every option side by side.

## Limits and gotchas

- WhatEverFi speaks with Eleven Flash v2.5 (`eleven_flash_v2_5`), ElevenLabs' fast model for conversation, unless you enter another **Speech model**.
- WhatEverFi doesn't clone voices itself. Create the clone in ElevenLabs first, then pick it in WhatEverFi.
- Each sentence is generated as a finished clip and played in order, rather than streamed word by word, so there is a short pause before the bot starts talking.
- Speech and transcription go through ElevenLabs' servers and use your ElevenLabs account's balance. If it runs out, WhatEverFi tells you so instead of failing quietly.
- The Free plan is for non-commercial use with attribution. A bot that talks to customers needs a paid plan.
- Unused plan credits roll over for up to two months, but cancelling or downgrading forfeits them at the end of the cycle. Recent reviews complain about exactly this, so downgrade after you've used them.
- Zero retention mode and data residency in the EU, India or Singapore are Enterprise-only.
- Calls and hold-to-talk are a server setting. On a self-hosted server they stay off until the admin turns them on.
- In a desktop browser such as Chrome, WhatEverFi may use the browser's own speech recognition for the mic instead of ElevenLabs.

## How to set it up

Anyone can do this in their own settings, on WhatEverFi Cloud or a self-hosted server. The key belongs to your account, not the whole server.

1. Create an API key in your [ElevenLabs](https://elevenlabs.io) account. Give it permission for text to speech, speech to text and reading voices.
2. In WhatEverFi, open **Settings → Voice**, choose **ElevenLabs** as the **Provider**, paste the **API key** and choose **Connect**.
3. Pick a **Voice** and use **Hear a sample** to check it.
4. Optionally enter a **Speech model**, such as `eleven_v4`, to use a more expressive model than the default `eleven_flash_v2_5`.
5. Optionally, open a bot's settings, expand **Advanced**, turn on **Read replies aloud** and give it its own **Voice**.
6. If you run your own server and want calls and hold-to-talk, set `PHONE_CALLS_ENABLED=true` on the API and worker.

## FAQ

### How much does ElevenLabs cost?

As of November 2026, plans run from Free (10,000 credits, non-commercial) through Starter at $6, Creator at $22, Pro at $99, Scale at $299 and Business at $990 a month. Through the API, Flash v2.5 costs $0.04 per 1,000 characters (about $2.16 per hour of speech) and Eleven v4 costs $0.08. Scribe v2 transcription is $0.22 per hour.

### How much does an ElevenLabs voice agent cost per month?

In WhatEverFi, a bot that reads 30 minutes of replies a day and transcribes 30 minutes of what you say costs about $36 a month in ElevenLabs usage. WhatEverFi doesn't add a voice charge. ElevenLabs' own Agents platform is priced separately, at $0.08 a minute plus the language model.

### Can I talk to my AI agent with ElevenLabs?

Yes. In WhatEverFi, connect ElevenLabs in **Settings → Voice**, then hold the mic to speak to a bot, have its replies read aloud, or call it in real time. ElevenLabs does the speech and transcription; the bot runs in WhatEverFi.

### Can a WhatEverFi bot use my cloned ElevenLabs voice?

Yes. Clone the voice in ElevenLabs, and it appears in WhatEverFi's voice picker with the rest of your account's voices. You can set it as your default or give it to one bot. Only clone voices you have the right to use.

### Which ElevenLabs model does WhatEverFi use?

Eleven Flash v2.5 (`eleven_flash_v2_5`) for speech, chosen for low latency in conversation, and Scribe v2 (`scribe_v2`) for transcription. You can enter another speech model, such as Eleven v4 (`eleven_v4`), in **Settings → Voice**; transcription always uses Scribe v2.

### What is the best ElevenLabs alternative?

For price, [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) or a [self-hosted](https://whateverfi.com/voice-providers/self-hosted/) Kokoro server. For fast calls, [Cartesia](https://whateverfi.com/voice-providers/cartesia/). For a quick start with a key you have, [OpenAI](https://whateverfi.com/voice-providers/openai/), until its speech model shuts down in January 2027. For transcription at scale outside WhatEverFi, Deepgram.

### Deepgram vs ElevenLabs: which is better?

Deepgram specializes in transcription and is a common choice for the listening side of voice agents, but per hour it is more expensive than ElevenLabs: streaming Nova-3 costs $0.46 against $0.39 for Scribe v2 Realtime, and batch $0.26 against $0.22. ElevenLabs sounds more natural and clones voices; Deepgram's Aura-2 voices are cheaper than Flash v2.5. Many voice-agent builders use Deepgram to listen and ElevenLabs to speak. WhatEverFi connects to ElevenLabs but not Deepgram.

### Do I need ElevenLabs to use WhatEverFi?

No. Voice is optional, and WhatEverFi works fully in text. On the mobile app, a bot can also use your phone's own voice for calls.

## More voice providers for AI agents

- [Compare all voice providers](https://whateverfi.com/voice-providers/)
- [OpenAI](https://whateverfi.com/voice-providers/openai/): Reusing an OpenAI key you already have
- [Cartesia](https://whateverfi.com/voice-providers/cartesia/): Fast, natural voices on calls
- [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/): Expressive voices and your own cloned voice
- [Self-hosted voice](https://whateverfi.com/voice-providers/self-hosted/): Private, offline voice with no vendor account
- [macOS voices](https://whateverfi.com/voice-providers/macos/): Running WhatEverFi on a Mac with no voice key

## Sources

- [ElevenLabs](https://elevenlabs.io)
- [ElevenLabs, pricing](https://elevenlabs.io/pricing)
- [ElevenLabs, API pricing](https://elevenlabs.io/pricing/api)
- [ElevenLabs, models](https://elevenlabs.io/docs/overview/models)
- [ElevenLabs, Pay As You Go](https://elevenlabs.io/docs/overview/administration/pay-as-you-go)
- [ElevenLabs, zero retention mode](https://elevenlabs.io/docs/developers/resources/zero-retention-mode)
- [WhatEverFi, voice and calls](https://github.com/elie222/rakazo/blob/main/docs/voice-and-calls.md)
- [OpenAI, API pricing](https://developers.openai.com/api/docs/pricing)
- [Cartesia, pricing](https://cartesia.ai/pricing)
- [Fish Audio, API pricing and rate limits](https://docs.fish.audio/developer-guide/models-pricing/pricing-and-rate-limits)
- [Fish Audio, plans](https://fish.audio/plan)
- [Deepgram, pricing](https://deepgram.com/pricing)
- [Google Cloud, Text-to-Speech pricing](https://cloud.google.com/text-to-speech/pricing)
- [Google Cloud, Speech-to-Text pricing](https://cloud.google.com/speech-to-text/pricing)
- [Azure AI Speech, pricing](https://azure.microsoft.com/pricing/details/cognitive-services/speech-services/)
