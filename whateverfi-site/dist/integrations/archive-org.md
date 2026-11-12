# Archive.org

Search and access Internet Archive content, inspect analytics, Wayback captures, IIIF images, and account tasks, and manage item files, metadata, derivation, and the connected user's reviews.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/archive-org/.

## Actions

- **Advanced Search Archive.org Items** (read-only): Search Archive.org metadata with exact Advanced Search page semantics.
- **Check Archive.org Upload Limit** (read-only): Check whether Archive.org's ingest queue is likely to accept an upload or delete, using only the connection's LOW Authorization header.
- **Check Identifier Availability** (read-only): Check whether an Archive.org item identifier is available before attempting to create an item.
- **Copy Item File**: Copy one Archive.org file server-side to a named path in an existing destination item.
- **Delete Item File**: Submit asynchronous deletion of one named file from an Archive.org item through IA-S3.
- **Delete My Archive.org Review**: Permanently delete the connected Archive.org user's public review from one item.
- **Derive Archive.org Item**: Queue Archive.org's fixed derive.php task for an item owned or editable by the connected account.
- **Download Item File** (read-only): Download one public file from an Archive.org item and return a temporary downloadable file reference.
- **Find Wayback Snapshots** (read-only): Find the closest archived Wayback Machine snapshot for each requested URL, using one before, after, or either direction for the batch.
- **Get Archive.org Task Log** (read-only): Download a plain-text log for a task visible to the connected account.
- **Get Connected Archive.org User** (read-only): Return the authenticated Archive.org user's identity and privileges without returning either IA-S3 credential.
- **Get Detailed Archive.org Views** (read-only): Get bounded geographic view analytics and, for items, top referrers over a recent window or date range.
- **Get IIIF Image Info** (read-only): Get normalized IIIF Image API capabilities through Archive.org's fixed-host single-image convenience route or a live-proven versioned file…
- **Get IIIF Manifest** (read-only): Get a compact IIIF Presentation manifest for an Archive.org item or one page of an Archive.org collection.
- **Get Item Metadata** (read-only): Get an Archive.org item's full record, including metadata, file inventory, public reviews, and catalog tasks, or return one selected…
- **Get Item View Counts** (read-only): Get all-time, last-30-day, and last-7-day view counts for one or more Archive.org item or collection identifiers from the current or…
- **Get Item View History** (read-only): Get a bounded daily view history for one Archive.org item or collection, split by robot classification.
- **Get My Review** (read-only): Get the connected Archive.org user's review for one item, if that user has reviewed it.
- **Get Task Rate Limits** (read-only): Report the connected account's current task capacity and in-flight counts for one Archive.org catalog command.
- **List Archive.org Tasks** (read-only): Return any documented combination of the connected account's task summary, active catalog, and resource-authorized history, one page at a…
- **List Wayback Captures** (read-only): Return one bounded structured CDX page of Wayback captures for a URL or host.
- **Render IIIF Image** (read-only): Render a bounded crop, resize, rotation, quality, and format from a fixed Archive.org IIIF image route.
- **Search Archive.org Items** (read-only): Search Archive.org item metadata with a Lucene-style query and return one deep-pagination page of matching items.
- **Update Item Metadata**: Apply JSON Patch changes to one Archive.org item owned or editable by the connected account, limited to ordinary item metadata and…
- **Upload Item File**: Create or replace one file through Archive.org IA-S3, explicitly choosing a new-item or existing-item upload.
- **Upsert My Archive.org Review**: Create or overwrite the connected Archive.org user's single public review for an eligible item.
