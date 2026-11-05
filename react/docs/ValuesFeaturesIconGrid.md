---
category: Sections
keywords: ["values", "features", "benefits", "feature grid", "icon cards", "value props", "highlights", "text boxes", "four columns", "feature list"]
---

A centered intro above a row of four icon-led feature cards.

Values & Features Icon Grid leads with a short, centered message — an eyebrow, a heading, a line of copy and a pair of actions — and follows it with a row of four feature cards. Each card is a small icon box, a short title and a line of supporting copy, so a set of benefits reads as one calm, scannable grid rather than a wall of text.

The intro is a Text group with a primary and a secondary action; the cards reuse the same icon-box, title and body building blocks on a muted surface. On smaller screens the four cards stack into a single column and the actions move under one another. Use it to summarise the core values or features of a product in one glanceable band.

## Layout
- Desktop (> 1024px): The intro sits centered above four equal feature cards in a row.
- Mobile (≤ 1024px): The four cards stack into one column and the actions stack too.

## When to use
- Summarising three to four core values or features in one scannable row.
- Pairing a short pitch with a set of icon-led benefit cards.
- Giving each benefit equal weight in a calm, even grid.
- An overview band before deeper feature or pricing sections.

## When not to use
- A single feature that deserves a full text + media block — use an Explanation.
- Long, detailed descriptions per item — cards are meant to stay short.
- More items than fit comfortably in one row — consider a list or multiple rows.
- When each item needs its own call to action — these cards have none.

## Design properties → React props
Intro → `label` / `title` / children / `primaryAction` / `secondaryAction`; feature cards → `items` (`{icon, title, text}`).

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
