# CoinGecko

CoinGecko provides cryptocurrency prices, market data, metadata, exchange data, NFTs, and onchain data through its Demo and paid Pro REST APIs.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/coingecko/.

## Actions

- **Get Coin Details** (read-only): Get metadata and optionally selected market, ticker, community, and developer sections for one CoinGecko coin ID.
- **Get Coin Market Chart** (read-only): Get price, market-cap, and volume time series for a coin over either a relative day window or an exact Unix time range.
- **Get Coin OHLC** (read-only): Get open, high, low, and close price candles for a CoinGecko coin over a supported day window.
- **Get Coin Prices** (read-only): Get current prices for one or more CoinGecko coin IDs in one or more currencies, with optional market metrics.
- **Get Global Market Data** (read-only): Get an aggregate snapshot for either the overall crypto market or the decentralized-finance market.
- **Get Onchain Pool OHLCV** (read-only): Get bounded open, high, low, close, and volume candles for a DEX pool, with timeframe, aggregation, currency, and cutoff controls.
- **Get Onchain Pools by Address** (read-only): Get data for one or more pool contract addresses on the same CoinGecko onchain network in a single call.
- **Get Onchain Token Prices** (read-only): Get current USD prices for one or more token contracts on a CoinGecko onchain network, with optional market metrics.
- **Get Onchain Tokens by Address** (read-only): Get market data for one or more token contract addresses on the same CoinGecko onchain network in a single call.
- **Get Trending Assets** (read-only): Get CoinGecko's currently trending coins, NFT collections, and categories from search activity.
- **List Coin Markets** (read-only): Return one ranked page of CoinGecko market data, optionally filtered by coin IDs, symbols, or category.
- **List New Onchain Pools** (read-only): Return one page of newly created DEX pools across all networks or within one network.
- **List Onchain Networks** (read-only): Return one page of supported onchain network IDs and their CoinGecko asset-platform mappings.
- **List Onchain Pool Trades** (read-only): List up to 300 of a CoinGecko onchain pool's trades from the past 24 hours, optionally filtered by minimum USD volume or token side.
- **List Onchain Pools** (read-only): Return one ranked page of pools for a network, optionally restricted to one DEX or one token contract.
- **List Trending Onchain Pools** (read-only): Return one page of currently trending DEX pools across all networks or within one network and duration window.
- **Search Assets** (read-only): Search CoinGecko for matching coins, exchanges, categories, and NFT collections.
- **Search Onchain Pools** (read-only): Search decentralized-exchange pools and tokens by name, symbol, or contract address, optionally within one network.
