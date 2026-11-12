# OpenAI text to speech for AI agents: pricing, shutdown dates and setup

[OpenAI](https://openai.com) is best known for ChatGPT and its language models, and its API also turns text into speech and speech into text. If you already pay for OpenAI, the same kind of API key can give your agents a voice.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and you can also talk to it by voice: hold the mic to speak, have replies read aloud, or call a bot in real time. Connect OpenAI and it does the speaking and the transcription. WhatEverFi runs the bot, decides what it says, and keeps the transcript in the chat.

This page covers what OpenAI's audio models cost as of November 2026, the shutdown of `gpt-4o-mini-tts` and the transcription models in early 2027, and how OpenAI compares with the alternatives.

Updated November 4, 2026.

## What is OpenAI text to speech?

OpenAI's [Audio API](https://developers.openai.com/api/docs/guides/text-to-speech) has a speech endpoint that reads text aloud in one of 13 built-in voices, such as Alloy, Coral, Marin and Cedar, and a transcription endpoint that turns a recording into text. Both are reached with an ordinary OpenAI API key.

The speech endpoint takes up to 4,096 characters per request and returns MP3, Opus, AAC, FLAC, WAV or raw PCM. With `gpt-4o-mini-tts` you can also pass instructions for tone, accent and pace. OpenAI says the voices are optimized for English, though they follow Whisper's language coverage.

## gpt-4o-mini-tts and Whisper are being shut down

OpenAI's [deprecations page](https://developers.openai.com/api/docs/deprecations) says `tts-1`, `tts-1-hd` and both snapshots of `gpt-4o-mini-tts` shut down on January 6, 2027. The replacement, `gpt-realtime-2.1-mini`, isn't supported on the speech endpoint: it works through the Realtime API over WebRTC, WebSocket or SIP. Developers on OpenAI's forum point out that a realtime model has to be prompted to read text exactly, which a speech endpoint never needed.

Transcription follows on February 26, 2027: `whisper-1`, `gpt-4o-transcribe`, `gpt-4o-mini-transcribe` and `gpt-4o-transcribe-diarize` all shut down, replaced by `gpt-transcribe` and `gpt-live-transcribe`.

WhatEverFi speaks with `gpt-4o-mini-tts` and transcribes with `gpt-4o-mini-transcribe` today. Until WhatEverFi moves to the newer models, OpenAI voice in WhatEverFi stops working on those dates.

**OpenAI audio models and their shutdown dates**

| Model | Used for | Shuts down | Replacement |
| --- | --- | --- | --- |
| `gpt-4o-mini-tts` (WhatEverFi uses this) | Speech | January 6, 2027 | `gpt-realtime-2.1-mini`, Realtime API only |
| `tts-1`, `tts-1-hd` | Speech | January 6, 2027 | `gpt-realtime-2.1-mini` |
| `gpt-4o-mini-transcribe` (WhatEverFi uses this) | Transcription | February 26, 2027 | `gpt-transcribe` or `gpt-live-transcribe` |
| `whisper-1`, `gpt-4o-transcribe` | Transcription | February 26, 2027 | `gpt-transcribe` or `gpt-live-transcribe` |

From [OpenAI's deprecations page](https://developers.openai.com/api/docs/deprecations), checked November 2026.

## OpenAI TTS pricing

OpenAI has no free tier for audio; you prepay API credit. The older speech models are billed per character, and the newer ones per token, which is why people find the pricing confusing. `gpt-4o-mini-tts` charges for the text you send and, much more, for the audio it returns. OpenAI used to estimate that at about $0.015 a minute; its pricing page no longer gives a per-minute figure, and some developers report bills above that estimate.

**OpenAI speech and transcription prices, as of November 2026**

| Model | Price | About per hour |
| --- | --- | --- |
| `gpt-4o-mini-tts` | $0.60 per 1M text tokens in, $12 per 1M audio tokens out | About $0.90 |
| `tts-1` | $15 per 1M characters | $0.81 |
| `tts-1-hd` | $30 per 1M characters | $1.62 |
| `gpt-realtime-2.1-mini` | $10 per 1M audio tokens in, $20 per 1M audio tokens out | Not published |
| `gpt-4o-mini-transcribe` | $0.003 a minute | $0.18 |
| `gpt-transcribe` | $0.0045 a minute | $0.27 |
| `gpt-4o-transcribe`, Whisper | $0.006 a minute | $0.36 |
| `gpt-live-transcribe` | $0.017 a minute | $1.02 |

From [OpenAI's API pricing page](https://developers.openai.com/api/docs/pricing), checked November 2026. Hourly speech figures assume about 54,000 characters an hour; the `gpt-4o-mini-tts` figure uses OpenAI's earlier estimate of $0.015 a minute.

## What a talking WhatEverFi bot costs on OpenAI

WhatEverFi calls OpenAI with your key, so OpenAI bills you and WhatEverFi adds nothing. The voice key is stored separately from any OpenAI key you use for models, but both draw on the same OpenAI account if you use the same project.

The worked example is one bot that reads about 30 minutes of replies aloud each day and transcribes about 30 minutes of what you say, every day for a month: 15 hours of speech (about 810,000 characters) and 15 hours of transcription. On OpenAI that is about $13.50 of speech and $2.70 of transcription: about $16 a month, among the cheaper hosted options, until the shutdown.

**One bot, 30 minutes of speech and 30 of transcription a day**

| Option | Speech | Transcription | A month |
| --- | --- | --- | --- |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) | About $13.50 | $2.70 | About $16, until the 2027 shutdown |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) | $32.40 | $3.30 | About $36 |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) | $12.15 | $5.40 | About $18 |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) | $49 (Startup plan fee) | $0, your device listens | $49 |
| [Self-hosted](https://whateverfi.com/voice-providers/self-hosted/) on a computer you own | Electricity | Electricity | About $0 |

Usage prices from each provider's pricing page, checked November 2026. Where speech is bought as a monthly plan, as with Cartesia, the cost shown is the fee for the smallest plan that covers it. WhatEverFi doesn't charge for voice: you connect your own key and the provider bills you.

## OpenAI TTS vs ElevenLabs and other voice APIs

OpenAI is cheap and simple, with a small fixed set of voices. ElevenLabs and Fish Audio sound more natural to most listeners and let you use cloned voices; Cartesia is faster to start talking. OpenAI's custom voices exist but are limited to eligible customers through sales, and WhatEverFi doesn't use them.

**OpenAI compared with other voice APIs**

| Option | Speech per 1M characters | About per hour of speech | Transcription per hour | Free to start | In WhatEverFi |
| --- | --- | --- | --- | --- | --- |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) `gpt-4o-mini-tts` | About $17, billed in tokens | About $0.90 | $0.18 (`gpt-4o-mini-transcribe`) | None | Built in until January 6, 2027 |
| OpenAI `tts-1` or `tts-1-hd` | $15 or $30 | $0.81 or $1.62 | $0.36 (Whisper) | None | Not used |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) Flash v2.5 | $40 | $2.16 | $0.22 (Scribe v2) | 10,000 credits a month, non-commercial | Built in, speaks and transcribes |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) Sonic 3 | $37.38 to $50, by plan | $2.02 to $2.70 | $0.40 to $0.54 (Ink, not used by WhatEverFi) | 20,000 credits a month | Built in, speaks only |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) S2.1 Pro | $15 per 1M bytes, the same as characters in English | $0.81 | $0.36 | Free app plan, about 7 minutes a month | Built in, speaks and transcribes |
| Deepgram Aura-2 and Nova-3 | $30 | $1.62 | $0.26 batch, $0.46 streaming | $200 credit | Not available |
| Google Cloud Chirp 3 HD | $30 | $1.62 | $0.96 | 1M characters a month | Not available |
| [Kokoro and Whisper](https://whateverfi.com/voice-providers/self-hosted/) on your hardware | Hardware only | Hardware only | Hardware only | Open source | Built in as **Self-hosted** |

Prices in US dollars from each provider's pricing page, checked November 2026. An hour of speech is taken as about 54,000 characters (150 words a minute); real voices run a little faster or slower. Fish Audio bills per UTF-8 byte, which is one byte per character in English.

## What you can do with OpenAI in WhatEverFi

OpenAI both speaks and transcribes, so it covers every voice feature in WhatEverFi. The [voice and calls guide](https://whateverfi.com/docs/voice-and-calls/) shows where each control lives.

- Talk instead of typing. Hold the mic in the composer, speak, and let go to send. When WhatEverFi transcribes on the server, as it does in a phone browser or the desktop app, it uses `gpt-4o-mini-transcribe`.
- Hear replies. Choose **Speak this reply** on any message, or turn on **Read replies aloud** in a bot's settings. Replies are spoken with `gpt-4o-mini-tts`.
- Call a bot. Choose **Call** at the top of a chat to talk in real time. You can cut in while the bot is speaking, and the transcript stays in the chat.
- Get called. Ask "call me when the drafts are ready" and the bot rings you. A bot may also call if you've missed the same reminder several times.
- Give each bot its own voice. Pick from OpenAI's 13 voices per bot, so different bots are easy to tell apart.
- Send voice notes from chat apps. A voice note sent to a bot through Telegram, for example, is transcribed before the bot reads it. See [messaging apps](https://whateverfi.com/docs/messaging-apps/).

## When to choose OpenAI

Choose OpenAI when you already have an OpenAI account and want voice working in a few minutes, with clear voices and solid transcription from one key at a low price. Because its speech and transcription models are scheduled to shut down, treat it as a convenient start rather than a long-term pick, until WhatEverFi moves to OpenAI's newer models.

[ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) also speaks and transcribes, with more natural voices and support for your own cloned ones. [Cartesia](https://whateverfi.com/voice-providers/cartesia/) is built for fast, interruptible calls but only speaks. [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) offers cloning and expressive speech at a similar price to OpenAI. If you like OpenAI's API shape but want audio on your own hardware, a [self-hosted](https://whateverfi.com/voice-providers/self-hosted/) server such as Kokoro or Whisper speaks the same protocol. [Server (Mac)](https://whateverfi.com/voice-providers/macos/) needs no key when your server runs on a Mac. The [comparison](https://whateverfi.com/voice-providers/) puts them side by side.

## Limits and gotchas

- WhatEverFi speaks with `gpt-4o-mini-tts`, which OpenAI shuts down on January 6, 2027, and transcribes with `gpt-4o-mini-transcribe`, which follows on February 26, 2027. Until WhatEverFi moves to newer models, OpenAI voice stops working on those dates.
- The models are fixed. You can't choose `tts-1`, a newer model or a different transcription model from WhatEverFi.
- WhatEverFi offers OpenAI's 13 built-in voices. It doesn't send tone instructions, and custom voices made in your OpenAI account aren't supported.
- Each sentence is generated as a finished clip and played in order, rather than streamed, so there is a short pause before the bot starts talking.
- OpenAI keeps speech requests for up to 30 days for abuse monitoring and doesn't train on API data by default. Transcription requests aren't retained. Zero data retention needs OpenAI's approval.
- OpenAI's usage policies ask you to tell listeners the voice is AI-generated. Keep that in mind if a bot's voice reaches people outside your team.
- Calls and hold-to-talk are a server setting. On a self-hosted server they stay off until the admin turns them on.

## How to set it up

Anyone can do this in their own settings, on WhatEverFi Cloud or a self-hosted server. The key belongs to your account, and it is stored separately from any OpenAI key you use for models, so paste it here even if you already added it elsewhere.

1. Create an API key in the [OpenAI platform](https://platform.openai.com) for a project with audio access.
2. In WhatEverFi, open **Settings → Voice**, choose **OpenAI** as the **Provider**, paste the **API key** and choose **Connect**.
3. Pick a **Voice**, such as Marin or Cedar, and use **Hear a sample** to check it.
4. Optionally, open a bot's settings, expand **Advanced**, turn on **Read replies aloud** and give it its own **Voice**.
5. If you run your own server and want calls and hold-to-talk, set `PHONE_CALLS_ENABLED=true` on the API and worker.

## FAQ

### How much does OpenAI text to speech cost?

As of November 2026, `tts-1` costs $15 and `tts-1-hd` $30 per million characters. `gpt-4o-mini-tts` costs $0.60 per million text tokens in and $12 per million audio tokens out, which OpenAI used to estimate at about $0.015 a minute, roughly $0.90 an hour. There is no free tier.

### How much does the Whisper API cost?

Whisper and `gpt-4o-transcribe` cost $0.006 a minute ($0.36 an hour), `gpt-4o-mini-transcribe` $0.003 a minute, and the newer `gpt-transcribe` $0.0045 a minute. Whisper and the gpt-4o transcription models shut down on February 26, 2027.

### Is gpt-4o-mini-tts being deprecated?

Yes. OpenAI says `tts-1`, `tts-1-hd` and `gpt-4o-mini-tts` shut down on January 6, 2027, and points to `gpt-realtime-2.1-mini` through the Realtime API. WhatEverFi uses `gpt-4o-mini-tts` today, so OpenAI voice in WhatEverFi depends on moving to the new model before then.

### Can I use OpenAI text to speech for an AI agent?

Yes. In WhatEverFi, connect OpenAI in **Settings → Voice** and your bots can read replies aloud, take calls and transcribe what you say. Note the shutdown dates above.

### Which OpenAI voices can a WhatEverFi bot use?

The 13 built-in voices: Alloy, Ash, Ballad, Cedar, Coral, Echo, Fable, Marin, Nova, Onyx, Sage, Shimmer and Verse. You can set a default and a different voice per bot.

### OpenAI vs ElevenLabs for voice agents?

Both speak and transcribe in WhatEverFi. Per hour of speech, OpenAI is cheaper than ElevenLabs Flash v2.5, around $0.90 against $2.16, and offers a fixed set of voices. [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) sounds more natural, lets you use voices you clone, and isn't affected by OpenAI's 2027 shutdown.

### Can I use a self-hosted Whisper server instead?

Yes, where your server offers it. Choose [Self-hosted](https://whateverfi.com/voice-providers/self-hosted/) in **Settings → Voice** and enter the address of any OpenAI-compatible speech server, such as Kokoro for speech or Whisper for transcription.

## More voice providers for AI agents

- [Compare all voice providers](https://whateverfi.com/voice-providers/)
- [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/): The most natural voices, including ones you clone
- [Cartesia](https://whateverfi.com/voice-providers/cartesia/): Fast, natural voices on calls
- [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/): Expressive voices and your own cloned voice
- [Self-hosted voice](https://whateverfi.com/voice-providers/self-hosted/): Private, offline voice with no vendor account
- [macOS voices](https://whateverfi.com/voice-providers/macos/): Running WhatEverFi on a Mac with no voice key

## Sources

- [OpenAI, text to speech](https://developers.openai.com/api/docs/guides/text-to-speech)
- [OpenAI, deprecations](https://developers.openai.com/api/docs/deprecations)
- [OpenAI, API pricing](https://developers.openai.com/api/docs/pricing)
- [OpenAI, your data](https://developers.openai.com/api/docs/guides/your-data)
- [OpenAI community, TTS shutdown email](https://community.openai.com/t/tts-shutdown-email-tts-1-gpt-4o-mini-tts-jan-6-2027-isnt-on-the-deprecations-page/1402731)
- [WhatEverFi, voice and calls](https://github.com/elie222/rakazo/blob/main/docs/voice-and-calls.md)
- [ElevenLabs, API pricing](https://elevenlabs.io/pricing/api)
- [Cartesia, pricing](https://cartesia.ai/pricing)
- [Fish Audio, API pricing and rate limits](https://docs.fish.audio/developer-guide/models-pricing/pricing-and-rate-limits)
- [Fish Audio, plans](https://fish.audio/plan)
- [Deepgram, pricing](https://deepgram.com/pricing)
- [Google Cloud, Text-to-Speech pricing](https://cloud.google.com/text-to-speech/pricing)
- [Google Cloud, Speech-to-Text pricing](https://cloud.google.com/speech-to-text/pricing)
