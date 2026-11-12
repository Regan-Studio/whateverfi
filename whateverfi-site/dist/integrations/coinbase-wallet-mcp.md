# Coinbase Wallet MCP

Coinbase Wallet MCP lets authorized agents inspect wallets and request onchain actions including transfers, swaps, signing, and payments.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/coinbase-wallet-mcp/.

## Actions

- **Chain rpc request** (read-only): Make a read-only JSON-RPC call to inspect on-chain state on a supported chain (arbitrum, avalanche, base, base-sepolia, bsc, ethereum,…
- **Complete x402 request**: Complete a previously initiated x402 payment after the user has approved it in their Base Account.
- **Fund**: Create a funding request to add money to (top up) the user's wallet.
- **Get portfolio** (read-only): Returns total portfolio value and per-asset breakdown for a wallet address.
- **Get request status** (read-only): Poll the status of an approval request by requestId (returned by send, sign, swap, or send_calls).
- **Get transaction history** (read-only): Returns paginated transaction history in reverse chronological order for a single chain.
- **Get wallets** (read-only): Returns the user's Base Account and all agent wallets with delegation status, spend policy, and session authorization.
- **Help** (read-only): Returns guidance for helping the user with protocol-specific tasks that aren't directly supported by this MCP.
- **Initiate x402 request**: Initiate an HTTPS request to an x402-enabled endpoint.
- **Search tokens** (read-only): Search for tokens by symbol or name on a single chain.
- **Send**: Send native tokens or any ERC-20.
- **Send calls**: Submit a batch of raw contract calls for user approval.
- **Sign**: Request a user-approved signature.
- **Swap**: Swap between tokens on a mainnet chain (testnets not supported).
- **Web request**: Make an HTTP GET or POST request to a whitelisted partner API.
