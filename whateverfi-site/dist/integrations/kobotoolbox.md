# KoboToolbox

KoboToolbox is a data collection platform for building forms, managing survey projects, collecting submissions, and exporting humanitarian and research data.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/kobotoolbox/.

## Actions

- **Create Project**: Create a draft survey project, optionally by cloning an existing KoboToolbox asset.
- **Delete Export**: Delete one asynchronous export job from a KoboToolbox project.
- **Delete Project**: Permanently delete one KoboToolbox project by UID.
- **Deploy Project**: Deploy a draft KoboToolbox survey or redeploy its latest form version so it can accept and expose submissions.
- **Export Submissions**: Create an asynchronous KoboToolbox submission export and wait for it to complete, returning the export UID and result URL.
- **Get Project** (read-only): Retrieve a KoboToolbox project with its form content, settings, resource URLs, and deployment state.
- **Get Submission** (read-only): Retrieve one submission by integer ID, root UUID, or submission UUID from a KoboToolbox project.
- **List Assets** (read-only): Find projects and other visible assets in the connected KoboToolbox account, returning one page and a continuation cursor.
- **List Submissions** (read-only): Read one page of submissions for a deployed KoboToolbox project, with optional field selection, filtering, and sorting.
