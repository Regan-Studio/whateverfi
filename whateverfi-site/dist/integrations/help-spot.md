# HelpSpot

HelpSpot is a customer support platform for managing requests, staff workflows, time tracking, saved responses, reports, and help desk metadata.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/help-spot/.

## Actions

- **Create Request**: Create a staff-side support request with an initial customer-visible or internal note.
- **Get Current User** (read-only): Return the connected HelpSpot staff user's identity, defaults, and support capabilities without authentication tokens.
- **Get Request** (read-only): Return one support request with normalized history and optional time total.
- **List Filters** (read-only): List the connected staff user's saved and built-in queue filters, including symbolic selectors such as inbox and myq.
- **List Saved Responses** (read-only): List reusable response templates available to the connected staff user, either all templates or the user's ten most-used templates.
- **List Support Options** (read-only): List IDs and labels used to categorize, assign, route, or set the status of HelpSpot requests.
- **Run Filter** (read-only): Return one cursor-controlled page of request summaries from a saved or built-in HelpSpot queue filter.
- **Search Requests** (read-only): Search support requests by text, customer, state, assignment, or date and return one concise cursor-controlled page.
- **Set Request Subscription**: Subscribe or unsubscribe a staff user from updates to one support request.
- **Update Request**: Update request, customer, assignment, and state fields and optionally append one customer-visible or internal note.
