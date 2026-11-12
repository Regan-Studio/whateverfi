# Temporal

Cloud-native workflow orchestration platform for building reliable distributed applications

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/temporal/.

## Actions

- **Batch Cancel Workflows**: Request cancellation of selected Temporal Workflows.
- **Batch Delete Workflows**: WARNING.
- **Batch Reset Workflows**: WARNING.
- **Batch Signal Workflows**: Send a named Signal to selected Temporal Workflows.
- **Batch Terminate Workflows**: WARNING.
- **Batch Update Workflow Options**: Update typed execution options on selected Temporal Workflows.
- **Cancel Workflow**: Irreversibly request cooperative cancellation of a running Temporal Workflow Execution.
- **Count Workflows** (read-only): Return an approximate count of Workflow Executions matching a Temporal Visibility query, including supported grouped counts.
- **Create Export Sink**: Create a persistent Temporal Cloud Workflow History export sink asynchronously.
- **Delete Export Sink**: Delete a Temporal Cloud Workflow History export sink asynchronously.
- **Delete Namespace**: Permanently and irreversibly delete a Temporal Cloud Namespace and all of its Workflow data asynchronously.
- **Describe Batch Operation** (read-only): Return progress, state, selection query, type, and failure counts for one batch operation in an authorized Temporal Cloud Namespace.
- **Describe Namespace** (read-only): Return one Temporal Cloud Namespace's configuration, resource version, routing endpoints, state, limits, and capacity.
- **Describe Workflow** (read-only): Return configuration, status, pending work, callbacks, and child state for one Workflow Execution in an authorized Temporal Cloud Namespace.
- **Fail Over Namespace Region**: Switch a multi-region Temporal Cloud Namespace's active region asynchronously.
- **Get Async Operation** (read-only): Return the current state and failure details of a Temporal Cloud asynchronous operation.
- **Get Export Sink** (read-only): Return one Temporal Cloud Workflow History export sink, including its resource version, destination configuration, state, and health.
- **Get Namespace Capacity** (read-only): Return a Temporal Cloud Namespace's capacity mode, available limits, and seven-day actions-per-second statistics.
- **Get Workflow History** (read-only): Return one page of a Temporal Workflow Execution's Event History in forward or reverse order.
- **List Archived Workflows** (read-only): Return one page of archived Workflow Executions matching an exact Temporal Visibility query.
- **List Batch Operations** (read-only): Return one page of batch operations in an authorized Temporal Cloud Namespace.
- **List Cloud Regions** (read-only): List currently available Temporal Cloud regions for Namespace placement.
- **List Export Sinks** (read-only): Return one page of Workflow History export sinks configured on a Temporal Cloud Namespace.
- **List Namespace Assignments** (read-only): Return one page of users, User Groups, or Service Accounts assigned to a Temporal Cloud Namespace.
- **List Namespaces** (read-only): Return one page of Temporal Cloud Namespaces visible to the API-key identity, optionally filtered by name or Project.
- **List Workflows** (read-only): Search one page of Workflow Executions in an authorized Temporal Cloud Namespace using Temporal Visibility query syntax.
- **Move Namespace To Project**: Move a Temporal Cloud Namespace to another Project asynchronously.
- **Pause Workflow**: Pause one Temporal Workflow Execution.
- **Query Workflow** (read-only): Run a synchronous, read-only Query handler against one Temporal Workflow Execution.
- **Register Namespace**: Create a billable, persistent Temporal Cloud Namespace asynchronously and return its full Namespace ID and operation ID.
- **Remove Namespace Access**: Remove one user's, user group's, or service account's direct permission on a Temporal Cloud Namespace by setting PERMISSION_UNSPECIFIED.
- **Rename Custom Search Attribute**: Rename one custom Search Attribute in a Temporal Cloud Namespace asynchronously.
- **Replace Workflow**: Replace a running Workflow Execution with a new execution using the same Workflow ID.
- **Reset Workflow**: WARNING.
- **Set Namespace Access**: Set one user's, user group's, or service account's direct ADMIN, WRITE, or READ permission on a Temporal Cloud Namespace.
- **Signal With Start Workflow**: Atomically signal a running Temporal Workflow or start and signal it when absent.
- **Signal Workflow**: Send an asynchronous Signal to one running Temporal Workflow Execution.
- **Start or Get Workflow**: Start a Workflow Execution, or return the already-running execution when the Workflow ID conflicts.
- **Start Workflow**: Start a new Workflow Execution in an authorized Temporal Cloud Namespace.
- **Stop Batch Operation**: Request that Temporal stop an in-progress batch operation.
- **Terminate Workflow**: Immediately and irreversibly terminate one Temporal Workflow Execution.
- **Trigger Workflow Rule**: Trigger an existing configured Temporal Workflow Rule against one Workflow Execution.
- **Unpause Workflow**: Resume a paused Temporal Workflow Execution.
- **Update Export Sink**: Update an existing Temporal Cloud Workflow History export sink asynchronously using optimistic concurrency.
- **Update Namespace**: Update a Temporal Cloud Namespace specification asynchronously using the latest resource version for optimistic concurrency.
- **Update Namespace Tags**: Upsert or permanently remove tags on a Temporal Cloud Namespace asynchronously.
- **Update Workflow**: Send a durable Update to one Temporal Workflow Execution and wait for the requested lifecycle stage.
- **Update Workflow Options**: Update selected options on one Temporal Workflow Execution using an exact protobuf FieldMask.
- **Validate Export Sink**: Validate a Temporal Cloud Workflow History export sink configuration.
