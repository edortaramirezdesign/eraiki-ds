---
category: Sections
keywords: ["values", "features", "numbered list", "steps", "ordered list", "text + image", "principles", "index", "feature list", "dividers"]
---

A heading over an image paired with a numbered feature list.

Values & Features Numbered List opens with a heading, then sets a tall image beside a numbered list. Each row pairs an index and a short title with a line of supporting copy, and thin rules separate one row from the next — so a sequence of features or steps reads in a clear, ordered rhythm next to a supporting visual.

The list reuses the Text group type styles: a muted number, a compact bold title and a quieter description. On smaller screens the image moves above the list and each row stacks its title over its description. Use it to walk through an ordered set of features, principles or steps.

## Layout
- Desktop (> 1024px): The heading sits above an image on the left and a numbered list on the right.
- Mobile (≤ 1024px): The image moves above the list; each row stacks its title over its description.

## When to use
- Walking through an ordered set of features, principles or steps.
- Pairing a numbered list with a supporting image.
- When the sequence or count of items matters (01–04).
- A denser, index-led alternative to icon cards.

## When not to use
- When order does not matter — an unnumbered list or grid reads calmer.
- Very long lists — the numbering and rules get heavy.
- When each item needs an icon or its own action.
- When there is no relevant image to sit beside the list.

## Design properties → React props
Heading → `label` / `title`; numbered rows → `items` (`{title, text}`, numbers are automatic); photo → `image`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
