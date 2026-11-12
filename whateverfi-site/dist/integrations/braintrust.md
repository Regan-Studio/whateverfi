# Braintrust

Braintrust is an AI engineering platform for managing prompts, datasets, experiments, evaluations, observability, and production AI applications.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/braintrust/.

## Actions

- **Create Dataset**: Create a named dataset under a Braintrust project, or return the existing dataset unchanged when its name already exists in that project.
- **Create Experiment**: Create an experiment under a Braintrust project.
- **Create Project**: Create a Braintrust project, or return the existing project unchanged when its name already exists.
- **Create Prompt**: Upsert a versioned prompt configuration under a Braintrust project without invoking it.
- **Delete Experiment, Dataset, or Prompt**: Delete one Braintrust experiment, dataset, or prompt by UUID for explicit lifecycle cleanup.
- **Delete Project**: Soft-delete a Braintrust project and return its deletion state.
- **Fetch Events** (read-only): Fetch one newest-to-oldest page of project log, experiment, or dataset events.
- **Get Braintrust Resource** (read-only): Get one project, experiment, dataset, prompt, or function by UUID.
- **Insert Dataset Events**: Upsert a batch of examples into an existing Braintrust dataset.
- **Insert Experiment Events**: Upsert a batch of result events into an existing Braintrust experiment.
- **List Braintrust Resources** (read-only): List and filter one page of projects, experiments, datasets, prompts, or functions visible to the connected Braintrust API key.
- **Query Braintrust Data** (read-only): Run one bounded synchronous read-only BTQL query over Braintrust project logs, an experiment, or a dataset.
- **Summarize Experiment or Dataset** (read-only): Return metadata and optional aggregate summaries for one Braintrust experiment or dataset.
- **Update Dataset**: Update the name, description, tags, or metadata of a Braintrust dataset.
- **Update Experiment**: Update selected metadata and linkage fields on a Braintrust experiment.
- **Update Project**: Update selected fields of a Braintrust project.
- **Update Prompt**: Update a Braintrust prompt's metadata or configuration without invoking it.
