---
category: Saas sections
keywords: ["table", "data table", "rows", "columns", "cells", "filters", "dataset", "dashboard", "saas", "grid"]
---

A data table with a title and filters over rows of cells, in its desktop and mobile breakpoints.

Table presents structured data in rows and columns so people can scan, compare and filter it. A header bar carries the table’s title and its controls — a switch and dropdown filters in a slot that accepts other actions — and the table below is built from Cells columns: a Featured header cell over Plain cells for each column, so every value lines up with its row and its heading.

On desktop the columns share the available width and the controls sit in the header. On mobile the controls move behind a menu button and the table scrolls horizontally, keeping the first column fixed so each row stays identified while the rest of the data is browsed.

## Layout
- Desktop (> 1024px): The title sits on the left and the controls on the right — a switch and three dropdown filters. Below, the table fills the width: eight Cells columns, each a Featured header cell over Plain cells, sharing the space equally.
- Mobile (≤ 1024px): The switch and filters collapse into a single menu button next to the title. The table keeps its columns and scrolls sideways, with the first column pinned and set apart by a divider so every row stays identified.

## When to use
- Showing many records that share the same attributes, one per row.
- Letting people compare values across rows and columns.
- Filtering or toggling what a dataset shows from the table header.
- Dashboards, reports and back-office screens in SaaS products.

## When not to use
- A few values or a single record — use a list or a card.
- Items with rich content such as images or long text — use cards.
- Showing trends or proportions — use a chart.
- Interactive rows that open a detail — use Linkable cells.

## Design properties → React props
Title → `title`; switch → `switchLabel` / `switchChecked`; dropdown filters → `filters`; mobile menu button → `onMenu`; column headings → `columns`; cell values → `rows`.

## Behaviors
- Sticky first column: On mobile the table keeps all its columns instead of stacking them. The first column stays pinned on the left, set apart by a divider, while the columns to its right scroll sideways underneath it — so every row stays identified however far you scroll.

Saas sections are product UI blocks for app screens: place them inside your layout; each renders on a Surface Standard-S stage at its Figma width and takes the full width on mobile.
