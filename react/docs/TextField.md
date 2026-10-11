---
category: Forms
keywords: ["text field", "text input", "input", "single-line", "form field", "label", "placeholder", "helper text", "error", "mandatory", "validation", "form"]
---

The base single-line text input, with label, states, and helper/error text.

The Text field is the foundational single-line input of the form system, used to capture short free-form values —names, emails, references, and similar. It sets the standard anatomy that the other input fields build on, so forms stay consistent field to field.

It includes a label, a mandatory marker, a tooltip for contextual help, and detail info text below the field, and it covers empty and filled kinds along with the full form state range: default, hover, active, error, and disabled. The Error state should be paired with the detail text explaining what to fix, and the label should stay visible (not placeholder-only) so users always know what the field expects.

## When to use
- Capturing short, single-line free-form text (name, email, reference, title).
- The default field for most form inputs that don't need a specialized variant.
- When the field needs the full anatomy: label, mandatory marker, tooltip, helper/error text.
- Cases requiring clear validation through the error state and detail info text.

## When not to use
- Long or multi-line content — use Input field - Text area.
- Specialized values with their own field (password, date, date range, search, PIN).
- Choosing from predefined options — use a Dropdown input.
- Placeholder-only labeling that leaves the field unlabeled once the user types.

## Design properties → React props
Label → `label`; Detail text → `helperText`; State Error → `error` (string = message); Disabled → `disabled`; Mandatory → `required`; Tooltip → `tooltip`; Filled → `value` / `defaultValue`.
