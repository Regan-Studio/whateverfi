# urlscan.io

Submit and retrieve website scans, search urlscan.io data, and manage urlscan Pro resources for threat intelligence and security investigations.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/urlscanio/.

## Actions

- **Close Incident**: Stop ongoing scans for an active urlscan Pro incident and transition it to the closed state.
- **Copy Incident**: Create a separate urlscan Pro incident from an existing incident's configuration.
- **Create Alert Subscription**: Create a persistent scheduled or live alert subscription for saved searches.
- **Create Incident**: Create a Pro incident that persistently monitors an observable.
- **Create Live Scan Task**: Start a non-blocking temporary Live Scan on a selected scanner and return its UUID immediately without waiting for completion.
- **Create Notification Channel**: Create a Pro notification channel.
- **Create Saved Search**: Create a reusable scans or hostnames search definition.
- **Delete Alert Subscription**: Permanently delete an alert subscription by ID.
- **Delete Saved Search**: Permanently delete a saved search by ID.
- **Delete Scan Result**: Permanently delete a scan owned by the connected user or team.
- **Download Captured File** (read-only): Retrieve a captured binary file by its SHA-256 hash as a password-encrypted ZIP archive.
- **Fork Incident**: Create a new Pro incident by copying an existing incident's configuration and complete stored state history.
- **Get Account Capabilities** (read-only): Get non-sensitive plan, product, feature, visibility, submission, and limit information for the connected urlscan.io API key.
- **Get API Quotas** (read-only): Get current products, features, query capabilities, and per-action minute, hour, and day quota usage.
- **Get Available Brands** (read-only): List brand identifiers and metadata tracked by urlscan.io brand and phishing detection.
- **Get Available Scan Countries** (read-only): List scanner country codes currently accepted by the Scan API.
- **Get Brand Summary** (read-only): Return detectable brands with detected-page totals and latest hits.
- **Get Captured Response Content** (read-only): Return textual content captured in a scan response, addressed by its SHA-256 hash.
- **Get Data Dump Download Link** (read-only): Generate a temporary download URL for a path returned by LIST_DATA_DUMPS.
- **Get Hostname History** (read-only): Return one page of historical Pro Hostnames observations for a hostname.
- **Get Incident** (read-only): Get one incident's configuration, source, runtime state, and timestamps.
- **Get Incident States** (read-only): Retrieve the stored state history for an incident.
- **Get Live Scan Resource** (read-only): Retrieve one temporary result, DOM, screenshot, captured response, or download from the separate urlscan.io Live Scanning product.
- **Get Notification Channel** (read-only): Get one urlscan Pro notification channel by ID while preserving provider-specific metadata and removing webhook destinations or credentials.
- **Get Saved Search Results** (read-only): Run a urlscan Pro saved search and return its current Search API results.
- **Get Scan DOM** (read-only): Return the plain-text DOM snapshot captured for a completed scan.
- **Get Scan Result** (read-only): Retrieve the complete metadata and captured request data for a completed scan UUID.
- **Get Scan Screenshot** (read-only): Retrieve a completed urlscan.io scan screenshot as a downloadable PNG file reference.
- **Get Scan User Agents** (read-only): List grouped browser user-agent strings available for scan submission.
- **Get Similar Scan Results** (read-only): Find one page of scan results structurally similar to a specified scan.
- **Get Subscription Results** (read-only): Resolve a urlscan Pro alert subscription and datasource to its current Search API results.
- **Get Watchable Incident Attributes** (read-only): List attribute values accepted when configuring incident change monitoring.
- **List Alert Subscriptions** (read-only): List alert subscriptions configured for the current user.
- **List Data Dumps** (read-only): List available urlscan.io data-dump files for a time window, file type, and date.
- **List Live Scanners** (read-only): List Live Scanning nodes available to the connected account and their current metadata.
- **List Notification Channels** (read-only): List email and webhook notification channels for the current user without returning webhook URLs or embedded credentials.
- **List Saved Searches** (read-only): List saved searches owned by or shared with the current user.
- **Lookup Malicious Observable** (read-only): Look up malicious-scan occurrence counts and first/last seen timestamps for an IP, hostname, domain, or exact URL.
- **Purge Live Scan Result**: Permanently delete a temporary result from the separate urlscan.io Live Scanning product before its normal expiration.
- **Reset Scan Visibility**: Remove an owned scan's visibility override and restore the visibility originally assigned at submission.
- **Restart Incident**: Restart a closed urlscan Pro incident and extend its expiry.
- **Run Blocking Live Scan**: Run a temporary Live Scan synchronously and return only after the provider finishes the scan.
- **Search Scans** (read-only): Search urlscan.io data with Elasticsearch Query String syntax and return one controllable page of results.
- **Store Live Scan Result**: Permanently store an existing temporary Live Scan result with the selected visibility.
- **Submit Scan**: Submit a URL for asynchronous external scanning, creating persistent result state and consuming quota.
- **Update Alert Subscription**: Replace the complete configuration of an existing alert subscription.
- **Update Incident**: Replace an existing incident's monitoring configuration and runtime options.
- **Update Notification Channel**: Replace the complete configuration of an existing Pro notification channel.
- **Update Saved Search**: Replace the complete definition and metadata of an existing saved search.
- **Update Scan Visibility**: Change the visibility of a scan owned by the connected user or team.
