---
category: Sections
keywords: ["explanation", "dark card", "card on image", "overlay", "feature", "hero", "editorial", "complementary", "image background", "statement"]
---

A dark card with copy and an image, over a full-bleed background.

Explanation Dark Card sets a dark, self-contained card over a full-bleed background image. Inside the card the copy sits on the left — an eyebrow and a large heading at the top, a short paragraph and a primary action at the bottom — with a supporting image on the right. The dark surface and light text let it sit confidently on top of busy photography.

The card uses the complementary surface with the system's dark text tokens, and is built from the Text group, Button and Image components. Use it for a bold, focused statement over imagery — a single message and one action, not a dense block of content.

## Layout
- Desktop (> 1024px): A dark card over a background image: text on the left, image on the right.
- Mobile (≤ 1024px): The card fills the width with the text stacked above the image.

## When to use
- Making a bold, focused statement over a background image.
- Pairing a short message and one action with a supporting image.
- Adding contrast and depth with a dark card on photography.
- A confident, editorial section break within a long page.

## When not to use
- Dense or detailed content — the dark card suits a short statement.
- When no strong background image is available — use a plain section.
- When several actions or links are needed — keep it to one primary action.
- When text contrast over the image can't be guaranteed without the card.

## Design properties → React props
Text → `label` / `title` / children / `primaryAction`; card image → `image`; full-bleed backdrop → `background`.

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
