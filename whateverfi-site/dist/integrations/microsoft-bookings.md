# Microsoft Bookings

Microsoft Bookings provides shared business scheduling through Microsoft Graph, including booking businesses, appointments, customers, services, staff, and currencies.

Category: Productivity. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/microsoft-bookings/.

## Actions

- **Cancel Appointment**: Irreversibly cancel an appointment and ask Microsoft Bookings to send the supplied cancellation message to its customers and staff.
- **Create Appointment**: Create an appointment for a service at explicit start and end times, optionally assigning staff and customer details.
- **Create Booking Business**: Create a shared booking business with the supplied display name.
- **Create Custom Question**: Create a text or single-choice intake question for one booking business.
- **Create Customer**: Create a saved customer in one booking business with structured contact details.
- **Create Service**: Create a bookable service with a name and default duration, optionally configuring location, price, staff, reminders, questions, and…
- **Create Staff Member**: Add a staff member to one booking business with a role, email, time zone, and optional working schedule.
- **Delete Appointment**: Permanently delete an appointment without invoking Microsoft Bookings' cancellation-message action.
- **Delete Booking Business**: Permanently delete one shared booking business and all of its Microsoft Bookings data.
- **Delete Custom Question**: Permanently delete one custom intake question from a booking business.
- **Delete Customer**: Permanently delete one saved customer from a Microsoft Bookings business.
- **Delete Service**: Permanently delete one service from a Microsoft Bookings business.
- **Delete Staff Member**: Permanently remove one staff member from a Microsoft Bookings business.
- **Get Appointment** (read-only): Get one booking appointment, including its service, customers, assigned staff, attendee counts, and UTC start and end times.
- **Get Booking Business** (read-only): Get the complete configuration and publication state of one shared booking business.
- **Get Booking Currency** (read-only): Get one Microsoft Bookings currency by its ISO currency code.
- **Get Custom Question** (read-only): Get one custom intake question, including its answer type and available choices.
- **Get Customer** (read-only): Get one saved customer and their contact details from a booking business.
- **Get Service** (read-only): Get one service and its duration, pricing, staff, questions, reminders, location, and scheduling configuration.
- **Get Staff Member** (read-only): Get one booking staff member's identity, role, membership state, time zone, working hours, and calendar settings.
- **List Appointments** (read-only): List one Microsoft Graph page of appointments for a booking business.
- **List Booking Businesses** (read-only): List shared booking businesses visible to the connected work or school account.
- **List Booking Currencies** (read-only): Return one Microsoft Graph page of the Microsoft Bookings currency catalog with ISO currency IDs and localized symbols.
- **List Custom Questions** (read-only): List custom intake questions defined for one booking business, one Microsoft Graph page at a time.
- **List Customers** (read-only): List saved customers for one booking business, one Microsoft Graph page at a time.
- **List Services** (read-only): List services offered by one booking business, including duration, pricing, staff, and scheduling defaults, one Microsoft Graph page at a…
- **List Staff Members** (read-only): List staff members configured for one booking business, including roles and working hours, one Microsoft Graph page at a time.
- **Publish Booking Business**: Publish a booking business's external scheduling page so customers can access it.
- **Unpublish Booking Business**: Take a booking business's external scheduling page offline and clear its public URL without deleting the business.
- **Update Appointment**: Update an existing appointment's schedule, attendees, service, staff, location, notifications, or pricing without cancelling it.
- **Update Booking Business**: Update supported contact details, hours, currency, business type, address, or scheduling rules without publishing or unpublishing the…
- **Update Custom Question**: Update the text, answer type, or choices of one custom intake question.
- **Update Customer**: Update a saved customer's name, email, phone numbers, or postal addresses in one booking business.
- **Update Service**: Update a service's name, duration, location, pricing, staff, reminders, questions, visibility, or scheduling rules.
- **Update Staff Member**: Update a booking staff member's identity, role, time zone, working schedule, calendar behavior, or email notifications.
