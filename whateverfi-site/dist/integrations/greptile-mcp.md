# Greptile MCP

Greptile MCP lets authorized agents search connected codebases, inspect pull requests and code reviews, manage custom context, and analyze engineering knowledge bases.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/greptile-mcp/.

## Actions

- **Create custom context**: Create a persistent review rule or pattern in the selected organization.
- **Get analytics overview** (read-only): Get review analytics for repositories visible to the caller, optionally intersected by exact team, repository, and author filters.
- **Get code review** (read-only): Get one code-review run by its stable id.
- **Get custom context** (read-only): Get one saved review rule or pattern and up to 10 linked review-comment references.
- **Get knowledge base document** (read-only): Read one current knowledge-base markdown document after listing its path.
- **Get me** (read-only): Identify the caller and discover the organizations available to other tools.
- **Get merge request** (read-only): Get one pull request or merge request with metadata, statistics, comments, up to 10 recent review records, and summary citations for the…
- **List analytics filter options** (read-only): List exact team names, repository names, or author logins available to the caller for analytics filters.
- **List analytics findings** (read-only): List review findings visible to the caller, newest first, with optional exact scope, severity, security, stored-addressed-status, text,…
- **List code reviews** (read-only): List code-review runs visible to the caller, newest first, optionally filtered by repository, PR number, or status.
- **List custom context** (read-only): List saved review rules and learned patterns visible to the caller, newest first.
- **List knowledge base documents** (read-only): List paths in one repository's current published knowledge base to map its documented subsystems before reading.
- **List knowledge bases** (read-only): Discover repositories with reachable Greptile knowledge-base data.
- **List merge request comments** (read-only): List all matching comments for one pull request or merge request, newest first.
- **List merge requests** (read-only): List merge requests and pull requests visible to the caller, newest first.
- **List pull requests** (read-only): Alias of list_merge_requests with the same filters and result contract.
- **List repositories** (read-only): List repositories visible to the caller in the selected organization, sorted by name.
- **Search custom context** (read-only): Search visible custom-context bodies by case-insensitive substring, newest matches first.
- **Search greptile comments** (read-only): Search Greptile-generated review comments by case-insensitive body substring across PR and CLI/headless reviews, newest first.
- **Search knowledge base** (read-only): Search one repository's current knowledge base for a case-insensitive substring when you know the term, symbol, endpoint, or convention to…
- **Trigger code review**: Request a new asynchronous Greptile review for an existing GitHub pull request or GitLab merge request.
