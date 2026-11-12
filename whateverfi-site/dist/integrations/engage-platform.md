# Engage Platform

Engage Platform provides customer data, account, list, event, batch, and transactional messaging APIs for customer engagement workflows.

Category: Marketing. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/engage-platform/.

## Actions

- **Add User to Accounts**: Add a customer to one or more Engage accounts, optionally assigning a role in each account.
- **Add User to Lists**: Add and subscribe an existing user to one or more Engage lists.
- **Archive List**: Archive a list so it disappears from list results and cannot receive new subscribers.
- **Create List**: Create an Engage user list and return its Engage list ID for subscription tools.
- **Create User**: Create an Engage customer or account with a caller-chosen application UID.
- **Delete User Attribute**: Permanently remove one custom meta attribute from a user.
- **Get List** (read-only): Retrieve an Engage list by its internal list ID.
- **Get User** (read-only): Retrieve one Engage customer or account by its caller-supplied application UID, not Engage's internal ID.
- **List Account Members** (read-only): List customers belonging to one Engage account identified by its application UID.
- **List Lists** (read-only): Return one cursor-controlled page of active Engage user lists.
- **List Users** (read-only): Return one cursor-controlled page of Engage customers and accounts, optionally filtered by exact email.
- **Remove List Subscriber**: Completely remove one user's membership from one Engage list.
- **Remove User From Account**: Permanently remove one customer's membership from one Engage account.
- **Set Account Member Role**: Set or replace a customer's role in one Engage account membership.
- **Set List Subscription**: Subscribe, resubscribe, or unsubscribe an existing user on one Engage list.
- **Track User Event**: Append an immutable event to a user's Engage activity history.
- **Update List**: Update supplied settings on an existing Engage list without changing unspecified fields.
- **Upsert User**: Update profile or custom attributes for an application UID, creating the user if it does not exist.
