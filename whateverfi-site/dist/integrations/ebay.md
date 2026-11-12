# eBay

Access eBay public marketplace, taxonomy, notification, and developer APIs with application OAuth.

Category: Sales & CRM. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/ebay/.

## Actions

- **Analytics: Get Rate Limits** (read-only): Return application-level eBay API quota usage, remaining calls, and reset windows, optionally filtered by API context and name.
- **Browse: Check Compatibility** (read-only): Check whether an eBay Motors part is compatible with a supplied car, truck, or motorcycle definition without changing the item.
- **Browse: Get Item** (read-only): Retrieve complete details for one eBay listing or variation by either its RESTful item ID or legacy listing ItemID using an application…
- **Browse: Get Items** (read-only): Retrieve details for up to 20 eBay items or 10 item groups in one request.
- **Browse: Get Items By Item Group** (read-only): Retrieve every purchasable item variation and shared description in an eBay Browse item group.
- **Browse: Search** (read-only): Search eBay item summaries by keyword, category, product identifier, charity, compatibility, aspects, and Browse field filters, returning…
- **Browse: Search By Image** (read-only): Search eBay item summaries using a bare Base64-encoded image, optionally refine the matches, and return one page plus an opaque…
- **Charity: Get Charity Org** (read-only): Retrieve full details for one eBay-supported charitable organization by its charity organization ID.
- **Charity: Get Charity Orgs** (read-only): Search supported eBay charitable organizations by keywords or registration IDs, returning one page of complete organization details and an…
- **Deal: Get Deal Items** (read-only): Retrieve one page of eBay deal items by category, commissionable status, delivery country, and marketplace.
- **Deal: Get Event** (read-only): Retrieve the details of one eBay deal event by event ID, including its coupons, dates, terms, and images.
- **Deal: Get Event Items** (read-only): Return one page of eBay Deal event items for an event, with optional category and delivery-country filters plus an opaque continuation…
- **Deal: Get Events** (read-only): Return one page of eBay deal events for a marketplace, including coupons, event terms, images, and an opaque continuation cursor.
- **Feed: Get Item Feed** (read-only): Download one byte range of an eBay Item feed gzip file for a top-level category.
- **Feed: Get Item Group Feed** (read-only): Download an eBay Item Group feed gzip file, or an optional byte range, for a top-level category.
- **Feed: Get Item Priority Feed** (read-only): Download one byte range of an eBay Item Priority delta feed gzip file for a top-level category and date.
- **Feed: Get Item Snapshot Feed** (read-only): Download one byte range of an hourly eBay Item Snapshot feed gzip file for a top-level category and UTC hour.
- **Marketing: Get Merchandised Products** (read-only): Return eBay products selected by category and the BEST_SELLING metric, including catalog IDs, prices, images, reviews, and rating details.
- **Notification: Get Public Key** (read-only): Retrieve the eBay public key identified by a push notification signature for validating that notification's payload.
- **Notification: Get Topic** (read-only): Retrieve one eBay notification topic by ID, including its subscription scope requirements and supported payload configurations.
- **Notification: Get Topics** (read-only): Return one page of eBay notification topics, including subscription scope requirements, supported payload configurations, and a…
- **Taxonomy: Fetch Item Aspects** (read-only): Download the complete gzipped JSON item-aspect dataset for every leaf category in an eBay category tree.
- **Taxonomy: Get Category Suggestions** (read-only): Find ranked eBay leaf-category suggestions for free-form item keywords, including each category's ancestor path to the category-tree root.
- **Taxonomy: Get Category Tree** (read-only): Retrieve eBay's complete category tree when root_category_id is omitted, or retrieve the subtree rooted at root_category_id when it is…
- **Taxonomy: Get Compatibility Properties** (read-only): Retrieve the localized vehicle properties that define compatibility for an eBay parts category, such as Make, Model, Year, Engine, and Trim.
- **Taxonomy: Get Compatibility Property Values** (read-only): Retrieve the applicable values of one vehicle compatibility property for an eBay parts category, optionally narrowed by other…
- **Taxonomy: Get Default Category Tree ID** (read-only): Retrieve the identifier and version of the default eBay category tree for a marketplace.
- **Taxonomy: Get Expired Categories** (read-only): Retrieve mappings from expired eBay leaf categories to the active leaf categories that replaced them.
- **Taxonomy: Get Item Aspects for Category** (read-only): Retrieve complete eBay aspect metadata for a leaf category, including valid values, value dependencies, listing requirements, variation…
- **Translation: Translate** (read-only): Translate one eBay listing title or description from a supported source language to a supported target language without changing a listing.
