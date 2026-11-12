# CallOnTheGo

CallOnTheGo provides APIs for managing phone numbers, caller IDs, suppression lists, audio assets, contact lists, and Voice AI campaigns.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/callonthego/.

## Actions

- **Add Suppression Entry**: Idempotently add one phone number to the Do-Not-Call list.
- **Cancel Campaign**: Irreversibly cancel a campaign and mark its queued or pending recipients cancelled.
- **Create Caller ID**: Add a caller ID and initiate a telecom-provider verification call to confirm ownership.
- **Create Campaign**: Create a draft Voice AI campaign from explicit caller ID, contact list, and audio resources.
- **Delete Caller ID**: Permanently remove an owned caller ID configuration.
- **Delete Phone Number**: Permanently remove an owned phone-number configuration by ID.
- **Get Campaign** (read-only): Get one campaign's configuration, lifecycle state, resource names, delivery metrics, and cost metrics.
- **Get Dashboard Stats** (read-only): Return account-level call, contact, group, list, success-rate, and recent-activity summary metrics.
- **Get Voice Readiness** (read-only): Return runtime readiness, telecom provider assignment, and supported capabilities for diagnosing whether voice campaigns can run.
- **Launch Campaign**: Validate compliance, provision telecom isolation if needed, and launch a campaign.
- **List Audio Assets** (read-only): List campaign audio assets with playback, duration, transcript, and compliance details.
- **List Caller IDs** (read-only): List owned caller IDs with ownership-verification status and inbound-campaign assignment.
- **List Calls** (read-only): Return one page of account call records for outcome and duration review, with an opaque cursor for the next page.
- **List Campaign Events** (read-only): List only the newest 100 delivery events for a campaign, ordered newest first.
- **List Campaign Recipients** (read-only): List all recipients for a campaign with call status, attempts, machine detection, and cost estimates.
- **List Campaigns** (read-only): List Voice AI campaigns with lifecycle state, linked resources, calling window, rate, estimated cost, compliance state, and timestamps.
- **List Contact Lists** (read-only): List campaign contact lists with valid, invalid, suppressed, and total recipient counts.
- **List Contacts** (read-only): Return one page of contacts from the connected CallOnTheGo account for CRM lookup, with an opaque cursor for the next page.
- **List Phone Numbers** (read-only): List phone numbers owned by the connected CallOnTheGo account, including the resource records needed to identify numbers for later…
- **List Suppression Entries** (read-only): List Do-Not-Call suppression entries for the connected account.
- **Pause Campaign**: Pause a running campaign while retaining its pending recipients for a later resume.
- **Queue Campaign Lead**: Queue one phone-number lead for dialing by a running campaign.
- **Resume Campaign**: Resume a paused campaign and immediately requeue its pending recipients for calls.
- **Set Caller ID Inbound Campaign**: Set or clear the preferred inbound campaign assigned to an owned caller ID.
- **Update Campaign**: Update selected configuration fields on a draft or paused campaign.
- **Upload Audio Asset**: Upload an MP3 or WAV file as a reusable campaign audio asset.
- **Upload Contact List**: Create a campaign contact list from a CSV file.
- **Upload Suppression CSV**: Persistently add many phone numbers to the Do-Not-Call list from a CSV file.
- **Verify Caller ID**: Submit an ownership-verification code for an existing caller ID and return whether it became verified or remains pending.
