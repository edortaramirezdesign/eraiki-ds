---
category: Sections
keywords: ["marquee", "logos", "logo wall", "tiles", "brands", "partners", "integrations", "clients", "social proof", "auto-scroll"]
---

A centered intro over two rows of logo tiles scrolling in opposite directions.

Marquee Logo Tiles pairs a centered intro — an eyebrow, a large title, a short paragraph and two actions — with two full-width rows of square logo tiles that scroll continuously in opposite directions. Each logo keeps its own colours inside a soft tile, and both edges fade into the background so the rows feel endless.

The intro is built from the Text group and Button components, and the rows are a pure-CSS marquee that moves at the same speed as every other marquee in the system and stops for users who prefer reduced motion. Use it when you have many partners, integrations or clients and want them to read as a rich, lively wall rather than a single quiet strip.

## Layout
- Desktop (> 1024px): A centered intro with two actions above two full-width rows of logo tiles; the rows scroll in opposite directions and fade at both edges.
- Mobile (≤ 1024px): The intro narrows and the two rows show about three tiles at a time, still scrolling and fading at the edges.

## When to use
- Showing a large set of partners, integrations or clients at a glance.
- When the logos should keep their own colours and read as a lively wall.
- A colourful band of social proof under a short, centered intro.
- Filling a wide screen without building a static, cramped logo grid.

## When not to use
- Just a handful of logos — use Marquee Logo Strip or a static row.
- When each logo must be read carefully or clicked — motion makes that hard.
- When the logos must look muted and uniform — Marquee Logo Strip tints them to one colour.
- When motion would distract from a primary conversion goal.

## Design properties → React props
Intro → `label` / `title` / children / `primaryAction` / `secondaryAction`; two logo rows → `rows` (`[row1, row2]` of image URLs; row 1 scrolls left, row 2 right).

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
