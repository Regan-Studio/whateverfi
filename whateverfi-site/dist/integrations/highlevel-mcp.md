# HighLevel MCP

HighLevel MCP lets authorized agents work with contacts, conversations, calendars, opportunities, and other location-scoped HighLevel resources.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/highlevel-mcp/.

## Actions

- **Blogs check-url-slug-exists** (read-only): Validates whether a URL slug is available for a blog post before publishing.
- **Blogs create-blog-post**: Creates a new blog post for a blog site with comprehensive content and metadata.
- **Blogs get-all-blog-authors-by-location** (read-only): Retrieves all blog authors for a specific location with pagination support.
- **Blogs get-all-categories-by-location** (read-only): Retrieves all blog categories for a specific location with pagination support.
- **Blogs get-blog-post** (read-only): Retrieves blog posts for a specific blog site using blog ID with filtering and pagination.
- **Blogs get-blogs** (read-only): Retrieves a list of blog sites for a location with pagination and search support.
- **Blogs update-blog-post**: Modifies an existing blog post including content, metadata, categories, tags, and publication settings.
- **Calendars get-appointment-notes** (read-only): Retrieves notes associated with a specific appointment.
- **Calendars get-calendar-events** (read-only): Retrieves calendar events and appointments within a specified time range.
- **Contacts add-tags**: Adds one or more tags to an existing contact record.
- **Contacts create-contact**: Creates a new contact record in the CRM with personal and business information.
- **Contacts get-all-tasks** (read-only): Retrieves all tasks associated with a specific contact.
- **Contacts get-contact** (read-only): Retrieves detailed contact information by contact ID.
- **Contacts get-contacts** (read-only): Retrieves a list of contacts with pagination support.
- **Contacts remove-tags**: Removes specified tags from a contact record.
- **Contacts update-contact**: Modifies existing contact information in the CRM.
- **Contacts upsert-contact**: Creates a new contact or updates an existing contact based on duplicate detection settings.
- **Conversations get-messages** (read-only): Retrieves messages from a specific conversation with optional filtering by message type.
- **Conversations search-conversation** (read-only): Searches conversations using multiple filters including contact, assigned user, followers, mentions, status, message type, and date range.
- **Conversations send-a-new-message**: Sends a new message to a contact through various channels including SMS, Email, WhatsApp, Instagram, Facebook, Custom, or Live Chat.
- **Emails create-template**: Creates a new email template with various types including HTML, builder, blank, folder, or imported templates.
- **Emails fetch-template** (read-only): Retrieves email templates for a location with advanced filtering and pagination.
- **Locations get-custom-fields** (read-only): Retrieves custom fields for a location with optional filtering by model type.
- **Locations get-location** (read-only): Retrieves detailed information for a sub-account (formerly location) by location ID.
- **Opportunities get-opportunity** (read-only): Retrieves detailed information for a specific opportunity by opportunity ID.
- **Opportunities get-pipelines** (read-only): Retrieves all sales pipelines for a location.
- **Opportunities search-opportunity** (read-only): Searches and filters opportunities in the sales pipeline using multiple criteria.
- **Opportunities update-opportunity**: Modifies an existing opportunity in the sales pipeline.
- **Payments get-order-by-id** (read-only): Retrieves detailed information for a specific order using its unique order ID.
- **Payments list-transactions** (read-only): Retrieves a paginated list of transactions with comprehensive filtering options.
- **Social-media-posting create-post**: Creates a new social media post for multiple platforms.
- **Social-media-posting edit-post**: Modifies an existing social media post including content, media, scheduling, and platform-specific settings.
- **Social-media-posting get-account** (read-only): Retrieves a list of connected social media accounts and groups for a location.
- **Social-media-posting get-post** (read-only): Retrieves detailed information for a specific social media post by post ID.
- **Social-media-posting get-posts**: Retrieves social media posts with advanced filtering and pagination.
- **Social-media-posting get-social-media-statistics**: Retrieve analytics data for multiple social media accounts.
