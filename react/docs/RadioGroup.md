---
category: Forms
keywords: ["radio buttons", "radio group", "radio", "single selection", "single choice", "mutually exclusive", "options", "select one", "form", "choice", "fieldset", "pick one"]
---

A set of mutually exclusive options where selecting one clears the others, with an optional group label.

A Radio buttons group presents a set of mutually exclusive options: only one can be selected at a time, and choosing a new one clears the previous selection. It is the right pattern whenever a single choice must be made from a small set of options that are all worth showing at once.

It is composed of individual Radio button items —each with a selected state and the interaction range (default, hover, disabled)— and an optional group label naming the decision. The group scales from 1 to 5 items. Because all options stay visible, users can compare them directly; providing a sensible default selection helps them move faster.

## When to use
- Choosing one option from a small set (about 2–5) that are all worth showing.
- When users benefit from comparing all options at once, visible side by side.
- Decisions that need a clear group label and a sensible default selection.
- Mutually exclusive choices in a form.

## When not to use
- Multiple selections are valid — use a Checkbox group.
- Many options that don't all fit — use a Dropdown.
- A single on/off setting — use a Switch or a lone Checkbox.
- Quick, lightweight filtering — use Pills.

## Design properties → React props
Label → `label`; options → `options`; Selected → `value` / `defaultValue`; State Disabled → `disabled` (group) or per-option `disabled`.
