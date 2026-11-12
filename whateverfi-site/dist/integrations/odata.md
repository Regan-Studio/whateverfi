# OData

Connect to an HTTPS OData V2 service to discover metadata and work with its exposed entity sets.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/odata/.

## Actions

- **Create Entity**: Create one entity or a bounded tree of new related entities in exactly one OData V2 POST.
- **Delete Entity**: Permanently delete one metadata-keyed OData V2 entity only when metadata permits HTTP DELETE.
- **Get Entity** (read-only): Retrieve one metadata-declared OData V2 entity by its complete typed key and optionally project selected structural properties.
- **Get Entity Schema** (read-only): Return normalized CSDL keys, structural properties, navigation relationships, and effective restrictions for one exact entity set in the…
- **List Entities** (read-only): Validate the connected OData V2 service and list its metadata-declared entity sets, ordered keys, and effective query and write…
- **Query Entities** (read-only): Return exactly one bounded page from a metadata-declared OData V2 entity set using validated filtering, projection, and ordering.
- **Update Entity**: Partially update one metadata-declared OData V2 entity through POST method tunneling with MERGE semantics.
