# Botster

Botster automates web data collection through configurable bots, job lifecycle management, and structured run results.

Category: Other. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/botster/.

## Actions

- **Calculate Bot Cost** (read-only): Calculate the credit price of one intended bot launch using the same input and bot-specific options, without launching the bot or spending…
- **Delete Job**: Permanently delete one Botster job.
- **Delete Run**: Permanently delete one Botster data run and its stored results without deleting the entire job.
- **Get Credit Balance** (read-only): Return the connected Botster account's available credit balance.
- **Get Job** (read-only): Get one job's status and data-run identifiers required to retrieve run results.
- **Get Run Results** (read-only): Return the complete bot-specific JSON for one data run identified from GET_JOB in the results field.
- **Launch Bot**: Launch a Botster bot, creating external work that may spend account credits.
- **List Bots** (read-only): List or search bots available to the connected account and return their identifiers for cost calculation and launch.
- **List Jobs** (read-only): List jobs belonging to the connected Botster account and return job identifiers for inspection or lifecycle actions.
- **Restart Job**: Restart an existing Botster job, creating renewed external work that may repeat the bot's effects and spend additional account credits.
- **Set Job Archived**: Archive a Botster job or restore it from the archive by setting its desired archived state.
