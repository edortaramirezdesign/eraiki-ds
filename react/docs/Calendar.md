---
category: Forms
keywords: ["calendar", "date picker", "datepicker", "date", "date range", "range", "month", "day", "schedule", "booking", "availability", "holiday"]
---

A month grid for selecting a single date or a date range, with clear day types and selection states.

The Calendar displays a month as a grid of days and lets users pick a single date or a continuous range while keeping the surrounding month context visible. Seeing the days around a choice helps users make date decisions —weekends, holidays, or how far apart two dates are— that a plain text field can't convey.

Days communicate their type through the week-day headers (Week vs. Weekend) and the day cells (Work day vs. Holiday), and their selection through a full set of states: default, hover, selected, disabled, and selected-disabled. For ranges, the endpoints and the middle span are shown differently (Range first, Range middle, Range last), so the extent of the selection is always clear. It is typically embedded in date input fields or shown inline where date picking is a primary task.

## When to use
- Single-date or range selection where seeing the month context helps the decision.
- Picking dates influenced by weekends or holidays (bookings, scheduling, availability).
- Choosing a start and end date and needing to see the span between them.
- As the picker behind date input fields, or inline where date selection is the main task.

## When not to use
- Known, simple dates (e.g. a birth date) — a text/date input is faster.
- Time-only or duration selection with no calendar day involved.
- Very constrained spaces where a full month grid doesn't fit — use a compact date input.
- Selecting many non-contiguous dates at scale, where a list or other pattern works better.

## Design properties → React props
Mode → `mode`; Month selector → `monthSelector`; Year selector → `yearSelector`; Button → `buttonLabel`; selection → `defaultSelected` / `defaultRange`.
