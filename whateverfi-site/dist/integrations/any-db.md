# AnyDB

AnyDB is a flexible collaborative database platform for organizing records, files, sharing, and automated workflows.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/any-db/.

## Actions

- **Copy Record**: Duplicate an AnyDB record and its child-record subtree, optionally into another database or parent.
- **Create Record**: Create a record in an AnyDB database, optionally attaching it to a parent and setting cell content.
- **Delete Record Permanently**: Permanently delete one AnyDB record.
- **Get Record** (read-only): Fetch one AnyDB record by ID, including its metadata and cell content.
- **List Databases** (read-only): List databases in an AnyDB team and return root and recycle-bin IDs used by record workflows.
- **List Records** (read-only): Return one page of record summaries from a database, optionally constrained by parent or template.
- **List Teams** (read-only): List AnyDB teams available to the connected account, including the IDs needed to discover databases.
- **Search Records** (read-only): Search a database for records matching a keyword, with caller-controlled offset and limit.
- **Update Record**: Update an AnyDB record's name, lock state, parent, user/group assignees, or cell content.
