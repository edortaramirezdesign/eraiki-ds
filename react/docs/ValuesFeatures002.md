---
category: Sections
keywords: ["values", "features", "feature list", "benefits", "text + image", "highlighted item", "icon list", "vertical list", "image", "showcase"]
---

A heading and a vertical feature list beside a tall image.

Values & Features 002 puts a heading and a vertical list of features on one side and a tall image on the other. The first item is highlighted on a muted surface and carries a line of supporting copy, while the rest stay as compact title-only rows — a simple way to lead with one key feature and let the others follow.

Each row pairs an accent-filled icon box with its title, reusing the Text group building blocks so type and spacing match the rest of the system. On smaller screens the list stacks above the image. Use it to walk through a handful of features next to a supporting visual.

## Layout
- Desktop (> 1024px): The heading and feature list sit left; a tall image fills the right.
- Mobile (≤ 1024px): The heading and list stack first, with the image below them.

## When to use
- Walking through a handful of features next to a supporting image.
- Leading with one key feature (highlighted, with copy) over a list of others.
- Pairing a vertical, icon-led list with a tall product visual.
- A calmer alternative to an even grid when one item should stand out.

## When not to use
- Giving every feature equal weight — use the even grid of Values 001.
- When there is no relevant image to sit beside the list.
- Long descriptions on every row — only the lead item is meant to expand.
- More items than read comfortably as a single vertical column.

## Design properties → React props
Heading → `label` / `title`; feature list → `items` (`{icon, title, text}`); open item → `defaultActive` / `active`; photo → `image`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
