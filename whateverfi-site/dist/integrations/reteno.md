# Reteno

Reteno is a customer engagement platform for managing contacts, behavioral events, messaging campaigns, and omnichannel communications.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/reteno/.

## Actions

- **Get Account Balance** (read-only): Return monetary balance, credit limit, currency, and remaining prepaid email and SMS quotas for the connected Reteno account.
- **Get Account Info** (read-only): Return the Reteno organization and API user associated with the connected account.
- **Get Contact** (read-only): Return the full Reteno profile for one contact identified by its internal contact ID.
- **Get Contact Import Status** (read-only): Return the current state and resulting contact IDs for an asynchronous Reteno contact import started by Upsert Contacts.
- **List Address Books** (read-only): Return Reteno contact address books and their assigned field groups and fields.
- **List Contact Fields** (read-only): List custom contact fields, their field IDs and keys, data types, allowed values, and validation metadata.
- **List Contact Messages** (read-only): Return one page of a contact's email, SMS, push, web push, or App Inbox message history for a required date range.
- **List Contacts** (read-only): List one bounded page of Reteno contacts.
- **List Segments** (read-only): Search Reteno contact segments by name and return one bounded page with segment IDs and types.
- **List Subscription Categories** (read-only): List the organization's contact subscription categories and the keys used to manage communication preferences.
- **List Workflows** (read-only): Search Reteno automation workflows by name and return their IDs, status, and tags.
- **Track Event**: Send one non-retractable backend event for an identified contact.
- **Upsert Contact**: Create or update a Reteno contact in real time and return its Reteno contact ID.
- **Upsert Contacts**: Create or update 1-3000 Reteno contacts asynchronously using one explicit deduplication strategy.
