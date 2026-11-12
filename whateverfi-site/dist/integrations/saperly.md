# Saperly

Saperly is the phone carrier for AI agents — phone numbers, voice, SMS, and compliance in one API.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/saperly/.

## Actions

- **Bind Connection to Number**: Attach a connection (the AI persona / answering brain from SAPERLY_CREATE_CONNECTION) to a phone number, so inbound calls and SMS to that…
- **Check Consent** (read-only): Check whether a contact currently has active TCPA consent for one of your Saperly numbers, given numberId (your number) and peerNumber…
- **Create Connection**: Create a connection.
- **Delete Connection**: PERMANENTLY AND IRREVERSIBLY delete a connection (the AI answering brain / persona that handles calls and SMS) by its id.
- **End Call**: End an in-progress call by its id, hanging up and settling the metered cost.
- **Get Call** (read-only): Fetch a single call by its id, returning its status, per-minute rate, final duration (durationSec) and cost (costCents), and the…
- **Get Call Recording** (read-only): Get the audio recording for a call and return it as a downloadable file.
- **Get Call Transcript** (read-only): Fetch the transcript (conversation turns/segments) of a completed call by its id.
- **Get Connection** (read-only): Fetch a single connection (the AI answering brain / persona that handles calls and SMS) by its id, returning its full config.
- **Get Phone Number** (read-only): Fetch a single phone number by its id, returning its E.164 phoneNumber, bound connectionId, webhookUrl, country, numberType, pricing and…
- **Get Usage & Balance** (read-only): Return the workspace usage summary and prepaid balance.
- **List Calls** (read-only): Return the full voice-call history (inbound + outbound) for the connected Saperly workspace.
- **List Connections** (read-only): Return every connection (the AI persona / answering 'brain' that handles calls and SMS) in the connected Saperly workspace.
- **List Consent Records** (read-only): Return every TCPA consent record in the connected Saperly workspace, with each record's id, numberId (the Saperly number contact is…
- **List Languages** (read-only): Return the spoken languages Saperly supports for voice connections, each as a {code, name} pair (about 42 entries, e.g.
- **List Messages** (read-only): Return SMS messages in the connected Saperly workspace (both inbound and outbound).
- **List Phone Numbers** (read-only): Return every phone number provisioned in the connected Saperly workspace, with each number's id, phoneNumber (E.164), the connectionId…
- **List Voices** (read-only): List the text-to-speech voices available for Saperly connections.
- **Place Call**: PAID / METERED — places a REAL outbound voice call that RINGS A REAL PHONE and BILLS PER MINUTE (~26¢/min).
- **Provision Phone Number**: PAID / METERED.
- **Quote Number Price** (read-only): READ-ONLY and FREE.
- **Record Consent**: Record TCPA consent for a contact so outbound SMS (SAPERLY_SEND_SMS) and calls (SAPERLY_PLACE_CALL) from your number are permitted.
- **Release Phone Number**: PERMANENTLY AND IRREVERSIBLY release a phone number back to the carrier.
- **Revoke Consent**: Revoke a contact's TCPA consent for a given Saperly number, blocking further outbound contact to them.
- **Send SMS**: PAID / METERED.
- **Set Number Caller ID Name**: Set the outbound caller ID name / CNAM (1-15 characters.
- **Set Number SMS Sender ID**: Set the alphanumeric SMS sender id (1-11 alphanumeric chars, e.g.
- **Set Number Webhook**: Set the HTTPS webhook URL that Saperly POSTs this number's events (inbound SMS/calls, status) to.
- **Transfer Call**: PAID / METERED — BLIND-transfers a LIVE, in-progress voice call to another destination to (an E.164 number like +15551230000, or a sip.
- **Update Connection**: Partially update a connection (the AI answering brain bound to a number).
