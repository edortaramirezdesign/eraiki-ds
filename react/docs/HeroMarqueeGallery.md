---
category: Sections
keywords: ["hero", "image gallery", "marquee", "tabs", "progress tabs", "centered intro", "full-bleed", "above the fold", "cta", "categories"]
---

A centered intro over a full-bleed image marquee switched by progress tabs.

Hero Marquee Gallery opens a page with a centered intro — an eyebrow, a large title, a short paragraph and two actions — above a full-bleed row of images in alternating sizes that runs past both edges. Below it, a set of tabs with a progress bar switches the gallery between topics (for example Buy, Sell and Rent), moving to the next one as each bar fills.

The intro is built from the Text group and Button components on the light surface tokens, and the active tab's progress bar uses the accent colour.

## Layout
- Desktop (> 1024px): The intro and both CTAs sit centered above an edge-to-edge row of mixed-size images; the tabs sit centered below.
- Mobile (≤ 1024px): Same order, narrower: the intro stays centered, the image row shows about two images at a time and the tabs span the width.

## When to use
- Opening a page that serves several paths or audiences with one shared message.
- Showing the breadth of a catalogue or service through imagery rather than copy.
- Letting visitors preview each path (e.g. buy, sell, rent) without leaving the hero.
- A lighter, image-led alternative to a full-screen photo hero.

## When not to use
- When there is only one path — use Hero Image Slider or Hero Split Columns.
- When there aren't enough quality images to fill every tab.
- When the tab content must be read or compared side by side — rotating tabs hide it.
- When motion has to be kept to a minimum.

## Design properties → React props
Intro → `label` / `title` / children / `primaryAction` / `secondaryAction`; progress tabs → `tabs` (`{label, images}`); active tab → `defaultActive` / `active`; fill time → `interval` (s); rotation → `autoAdvance`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
