---
category: Saas sections
keywords: ["kpis", "metrics", "stats", "dashboard", "numbers", "cards", "status", "overview", "saas", "analytics"]
---

A row of cards that highlight key metrics, each with its value, status and context.

KPIs highlights the few numbers that matter most on a dashboard so they can be read at a glance. Each metric is a single KPI card fragment: an icon tile coloured by tone — Info, Success, Alert or Error — next to the metric’s label, an optional status label on the right, the value in Display M with its unit in Heading M, and a short caption that explains where the number comes from.

The same fragment covers every metric: its options show or hide the icon, the status label and the caption, and the tone of the icon tile is chosen from the card itself. On desktop the cards sit in a row and wrap onto a new row when they no longer fit; on mobile they stack in a single column. All colours come from tokens, so the cards follow the light and dark themes.

## Layout
- Desktop (> 1024px): The KPI cards sit side by side, one per metric, and wrap onto a new row when they no longer fit — three per row with the fourth below the first. Each card shows an icon tile in the tone of the metric with its label, a status label on the right, the value in large type with its unit, and a short caption that gives context.
- Mobile (≤ 1024px): The same cards stack in a single column at full mobile width, keeping their content and order; spacing and type follow the Mobile size tokens.

## When to use
- Highlighting the key numbers of a dashboard or overview screen.
- Showing a value together with its status against a target.
- Giving each metric a short context, such as its period or source.
- Comparing a few metrics of the same kind side by side.

## When not to use
- Many figures or detailed breakdowns — use a Table.
- Trends over time — use a chart.
- Marketing numbers on a landing page — use a stats section.
- Pending items that need a decision — use Notifications.

## Design properties → React props
KPI card fragments → `items`: Tone → `tone`; Show icon → `icon` (`null` hides it); Show status → `status` / `statusKind`; value + unit → `value` / `unit`; Show caption → `caption`; State (Default / Hover / Active) comes from the pointer — pass `href` / `onClick` for the target.

## States
- Default: At rest the card shows a light standard border. The whole card is interactive: it can be selected to open the detail behind the metric.
- Hover: When the pointer is over the card the border darkens to the hover tone, signalling that it can be clicked.
- Active: While the card is pressed, or when it is the selected metric, the border takes the active tone.

## Behaviors
- Wrap: On desktop the cards keep their width and sit side by side. When the container is narrower than all the cards together, the ones that don’t fit wrap onto a new row, starting again from the left and keeping the same gap between rows as between cards — here three cards fit and the fourth drops below the first.

Saas sections are product UI blocks for app screens: place them inside your layout; each renders on a Surface Standard-S stage at its Figma width and takes the full width on mobile.
