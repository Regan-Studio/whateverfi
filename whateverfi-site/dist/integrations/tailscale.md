# Tailscale

Tailscale is a secure networking platform for managing tailnets, devices, users, DNS, access policies, services, and other network administration resources.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/tailscale/.

## Actions

- **Get Device** (read-only): Get the full current record for one manageable Tailscale device by ID.
- **Get DNS Configuration** (read-only): Return the selected tailnet's combined MagicDNS, nameserver, search-path, and split-DNS configuration.
- **Get Tailnet Settings** (read-only): Return current tailnet-wide approval, update, key-duration, HTTPS, routing, logging, and posture settings.
- **List Configuration Audit Logs** (read-only): Return configuration audit events for an explicit RFC3339 time window in the selected tailnet, optionally filtered by actor, target, or…
- **List Device Routes** (read-only): Return the subnet routes advertised and currently enabled for a Tailscale device.
- **List Tailnet Devices** (read-only): Return all devices in the selected tailnet, including identifiers, names, addresses, tags, authorization state, and connectivity metadata.
- **List Users** (read-only): Return users in the selected tailnet, optionally filtered by membership type or role.
- **Set Device Authorization**: Approve or revoke approval for one device when device approval is enabled on the tailnet.
- **Set Device Routes**: Replace the enabled subnet routes for one device with an explicit list of routes.
- **Set Device Tags**: Replace all ACL tags assigned to one Tailscale device.
