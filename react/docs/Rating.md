---
category: Data display
keywords: ["rating", "stars", "star rating", "score", "review", "feedback", "evaluation", "five stars", "quality", "ranking", "vote", "average"]
---

A star-based control to display or capture a score from 0 to 5.

The Rating component represents a score on a five-star scale, either to display an existing value (an average review, a quality score) or to let users submit their own. Stars are an instantly recognizable, compact way to communicate evaluation, so users grasp the level without reading a number.

It is composed of individual star fragments that show empty or full fill and default/hover states, and the whole component covers scores from 0 to 5 stars. When precision matters, the exact numeric value should be shown alongside the stars. Ratings are for evaluative, subjective scores —not for representing arbitrary quantities or progress.

## When to use
- Displaying an average or individual score (reviews, quality, satisfaction).
- Capturing a user's subjective evaluation on a familiar 5-star scale.
- When an at-a-glance visual score communicates faster than a number.
- Alongside the numeric value when precision matters.

## When not to use
- Representing arbitrary quantities or counts — use text or a badge.
- Showing progress or completion — use a progress indicator.
- Scales that aren't 0–5 or need finer granularity.
- Non-evaluative data that isn't a rating.

## Design properties → React props
Stars → `value` / `defaultValue`; hover preview is built in.
