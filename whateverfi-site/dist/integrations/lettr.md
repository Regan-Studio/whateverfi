# Lettr

Lettr is an email and messaging platform for transactional delivery, templates, audiences, campaigns, domains, and webhooks.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/lettr/.

## Actions

- **Attach Contacts to Lists**: Attach every combination of 1-1000 contacts and 1-50 audience lists, processing up to 50,000 contact-list pairs and reporting new and…
- **Bulk Create Audience Contacts**: Create or recognize up to 1000 normalized, deduplicated contacts.
- **Cancel Scheduled Email**: Cancel a scheduled email before its delivery time.
- **Create Audience Contact**: Create one audience contact with optional properties and list membership.
- **Create Audience Contact With Double Opt-In**: Create an unverified audience contact and irreversibly send an external confirmation email.
- **Create Audience List**: Create a uniquely named audience list for grouping contacts.
- **Create Audience Property**: Define a custom contact property with an immutable name and value type.
- **Create Audience Segment**: Create a dynamic audience segment whose condition groups are ANDed while conditions inside each group are ORed.
- **Create Audience Topic**: Create a public or private subscription topic with an immutable opt-in or opt-out default.
- **Create Domain**: Register a sending domain and return the DNS configuration needed to verify it.
- **Create Template**: Create and publish an email template from either custom HTML or Topol editor JSON, extracting its merge tags.
- **Create Webhook**: Create an active event webhook using no authentication, HTTP Basic credentials, or OAuth 2 client credentials.
- **Delete Audience Contact**: Permanently delete one audience contact and its associated memberships.
- **Delete Audience Lists**: Permanently delete between 1 and 50 audience lists in one request.
- **Delete Audience Property**: Permanently delete a custom contact-property definition.
- **Delete Audience Segment**: Permanently delete one dynamic audience segment.
- **Delete Audience Topic**: Permanently delete one audience subscription topic.
- **Delete Domain**: Permanently remove a sending domain from Lettr and SparkPost so it can no longer send email.
- **Delete Template**: Permanently delete an email template and all of its versions.
- **Delete Webhook**: Permanently remove a webhook so Lettr stops delivering events to it.
- **Detach Contacts from Lists**: Detach every combination of 1-1000 contacts and 1-50 audience lists, reporting removed and absent memberships.
- **Get Audience Contact** (read-only): Retrieve one contact's email, status, custom properties, list memberships, and topic subscriptions by ID.
- **Get Audience List** (read-only): Retrieve one audience list and its current contact count by ID.
- **Get Audience Property** (read-only): Retrieve one custom contact-property definition and its fallback value.
- **Get Audience Segment** (read-only): Retrieve one dynamic segment's list restriction, complete AND-of-OR condition definition, and cached contact count.
- **Get Audience Topic** (read-only): Retrieve one subscription topic's defaults, visibility, and current contact count.
- **Get Campaign** (read-only): Retrieve one campaign's name, subject, sender and reply-to configuration, schedule, rendered HTML, lifecycle state, recipient counts, and…
- **Get Domain** (read-only): Retrieve one sending domain's send readiness, DNS records, provider detection, and verification status.
- **Get Email** (read-only): Retrieve a sent email's delivery state, recipients, schedule metadata, and events by request ID.
- **Get Scheduled Email** (read-only): Retrieve a scheduled email's current state and events by transmission ID, including after it has been processed.
- **Get Template** (read-only): Retrieve an email template's metadata, active HTML or editor JSON content, and version counts by slug.
- **Get Template Merge Tags** (read-only): Return required and optional merge tags for a template's active or specified version before sending with substitution data.
- **Get Webhook** (read-only): Retrieve one webhook's target, enabled state, event selection, authentication mode, and latest delivery status.
- **List Audience Contacts** (read-only): Return one cursor-controlled page of contacts, optionally filtered by search text, status, list, or segment.
- **List Audience Lists** (read-only): Return one cursor-controlled page of audience lists with each list's contact count.
- **List Audience Properties** (read-only): Return one cursor-controlled page of custom contact-property definitions and fallback values.
- **List Audience Segments** (read-only): Return one cursor-controlled page of dynamic audience segments, including their complete AND-of-OR condition definitions, optionally…
- **List Audience Topics** (read-only): Return one cursor-controlled page of subscription topics with defaults, visibility, and contact counts.
- **List Campaign Events** (read-only): Return one cursor-controlled page of a campaign's delivery and engagement events, with event, recipient, and time filters.
- **List Campaigns** (read-only): Return one cursor-controlled page of campaigns with complete delivery and engagement statistics, optionally filtered by lifecycle status.
- **List Domains** (read-only): Return all sending domains with approval, DNS verification, and send-readiness status.
- **List Email Events** (read-only): Return one cursor-controlled page of delivery and engagement events across sent emails, with event, recipient, transmission, bounce, and…
- **List Projects** (read-only): Return one cursor-controlled page of Lettr projects and their IDs for use with template operations.
- **List Sent Emails** (read-only): Return one cursor-controlled page of sent emails, optionally filtered by recipient and date range.
- **List Templates** (read-only): Return one cursor-controlled page of email templates for a project or the team's default project.
- **List Webhooks** (read-only): Return all event webhooks with target, enabled state, event selection, authentication mode, and latest delivery status.
- **Publish Template Version**: Create and activate a new version of an existing email template from exactly one of HTML or Topol editor JSON, optionally renaming the…
- **Schedule Campaign**: Schedule a campaign for future delivery or reschedule it.
- **Schedule Email**: Create a transactional email scheduled 5 minutes to 3 days in the future.
- **Send Campaign**: Immediately and irreversibly start sending a sendable draft campaign to its resolved audience.
- **Send Email**: Immediately queue a transactional email to up to 50 recipients using inline content or a Lettr template.
- **Unschedule Campaign**: Cancel a scheduled campaign send and return the campaign to draft.
- **Update Audience Contact**: Change a contact's email, subscribed or unsubscribed status, or selected custom property values.
- **Update Audience List**: Rename an audience list while preserving its contacts.
- **Update Audience Property**: Set or clear a custom contact property's fallback value.
- **Update Audience Segment**: Change a dynamic segment's name, optional audience-list restriction, or complete AND-of-OR condition definition.
- **Update Audience Topic**: Change a subscription topic's name, description, or public/private visibility.
- **Update Template**: Rename an email template's metadata without publishing a new version.
- **Update Webhook**: Partially update a webhook's name, callback URL, authentication, selected events, or active state.
- **Verify Domain**: Run Lettr's DNS verification for a registered domain and return DKIM, CNAME, DMARC, SPF, and ownership results.
