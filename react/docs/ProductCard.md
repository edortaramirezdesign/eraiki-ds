---
category: Commerce
keywords: ["card", "product card", "tile", "item", "collection", "grid", "favorite", "save", "label", "discount", "offer", "preview"]
---

A self-contained surface that groups a single product's content and actions into a consistent, tappable unit.

A Card groups related content and actions about a single subject —a product, an entry, an item— into a self-contained surface that reads as one unit. It gives collections a consistent, scannable structure and a clear tap target, so users can compare items and act on them quickly.

The card adapts to the content it holds: it can show a label, a favorite (save) action, selectable color options, and a discount treatment when an item is on offer, and it reflects interaction through its default and hover states. Because every card in a set shares the same anatomy, the layout stays predictable no matter how the individual content varies.

## When to use
- Presenting items in a collection (products, entries, results) with a consistent layout.
- Making each item a clear, self-contained tap target that leads to detail or action.
- Surfacing item-level extras like a favorite action, label, color options, or a discount.
- Grids or carousels where users scan and compare multiple items.

## When not to use
- A single block of page content that isn't part of a collection — use plain layout/sections.
- As a button — a card holds content and actions, it isn't itself a single control.
- When items are better read as a dense list or table (many rows, quick scanning of one attribute).
- Overloading a card with competing actions that blur which is primary.

## Design properties → React props
Label → `category`; Color options → `swatches`; Discount → `originalPrice` (+ `price` as the sale price).
