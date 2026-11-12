# ActiveMerge

ActiveMerge automates document and image generation, document merging, e-signatures, file storage, and template-based workflows.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/active-merge/.

## Actions

- **Generate Document**: Start asynchronous document generation from a template and case-sensitive placeholder data.
- **Generate Images**: Start an asynchronous image-generation job from inline JSON records.
- **Generate Workflow Documents**: Generate documents for every template in an ActiveMerge workflow using case-sensitive placeholder data.
- **Get Credits** (read-only): Get total, used, remaining, plan, and prepaid ActiveMerge credits before running credit-consuming generation tools.
- **Get Document Generations** (read-only): Get one document-generation job by ID, or list and filter generation history when no job ID is supplied.
- **Get Document Template Placeholders** (read-only): Return the case-sensitive placeholder names required by one document template.
- **Get File Download URL** (read-only): Create a temporary download URL for a file in ActiveMerge cloud storage.
- **Get Image Generation** (read-only): Get an image-generation job's progress, credit usage, errors, and temporary ZIP download URL when complete.
- **Get Image Templates** (read-only): List image templates and basic placeholders, or get complete dimensions, positions, defaults, and styles for one template when template_id…
- **Get Workflows** (read-only): List available ActiveMerge workflows, or return the case-sensitive placeholders for one workflow when workflow_id is supplied.
- **List Document Templates** (read-only): List document templates available to the connected ActiveMerge account, including the unique template IDs needed for placeholder lookup…
- **List Stored Files** (read-only): List the immediate files and folders at the ActiveMerge cloud-storage root, or directly inside parent_folder_id when supplied.
- **Save Generated Files**: Save non-expired output from a completed document-generation job to permanent ActiveMerge cloud storage.
