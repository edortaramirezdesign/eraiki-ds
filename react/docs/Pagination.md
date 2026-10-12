---
category: Navigation
keywords: ["pagination", "pages", "page navigation", "paging", "next", "previous", "page numbers", "ellipsis", "results", "list", "table", "navigate"]
---

A control for moving through a large set of results split across pages, with page numbers, navigation arrows, and ellipses.

Pagination lets users move through a large collection of results that has been split into pages, giving them both a sense of scale (how much content there is) and direct control over where they jump. It is the right pattern when users need to navigate deliberately and return to a specific page, rather than scrolling endlessly.

It is composed of numbered page items, previous/next navigation, and ellipses that collapse long ranges so the control stays compact. Page numbers expose default, hover, and active states, so the current page is always clear, and the first/middle/last ellipses and the left/right navigation can be toggled to fit the number of pages. Always keep the current page and the overall context visible.

## When to use
- Navigating a large set of results split into discrete pages (tables, search results, listings).
- When users need to jump to a specific page or return to one they saw before.
- Giving a sense of scale — how many pages/results exist.
- Long ranges that need ellipses to stay compact while keeping first/last reachable.

## When not to use
- Short result sets that fit on one page.
- Content better suited to infinite scroll or "load more" (feeds, continuous browsing).
- Sequential steps of a process — use a stepper/wizard.
- When users never need to return to a specific page and order isn't important.

## Design properties → React props
Pages → `pages`; selected → `page` / `defaultPage`; Previous / Next → `arrows`; Ellipsis appears automatically when `pages` > `visible`.
