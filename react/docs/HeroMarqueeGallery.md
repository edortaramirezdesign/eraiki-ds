---
category: Marketing sections
keywords: ["hero", "image gallery", "marquee", "auto-scroll", "centered intro", "full-bleed", "above the fold", "cta", "editorial", "carousel"]
---

A centered intro over a full-bleed, auto-scrolling image marquee.

Hero Marquee Gallery opens a page with a centered intro — an eyebrow, a large title, a short paragraph and two actions — above a full-bleed row of images in alternating sizes (square and tall) that scrolls slowly past both edges in a seamless loop.

The intro is built from the Text group and Button components on a Container 100%, and the images use Corner radius M. The marquee stops for users who prefer reduced motion. Use it to open a page with one shared message and an image-led, editorial feel.

## Layout
- Desktop (> 1024px): The intro and both CTAs sit centered above an edge-to-edge row of mixed-size images scrolling left.
- Mobile (≤ 1024px): Same order, narrower: the intro stays centered and the image row shows about two images at a time.

## When to use
- Opening a page with one centered message and an image-led, editorial feel.
- Showing the breadth of a catalogue or service through imagery rather than copy.
- Adding subtle, ambient motion above the fold.
- A lighter, image-led alternative to a full-screen photo hero.

## When not to use
- When a single strong photo should carry the hero — use Hero Image Slider or Hero Split Columns.
- When there aren't enough quality images to fill the row.
- When each image must be read, captioned or clicked — motion makes that hard.
- When motion has to be kept to a minimum.

## Design properties → React props
Intro → `label` / `title` / children / `primaryAction` / `secondaryAction`; image row → `images` (alternating square / tall, looped).

Marketing sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
