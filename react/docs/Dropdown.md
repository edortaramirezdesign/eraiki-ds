---
category: Forms
keywords: ["dropdown", "select", "menu", "picker", "options", "overlay", "combobox", "list", "choose", "expand", "open", "selection"]
---

A trigger that reveals a list of options in an overlay, reflecting its open and filled states.

The Dropdown is the control that reveals a list of choices in an overlay when activated, letting users pick from a set of options without those options taking up permanent space on the screen. It is the base trigger of the dropdown pattern, keeping the interface compact until the user needs to choose.

It reflects two key conditions: whether it is currently Open (the overlay is showing) and whether it is Filled (it already holds a selected value). Paired with the Dropdown options list —and, in forms, with the Dropdown input— it covers selection from a moderate set of options where seeing everything at once isn't necessary.

## When to use
- Choosing from a moderate list of options without keeping them all on screen.
- Keeping the layout compact until the user needs to select.
- As the trigger for a Dropdown options list.
- Selection where the current value should be shown in a filled state after choosing.

## When not to use
- Just 2–3 options that fit inline — use Radio buttons or a segmented control.
- Very long lists that need filtering — use a searchable field.
- Multiple simultaneous selections better shown as a Checkbox group (unless using a multi-select dropdown pattern).
- Triggering an action rather than selecting a value — use a Button.

## Design properties → React props
Label → `label`; options → `options`; Filled → `value` / `defaultValue`; Open → `defaultOpen`.
