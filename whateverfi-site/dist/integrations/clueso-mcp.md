# Clueso MCP

Create and edit Clueso product videos, documentation articles, clips, voiceovers, captions, animations, and exports through Clueso's hosted MCP server.

Category: Design. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/clueso-mcp/.

## Actions

- **Add article media**: Add a screenshot or GIF to the article.
- **Add audio**: Add a music track or sound effect that plays as a project-level audio layer over all clips.
- **Add clips**: Create new clips on a project.
- **Add comment**: Post a review comment on a project, attributed to "Clueso AI".
- **Add elements**: Add many elements across one or more clips in a single tool call.
- **Add sync point**: Insert one sync marker on a clip's transcript.
- **Analyze audio** (read-only): Analyze an audio file.
- **Auto sync**: Run the agentic auto-sync pipeline on a clip with a source recording.
- **Captions**: Read and edit a clip's CAPTIONS (subtitles) — what they say, where one caption ends and the next begins, when each shows, captions not…
- **Check uploads** (read-only): Fetch all files the user uploaded via the hosted upload page.
- **Create clueprint**: Create a new clueprint (reusable video template).
- **Create folder**: Create a folder in the workspace, optionally inside another folder, to organize projects.
- **Create project**: Create a new blank Clueso project.
- **Duplicate clip**: Clone one clip — within the same project, or **from another project** — into a target project.
- **Duplicate project**: Clone an entire project — every clip, voiceover, asset, and metadata field — into a fresh project.
- **Edit animation**: Change an animation's code.
- **Export project**: Start a video export of the project.
- **Extract audio**: The editor's "Extract Audio".
- **Find** (read-only): Find any resource in Clueso by type, optionally filtered by name or exact id.
- **Generate media**: Generate an AI image or a canvas-code-based animation directly into a clip.
- **Get article** (read-only): Get the article content as markdown.
- **Get clip** (read-only): Read one clip.
- **Get clueprint** (read-only): Fetch clueprint data.
- **Get comments** (read-only): Read the review comments on a project — the other half of add_comment, which could post but never read.
- **Get design guide** (read-only): Clueso's design guide, animation guide and animation stdlib.
- **Get element schema** (read-only): Return the schema for an element type's type_data, as TypeScript declarations.
- **Get embed** (read-only): Get a project's embeddable video player.
- **Get export** (read-only): Read a project's video export.
- **Get project** (read-only): Get a summary of a project.
- **Get recording activity** (read-only): Status of this workspace's auto-recordings, and how many recording generations this billing cycle has used.
- **Get script job** (read-only): Fetch the outcome of a run_script that did not finish inline.
- **Manage brand kit**: Create and change the workspace's brand kits (editors and admins).
- **Pronunciation**: Read and edit the workspace pronunciation dictionary (Settings → Team → Pronunciation Dictionary).
- **Read animation** (read-only): Read an animation's files like a repository.
- **Record screen**: Records the product on a mock (Code record) as a screen-recording clip in a project.
- **Remove clip**: Remove a clip from the project by index.
- **Remove elements**: Remove many elements across one or more clips in a single tool call.
- **Remove from project**: Remove an element, a group or an audio track from a project.
- **Reorder elements**: Reorder the elements inside a clip.
- **Run script**: Write a JavaScript program that calls this server's other tools.
- **Set voice**: Set the voiceover voice for every clip in a project, or only for the clips in clip_ids.
- **Split clip**: Split a video clip into two clips at the given timestamp.
- **Switch workspace**: Switch the active workspace.
- **Update article**: Update article text content from markdown.
- **Update article media**: Update an article image/GIF (screenshot), or inspect its current state.
- **Update audio**: Mutate fields on an existing music/SFX track by id.
- **Update clips**: Update one or more clips in a single call — background, transition, duration, title, visibility, position, and (video clips) the footage…
- **Update clueprint**: Update a clueprint's metadata and/or file contents in one call.
- **Update elements**: Update many elements across one or more clips in a single tool call.
- **Update groups**: Transform, keyframe, rename, nest or lock GROUPS.
- **Update project**: Update a project's metadata.
- **Upload file**: Upload one or more files to Clueso.
- **Voiceover batch**: Set voiceover text and/or trigger speech generation for any number of clips in a single call.
