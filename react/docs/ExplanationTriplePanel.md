---
category: Sections
keywords: ["explanation", "three panels", "showcase", "gallery", "images and text", "feature", "media row", "editorial", "header", "card"]
---

A header over a three-panel row of two images and a text card.

Explanation Triple Panel leads with a short header — an eyebrow and a heading — and follows it with a row of three equal panels: two images and a text card carrying its own eyebrow, heading, paragraph and action. It works as a compact showcase where a couple of visuals and a message share equal billing.

The panels are built from the Image and Text group components and keep a consistent height and rounded shape, so the trio reads as one band. On narrow screens the row stacks into a single column. Use it to open a topic with supporting imagery, or to pair a gallery moment with a clear call to action.

## Layout
- Desktop (> 1024px): A header above three equal panels — two images and a text card — in one row.
- Mobile (≤ 1024px): The header stays on top and the three panels stack into a single column.

## When to use
- Introducing a topic with a short header and a small set of supporting visuals.
- Showing two images alongside a message and a single action.
- A compact showcase band inside a longer page.
- Pairing a gallery moment with a clear call to action.

## When not to use
- Large galleries or many images — use a dedicated gallery or grid.
- When one image should dominate — use a full-bleed banner instead.
- Dense, text-heavy content that needs the full width to stay readable.
- When more than one primary action is needed per panel.

## Design properties → React props
Header → `label` / `title`; image panels → `images` (two); text card → `cardLabel` / `cardTitle` / children / `primaryAction`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
