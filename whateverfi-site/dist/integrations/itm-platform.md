# ITM Platform

ITM Platform provides modern project, portfolio, task, service, financial, risk, and resource management APIs plus read-only DataMart analytics.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/itm-platform/.

## Actions

- **Aggregate DataMart Components** (read-only): Run a bounded read-only DataMart aggregation over project and service records for portfolio analytics.
- **Create Project**: Create an ITM Platform project with its schedule and optional account-specific classification IDs.
- **Create Task**: Create a task in an ITM Platform project using account-defined type, priority, and status names.
- **Get Project** (read-only): Return the full current details of one project by its ITM Platform project ID.
- **List Reference Data** (read-only): List account-defined project or task statuses, priorities, or types needed to form valid project and task mutations.
- **Search DataMart Components** (read-only): Search the read-only DataMart for project or service analytics records and return one offset-paginated page.
- **Search Projects** (read-only): Search projects by account-specific filters and return one page of project summaries with a continuation cursor.
- **Search Tasks** (read-only): Search tasks across accessible projects and return one page of task summaries with a continuation cursor.
- **Update Project**: Update selected fields of an existing ITM Platform project and return the provider result.
- **Update Task**: Update selected descriptive, scheduling, hierarchy, or custom fields on an existing ITM Platform project task.
