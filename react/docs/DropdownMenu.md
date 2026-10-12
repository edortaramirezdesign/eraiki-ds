---
category: Forms
keywords: ["dropdown options", "dropdown option", "menu items", "option list", "select options", "list", "single-select", "multi-select", "checkbox option", "overlay", "scroll", "menu"]
---

The list of selectable options that a dropdown reveals, built from individual single/multi-select rows.

The Dropdown options is the overlay list that appears when a dropdown is opened —the panel that holds the choices themselves. It is composed of individual option rows and provides the container behavior around them: single- or multi-option lists, an optional scrollbar for long lists, and an optional action button (for example, to confirm a multi-selection).

Each option row supports a leading icon, a badge, a selected state, and an optional bottom divider, and it comes in single-option and multi-option kinds —the latter behaving like a checkbox row when several selections are allowed. Together they cover the full interaction inside a dropdown: default, hover, disabled, and selected states, presented consistently.

## When to use
- Presenting the selectable choices inside a Dropdown or Dropdown input.
- Single-select lists, or multi-select lists where several options can be chosen at once.
- Long lists needing a scrollbar, or lists that need a confirm/action button.
- Option rows that require a leading icon, badge, or dividers for grouping and clarity.

## When not to use
- As a standalone menu unrelated to a dropdown trigger — use the appropriate menu pattern.
- For navigation links rather than value selection.
- Just 2–3 always-visible options — use Radio buttons or a segmented control.
- When each item should behave as a full interactive row/cell in a list or table — use Cells.

## Design properties → React props
Kind → `kind` (single / multi); Left icon / Badge / Divider → per-option `icon` / `badge` / `divider`; Button → `buttonLabel`; State Disabled → per-option `disabled`.
