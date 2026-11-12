# RD Station Marketing

RD Station Marketing helps businesses manage contacts, conversion events, campaigns, automation workflows, analytics, and marketing assets.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/rd-station-marketing/.

## Actions

- **Add Contact Tags**: Add one or more tags to an existing RD Station contact without replacing the contact's current tags.
- **Create Catalog Feed**: Create the connected RD Station account's catalog feed.
- **Create Contact**: Create an RD Station contact without recording a conversion event.
- **Create Contact Field**: Create a custom contact field in the connected RD Station account.
- **Create Webhook Subscription**: Create an RD Station webhook subscription using its complete delivery definition.
- **Delete Catalog Feed**: Permanently delete an RD Station catalog feed by integer ID.
- **Delete Contact**: Permanently delete one contact identified by UUID, email address, or phone number.
- **Delete Contact Field**: Permanently delete a custom RD Station contact field by UUID and return a confirmation only after RD Station responds with HTTP 204.
- **Delete Webhook Subscription**: Permanently delete an RD Station webhook subscription by UUID and return a confirmation only after RD Station responds with HTTP 204.
- **Get Campaign** (read-only): Get one campaign created in RD Station Marketing's Campaign Manager.
- **Get Catalog Feed** (read-only): Get one RD Station catalog feed by integer ID without exposing stored credentials.
- **Get Contact** (read-only): Return one RD Station contact identified by UUID, email address, or phone number.
- **Get Contact Funnel** (read-only): Return the default funnel state for an RD Station contact identified by UUID, email address, or phone number.
- **Get Conversion Analytics** (read-only): Get visits, conversions, and conversion rates for RD Station landing pages, popups, and forms.
- **Get Email** (read-only): Get one RD Station marketing email by its numeric ID.
- **Get Email Analytics** (read-only): Get engagement and delivery statistics for RD Station email campaigns.
- **Get Funnel Analytics** (read-only): Get cumulative visitor, contact, opportunity, and sales counts for an RD Station sales funnel.
- **Get Webhook Subscription** (read-only): Get one RD Station webhook subscription by UUID.
- **Get Workflow** (read-only): Return one RD Station Marketing automation workflow and its actions by UUID.
- **Get Workflow Email Analytics** (read-only): Get engagement and delivery statistics for emails sent by RD Station automation workflows.
- **Insert Leads Into Workflow**: Enroll existing RD Station leads in an automation workflow.
- **List Campaign Items** (read-only): Return one page of items in an RD Station Marketing Campaign Manager campaign.
- **List Campaigns** (read-only): Return one page of campaigns from RD Station Marketing's Campaign Manager.
- **List Catalog Feeds** (read-only): List catalog feeds configured for the connected RD Station account.
- **List Contact Events** (read-only): Return one 10-event page of conversion or opportunity events associated with an RD Station contact UUID, ordered by creation time in the…
- **List Contact Fields** (read-only): Return the standard and custom contact fields configured for the connected RD Station account.
- **List Content Assets** (read-only): Return one page of emails, landing pages, popups, or embeddable forms from the connected RD Station account.
- **List Segmentation Contacts** (read-only): Return one page of contacts belonging to a selected segmentation and a cursor for the next page.
- **List Segmentations** (read-only): Return one page of RD Station contact segmentations and an opaque cursor for the next page.
- **List Webhook Subscriptions** (read-only): List RD Station webhook subscriptions created by this OAuth integration.
- **List Workflows** (read-only): Return one page of RD Station Marketing automation workflows and an opaque cursor for the next page.
- **Record Event**: Permanently record one current conversion, opportunity, interaction, media, or ecommerce event through RD Station's single-event endpoint.
- **Record Events**: Permanently record one or more current conversion, opportunity, interaction, media, or ecommerce events in RD Station.
- **Update Catalog Feed**: Replace the configurable fields of an RD Station catalog feed.
- **Update Contact Field**: Replace the mutable definition of a custom RD Station contact field.
- **Update Contact Funnel**: Update supplied fields in the default funnel for an RD Station contact identified by UUID, email address, or phone number.
- **Update Webhook Subscription**: Replace an RD Station webhook subscription using its complete delivery definition.
- **Upsert Contact**: Create or update a contact identified by UUID, email address, or phone number without recording a conversion event.
