---
category: Data display
keywords: ["cells row", "row", "table row", "list row", "record", "columns", "cells", "data row", "table", "list", "grid", "alignment"]
---

A horizontal row that composes individual cells into a single, aligned unit of a table or list.

The Cells row assembles individual cells into one horizontal unit —a full row of a table or list. It is the layer that turns isolated cells into a structured, aligned record, guaranteeing consistent spacing and alignment across every row so tables stay readable no matter how the content varies.

It supports the three cell families —Plain, Featured, and Linkable— so a single row can mix read-only data, a highlighted value, and interactive targets as needed. The number of items scales from 1 to 10, letting the same component cover anything from a simple list to a wide, multi-column table.

## When to use
- Building the rows of a table or list from Plain, Featured, and Linkable cells.
- Keeping spacing and alignment consistent across every row automatically.
- Rows that need to mix content types (data, a highlighted value, an interactive target).
- Scaling the same row pattern from a simple list to a wide multi-column table (1–10 items).

## When not to use
- A single cell in isolation — use the individual Cell component directly.
- Non-tabular content that doesn't belong to a row/record structure.
- Rows wider than the viewport on small screens without a plan to wrap, stack, or scroll.
- Complex tables needing fixed headers, sorting, or pagination logic beyond simple row layout (compose with the relevant components).

## Design properties → React props
Kind → the cell components you put inside; Items → how many you put inside.
