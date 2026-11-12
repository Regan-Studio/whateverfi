# HLR Lookup

HLR Lookup provides phone-number validation, network and portability intelligence, account balance checks, and asynchronous bulk HLR processing.

Category: Communication. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/hlr-lookup/.

## Actions

- **Check Phone Status**: Run full HLR lookups for 1-80 phone numbers.
- **Create Batch**: Create an empty persistent HLR_V2 batch.
- **Delete Batch**: Permanently delete one HLR batch and its results.
- **Download Batch Results** (read-only): Download a completed batch's full, unpaginated CSV or JSON result export, including source phone values and sensitive HLR intelligence, as…
- **Get Batch** (read-only): Return metadata and current progress for one HLR batch.
- **Get Credit Balance** (read-only): Return the connected HLR Lookup account's remaining credit balance.
- **List Batches** (read-only): List the connected account's HLR batches with their metadata and progress.
- **Pause Batch**: Pause processing one HLR batch.
- **Run MNP Lookup**: Look up network and mobile-number-portability data for 1-80 phone numbers.
- **Schedule Batch**: Schedule processing of one uploaded HLR batch at a UTC time.
- **Start or Resume Batch**: Start or resume processing one uploaded HLR batch.
- **Upload Batch CSV**: Upload a CSV file of sensitive phone data into an empty HLR batch.
- **Upload Batch Phone Numbers**: Upload 1-100,000 sensitive phone numbers into an empty HLR batch as a compact JSON array.
- **Validate Phone Numbers** (read-only): Validate formatting and original-network information for 1-80 phone numbers without a live HLR lookup.
