---
category: Forms
keywords: ["switch", "toggle", "on/off", "setting", "preference", "enable", "disable", "active", "instant", "boolean", "control", "flip"]
---

A toggle for turning a single setting on or off, taking effect immediately.

A Switch toggles a single setting between two states —on and off— and applies the change immediately, without needing a separate save action. Its physical, toggle-like appearance signals that flipping it has an instant effect, which makes it the right control for settings and preferences that take effect on the spot.

It exposes selected (on/off) and the interaction range —default, hover, and disabled— and can show an inline text label describing the setting. The label should name the setting itself, not the current state, and because the change is instant, a switch shouldn't be used where the user expects to confirm before it applies.

## When to use
- Turning a single setting on or off with an immediate effect.
- Settings and preferences panels where changes apply on the spot.
- Binary states best expressed as a physical toggle (enabled/disabled).
- When an inline label naming the setting improves clarity.

## When not to use
- Changes that need a separate Save/confirm step — use a Checkbox.
- Multiple options or a multi-select — use a Checkbox group.
- Mutually exclusive choices — use Radio buttons.
- Triggering an action rather than persisting a state — use a Button.

## Design properties → React props
Selected → `checked` / `defaultChecked`; State Disabled → `disabled`; Text → children.
