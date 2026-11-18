---
category: Data display
keywords: ["cells column", "column", "table column", "header cell", "cells", "data column", "table"]
---

A vertical column that stacks a header cell over individual cells into a single, aligned column of a table or list.

The Cells column stacks individual cells into one vertical unit —a full column of a table or list. A Featured cell at the top works as the column header and Plain cells below it hold one value per row, so several columns side by side read as a structured, aligned table.

Every cell fills the column width and keeps the same height and padding, so values line up from top to bottom no matter how the content varies. Use one content kind per column —text, amounts or labels— so each column scans as a single type of data, and combine columns to build comparison tables that read from top to bottom.

## When to use
- Building the columns of a table or comparison from a header cell and Plain cells.
- Comparing several items side by side, one column per item or attribute.
- Keeping a single content type per column —text, amounts or labels— aligned top to bottom.
- Composing a table column by column when each column needs its own width.

## When not to use
- A single cell in isolation — use the individual Cell component directly.
- Interactive rows that navigate or select — use Linkable cells.
- Long free text in each cell — use a list or a text block.
- Complex tables needing sorting, sticky headers or pagination beyond this component.

## Design properties → React props
Header → `header` (`null` = Empty); Kind → the `kind` of the PlainCells you put inside; number of cells → how many you put inside; Width → `width`.
