# Dynosend

Dynosend is an email marketing platform for managing audiences and contacts, operating campaigns, sending transactional messages, and tracking customer events.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/dynosend/.

## Actions

- **Add Email To Blacklist**: Permanently add an email address to the Dynosend blacklist.
- **Add Tags To Contact**: Append one or more tags to a contact without replacing its existing tags.
- **Check Blacklist** (read-only): Check whether an email address is on the connected Dynosend account's blacklist and return its timestamp and reason when available.
- **Create Contact**: Create a contact in an audience, optionally assigning tags and audience-defined custom fields.
- **Delete Contact**: Permanently delete one contact from an audience for GDPR/CCPA erasure.
- **Find Duplicate Contacts** (read-only): Find contacts that use the same email address across all audiences in the connected Dynosend account.
- **Get Audience** (read-only): Get one audience's configuration, custom-field definitions, contact information, and subscription statistics by audience UID.
- **Get Campaign** (read-only): Get one campaign's configuration and delivery, open, click, spam, bounce, and unsubscribe insights.
- **Get Contact** (read-only): Get one contact in an audience by contact UID or email address.
- **List Audiences** (read-only): List audiences available to the connected Dynosend account, including the UID needed by audience and contact tools.
- **List Campaigns** (read-only): List campaigns in the connected Dynosend account, including status and the campaign UID used by campaign tools.
- **List Contacts** (read-only): Return one page of contacts in a Dynosend audience, including contact UIDs, subscription status, tags, and audience-defined custom-field…
- **Record Contact Event**: Record an application event for a contact in an audience.
- **Send Transactional Message**: Send a configured Dynosend transactional message.
- **Set Campaign Delivery State**: Pause a sending campaign or resume a paused campaign by setting its delivery state to paused or sending.
- **Set Contact Subscription Status**: Set a contact's subscription status to subscribed or unsubscribed in an audience.
- **Start Campaign**: Start a ready broadcast campaign.
- **Update Contact**: Update a contact's email, replace its complete tag set, or set audience-defined custom fields.
