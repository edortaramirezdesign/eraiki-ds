---
category: Sections
keywords: ["explanation", "two cards", "text and image", "image and text", "split panel", "feature", "media", "side by side", "landscape", "alternating"]
---

Two equal cards: a text panel beside an image panel.

Explanation 003 splits the section into two equal cards — one holding the copy, the other an image — sitting side by side with a hairline gap. The text card carries an eyebrow, a large heading, a short paragraph and up to two actions; the image card holds a single landscape photo cropped to fill.

Both cards share the same rounded shape and height, so the pairing reads as one balanced unit rather than a banner with an overlay. Use it to explain an idea that deserves equal weight for words and picture, and alternate the image side between sections to keep a long page moving.

## Layout
- Desktop (> 1024px): Two equal cards side by side — a text panel and an image panel — with a hairline gap.
- Mobile (≤ 1024px): The cards stack — the text panel on top, the image panel below it.

## Options
- Text + image (`order="text-image"`): The text card leads on the left with the image card on the right.
- Image + text (`order="image-text"`): The image card leads on the left with the text card on the right.

## When to use
- Giving the copy and the image equal visual weight in one balanced unit.
- Explaining an idea with a single supporting landscape image.
- Alternating the image side across consecutive sections for rhythm.
- Offering up to two actions — a primary and a secondary — beside the copy.

## When not to use
- Showing several items at once — use a grid or a list of cards.
- When the image should dominate — use a full-bleed banner instead.
- Dense, reference-style content that needs the full width to stay readable.
- When more than two actions are needed — keep the choice simple.

## Design properties → React props
Text + image / Image + text → `order`; text card → `label` / `title` / children / `primaryAction` / `secondaryAction`; image card → `image`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
