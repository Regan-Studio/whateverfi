# redirect.pizza

Manage redirect.pizza redirects, domains, and team usage, and test redirects or generate QR codes.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/redirect-pizza/.

## Actions

- **Check Domain DNS**: Ask redirect.pizza to re-check DNS propagation for a domain and return its refreshed DNS and SSL state.
- **Create Redirect**: Create a new redirect from one or more source hostnames or URLs to a fixed destination URL using Free-safe redirect types.
- **Delete Redirect**: Permanently delete a redirect and its generated domain association by redirect ID.
- **Generate QR Code** (read-only): Generate a QR code for an HTTP or HTTPS URL as JSON-embedded PNG data or a downloadable PNG, SVG, or EPS file.
- **Get Domain** (read-only): Retrieve one domain's required DNS records, verification status, security settings, and SSL state.
- **Get Redirect** (read-only): Retrieve one redirect and its sources, destination, domains, options, and current pause state by redirect ID.
- **Get Team** (read-only): Return the connected token's team identity and hostname, hit, and user quota usage.
- **List Domains** (read-only): List domains created by redirects, including DNS requirements, verification, automatic-DNS availability, and SSL state.
- **List Redirects** (read-only): List redirects visible to the connected API token, including source, destination, state, and domain details.
- **Set Redirect Paused**: Pause or resume all source URLs belonging to one redirect.
- **Set Redirect Source Paused**: Pause or resume one source URL within a redirect without changing its other sources.
- **Test Redirect URL** (read-only): Test one HTTP redirect hop for a public URL and return status, redirect details, timing, errors, and the next URL to test if present.
- **Update Redirect**: Replace a redirect's configurable sources, fixed destination, redirect type, and options.
- **Upsert Redirect**: Create a redirect or update the uniquely matching redirect while retaining that redirect's existing sources.
