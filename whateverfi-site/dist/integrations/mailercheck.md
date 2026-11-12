# MailerCheck

MailerCheck verifies individual email addresses and email lists, reports verification results, and tracks account credit balances.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/mailercheck/.

## Actions

- **Create Verification List**: Create a MailerCheck verification list by ingesting a name and email-address array.
- **Delete Verification List**: Permanently and irreversibly delete a MailerCheck verification list by ID.
- **Get Credit Balance** (read-only): Return the current MailerCheck verification-credit balance.
- **Get Current Account** (read-only): Return the connected MailerCheck user and account identity.
- **Get Verification List** (read-only): Return one verification list, including its status, item count, verification timing, and aggregate result statistics.
- **List Verification Lists** (read-only): Return one page of verification lists for the connected MailerCheck account, with an opaque cursor when another provider-controlled page…
- **List Verification Results** (read-only): Return one page of email-level results for a verification list, optionally filtered by classification.
- **Start List Verification**: Irreversibly start verification of every address in a MailerCheck list.
- **Verify Email**: Consumes exactly one MailerCheck verification credit on every successful call.
