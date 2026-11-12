# Cartesia for AI agents: pricing, Cartesia vs ElevenLabs, and setup

[Cartesia](https://cartesia.ai) builds speech models for live conversation. Its Sonic text to speech is designed to start talking almost immediately, which is what a voice agent needs when someone is waiting on the other end.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and you can also talk to it by voice: hold the mic to speak, have replies read aloud, or call a bot in real time. Connect Cartesia and it gives your bots their voice. Your device listens and turns your speech into text, and WhatEverFi runs the bot and keeps the transcript in the chat.

This page covers Cartesia's plans and prices as of November 2026, what a bot that talks every day costs, how Cartesia compares with ElevenLabs, and what WhatEverFi does and doesn't use.

Updated November 4, 2026.

## What is Cartesia?

[Cartesia](https://cartesia.ai) is a voice AI company that makes speech models and a platform for voice agents that answer and make phone calls. Its text to speech family is called Sonic, and it is built on state space models, an architecture Cartesia uses to keep latency low.

As of November 2026 the newest model is Sonic 3.6, in 44 languages; Sonic 3 and 3.5 remain available. Cartesia advertises first audio in under 90 ms; independent tests over a real network have measured about 250 ms, still among the fastest. Emotion is inferred from the text, `[laughter]` can be inserted, and pronunciation dictionaries fix names. You can choose from Cartesia's voice library or clone a voice from about 10 seconds of audio. Cartesia also sells a speech to text model, Ink, but WhatEverFi doesn't use it.

## Cartesia pricing in 2026

Cartesia sells monthly plans with credits. Sonic uses one credit per character, so about 900 credits per minute of speech at 150 words a minute, the pace every figure on this page assumes. Ink transcription uses 3 credits per second of audio. Unused credits roll over up to twice your monthly amount. With overage off, requests stop when credits run out; with it on, extra usage is billed per million credits.

**Cartesia plans, as of November 2026**

| Plan | A month | Credits a month | Overage per 1M credits | Voice cloning | Speech requests at once |
| --- | --- | --- | --- | --- | --- |
| Free | $0 | 20,000 | None | No | 2 |
| Pro | $5 | 100,000 | $65 | Instant | 3 |
| Startup | $49 | 1.25M | $45 | Instant, 2 Professional | 5 |
| Scale | $299 | 8M | $38 | Instant, 4 Professional | 15 |
| Enterprise | Custom | Custom | Custom | Custom | Custom |

From [Cartesia's pricing page](https://cartesia.ai/pricing), checked November 2026. Paid plans include commercial use; the page doesn't say for Free.

## Cartesia cost per hour of speech

Dividing each plan's price by its credits gives the effective rate. Smaller plans cost more per character, and the Free plan's 20,000 credits cover about 22 minutes of speech a month. Cartesia's managed voice agents are priced separately at $0.03 a minute plus the language model and telephony.

**Cartesia effective rates, as of November 2026**

| Plan | Speech per 1M characters | About per hour of speech | Ink per hour |
| --- | --- | --- | --- |
| Pro | $50 | $2.70 | $0.54 |
| Startup | $39.20 | $2.12 | $0.42 |
| Scale | $37.38 | $2.02 | $0.40 |

Derived from [Cartesia's pricing page](https://cartesia.ai/pricing), checked November 2026, at about 54,000 characters per hour of speech. WhatEverFi doesn't use Ink.

## What a talking WhatEverFi bot costs on Cartesia

WhatEverFi calls Cartesia with your key, so Cartesia bills you and WhatEverFi adds nothing. Because WhatEverFi uses Cartesia only to speak, transcription is free: your browser, the desktop app or your phone does the listening.

The worked example is one bot that reads about 30 minutes of replies aloud each day and transcribes about 30 minutes of what you say, every day for a month: 15 hours of speech (about 810,000 characters) and 15 hours of transcription. That is about 810,000 credits, which fits inside the Startup plan's 1,250,000: $49 a month. On Pro you'd pay $5 plus about $46 of overage, so Startup is the better fit at this volume. Someone who hears 10 minutes a day uses about 270,000 credits, which is Pro plus about $11 of overage.

**One bot, 30 minutes of speech and 30 of transcription a day**

| Option | Speech | Transcription | A month |
| --- | --- | --- | --- |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) | $49 (Startup plan fee) | $0, your device listens | $49 |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) | $32.40 | $3.30 | About $36 |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) | About $13.50 | $2.70 | About $16, until the 2027 shutdown |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) | $12.15 | $5.40 | About $18 |
| [Server (Mac)](https://whateverfi.com/voice-providers/macos/) | $0 | $0, your device listens | $0 |

Usage prices from each provider's pricing page, checked November 2026. Where speech is bought as a monthly plan, as with Cartesia, the cost shown is the fee for the smallest plan that covers it. WhatEverFi doesn't charge for voice: you connect your own key and the provider bills you.

## Cartesia vs ElevenLabs

Both make natural, clonable voices for agents. Per character, Cartesia on its Startup plan is about the same as ElevenLabs Flash v2.5: Cartesia costs $37.38 to $50 per million depending on plan, ElevenLabs $40. The differences are elsewhere. Cartesia is designed around latency, and in tests with lots of interruptions the difference is noticeable. ElevenLabs has the larger voice library, the more expressive top model (Eleven v4), and its own transcription. Reviewers rate Cartesia's English highly but say other languages trail ElevenLabs.

In WhatEverFi the practical difference is transcription: ElevenLabs does both directions with one key, while Cartesia only speaks, so the mic depends on your device's speech recognition.

**Cartesia compared with ElevenLabs and other voice APIs**

| Option | Speech per 1M characters | About per hour of speech | Transcription per hour | Free to start | In WhatEverFi |
| --- | --- | --- | --- | --- | --- |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) Sonic 3 | $37.38 to $50, by plan | $2.02 to $2.70 | $0.40 to $0.54 (Ink, not used by WhatEverFi) | 20,000 credits a month | Built in, speaks only |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) Flash v2.5 | $40 | $2.16 | $0.22 (Scribe v2) | 10,000 credits a month, non-commercial | Built in, speaks and transcribes |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) `gpt-4o-mini-tts` | About $17, billed in tokens | About $0.90 | $0.18 (`gpt-4o-mini-transcribe`) | None | Built in until January 6, 2027 |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) S2.1 Pro | $15 per 1M bytes, the same as characters in English | $0.81 | $0.36 | Free app plan, about 7 minutes a month | Built in, speaks and transcribes |
| Deepgram Aura-2 and Nova-3 | $30 | $1.62 | $0.26 batch, $0.46 streaming | $200 credit | Not available |
| Inworld TTS-2 or TTS-2 Flash | $25 or $15 | $1.35 or $0.81 | $0.15 | Up to 70 minutes of speech | Not available |
| [Kokoro and Whisper](https://whateverfi.com/voice-providers/self-hosted/) on your hardware | Hardware only | Hardware only | Hardware only | Open source | Built in as **Self-hosted** |

Prices in US dollars from each provider's pricing page, checked November 2026. An hour of speech is taken as about 54,000 characters (150 words a minute); real voices run a little faster or slower. Fish Audio bills per UTF-8 byte, which is one byte per character in English.

## What you can do with Cartesia in WhatEverFi

In WhatEverFi, Cartesia speaks and doesn't transcribe. Everything that needs a voice works with it, and your device handles listening. The [voice and calls guide](https://whateverfi.com/docs/voice-and-calls/) shows where each control lives.

- Hear replies. Choose **Speak this reply** on any message, or turn on **Read replies aloud** in a bot's settings. Replies are spoken with `sonic-3`.
- Call a bot. Choose **Call** at the top of a chat to talk in real time. You can cut in while the bot is speaking, and the transcript stays in the chat.
- Get called. Ask "call me when the overnight list is ready" and the bot rings you. A bot may also call if you've missed the same reminder several times.
- Give each bot its own voice. The **Voice** next to **Read replies aloud** overrides your default for that bot.
- Use your own voices. The voice picker lists the voices your Cartesia account can use, including ones you cloned.
- Talk instead of typing, with your device's speech recognition. Holding the mic uses the browser's recognition in Chrome and the system's in the desktop app. On calls in the mobile app, the phone listens.

## When to choose Cartesia

Choose Cartesia when you mostly listen to your bots and call them, and you want voices that sound natural and start quickly. It fits people who use Chrome, the desktop app or the mobile app, where speech recognition is already on the device.

If you need transcription from the provider too, pick one that does both. [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) has the widest choice of voices and cloning, [OpenAI](https://whateverfi.com/voice-providers/openai/) suits you if you already have a key, and [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) adds expressive speech at a lower price. To keep audio on your own hardware, run a [self-hosted](https://whateverfi.com/voice-providers/self-hosted/) speech server, or use [Server (Mac)](https://whateverfi.com/voice-providers/macos/) if your server runs on a Mac. The [comparison](https://whateverfi.com/voice-providers/) puts them side by side.

## Limits and gotchas

- No transcription. In a browser without on-device speech recognition, holding the mic shows an error until you switch to Chrome or the desktop app, or connect a provider that transcribes.
- Voice notes sent to a bot through a chat app such as Telegram arrive as audio files without a transcript.
- WhatEverFi always speaks with `sonic-3`. You can't pick Sonic 3.6 or set emotion, speed or pronunciation from WhatEverFi.
- Each sentence is generated as a finished clip and played in order, rather than streamed over Cartesia's real-time connection, so a bot starts talking a little later than Sonic alone could.
- WhatEverFi doesn't clone voices itself. Create the clone in Cartesia first. The picker loads up to 2,000 voices, and voices beyond that can't be chosen.
- Speech requests at once are capped per plan, from 2 on Free to 15 on Scale. Several people sharing one key on calls can hit that.
- Zero data retention, HIPAA agreements and regional endpoints in the EU, UK, India and Australia are Enterprise features. Cartesia is SOC 2 Type II certified.
- Calls and hold-to-talk are a server setting. On a self-hosted server they stay off until the admin turns them on.

## How to set it up

Anyone can do this in their own settings, on WhatEverFi Cloud or a self-hosted server. The key belongs to your account, not the whole server.

1. Create an API key in your [Cartesia](https://cartesia.ai) account.
2. In WhatEverFi, open **Settings → Voice**, choose **Cartesia** as the **Provider**, paste the **API key** and choose **Connect**.
3. Pick a **Voice** and use **Hear a sample** to check it.
4. Optionally, open a bot's settings, expand **Advanced**, turn on **Read replies aloud** and give it its own **Voice**.
5. If you run your own server and want calls and hold-to-talk, set `PHONE_CALLS_ENABLED=true` on the API and worker.

## FAQ

### How much does Cartesia cost?

As of November 2026, Cartesia has a Free plan with 20,000 credits a month, Pro at $5 for 100,000, Startup at $49 for 1.25M and Scale at $299 for 8M. Sonic uses one credit per character, so speech costs about $37.38 to $50 per million characters, roughly $2.02 to $2.70 per hour.

### Cartesia vs ElevenLabs: which is better for AI agents?

Both give natural voices you can clone, at a similar price per character. Cartesia is built for speed in live conversation. [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) has more voices and languages and also transcribes, so in WhatEverFi the mic and chat app voice notes work everywhere with one key. Cartesia only speaks in WhatEverFi.

### Can I build a voice agent with Cartesia Sonic?

Yes. In WhatEverFi, connect Cartesia in **Settings → Voice** and your bots speak with Sonic when they read replies or take a call. Your device turns your speech into text, so you don't need a second provider.

### Does Cartesia transcribe speech in WhatEverFi?

No. Cartesia sells a speech to text model, Ink, but WhatEverFi uses Cartesia only to speak. Listening uses your browser's, computer's or phone's speech recognition. For transcription from the provider, use [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/), [OpenAI](https://whateverfi.com/voice-providers/openai/) or [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/).

### Can a WhatEverFi bot use my cloned Cartesia voice?

Yes. Clone the voice in Cartesia, and it appears in WhatEverFi's voice picker with the other voices your account can use. Only clone voices you have the right to use.

### Is Cartesia open source?

No. Sonic and Ink are hosted models; Enterprise customers can arrange on-premises deployment through sales. For open models, see [self-hosted voice](https://whateverfi.com/voice-providers/self-hosted/).

## More voice providers for AI agents

- [Compare all voice providers](https://whateverfi.com/voice-providers/)
- [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/): The most natural voices, including ones you clone
- [OpenAI](https://whateverfi.com/voice-providers/openai/): Reusing an OpenAI key you already have
- [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/): Expressive voices and your own cloned voice
- [Self-hosted voice](https://whateverfi.com/voice-providers/self-hosted/): Private, offline voice with no vendor account
- [macOS voices](https://whateverfi.com/voice-providers/macos/): Running WhatEverFi on a Mac with no voice key

## Sources

- [Cartesia](https://cartesia.ai)
- [Cartesia, pricing](https://cartesia.ai/pricing)
- [Cartesia, Sonic models](https://docs.cartesia.ai/build-with-cartesia/tts-models/latest)
- [eesel, Cartesia Sonic 3 vs ElevenLabs](https://www.eesel.ai/blog/cartesia-sonic-3-vs-elevenlabs)
- [WhatEverFi, voice and calls](https://github.com/elie222/rakazo/blob/main/docs/voice-and-calls.md)
- [ElevenLabs, API pricing](https://elevenlabs.io/pricing/api)
- [OpenAI, API pricing](https://developers.openai.com/api/docs/pricing)
- [Fish Audio, API pricing and rate limits](https://docs.fish.audio/developer-guide/models-pricing/pricing-and-rate-limits)
- [Fish Audio, plans](https://fish.audio/plan)
- [Deepgram, pricing](https://deepgram.com/pricing)
- [Inworld, pricing](https://inworld.ai/pricing)
