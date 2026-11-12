# Fleetio

Fleetio is a fleet management platform for managing vehicles, equipment, maintenance, inspections, fuel, parts, purchasing, and operational workflows.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/fleetio/.

## Actions

- **Archive Contact**: Archive one Fleetio contact by ID.
- **Archive Vehicle**: Archive one Fleetio vehicle by ID.
- **Change Issue State**: Close, resolve, or reopen one Fleetio issue using the dedicated lifecycle endpoint for that transition.
- **Create Contact**: Create a Fleetio contact with a required first name and optional common business identity fields.
- **Create Fuel Entry**: Create a Fleetio fuel entry and its required meter reading for a vehicle.
- **Create Issue**: Report a Fleetio issue for a vehicle or equipment asset with required timing and summary plus optional priority, assignment, and labels.
- **Create Meter Entry**: Record a primary or secondary Fleetio meter reading for a vehicle.
- **Create Vehicle**: Create a Fleetio vehicle with its required name, primary meter unit, status, and type, plus optional common identity and assignment fields.
- **Delete Fuel Entry**: Permanently delete one Fleetio fuel entry and its associated meter entry by exact fuel-entry ID.
- **Delete Issue**: Permanently delete one Fleetio issue by exact ID.
- **Delete Meter Entry**: Permanently delete one Fleetio meter entry by exact ID.
- **Get Contact** (read-only): Retrieve one Fleetio contact by ID for assignment, issue, or maintenance workflows.
- **Get Issue** (read-only): Retrieve full details for one Fleetio issue by ID.
- **Get Service Entry** (read-only): Retrieve one Fleetio service entry by ID, including its status, maintenance tasks, issues, meter data, and costs.
- **Get Vehicle** (read-only): Retrieve full current details for one Fleetio vehicle by ID.
- **Get Work Order** (read-only): Retrieve full details for one Fleetio work order by ID.
- **List Account Context** (read-only): Return Fleetio account identity, plan, state, and permission or feature context for the connected API key.
- **List Contacts** (read-only): Find Fleetio contacts using bounded cursor pagination and common identity or employment filters.
- **List Fuel Entries** (read-only): Find Fleetio fuel entries by vehicle, vendor, external ID, or date range using bounded cursor pagination.
- **List Issues** (read-only): Find Fleetio issues by vehicle, state, issue number, assigned contact, due date, or reported date.
- **List Meter Entries** (read-only): Find Fleetio primary or secondary meter readings by vehicle, meterable asset, category, or date range, ordered for chronology checks.
- **List Reference Data** (read-only): List one Fleetio reference collection used by vehicle, issue, work-order, service, fuel, vendor, grouping, and inspection workflows.
- **List Service Entries** (read-only): List Fleetio service entries by reference, status, or completion-date range, with sorting and cursor pagination.
- **List Service Reminders** (read-only): Find due, overdue, snoozed, or upcoming Fleetio service reminders by vehicle or service task.
- **List Vehicles** (read-only): Find active Fleetio vehicles by name, VIN, license plate, group, status, or type, with cursor pagination and configurable sorting.
- **List Work Orders** (read-only): Find Fleetio work orders by vehicle, vendor, contact, number, status, or purchase order reference.
- **Restore Contact**: Restore one archived Fleetio contact by ID.
- **Restore Vehicle**: Restore one archived Fleetio vehicle by ID.
- **Update Contact**: Update selected business identity, communication, employment, or group fields on one Fleetio contact.
- **Update Fuel Entry**: Correct selected timestamp, volume, meter, vendor, fuel type, price, flag, or reference fields on one Fleetio fuel entry.
- **Update Issue**: Update issue content, priority, due date, or assignments without changing the issue lifecycle state.
- **Update Meter Entry**: Correct the timestamp, value, or void state of one Fleetio meter entry, or change its meter type from primary to secondary.
- **Update Vehicle**: Update selected identity, classification, or assignment fields on one Fleetio vehicle.
- **Update Work Order**: Update selected status, scheduling, assignment, reference, description, or issue fields on an existing Fleetio work order.
