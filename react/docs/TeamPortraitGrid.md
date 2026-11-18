---
category: Marketing sections
keywords: ["team", "people", "members", "portraits", "grid", "profiles", "community", "about us", "faces", "cards"]
---

A heading over a grid of member portraits with their number, name and role.

Team Portrait Grid introduces the people behind a team, club or community. A short heading leads into a grid of portrait cards — each a 3:4 photo with a member number, the person's name and their role — so the group reads as a set of real faces rather than a list.

The header is a Container 50% + 50% — a Text group on the left and a tertiary action on the right — and both card rows are Containers 25% × 4 of Member cards, built with the system type styles. On mobile the grid becomes two columns.

## Layout
- Desktop (> 1024px): The label and heading sit left with a tertiary action bottom-right; eight portrait cards fill two rows of 25% columns below, each with a member number, name and role.
- Mobile (≤ 1024px): The heading and action stack above the portraits, which form a two-column grid.

## When to use
- Introducing the members of a team, club or community with a face for each.
- Showing a group where every person carries the same weight.
- Putting faces to an About us or community page.
- Pairing each portrait with short facts: number, name and role.

## When not to use
- Leadership bios or long profiles — use a dedicated team page.
- One or two people — use a split text + image section.
- When there are no real portraits to show.
- Very large directories — use a searchable list instead.

## Design properties → React props


Marketing sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.
