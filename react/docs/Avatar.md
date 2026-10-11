---
category: Data display
keywords: ["avatar", "profile", "user", "picture", "photo", "initials", "placeholder", "identity", "account", "person", "badge", "status"]
---

A visual element that identifies and personalizes a user, shown as an image, initials, or a placeholder.

An avatar is a visual element used to identify and personalize a user. It provides a consistent, recognizable way to represent people across the interface, helping users quickly associate content and actions with a specific identity.

The avatar adapts to the data available: a profile image when there is one, the user's initials as a fallback, or a neutral placeholder when no information exists. It comes in three sizes to fit different contexts —from compact lists to prominent profile headers— and can carry a badge to signal status or notifications tied to that user.

## When to use
- Representing a person or account in lists, headers, comments, menus, or profile areas.
- Helping users quickly recognize who authored or owns a piece of content or action.
- Adding a personal, human touch to an interface that deals with people.
- Signaling user-level status or notifications by pairing the avatar with a badge.

## When not to use
- Representing a brand, product, or organization — use a logo or icon instead.
- As a decorative image with no identity meaning.
- When identifying an individual matters and space allows a full list (consider Avatar group only when the set, not each person, is the point).
- As an interactive button on its own — pair it with a clear, labeled action.

## Design properties → React props
Kind Image → `src`; Initials → `initials`; Placeholder → neither; Size → `size`; Badge → `badge` (true = dot, or a count) + `badgeColor`.
