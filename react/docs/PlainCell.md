---
category: Data display
keywords: ["cell", "plain cell", "table cell", "row", "data", "read-only", "text", "amount", "label", "icon", "inline button", "table", "list"]
---

A non-interactive table cell for displaying information, with an optional inline button or icon.

The Plain cell is the base building block for data rows: it presents information without acting as a navigation or selection target. It is the default choice for read-only tables and lists, keeping content aligned and consistent across rows.

It supports several content kinds (Text, Amount, Label, Button, Icon), so a cell can hold a plain value, a status label, an icon, or an inline button for a contained action —without making the whole row interactive. Its states are limited to Default and Disabled, reflecting that the cell itself isn't a link. It is designed to be composed into a Cells row alongside Featured and Linkable cells.

## When to use
- Displaying read-only data in tables and lists (text, amounts, labels, icons).
- Rows that shouldn't respond to taps but may hold a single inline action (button/icon).
- Keeping row content aligned and consistent across a table.
- As part of a Cells row, combined with Featured and Linkable cells.

## When not to use
- Rows that must navigate or be selectable on tap — use a Linkable cell.
- Emphasizing a standout value — use a Featured cell.
- When the entire row should be the action target (a plain cell only supports a contained inline button).

## Design properties → React props
Kind → `kind`; State Disabled → `disabled`; content → children.
