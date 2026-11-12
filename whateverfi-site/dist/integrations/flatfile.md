# Flatfile

Flatfile is a data exchange platform for collecting, validating, transforming, and managing structured data across collaborative workflows.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/flatfile/.

## Actions

- **Delete Records**: Permanently delete one to 100 explicitly identified records from one Flatfile sheet.
- **Get Job** (read-only): Get detailed status, outcome, result, and diagnostic information for one Flatfile asynchronous job.
- **Get Sheet** (read-only): Get one sheet's field configuration and record counts before reading or writing records.
- **Get Space** (read-only): Get safe metadata for one Flatfile space without exposing transient access credentials or token-bearing guest links.
- **Insert Records**: Insert one or more rows into a Flatfile sheet using simple field-key to value objects.
- **List Environments** (read-only): List Flatfile environments visible to the connected environment secret key and return the IDs needed to find spaces.
- **List Files** (read-only): Discover import or export files and their processing status, optionally within a Flatfile space.
- **List Jobs** (read-only): Find asynchronous Flatfile jobs by environment, space, workbook, file, or parent job and inspect progress at a glance.
- **List Records** (read-only): Read one page of records from a Flatfile sheet, optionally filtering by validity, field, record ID, search value, or FFQL expression.
- **List Spaces** (read-only): Find Flatfile spaces by environment, text, namespace, archive state, or template status.
- **List Workbooks** (read-only): List workbooks, optionally within a space, with their nested sheets so an agent can continue to sheet and record tasks.
- **Update Records**: Update one or more existing Flatfile records by ID using simple field-key to value objects.
