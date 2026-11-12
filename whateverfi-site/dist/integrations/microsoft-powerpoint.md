# Microsoft PowerPoint

Create, find, inspect, fill, edit, format, share, preview, version, copy, upload, download, organize, and delete Microsoft PowerPoint files through Microsoft Graph and OneDrive, including slide, shape, chart, comment, and geometry workflows.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/microsoft-powerpoint/.

## Actions

- **Check In Presentation**: Check in a checked-out PowerPoint DriveItem and make its version available according to the SharePoint/document-library configuration.
- **Check Out Presentation**: Check out a PowerPoint DriveItem where its SharePoint/document-library configuration supports checkout, preventing others from editing and…
- **Copy Presentation**: Start an asynchronous Microsoft Graph copy of a PowerPoint presentation.
- **Copy Presentation and Wait**: Submit a PowerPoint presentation copy with a required unique filename, then boundedly search the resolved destination folder for an…
- **Create Folder**: Create a folder for PowerPoint files in the current or an explicitly selected accessible drive.
- **Create Presentation**: Create a bounded macro-free PPTX from one to 50 structured slides containing titles, plain text, nested bullets, rectangular tables,…
- **Create Presentation Sharing Link**: Create or return a view or edit sharing link for a PowerPoint presentation in the current or an explicitly selected drive.
- **Delete Folder**: Move a folder to the Microsoft Graph recycle bin after a metadata preflight proves the DriveItem has a folder facet.
- **Delete Presentation**: Move a PowerPoint presentation to the Microsoft Graph recycle bin.
- **Download Presentation** (read-only): Download a PowerPoint file in its original format or export it as PDF or JPG.
- **Download Presentation Version** (read-only): Verify that the selected DriveItem is a PPTX, then download one retained previous version as a bounded PPTX file.
- **Fill PowerPoint Template**: Create one presentation from an existing designed PPTX template by replacing unique literal {{tokens}} simultaneously across reachable…
- **Find Presentations** (read-only): List a folder or search a drive and return only PowerPoint files.
- **Get Current Drive** (read-only): Return the signed-in user's default OneDrive ID and basic owner, type, and quota details.
- **Get Presentation** (read-only): Return metadata for one PowerPoint file by item ID, including its current eTag for concurrency-safe updates.
- **Get Presentation Content** (read-only): Read bounded, text-first semantic content from a current macro-free PPTX, including slides, shapes, text, safe hyperlinks, alt text, image…
- **Get Presentation Layouts** (read-only): Download and validate the current macro-free PPTX, then return its complete bounded slide-layout catalog.
- **Get Presentation Thumbnails** (read-only): List generated thumbnail metadata for a PowerPoint presentation.
- **Get Presentation Version** (read-only): Retrieve compact metadata for one retained or current version of a PowerPoint file.
- **Invite People to Presentation**: Grant named people read or write access to a PowerPoint presentation.
- **List Presentation Versions** (read-only): List retained versions of a PowerPoint file in Microsoft Graph's newest-first order, one provider page at a time.
- **Replace Presentation File**: Replace the bytes of an existing PowerPoint DriveItem with a valid, non-macro-enabled PPTX package no larger than 250 MiB, optionally…
- **Restore Presentation Version**: Restore a retained previous version of a PowerPoint presentation as a new current version while preserving its version history.
- **Transform Presentation Text and Properties**: Transform text, slide order, or embedded core document properties inside a macro-free PPTX, then conditionally replace the same file.
- **Update Presentation Content Destructively**: Atomically update one macro-free PPTX with at least one irreversible delete operation, under an exact eTag and one conditional upload.
- **Update Presentation Content Safely**: Atomically update one macro-free PPTX without delete operations, under an exact eTag and one conditional upload.
- **Update Presentation Metadata**: Update Microsoft Graph DriveItem metadata or path only.
- **Upload New Presentation**: Create a new PPTX in a Microsoft Graph drive folder, with configurable filename-conflict behavior.
