---
category: Navigation
keywords: ["breadcrumb", "breadcrumbs", "navigation", "secondary navigation", "wayfinding", "hierarchy", "path", "trail", "location", "levels", "parent page", "you are here"]
---

A navigational trail that shows the user's current location within the site hierarchy and provides one-click access back to any parent level.

Breadcrumbs are a secondary navigation element that helps users understand where they are within a site and how the content is structured and hierarchically organized. Each step represents a level in the hierarchy and links back up the tree, while the current page is shown as the final, non-interactive step.

They give users orientation on deep or nested structures and a fast way to move up one or several levels without relying on the browser's back button. Breadcrumbs support from 1 to 5 levels and should reflect the real content hierarchy, not the path the user happened to take to get there.

## When to use
- Sites or apps with a deep or nested hierarchy (3+ levels) where users need orientation.
- When you want to give users a fast way to move up one or several levels without relying on the main navigation.
- Detail views reached from listings or categories (e.g. Category → Subcategory → Product).
- Flows where users can land directly (external link, search) and need context on where they are.

## When not to use
- Flat sites with only one or two levels — breadcrumbs add noise without value.
- As the primary navigation of the page (that's the role of the menu/nav).
- To represent the steps of a sequential process (use a stepper/wizard instead).
- On mobile with long hierarchies that don't fit — prefer a contextual "Back" button or truncate with an ellipsis.
- When it would simply duplicate an already visible page title and menu.

## Design properties → React props
Levels → `items` (each `{label, href}`; the last one is the current page).
