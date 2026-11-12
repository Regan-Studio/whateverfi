# ConfigCat

ConfigCat is a feature flag management service for controlling feature rollouts, configurations, environments, and team access.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/configcat/.

## Actions

- **Create Flag or Setting**: Create a feature flag or typed setting in a Config.
- **Delete Flag or Setting**: Permanently delete one ConfigCat feature flag or setting by ID.
- **Get Environment Setting Value V2** (read-only): Get one Config V2 flag or setting's complete evaluation formula in an Environment, including its optimistic-concurrency version.
- **Get Product Context** (read-only): Return a ConfigCat Product's configs, environments, segments, and tags, including the identifiers and evaluation versions needed to manage…
- **List Account Hierarchy** (read-only): List accessible ConfigCat organizations and products so an agent can resolve the IDs needed by product-scoped tools.
- **List Environment Values V2** (read-only): Return every Config V2 feature flag and setting evaluation formula for one Config and Environment, preserving ordered targeting rules and…
- **List Flags and Settings** (read-only): List feature flags and settings in one Config, including IDs, keys, types, tags, and metadata needed by value operations.
- **Patch Environment Setting Value V2**: Update selected typed fields of one Config V2 evaluation formula while preserving every field the caller omits.
- **Replace Environment Setting Value V2**: Completely replace one Config V2 flag or setting evaluation formula in an Environment.
- **Update Flag Metadata**: Partially update a flag or setting's name, hint, or complete tag assignment without resetting untouched metadata.
