# Viral Loops

Viral Loops is a referral marketing platform for managing campaigns, participants, referrals, conversions, leaderboards, and rewards.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/viral-loops/.

## Actions

- **Get Campaign Info** (read-only): Return the connected campaign's identity, template, expiration mode and date, points, GDPR, and integration configuration without bulky…
- **Get Campaign Stats** (read-only): Return the connected campaign's lead count and total referral count.
- **Get Participant** (read-only): Return one participant's profile, referral totals, rank, referrer, and reward summaries by email or referral code.
- **List Participant Referrals** (read-only): Return one participant's referrals by email or referral code, with explicit offset pagination.
- **Look Up Participants** (read-only): Batch lookup exact participant and referrer identifiers, returning matching campaign records with explicit offset pagination.
- **Register Participant**: Register an email address in the connected campaign, optionally with a referrer and participant metadata.
- **Search Participants** (read-only): Search campaign participants by text, conversion status, and acquisition source, with explicit offset pagination.
- **Track Participant Conversion**: IRREVERSIBLE.
- **Update Participant**: Update one participant's name, referral or conversion counts, or custom data, identified by email or referral code.
