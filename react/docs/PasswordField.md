---
category: Forms
keywords: ["password", "password field", "credentials", "login", "sign in", "sign up", "masked input", "show/hide", "visibility toggle", "security", "form field", "error"]
---

A form field for entering a password, with a show/hide toggle, label, and helper/error text.

The Password field is a form input specialized in capturing sensitive credentials. It masks the characters by default and offers a visibility toggle so users can reveal what they typed to check it, balancing privacy with the ability to catch typos before submitting.

It shares the standard field anatomy —label and detail info text— and covers empty and filled kinds along with the full form state range: default, hover, active, error, and disabled. The Visible property controls whether the entry is masked or shown. To be usable, it should state the password requirements in the helper text, surface problems through the error state, and never block pasting or clear the field on a validation error.

## When to use
- Capturing a password or sensitive credential in login, sign-up, or account forms.
- When users benefit from a show/hide toggle to verify what they typed.
- Fields that need to communicate password requirements via helper text.
- Cases requiring clear validation through the error state and detail info text.

## When not to use
- Non-sensitive text values — use a standard text input.
- One-time codes / OTP / verification PINs — use the PIN code component.
- When masking adds no value (a field that isn't a secret).
- Flows that block paste or wipe the field on error — that harms usability and password managers.

## Design properties → React props
Label → `label`; Detail text → `helperText`; State Error → `error`, Disabled → `disabled`; Filled → `defaultValue`. The eye toggle is built in.
