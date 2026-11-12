# SoundCloud

SoundCloud API provides access to a wide range of SoundCloud features for playing, uploading, and managing sounds.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/soundcloud/.

## Actions

- **Follows a user**: The /me/followings/{user_id} endpoint on SoundCloud is for following users by ID, secured with AuthHeader.
- **Returns a playlist** (read-only): This endpoint fetches a SoundCloud playlist using its playlist_id, with options for a secret token, access filters (like playable or…
- **Returns a user** (read-only): Fetch a SoundCloud user's details by user ID, including profile data, follower stats, and more.
- **Creates a playlist**: The /playlists POST endpoint on SoundCloud allows for playlist creation with title, description, mode, and tracks in a JSON body,…
- **Deletes a playlist**: Deletes a SoundCloud playlist by its ID, requiring authorization.
- **Deletes a track**: This endpoint allows deleting a specific SoundCloud track by its ID.
- **Deletes a user who is followed by the authenticated user**: Deletes a user who is followed by the authenticated user
- **Fetch soundcloud follower profile details** (read-only): Fetches SoundCloud user profile details (username, followers) for a user followed by an authenticated user.
- **Fetchuserfavorites** (read-only): The /me/likes/playlists endpoint lets authenticated users access their favorite playlists, supports pagination, and requires an AuthHeader.
- **Fetchuserfollowingdetails** (read-only): Returns (following_id) that is followed by (user_id).
- **Fetchuserprofileslinks** (read-only): Access a user's profile links (website, Facebook, Instagram) on SoundCloud by user ID.
- **Likes a playlist**: This API endpoint lets users like a SoundCloud playlist via POST, needing an AuthHeader and playlist ID.
- **Likes a track**: This endpoint enables users to like a track using POST, requiring AuthHeader and track_id.
- **Listauthenticateduserfollowers** (read-only): Fetches the list of followers for the authenticated user with options to limit results.
- **Listfollowedbyuser** (read-only): Returns a list of SoundCloud users followed by the authenticated user, with options for result limit and pagination.
- **Listuserfavorites** (read-only): This endpoint fetches a user's favored tracks with options for filtering and pagination.
- **Oauth2 authorization redirect handler** (read-only): OAuth Authorization Code flow is mandated for authorization, utilizing response_type=code.
- **Performs a playlist search based on a query** (read-only): This endpoint enables playlist searches on Soundcloud using filters such as query, access level, and more.
- **Performs a user search based on a query** (read-only): The /users endpoint on SoundCloud, requiring authentication, supports user searches with parameters like q, ids, limit, and uses…
- **Provisionaccesstokenspostauthorization**: The /oauth2/token endpoint issues access tokens to authorized apps, accepting two content types and requiring specific fields.
- **Recent the authenticated user s activities** (read-only): This API endpoint lets authenticated users fetch their SoundCloud activities, like songs and playlists, with filters for access level.
- **Recenttracksfromfollowedusers** (read-only): This endpoint lets authenticated users see recent tracks from followed users, offering filter by access level and pagination.
- **Removes a repost on a playlist as the authenticated user**: Removes a repost on a playlist as the authenticated user
- **Removes a repost on a track as the authenticated user**: Removes a repost on a track as the authenticated user
- **Reposts a playlist as the authenticated user**: This endpoint lets authenticated users repost SoundCloud playlists by ID, returning status codes for success (201), unauthorized (401),…
- **Reposts a track as the authenticated user**: This endpoint lets authenticated users repost tracks on SoundCloud, using track ID and AuthHeader.
- **Resolve soundcloud urls to api resource urls** (read-only): This endpoint translates SoundCloud URLs into API Resource URLs, requiring authentication and a url parameter.
- **Returns a collection of playlist s reposters** (read-only): This endpoint fetches users reposting a SoundCloud playlist using a playlist ID, offering pagination and detailed user profiles.
- **Returns a collection of track s reposters** (read-only): This endpoint fetches users reposting a SoundCloud track.
- **Returns a list of the current user s tracks** (read-only): This endpoint fetches the user's tracks with options for limiting results and pagination, requiring authentication.
- **Returns a list of user s followers** (read-only): Returns a list of users that follows (user_id).
- **Returns a list of user s followings** (read-only): Returns list of users that (user_id) follows.
- **Returns a list of user s liked playlists** (read-only): This endpoint fetches liked playlists for a specified user_id on SoundCloud, supports pagination, and requires authentication.
- **Returns a list of user s liked tracks** (read-only): This endpoint retrieves a SoundCloud user's liked tracks, filtered by access level (playable, preview, blocked), with optional result…
- **Returns a list of user s playlists** (read-only): Fetches a SoundCloud user's playlists by user ID, with options to filter by track access level, include/exclude tracks, and specify result…
- **Returns a list of user s tracks** (read-only): Get a user's track collection on SoundCloud by their user ID, including options for filtering by track access level, specifying result…
- **Returns a list of users who have favorited or liked the track** (read-only): Returns a list of users who have favorited or liked the track
- **Returns a track** (read-only): Fetches details of a specific SoundCloud track using its ID, including metadata like title, genre, and artist info.
- **Returns a track s streamable urls** (read-only): This endpoint returns streamable URLs for a specific SoundCloud track given its track_id.
- **Returns all related tracks of track on SoundCloud** (read-only): Returns all related tracks of track on SoundCloud
- **Returns the authenticated user s activities** (read-only): The /me/activities endpoint lets authenticated users access their SoundCloud activities (tracks, playlists) based on access level,…
- **Returns the authenticated user s information** (read-only): This endpoint ("/me") supports GET requests to access user info such as avatar, location, and follower stats with "AuthHeader" needed for…
- **Returns the comments posted on the track track id** (read-only): This endpoint retrieves comments for a specified track on SoundCloud using track_id.
- **Returns tracks under a playlist** (read-only): This endpoint retrieves tracks in a given SoundCloud playlist, specified by playlist_id.
- **Returns user s playlists sets** (read-only): Returns playlist info, playlist tracks and tracks owner info.
- **Unlikes a playlist**: Authenticated users can remove a "like" from a SoundCloud playlist by sending a DELETE request to /likes/playlists/{playlist_id}.
- **Unlikes a track**: Endpoint /likes/tracks/{track_id} allows unauthorized liking of a track, requiring AuthHeader.
- **Updates a playlist**: Update existing playlists on SoundCloud by specifying a playlist ID.
- **Updates a track s information**: Update a track's details on SoundCloud by PUT method at '/tracks/{track_id}'.
- **Uploads a new track**: This endpoint enables secure track uploads, requiring track title and asset data.
- **Userrecenttrackactivities** (read-only): This Soundcloud API endpoint fetches recent user tracks, reposts, and playlist adds, allowing access level filtering and result count…
