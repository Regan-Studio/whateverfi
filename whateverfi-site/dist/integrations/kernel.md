# Kernel

Kernel provides cloud browsers, computer controls, Playwright execution, session replays, and persistent browser profiles for building browser-based agents and automations.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/kernel/.

## Actions

- **Batch Computer Actions**: Execute 1-100 computer actions sequentially in a Kernel browser, stopping on the first error.
- **Browser Curl** (read-only): Send a read-only GET, HEAD, or OPTIONS request through a Kernel browser's network stack, inheriting its cookies, TLS fingerprint, proxy…
- **Browser HTTP Request**: Send a state-changing POST, PUT, PATCH, or DELETE request through a Kernel browser's network stack, inheriting its cookies, TLS…
- **Click**: Click at browser viewport coordinates with an optional mouse button, click phase, modifiers, and repetition count.
- **Create Browser**: Create a Kernel browser session.
- **Create Profile**: Create an empty persistent browser profile, optionally with a unique name, for reuse by later browser sessions.
- **Delete Browser**: Permanently end and delete a Kernel browser session by ID or name.
- **Delete Playwright Executor**: Stop and permanently delete a named, non-default Playwright executor from a Kernel browser.
- **Delete Profile**: Permanently delete a browser profile by ID or name.
- **Download Profile** (read-only): Download a profile's stored browser state.
- **Drag Mouse**: Drag a mouse button through an ordered path of browser viewport coordinates, with optional timing, linear-step, and modifier controls.
- **Execute Playwright**: Execute arbitrary TypeScript or JavaScript with Playwright access to the browser.
- **Get Browser** (read-only): Get safe operational details for one browser session by ID or name, optionally including a deleted session.
- **Get Mouse Position** (read-only): Get the current mouse cursor coordinates in a Kernel browser session.
- **Get Profile** (read-only): Get one browser profile by its ID or exact name.
- **Get Replay** (read-only): Download a completed browser replay as MP4.
- **List Browsers** (read-only): List browser sessions, optionally filtered by lifecycle state, search text, tags, or region, one offset page at a time.
- **List Playwright Executors** (read-only): List the default and named Playwright executors for a Kernel browser, including whether each is busy and its owned tab when available.
- **List Profiles** (read-only): List browser profiles, optionally filtered by substring or exact name, one offset page at a time.
- **List Replays** (read-only): List replay recordings for a headful browser session without returning signed viewer URLs.
- **Move Mouse**: Move the cursor to browser viewport coordinates, optionally using a timed human-like path and held modifier keys.
- **Press Key**: Press an ordered sequence of X11 keys or key chords in a browser, optionally holding modifiers or holding the sequence for a duration.
- **Read Clipboard** (read-only): Read the current text from a Kernel browser session's clipboard.
- **Rename Profile**: Rename a Kernel browser profile by ID or exact name.
- **Restart Default Playwright Executor**: Restart a Kernel browser's reserved default Playwright executor.
- **Save Browser Profile**: Save a running browser's current state to exactly one destination profile ID or name, creating a named profile when needed and overwriting…
- **Scroll**: Scroll horizontally or vertically at browser viewport coordinates, optionally while holding modifier keys.
- **Set Cursor Visibility**: Hide or show the cursor in a Kernel browser session.
- **Start Replay**: Start recording a headful Kernel browser session and return its replay identifier and recording metadata without exposing its signed…
- **Stop Replay**: Stop an active replay recording for a Kernel browser identified by ID or name.
- **Take Screenshot** (read-only): Capture the full browser viewport or a rectangular region as a PNG download.
- **Type Text**: Type text into the currently focused browser element with an optional per-keystroke delay.
- **Update Browser**: Update mutable settings on an existing Kernel browser session.
- **Upload Browser Extensions**: Upload and activate one or more unpacked Chromium extension ZIP archives in an existing running browser.
- **Write Clipboard**: Write text to the system clipboard of a Kernel browser session.
