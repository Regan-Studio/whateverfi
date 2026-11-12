# Twitter

Twitter, Inc. was an American social media company based in San Francisco, California, which operated and was named for named for its flagship social media network prior to its rebrand as X.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/twitter/.

## Actions

- **Create a list**: Creates a new, empty list on x (formerly twitter), for which the provided name must be unique for the authenticated user.
- **Create a post**: Creates a tweet on twitter.
- **Delete list**: Permanently deletes a specified twitter list using its id, which must be owned by the authenticated user.
- **Delete tweet**: Irreversibly deletes a specific tweet by its id.
- **Follow a user**: Allows an authenticated user (path id) to follow another user (target user id), which results in a pending request if the target user's…
- **Get authenticated user** (read-only): Returns profile information for the currently authenticated x user, customizable via request fields.
- **Get users blocked by user ID** (read-only): Retrieves user objects for accounts blocked by the specified user id.
- **Look up user by username** (read-only): Fetches public profile information for a valid and existing twitter user by their username, optionally expanding related data like pinned…
- **Search recent tweets** (read-only): Searches tweets from the last 7 days matching a query (using x's search syntax), ideal for real-time analysis, trend monitoring, or…
- **Unfollow user**: Allows the authenticated source user id to unfollow an existing twitter user (target user id), which removes the follow relationship.
- **Add a list member**: Adds a user to a specified twitter list.
- **Add post to bookmarks**: Adds a specified, existing, and accessible tweet to a user's bookmarks, with success indicated by the 'bookmarked' field in the response.
- **Create compliance job**: Creates a new compliance job to check the status of tweet or user ids.
- **Create group DM conversation**: Creates a new group direct message (dm) conversation on twitter with specified participant ids and an initial message, which can include…
- **Delete direct message**: Permanently deletes a specific twitter direct message (dm) event using its event id if the authenticated user sent it.
- **Fetch list members by id** (read-only): Fetches members of a specific twitter list, identified by its unique id.
- **Fetch OpenAPI specification** (read-only): Fetches the openapi specification (json) for twitter's api v2, used to programmatically understand the api's structure for developing…
- **Fetch recent tweet counts** (read-only): Retrieves the count of tweets matching a specified search query within the last 7 days, aggregated by 'minute', 'hour', or 'day'.
- **Fetch space ticket buyers list** (read-only): Retrieves a list of users who purchased tickets for a specific, valid, and ticketed twitter space.
- **Fetch tweet usage data** (read-only): Fetches tweet usage statistics for a project (e.g., consumption, caps, daily breakdowns for project & client apps) to monitor api limits.
- **Follow a list**: Allows the authenticated user (id) to follow a specific twitter list (list id) they are permitted to access, subscribing them to the…
- **Get a user's list memberships** (read-only): Retrieves all twitter lists a specified user is a member of, including public lists and private lists the authenticated user is authorized…
- **Get a user's owned lists** (read-only): Call this action to retrieve lists created (owned) by a specific twitter user, not lists they follow or are subscribed to.
- **Get a user's pinned lists** (read-only): Retrieves the lists a specific, existing twitter user has pinned to their profile to highlight them.
- **Get bookmarks by user** (read-only): Retrieves tweets bookmarked by the authenticated user, where the provided user id must match the authenticated user's id.
- **Get DM events by ID** (read-only): Fetches a specific direct message (dm) event by its unique id, allowing optional expansion of related data like users or tweets.
- **Get DM events for a DM conversation** (read-only): Fetches direct message (dm) events for a one-on-one conversation with a specified participant id, ordered chronologically newest to oldest.
- **Get followers by user id** (read-only): Retrieves a list of users who follow a specified public twitter user id.
- **Get following by user ID** (read-only): Retrieves users followed by a specific twitter user, allowing pagination and customization of returned user and tweet data fields via…
- **Get full archive search counts** (read-only): Returns a count of tweets from the full archive that match a specified query, aggregated by day, hour, or minute.
- **Get list followers** (read-only): Fetches a list of users who follow a specific twitter list, identified by its id.
- **Get muted users** (read-only): Returns user objects muted by the x user identified by the id path parameter.
- **Get post retweeters** (read-only): Retrieves users who publicly retweeted a specified public post id, excluding quote tweets and retweets from private accounts.
- **Get recent direct message events** (read-only): Returns recent direct message events for the authenticated user, such as new messages or changes in conversation participants.
- **Get space information by IDs** (read-only): Fetches detailed information for one or more twitter spaces (live, scheduled, or ended) by their unique ids.
- **Get spaces by creator IDs** (read-only): Retrieves twitter spaces created by a list of specified user ids, with options to customize returned data fields.
- **Get tweets by IDs** (read-only): Retrieves detailed information for one or more posts (tweets) identified by their unique ids, allowing selection of specific fields and…
- **Get tweets label stream** (read-only): Establishes a persistent stream of real-time events for when tweet labels are applied or removed, offering insights into content…
- **Get user reverse chronological timeline** (read-only): Retrieves the home timeline/feed for a specified twitter user, showing tweets from accounts they follow - not their own posts - in reverse…
- **Get user's followed lists** (read-only): Returns metadata (not tweets) for lists a specific twitter user follows, optionally including expanded owner details.
- **Like a tweet**: Allows the authenticated user (id) to like a specific, accessible tweet (tweet id), provided neither user has blocked the other and the…
- **List post likers** (read-only): Retrieves users who have liked the post (tweet) identified by the provided id.
- **List posts timeline by list ID** (read-only): Fetches the most recent tweets posted by members of a specified twitter list.
- **Look up post by id** (read-only): Fetches comprehensive details for a single tweet by its unique id, provided the tweet exists and is accessible.
- **Look up space by ID** (read-only): Retrieves details for a twitter space by its id, allowing for customization and expansion of related data, provided the space id is valid…
- **Look up user by ID** (read-only): Retrieves detailed public information for a twitter user by their id, optionally expanding related data (e.g., pinned tweets) and…
- **Look up users by IDs** (read-only): Retrieves detailed information for specified x (formerly twitter) user ids, optionally customizing returned fields and expanding related…
- **Look up users by username** (read-only): Retrieves detailed information for 1 to 100 twitter users by their usernames (each 1-15 alphanumeric characters/underscores), allowing…
- **Lookup list by ID** (read-only): Returns metadata for a specific twitter list, identified by its id.
- **Mute user by ID**: Mutes a target user on behalf of an authenticated user, preventing the target's tweets and retweets from appearing in the authenticated…
- **Pin a list**: Pins a specified list to the authenticated user's profile, provided the list exists, the user has access rights, and the pin limit…
- **Remove a bookmarked post**: Removes a tweet, specified by tweet id, from the authenticated user's bookmarks.
- **Remove a list member**: Removes a user from a twitter list.
- **Retrieve compliance job by id** (read-only): Retrieves status, download/upload urls, and other details for an existing twitter compliance job specified by its unique id.
- **Retrieve compliance jobs** (read-only): Returns a list of recent compliance jobs, filtered by type (tweets or users) and optionally by status.
- **Retrieve DM conversation events** (read-only): Retrieves direct message (dm) events for a specific conversation id on twitter, useful for analyzing messages and participant activities.
- **Retrieve liked tweets by user ID** (read-only): Retrieves tweets liked by a specified twitter user, provided their liked tweets are public or accessible.
- **Retrieve posts from a space** (read-only): Retrieves tweets from a specified twitter space id.
- **Retrieve posts that quote a post** (read-only): Retrieves tweets that quote a specified tweet, requiring a valid tweet id.
- **Retrieve retweets of a post** (read-only): Retrieves tweets that retweeted a specified public or authenticated-user-accessible tweet id, optionally customizing the response with…
- **Retweet post**: Retweets a tweet (tweet id) for a given user (id), provided the tweet is public (or user follows if protected), not already retweeted by…
- **Search for spaces** (read-only): Searches for twitter spaces by a textual query, optionally filtering by state (live, scheduled, all) to discover audio conversations.
- **Search full archive of tweets** (read-only): Searches the full archive of public tweets from march 2006 onwards.
- **Send a new message to a DM conversation**: Sends a message, with optional text and/or media attachments (using pre-uploaded media ids), to a specified twitter direct message…
- **Send a new message to a user**: Sends a new direct message with text and/or media (media id for attachments must be pre-uploaded) to a specified twitter user.
- **Set reply visibility**: Hides or unhides an existing reply tweet.
- **Unfollow a list**: Enables a user (via id) to unfollow a specific twitter list (via list id), which removes its tweets from their timeline and stops related…
- **Unlike post**: Allows an authenticated user (id) to remove their like from a specific post (tweet id).
- **Unmute a user by user ID**: Unmutes a target user id for the source user id (authenticated user), allowing the source user to see tweets and notifications from the…
- **Unpin a list**: Unpins a list (specified by list id) from a user's profile (specified by id), provided the list is currently pinned by that user.
- **Unretweet post**: Removes a user's retweet of a specified post, if the user had previously retweeted it.
- **Update list attributes**: Updates an existing twitter list's name, description, or privacy status, requiring the list id and at least one mutable property.
