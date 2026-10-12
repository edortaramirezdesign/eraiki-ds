---
category: Sections
keywords: ["marquee", "logos", "brands", "press", "social proof", "logo strip", "carousel", "auto-scroll", "partners", "ticker"]
---

A centered intro over a continuously scrolling row of brand logos.

Marquee 001 pairs a short, centered message — an eyebrow, a heading, a line of copy and a primary action — with a row of brand or press logos that scrolls continuously beneath it. The logos are muted to a single tint and split by thin dividers, so the strip reads as quiet social proof without competing with the message.

The intro uses the Text group component and the strip is a pure-CSS marquee (two duplicated logo groups looping seamlessly) that stops for users who prefer reduced motion. Use it to show the brands, press or partners you work with as an ambient band of logos.

## Layout
- Desktop (> 1024px): A centered intro above a full-width row of logos scrolling left.
- Mobile (≤ 1024px): The intro narrows and the logo row keeps scrolling below it.

## When to use
- Showing the brands, press or partners you work with as social proof.
- An ambient, continuously moving band of logos under a short intro.
- Fitting many logos into a compact, scrolling strip.
- Reinforcing credibility without a static, cramped logo grid.

## When not to use
- When each logo must be read carefully or clicked — motion makes that hard.
- Just a few logos that fit comfortably — a static row is calmer.
- When the logos need their real brand colour — this strip mutes them to one tint.
- When motion would distract from a primary conversion goal.

## Design properties → React props
Intro → `label` / `title` / children / `primaryAction`; logo strip → `logos` (image URLs).

Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
