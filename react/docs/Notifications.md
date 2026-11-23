---
category: Saas sections
keywords: ["notifications", "inbox", "tasks", "approvals", "pending", "agents", "alerts", "dashboard", "saas", "triage"]
---

A card that gathers the tasks waiting for a decision, with a counter and a link to the full inbox.

Notifications brings together the items that need someone’s attention — approvals, sign-offs or suggestions raised by people or automated agents — so they can be reviewed at a glance without leaving the current screen. A heading with a counter label says how many items are waiting, and each item is a Task fragment: an icon tile, a title, a short description with its source and timing, and a status label on the right.

The list shows the most relevant items only, and a primary action at the bottom opens the full inbox. The card is built from the system type styles, Label and Button, and all its colors come from tokens, so it works in light and dark themes.

## Layout
- Desktop (> 1024px): The heading and its counter label sit on top, the pending tasks stack below as Task fragments — icon tile, title, description and a status label — and a primary button closes the card to open the full inbox.
- Mobile (≤ 1024px): Same structure at full mobile width: the tasks keep their layout and their descriptions wrap onto more lines, while spacing and type follow the Mobile size tokens.

## When to use
- Surfacing a few items that wait for a decision or a sign-off.
- Dashboards where people triage requests raised by others or by automated agents.
- Showing how many items are pending and linking to the complete list.
- Highlighting urgent items with a status label.

## When not to use
- Long lists that need filters or bulk actions — use a Table.
- Transient feedback after an action — use a toast or a Banner.
- Notices that block the flow until they are answered — use a dialog.
- A single message with no actions — use a Banner.

## Design properties → React props
Heading → `title`; counter label → `count`; Task fragments → `tasks` (`icon`, `title`, `description`, `label` / `labelKind` — Show label); button → `action` / `onAction`.

Saas sections are product UI blocks for app screens: place them inside your layout; each renders on a Surface Standard-S stage at its Figma width and takes the full width on mobile.
