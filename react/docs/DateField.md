---
category: Forms
keywords: ["date selector", "date picker", "date input", "date field", "single date", "calendar", "form field", "label", "helper text", "error", "mandatory", "form"]
---

A form field for entering or picking a single date, with label, states, and helper/error text.

The Date selector is a form field specialized in capturing a single date. It combines the full anatomy of a text input —label, mandatory marker, tooltip, and helper text— with a date-picking affordance, so choosing a date sits naturally alongside the other fields in a form.

It covers empty and filled kinds and the complete form state range —default, hover, active, disabled, and error— so availability and validation always read clearly. The Error state should be paired with the detail info text explaining what to fix, and showing the expected date format in that helper text prevents most input mistakes. It typically opens a Calendar to let users pick the date visually rather than only typing it.

## When to use
- Capturing a single date within a form, next to other fields.
- When the field needs the full form anatomy: label, mandatory marker, tooltip, helper/error text.
- Dates that benefit from visual picking via a Calendar, not just typing.
- Cases requiring clear validation through the error state and detail info text.

## When not to use
- Selecting a start and end date — use Input field - Date range.
- Free-form or non-date values — use a standard text input.
- Time-only selection with no calendar date involved.
- Well-known dates in very compact contexts where a plain text input without a picker is enough.

## Design properties → React props
Label → `label`; Detail text → `helperText`; Tooltip → `tooltip`; State Error → `error`, Disabled → `disabled`; Mandatory → `required`; Filled → `defaultValue` ({day, month, year}).
