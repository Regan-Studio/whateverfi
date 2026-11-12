# Grafana

Open and composable observability platform for metrics, logs, and traces

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/grafana/.

## Actions

- **Get Grafana Health Status** (read-only): Check Grafana server health and database connectivity.
- **Get Index Gateway Ring Status** (read-only): Retrieve the index gateway hash ring status from Grafana Loki.
- **Get License Status** (read-only): Check if a valid Grafana Enterprise license is available.
- **Get Ruler Ring Status** (read-only): Retrieve the ruler ring status from Grafana Mimir.
- **Post ACS**: Perform SAML Assertion Consumer Service (ACS) operation.
- **Query Public Dashboard Panel** (read-only): Query a panel on a public Grafana dashboard to retrieve time-series data and metrics.
- **Retrieve JWKS** (read-only): Retrieve JSON Web Key Set (JWKS) with all public keys for token verification.
- **Create OTLP v1 Logs**: Create OTLP v1 logs in Grafana Loki.
- **Get Distributor HA Tracker** (read-only): Retrieve distributor HA tracker status.
- **Get overrides exporter ring** (read-only): Retrieve the overrides-exporter hash ring status as an HTML page.
- **Get Store Gateway Tenants** (read-only): Retrieves store gateway tenants.
