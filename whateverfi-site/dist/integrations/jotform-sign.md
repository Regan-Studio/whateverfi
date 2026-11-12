# Jotform Sign

Access the supported Jotform forms, submissions, files, and webhooks API used around Jotform Sign workflows. Dedicated Sign document creation, sending, signer management, and completed-document download are not available through Jotform's public API.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/jotform-sign/.

## Actions

- **Create Submission**: Create an ordinary Jotform submission from simple question-ID answers.
- **Delete Form Webhook**: Delete one general Jotform form webhook registration by its object-key webhook ID and return the registrations that remain.
- **Delete Submission**: Delete one ordinary Jotform submission by ID.
- **Get Form Schema** (read-only): Inspect a form's metadata, properties, and question definitions so an agent can understand its fields.
- **Get Submission** (read-only): Return one ordinary Jotform submission by ID with its question-ID-keyed answers and workflow status when present.
- **List Form Files** (read-only): List uploaded-file metadata associated with a Jotform form.
- **List Form Webhooks** (read-only): List webhook registrations for one Jotform form as webhook IDs and callback URLs.
- **List Forms** (read-only): Return one page of forms visible to the connected Jotform account for ID discovery.
- **List Submissions** (read-only): Return one page of ordinary Jotform submissions across the account or for one form, including answer maps and workflow status when present.
- **Register Form Webhook**: Register an HTTPS callback URL to receive general Jotform form-submission notifications.
