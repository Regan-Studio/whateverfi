# Submit a plugin to WhatEverFi

List a plugin in the WhatEverFi marketplace. We review every submission and email the result.

The plugin must be a public GitHub repository with a plugin manifest (`plugin.json` following [Agent Plugins](https://agent-plugins.org), `.cursor-plugin/plugin.json`, or `.grok-plugin/plugin.json`) and skills, a hosted MCP server, or both.

[Build a plugin](https://whateverfi.com/docs/build-a-plugin/) starts with a hosted MCP server and covers configuration, testing, and marketplace submission. Copy the [MCP server example](https://github.com/elie222/rakazo/tree/main/examples/plugins/mcp-server) for hosted tools, or the [hello world example](https://github.com/elie222/rakazo/tree/main/examples/plugins/hello-world) for skills only.

## Submit with the API

`POST https://app.whateverfi.com/api/v1/plugin-submissions` with a JSON body. No account or key is needed.

| Field | Required | Notes |
| --- | --- | --- |
| `email` | Yes | Where we send the review result |
| `name` | Yes | Plugin name, up to 80 characters |
| `website` | No | https URL |
| `logo` | Yes | https URL of a square SVG or PNG |
| `source` | Yes | Public GitHub repository URL; add `/tree/main/<folder>` for a plugin in a folder |
| `description` | Yes | What the plugin does, up to 2000 characters |
| `testing` | Yes | How to try it in WhatEverFi, up to 4000 characters. Never include real credentials |
| `tested` | Yes | `true`: you tested the plugin in WhatEverFi |

```sh
curl -X POST https://app.whateverfi.com/api/v1/plugin-submissions \
  -H 'content-type: application/json' \
  -d '{"email":"you@example.com","name":"Acme","logo":"https://example.com/logo.svg","source":"https://github.com/acme/rakazo-plugin","description":"Search Acme tickets.","testing":"Install it and ask a bot to find ticket 42.","tested":true}'
```

A new submission returns `201` with `{"id","status":"pending"}`. Resubmitting the same source URL with the same email while it waits updates it and returns `200`. Invalid input returns `400` with an `issues` list naming each field.
