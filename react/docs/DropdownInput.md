---
category: Forms
keywords: ["dropdown input", "select field", "form field", "select", "picker", "options", "label", "helper text", "error", "mandatory", "tooltip", "form"]
---

A form field that opens a list of options to choose from, with label, states, and helper/error text.

The Dropdown input is the form-field version of the dropdown pattern: a labeled field that, when activated, opens a list of options for the user to select from. It combines the compactness of a dropdown with the full anatomy of a form field, so selection sits naturally alongside text inputs in a form.

It supports a label, a mandatory marker, a leading icon, a badge, a tooltip for contextual help, and detail text below the field that can be informational or an error message. It covers empty and filled kinds and the complete form state range —default, hover, active, disabled, and error— so validation and availability read clearly. The Error state should be paired with the Error detail text so the user knows what to fix.

## When to use
- Selecting a value from a moderate set of options within a form, next to other fields.
- When the selection needs the full field anatomy: label, mandatory marker, helper/error text.
- Fields that benefit from a leading icon, badge, or tooltip for extra context.
- Cases requiring clear validation through the error state and error detail text.

## When not to use
- Outside a form, as a simple menu trigger — use the base Dropdown.
- Just 2–3 options — use Radio buttons or a segmented control.
- Very long lists needing search — use a searchable field.
- Free text entry — use a text input; the dropdown input is for choosing predefined values.

## Design properties → React props
Label → `label`; Left icon → `icon`; Badge → `badge`; Tooltip → `tooltip`; Detail text → `helperText`; State Error → `error`, Disabled → `disabled`, Active → open menu; Mandatory → `required`.
