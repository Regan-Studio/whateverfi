# 7shifts

7shifts is a restaurant team management platform for employee scheduling, time clocking, payroll, communication, and operational workflows.

Category: Recruiting & HR. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/7shifts/.

## Actions

- **Create Department**: Create a department at a company location, optionally make it the location's default department, and return its new department ID.
- **Delete Department**: Permanently delete a department, optionally transferring its roles and shifts to another department.
- **Get Department** (read-only): Return one department by company and department ID.
- **Get User Assignments** (read-only): Return one user's assigned locations, departments, and roles in a single read.
- **List Companies** (read-only): Return companies available to the connected access token, including the company IDs needed by company-scoped tools.
- **List Departments** (read-only): List one page of departments in a company, optionally filtered by location or modification date, with a cursor when more are available.
- **List Locations** (read-only): List one page of locations in a company and return location IDs used to filter schedules, users, and departments, with a cursor when more…
- **List Shifts** (read-only): List one page of scheduled shifts for a company with employee, location, department, role, time-range, publication-state, and open-shift…
- **List Users** (read-only): List employees and administrators in a 7shifts company, with optional status, name, and one assignment filter.
- **Update Department**: Replace a department's name and default setting.
