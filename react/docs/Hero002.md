---
category: Sections
keywords: ["hero", "image hero", "full-screen", "two columns", "split heading", "above the fold", "headline", "cta", "scrim", "editorial"]
---

Full-screen image hero with two text columns anchored to the bottom.

Hero 002 spreads its content across the bottom of a full-screen image: the headline — an eyebrow and a large title — sits on the left, while a short paragraph and a primary action sit in a narrower column on the right. A dark scrim keeps both columns legible over the photography.

The two columns share the same on-image (dark) tokens and are built from the Text group and Button components; on smaller screens they stack, heading first. Use it when the headline and the supporting copy each deserve their own space over a strong image.

## Layout
- Desktop (> 1024px): The headline sits bottom-left; the paragraph and CTA sit bottom-right.
- Mobile (≤ 1024px): The columns stack — heading first, then the paragraph and CTA.

## When to use
- Giving the headline and the supporting copy their own columns over an image.
- A wide, editorial hero above the fold.
- Balancing a big statement on the left with detail and a CTA on the right.
- Setting the tone with a single strong, full-screen image.

## When not to use
- Narrow layouts where two columns would crowd — use a single-column hero.
- When no strong, meaningful image is available.
- When several competing actions are needed — keep it to one primary CTA.
- When text contrast over the image can't be guaranteed without the scrim.

## Design properties → React props
Eyebrow → `label`; heading → `title`; paragraph → children; button → `primaryAction`; photo → `image`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
