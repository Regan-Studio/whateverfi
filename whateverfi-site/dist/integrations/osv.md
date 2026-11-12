# OSV

OSV provides an open vulnerability database and API for querying vulnerabilities by package, version, commit, or vulnerability identifier.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/osv/.

## Actions

- **Determine Version** (read-only): Experimentally rank probable versions of an OSS-Fuzz C/C++ library from relative source-file paths and base64-encoded MD5 hashes.
- **Get Import Findings** (read-only): Experimentally list OSV records from one exact import source that failed import-time quality checks.
- **Get Vulnerability** (read-only): Return the complete OSV record for one case-sensitive vulnerability ID, including affected versions, ranges, severity, references, and…
- **Query Vulnerabilities** (read-only): Find full OSV vulnerability records affecting one package, package version, package URL, or commit.
- **Query Vulnerabilities Batch** (read-only): Check up to 1,000 packages, package versions, package URLs, or commits in one request and return position-matched compact vulnerability IDs.
