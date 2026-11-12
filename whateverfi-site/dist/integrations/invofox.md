# Invofox

Invofox extracts structured data and OCR text from invoices and other business documents and supports document-processing workflows.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/invofox/.

## Actions

- **Create Company**: Create a managed company collection used to organize document processing.
- **Delete Company**: Permanently delete one managed company by ID.
- **Get Document** (read-only): Get one processed document with extracted fields, confidence, processing metadata, and signed source or image URLs.
- **Get Document Text** (read-only): Return plain OCR text for each page of a processed document.
- **Get Import** (read-only): Get an asynchronous import's status, document count, and file processing records after documents were queued.
- **List Companies** (read-only): Find managed companies by country, tax ID, or name using bounded offset pagination.
- **List Documents** (read-only): Find processed documents using extraction-field filters, sorting, field selection, and bounded offset pagination.
- **Process Documents by URL**: Queue one or more documents from public HTTPS URLs for asynchronous extraction.
- **Set Document State**: Move a document to pending correction, approved, discarded, or exported.
- **Update Document**: Correct extracted document fields, update client metadata, or do both for an existing processed document.
