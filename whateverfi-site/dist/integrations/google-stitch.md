# Google Stitch

Google Stitch is an AI interface-design service exposed through an MCP Streamable HTTP endpoint using JSON-RPC 2.0, with named tools for projects, screens, artifacts, and design systems.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/google-stitch/.

## Actions

- **Apply Design System**: Apply one design system to 1-20 unique typed screen instances from Get Project.
- **Create Design System**: Create a typed Stitch design system from explicit current theme fields.
- **Create Design System From Markdown**: Create a project design system from the exact screen instance returned by Upload Design Markdown.
- **Create Project**: Create a Stitch project container for UI designs and return its project resource name.
- **Delete Project**: Permanently delete one Google Stitch project.
- **Download Screen File** (read-only): Retrieve bounded HTML or screenshot content using a provider-owned Stitch file resource name.
- **Edit Screens**: Apply one text-directed edit to up to 20 existing Stitch screens and return every changed screen or clarification question.
- **Generate Screen**: Generate screens from a bounded text prompt in an existing Stitch project.
- **Generate Screen Variants**: Generate 1-5 variants for up to 20 unique source screens with exact creative-range, aspect, device, and model enums.
- **Get Project** (read-only): Get one Stitch project by full resource name, including screen instances needed for design-system application.
- **Get Screen** (read-only): Get one Stitch screen by full resource name and return bounded screen metadata plus provider-owned HTML and screenshot file references.
- **List Design Systems** (read-only): List complete Google Stitch design systems for one project.
- **List Projects** (read-only): List complete Google Stitch projects owned by the connected account or explicitly shared with it.
- **List Screens** (read-only): List all screens currently returned for one Stitch project, including safe HTML and screenshot file resource references.
- **Update Design System**: Replace a Stitch design system's display name and typed nondeprecated theme for one project.
- **Upload Design Markdown**: Upload bounded UTF-8 DESIGN.md content to a Stitch project and return the screen instance required by Create Design System From Markdown.
