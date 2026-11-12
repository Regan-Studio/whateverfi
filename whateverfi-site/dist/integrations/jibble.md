# Jibble

Manage Jibble organizations, people, schedules, projects, time tracking, attendance, time off, reports, and approvals.

Category: Recruiting & HR. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/jibble/.

## Actions

- **Archive Member**: Dangerously deactivate a member by setting their status to Removed while retaining their data.
- **Archive Screenshot**: Archive one time-tracking screenshot so it is no longer active.
- **Archive Time Entry**: Archive one time entry by setting its status to Archived so it is no longer active in time-tracking records.
- **Assign Member Position**: Assign one existing position to a member.
- **Assign Member To Project**: Assign one existing member to an existing project.
- **Change Member Role**: Dangerously replace a member's authorization role.
- **Change Pay Period Status**: Dangerously change a pay period to Approved, Reopened, or Rejected.
- **Change Time Off Request Status**: Change a time-off request to Approved, Cancelled, Rejected, or Pending.
- **Clear Project Client**: Remove the client assignment from one project.
- **Clock In**: Clock a Jibble member in with required device context and optional activity, project, location, coordinates, and automatic clock-out…
- **Clock Out**: Clock a Jibble member out by creating an Out time entry with required client device context.
- **Create Activity**: Create a time-tracking activity.
- **Create Client**: Create an organization client.
- **Create Group**: Create an organization group with a caller-supplied ID and name.
- **Create Holiday**: Add a named holiday date to an organization calendar.
- **Create Kiosk**: Create an attendance kiosk for a location and selected members using a sensitive master PIN.
- **Create Location**: Create a work location with an address, geofence, and coordinates.
- **Create Member**: Create a member and optionally send an invitation email to that member.
- **Create Position**: Create an organization position with a name.
- **Create Project**: Create a project with optional client and location assignments.
- **Create Schedule**: Create a fixed or flexible work schedule with per-day working times and optional paid or unpaid breaks.
- **Create Time Off Request**: Create either a full-day or hourly time-off request for a Jibble member under a specific time-off policy.
- **Delete Async Export**: Delete a generic asynchronous OData export from the Jibble service where it was started, freeing an active export slot.
- **Delete Holiday**: Permanently delete one holiday from an organization calendar.
- **Delete Location**: Permanently delete an organization location.
- **Delete Member Permanently**: Permanently and irreversibly delete a member and all of their retained data.
- **Get Async Export** (read-only): Poll a generic asynchronous OData export on the Jibble service where it was started.
- **Get Current Attendance Totals** (read-only): Get real-time counts of members clocked in, clocked out, or on a break for a documented attendance scope and optional member filters.
- **Get Kiosk** (read-only): Get one attendance kiosk by ID with optional location expansion.
- **Get Latest Time Entry** (read-only): Get a member's latest time entry, returning no entry when the member has not recorded one.
- **Get Organizations** (read-only): Return organizations available to the connected Jibble API credentials, including IDs and settings.
- **Get Pay Period Approval** (read-only): Get one pay-period approval with daily breakdowns and totals.
- **Get Recent Activities** (read-only): Get a bounded number of activities recently used by one Jibble member.
- **Get Recent Projects** (read-only): Get a bounded number of projects recently used by one member.
- **Get Timesheet Daily Summary** (read-only): Get per-member daily attendance summaries and total tracked duration for a date range, optionally limited to selected member IDs.
- **Get Tracked Time Report** (read-only): Get tracked-time report data grouped by a primary and optional secondary dimension, with filters for people and organization entities.
- **List Activities** (read-only): List organization activities with optional OData filtering and field selection.
- **List Approval Configurations** (read-only): List pay-period definitions used to configure timesheet approvals.
- **List Async Exports** (read-only): List generic OData asynchronous exports from a selected Jibble service.
- **List Calendars** (read-only): List holiday calendars available in the organization.
- **List Clients** (read-only): List clients configured in the organization.
- **List Groups** (read-only): List groups visible to the connected organization credentials.
- **List Holidays** (read-only): List calendar holidays with OData filtering, field selection, total counts, and opaque cursor pagination.
- **List Hour Entries** (read-only): List raw hour entries with OData filtering, expansion, field selection, ordering, and cursor pagination.
- **List Leave Balances** (read-only): List member leave balances for a requested date, with optional OData person or policy filtering and ordering.
- **List Locations** (read-only): List organization locations with optional OData filtering and field selection.
- **List Member Time Status** (read-only): List members' current active state and recent time-entry activity or project fields using Jibble's documented time-tracking projections.
- **List Members** (read-only): List organization members with optional OData filtering, field selection, relationship expansion, ordering, and group IDs.
- **List Pay Period Approvals** (read-only): List member pay-period approval summaries with OData filtering, total counts, and opaque cursor pagination.
- **List Positions** (read-only): List positions configured in the organization.
- **List Projects** (read-only): List organization projects and optionally expand client and location details.
- **List Roles** (read-only): List authorization roles that can be assigned to Jibble members.
- **List Schedules** (read-only): List organization work schedules with optional people and group expansion.
- **List Screenshots** (read-only): List time-tracking screenshots with optional OData filtering, ordering, field selection, and person expansion.
- **List Time Entries** (read-only): List raw time entries with OData filtering, expansion, field selection, stable ordering, total counts, and opaque cursor pagination.
- **List Time Off Policies** (read-only): List organization time-off policies with an optional OData status filter.
- **List Time Off Requests** (read-only): List time-off requests with OData date or status filtering, person or policy expansion, ordering, total counts, and opaque cursor…
- **List Timesheets** (read-only): List member timesheets for a date and Day, Week, or Month period, with member search, OData filtering and expansion, and cursor pagination.
- **Start Attendance Report Export**: Start an asynchronous XLSX attendance-report export for a date range and selected report sections.
- **Update Activity**: Rename an existing time-tracking activity.
- **Update Group**: Rename an existing organization group.
- **Update Location**: Update a location's name, address, status, geofence, or coordinates.
- **Update Member**: Update a member's profile, group, or schedule without archiving the member.
- **Update Organization Settings**: Dangerously change organization-wide country or time-tracking settings for one organization.
- **Update Position**: Rename an existing organization position.
- **Update Schedule**: Rename a schedule or replace its break type and break assignments.
- **Update Time Entry**: Update a time entry's activity or note without archiving it.
- **Update Time Off Request**: Update the dates or note of an existing time-off request without changing its approval status.
