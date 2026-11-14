---
category: Marketing sections
keywords: ["testimonials", "reviews", "social proof", "quotes", "marquee", "auto-scroll", "avatars", "customers", "trust", "carousel"]
---

A centered intro over an auto-scrolling row of quote cards with the author’s avatar.

Testimonials Quote Marquee shows a wall of social proof in motion: a centered intro — an eyebrow, a large heading, a short paragraph and two actions — above a full-bleed row of quote cards that drifts slowly past both edges in a seamless loop.

Each card is a Quote card fragment — a quote icon, the quote in Heading S and the author with an Avatar, name and role — on the base surface with Corner radius M. The marquee stops for users who prefer reduced motion. Use it when you have many short testimonials and want them to feel abundant without taking much space.

## Layout
- Desktop (> 1024px): The intro and both actions sit centered above a full-bleed row of quote cards that scrolls slowly to the left in a seamless loop.
- Mobile (≤ 1024px): Same order, narrower: the intro stays centered and the row shows one card at a time, with the next one peeking in.

## When to use
- Showing many short testimonials as a continuous wall of social proof.
- Adding subtle motion to a landing page without competing with the main message.
- Putting a face and a role to each quote with the author’s avatar.

## When not to use
- A few long or detailed testimonials — use Testimonials Image Cards or a case study.
- When each quote must be read carefully — motion makes that harder; use a static grid.
- When motion has to be kept to a minimum.

## Design properties → React props


Marketing sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
