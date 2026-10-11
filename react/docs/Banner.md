---
category: Feedback
keywords: ["banner", "message", "notification", "alert", "notice", "inline message", "status", "info", "success", "warning", "error", "callout", "feedback"]
---

A prominent, section- or page-level message that informs the user about a status, event, or the consequences of an action.

The purpose of the Banner is to inform the user, briefly, of a pending action or of the consequences of an action taken on the screen or one of its elements. To achieve this, it offers different colors and options, all aimed at making sure the user is clearly informed and can react when needed.

Its Kind carries the severity through the semantic palette (Info, Success, Alert, Error), so the tone of the message is recognizable at a glance. The banner can show just a title or add a supporting description, include an aside button to let the user act on the message, and optionally a close icon when the message is dismissable. It occupies a fixed area in the layout rather than floating, which makes it suitable for messages that should persist until acknowledged or resolved.

## When to use
- Communicating a page- or section-level status (system state, maintenance, results of an action).
- Informing the user of the consequences of an action or a pending action they should take.
- Messages that should persist in the layout until acknowledged or resolved.
- Offering an inline action related to the message via the aside button.

## When not to use
- Field-level validation — use the input's detail/error text instead.
- Transient, low-priority feedback ("Saved") — use a toast if available.
- Blocking decisions that require a response before continuing — use a modal/dialog.
- Stacking several banners at once — consolidate into a single, clear message.
- Making a critical, action-required banner dismissable with the close icon.

## Design properties → React props
Kind → `kind`; title → `title`; Description → children; Button → `action`; Closable → `closable`.
