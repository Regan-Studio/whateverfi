# YouTube

YouTube is a video-sharing platform with user-generated content, live streaming, and monetization opportunities, widely used for marketing, education, and entertainment

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/youtube/.

## Actions

- **List captions** (read-only): Retrieves a list of caption tracks for a youtube video, returning an empty list if no captions exist or failing if the video id is invalid…
- **Update thumbnail**: Sets the custom thumbnail for a youtube video using an image from thumbnailurl.
- **Download YouTube caption track** (read-only): Downloads a specific youtube caption track, which must be owned by the authenticated user, and returns its content as text.
- **Get Channel Activities** (read-only): Gets recent activities from a youtube channel including video uploads, playlist additions, likes, and other channel events.
- **Get channel ID by handle** (read-only): Retrieves the youtube channel id for a specific youtube channel handle.
- **Get Channel Statistics** (read-only): Gets detailed statistics for youtube channels including subscriber counts, view counts, and video counts.
- **List channel videos** (read-only): Lists videos from a specified youtube channel, ensuring results are of type.
- **List user playlists** (read-only): Retrieves playlists owned by the authenticated user, implicitly using mine=true.
- **List user subscriptions** (read-only): Retrieves the authenticated user's youtube channel subscriptions, allowing specification of response parts and pagination.
- **Search YouTube** (read-only): Searches youtube for videos, channels, or playlists using a query term, returning the raw api response.
- **Subscribe to channel**: Subscribes the authenticated user to a specified youtube channel, identified by its unique channelid which must be valid and existing.
- **Update video**: Updates metadata for a youtube video identified by videoid, which must exist.
- **Upload video**: Uploads a video from a local file path to a youtube channel.
- **Video details** (read-only): Retrieves specified information parts (e.g., snippet, contentdetails, statistics) for a youtube video, identified by its id.
