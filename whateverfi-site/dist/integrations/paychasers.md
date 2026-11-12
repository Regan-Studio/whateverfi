# PayChasers

PayChasers automates payment reminders, client management, payment chases, and follow-ups for overdue accounts.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/paychasers/.

## Actions

- **Create Chase**: Create a payment chase and potentially send its initial reminder immediately.
- **Create Client**: Create a persistent PayChasers client from a name, billing email, and notes.
- **Get Current User** (read-only): Return the connected PayChasers account profile, plan, and default currency.
- **List Chases** (read-only): Return chases, optionally filtered by exact status and capped by a truncating limit.
- **List Clients** (read-only): Return all clients visible to the connected PayChasers account.
- **Mark Chase Paid**: Irreversibly mark a chase as paid and stop its automated follow-ups.
- **Send Follow-Up**: Immediately send one manual follow-up for a chase in the selected tone.
