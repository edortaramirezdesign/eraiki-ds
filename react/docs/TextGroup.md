---
category: Layout
keywords: ["text group", "text block", "content block", "section", "title", "label", "body text", "heading", "description", "contained", "composable", "layout"]
---

A composable content block combining title, label, text, icon, and an optional action, in default or contained style.

A Text group is a composable content block that assembles the common pieces of a text section —title, label, body text, icon, and an optional action button— into one consistent, reusable unit. Instead of laying out these elements by hand each time, the component guarantees consistent hierarchy and spacing across every text section in the product.

Each part can be toggled on or off (title, label, text, icon, button), so the same component covers anything from a simple paragraph to a full titled section with an action. It comes in two treatments: Default and Contained (wrapped in a surface for more emphasis). Keep the natural hierarchy —label/title first, then text, then action— so the block reads clearly.

## When to use
- Building consistent text sections with a title, body, and optional action.
- When you want hierarchy and spacing handled by the component rather than by hand.
- Blocks that need to flex —toggling title, label, icon, or button on or off.
- Giving a text section extra emphasis with the contained treatment.

## When not to use
- A single standalone piece of text — use a plain text style.
- Interactive rows of data — use Cells / Cells row.
- Page-level messages or alerts — use Banner.
- Recreating the block manually with loose layers instead of the component.

## Design properties → React props
Kind → `kind`; Icon → `icon`; Label → `label`; title → `title`; Text → children; Button → `action`; container color → `background`.
