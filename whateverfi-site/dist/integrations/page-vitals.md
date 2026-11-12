# PageVitals

PageVitals provides website performance monitoring, synthetic testing, real-user monitoring reports, performance budgets, and optimization insights.

Category: Data. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/page-vitals/.

## Actions

- **Add Configured Pages**: Add one or more explicitly supplied pages to PageVitals monitoring for a website.
- **Create Budget**: Create a persistent PageVitals performance budget for a website.
- **Create Multistep Test**: Create an empty PageVitals multistep test definition with an explicit name and device profile.
- **Create Website**: Add a domain to the PageVitals account and begin managing it.
- **Delete Budget**: Delete one PageVitals performance budget and stop enforcing its threshold.
- **Delete Configured Page**: Permanently delete one PageVitals configured page and all of its test results, including historical results.
- **Delete Multistep Test**: Permanently delete one PageVitals multistep test definition.
- **Delete Website**: Permanently delete one PageVitals website and all of its tests, metrics, analytics, and configuration.
- **Get Multistep Test** (read-only): Get one multistep test definition, including its configured steps.
- **Get Page Metrics** (read-only): Get the latest Lighthouse and Chrome UX metrics for one configured page and device.
- **Get Page Opportunities** (read-only): List Lighthouse improvement opportunities for a page/device, or return the full variable-shape details for one opportunity ID.
- **Get Page Timeline** (read-only): Get one historical timeline for a page/device.
- **Get Test** (read-only): Get the detailed Lighthouse, timing, resource, budget, and validation summary for one synthetic test.
- **Get Test Report** (read-only): Get one specialized synthetic-test report.
- **Get Test Series** (read-only): Get one synthetic test series and its individual tests, statuses, page IDs, device variants, and failure messages.
- **List Budgets** (read-only): List performance budgets, current status, notification settings, and affected pages for a website.
- **List Configured Pages** (read-only): List the raw pages configured for PageVitals monitoring on a website.
- **List Multistep Runs** (read-only): List historical runs for one multistep test, including status, duration, interaction, layout-shift, CPU, transfer-size, and blocking-time…
- **List Multistep Tests** (read-only): List multistep tests configured for a website with recent metrics, state, and success rates.
- **List Page Metrics** (read-only): List every configured page/device combination for a website with recent timeline and latest performance metrics.
- **List Test Series** (read-only): List recent synthetic test series for a website, including status and failure counts.
- **List Website Opportunities** (read-only): List Lighthouse improvement opportunities aggregated across a website and the affected pages.
- **List Websites** (read-only): List websites visible to the connected PageVitals API key.
- **Run Multistep Tests**: Trigger exactly one named multistep test or intentionally fan out to every multistep test configured for a website.
- **Run Test Series**: Trigger synthetic tests for selected page/device variants, or for every configured test when pages is omitted.
- **Update Budget**: Replace a PageVitals performance budget's complete metric threshold and device scope.
- **Update Configured Page**: Update a configured PageVitals page's URL, display alias, or both.
- **Update Multistep Test**: Update a multistep test's alias and device.
