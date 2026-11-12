# Statsig

Statsig provides server-side feature gate evaluation, dynamic configuration, experimentation, and event measurement APIs.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/statsig/.

## Actions

- **Check Feature Gate** (read-only): Evaluate one Statsig feature gate with optional user context without logging an exposure.
- **Check Feature Gates** (read-only): Evaluate multiple Statsig feature gates with optional shared user context without logging exposures.
- **Get Dynamic Config** (read-only): Evaluate a Statsig dynamic config or experiment with optional user context and return its value and assignment metadata without logging an…
- **Get Layer** (read-only): Evaluate a Statsig layer with optional user context and return its parameter values and assignment metadata without logging an exposure.
- **Get Ranked Variants** (read-only): Rank variants for a Statsig contextual-bandit Autotune configuration using optional user context without logging an exposure.
- **Log Custom Exposures**: Permanently log one or more Statsig gate, experiment, or dynamic-config exposures when automatic exposure logging is not being used.
- **Log Events**: Permanently log one or more custom Statsig events for analytics and metric calculation in a single batch.
