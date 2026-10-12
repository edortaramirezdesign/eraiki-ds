---
category: Data display
keywords: ["cell", "linkable cell", "interactive cell", "table cell", "row", "selectable", "clickable row", "navigation", "selected", "list item", "table", "link"]
---

An interactive table cell that navigates or selects on tap, with content kinds and full selection states.

The Linkable cell is an interactive row building block: unlike a plain cell that only displays information, the whole cell is a target that navigates to a detail view or selects the row. This makes it the backbone of clickable lists and selectable tables, where users act on entire rows rather than on a single control inside them.

It adapts to different content through its kinds (Text, Amount, Label, Icon) and exposes a complete set of states —default, hover, selected default, selected hover, disabled, and selected disabled— so both interaction and selection are always clear. It is designed to be composed into a Cells row alongside Plain and Featured cells.

## When to use
- Rows that navigate to a detail view when tapped (clickable lists, tables).
- Selectable lists or tables where the whole row can be picked, with a clear selected state.
- Presenting different row content —text, amount, label, or icon— while keeping consistent interaction.
- As part of a Cells row, combined with Plain and Featured cells.

## When not to use
- Read-only data that shouldn't respond to taps — use a Plain cell.
- Emphasizing a single standout value without interaction — use a Featured cell.
- When only a specific control inside the row should be actionable, not the whole cell.
- Mixing linkable and non-linkable cells without a visual cue that signals what's tappable.

## Design properties → React props
Kind → `kind`; State Selected → `selected`, Disabled → `disabled`; content → children.
