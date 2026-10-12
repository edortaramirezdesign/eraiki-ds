---
category: Data display
keywords: ["image", "picture", "photo", "media", "thumbnail", "aspect ratio", "ratio", "crop", "frame", "cover", "orientation", "gallery"]
---

A controlled frame for displaying imagery with a fixed orientation and a defined aspect ratio.

The Image component displays imagery inside a controlled frame with a fixed orientation and a defined aspect ratio. Rather than letting pictures dictate their own dimensions, it enforces consistent proportions so media aligns cleanly across cards, grids, and layouts, no matter the source file.

It offers vertical and horizontal orientations and a wide set of aspect ratios —from 1:1 up to 21:9 and the golden ratio— so the same component can frame avatars, thumbnails, hero images, or wide banners. Images fill the frame and are cropped to fit rather than distorted, keeping proportions correct. Picking one ratio per collection keeps galleries and grids visually consistent.

## When to use
- Displaying imagery that must keep a consistent aspect ratio across a layout.
- Cards, grids, or galleries where every image should align to the same proportions.
- Framing different image types —thumbnails, hero images, wide banners— from one component.
- Any place where source files vary in size but the layout needs predictable dimensions.

## When not to use
- Icons or logos that need exact, unscaled rendering — use the icon/logo asset directly.
- Imagery that must show in full without cropping (where a specific ratio can't be enforced).
- Decorative backgrounds handled better by layout/background styles.
- Mixing many different ratios within one collection, which breaks visual consistency.

## Design properties → React props
Orientation → `orientation`; Aspect ratio → `ratio` ("golden" = Golden ratio).
