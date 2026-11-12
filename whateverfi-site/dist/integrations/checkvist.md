# Checkvist

Checkvist beta PRO MCP lets AI assistants manage hierarchical lists, tasks, tags, due dates, and assignees, and read task notes.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/checkvist/.

## Actions

- **Create Checklist**: Create a Checkvist checklist with a name and optional visibility and tags.
- **Create Task**: Create a task in a checklist, optionally under a parent and with tags, smart-syntax due date, position, priority, or assignees.
- **Delete Checklist**: Mark a Checkvist checklist for deletion.
- **Delete Task**: Permanently delete a Checkvist task and all of its child tasks.
- **Get Checklist** (read-only): Get one Checkvist checklist's metadata by ID.
- **Get Task Tree** (read-only): Read one Checkvist task and its subtasks as a markdown outline, optionally including closed items or notes and limiting depth.
- **Get Tasks Outline** (read-only): Read a checklist as a recommended markdown task outline, with controls for closed tasks, depth, compact output, or top-level preview.
- **Get Tasks Page** (read-only): Read one explicit 1-based page of a large Checkvist checklist.
- **Import Tasks**: Create multiple hierarchical tasks from Checkvist indented text.
- **List Checklists** (read-only): List checklists available to the authenticated Checkvist user, optionally including archived lists or omitting statistics for a faster…
- **Replace Tasks**: Delete every existing task in a checklist, then replace the hierarchy from Checkvist indented text or OPML.
- **Search Tasks** (read-only): Search tasks across the user's Checkvist checklists using words and operators for due date (^ or due.
- **Set Task Status**: Set a task's status to closed, reopened, or invalidated using Checkvist's dedicated status operations.
- **Update Checklist**: Update an existing checklist's name, visibility, or complete tag set.
- **Update Task**: Update task content, hierarchy, replacement tags, due date, position, priority, assignees, or smart-syntax parsing.
- **Update Task Tags**: Add and remove task tags without replacing the complete tag set.
