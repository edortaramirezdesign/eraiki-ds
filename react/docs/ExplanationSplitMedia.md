---
category: Sections
keywords: ["explanation", "text and image", "image and text", "two columns", "feature", "media", "side by side", "editorial", "alternating", "storytelling"]
---

Two columns pairing a text block with a supporting image.

Explanation Split Media places a text block beside a supporting image to explain an idea while giving it a strong visual anchor. The text carries an eyebrow, a large heading, a short paragraph and up to two actions; the image sits in the opposite column and can lead or follow the text.

Both columns are built from existing components — the Text group and the Image — so type, spacing and button states stay consistent. Alternate the image side between consecutive sections to create rhythm down a long page, and keep each block focused on a single idea.

## Layout
- Desktop (> 1024px): Text and image sit side by side in two equal columns; the image can lead or follow.
- Mobile (≤ 1024px): The columns stack — image on top, text below — with the buttons in a vertical stack.

## Options
- Text + image (`order="text-image"`): The text leads on the left with the image in the right column.
- Image + text (`order="image-text"`): The image leads on the left with the text in the right column.

## When to use
- Explaining an idea that benefits from a single supporting image alongside it.
- Alternating text and image blocks to give a long page rhythm.
- Pairing a short narrative with a product shot, photo or illustration.
- Offering up to two actions — a primary and a secondary — next to the explanation.

## When not to use
- Showing many items at once — use a grid or a list of cards.
- When the image adds no meaning — a plain text section is lighter.
- Dense, reference-style content that needs the full width to stay readable.
- When more than two actions are needed — keep the choice simple.

## Design properties → React props
Text + image / Image + text → `order`; text → `label` / `title` / children; buttons → `primaryAction` / `secondaryAction`; photo → `image`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
