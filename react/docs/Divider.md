---
category: Layout
keywords: ["divider", "separator", "rule", "line", "hr", "horizontal rule", "vertical rule", "split", "section", "group", "border", "spacing"]
---

A thin rule that visually separates content into groups, horizontally or vertically.

A Divider is a thin rule used to separate content into distinct groups, giving structure to a layout without adding heavy containers or extra labels. It helps users perceive where one section ends and another begins, improving scannability and reinforcing the grouping of related elements.

It works in two directions —horizontal to split stacked content, vertical to separate side-by-side elements— and two emphasis levels (Medium and Low), so the separation can be as subtle or as noticeable as the context requires. As a rule of thumb, use the lowest emphasis that still communicates the separation clearly.

## When to use
- Separating stacked sections of content (horizontal) so groups read clearly.
- Splitting side-by-side elements (vertical), e.g. between toolbar items or columns.
- Adding structure to dense layouts without introducing full containers.
- Reinforcing the grouping of related items in lists or menus.

## When not to use
- Where whitespace already creates clear separation — a divider would add noise.
- As a decorative element with no grouping purpose.
- Between every single item in a list, which clutters the layout.
- To imply hierarchy or emphasis — use headings, spacing, or containers instead.

## Design properties → React props
Direction → `direction`; Level → `level`.
