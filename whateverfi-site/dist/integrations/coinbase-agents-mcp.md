# Coinbase Agents MCP

Coinbase Agents MCP lets authorized agents inspect portfolios, accounts, products, fees, orders, fills, and market data, and perform permitted conversions, trades, transfers, portfolio changes, and x402 payments.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/coinbase-agents-mcp/.

## Actions

- **Coinbase balance** (read-only): Returns account balances for exactly one portfolio.
- **Coinbase convert execute**: Executes a previously quoted conversion using the quote_id from convert_quote.
- **Coinbase convert get** (read-only): Check status of a conversion by quote ID.
- **Coinbase convert quote**: Quotes stablecoin↔fiat and stablecoin↔stablecoin conversions, returning rate, fees, and a quote ID.
- **Coinbase fees** (read-only): Fee tier, maker/taker rates, and 30-day volume.
- **Coinbase orders cancel**: Cancels one or more open orders by ID.
- **Coinbase orders close position**: Places a market order to flatten an open position for a product, moving funds immediately.
- **Coinbase orders create**: Place a market, limit, stop_limit, bracket, twap, or scaled order, subject to venue eligibility.
- **Coinbase orders edit**: Atomically update an open order's price or size without cancelling.
- **Coinbase orders edit preview** (read-only): Estimate the result, fees, fill price, and slippage of changing an open order's size or limit price without editing it.
- **Coinbase orders fills** (read-only): Lists individual trade executions with commissions and maker/taker indicator, filterable by product, order, side, and time range.
- **Coinbase orders get** (read-only): Retrieves the full status and fill details of a single order by ID.
- **Coinbase orders list** (read-only): Lists orders with optional filters by status, product, side, and time range.
- **Coinbase orders preview** (read-only): Estimate fees, fill price, slippage, and execution plans without placing an order.
- **Coinbase portfolios create**: Creates a new named portfolio for segregating funds and positions.
- **Coinbase portfolios delete**: Permanently deletes a portfolio.
- **Coinbase portfolios edit**: Renames an existing portfolio.
- **Coinbase portfolios get** (read-only): Returns portfolio metadata, balances, and positions.
- **Coinbase portfolios list** (read-only): Lists all portfolios on the account, including their UUIDs and types.
- **Coinbase products best bid ask** (read-only): Returns best bid and ask for one or more products in a single call.
- **Coinbase products book** (read-only): Returns the current bid/ask order book for a product.
- **Coinbase products candles** (read-only): Returns historical OHLCV candles for a product at a chosen granularity and time range.
- **Coinbase products get** (read-only): Viewing a product, including a FUTURE one, doesn't require any special account approval.
- **Coinbase products list** (read-only): Viewing products, including FUTURE ones, doesn't require any special account approval.
- **Coinbase products ticker** (read-only): Returns recent trade prints plus the current best bid/ask for a product.
- **Coinbase transfer**: Moves funds of a single currency from one portfolio to another.
- **Coinbase x402 fetch**: Fetches a resource returned by x402_resources.
- **Coinbase x402 pay**: Turns an x402 PaymentRequirements challenge into a ready-to-send payment header by placing a pre-authorized hold on the caller's Base USDC…
- **Coinbase x402 resources** (read-only): Discover curated x402 resources.
