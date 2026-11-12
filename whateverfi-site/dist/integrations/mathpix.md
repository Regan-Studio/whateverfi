# Mathpix

Mathpix extracts text, mathematics, tables, and other structured content from images and documents and converts results into editable formats.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/mathpix/.

## Actions

- **Convert Mathpix Markdown**: Submit Mathpix Markdown, wait for one requested format to finish, then return the conversion ID and downloadable output file.
- **Create App Token**: Mint a short-lived client OCR credential, optionally with a live ink strokes session.
- **Delete Conversion**: Permanently delete one Mathpix Markdown conversion's hosted output data after explicit confirmation.
- **Delete Document**: Permanently delete one Mathpix document source and its hosted outputs after explicit confirmation.
- **Delete File**: Permanently delete one terminal Files API file and its Mathpix-hosted results.
- **Finalize File Job**: Permanently close one Files API job to new file additions and arm its completion webhook.
- **Get App Token** (read-only): Get expiry and ownership metadata for a specific short-lived Mathpix app token.
- **Get Conversion Result** (read-only): Wait for an existing Mathpix Markdown conversion and requested format to finish, then return its status and downloadable output file…
- **Get Document Result** (read-only): Wait for an existing Mathpix document job and requested format to finish, then return its status and downloadable output file without…
- **Get File Job** (read-only): Get aggregate status, file and page counters, and timestamps for one Files API job.
- **Get File Result** (read-only): Wait for an existing Files API file and selected format to finish, then return its status and downloadable output without creating a file.
- **Get Job File by Custom ID** (read-only): Get the complete Files API processing status for one job member using the exact caller-defined custom ID assigned at submission.
- **Get OCR Usage** (read-only): Return one page of aggregated Mathpix OCR usage for a date range, optionally grouped by usage type, request configuration, or application.
- **Get Storage Onboarding Identities**: Get the Mathpix AWS, Azure, and GCP identities needed to grant cloud-storage access.
- **List Conversions** (read-only): List one page of retained Mathpix Markdown conversion records, optionally filtered by date, and return IDs usable by conversion result or…
- **List Data Sources** (read-only): List cloud-storage data sources registered with Mathpix, returning only allowlisted non-secret metadata.
- **List Documents** (read-only): List retained document OCR jobs for the connected account, optionally filtered by date or document ID, and return one page.
- **List File Job Files** (read-only): List one cursor-paginated page of files in a Mathpix Files API job, optionally filtered by terminal status.
- **List File Jobs** (read-only): List one cursor-paginated page of Files API jobs newest first, optionally bounded by inclusive UTC dates.
- **OCR Document**: Submit a PDF, office document, or ebook URL, wait for OCR and the requested conversion to finish, then return its Mathpix job ID and…
- **OCR Image**: Extract text, math, tables, diagrams, or chemistry from one image URL or base64 data URI and return the requested OCR representations.
- **Process File URI**: Submit one public or registered-cloud document URI to the paid Files API, wait for OCR and one requested output, and return the retained…
- **Process Image Batch**: Submit a paid asynchronous batch of 1-100 named public image URLs, wait until every key has a semantically successful OCR result, and…
- **Recognize Strokes**: Recognize handwritten math or text from aligned x/y digital-ink stroke arrays and return OCR representations.
- **Revoke App Token**: Irreversibly revoke one short-lived app token immediately.
- **Search OCR Results** (read-only): Search retained image and stroke OCR history by date, identifiers, content, tags, or detected content and return one page of results.
- **Submit File Job**: Submit 1 to 200,000 remote documents as one paid asynchronous Mathpix Files job.
- **Upload and Process File**: Upload one local document to the paid Mathpix Files API, wait until OCR and one requested output are ready, then return the retained…
