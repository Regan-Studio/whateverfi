# Snyk

Snyk helps development teams find, prioritize, and remediate security issues across code, dependencies, containers, and cloud infrastructure.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/snyk/.

## Actions

- **Add Projects To Collection**: Add up to 100 projects to a Snyk collection.
- **Bulk Delete Projects**: Permanently delete up to 100 Snyk projects.
- **Bulk Update Inventory Assets**: Transactionally update attributes for up to 100 inventory assets in a Snyk organization.
- **Bulk Update Projects**: Update 1-20 distinct Snyk projects using individual typed patches or one shared patch.
- **Create Collection**: Create a collection in a Snyk organization.
- **Create Export**: Start an asynchronous organization export and return the export ID and polling link.
- **Create Ignore Policy**: Create an organization-level ignore policy for a specific Snyk Code finding.
- **Create Repository Aliases**: Link one or more alternate repository URLs to canonical repository assets in a Snyk organization.
- **Create SBOM Test**: Start asynchronous vulnerability analysis of a CycloneDX 1.4-1.6 JSON or SPDX 2.3 JSON SBOM.
- **Delete Collection**: Permanently delete a Snyk collection.
- **Delete Ignore Policy**: Permanently delete an organization-level Snyk ignore policy.
- **Delete Project**: Permanently delete one Snyk project from an organization.
- **Delete Repository Aliases**: Detach 1-100 aliased URLs from their canonical repository assets in a Snyk organization.
- **Delete Target**: Permanently delete a Snyk target and all projects associated with it.
- **Download Findings Document** (read-only): Download the raw bytes of a completed findings document and return an offloaded file reference.
- **Download Project SBOM** (read-only): Download a Snyk project's software bill of materials as CycloneDX JSON/XML or SPDX JSON and return an offloaded file reference.
- **Get Collection** (read-only): Retrieve a collection from a Snyk organization.
- **Get Container Image** (read-only): Retrieve a container image by its SHA-256 digest from a Snyk organization.
- **Get Export** (read-only): Retrieve completed export results from a Snyk organization.
- **Get Export Job Status** (read-only): Get the current status of a Snyk organization export job.
- **Get IAC Settings** (read-only): Retrieve Infrastructure as Code settings for a Snyk organization.
- **Get Ignore Policy** (read-only): Retrieve an organization-level ignore policy by ID.
- **Get Inventory Asset** (read-only): Retrieve one inventory asset by ID from a Snyk organization, optionally using sparse fieldsets.
- **Get Inventory Asset Search Results** (read-only): Retrieve one page of results from a previously started asynchronous Snyk inventory asset search.
- **Get Open Source Broker Setting** (read-only): Retrieve whether the Open Source Broker setting is enabled for a Snyk organization.
- **Get Open Source Ecosystem Broker Settings** (read-only): Retrieve all Broker settings for a specific Open Source ecosystem in a Snyk organization.
- **Get Open Source Private Registry Settings** (read-only): Retrieve publicly accessible private registry settings for a specific Open Source ecosystem in a Snyk organization.
- **Get Organization** (read-only): Retrieve the full details of a Snyk organization.
- **Get Organization Issue** (read-only): Retrieve one Snyk issue by its organization and issue IDs, optionally including data flows for Snyk Code issues.
- **Get Package Test** (read-only): Retrieve a Snyk package test by ID, including its execution state, outcome, component facts, and finding summaries.
- **Get Project** (read-only): Retrieve a Snyk project by ID, including its settings and relationships.
- **Get SAST Settings** (read-only): Retrieve the SAST settings for a Snyk organization.
- **Get SBOM Test Result** (read-only): Retrieve one page of affected packages from a finished Snyk SBOM test, together with the test result resource.
- **Get SBOM Test Status** (read-only): Poll the status of an asynchronous Snyk SBOM test job.
- **Get Target** (read-only): Retrieve a target by ID from a Snyk organization.
- **List Broker Connections** (read-only): List one page of Broker connections integrated with a Snyk organization.
- **List Collection Projects** (read-only): List one page of projects in a Snyk collection, with issue counts and owning targets.
- **List Collections** (read-only): List one page of a Snyk organization's collections, including project and issue counts.
- **List Component Findings** (read-only): List one page of unsuppressed findings for a component in a completed Snyk package test.
- **List Container Image Target Refs** (read-only): List one page of target references associated with a container image in a Snyk organization.
- **List Container Images** (read-only): List one page of container images in a Snyk organization, optionally filtered by image digest, platform, or registry name.
- **List Ignore Policies** (read-only): List one page of organization-level Snyk Code Consistent Ignore policies, with optional search, review, expiry, and sorting filters.
- **List Ignore Policy Events** (read-only): List one page of event history for a Snyk organization ignore policy.
- **List Inventory Asset Projects** (read-only): List one page of Snyk projects linked to an inventory asset, including project attributes and issue counts.
- **List Inventory Asset Targets** (read-only): List one page of Snyk targets linked to an inventory asset, including each target's origin, reference, manifest file, integration, and…
- **List Inventory Assets** (read-only): List one page of a Snyk organization's inventory assets, with optional RSQL filtering, sorting, sparse fieldsets, and total count.
- **List Inventory Filter Fields** (read-only): List one page of fields available for filtering a Snyk organization's inventory assets with RSQL.
- **List Inventory Filter Values** (read-only): List one page of distinct values for a Snyk inventory filter field for autocomplete.
- **List Inventory Group Fields** (read-only): List one page of fields available for grouping inventory assets in a Snyk organization, optionally filtered by asset type.
- **List Inventory Group Values** (read-only): List one page of aggregated values for a Snyk inventory group field.
- **List Issues For Package** (read-only): List one offset page of direct vulnerabilities for a versioned Package URL.
- **List Issues For Packages** (read-only): List direct vulnerabilities for a batch of versioned Package URLs.
- **List Language Settings** (read-only): Get one page of language and package-manager settings for a Snyk organization.
- **List Organization Issues** (read-only): List one page of issues for a Snyk organization, with filters for scan item, issue type, timestamps, effective severity, status, ignored…
- **List Organizations** (read-only): List one page of Snyk organizations accessible to the connected account, with group, personal-organization, slug, name, and…
- **List Projects** (read-only): List one page of a Snyk organization's projects.
- **List Targets** (read-only): List one page of a Snyk organization's targets.
- **List Test Findings** (read-only): List one page of non-threshold-violating, policy-unsuppressed findings from a Snyk package test.
- **Lookup Inventory Asset** (read-only): Look up one inventory asset in a Snyk organization by natural key or alias.
- **Remove Projects From Collection**: Remove up to 100 projects from a Snyk collection.
- **Update Collection**: Rename a Snyk collection.
- **Update IAC Settings**: Update Infrastructure as Code custom-rule inheritance, enablement, or OCI registry URL and tag for a Snyk organization.
- **Update Ignore Policy**: Update an organization-level ignore policy.
- **Update Inventory Asset**: Partially update the classification, labels, or tags of one Snyk inventory asset.
- **Update Language Settings**: Update package-manager settings for one programming language in a Snyk organization.
- **Update Open Source Ecosystem Broker Settings**: Update selected Broker integrations for a specific Open Source ecosystem in a Snyk organization.
- **Update Open Source Private Registry Settings**: Add, update, or remove private registry integrations for one Open Source ecosystem in a Snyk organization.
- **Update Org Secrets Settings**: Update the Early Access Secrets settings for a Snyk organization.
- **Update Organization**: Update the display name of a Snyk organization.
- **Update Project**: Update a Snyk project's classifications, tags, test frequency, or owner.
- **Update SAST Settings**: Enable or disable Snyk Code SAST for an organization.
