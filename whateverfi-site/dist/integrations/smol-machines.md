# Smol Machines

Create and operate isolated Smol Cloud machines, run bounded commands, transfer files, and inspect account and usage information.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/smol-machines/.

## Actions

- **Create Machine**: Create one bounded Smol Cloud machine in the stopped state with explicit resources, a finite auto-stop interval and deletion TTL, and an…
- **Delete Machine**: Permanently delete one Smol Cloud machine by its exact machine ID.
- **Download File**: Download and offload one file from an exact cloud machine.
- **Execute Command**: Run one bounded foreground argv command on an exact hosted Smol Cloud machine.
- **Get Account** (read-only): Get the connected account's status, plan, effective machine limits, billing-period usage, and spend in integer micros.
- **Get Account Usage** (read-only): Get metered usage for the connected account's provider-defined period, keeping the requested and consumed metric windows distinct.
- **Get Machine** (read-only): Get configuration, lifecycle state, and readiness for one cloud machine by its exact machine id, not by name.
- **Get Machine Usage** (read-only): Get billing-period usage and cost in integer micros for one exact machine ID.
- **List Machines** (read-only): List cloud machines owned by the connected account, optionally requiring all supplied labels to match.
- **Start Machine**: Start one stopped cloud machine by exact machine ID.
- **Stop Machine**: Stop compute for one cloud machine by exact id while preserving its filesystem.
- **Upload File**: Upload a file of at most 8,000,000 bytes to a safe relative guest path on one cloud machine identified by its exact machine ID.
