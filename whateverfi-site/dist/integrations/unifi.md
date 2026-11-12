# UniFi

Monitor UniFi Site Manager inventory, internet health metrics, and SD-WAN configurations across the connected UI account's sites. This toolkit excludes arbitrary Cloud Connector requests and all local Network, Protect, Mobility, Carrier Fabric, and InnerSpace API surfaces.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/unifi/.

## Actions

- **Get Host** (read-only): Get detailed information for one UniFi host by the Site Manager host ID returned by List Hosts.
- **Get ISP Metrics** (read-only): Get ISP performance metrics for all accessible sites, optionally limited by a relative duration or explicit timestamp bounds.
- **Get SD-WAN Config** (read-only): Get the topology and settings of one SD-WAN configuration by ID.
- **Get SD-WAN Config Status** (read-only): Get deployment, generation, WAN, tunnel, warning, and error status for one SD-WAN configuration.
- **List Devices** (read-only): List UniFi devices managed by hosts where the connected UI account is an owner or super admin.
- **List Hosts** (read-only): List UniFi hosts associated with the connected UI account.
- **List SD-WAN Configs** (read-only): List the SD-WAN configurations associated with the connected UI account.
- **List Sites** (read-only): List sites from UniFi Network applications associated with the connected UI account.
- **Query ISP Metrics** (read-only): Get ISP performance metrics for selected host/site pairs.
