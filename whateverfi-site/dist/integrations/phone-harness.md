# Phone Harness

Phone Harness provides cloud Android phone sessions for automated lifecycle management, observation, and ADB access.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/phone-harness/.

## Actions

- **Create API Key**: Create an account-wide API bearer key that can manage API keys.
- **Create Session**: Start a temporary or saved Android emulator session and return its admitted session data plus the internally generated idempotency key.
- **Create View-Only Link**: Create a short-lived view-only link for an intended person to watch a live session.
- **Enable ADB**: Enable or re-enable ADB access for a ready Android session and return its current connection endpoint and sensitive unlock code.
- **End Session**: Request that a Phone Harness session end and billing closure be recorded.
- **Get Account** (read-only): Get the connected account's identity, balance, Android profile choices, active-session capacity, and whether a new session can be started.
- **Get ADB** (read-only): Get the current ADB state for an Android session.
- **Get API Health** (read-only): Check public Phone Harness API-process liveness only.
- **Get Owner Viewer**: Create a secret, short-lived capability for interactive owner control of a ready session.
- **Get Recent History** (read-only): Return up to 100 finished sessions ordered by creation time descending.
- **Get Session** (read-only): Get one session's current lifecycle state, deadline, screen geometry, and ADB details.
- **Get Snapshot** (read-only): Download the latest still image from a ready Phone Harness session as a file.
- **List API Keys** (read-only): List metadata for the connected account's API keys, including hashes, labels, hints, creation times, and revocation times.
- **List History** (read-only): Return one cursor-paginated page of finished-session history in newest-first order, with a next cursor for complete traversal.
- **List Sessions** (read-only): List all active account sessions, including provisioning, terminal-error, closing, and cleanup-pending entries.
- **Recover Create Request** (read-only): Read the durable receipt for an idempotent session create to resolve an ambiguous create result or confirm asynchronous release cleanup.
- **Reset ADB Code**: Rotate the ADB unlock code for an Android session, invalidate the previous code, and close all existing ADB connections.
- **Reset Device**: Irreversibly erase and reprovision an assigned iPhone, deleting its apps, accounts, and data.
- **Reset Profile**: Irreversibly delete the saved Android profile's apps, logins, and data.
- **Revoke ADB**: Revoke ADB access for an Android session.
- **Revoke API Key**: Idempotently revoke an API key by its hash.
