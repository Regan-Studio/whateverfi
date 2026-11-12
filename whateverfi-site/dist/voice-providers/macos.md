# macOS text to speech for AI agents: use your Mac's built-in voices

Every Mac ships with dozens of text-to-speech voices, and Apple offers Enhanced and Premium versions that sound more natural. The `say` command turns text into speech with any of them, entirely on the machine, with no account and no API key.

[WhatEverFi](https://whateverfi.com/) is an open source app for AI teammates that do real work. You talk to each bot in chat, and you can also talk to it by voice: hold the mic to speak, have replies read aloud, or call a bot in real time. When the WhatEverFi server runs directly on a Mac, it offers **Server (Mac)** as a voice provider, so bots speak with that Mac's voices and no voice vendor.

Updated November 4, 2026.

## What are macOS voices?

They are the system voices macOS uses for its own spoken content, such as reading selected text aloud. The `/usr/bin/say` command speaks with any installed voice and can save the result to an audio file instead of playing it, which is what WhatEverFi does.

Voices come in three tiers: Compact, which is small and robotic; Enhanced; and Premium, the most natural, available for a handful of voices such as Ava and Zoe in US English and Jamie and Serena in British English. Siri's voices aren't available to `say`. Personal Voice, the voice you can record of yourself, is only available to apps you grant permission to.

## How to use text to speech on a Mac

In macOS 26 and later, Apple renamed the **Spoken Content** settings to **Read & Speak**. That's where you pick the system voice and download better ones; older guides still use the old name.

1. Open **System Settings → Accessibility → Read & Speak**. On macOS 15 and earlier, it's **Accessibility → Spoken Content**.
2. Choose a voice from the **System voice** menu. To get Enhanced or Premium voices, click the Info button next to it, pick a language, and click a voice to download it.
3. Turn on **Speak selection** to have the Mac read any selected text with a keyboard shortcut, Option-Esc by default.
4. In Terminal, `say -v '?'` lists installed voices, `say -v 'Zoe (Premium)' "hello"` speaks, and `say -o hello.aiff "hello"` saves the audio to a file.

## What it costs

Nothing. The voices come with macOS, run on the Mac's own processor, and have no usage limit. That's the whole case for them: a bot that reads replies all day costs the same as one that never speaks. The trade-off is quality, since even Premium voices sound less natural than the best hosted ones, and there's no transcription.

**macOS voices compared with paid voice APIs**

| Option | Speech per 1M characters | About per hour of speech | Transcription per hour | Free to start | In WhatEverFi |
| --- | --- | --- | --- | --- | --- |
| [Server (Mac)](https://whateverfi.com/voice-providers/macos/) | Free | Free | None; your device listens | Built into macOS | Built in when the server runs on a Mac |
| [Kokoro and Whisper](https://whateverfi.com/voice-providers/self-hosted/) on your hardware | Hardware only | Hardware only | Hardware only | Open source | Built in as **Self-hosted** |
| [OpenAI](https://whateverfi.com/voice-providers/openai/) `gpt-4o-mini-tts` | About $17, billed in tokens | About $0.90 | $0.18 (`gpt-4o-mini-transcribe`) | None | Built in until January 6, 2027 |
| [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) S2.1 Pro | $15 per 1M bytes, the same as characters in English | $0.81 | $0.36 | Free app plan, about 7 minutes a month | Built in, speaks and transcribes |
| [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) Flash v2.5 | $40 | $2.16 | $0.22 (Scribe v2) | 10,000 credits a month, non-commercial | Built in, speaks and transcribes |
| [Cartesia](https://whateverfi.com/voice-providers/cartesia/) Sonic 3 | $37.38 to $50, by plan | $2.02 to $2.70 | $0.40 to $0.54 (Ink, not used by WhatEverFi) | 20,000 credits a month | Built in, speaks only |

Prices in US dollars from each provider's pricing page, checked November 2026. An hour of speech is taken as about 54,000 characters (150 words a minute); real voices run a little faster or slower. Fish Audio bills per UTF-8 byte, which is one byte per character in English.

## What you can do with macOS voices in WhatEverFi

The server renders each reply into a short audio clip with `say` and sends it to whoever is listening, so it plays on your phone or laptop like any other voice, not out of the server's speakers. The [voice and calls guide](https://whateverfi.com/docs/voice-and-calls/) covers each feature.

- Hear replies. Choose **Speak this reply** on a message, or turn on **Read replies aloud** in a bot's settings.
- Call a bot with **Call** at the top of the chat, or have a bot call you when you ask it to.
- Talk instead of typing, using on-device speech recognition. macOS voices don't transcribe, so your words are recognized by your browser, such as Chrome, or by the WhatEverFi desktop app on a Mac.
- Choose any installed voice, and a different one for each bot. Premium and Enhanced voices are listed first.

## When to choose macOS voices

Choose them when you run WhatEverFi on your own Mac and want bots to speak right away, with nothing to sign up for, nothing to install and nothing to pay. Speech is made on the machine running WhatEverFi, with no vendor involved, then sent to whichever device is listening.

For voices that also transcribe, a [self-hosted speech server](https://whateverfi.com/voice-providers/self-hosted/) keeps everything on your own hardware and works on Linux too; on a Mac, mlx-audio runs Kokoro and Whisper quickly. Hosted providers sound more natural and need an account: [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) and [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) clone voices, [OpenAI](https://whateverfi.com/voice-providers/openai/) is the simplest, xAI can use the Grok sign-in you connect for models, and [Cartesia](https://whateverfi.com/voice-providers/cartesia/) is built for low latency. The [voice provider comparison](https://whateverfi.com/voice-providers/) shows every option.

## Limits

- WhatEverFi only offers **Server (Mac)** when its server process runs directly on macOS. A server in Docker, including Docker Desktop on a Mac and the desktop app's **This computer** install, runs Linux inside the container, so the option doesn't appear. Linux hosts don't list it either.
- It doesn't transcribe. Hold-to-talk and calls depend on speech recognition in your browser or the desktop app, and voice notes from messaging apps reach bots without a transcript.
- macOS voices sound less natural than the best hosted voices, and there's no voice cloning.
- The voices are whatever is installed on the server's Mac. A newly downloaded voice can take a few minutes to show up.
- WhatEverFi lists the voices `say -v '?'` reports. We haven't tested Personal Voice, which needs the server process to be granted permission.
- On the mobile app, calls can use your phone's own voices if you pick a **Device voice** in the bot's settings. Otherwise replies use this provider.

## How to set it up

This is for someone running WhatEverFi from source on their own Mac. The [self-hosting guide](https://whateverfi.com/docs/self-host/) has the full instructions.

1. On the Mac, clone WhatEverFi, copy `.env.example` to `.env`, then run `pnpm install`, `pnpm sandbox:build` and `pnpm dev`. This runs the WhatEverFi API directly on macOS.
2. To use hold-to-talk and calls, set `PHONE_CALLS_ENABLED=true` in `.env` and restart.
3. Optionally download Enhanced or Premium voices under **System Settings → Accessibility → Read & Speak**, with the Info button next to **System voice**.
4. In WhatEverFi, open **Settings → Voice** and set **Provider** to **Server (Mac)**. There's no key to enter.
5. Pick a **Voice** and choose **Hear a sample**.

## FAQ

### Does macOS have text to speech?

Yes. Turn on **Speak selection** under **System Settings → Accessibility → Read & Speak** (Spoken Content before macOS 26) to have any selected text read aloud, or use the `say` command in Terminal. It's free and works offline.

### Can an AI assistant use the macOS say command?

Yes. When WhatEverFi's server runs on a Mac, it uses `say` to turn each reply into an audio clip in the voice you pick, with no API key.

### Why don't I see Server (Mac) in WhatEverFi?

The option only appears when the WhatEverFi server runs directly on macOS. In Docker, even on a Mac, the server runs on Linux and can't reach `say`. Use a self-hosted speech server there instead.

### Can macOS voices transcribe what I say?

No, they only speak. WhatEverFi uses on-device speech recognition from your browser or the desktop app for your side, or you can switch to a provider that transcribes.

### How do I get better macOS voices?

Download Enhanced or Premium voices on the server's Mac: in **System Settings → Accessibility → Read & Speak**, click the Info button next to **System voice**, pick a language and click a voice. WhatEverFi lists them first.

### Are macOS voices as good as ElevenLabs?

No. Premium voices are clear and pleasant, but hosted voices from [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/) or [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/) sound noticeably more human. macOS voices are free and private, which is why they're worth trying first.

## More voice providers for AI agents

- [Compare all voice providers](https://whateverfi.com/voice-providers/)
- [ElevenLabs](https://whateverfi.com/voice-providers/elevenlabs/): The most natural voices, including ones you clone
- [OpenAI](https://whateverfi.com/voice-providers/openai/): Reusing an OpenAI key you already have
- [Cartesia](https://whateverfi.com/voice-providers/cartesia/): Fast, natural voices on calls
- [Fish Audio](https://whateverfi.com/voice-providers/fish-audio/): Expressive voices and your own cloned voice
- [Self-hosted voice](https://whateverfi.com/voice-providers/self-hosted/): Private, offline voice with no vendor account

## Sources

- [Apple, change the voice your Mac uses to speak text](https://support.apple.com/guide/mac-help/mchlp2290/mac)
- [ss64, the say command](https://ss64.com/mac/say.html)
- [WhatEverFi, voice and calls](https://github.com/elie222/rakazo/blob/main/docs/voice-and-calls.md)
- [WhatEverFi, self-hosted voice settings](https://github.com/elie222/rakazo/blob/main/docs/self-host-models.md#voice)
- [WhatEverFi, self-hosting](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
- [OpenAI, API pricing](https://developers.openai.com/api/docs/pricing)
- [Fish Audio, API pricing and rate limits](https://docs.fish.audio/developer-guide/models-pricing/pricing-and-rate-limits)
- [Fish Audio, plans](https://fish.audio/plan)
- [ElevenLabs, API pricing](https://elevenlabs.io/pricing/api)
- [Cartesia, pricing](https://cartesia.ai/pricing)
