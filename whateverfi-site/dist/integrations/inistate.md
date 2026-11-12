# Inistate

Inistate is a workspace platform for building workflow and record-management applications, configuring modules, managing entries and activities, auditing changes, and handling files.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/inistate/.

## Actions

- **Bulk Change Entry States**: Request state transitions for 1-100 entries in one module.
- **Bulk Update Entries**: Update fields on 1-100 entries in one module.
- **Change Entry State**: Request a state transition for one module record.
- **Create Entry**: Create one record in a module through its create activity and return whether low confidence caused it to be flagged.
- **Get Activity Form** (read-only): Get the required fields, current values, options, defaults, and confidence threshold for a module activity before submitting it.
- **Get Entry** (read-only): Get one module record by ID, including its current values, state, audit metadata, and available activities.
- **Get Entry History** (read-only): Return one chronological 50-item page of a record's audit trail, comments, field changes, and AI traceability context.
- **Get Module Schema** (read-only): Get a module's fields and states, optionally including its activities and flows, before querying or changing records.
- **List Entries** (read-only): Return one page of records from a module using a saved listing, field filters, search, sorting, and field projection.
- **List Modules** (read-only): List modules available in a workspace so their exact names can be used in schema and record tools.
- **List Workspaces** (read-only): List workspaces accessible to the connected API key, optionally filtering by workspace name.
- **Update Entry**: Update fields on one existing module record through its edit activity and return whether low confidence caused it to be flagged.
