---
category: Forms
keywords: ["pin code", "pin", "otp", "one-time password", "verification code", "2fa", "security code", "code input", "segmented input", "confirmation", "digits", "authentication"]
---

A segmented field for entering a short code across separate cells, such as a verification or one-time code.

The PIN code field captures a short code —a one-time password, a verification code, a security PIN— across a set of separate single-character cells. Splitting the code into individual boxes makes each character easy to read and correct, and signals clearly how many digits are expected.

It is composed of individual PIN code input cells, each showing a filled state and the interaction range —default, hover, active, error, and disabled— so progress and validation are visible per cell. To be usable it should auto-advance to the next cell as the user types, support pasting the full code at once, and surface a wrong or expired code through the error state.

## When to use
- Entering a short verification or one-time code (OTP, 2FA, email/SMS confirmation).
- Codes with a fixed, known length where seeing each character helps.
- Flows that benefit from auto-advance and full-code paste.
- Cases needing clear feedback for a wrong or expired code via the error state.

## When not to use
- Passwords or longer secrets — use Input field - Password.
- Variable-length or free-form text — use a standard text input.
- Very long codes where separate cells become cumbersome.
- Flows that can't paste the full code, which frustrates users on mobile.

## Design properties → React props
cells → `length`; State Error → `error`, Disabled → `disabled`; Filled → `defaultValue`.
