# Finmo

Finmo provides payment collection, payouts, wallets, foreign exchange, virtual accounts, and transaction management for businesses.

Category: Finance. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/finmo/.

## Actions

- **Create Customer**: Create a real production Finmo customer profile containing personal or company identity data.
- **Create Payin**: Create a real production payin that can collect money from a customer and credit a customer or merchant wallet.
- **Create Payout**: Send real production funds from a Finmo wallet to a beneficiary.
- **Create Payout Beneficiary**: Create a real payout beneficiary in the connected Finmo production account.
- **Create Refund**: Issue a real production full refund for a completed Finmo payin.
- **Get Payin Method Requirements** (read-only): Return the dynamic required fields, validation regexes, limits, instructions, and capabilities for one Finmo payin method.
- **Get Payment** (read-only): Get one payin, payout, or refund by its Finmo reference ID.
- **Get Payout Method Requirements** (read-only): Return the dynamic payout, beneficiary, and sender field requirements for one Finmo payout method.
- **Get Wallet** (read-only): Get one wallet and its currency accounts, including actual and available balances.
- **List Customers** (read-only): List one page of individual or company customer profiles and wallet-readiness state.
- **List Payin Methods** (read-only): List one page of enabled ways to collect money for a country and currency, with a continuation cursor when more results exist.
- **List Payins** (read-only): List inbound payment attempts with status, method, customer, wallet, and time filters.
- **List Payout Beneficiaries** (read-only): List one page of stored payout beneficiaries and their destination details.
- **List Payout Methods** (read-only): List one page of enabled payout rails for a sender and beneficiary country/currency pair.
- **List Payouts** (read-only): List one page of outbound payments with status, payout method, and time filters.
- **List Refunds** (read-only): List one page of refunds with status, originating payin, amount, and time filters.
- **List Transactions** (read-only): List organization-level financial transactions for reconciliation, filtered by customer, event type, settlement, reconciliation, or time.
- **List Wallets** (read-only): List one page of Finmo wallets available to the connected organization or a customer.
- **Transfer Wallet Funds**: Move real production funds immediately between two Finmo wallets.
