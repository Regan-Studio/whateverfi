# GoTable

GoTable provides restaurant reservation, guest, offer, table, availability, and webhook management through its REST API.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/go-table/.

## Actions

- **Cancel Reservation**: Irreversibly cancel a finalized reservation or reject a pending reservation.
- **Create Reservation**: Create a reservation or walk-in.
- **Create Reservation Note**: Attach an HTML note to a reservation under an account that has access to the restaurant.
- **Get Availability** (read-only): Return restaurant-wide availability, or availability for one offer when offer_id is provided, over a date range of at most three months.
- **Get Guest** (read-only): Return one guest profile by restaurant and guest ID.
- **Get Offer** (read-only): Return one booking offer by restaurant and offer ID.
- **Get Reservation** (read-only): Return one reservation by restaurant and reservation ID.
- **Get Restaurant** (read-only): Return details for one accessible restaurant by ID.
- **Get Table** (read-only): Return one physical table by restaurant and table ID.
- **Get Table Combination** (read-only): Return one configured table combination by restaurant and combination ID.
- **List Guests** (read-only): Return one page of restaurant guests, optionally filtered with GoTable's guest search syntax.
- **List Offers** (read-only): Return one page of booking offers configured for a restaurant.
- **List Reservation Notes** (read-only): Return all notes attached to one reservation.
- **List Reservations** (read-only): Return one page of reservations for a restaurant, optionally filtered with GoTable's reservation search syntax.
- **List Restaurant Accounts** (read-only): Return one page of user accounts that can access a restaurant, including IDs usable as reservation-note authors.
- **List Restaurants** (read-only): Return one page of restaurants accessible to the connected GoTable account.
- **List Table Combinations** (read-only): Return one page of configured table combinations for a restaurant.
- **List Tables** (read-only): Return one page of physical tables configured for a restaurant.
- **Update Reservation**: Update selected details of an existing reservation, including its schedule, party, guest data, comments, duration, or table assignment.
