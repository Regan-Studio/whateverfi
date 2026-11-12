# Bitquery

Bitquery provides historical and real-time indexed data for over 40 blockchains through GraphQL APIs, Websockets, SQL, and cloud providers.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/bitquery/.

## Actions

- **Combined Database Query** (read-only): Query the combined database, which merges archive and real-time databases.
- **Aliases Metric**: Use graphql aliases to rename fields in the response for clarity and disambiguation.
- **Archive Database Query**: Query the archive database.
- **Conditional Metrics Snippet**: Generate a graphql metric snippet with conditional logic.
- **Count Distinct Metric**: Use the count distinct metric to aggregate unique values for a field.
- **Count Metric**: Use the count metric to aggregate the number of records matching a graphql query.
- **Database Selection**: Select the database (archive, realtime, combined) to query at the top level of a graphql request.
- **Early Access Program Query**: Access streaming data across various blockchain networks for evaluation purposes.
- **Mempool Subscription**: Subscribe to real-time mempool updates for evm chains (ethereum, bnb, etc.).
- **Network Selection**: Select the blockchain network for graphql queries.
- **Options Query**: Fetch graphql dataset options via schema introspection.
- **Price Asymmetry Metric**: Generate graphql priceasymmetry filter snippet.
- **Quantile Metric**: Calculate quantiles to understand the distribution of numerical data.
- **Realtime Database Query**: Realtime database query
- **Select By Metric**: Generate a graphql metric snippet filtering by its value using selectwhere.
- **Statistics Metric**: Compute statistical metrics (mean, median, etc.) over one variable in a dataset.
- **Sum Metric**: Calculate the sum of a specified field's values across defined dimensions.
- **Uniq Metric**: Estimate the count of unique values using the uniq metric.
