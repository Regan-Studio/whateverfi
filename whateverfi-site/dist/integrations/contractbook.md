# Contractbook

Contractbook is a contract lifecycle management platform for creating, organizing, sharing, sending, and signing contracts.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/contractbook/.

## Actions

- **Create Document From Template**: Create a draft document from a Contractbook template, optionally overriding its document fields.
- **Get Document** (read-only): Get the full current Contractbook document, including the version required for a safe update.
- **Get Document PDF Link** (read-only): Get a short-lived PDF download URL for a document, or a not-ready message when Contractbook is still generating it.
- **Get Template** (read-only): Get a template's full fields, parties, attachments, and signing configuration before creating a draft from it.
- **List Automations** (read-only): List Contractbook automations for one trigger type.
- **List Documents** (read-only): Search and filter documents visible to the connected Contractbook account, returning one page and a cursor for continuation.
- **List Templates** (read-only): List all Contractbook templates visible to the connected account for choosing a template ID.
- **Permanently Delete Document**: Permanently destroy a Contractbook document with no restore option.
- **Update Document**: Update selected fields of a draft or stored contract using its current version.
