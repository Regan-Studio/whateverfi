# Semantic Scholar

Semantic Scholar is an AI-powered academic search engine that helps researchers discover and understand scientific literature

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/semanticscholar/.

## Actions

- **Details about a paper** (read-only): Examples.
- **Details about a paper s authors** (read-only): Retrieves the list of authors for a specific paper identified by its unique paper id in the semantic scholar database.
- **Details about a paper s citations** (read-only): Retrieves a list of citations for a specific academic paper using its unique semantic scholar paper id.
- **Details about a paper s references** (read-only): Retrieves the list of references cited by a specific paper in the semantic scholar database.
- **Details about an author** (read-only): Examples.
- **Details about an author s papers** (read-only): Retrieves a list of papers authored by a specific researcher identified by their unique semantic scholar author id.
- **Get details for multiple authors at once** (read-only): Retrieves detailed information for multiple authors from semantic scholar in a single api call.
- **Get details for multiple papers at once** (read-only): The semanticscholar paper batch endpoint allows users to retrieve data for multiple academic papers in a single api call.
- **Paper bulk search** (read-only): Behaves similarly to <code>/paper/search</code>, but is intended for bulk retrieval of basic paper data without search relevance.
- **Paper relevance search** (read-only): The searchpapers endpoint allows users to search for academic papers within the semantic scholar database.
- **Paper title search** (read-only): Behaves similarly to <code>/paper/search</code>, but is intended for retrieval of a single paper based on closest title match to given…
- **Search for authors by name** (read-only): The authorsearch endpoint allows users to search for authors within the semantic scholar database.
- **Suggest paper query completions** (read-only): To support interactive query-completion, return minimal information about papers matching a partial query example.
- **Text snippet search** (read-only): Return the text snippets that most closely match the query.
