# Iterate

Iterate is a customer feedback platform for distributing surveys, analyzing responses, and managing company user privacy data.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/iterate/.

## Actions

- **Add Survey Recipient**: Add one email recipient to a survey for a later send without sending the survey now.
- **Anonymize Company User**: Irreversibly remove one Iterate user's email and attributes while retaining survey responses.
- **Bulk Anonymize Company Users**: Irreversibly remove identifying data from every Iterate company user matching at least one explicit email, external-ID, or typed…
- **Bulk Delete Company User Data**: Permanently delete every matching Iterate company user and all matching users' survey responses using explicit non-empty selectors.
- **Delete Company User Data**: Permanently delete one Iterate user object and all of that user's survey responses.
- **Get Survey** (read-only): Return one survey's configuration and questions by survey ID.
- **Get Survey Stats** (read-only): Return delivery, display, response-count, and response-rate statistics for one survey.
- **Import Survey Recipients**: Add a non-empty batch of email recipients to a survey without sending it, and return duplicate, failure, and success counts.
- **List Survey Response Groups** (read-only): Return one reverse-chronological page of completed survey submissions grouped by user, plus a continuation cursor.
- **List Survey Responses** (read-only): Return one reverse-chronological page of individual answers for a survey, with an optional date range and continuation cursor.
- **List Surveys** (read-only): Return all surveys available to the connected Iterate API key, including the survey and company IDs needed by other tools.
- **Search Company Users** (read-only): Find one user in the connected Iterate company by email, external ID, or one typed user property and return survey participation totals.
- **Send Survey**: Irreversibly send or schedule an email survey to one specified recipient or every previously added recipient.
