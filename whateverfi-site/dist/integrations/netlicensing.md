# NetLicensing

NetLicensing is a software license management platform for administering products, license models, licensees, licenses, and commerce workflows.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/netlicensing/.

## Actions

- **Check In Licensee Session**: Return and release a NetLicensing floating-license session for a licensee and return the validation results and provider cache TTL when…
- **Check Out Licensee Session**: Allocate a NetLicensing floating-license session for a licensee and return the validation results with their cache TTL.
- **Create Bundle**: Create a purchasable NetLicensing bundle from existing license templates.
- **Create License**: Assign a license from a license template to a licensee.
- **Create License Template**: Create a license template under a product module using a supported license type.
- **Create Licensee**: Create a licensee under a product so licenses can be assigned and validated.
- **Create Licenses From Bundle**: Create one or more licenses for a licensee from the license templates associated with a bundle.
- **Create Product**: Create a NetLicensing product that can contain product modules and licensees.
- **Create Product Module**: Create a licensing-model-specific module under a NetLicensing product.
- **Delete Resource**: Permanently delete a product, product module, license template, licensee, license, or bundle by number.
- **Get Resource** (read-only): Get one product, product module, license template, licensee, license, transaction, or bundle by its NetLicensing number.
- **List Licensing Options** (read-only): Return the supported licensing models and license types used when configuring product modules and license templates.
- **List Resources** (read-only): List one page of products, product modules, license templates, licensees, licenses, transactions, or bundles for the connected vendor.
- **Transfer Licenses**: Irreversibly transfer all eligible licenses from a source licensee marked for transfer to a target licensee in the same product.
- **Update Bundle**: Update selected bundle details or replace its complete set of license templates.
- **Update License**: Update a license's identity/number, name, parent-feature relationship, status, timing, pricing, visibility, or quantity.
- **Update License Template**: Update selected pricing, visibility, limits, or license behavior on a license template.
- **Update Licensee**: Update selected status, identity, transfer, or non-secret custom properties of a licensee.
- **Update Product**: Update selected properties of an existing product.
- **Update Product Module**: Update selected properties and model-specific settings of a product module.
- **Validate Licensee**: Validate a NetLicensing licensee's active licenses and return the validation results with their cache TTL.
