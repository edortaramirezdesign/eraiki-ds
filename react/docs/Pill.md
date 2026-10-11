---
category: Actions
keywords: ["pill", "chip", "filter chip", "tag", "toggle", "selectable", "selection", "choice", "segmented"]
---

A single selectable chip with a clear selected state and default, hover and disabled interactions.

A Pill is a compact, selectable chip used for filtering content or making quick, mutually related choices. Each Pill has a clear selected state and the interaction range —default, hover, and disabled— so the current choice is unmistakable.

Pills are the individual items that compose a Pills group. On their own they represent a single toggleable choice; grouped, they let users scan all options and switch selection in a single tap. Pills are not meant for primary page navigation or for triggering actions.

## When to use
- Representing a single, toggleable choice within a set of related options.
- Filtering content or switching category with a clear selected state.
- Composing a Pills group where each option must be scannable at a glance.
- Lightweight selection where a clear on/off state matters more than a full form control.

## When not to use
- Primary page navigation — use Tabs or a menu.
- Formal single/multi selection in a form — use Radio buttons or a Checkbox group.
- Triggering an action — use a Button.
- Static, non-interactive metadata — use a Label or Badge.

## Design properties → React props
Selected → `selected` / `defaultSelected`; State Disabled → `disabled`.
