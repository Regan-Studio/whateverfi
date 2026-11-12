# GLEIF API

GLEIF provides free public access to Legal Entity Identifier records, ownership relationships, identifier mappings, and related reference data.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/gleif/.

## Actions

- **Export LEI Records** (read-only): Download up to 5,000 LEI records using the complete closed field-filter and sort surface as CSV, XLSX, JSON, or XML.
- **Get Autocompletions** (read-only): Return prefix-based GLEIF search suggestions from the provider's data collection, defaulting absent top-level metadata and links to empty…
- **Get Fund or Branch Relationship** (read-only): Get the complete relationship record linking an LEI to its fund manager, umbrella fund, master fund, or head office.
- **Get Fuzzy Completions** (read-only): Find approximate GLEIF search matches for misspelled or incomplete input.
- **Get LEI Issuer for Record** (read-only): Get the complete LEI-issuer reference resource associated with a specified LEI record.
- **Get LEI Record** (read-only): Retrieve one LEI record with complete provider attributes, relationships, links, and Golden Copy metadata when its LEI is known.
- **Get Parent Information** (read-only): Get a direct or ultimate parent LEI plus complete relationship evidence, or the complete reporting exception when no parent is reported.
- **Get Reference Item** (read-only): Get one complete item from a selected GLEIF reference collection by its collection-specific identifier.
- **Get Related LEI Record** (read-only): Follow a selected associated-entity, managing-LOU, fund, or head-office link and return the complete related LEI record.
- **List Child Entities** (read-only): List one page of complete direct or ultimate accounting-child LEI records.
- **List Child Relationships** (read-only): List one page of complete direct or ultimate accounting-child relationship records for an LEI.
- **List Fund or Branch Entities** (read-only): List one page of complete managed-fund, sub-fund, feeder-fund, or international-branch LEI records.
- **List Fund or Branch Relationships** (read-only): List one page of complete fund-management, sub-fund, feeder-fund, or international-branch relationship records.
- **List LEI Field Modifications** (read-only): List one page of complete LEI, relationship, or reporting-exception field-history resources with optional type, XPath, and date filters.
- **List LEI ISINs** (read-only): Return one page of complete GLEIF-ANNA ISIN mappings for an issuer LEI.
- **List LEI Issuer Jurisdictions** (read-only): List one page of complete jurisdiction resources for which an LEI issuer is accredited.
- **List Reference Data** (read-only): List one complete JSON.
- **List Registration Agents** (read-only): List all GLEIF registration agents, optionally filtered by issuer LEI or registration-agent LEI.
- **List Successor Entities** (read-only): List one page of all successor LEI records for an entity.
- **Search LEI Records** (read-only): Search LEI records with closed, field-aware filters and sorting, returning one complete JSON.
