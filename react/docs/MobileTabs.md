---
category: Navigation
keywords: ["tabs", "mobile tabs", "tab group", "tabbed navigation", "sections", "views", "switch view", "mobile", "collapsible", "responsive", "active tab", "content switch"]
---

The mobile adaptation of tabs for switching between peer views, with a collapsible open/closed state.

Tabs group - Mobile adapts the tab pattern to small screens, letting users switch between peer views within the same context where horizontal space is limited. It keeps the same mental model as desktop tabs —parallel sections the user moves between without leaving the screen— but fits the constraints of a mobile layout.

The group has a collapsible Closed/Open state so the full set of tabs can be revealed on demand instead of crowding the viewport, and each Single tab exposes active/default states, a position (first, middle, last), and optional icon and badge. Exactly one tab stays active at a time, and the selected view should remain reachable even when the group is collapsed.

## When to use
- Switching between peer views on small screens where horizontal space is tight.
- Mobile layouts that need a collapsible tab set to save space.
- Organizing related content into parallel sections without leaving the screen.
- When tabs benefit from icons or badges on mobile.

## When not to use
- Desktop layouts with room for a full horizontal tab bar — use Tabs group - Desktop.
- Sequential steps of a process — use a stepper/wizard.
- Primary app navigation between top-level destinations — use a bottom nav/menu.
- Triggering actions rather than switching views — use Buttons.

## Design properties → React props
tabs → `items`; Selected → `value` / `defaultValue`; Open → `defaultOpen`.
