# MongoDB MCP

MongoDB MCP lets authorized agents explore and manage MongoDB Atlas resources, databases, collections, documents, indexes, performance data, and MongoDB knowledge sources.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/mongodb-mcp/.

## Actions

- **Aggregate** (read-only): Run an aggregation against a MongoDB collection
- **Aggregate-db** (read-only): Run an aggregation against a MongoDB database
- **Atlas-create-access-list**: Allow Ip/CIDR ranges to access your MongoDB Atlas clusters.
- **Atlas-create-cluster**: Create a MongoDB Atlas cluster (M10–M80, replica set or single shard, single or multi-region).
- **Atlas-create-db-user**: Create an MongoDB Atlas database user
- **Atlas-create-free-cluster**: Create a free MongoDB Atlas cluster
- **Atlas-create-project**: Create a MongoDB Atlas project
- **Atlas-get-performance-advisor** (read-only): Get MongoDB Atlas performance advisor recommendations and suggestions, which includes the operations.
- **Atlas-inspect-access-list** (read-only): Inspect Ip/CIDR ranges with access to your MongoDB Atlas clusters.
- **Atlas-inspect-cluster** (read-only): Inspect metadata of a MongoDB Atlas cluster
- **Atlas-list-alerts** (read-only): List triggered alerts for a MongoDB Atlas project.
- **Atlas-list-clusters** (read-only): List MongoDB Atlas clusters
- **Atlas-list-db-users** (read-only): List MongoDB Atlas database users
- **Atlas-list-orgs** (read-only): List MongoDB Atlas organizations
- **Atlas-list-projects** (read-only): List MongoDB Atlas projects.
- **Atlas-load-sample-dataset**: Load a MongoDB sample dataset into an Atlas cluster, or check the status of a previously-initiated load.
- **Atlas-pause-resume-cluster**: Pause or resume a dedicated (M10+) MongoDB Atlas cluster (Free and Flex clusters cannot be paused).
- **Atlas-streams-build**: Create Atlas Stream Processing resources.
- **Atlas-streams-discover** (read-only): Discover and inspect Atlas Stream Processing resources.
- **Atlas-streams-manage**: Manage Atlas Stream Processing resources.
- **Atlas-streams-teardown**: Delete Atlas Stream Processing resources.
- **Atlas-upgrade-cluster**: Upgrade a MongoDB Atlas cluster tier.
- **Collection-indexes** (read-only): Describe the indexes for a collection
- **Collection-schema** (read-only): Describe the schema for a collection
- **Collection-storage-size** (read-only): Gets the size of the collection
- **Count** (read-only): Gets the number of documents in a MongoDB collection using db.collection.count() and query as an optional filter parameter
- **Create-collection**: Creates a new collection in a database.
- **Create-index**: Create an index for a collection
- **Db-stats** (read-only): Returns statistics that reflect the use state of a single database
- **Delete-many**: Removes all documents that match the filter from a MongoDB collection
- **Drop-collection**: Removes a collection or view from the database.
- **Drop-database**: Removes the specified database, deleting the associated data files
- **Drop-index**: Drop an index for the provided database and collection.
- **Explain** (read-only): Returns statistics describing the execution of the winning plan chosen by the query optimizer for the evaluated method
- **Find** (read-only): Run a find query against a MongoDB collection
- **Insert-many**: Insert an array of documents into a MongoDB collection.
- **List-collections** (read-only): List all collections for a given database
- **List-databases** (read-only): List all databases for a MongoDB connection
- **Remote-atlas-connect** (read-only): Connect to MongoDB Atlas cluster
- **Rename-collection**: Renames a collection in a MongoDB database
- **Update-many**: Updates all documents that match the specified filter for a collection.
