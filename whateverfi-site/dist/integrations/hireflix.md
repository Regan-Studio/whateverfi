# Hireflix

Hireflix is a one-way video interview platform for managing positions, candidate interviews, templates, themes, and hiring workflows.

Category: Recruiting & HR. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/hireflix/.

## Actions

- **Create Candidate Interview**: Create a candidate interview in a Hireflix position without sending candidate notifications.
- **Create Position**: Create a one-way interview position with one or more video-answer questions.
- **Get Account Overview** (read-only): Return the connected Hireflix user, company, subscription status, permissions, and current usage counters without exposing credentials.
- **Get Interview** (read-only): Return one accessible Hireflix interview with candidate, progress, answers, scores, comments, metadata, and sharing state.
- **Get Position** (read-only): Return one Hireflix position's configuration and interview-step details by position ID.
- **Invite Candidate**: Invite a candidate to a Hireflix position and immediately send any configured candidate notifications.
- **List Notification Templates** (read-only): List Hireflix notification templates for one channel without returning Draft.js message bodies.
- **List Position Interviews** (read-only): Return one cursor-controlled page of interviews for a Hireflix position, with optional candidate and stage filters.
- **List Positions** (read-only): Return all positions visible to the connected Hireflix account, including archive state and tags.
- **List Themes** (read-only): Return the company's available position branding themes and their core visual settings.
- **List Webhooks** (read-only): Return configured Hireflix webhook destinations, activation state, and subscribed events without exposing signing secrets.
- **Permanently Delete Position**: Permanently delete a Hireflix position and its associated workflow state.
- **Set Interview Decision**: Move a Hireflix interview to the shortlisted or discarded hiring stage.
- **Set Position Archived**: Archive a Hireflix position to stop new submissions, or unarchive it to accept submissions again.
- **Share Interview**: Create an immediately active public, unauthenticated link exposing a Hireflix interview and its answers for duration_days (default 75).
- **Update Interview Review**: Set or clear exactly one review field for a Hireflix interview.
- **Update Position**: Patch a Hireflix position's core settings.
