# TemplateFox

TemplateFox generates PDFs and images from templates, manipulates PDFs, manages template versions and S3 storage, and supports AI-assisted template authoring.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/templatefox/.

## Actions

- **Create Image**: Generate a PNG, JPEG, or WebP image from a TemplateFox image template and return a temporary URL or configured S3 location.
- **Create PDF**: Generate a PDF synchronously from a TemplateFox template and return a temporary URL or configured S3 location.
- **Create PDF Asynchronously**: Queue PDF generation and return a job ID for polling.
- **Create Template Version**: Create an immutable snapshot of an existing TemplateFox template with a unique lowercase tag.
- **Create Template With Agent**: Queue TemplateFox's authoring agent to create an image template from natural-language instructions.
- **Delete S3 Configuration**: Permanently remove the connected account's saved S3-compatible storage credentials.
- **Delete Template Version**: Permanently delete one immutable template version.
- **Extract PDF Pages**: Extract, reorder, or split selected pages from one PDF and return a temporary result URL.
- **Get Account** (read-only): Get the connected TemplateFox account identity and remaining credit balance without consuming credits.
- **Get Agent Job** (read-only): Get an authoring-agent job's status, resulting template ID, preview, charged credits, or failure details.
- **Get PDF Job** (read-only): Get the status, result location, or failure details of an asynchronous PDF generation job.
- **Get S3 Configuration** (read-only): Get the connected account's S3-compatible storage configuration.
- **List Account Transactions** (read-only): List credit purchases, consumption, refunds, and bonuses one offset page at a time.
- **List PDF Jobs** (read-only): List asynchronous PDF generation jobs, optionally filtered by status, one offset page at a time.
- **List Template Fields** (read-only): List the dynamic variables a template accepts so an agent can construct valid generation data.
- **List Template Layers** (read-only): List addressable image-template layers and their modifiable properties for CREATE_IMAGE.
- **List Template Versions** (read-only): List immutable snapshots of a template, including version numbers and optional tags.
- **List Templates** (read-only): List PDF or image templates belonging to the connected TemplateFox team.
- **Merge PDFs**: Concatenate two or more PDFs in the supplied order and return a temporary result URL.
- **Revise Template With Agent**: Queue TemplateFox's authoring agent to revise an existing image template from feedback.
- **Rotate PDF**: Rotate all pages or selected pages in a PDF and return a temporary result URL.
- **Save and Test S3 Configuration**: Create or update the connected account's S3-compatible storage credentials, then test access to the configured bucket.
- **Update Template Version**: Change or clear the tag and/or description metadata of a template version.
- **Validate S3 Configuration**: Validate that TemplateFox can access and write a small test object to the configured S3-compatible bucket without changing the saved…
