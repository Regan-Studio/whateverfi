# Mapflow.ai

Mapflow.ai analyzes satellite and aerial imagery with AI, manages geospatial processing projects, and provides custom imagery and catalog workflows.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/mapflow/.

## Actions

- **Create Processing (Consumes Credits)**: CREDIT-CONSUMING.
- **Create Project**: Create a Mapflow project container for organizing imagery-analysis processings.
- **Download Processing Result** (read-only): Download a completed processing's vector result as a GeoJSON file, optionally restricted to one AOI.
- **Estimate Processing Cost** (read-only): Estimate the credit cost of a v2 processing without starting it or consuming credits.
- **Get Account Capabilities** (read-only): Return the connected Mapflow account's credit balance, processing and storage limits, available AI models and optional blocks, and imagery…
- **Get Processing** (read-only): Get detailed status, progress, cost, errors, source configuration, and result-layer metadata for one current v2 processing.
- **Get Storage Overview** (read-only): Return custom-imagery storage limits and usage together with the account's mosaics, so an agent can select existing uploaded imagery…
- **List Processings** (read-only): List current v2 processings.
- **List Projects** (read-only): List projects visible to the connected account, including personal and shared or team projects and the IDs needed to scope processing…
- **Search Imagery Catalog** (read-only): Search external imagery providers linked to the connected account for scenes or mosaics intersecting a GeoJSON AOI.
