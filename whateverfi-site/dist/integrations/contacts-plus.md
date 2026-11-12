# Contacts+

Contacts+ provides OAuth-secured access to personal account, contact, and tag data.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/contacts-plus/.

## Actions

- **Create Contact**: Create a personal contact with structured profile data in the connected Contacts+ address book.
- **Create Tag**: Create a personal Contacts+ tag, or return the existing tag when that name already exists.
- **Delete Contact**: Delete one personal contact using its current etag for concurrency protection.
- **Delete Tag**: Delete one personal tag using its current canonical etag.
- **Get Account** (read-only): Return profile details for the authenticated Contacts+ personal account.
- **Get Contacts** (read-only): Fetch current full records for one or more personal contacts by ID, including etags needed for safe updates and deletes.
- **Get Tags** (read-only): Fetch current records for one or more personal tags by ID, including canonical etags needed for safe updates and deletes.
- **List Contacts** (read-only): Return one cursor-controlled page of personal contacts from the connected Contacts+ address book.
- **List Tags** (read-only): Return one cursor-controlled page of personal Contacts+ tags.
- **Search Contacts** (read-only): Search personal contacts by full text or Contacts+ advanced query syntax, optionally restricted to tag IDs.
- **Update Contact**: Replace the desired data for a personal contact using its current etag and strict optimistic concurrency by default.
- **Update Contact Tags**: Add and/or remove personal tags across one or more personal contacts in a single operation.
- **Update Tag**: Rename a personal tag using its current canonical etag from GET_TAGS.
