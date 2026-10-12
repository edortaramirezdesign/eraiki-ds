---
category: Sections
keywords: ["explanation", "text and marquee", "image marquee", "carousel", "auto-scroll", "infinite scroll", "motion", "full-bleed", "editorial", "contained"]
---

A contained text intro above an auto-scrolling image marquee.

Explanation 005 opens with a contained text block — an eyebrow, a large heading and a short paragraph set in the left half of the column — and follows it with a full-bleed image marquee that scrolls horizontally, edge to edge: images drift off the left and reappear from the right in a slow, seamless loop. The narrow measure keeps the copy readable while the moving strip gives the section an ambient, editorial finish.

The text uses the Text group component and the strip is built from the Image component. The marquee loops continuously with a pure-CSS animation (two duplicated groups) and stops for users who prefer reduced motion. Use it to introduce a topic and let a set of related visuals drift past to carry the mood — not to present images that need to be read or clicked.

## Layout
- Desktop (> 1024px): A contained text block on the left, then a full-width image marquee scrolling left.
- Mobile (≤ 1024px): The text spans the column with the image marquee scrolling below it.

## When to use
- Introducing a topic while a band of related images drifts slowly past.
- Adding subtle, ambient motion and an editorial finish to a section.
- Showing a set of interchangeable, related visuals as one continuous loop.
- Pairing a narrow, readable text measure with full-width, moving imagery.

## When not to use
- When each image must be read, captioned or clicked — motion makes that hard; use a static grid.
- A single hero image — use a full-bleed banner instead.
- Dense content that needs the full width for the text.
- When motion would distract from the primary message or task.

## Design properties → React props
Intro → `label` / `title` / children; scrolling image row → `images`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
