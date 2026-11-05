---
category: Sections
keywords: ["explanation", "card on image", "image banner", "overlay card", "feature", "text on image", "editorial", "storytelling", "call to action", "contained"]
---

Full-bleed image banner with a contained text card that explains one idea.

Explanation Banner Card introduces or explains a single idea by laying a contained text card over a full-bleed image. The image sets the context or mood; the card — an eyebrow, a heading, a short paragraph and one call to action — carries the message and keeps it readable on top of the photography.

The card is the Text group component in its contained variant, so its type scale, spacing and button states stay consistent with the rest of the system. Keep it to one clear message and a single primary action — the image is supporting context, not the content itself, so the copy should still make sense if the picture never loads.

## Layout
- Desktop (> 1024px): The image spans the full width with the text card anchored to the top-left.
- Mobile (≤ 1024px): The banner narrows and the card sits at almost full width over the image.

## When to use
- Explaining a single concept, feature or benefit with a supporting image behind it.
- Adding visual context or mood to a short, self-contained message.
- Breaking up a long page with an editorial, image-led moment.
- Driving one clear action from an image-rich section.

## When not to use
- Comparing several features at once — use a grid of cards or a feature list.
- Dense or detailed content that would compete with the image for attention.
- When no meaningful image is available — use a plain text section instead.
- When the message needs more than one action — keep it to a single primary CTA.

## Design properties → React props
Text group card → `label` / `title` / children / `primaryAction`; background photo → `image`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
