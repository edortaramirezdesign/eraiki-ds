---
category: Navigation
keywords: ["tabs", "tab group", "tabbed navigation", "sections", "views", "switch view", "desktop", "panels", "segmented", "selected tab", "navigation", "content switch"]
---

Desktop tabs for switching between peer views within the same context, scaling from 2 to 10 items.

Tabs group - Desktop lets users switch between several peer views that live within the same context, keeping them in place while changing what's shown below. It organizes related content into parallel sections the user can move between freely, without navigating away from the current screen.

It is composed of individual Single tab items —each with a selected state, position (first, middle, last), and the interaction range (default, hover), plus optional icon and badge— and the group scales from 2 to 10 tabs. Exactly one tab should be selected at a time, and labels should be short and parallel. Tabs are for switching views, not for sequential steps or triggering actions.

## When to use
- Switching between peer views that belong to the same context, without leaving the screen.
- Organizing related content into parallel sections users move between freely.
- Desktop layouts with room for 2–10 horizontal tabs.
- When tabs benefit from icons or badges (e.g. a count on a section).

## When not to use
- Sequential steps of a process — use a stepper/wizard.
- Primary site navigation between top-level destinations — use a menu/nav.
- Triggering actions rather than switching views — use Buttons.
- Small screens where the tabs don't fit — use Tabs group - Mobile.
- So many sections they overflow the tab bar — reconsider the structure.

## Design properties → React props
tabs → `items`; Selected → `value` / `defaultValue`.
