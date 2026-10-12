---
category: Forms
keywords: ["text area", "textarea", "multi-line", "long text", "comment", "message", "description", "notes", "word count", "character count", "form field", "error"]
---

A multi-line text field for longer content, with optional word count, footer info, and an action button.

The Text area is the multi-line input of the form system, used to capture longer free-form content —messages, comments, descriptions, notes— where a single line isn't enough. It keeps the standard field anatomy (label, mandatory marker, tooltip, helper text) but gives content room to breathe and be reviewed.

On top of the base field it adds optional pieces tailored to longer text: a word/character count, footer info, and a right-side action button. It covers empty and filled kinds and the full form state range —default, hover, active, error, and disabled. When there is a length limit, the word count should be visible, and the Error state should be paired with the detail text explaining what to fix.

## When to use
- Capturing longer, multi-line content (messages, comments, descriptions, notes).
- When users need room to review and edit what they wrote.
- Fields with a length limit, using the word/character count to guide them.
- Cases needing a contained action (right button) or footer info alongside the input.

## When not to use
- Short, single-line values — use Input field - Text.
- Specialized inputs (password, date, search, PIN) with their own field.
- Choosing from predefined options — use a Dropdown input.
- Fixing the height so short entries waste space or long ones can't be reviewed.

## Design properties → React props
Label → `label`; Detail text → `helperText`; Word count → `showCount` (+ `maxLength`); State Error → `error`, Disabled → `disabled`; Mandatory → `required`.
