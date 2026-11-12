# Saperly MCP

Manage Saperly phone numbers, connections, calls, SMS and usage through its official MCP server using your scoped workspace API key.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/saperly-mcp/.

## Actions

- **Assign number connection**: Attach a connection (the handler that answers calls) to a number — i.e.
- **Create connection**: Create a connection.
- **Delete connection**: Delete a connection.
- **Get call** (read-only): Fetch one call record by its Saperly id.
- **Get connection** (read-only): Fetch one connection by its Saperly id.
- **Get number** (read-only): Fetch one phone number by its Saperly id.
- **Get usage** (read-only): Summarize calls, messages, and the current balance for this workspace.
- **List calls** (read-only): List the calls in this workspace.
- **List connections** (read-only): List the connections (call/message handlers) configured in this workspace.
- **List custom voices** (read-only): List this workspace’s private voices and their processing status.
- **List messages** (read-only): List SMS messages in this workspace, optionally filtered to one number.
- **List numbers** (read-only): List the active phone numbers (lines) provisioned in this workspace.
- **List voices** (read-only): List stock voices and ready private voices.
- **Place call**: Dial an outbound call from one of your numbers.
- **Provision number**: Order a new phone number and add it to this workspace.
- **Release number**: Release a phone number and stop billing it.
- **Search available numbers** (read-only): Search available inventory for numbers available to provision, priced for this workspace.
- **Send sms**: Send an SMS from one of your numbers.
- **Set caller id name**: Set (or clear) a line’s outbound CALLER ID NAME — the 1–15 letter/number/space display name (CNAM) shown alongside the number on the…
- **Set sms sender**: Set (or clear) a line’s alphanumeric SMS sender name — the 1–11 letter/number label recipients see as the “from” on INTERNATIONAL SMS only.
- **Speak into call**: Speak a line into a live call.
- **Sync connection**: Reconcile a connection — create/update its assistant and mint its manual-mode secret.
- **Transfer call**: Blind-transfer a live call to another destination — an E.164 phone number or a sip.
- **Update connection**: Update a connection’s name, instructions, compliance/disclosure — or switch its mode between hosted (an in-network AI assistant) and…
