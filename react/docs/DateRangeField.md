---
category: Forms
keywords: ["date range", "date range picker", "range", "start date", "end date", "period", "from-to", "calendar", "form field", "helper text", "error", "booking"]
---

A form field for selecting a start and end date, with label, states, and helper/error text.

The Date range is a form field specialized in capturing a period —a start date and an end date— as a single, connected input. It builds on the same field anatomy as the other inputs (label, mandatory marker, tooltip, and helper text) but is tuned for two-date entry, so users define a span in one coherent place rather than juggling two separate fields.

It covers empty and filled kinds and the full form state range —default, hover, active, error, and disabled— so validation and availability always read clearly. It should enforce that the end date is not earlier than the start, surfacing any problem through the error state and the detail info text, and it typically opens a Calendar so users can pick the range visually and see the span between both ends.

## When to use
- Selecting a period defined by a start and end date (bookings, reports, filters by date).
- When the two dates belong to one decision and should be entered together.
- Ranges that benefit from visual picking and seeing the span via a Calendar.
- Cases requiring validation of the range (end ≥ start) through the error state and detail text.

## When not to use
- Capturing a single date — use Input field - Date selector.
- Open-ended selections where only one bound is ever set.
- Non-date values or time-only selection.
- Very constrained layouts where a full range field or its Calendar can't fit comfortably.

## Design properties → React props
Labels → `startLabel` / `endLabel`; Filled → `defaultStart` / `defaultEnd`; other properties as DateField.
