# TinyFish

TinyFish provides web automation, live search, content extraction, research, browser sessions, reusable browser profiles, and run management through native REST APIs.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/tinyfish/.

## Actions

- **Cancel Profile Setup Session**: Cancel a Browser Context Profile setup session and permanently discard its unsaved cookies and browser storage.
- **Cancel Runs**: Idempotently cancel one or up to 100 asynchronous or SSE runs.
- **Create Browser Session**: Create an isolated TinyFish remote browser session and return its CDP connection URL.
- **Create Profile**: Create a reusable Browser Context Profile for cookies and browser storage.
- **Delete Profile**: Permanently delete a Browser Context Profile and all browser state saved in it.
- **Delete Profile Domain**: Permanently remove saved cookies and browser storage for one domain from a Browser Context Profile.
- **Fetch URLs** (read-only): Render and extract content from 1-10 URLs in one provider-native batch.
- **Get Profile** (read-only): Get one Browser Context Profile and its saved-domain metadata.
- **Get Runs** (read-only): Get summary records for 1-100 TinyFish automation run IDs in one request.
- **Get Wallet** (read-only): Get the TinyFish wallet balance, auto-reload and pending-top-up state, and current Agent and Browser rates.
- **List Profiles** (read-only): List Browser Context Profiles available to the connected TinyFish account.
- **List Research Runs** (read-only): List saved TinyFish research runs with optional status, query, date, and sort filters, returning one cursor-controlled page.
- **List Runs** (read-only): List automation runs with optional status, goal, date, and sort filters, returning one cursor-controlled page.
- **List Usage** (read-only): List one page of Search, Fetch, or Browser usage history.
- **List Vault Connections** (read-only): List display-safe metadata for password-manager vaults connected to TinyFish.
- **List Vault Items** (read-only): List display-safe metadata for items synchronized from password-manager vaults connected to TinyFish.
- **Save Profile Setup Session**: Persist cookies and browser storage from a completed setup session into a Browser Context Profile, then clean up the temporary session.
- **Search Web** (read-only): Search live web pages, news, or research papers with domain and time filters, optionally fetching result pages inline, and return exactly…
- **Start Profile Setup Session**: Start a billable temporary remote browser session for establishing login state in a Browser Context Profile.
- **Sync Vault Items**: Refresh display-safe item metadata from all password-manager vaults already connected to TinyFish.
- **Terminate Browser Session**: Idempotently terminate a remote TinyFish browser session to stop further browser usage charges.
- **Update Profile**: Rename a Browser Context Profile or change its default and proxy-country settings.
- **Upload Profile State**: Upload cookies and local or session storage directly into a Browser Context Profile.
