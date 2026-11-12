# NMKR Studio

NMKR Studio provides APIs for managing NFT projects, assets, minting, sales, wallets, and related Cardano operations.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/nmkr-studio/.

## Actions

- **Get Exchange Rates** (read-only): Return NMKR's current BTC, USD, EUR, and JPY conversion rates for a supported coin.
- **Get Mint Coupon Balance** (read-only): Return the connected account's Cardano mint-coupon balance, effective time, and documented mint-purchase address.
- **Get NFT** (read-only): Return one NFT's details using either its NMKR NFT UID or the combination of project UID and NFT name.
- **Get Project** (read-only): Return details and NFT state counts for an NMKR Studio project identified by its project UID.
- **Get Project Pricelist** (read-only): Return the currently valid NFT prices configured for an NMKR Studio project, optionally including all prices exposed by NMKR.
- **Get Project Sale Conditions** (read-only): Return the active sale conditions configured for an NMKR Studio project.
- **Get Token Metadata** (read-only): Return metadata for a blockchain token identified by policy ID and hex-encoded token name.
- **List Payout Wallets** (read-only): Return payout wallets already configured on the connected NMKR Studio account.
- **List Project NFTs** (read-only): Return one page of NFTs in a project filtered by lifecycle state, with a continuation cursor for additional pages.
- **List Projects** (read-only): Return one page of projects owned by the connected NMKR Studio account, including identifiers needed by project and NFT tools.
- **Validate NFT Metadata** (read-only): Check whether the metadata already stored for an NFT is valid.
