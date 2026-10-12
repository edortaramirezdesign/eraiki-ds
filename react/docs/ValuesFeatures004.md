---
category: Sections
keywords: ["values", "features", "staggered", "cards", "illustrations", "masonry", "feature cards", "editorial", "offset grid", "three columns"]
---

A centered intro over three staggered illustrated cards.

Values & Features 004 leads with a centered message — an eyebrow, a heading, a line of copy and a pair of actions — then presents three feature cards that step down the page in a staggered rhythm. Each card pairs a short heading with an abstract illustration and a line of supporting copy, so a small set of features reads as a light, editorial layout rather than a rigid row.

The intro reuses the Text group and Button components; the cards sit on a muted surface with illustrations exported from the design. On smaller screens the stagger flattens and the three cards stack into a single column. Use it to present three headline features with a more expressive, illustrated treatment.

## Layout
- Desktop (> 1024px): A centered intro above three cards that step down 0/80/160px.
- Mobile (≤ 1024px): The stagger flattens and the three cards stack into one column.

## When to use
- Presenting three headline features with an illustrated, editorial feel.
- When a staggered, less rigid layout suits the brand.
- Pairing each feature with an abstract illustration rather than an icon.
- A more expressive alternative to the even grid of Values 001.

## When not to use
- More than three items — the stagger and illustrations get unwieldy.
- When features must line up for direct comparison — use an even grid.
- When you have no illustrations and only icons or text.
- Dense, information-heavy features that need a compact list.

## Design properties → React props
Intro → `label` / `title` / children / `primaryAction` / `secondaryAction`; staggered cards → `items` (`{title, text, illustration}`).

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
