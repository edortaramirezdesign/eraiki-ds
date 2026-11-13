---
category: Layout
keywords: ["container", "layout", "grid", "columns", "gutter", "margin", "structure"]
---

A layout frame that arranges content into columns of set proportions on a 12-column grid, with consistent margins and gutters.

The Container is the layout frame that holds a page's content and divides it into columns. It sits on a 12-column grid with consistent outer margins and gutters, and each structure fixes how many columns there are and how wide each one is — from a single full-width column to symmetric and asymmetric splits of two, three or four columns.

Each column is a slot that accepts any content (components, sections or other layouts), so the same frame can host cards, forms, media or text while keeping alignment and spacing consistent across the page. Choose the structure by the relationship between the contents: equal columns for peers, wider columns for the main content, and narrow side columns to frame or inset it.

## When to use
- Laying out page content on the shared 12-column grid with consistent margins and gutters.
- Placing related blocks side by side in equal or weighted columns.
- Centering and constraining content, such as reading-width text, with side columns.
- Building sections and pages that need to stay aligned with each other.

## When not to use
- Spacing elements inside a component — use the component's own spacing tokens.
- Small inline groups such as buttons or tags — use their group components.
- Content that must scroll horizontally, like carousels or marquees.
- Narrow screens below 1025px, where content should stack in a single column.

## Design properties → React props
Structure → `structure` (e.g. `"33% + 33% + 33%"`); Column 01–04 slots → children, in order. Gutter and Margin are always on.
