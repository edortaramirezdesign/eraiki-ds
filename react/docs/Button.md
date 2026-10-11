---
category: Actions
keywords: ["button", "action", "CTA", "call to action", "submit", "primary", "secondary", "tertiary", "icon button", "control", "trigger", "confirm"]
---

An interactive control that triggers an action or navigation, with hierarchy levels for primary and supporting tasks.

Buttons let users trigger an action or move through the interface. They are one of the most fundamental interactive elements, so their appearance communicates importance: the Level property sets the visual hierarchy —Primary for the main action of a view, Secondary and Tertiary for supporting or lower-priority ones.

Each button adapts its composition through the Kind property (text only, text with a leading or trailing icon, or icon only) and comes in two sizes to fit different densities. Interaction is reflected through its states (Default, Hover, Disabled). Used consistently, buttons help users understand which action is the most important on any given screen and what will happen when they act.

## When to use
- Triggering a committed action (save, submit, confirm, delete, continue).
- Highlighting the main action of a view with a Primary button, supported by Secondary/Tertiary ones.
- Icon-only actions in compact areas (toolbars, cards) — with an accessible label/tooltip.
- Any interaction that does something, rather than just navigating within text.

## When not to use
- In-text or plain navigation to another page — use a link.
- On/off toggles or settings — use Switch or Checkbox.
- Choosing among mutually exclusive options — use Radio buttons or a segmented control.
- Lining up several Primary buttons together — reserve Primary for one action per view/section.
- Icon-only buttons without a label for actions whose meaning isn't obvious.

## Design properties → React props
Level → `variant`; Size → `size`; Kind → `iconLeft` / `iconRight` / `icon` (icon-only); State Disabled → `disabled` (Hover is the real :hover).
