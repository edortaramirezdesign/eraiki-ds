---
category: Feedback
keywords: ["tooltip", "hint", "popover", "hover", "help", "contextual help", "label", "info", "overlay", "description", "on hover", "explanation"]
---

A small overlay that shows brief contextual help or a label on hover or press, positioned relative to its trigger.

A Tooltip is a small overlay that surfaces brief, contextual information —a label, a definition, a hint— when the user hovers over or presses its trigger. It provides supporting detail on demand without cluttering the interface, keeping the base layout clean while help is one interaction away.

Its text is editable and its arrow adapts to eight positions (top, bottom, left, right, and the four corners), so it can point at its trigger from wherever there's room without covering it. The copy should stay short, and because tooltips aren't reliably reachable on touch, essential information or actions must never live only inside one.

## When to use
- Showing brief supporting detail on demand (a definition, a hint, an icon's meaning).
- Clarifying icon-only controls with an accessible label.
- Keeping the base layout clean while help stays one interaction away.
- Pointing at a trigger from the best available side using the eight positions.

## When not to use
- Essential information or actions — tooltips aren't reliable on touch devices.
- Long or rich content — use a popover, modal, or inline text.
- Persistent messages that should always be visible — use Label, Banner, or helper text.
- Content that must be keyboard/screen-reader reachable as primary information.

## Design properties → React props
Position → `position`; text → `text`; trigger → children (defaults to an info icon).
