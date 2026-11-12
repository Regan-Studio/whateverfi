# SimpleLocalize

SimpleLocalize is a translation management platform for managing localization keys, translations, languages, imports, exports, and hosted environments.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/simple-localize/.

## Actions

- **Create Tag**: Create a project tag for organizing translation keys.
- **Create Translation Key**: Create one translation key and optional metadata in the connected project.
- **Create Translation Keys**: Create up to 100 translation keys and report every rejected entry.
- **Delete Tag**: Permanently delete one project tag by its exact name.
- **Delete Translation Key**: Permanently delete one translation key, including all translations attached to it, by exact key and namespace.
- **Export Translations** (read-only): Create downloadable snapshot URLs for project translations in a selected file format.
- **Get Project Context** (read-only): Return the connected project and its current languages, tags, and hosting environments so an agent can choose valid identifiers before…
- **Get Translation Key** (read-only): Return full metadata for one translation key selected by key and namespace.
- **List Activity** (read-only): Return a manually selected page of recent project changes for operational visibility.
- **List File Formats** (read-only): Return the file formats currently accepted by SimpleLocalize exports, including multi-language, beta, and deprecation metadata.
- **List Translation Keys** (read-only): Search translation keys and return one controllable page of provider summary fields.
- **List Translations** (read-only): Search translations by key, language, text, review state, or namespace and return one page.
- **Set Translation**: Set the text and optional review state for one existing translation key and language.
- **Set Translations**: Set 1 to 100 translations in one request.
