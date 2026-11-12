# Cronly

Cronly monitors cron jobs, SSL certificates, servers, and crontab backups and reports operational alerts.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/cronly/.

## Actions

- **Create Certificate Monitor**: Create an SSL/TLS certificate-expiry monitor for a hostname and port.
- **Create Monitor**: Create a cron-job heartbeat monitor and return its ID and sensitive pulse token.
- **Create Project**: Create a project for organizing Cronly monitors and certificate checks.
- **Delete Certificate Monitor**: Permanently delete an SSL/TLS certificate monitor by numeric ID.
- **Delete Monitor**: Permanently delete a cron-job monitor by numeric ID.
- **Delete Project**: Permanently delete a Cronly project by numeric ID.
- **Get Company** (read-only): Return safe organization, timezone, and subscription-summary fields for the connected Cronly account without exposing billing or…
- **Get Resource** (read-only): Get one monitor, project, certificate, user, server, or backup by its resource identity.
- **List Resources** (read-only): List notifications, monitors, projects, certificates, users, servers, or backups.
- **Pulse Monitor**: Record a successful heartbeat for a monitor using its sensitive pulse token.
