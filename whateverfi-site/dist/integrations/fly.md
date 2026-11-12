# Fly

Fly.io transforms containers into micro-VMs that run on hardware in 30+ regions on six continents.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/fly/.

## Actions

- **Get app details** (read-only): Retrieve detailed information about a specific Fly.io application.
- **Get Current Token Info** (read-only): Get information about the current authentication token.
- **Get Machine** (read-only): Get a single machine by ID from Fly.io.
- **Get Organization** (read-only): Find a Fly.io organization by slug using the GraphQL API.
- **Get Personal Organization** (read-only): Retrieve the user's personal organization details from Fly.io.
- **Get Placements** (read-only): Get placement recommendations for Machines in Fly.io regions.
- **Get Platform Information** (read-only): Retrieve Fly.io platform information including available regions, VM sizes, and flyctl version.
- **Get Regions** (read-only): Get the list of available Fly.io regions with optional filtering.
- **Get Viewer Info** (read-only): Retrieve the authenticated user's account information from Fly.io.
- **List Apps** (read-only): List all Fly Apps in an organization.
- **List Apps via GraphQL** (read-only): List all Fly.io applications with details including volumes, services, and VMs using GraphQL.
- **List Machines** (read-only): List Fly.io machines using GraphQL API with pagination support.
- **List Organization Machines** (read-only): List all Machines across all apps in a Fly organization.
- **Add WireGuard Peer**: Add a WireGuard peer connection to a Fly.io organization for private network access.
- **Check App Name Availability** (read-only): Validate an app name for Fly.io app creation.
- **Check Jobs** (read-only): Execute GraphQL queries against the Fly.io checkJobs endpoint.
- **Check Locations** (read-only): Retrieve all available Fly.io health check locations.
- **Check User Only Token** (read-only): Check whether the authentication token only allows user access.
- **Create Check Job Run**: Triggers a run of an existing health check job on Fly.io.
- **Create Delegated WireGuard Token**: Create a delegated WireGuard token for peer management in a Fly.io organization.
- **Create Health Check Job**: Create a health check job for monitoring application endpoints in Fly.io.
- **Create Third-Party Configuration**: Create a third-party service configuration for discharging macaroon caveats.
- **Delete Delegated WireGuard Token**: Delete a delegated WireGuard token from a Fly.io organization.
- **Delete Organization**: Delete a Fly.io organization and all its associated resources using the GraphQL API.
- **Delete Remote Builder**: Delete a remote builder configuration for a Fly.io organization.
- **Delete Third Party Configuration**: Delete a third-party service configuration from Fly.io.
- **Detach Postgres Cluster**: Detach a Postgres cluster from a Fly.io application, revoking access credentials.
- **Establish SSH Key**: Establish an SSH key for a Fly.io organization.
- **Fetch Nodes by IDs** (read-only): Fetches a list of node objects from Fly.io given a list of IDs using the GraphQL nodes query.
- **Get Add-On** (read-only): Find a Fly.io add-on by ID, name, or provider.
- **Get Add-On Provider** (read-only): Query information about a specific Fly.io add-on provider (extension) by name.
- **Get Certificate** (read-only): Retrieve a certificate by its ID from Fly.io.
- **Get Latest Image Details** (read-only): Retrieve the latest available tag details for a given image repository from Fly.io's registry.
- **Get Latest Image Tag** (read-only): Retrieve the latest available image tag for a Fly.io Docker repository.
- **Get Nearest Region** (read-only): Retrieve the nearest Fly.io region to the requesting client based on network location.
- **Get Node by ID** (read-only): Fetch an object by its globally unique ID using Fly.io's GraphQL node query.
- **Get Products and Pricing** (read-only): Retrieve Fly.io product and price information via GraphQL.
- **Issue Certificate**: Issue an SSH certificate for accessing Fly.io infrastructure.
- **List Add-On Plans** (read-only): List available add-on service plans from Fly.io.
- **List Add-Ons** (read-only): List add-ons associated with an organization in Fly.io.
- **Remove WireGuard Peer**: Remove a WireGuard peer connection from a Fly.io organization.
- **Set Apps V2 Default**: Configure whether new apps in an organization use Apps V2 by default on Fly.io.
- **Update Third-Party Configuration**: Update an existing third-party service configuration for discharging macaroon caveats.
- **Validate Config** (read-only): Validate a Fly.io app configuration.
- **Validate WireGuard Peers** (read-only): Validate WireGuard peer IP addresses in a Fly.io organization.
