# AdRoll

AdRoll is a digital marketing platform for managing advertising campaigns, audiences, account-based marketing, and performance reporting.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/adroll/.

## Actions

- **Create Ad**: Create an ad for an advertisable, optionally creating nested assets that do not have EIDs in the same operation.
- **Create Adgroup**: Create a web-retargeting adgroup under a Campaign v3 campaign.
- **Create Advertisable**: Create an advertisable in an organization owned by the connected account.
- **Create Asset**: Create an asset.
- **Create Campaign**: Create a web-retargeting campaign under a Campaign v3 strategy.
- **Create Marketplace Mapping**: Create a marketplace-to-merchant mapping.
- **Create Rule**: Create a pixel rule.
- **Create Segment**: Create one audience segment for an advertiser and seed it with user identifiers.
- **Create Strategy**: Create a Campaign v3 strategy under an advertisable.
- **Delete Segment**: Delete one existing audience segment.
- **Edit Advertisable**: Edit the name, URL, or country code of an accessible advertisable.
- **Get Ad** (read-only): Retrieve an ad by its Ad API resource eid, not its Reporting adroll_ad_eid.
- **Get Adgroup** (read-only): Fetch one Campaign v3 adgroup by EID.
- **Get Adgroup Geotargets** (read-only): Fetch a Campaign v3 adgroup and return only its geotarget configuration.
- **Get Advertisable** (read-only): Fetch an advertisable by EID.
- **Get Advertisable Pixel** (read-only): Fetch the active pixel for an accessible advertisable.
- **Get Asset** (read-only): Retrieve an asset by its EID.
- **Get Campaign** (read-only): Fetch one Campaign v3 campaign by advertisable and campaign EID.
- **Get Consent Banner** (read-only): Fetch an advertisable's consent banner state.
- **Get Cross-Device Opt-In** (read-only): Retrieve an accessible advertisable's cross-device graph opt-in setting.
- **Get Current Organization** (read-only): Return the connected account's current organization from Reporting GraphQL, including nested advertisables.
- **Get Marketplace Mappings** (read-only): Retrieve marketplace mappings for a parent marketplace advertisable and child merchant advertisable.
- **Get Pixel** (read-only): Fetch a pixel by EID.
- **Get Pixel Segments** (read-only): Fetch segments associated with a pixel.
- **Get Rule** (read-only): Fetch a rule by EID, including its generated segments when returned.
- **Get Rule Segments** (read-only): Fetch the segments associated with a specific rule.
- **Get Segment** (read-only): Return one audience segment, optionally including general-exclusion attributes or an inactive segment.
- **Get Strategy** (read-only): Fetch one Campaign v3 strategy by EID.
- **List Adgroups** (read-only): Return Reporting GraphQL adgroups for one campaign.
- **List Ads** (read-only): Retrieve one numbered page of ads for an advertisable, or set all='true' to request all matching ads.
- **List Advertisables** (read-only): Fetch one numbered page of advertisables associated with an organization.
- **List Assets** (read-only): Retrieve one numbered page of assets belonging to an advertisable.
- **List Campaigns** (read-only): Return Reporting GraphQL campaigns for one advertisable.
- **List Segments** (read-only): Return audience segments for an advertiser, optionally filtered by segment type.
- **List Strategies** (read-only): Return strategies for an advertisable.
- **Query Reporting Adgroups** (read-only): Query adgroups by campaign, advertisable, one EID, or many EIDs with nested relations and optional date/currency metrics.
- **Query Reporting Ads** (read-only): Query ads by adgroup, advertisable, or Reporting EIDs (adroll_ad_eid from the Ad API), with optional date/currency metrics.
- **Query Reporting Advertisables** (read-only): Query advertisables by user, organization, one EID, or many EIDs with nested relations and optional date/currency metrics.
- **Query Reporting Campaigns** (read-only): Query campaigns by advertisable, organization, one EID, or many EIDs with nested relations and optional date/currency metrics.
- **Query Reporting Organizations** (read-only): Query the current AdRoll organization or organizations by one or many EIDs, including nested advertisables.
- **Query Reporting Segments** (read-only): Query direct segment metadata or parent-scoped campaign/adgroup audiences with relationship state and optional date-scoped audience-size…
- **Run Performance Report** (read-only): Return current AdRoll GraphQL delivery metrics for advertisables, campaigns, adgroups, or ads, optionally with attribution metrics, as an…
- **Run Reporting GraphQL Query** (read-only): Execute one AdRoll Reporting GraphQL document and preserve complete or partial provider data, errors, request ID, and version.
- **Search Geotargets** (read-only): Search AdRoll geotargets by a location-name prefix and optional types.
- **Set Campaign Status**: Pause or activate one campaign through the Campaign v3 edit operation.
- **Update Adgroup**: Edit one web-retargeting or web-prospecting Campaign v3 adgroup.
- **Update Campaign**: Edit one Campaign v3 campaign.
- **Update Consent Banner**: Create or update an advertisable's consent banner configuration.
- **Update Cross-Device Opt-In**: Update an accessible advertisable's cross-device graph opt-in setting.
- **Update Segment**: Update audience-segment information and submit its user-record payload.
- **Update Strategy**: Edit a Campaign v3 strategy using a caller-provided complete campaign set.
