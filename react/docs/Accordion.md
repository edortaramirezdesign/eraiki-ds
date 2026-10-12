---
category: Layout
keywords: ["accordion", "collapse", "expand", "expandable", "collapsible", "progressive disclosure", "disclosure", "toggle", "show/hide", "FAQ", "section", "panel"]
---

An interactive stack of headers that expand and collapse to reveal or hide their associated content, one section at a time.

An accordion is an interactive element made up of a vertical stack of headers that categorize content. Clicking or interacting with a header expands or collapses the associated content, letting users reveal information through progressive disclosure.

It is especially useful for organizing large volumes of content in a structured way, keeping the interface clean and avoiding visual overload. By showing only the sections a user cares about, the accordion reduces scrolling and helps users focus without losing the overall structure. Each item can be first, middle, or last in the stack, and open or closed independently.

## When to use
- Organizing long or secondary content (FAQs, settings, detail panels) that users read selectively.
- Reducing scroll and visual load on dense screens by hiding content until it's needed.
- Content that splits naturally into independent, labeled sections users can scan by header.
- When users typically need only one or a few sections at a time, not everything at once.

## When not to use
- Content the user must always see at once (critical information, key errors) — show it inline.
- When users need to compare content across sections simultaneously.
- For deeply nested structures — avoid accordions inside accordions; rethink the information architecture.
- Very short content where hiding it behind a header adds friction instead of clarity.
- As a substitute for navigation between pages or steps (use tabs, a menu, or a stepper).

## Design properties → React props
Fragments → `items` (each `{title, content}`); Open → `defaultOpen` (index). Hover / Pressed are real interaction states.
