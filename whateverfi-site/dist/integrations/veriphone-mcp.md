# Veriphone MCP

Validate and format phone numbers, inspect carriers and coverage, and read account credits through Veriphone’s official hosted MCP server.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/veriphone-mcp/.

## Actions

- **Current coverage** (read-only): Which countries support mode "current" (the carrier currently serving a number, after porting).
- **Example number** (read-only): A syntactically valid example phone number for a country and line type (MOBILE, FIXED_LINE, TOLL_FREE, VOIP…), useful for testing formats.
- **Get credits** (read-only): The account's plan, monthly limit, credits used this period, pay-as-you-go balance, and usage split by static/current mode.
- **Verify phone** (read-only): Validate one phone number and return its line type (mobile, fixed_line, voip, toll_free…), carrier, country, region, and formats (E.164,…
- **Verify phones** (read-only): Validate up to 50 phone numbers in one call (same fields as verify_phone, one result per input, in order).
