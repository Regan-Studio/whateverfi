# Keyzy

Keyzy is a software licensing platform for registering, validating, updating, and managing licenses and device activations.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/keyzy/.

## Actions

- **Delete Activation**: Permanently and irreversibly delete an activation record by its numeric ID using a write-enabled App Key.
- **Delete License**: Permanently delete a Keyzy license and all activation records associated with it.
- **Download Encrypted License File**: Activate or renew a semi-online Keyzy license and download its encrypted offline license file.
- **Get License** (read-only): Return customer, SKU, type, registration, and validity-period details for one license serial.
- **List Activations** (read-only): Return all activation records associated with one license serial number.
- **List License Products** (read-only): Return the products associated with a license serial, including product codes needed for validation.
- **Preview Dealer License Registration** (read-only): Check an unregistered dealer license and return the customer-registration details before submitting them.
- **Register Dealer License**: Preview an offline dealer license, verify its SKU, then irreversibly register it to a customer as the license owner.
- **Register License**: Assign an available license for an SKU to a customer and return the new serial number.
- **Update Activation**: Activate or deactivate an existing activation record by numeric ID.
- **Update License SKU**: Move a license to a new SKU, changing its license type to the destination SKU's type.
- **Update License Term**: Update the validity start and/or required end time of a subscription or trial license.
- **Upgrade License**: Irreversibly exchange a current license for an upgrade license.
- **Validate License**: Validate a Keyzy license for a product.
