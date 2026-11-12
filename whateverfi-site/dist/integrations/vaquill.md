# Vaquill

Vaquill provides API access to US statutes, legal research, citation resolution, credit usage, and board-change watches.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/vaquill/.

## Actions

- **Browse Statute Divisions** (read-only): Browse one level of a statutory hierarchy at a time.
- **Compare Statute Cross State** (read-only): Find the top analogous statutory provisions in other states for one state statute section.
- **Count Statute Sections** (read-only): Count exact sections in a legal corpus scope before enumeration.
- **Create Board Watch**: Create an active email, webhook, or dual-channel watch that immediately begins monitoring a legal corpus source and may send future…
- **Delete Board Watch**: Permanently delete a board watch and all of its delivery history.
- **Get Adjacent Statute Sections** (read-only): Get the immediately adjacent sections before and after a statute section in statutory order.
- **Get API Credit Pricing** (read-only): Get Vaquill's live credit conversion, purchase bounds, and per-operation prices without authentication or credit consumption.
- **Get Board Watch Change Diff** (read-only): Get complete old and new section text for one exact observed watch change.
- **Get Credit Balance** (read-only): Get the connected Vaquill account's spendable credits, USD balance, expiries, plan, lifetime usage, and applied request limits.
- **Get Session Law** (read-only): Get complete metadata for one US state session law by provider ID or citation.
- **Get Session Law Body** (read-only): Get one page of a US state session law's text, with character offsets, text hash, and amendatory-markup metadata.
- **Get Session Laws Batch** (read-only): Get up to 50 distinct US state session laws by provider ID or citation.
- **Get Statute Body** (read-only): Get full statute text in a selected format, optionally with a subsection tree or point-in-time reconstruction.
- **Get Statute Cited By** (read-only): Find the top USC and CFR sections that cite a statute section.
- **Get Statute Definitions** (read-only): Get chapter definitions governing a statute section.
- **Get Statute Enactments** (read-only): Get state session laws whose publisher affected-sections tables print this exact code section.
- **Get Statute Section** (read-only): Get metadata and source links for one US statute section by canonical section ID or resolvable citation.
- **Get Statute Sections Batch** (read-only): Get metadata for up to 50 statute sections in input order, with optional full text.
- **Get Statutes Coverage** (read-only): Return Vaquill's authoritative live jurisdiction and corpus coverage matrix before choosing statute search filters.
- **List Board Watch Changes** (read-only): List sections observed as added, amended, or removed on a watched source.
- **List Board Watch Deliveries** (read-only): List the newest persisted webhook delivery attempts and current delivery health for a board watch.
- **List Board Watches** (read-only): List board watches owned by the connected Vaquill API-key account, including delivery destination, active state, and latest health metadata.
- **List Session Law Changes** (read-only): List one oldest-first page of changes to Vaquill's state session-law registry for incremental synchronization.
- **List Session Laws** (read-only): List one page of a state's session laws with session, date, text-availability, and instrument filters.
- **List Statute Changes** (read-only): List capture-bounded observed change history for a statute section.
- **List Watchable Boards** (read-only): List corpus sources that can be watched, including freshness, polling cadence, retrieval health, and supported scope filters.
- **Resolve Statute Citation** (read-only): Resolve one Bluebook citation to an exact statute section.
- **Resolve Statute Citations Batch** (read-only): Resolve up to 50 unique Bluebook citations in one call from a raw list of up to 500 entries.
- **Search US Statutes** (read-only): Search US statutes and regulations, constitutions and court rules, executive actions and Federal Register materials, agency guidance and…
- **Test Board Watch**: Send one synthetic delivery through a board watch's configured channel immediately.
- **Update Board Watch**: Partially update a Vaquill board watch without changing its delivery channel.
