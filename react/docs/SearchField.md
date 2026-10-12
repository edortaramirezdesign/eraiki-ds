---
category: Forms
keywords: ["search", "search field", "search bar", "search input", "filter", "query", "find", "lookup", "magnifier", "autocomplete", "clear", "submit"]
---

A field for entering a query to search or filter content, with an optional submit button.

The Search field lets users enter a query to find or filter content. It is a specialized input focused on retrieval: users type a term and either filter results as they go or submit to run the search, making it the entry point for finding things quickly across a dataset or page.

It covers empty and filled kinds and the full interaction range —default, hover, active, error, and disabled— and can show a submit button when search is triggered explicitly rather than as-you-type. It should give clear affordances to submit and to clear the query, and surface a no-results or error situation through the appropriate state.

## When to use
- Letting users find or filter content by typing a query.
- Datasets, lists, or pages where locating something quickly is a common task.
- Search that runs as-you-type or on submit (with the optional button).
- When users need clear ways to submit and clear the query.

## When not to use
- Choosing from predefined options — use a Dropdown or Dropdown input.
- General text entry unrelated to search — use Input field - Text.
- Search that is a primary task but hidden behind an icon with no visible field.
- Very small datasets where a simple filter (pills, tabs) is clearer than a search field.

## Design properties → React props
Button → `button`; State Error → `error`, Disabled → `disabled`; Filled → `defaultValue`.
