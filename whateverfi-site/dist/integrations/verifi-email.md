# Verifi.Email

Verifi.Email validates email addresses and checks domain email-security configuration through its public API.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/verifi-email/.

## Actions

- **Check Domain Health** (read-only): Check a bare domain's SPF, DKIM, DMARC, and BIMI configuration and return protocol scores plus provider recommendations.
- **Validate Email** (read-only): Validate one non-empty email address and return its overall validity plus syntax, MX, spoofing, and disposable-address signals.
- **Validate Emails** (read-only): Validate 1-10 email address strings in one synchronous request and return one ordered result per input, including malformed strings as…
