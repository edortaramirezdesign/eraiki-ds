---
category: Data display
keywords: ["label", "status", "tag", "chip", "category", "state", "marker", "badge", "neutral", "info", "success", "error"]
---

A small, non-interactive marker that categorizes or qualifies an element by meaning, with optional icon and badge.

A Label is a compact, non-interactive marker used to categorize or qualify an element —to communicate a status, a category, or a state at a glance. It condenses meaning into a small piece of UI, helping users classify and scan content quickly without reading a full sentence.

Its Kind carries meaning through the palette —Neutral for plain categorization, and Info, Alert, Error, or Success for semantic states— so the type of information is recognizable by color. It can include a leading icon to reinforce the meaning and a badge for an additional count or signal. Because it isn't interactive, it should never look clickable; for interactive filters or removable tokens, use Pills instead.

## When to use
- Communicating a status or state of an element (Info, Alert, Error, Success).
- Categorizing or qualifying content so it's scannable at a glance.
- When a color-coded, non-interactive marker conveys meaning faster than text.
- Reinforcing meaning with an icon or adding a badge for an extra signal.

## When not to use
- Interactive filters or selectable tokens — use Pills.
- Removable tokens (e.g. selected filters with a close action) — use Pills.
- Signaling a notification/count attached to another element — use Badge.
- As a button or link — a label must never look clickable.

## Design properties → React props
Kind → `kind`; Badge (dot) → `dot`.
