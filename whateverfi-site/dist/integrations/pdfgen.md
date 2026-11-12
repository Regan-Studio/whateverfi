# PDFgen

PDFgen creates PDFs from reusable templates, HTML, Markdown, or natural-language prompts and manages account templates and usage logs.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/pdfgen/.

## Actions

- **Create Template**: Create a reusable HTML template for later PDF generation.
- **Delete Template**: Permanently delete one saved template owned by the connected account.
- **Generate PDF**: Generate a PDF from exactly one saved template, HTML document, Markdown document, or AI prompt and return a temporary download URL.
- **Get Account** (read-only): Return the connected PDFgen account, organization, plan, and current credit usage.
- **Get Template** (read-only): Get one saved PDFgen template, including its complete HTML content.
- **List Templates** (read-only): List saved PDF templates owned by the connected account and return one page with a continuation cursor.
- **List Usage Logs** (read-only): List recent PDFgen API calls for auditing, billing inspection, and generation troubleshooting.
- **Update Template**: Partially update a saved template's name, HTML content, or rendering engine without replacing omitted fields.
