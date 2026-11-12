# Google Calendar

Google Calendar is a time management tool providing scheduling features, event reminders, and integration with email and other apps for streamlined organization

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/googlecalendar/.

## Actions

- **Create a calendar**: Creates a new, empty google calendar with the specified title (summary).
- **Create Event**: Creates an event on a google calendar, needing rfc3339 utc start/end times (end after start) and write access to the calendar.
- **Delete Calendar**: Deletes a secondary calendar.
- **Delete event**: Deletes a specified event by event id from a google calendar (calendar id).
- **Find event** (read-only): Finds events in a specified google calendar using text query, time ranges (event start/end, last modification), and event types.
- **Get Event Instances** (read-only): Returns instances of the specified recurring event.
- **Get Google Calendar** (read-only): Retrieves a specific google calendar, identified by calendar id, to which the authenticated user has access.
- **Insert Calendar into List**: Inserts an existing calendar into the user's calendar list.
- **Patch Calendar**: Partially updates (patches) an existing google calendar, modifying only the fields provided.
- **Patch Event**: Updates specified fields of an existing event in a google calendar using patch semantics (array fields like attendees are fully replaced…
- **Query Free/Busy Information** (read-only): Returns free/busy information for a set of calendars.
- **Sync Events** (read-only): Synchronizes google calendar events, performing a full sync if no sync token is provided or if a 410 gone error (due to an expired token)…
- **Update Calendar**: Updates metadata for a calendar.
- **Update Google event**: Updates an existing event by event id in a google calendar.
- **Clear Calendar**: Clears a primary calendar.
- **Find free slots** (read-only): Finds free/busy time slots in google calendars for specified calendars within a defined time range (defaults to the current day utc if…
- **Get current date and time** (read-only): Gets the current date and time, allowing for a specific timezone offset.
- **List ACL Rules** (read-only): Retrieves the list of access control rules (acls) for a specified calendar, providing the necessary 'rule id' values required for updating…
- **List Events** (read-only): Returns events on the specified calendar.
- **List Google Calendars** (read-only): Retrieves calendars from the user's google calendar list, with options for pagination and filtering.
- **List Settings** (read-only): Returns all user settings for the authenticated user.
- **Move Event**: Moves an event to another calendar, i.e., changes an event's organizer.
- **Quick Add Event**: Parses natural language text to quickly create a basic google calendar event with its title, date, and time, suitable for simple scheduling.
- **Remove attendee from event**: Removes an attendee from a specified event in a google calendar.
- **Update ACL Rule**: Updates an access control rule for the specified calendar.
- **Update Calendar List Entry**: Updates an existing entry on the user\'s calendar list.
- **Watch Events**: Watch for changes to events resources.
- **Watch Settings**: Watch for changes to settings resources.
