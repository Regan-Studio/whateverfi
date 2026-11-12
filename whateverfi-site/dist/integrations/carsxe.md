# CarsXE

CarsXE provides vehicle data APIs for VIN specifications, recalls, license plate decoding, market values, history, images, recognition, and related automotive lookups.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/carsxe/.

## Actions

- **Check Lien and Theft Records** (read-only): Retrieve reportable US lien and theft events for a VIN.
- **Decode License Plate** (read-only): Look up vehicle identity from a license plate using CarsXE's current global v2 decoder.
- **Decode OBD Code** (read-only): Translate an OBD-II diagnostic trouble code into a readable diagnosis.
- **Get Recall Batch** (read-only): Make exactly one read request for a CarsXE recall batch.
- **Get Vehicle History** (read-only): Retrieve title, brand, junk/salvage, insurance, VIN-change, and historical title records for a VIN.
- **Get Vehicle Images** (read-only): Find up to 10 vehicle photos by make and model, with optional year, trim, angle, image type, size, color, quality, transparency, and…
- **Get Vehicle Market Value** (read-only): Estimate wholesale, retail, and trade-in values for a VIN using CarsXE's current v2 valuation, optionally adjusted for state, mileage, and…
- **Get Vehicle Recalls** (read-only): Find safety recall campaigns either for one VIN or for a year, make, and model.
- **Get Vehicle Specifications** (read-only): Decode a 17-character VIN into vehicle identity, specifications, equipment, colors, and warranty data.
- **Get Year Make Model Data** (read-only): Look up detailed vehicle and trim information by year, make, and model without a VIN.
- **Recognize License Plate** (read-only): Analyze a publicly accessible vehicle image and return license-plate candidates, regions, confidence, bounding boxes, and detected vehicle…
- **Submit Recall Batch**: Create one asynchronous CarsXE recall-check batch for 1 to 10,000 VIN entries.
