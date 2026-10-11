---
category: Data display
keywords: ["badge", "notification", "count", "counter", "dot", "indicator", "alert", "status", "unread", "new", "marker", "pill"]
---

A small, discreet marker attached to another element to signal a notification, count, or status.

In certain situations, any element can carry an associated notification or alert. In those cases, we accompany the element with the Badge —a discreet visual marker that alerts the user in a prominent yet subtle way, without interrupting the flow.

The badge sits on top of or next to its host element (an icon, a tab, a menu item) to draw attention to something new or pending. It can show a count or act as a simple dot, and its color carries meaning through the semantic palette (Primary, Info, Success, Alert, Error), so the type of signal is recognizable at a glance. Two sizes are available to fit compact or more prominent contexts.

## When to use
- Signaling a count attached to another element (unread messages, pending items, cart quantity).
- Showing a new or pending state with a simple dot, without a full message.
- Drawing subtle attention to icons, tabs, or menu items that need action.
- Communicating status by color using the semantic palette.

## When not to use
- As a standalone label describing an element — use Label.
- When the user needs a full explanation or action — use Banner or a Label with context.
- As a primary action or clickable control on its own.
- Stacking multiple colors/badges on the same element, which dilutes the signal.
- For large numbers shown raw — cap them (e.g. "99+") to keep the badge compact.

## Design properties → React props
Color → `color`; Size Small (dot) → omit children or `dot`; Large → pass the count as children.
