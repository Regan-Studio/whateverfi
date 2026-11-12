# MotherDuck MCP

Explore MotherDuck database schemas, query data, and manage Dives, Flights, and Guides through MotherDuck’s official hosted MCP server. Includes SQL writes, scheduled Python jobs, sharing, and deletion tools.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/motherduck-mcp/.

## Actions

- **Ask docs question** (read-only): Ask a question about DuckDB or MotherDuck.
- **Cancel flight run**: Cancel an in-flight run of a flight.
- **Create flight**: Create a new MotherDuck flight.
- **Create guide**: Create a new guide — a markdown document that agents read to answer this org's data questions correctly (metric definitions, join/filter…
- **Delete dive**: Delete a dive by ID.
- **Delete flight**: Permanently delete a flight, its versions, schedule, and run history.
- **Delete guide**: Soft-delete a guide while preserving its version history.
- **Dive query** (read-only): Execute a read-only DuckDB query on behalf of a dive.
- **Edit dive content**: Edit a dive's content by applying one or more text replacements, then save to MotherDuck.
- **Edit flight source**: Edit a flight's source_code by applying one or more text replacements, then save as a new FlightVersion.
- **Edit guide content**: Edit a guide's markdown body by applying one or more text replacements, then save as a new version.
- **Get dive guide** (read-only): Load instructions for creating MotherDuck dives.
- **Get flight** (read-only): Fetch a flight by UUID.
- **Get flight guide** (read-only): Load instructions for authoring, scheduling, running, and troubleshooting MotherDuck flights.
- **Get flight logs** (read-only): Fetch the plain-text logs (stdout + stderr) of a flight run plus the matching Run record (status, exit_code, timing).
- **Get flight run** (read-only): Fetch a single run of a flight by its sequential run number (from list_flight_runs).
- **Get guide** (read-only): Load a guide by uuid.
- **Get query guide** (read-only): Call this before writing SQL to answer a data question.
- **Get short lived token**: Returns a short-lived token and connection details for the MotherDuck database endpoint.
- **List columns** (read-only): List all columns of a table or view with their types and comments.
- **List databases** (read-only): List all databases in your MotherDuck account.
- **List dives** (read-only): List all dives in MotherDuck.
- **List flight runs** (read-only): List executions of a flight, newest first.
- **List flight versions** (read-only): List the immutable versions of a flight, newest first.
- **List flights** (read-only): List MotherDuck flights.
- **List guides** (read-only): Browse this organization's curated guides — markdown documents that capture organization and personal context about the data in MotherDuck.
- **List macros** (read-only): List all macros (table and scalar macros) in a MotherDuck database, with their schema and parameters.
- **List shares** (read-only): List all database shares that have been shared with you.
- **List tables** (read-only): List all tables and views in a MotherDuck database with comments.
- **List views** (read-only): List all views in a MotherDuck database, with their schema, comment, and column count.
- **Log dive viewer event**: Log a dive viewer event for analytics.
- **Mint dive state reference**: Mint a server-stored reference for a useDiveState bag and return its id.
- **Query** (read-only): Before writing SQL to answer a data question, call get_query_guide first — it returns this organization's query guidance and an overview…
- **Query rw**: Execute a DuckDB SQL query that modifies data, schema, or connection state.
- **Read dive** (read-only): Read a specific dive by ID, including its full JSX/React component code.
- **Run flight**: Trigger an on-demand execution of a flight using its current version.
- **Save dive**: Save a new dive to MotherDuck.
- **Search catalog** (read-only): Search the catalog for databases, schemas, tables, columns, and shares using fuzzy matching.
- **Set guide access**: Set a guide's visibility to 'user' (private to the owner) or 'organization' (visible to the whole org).
- **Share dive data**: Share the data for a dive with your organization.
- **Update dive**: Update an existing dive's title, description, or content.
- **Update flight**: Update a flight.
- **Update guide**: Append a new version to an existing guide, identified by uuid.
- **Update guide metadata**: Change a guide's title, description, or topic without appending a content version.
- **View dive** (read-only): Open and render a MotherDuck Dive as a live MCP app with interactive charts.
