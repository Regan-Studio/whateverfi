# Adafruit IO

Adafruit IO is a cloud platform for storing, visualizing, and acting on data from connected devices and Internet of Things projects.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/adafruit-io/.

## Actions

- **Add Feeds to Group**: Sequentially add 1-10 existing feeds to one group using one documented provider request per feed.
- **Create Dashboard**: Create a dashboard for visualizing and controlling feed data.
- **Create Feed**: Create a feed, optionally within an existing group.
- **Create Group**: Create a group for organizing feeds.
- **Delete Dashboard**: Permanently delete one dashboard by exact key.
- **Delete Data Point**: Permanently delete one feed data point by ID.
- **Delete Data Points**: Permanently delete 1-30 feed data points sequentially through Adafruit IO's single-data-point DELETE endpoint, bounded by the Free-plan…
- **Delete Feed**: Permanently delete one feed and its retained data by exact feed key.
- **Delete Group**: Permanently delete one group by exact key.
- **Get Account Status** (read-only): Return compact identity, plan limits, and current data-write throttle usage for the connected Adafruit IO account.
- **Get Dashboards** (read-only): List dashboards, or retrieve one dashboard and its blocks by key.
- **Get Data Point** (read-only): Retrieve one feed data point by its exact ID.
- **Get Feeds** (read-only): List feeds, or retrieve one feed by key with optional data summary details.
- **Get Groups** (read-only): List groups with feed summaries, or retrieve one group by key.
- **List Feed Data** (read-only): Return one newest-first page of feed data with an opaque cursor for the next older page.
- **Publish Feed Data**: Publish one or multiple timestamped values to a feed, using the batch endpoint only when multiple points are supplied.
- **Remove Feeds from Group**: Sequentially remove 1-10 feeds from one group using one documented provider request per feed.
- **Update Dashboard**: Update an existing dashboard by exact dashboard key.
- **Update Data Point**: Replace the value and optional metadata of one existing feed data point.
- **Update Feed**: Update an existing feed by exact feed key.
- **Update Group**: Update an existing group by exact group key.
