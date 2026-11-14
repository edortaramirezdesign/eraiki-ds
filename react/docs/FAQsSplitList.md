---
category: Marketing sections
keywords: ["faq", "faqs", "questions", "answers", "accordion", "expandable", "help", "support", "two columns", "split"]
---

A heading on the left beside a list of expandable questions on the right.

FAQs Split List answers common questions in a compact, scannable way: a heading — an eyebrow and a large title — sits in a narrow left column, and the questions stack in a wide right column as expandable cards. Opening a question reveals its answer and closes the one that was open, so the list stays short.

The layout is a Container 34% + 66%; each question is a FAQ item fragment — a question in Heading S with a tertiary icon button (plus / minus) and an answer in Body L — on the base surface with Corner radius M. On mobile the heading stacks above the list. Use it near the end of a page to clear up doubts before a call to action.

## Layout
- Desktop (> 1024px): The heading sits in the narrow left column (34%) and the questions stack in the wide right column (66%); the open question shows its answer.
- Mobile (≤ 1024px): The heading sits on top and the questions stack below it at full width.

## When to use
- Answering the questions people ask most, right where doubts arise.
- Keeping long answers out of the way until someone asks for them.
- Clearing up objections near a sign-up or purchase call to action.

## When not to use
- Content everyone needs to read — put it in the page, not behind a question.
- Long help articles or documentation — link to a help centre instead.
- A single question — use a plain text block.

## Design properties → React props


Marketing sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
