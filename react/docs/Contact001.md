---
category: Sections
---

Contact 001 is a two-column contact block: the message (eyebrow, heading and a short paragraph) on one side and a simple form on the other — labelled text fields, a message text area and a single primary submit button. On narrow screens the columns stack, message first. Use it at the end of a page to collect enquiries; keep the form short.

## Layout
- Desktop (> 1024px): Two columns side by side: the message and its supporting copy on the left, the form on the right.
- Mobile (≤ 1024px): The two columns collapse into a single stack — the message first, then the form below it.

## Options
- Text + Form (`order="text-form"`): The message leads on the left and the form follows on the right — the default reading order.
- Form + Text (`order="form-text"`): The form leads on the left with the message on the right — for when completing the form is the primary action.

## Design properties → React props
Text + Form / Form + Text → `order`; message → `label` / `title` / children; fields → `fields` (`{label, placeholder, type, multiline}`); button → `submitLabel` (+ `onSubmit`).

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
