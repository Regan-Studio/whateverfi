# Didit

Didit provides identity verification, KYC, KYB, AML, fraud prevention, and compliance APIs for onboarding and ongoing risk operations.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/didit/.

## Actions

- **Create Verification Session**: Create a hosted KYC or KYB verification session from a published workflow and return the URL to give the end user.
- **Get Billing Balance** (read-only): Read the organization's prepaid Didit credit balance and auto-refill settings before starting billable verification work.
- **Get Business** (read-only): Fetch one aggregated KYB business profile by its exact vendor_data identifier.
- **Get User** (read-only): Fetch one aggregated KYC user profile by its exact vendor_data identifier.
- **Get Verification Decision** (read-only): Retrieve the complete current KYC or KYB decision and all feature reports for one verification session.
- **Get Workflow** (read-only): Fetch the full configuration and pricing of one workflow version.
- **List Businesses** (read-only): List business profiles aggregated from KYB sessions, including status, session counts, registry identifiers, and verification summaries.
- **List Users** (read-only): List user profiles aggregated from KYC sessions, including status, session counts, and feature summaries.
- **List Verification Sessions** (read-only): List and filter KYC, KYB, or standalone verification sessions.
- **List Workflows** (read-only): List configured verification workflow versions, their publication status, feature summary, and expected per-run pricing.
