---
category: Forms
keywords: ["checkbox", "check", "tick", "select", "multiple selection", "multi-select", "option", "toggle", "opt-in", "consent", "terms", "form"]
---

A control for selecting one or more independent options, or toggling a single setting on or off.

A Checkbox lets users select one or more options from a set of independent choices, or opt in and out of a single setting. Unlike radio buttons, checkboxes are not mutually exclusive: each one can be turned on or off on its own, which makes them the right choice whenever multiple selections are valid.

It exposes clear selected and deselected kinds, and a full range of states —default, hover, error, and disabled— so validation and availability are always visible (for example, flagging a required option that hasn't been checked). Each checkbox should be paired with a clickable label describing its option, and multiple checkboxes are typically composed into a Checkbox group.

## When to use
- Selecting multiple, non-exclusive options from a set.
- A single opt-in decision (accept terms, subscribe, remember me).
- Turning individual settings on or off where changes are confirmed later (e.g. via a Save action).
- Cases that need a visible error state for a required selection.

## When not to use
- Mutually exclusive options where only one can be chosen — use Radio buttons.
- Settings that take effect immediately on toggle — use a Switch.
- Triggering an action — use a Button.
- A checkbox without a label, or one whose purpose isn't clear from its text.

## Design properties → React props
Selected → `checked` / `defaultChecked`; State Error → `error`, Disabled → `disabled`; Label → children.
