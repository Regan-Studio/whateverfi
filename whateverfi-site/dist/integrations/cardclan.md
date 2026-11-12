# CardClan

CardClan helps teams personalize and send digital cards, generate card links, and manage card integration workflows.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/cardclan/.

## Actions

- **Create Integration Configuration**: Create a persistent CardClan integration configuration linking a card to its workspace.
- **Generate Personalized Card URL**: Generate a personalized CardClan viewing URL without sending an email.
- **Get Card Details** (read-only): Get a CardClan card's title, merge-tag requirements, and owning workspace details by card ID.
- **Get Integration Configuration** (read-only): Get a CardClan integration configuration by either integration ID or card ID.
- **List Cards** (read-only): List cards in a CardClan workspace, including card IDs needed for details, integration configuration, personalized links, and sending.
- **List Email Accounts** (read-only): List configured CardClan sender accounts that can be selected when sending a card.
- **List Workflow Cards** (read-only): List cards with active CardClan integration workflows and return their integration, card, and workspace IDs.
- **List Workspaces** (read-only): List CardClan workspaces accessible to the connected account, including the workspace IDs needed to find cards and create integration…
- **Send Card**: Immediately personalize and send a CardClan card by email to one or more recipients.
