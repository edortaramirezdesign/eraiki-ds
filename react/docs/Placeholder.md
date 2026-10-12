---
category: Layout
keywords: ["placeholder", "filler", "dummy", "mockup", "wireframe", "prototype", "layout", "stand-in", "empty", "reserved space", "skeleton", "draft"]
---

A neutral filler that reserves space for content that is not yet defined.

A Placeholder is a neutral, low-emphasis block used to reserve space for content that hasn't been defined yet. During layout and prototyping it stands in for images, sections, or components still to come, so the structure and spacing of a screen can be evaluated before the real content exists.

Its purpose is intentionally generic: it communicates "something goes here" without implying any specific content or style. Because it carries no real information, it should always be replaced with the final content before hand-off or production —a lingering placeholder signals an unfinished screen.

## When to use
- Prototyping and layout exploration, before the real content is ready.
- Reserving space and structure so spacing and composition can be evaluated.
- Standing in for images, sections, or components still to be designed.
- Communicating "content goes here" in early-stage screens.

## When not to use
- In a finished or production flow — replace it with the real content first.
- As a loading state for content that will populate at runtime — use a skeleton/loading pattern.
- To convey real information of any kind.
- As a substitute for an empty state with its own message and guidance.

## Design properties → React props
Text → children; size → `width` / `height`.
