---
category: Data display
keywords: ["cell", "featured cell", "table cell", "row", "highlight", "emphasis", "prominent", "data", "empty state", "column", "table", "list"]
---

A highlighted table cell that gives extra prominence to a standout value, with an empty state for missing content.

The Featured cell is a table/row building block used to give a single value extra visual weight within a data row. While most cells present information uniformly, a featured cell draws the eye to the piece of content that matters most —a key figure, a primary label, the item that should stand out— without breaking the row's structure.

It offers a Text kind for when there is content to highlight and an Empty kind for when the value is missing or not yet available, so rows stay aligned and consistent even with incomplete data. It is designed to be composed into a Cells row alongside Plain and Linkable cells.

## When to use
- Giving one value extra prominence within a data row (a key metric, the primary attribute).
- Highlighting the most important column in a table so it stands out while scanning.
- Keeping rows aligned when a highlighted value may be missing, thanks to the empty state.
- As part of a Cells row, combined with Plain and Linkable cells.

## When not to use
- Ordinary data that doesn't need emphasis — use a Plain cell.
- Content that must navigate or select on tap — use a Linkable cell.
- When several cells in the same row are featured — competing emphasis cancels itself out.
- Outside a row/table context, as a standalone block or button.

## Design properties → React props
Kind Text → children; Empty → no children.
