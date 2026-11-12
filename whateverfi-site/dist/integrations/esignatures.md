# eSignatures

eSignatures is an electronic signature platform for creating templates, sending contracts, managing signers, and tracking signing workflows.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/esignatures/.

## Actions

- **Add Contract Signer**: Add a signer to an editable contract without automatically sending a signature request.
- **Add Contract Signers**: Add a non-empty list of signers to an editable contract by calling the provider's singular endpoint sequentially in request order.
- **Add Template Collaborator**: Create a name-only collaborator who can edit a template.
- **Create and Send Contract**: Create a contract from a template or from ad-hoc Markdown and immediately send signature requests to its signers.
- **Create Contract Draft**: Create a test or production contract draft from a template or from ad-hoc Markdown, without sending signature requests or otherwise…
- **Create Template**: Create a reusable Markdown contract template.
- **Delete Contract Signer**: Permanently remove a signer from an editable contract.
- **Delete Template**: Permanently delete a template.
- **Duplicate Template**: Duplicate a template with a new title plus optional placeholder replacements.
- **Get Contract** (read-only): Get one contract's current status, details, signers, signer field values, and temporary signed-PDF URL when available.
- **Get Contract Content** (read-only): Return the Markdown content of one contract.
- **Get Contract Placeholder Fields** (read-only): Return the current placeholder replacements for one contract.
- **Get Template** (read-only): Get one template's metadata, placeholder keys, and signer-field IDs.
- **Get Template Content** (read-only): Return the Markdown content of one template.
- **Invite Template Collaborator**: Invite a collaborator to edit a template.
- **List Template Collaborators** (read-only): Return all collaborators who can edit one template.
- **List Templates** (read-only): Return all templates available to the connected account.
- **Preview Contract Content Update** (read-only): Preview the prospective Markdown from exact find-and-replace edits without mutating the contract.
- **Preview Template Content Update** (read-only): Preview the prospective Markdown from exact find-and-replace edits without mutating the template.
- **Remove Template Collaborator**: Remove a collaborator's permission to edit a template.
- **Resend Sign Request**: Resend a signature request to one signer.
- **Send Draft Contract**: Send an existing draft to its signers.
- **Update Contract Content**: Apply exact Markdown find-and-replace edits to a contract.
- **Update Contract Placeholder Fields**: Update selected placeholder replacements on an unsigned contract.
- **Update Contract Signer**: Update selected contact, delivery, authentication, or redirect details for a signer without resending the contract.
- **Update Template**: Update a template's title and/or labels without changing its Markdown content.
- **Update Template Content**: Apply exact Markdown find-and-replace edits to a template.
- **Withdraw Contract**: Irreversibly withdraw an active unsigned contract so it can no longer be signed.
