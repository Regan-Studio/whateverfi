# Judge.me

Judge.me helps online stores collect, manage, and display product and shop reviews.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/judge-me/.

## Actions

- **Bulk Create Webhooks**: Create multiple webhook subscriptions in one request.
- **Bulk Update Review Visibility**: Sequentially publish, hide, archive, or unarchive 1-25 reviews.
- **Count Reviews** (read-only): Count management review records, optionally filtered by reviewer, product, and star rating.
- **Count Storefront Reviews** (read-only): Return the storefront aggregate review count for either all product and shop-level reviews or only shop-level reviews.
- **Create Checkout Comment**: Persist a customer's comment for a product through Judge.me's documented Checkout Comments operation.
- **Create or Update Reviewer**: Create or update a reviewer selected by Judge.me ID, external commerce ID, or email.
- **Create Private Review Reply**: Create a private reply to a review and, by default, email it to the reviewer.
- **Create Public Review Reply**: Post a public reply to a review and optionally email it to the reviewer.
- **Create Review**: Submit a public web review in the background.
- **Create Webhook**: Create one webhook subscription for a Judge.me event and callback URL.
- **Delete Webhook**: Delete the webhook subscription matching its current Judge.me event key and callback URL.
- **Get All Reviews Page Widget** (read-only): Return rendered HTML for one page of the shop's all-reviews page.
- **Get Checkout Comments Widget** (read-only): Return rendered Checkout Comments widget HTML for one product.
- **Get Current Shop** (read-only): Return identity, plan, platform, owner, and widget metadata for the OAuth-connected shop.
- **Get Featured Reviews Carousel** (read-only): Return the rendered HTML for the shop's featured-reviews carousel.
- **Get Product** (read-only): Return a product by Judge.me internal ID, external commerce-platform ID, or product handle.
- **Get Product Preview Badge** (read-only): Return the rendered rating-and-review-count badge HTML for one product.
- **Get Product Review Widget** (read-only): Return the rendered review-widget HTML for one product and, optionally, one review page.
- **Get Review** (read-only): Return one review by its Judge.me internal ID.
- **Get Reviewer** (read-only): Return a reviewer by Judge.me internal ID, external commerce-platform ID, or email address.
- **Get Reviews Rating** (read-only): Return the average rating for all product and shop-level reviews or for shop-level reviews only.
- **Get Reviews Tab Widget** (read-only): Return the rendered floating reviews-tab HTML for a selected review type and page.
- **Get Settings** (read-only): Return values for one or more named Judge.me shop settings.
- **Get Verified Reviews Badge** (read-only): Return the rendered verified-review-count badge, or null when the shop has fewer than 20 verified reviews.
- **Get Webhook** (read-only): Return one webhook subscription by its Judge.me internal ID.
- **Get Widget Placeholder HTML** (read-only): Return the rendered placeholder HTML used before Judge.me widget JavaScript and CSS load.
- **Get Widget Settings HTML** (read-only): Return the shop's rendered widget customization script and style HTML, not structured setting values.
- **List Reviews** (read-only): Return one page of reviews, optionally filtered by reviewer, product, rating, published-only state, or reviewer email.
- **List Webhooks** (read-only): Return all webhook subscriptions configured for the connected shop.
- **Request Reviewer Data**: Submit a reviewer data request for a customer email and one or more external order IDs.
- **Uninstall Shop**: WARNING.
- **Update Current Shop**: Update selected profile and commerce metadata for the OAuth-connected shop.
- **Update Review Visibility**: Publish, hide, archive, or unarchive a review.
- **Update Webhook**: Replace a webhook subscription's event key and callback URL.
