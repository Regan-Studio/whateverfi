# Brave Search

Access Brave's independent search index, grounded AI answers, suggestions, spellcheck, and related search products through one API.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/brave-search/.

## Actions

- **Check Search Spelling** (read-only): Return Brave spelling corrections for a search phrase.
- **Generate Grounded Answer** (read-only): Generate one non-streaming web-grounded answer from a single user message using Brave Answers.
- **Get LLM Context (GET)** (read-only): Retrieve token-budgeted web snippets and source metadata for grounding or RAG using URL-friendly parameters.
- **Get LLM Context (POST)** (read-only): Retrieve token-budgeted web snippets and source metadata for grounding or RAG with a JSON body, suited to complex requests.
- **Get Local Descriptions** (read-only): Fetch AI-generated Markdown descriptions for up to 20 ephemeral POI IDs returned recently by place or web search.
- **Get Local POIs** (read-only): Fetch structured details for up to 20 ephemeral POI IDs returned recently by place or web search.
- **Get Rich Result** (read-only): Resolve a fresh callback key from a rich-enabled web search into its real-time vertical result, such as weather, finance, sports,…
- **Get Search Suggestions** (read-only): Return typo-tolerant autocomplete suggestions for a partial query, optionally with rich entity metadata.
- **Search Images** (read-only): Search Brave's image index and return up to 200 image matches in one non-paginated response.
- **Search News (GET)** (read-only): Search Brave's news index with URL-friendly parameters and return one requested page of current news results.
- **Search News (POST)** (read-only): Search Brave's news index with a JSON body, suited to long queries or complex Goggles, and return one requested result page.
- **Search Places** (read-only): Search Brave's geographic index for POIs and named places.
- **Search Videos (GET)** (read-only): Search Brave's video index with URL-friendly parameters and return one requested page of video results.
- **Search Videos (POST)** (read-only): Search Brave's video index with a JSON body, suited to long requests, and return one requested result page.
- **Search Web (GET)** (read-only): Search Brave's web index with URL-friendly parameters and return one requested result page plus any matching vertical, local,…
- **Search Web (POST)** (read-only): Search Brave's web index with a JSON body, suited to long queries or complex Goggles, and return one requested result page plus matching…
