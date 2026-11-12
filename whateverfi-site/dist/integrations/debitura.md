# Debitura

Debitura helps creditors manage debt collection cases, coverage, payments, divisions, tasks, and webhooks through its Customer API.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/debitura/.

## Actions

- **Check Case Eligibility** (read-only): Check whether Debitura covers a proposed debtor jurisdiction and amount, returning the matched partner and power-of-attorney status…
- **Create Division**: Create a creditor division with its company, address, and office contact profile.
- **Get Case Context** (read-only): Get one case by Debitura ID, Debitura reference, or creditor reference.
- **Get Creditor Status** (read-only): Return the connected creditor profile together with debt-collection contract onboarding status and any signing URL.
- **List Divisions** (read-only): List creditor divisions, optionally including archived divisions.
- **List Payments** (read-only): List payments across all creditor cases.
- **List Tasks** (read-only): List the creditor's action-item work queue across cases.
- **Preview Case** (read-only): Preview collection eligibility, partner assignment, blocking signing actions, jurisdiction, and estimated pricing without creating a case.
- **Search Cases** (read-only): Search the creditor's collection cases by lifecycle status, case IDs, debtor IDs, division IDs, and supported sort order.
- **Search Coverage** (read-only): Find Debitura collection coverage by exact jurisdiction ID or by filtering the canonical coverage catalog for a country and optional US…
- **Update Division**: Fully replace an existing creditor division's editable company, address, and office contact profile.
