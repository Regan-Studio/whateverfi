# Authyo

Authyo provides passwordless authentication, OTP verification, session management, and transactional notifications through its REST API.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/authyo/.

## Actions

- **Revoke Session**: Irreversibly revoke an Authyo user session identified by its JWT, typically during logout.
- **Send Order Notification**: Send a usage-billed order or payment notification through an Authyo built-in template.
- **Send OTP**: Send a usage-billed one-time password to an email address or international phone number using Authyo's configured sender.
- **Verify OTP**: Verify a user-provided OTP for an Authyo mask ID and return the verified user identity without exposing the issued session JWT.
- **Verify Token** (read-only): Validate an Authyo session JWT and return its associated user identity without returning the JWT.
