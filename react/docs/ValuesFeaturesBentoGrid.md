---
category: Marketing sections
keywords: ["values", "features", "bento", "grid", "feature cards", "benefits", "icons", "centered intro", "cta", "six cards"]
---

A centered intro over a grid of six feature cards in three columns.

Values & Features Bento Grid presents six features or values as a grid of cards: a centered intro — an eyebrow, a large heading, a short paragraph and two actions — above three equal columns, each stacking two feature cards.

Each card is a Text group — an icon tile, a short title and a line of copy — on the base surface with Corner radius M, over a light section background. Both rows are built on Containers, so margins and gutters match the rest of the system. On mobile the cards stack into a single column. Use it to summarise six key features or values at a glance.

## Layout
- Desktop (> 1024px): A centered intro and two actions above six feature cards in three equal columns, two per column.
- Mobile (≤ 1024px): The intro stays centered and the six cards stack into a single column.

## When to use
- Summarising six key features or values at a glance.
- Pairing a short pitch and its actions with the features that back it up.
- Giving every feature the same weight in a compact, scannable grid.

## When not to use
- Long or detailed feature descriptions — use a list or a dedicated section.
- Four features or fewer — use the Icon Grid instead.
- Features that need imagery to be understood — use an image-led section.

## Design properties → React props


Marketing sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
