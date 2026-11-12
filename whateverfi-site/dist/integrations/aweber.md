# AWeber

Use AWeber's complete stable v1 API to manage accounts, lists, subscribers, custom fields, purchases, broadcasts and schedules, campaigns, integrations, landing pages, web forms, and engagement analytics

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/aweber/.

## Actions

- **Add Subscriber**: Add one consented subscriber to an AWeber list.
- **Cancel Broadcast Schedule**: Cancel an AWeber broadcast's existing delivery schedule.
- **Create Broadcast Draft**: Create an API-managed AWeber broadcast draft for later review or editing.
- **Create Custom Field**: Create a named custom subscriber field on one AWeber mailing list.
- **Delete Broadcast Draft**: Permanently delete one unsent broadcast draft created through the AWeber API.
- **Delete Custom Field**: Permanently delete one custom field definition at the exact AWeber path identified by account_id, list_id, and custom_field_id.
- **Delete Subscriber**: Permanently delete one AWeber subscriber by current email or numeric ID.
- **Get Broadcast** (read-only): Return one specific AWeber broadcast by numeric ID, including its content, lifecycle status, targeting, tracking settings, and schedule or…
- **Get Subscriber** (read-only): Return one AWeber subscriber by numeric ID, including personally identifiable information (PII), subscription status, tags, custom fields,…
- **List Accounts** (read-only): List one page of AWeber customer accounts authorized by the connected OAuth account, or retrieve one account by account_id.
- **List Broadcast Engagement** (read-only): Return one page of sensitive subscriber-level opens or clicks for a sent broadcast.
- **List Broadcast Statistics** (read-only): List one page of aggregate, time-series, link-ranked, and subscriber-ranked statistics for a broadcast campaign message, or retrieve one…
- **List Broadcasts** (read-only): List one page of broadcasts for a mailing list by required lifecycle status, or set count_only=true to return only total_size.
- **List Custom Fields** (read-only): List one page of custom subscriber fields defined for an AWeber mailing list, or retrieve one field by custom_field_id.
- **List Integrations** (read-only): List one page of integrations connected to an AWeber account, or retrieve one integration by integration_id.
- **List Landing Pages** (read-only): List one page of landing-page summaries for an AWeber mailing list, or provide landing_page_id to retrieve one page including its…
- **List Legacy Campaign Messages** (read-only): List one page of AWeber's legacy campaign message resources, filter by broadcast/followup type, or retrieve one message by type and ID.
- **List Lists** (read-only): List one page of mailing lists for an AWeber account, optionally filtering by list name or unique list ID, or retrieve one mailing list by…
- **List Segments** (read-only): List audience segments for a mailing list, or retrieve one segment by segment_id, so valid broadcast targeting choices can be inspected.
- **List Subscriber Activity** (read-only): Retrieve one page of a subscriber's chronological activity, including subscription, verification, message delivery, open, click, and…
- **List Tags** (read-only): Get up to 500 tags used by subscribers on an AWeber mailing list, sorted by descending popularity.
- **List Web Form Split Test Components** (read-only): List one page of components in an AWeber web form split test, or retrieve one component when component_id is provided.
- **List Web Form Split Tests** (read-only): List one page of web form split tests across an account or for one mailing list, or retrieve one split test when list_id and split_test_id…
- **List Web Forms** (read-only): List one page of web forms across an account or for one mailing list, or retrieve one web form when list_id and webform_id are both…
- **Move Subscriber**: Move a currently subscribed person between two lists owned by the same AWeber account.
- **Record Subscriber Tracked Event**: Record one AWeber purchase/pageview tracked event and create the consented subscriber if absent or update the subscriber if present.
- **Schedule Broadcast**: Schedule an AWeber broadcast for audience email delivery at a future time.
- **Search Subscribers** (read-only): Search exact subscriber attributes across an account or within one AWeber mailing list, or return all subscribers in a list when no…
- **Update Broadcast Draft**: Safely update one or more fields on an API-created AWeber broadcast draft.
- **Update Custom Field**: Rename an AWeber custom subscriber field or change whether subscribers may update it.
- **Update Subscriber**: Update reversible profile fields for one AWeber subscriber selected by current email or numeric ID.
- **Update Subscriber Consent and Automation**: Change one AWeber subscriber's consent status, autoresponder position, or Campaign tags.
