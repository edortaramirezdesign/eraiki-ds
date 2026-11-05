---
category: Sections
keywords: ["hero", "image hero", "full-bleed", "above the fold", "banner", "headline", "cta", "carousel", "scrim", "landing"]
---

Full-bleed image hero with the headline and actions anchored to the bottom.

Hero Image Slider is a full-bleed image hero: a large photograph fills the block, a dark scrim keeps the copy legible, and the content sits at the bottom. The message — an eyebrow, a big heading and a short paragraph — occupies the lower-left, with a primary action and a pair of previous / next arrows along the base.

Text and controls use the system's dark (on-image) tokens, and it is built from the Text group and Button components. Use it above the fold to set the tone with a single strong image and one clear call to action; the arrows suit a rotating set of slides.

## Layout
- Desktop (> 1024px): The image fills the block; the headline sits lower-left with the actions along the bottom.
- Mobile (≤ 1024px): The image and copy stack full-width, with the actions below the text.

## When to use
- Opening a page above the fold with a strong, full-bleed image.
- Pairing a headline and one primary action over photography.
- A rotating hero with previous / next controls.
- Setting the tone or mood before the rest of the page.

## When not to use
- When no high-quality, meaningful image is available.
- Dense content or several competing actions — keep it to one message.
- When text contrast over the image can't be guaranteed without the scrim.
- Utility pages where a plain header is more appropriate.

## Design properties → React props
Eyebrow → `label`; heading → `title`; paragraph → children; button → `primaryAction`; arrows → `showNav` (+ `onPrevious` / `onNext`); photo → `image`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
