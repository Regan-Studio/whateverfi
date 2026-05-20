# Security Policy

## Supported status

This repository is part of Regan Studio internal/private work unless the README says otherwise.

## Reporting a vulnerability

Do not open a public issue with secrets, credentials, tokens, private keys, screenshots of secrets, or exploit details.

For now, report security concerns directly to Mark / Regan Studio through the normal private operator channel. If this repo becomes public-facing, replace this section with a dedicated security contact.

## Secret handling

- Do not commit `.env` files, API keys, OAuth tokens, private keys, database URLs, or service credentials.
- Use placeholders like `[REDACTED]` in docs and examples.
- If a secret is committed, rotate/revoke it first, then clean history if needed.

## Automation note

Hermes/agentic automation may triage this repository, but should not run install scripts or repo code until reviewed.
