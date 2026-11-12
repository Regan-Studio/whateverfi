# Skyfire

Skyfire enables AI agents to autonomously transact and pay for services, creating a seamless payment infrastructure for AI applications.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/skyfire/.

## Actions

- **Create Skyfire KYA+PAY Token**: Issue a skyfire kya+pay token (post /api/v1/tokens with type=kya+pay).
- **Create Skyfire PAY Token**: Issue a skyfire pay token (post /api/v1/tokens with type=pay).
- **Get Skyfire Buyer Wallet Balance**: Retrieve buyer wallet balance.
- **Get Skyfire Services by Tags**: Filter services by tags to find exactly what you need.
- **List Skyfire Directory Services**: Browse skyfire's service directory to obtain sellerserviceid for token creation.
- **Charge Skyfire Token**: Charge a buyer's token (seller-side operation).
- **Create Skyfire KYA Token**: Issue a skyfire kya token (post /api/v1/tokens with type=kya).
- **Get All Skyfire Service Tags**: Fetch all service tags to discover filtering options.
- **Get Skyfire Service Details**: Get full details for one service.
- **Get Skyfire Services by Agent**: Browse all services from one seller agent.
- **Get Skyfire Token Charges**: Audit charges for a specific token.
- **Introspect Skyfire Token**: Check if a token is still valid before calling a seller service.
- **List Skyfire Buyer Tokens**: Inspect buyer tokens for observability.
