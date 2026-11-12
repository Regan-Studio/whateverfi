# Firebase

Firebase Authentication client tools for project discovery, user sign-in and sign-up flows, out-of-band codes, and Secure Token refresh using a Firebase Web API Key.

Category: Security & Ops. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/firebase/.

## Actions

- **Discover Sign-In Methods** (read-only): Look up sign-in methods previously used by a Firebase account email.
- **Get Auth Project Config** (read-only): Get the public Firebase Authentication configuration associated with the connected Web API key, including the project ID and authorized…
- **Refresh ID Token**: Exchange a Firebase refresh token for a fresh Firebase ID token and rotated refresh token using Google's Secure Token service.
- **Sign In With Custom Token**: Exchange a trusted server-minted Firebase custom token for a Firebase ID token and refresh token.
- **Sign In With Email Link**: Complete Firebase email-link sign-in using an email address and the one-time OOB code from a previously delivered sign-in link.
- **Sign In With Identity Provider**: Sign in with one configured external identity provider using provider-specific OAuth or OIDC credential parameters.
- **Sign In With Password**: Sign in an existing Firebase Authentication user with email and password and return fresh ID and refresh tokens.
- **Verify Password Reset Code** (read-only): Validate a Firebase password-reset OOB code and identify the associated email and request type without changing the password.
