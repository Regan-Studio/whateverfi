# Bitbucket

Bitbucket is a Git-based code hosting and collaboration platform supporting private and public repositories, enabling teams to manage and review code through pull requests and integrations

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/bitbucket/.

## Actions

- **Create a branch**: Creates a new branch in a bitbucket repository from a target commit hash.
- **Create a pull request**: Creates a new pull request in a specified bitbucket repository, ensuring the source branch exists and is distinct from the (optional)…
- **Create an issue**: Creates a new issue in a bitbucket repository, setting the authenticated user as reporter.
- **Create an issue comment**: Adds a new comment with markdown support to an existing bitbucket issue.
- **Create repository**: Creates a new bitbucket 'git' repository in a specified workspace, defaulting to the workspace's oldest project if project key is not…
- **Delete issue**: Permanently deletes a specific issue, identified by its issue id, from the repository specified by repo slug within the given workspace.
- **Delete repository**: Permanently deletes a specified bitbucket repository.
- **Get current user** (read-only): Retrieves the profile information (uuid, display name, links, creation date) for the currently authenticated bitbucket user.
- **Get file from repository** (read-only): Retrieves a specific file's content from a bitbucket repository at a given commit (hash, branch, or tag), failing if the file path is…
- **Get Pull Request** (read-only): Get a single pull request by id with complete details.
- **Get snippet** (read-only): Retrieves a specific bitbucket snippet by its encoded id from an existing workspace, returning its metadata and file structure.
- **List pull requests** (read-only): Lists pull requests in a specified, accessible bitbucket repository, optionally filtering by state (open, merged, declined).
- **List repositories in workspace** (read-only): Lists repositories in a specified bitbucket workspace, accessible to the authenticated user, with options to filter by role or query…
- **List workspace members** (read-only): Lists all members of a specified bitbucket workspace.
- **List workspaces** (read-only): Lists bitbucket workspaces accessible to the authenticated user, optionally filtered and sorted.
- **Create snippet comment**: Posts a new top-level comment or a threaded reply to an existing comment on a specified bitbucket snippet.
- **Update an issue**: Updates an existing issue in a bitbucket repository by modifying specified attributes.
