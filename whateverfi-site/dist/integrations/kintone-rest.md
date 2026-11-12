# Kintone REST

Manage Kintone records and app settings with delegated OAuth access through the Kintone REST API.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/kintone-rest/.

## Actions

- **Add Comment**: Add one comment to a Kintone record, optionally mentioning up to 10 users, groups, or organizations.
- **Add Form Fields**: Add typed fields to an app's pre-live form, including selections, lookups, related-record lists, groups, and nested tables.
- **Add Preview App**: Create a pre-live Kintone app and return its app ID and initial settings revision.
- **Create Record**: Create one record in a Kintone app from field-code values and return its record ID and revision.
- **Create Records**: Create one to 100 records atomically in one Kintone app and return their record IDs and revisions in input order.
- **Delete Comment**: Permanently delete one comment from a Kintone record.
- **Delete Form Fields**: Delete up to 100 fields from an app's pre-live form.
- **Delete Records**: Permanently delete one to 100 explicitly identified records from a Kintone app.
- **Deploy App Settings**: Atomically apply the complete pre-live settings of up to 300 Kintone apps to their live apps.
- **Discard App Settings Changes**: Permanently discard every pre-live settings change for up to 300 Kintone apps and restore each preview to its current live settings.
- **Download File** (read-only): Download an attachment up to 100 MB using the file key returned by a record read.
- **Get Action Settings** (read-only): Return deployed or unpublished record-copy action settings of an app, including destinations, mappings, availability, order, and revision.
- **Get App** (read-only): Gets general information of an App, including the name, description, related Space, creator and updater information.
- **Get App Deploy Status** (read-only): Get the deployment status of settings for up to 300 Kintone apps.
- **Get App Permissions** (read-only): Return deployed or unpublished app-level permissions and settings revision in priority order.
- **Get App Settings** (read-only): Return an app's deployed or unpublished name, description, title-field configuration, feature flags, theme, icon, and revision.
- **Get Customization** (read-only): Return deployed or unpublished desktop and mobile JavaScript and CSS customization files, scope, and revision for an app.
- **Get Field Permissions** (read-only): Return deployed or unpublished field permissions, including prioritized subjects and each field's access level.
- **Get Form** (read-only): Read a deployed or unpublished app form in Kintone's legacy property-array format.
- **Get Form Fields** (read-only): Return deployed or unpublished field codes, types, labels, and settings so an agent can construct valid record values and queries.
- **Get Form Layout** (read-only): Return deployed or unpublished field layout information for an app form, including rows, groups, tables, fields, and sizes.
- **Get General Notification Settings** (read-only): Get an app's deployed or unpublished general-notification recipients, event conditions, commenter option, and revision.
- **Get Graph Settings** (read-only): Return deployed or unpublished graph definitions with their chart, aggregation, grouping, sorting, periodic-report settings, and revision.
- **Get Per Record Notification Settings** (read-only): Get an app's deployed or unpublished conditional per-record notifications, recipients, subjects, and revision.
- **Get Process Management Settings** (read-only): Return deployed or unpublished process-management enablement, statuses, assignee rules, transitions, branch conditions, and revision.
- **Get Record** (read-only): Retrieve one record from a Kintone app by its record ID.
- **Get Record Permissions** (read-only): Return deployed or unpublished record permission rules, preserving each query filter and prioritized subject list.
- **Get Reminder Notification Settings** (read-only): Get an app's deployed or unpublished reminder timing, filters, recipients, timezone, and revision.
- **Get Views** (read-only): Return deployed or unpublished list, calendar, custom, and built-in view settings, including filters, sorting, displayed fields, and…
- **List Apps** (read-only): Find apps visible to the connected Kintone user by name, ID, code, or space and return one offset-controlled page of app metadata.
- **List Comments** (read-only): Retrieve one offset-controlled page of up to 10 comments from a Kintone record.
- **Search Records** (read-only): Search an app's records with a Kintone query and return one offset-controlled page.
- **Update Action Settings**: Replace the complete unpublished record-copy action map.
- **Update App Permissions**: Replace app-level permissions in priority order and deploy all pending app settings, not only permissions.
- **Update Assignees**: Replace the assignees of one Kintone record whose app uses Process Management.
- **Update Customization**: Update unpublished desktop and mobile JavaScript and CSS customization.
- **Update Field Permissions**: Replace field permissions and deploy all pending app settings, not only permissions.
- **Update Form Fields**: Update typed field settings in an app's pre-live form.
- **Update Form Layout**: Replace an app's complete pre-live form layout.
- **Update General Notification Settings**: Replace or selectively update an app's undeployed general-notification settings.
- **Update General Settings**: Update unpublished general app settings such as name, description, icon, theme, feature flags, title field, and number precision.
- **Update Graph Settings**: Replace the complete unpublished graph map.
- **Update Per Record Notification Settings**: Replace an app's undeployed per-record notification rules.
- **Update Preview App Permissions**: Replace the complete unpublished app-level permission list in priority order without deploying it.
- **Update Preview Field Permissions**: Replace the complete unpublished field permission list without deploying it.
- **Update Preview Record Permissions**: Replace the complete unpublished record permission rule list without deploying it.
- **Update Process Management Settings**: Update unpublished process-management settings.
- **Update Record**: Update selected fields of one Kintone record by record ID, optionally requiring an expected revision.
- **Update Record Permissions**: Replace record permission rules and deploy all pending app settings, not only permissions.
- **Update Records**: Update selected fields of one to 100 Kintone records atomically by record ID, optionally checking each revision.
- **Update Reminder Notification Settings**: Replace or selectively update an app's undeployed reminder rules and timezone.
- **Update Status**: Run one Process Management action to update a Kintone record's workflow status, optionally selecting the next assignee and checking the…
- **Update Statuses**: Run Process Management actions for one to 100 Kintone records in the same app, optionally selecting assignees and checking revisions.
- **Update Views**: Replace the complete unpublished list, calendar, and custom view map.
- **Upload File**: Upload one managed file to Kintone and return the temporary file key used to attach it to a record within three days.
