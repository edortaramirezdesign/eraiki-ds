/* AUTO-GENERATED from design.md by scripts/build-data.py — do not hand-edit. */
window.ERAIKI_COMPONENTS = [
 {
  "name": "Accordion",
  "slug": "accordion",
  "short": "An interactive stack of headers that expand and collapse to reveal or hide their associated content, one section at a time.",
  "context": "An accordion is an interactive element made up of a vertical stack of headers that categorize content. Clicking or interacting with a header expands or collapses the associated content, letting users reveal information through progressive disclosure.\n\nIt is especially useful for organizing large volumes of content in a structured way, keeping the interface clean and avoiding visual overload. By showing only the sections a user cares about, the accordion reduces scrolling and helps users focus without losing the overall structure. Each item can be first, middle, or last in the stack, and open or closed independently.",
  "keywords": [
   "accordion",
   "collapse",
   "expand",
   "expandable",
   "collapsible",
   "progressive disclosure",
   "disclosure",
   "toggle",
   "show/hide",
   "FAQ",
   "section",
   "panel"
  ],
  "whenToUse": [
   "Organizing long or secondary content (FAQs, settings, detail panels) that users read selectively.",
   "Reducing scroll and visual load on dense screens by hiding content until it's needed.",
   "Content that splits naturally into independent, labeled sections users can scan by header.",
   "When users typically need only one or a few sections at a time, not everything at once."
  ],
  "whenNotToUse": [
   "Content the user must always see at once (critical information, key errors) — show it inline.",
   "When users need to compare content across sections simultaneously.",
   "For deeply nested structures — avoid accordions inside accordions; rethink the information architecture.",
   "Very short content where hiding it behind a header adds friction instead of clarity.",
   "As a substitute for navigation between pages or steps (use tabs, a menu, or a stepper)."
  ],
  "properties": [
   {
    "property": "State",
    "raw": "Default, Hover",
    "options": [
     "Default",
     "Hover"
    ]
   },
   {
    "property": "Position",
    "raw": "First, Middle, Last",
    "options": [
     "First",
     "Middle",
     "Last"
    ]
   },
   {
    "property": "Open",
    "raw": "Yes, No",
    "options": [
     "Yes",
     "No"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Avatar",
  "slug": "avatar",
  "short": "A visual element that identifies and personalizes a user, shown as an image, initials, or a placeholder.",
  "context": "An avatar is a visual element used to identify and personalize a user. It provides a consistent, recognizable way to represent people across the interface, helping users quickly associate content and actions with a specific identity.\n\nThe avatar adapts to the data available: a profile image when there is one, the user's initials as a fallback, or a neutral placeholder when no information exists. It comes in three sizes to fit different contexts —from compact lists to prominent profile headers— and can carry a badge to signal status or notifications tied to that user.",
  "keywords": [
   "avatar",
   "profile",
   "user",
   "picture",
   "photo",
   "initials",
   "placeholder",
   "identity",
   "account",
   "person",
   "badge",
   "status"
  ],
  "whenToUse": [
   "Representing a person or account in lists, headers, comments, menus, or profile areas.",
   "Helping users quickly recognize who authored or owns a piece of content or action.",
   "Adding a personal, human touch to an interface that deals with people.",
   "Signaling user-level status or notifications by pairing the avatar with a badge."
  ],
  "whenNotToUse": [
   "Representing a brand, product, or organization — use a logo or icon instead.",
   "As a decorative image with no identity meaning.",
   "When identifying an individual matters and space allows a full list (consider Avatar group only when the set, not each person, is the point).",
   "As an interactive button on its own — pair it with a clear, labeled action."
  ],
  "properties": [
   {
    "property": "Kind",
    "raw": "Image, Placeholder, Initials",
    "options": [
     "Image",
     "Placeholder",
     "Initials"
    ]
   },
   {
    "property": "Size",
    "raw": "Small, Medium, Large",
    "options": [
     "Small",
     "Medium",
     "Large"
    ]
   },
   {
    "property": "Show badge",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Avatar group",
  "slug": "avatar-group",
  "short": "A stacked set of avatars that represents a group of users at a glance, with an overflow count for larger groups.",
  "context": "The avatar group is used when we want to convey that a feature, page, or section has a direct impact on a specific, identifiable group of users. It stacks several avatars together so the set of people reads as a single unit, rather than as separate individuals.\n\nIt is ideal for communicating shared ownership, participation, or membership —who is involved in something— without listing every person in full. When the group is larger than the visible slots, an overflow indicator (e.g. \"+3\") keeps the layout compact while still signaling the real size. Two sizes are available to fit denser or more prominent contexts.",
  "keywords": [
   "avatar group",
   "avatars",
   "stacked avatars",
   "group",
   "members",
   "participants",
   "collaborators",
   "shared",
   "people",
   "overflow",
   "+N",
   "team"
  ],
  "whenToUse": [
   "Showing shared ownership or participation (members of a project, participants in a thread, collaborators on a file).",
   "Conveying that something affects or involves a group of people as a whole.",
   "Presenting a collection of users compactly where the set matters more than each individual.",
   "Hinting at group size while saving space, thanks to the overflow count."
  ],
  "whenNotToUse": [
   "When individual identity matters and users must recognize or act on each person — show a full list.",
   "For a single user — use a plain Avatar.",
   "When users need to interact with specific members (message, remove, view profile) directly from the stack.",
   "Representing brands or entities rather than people."
  ],
  "properties": [
   {
    "property": "Size",
    "raw": "Small, Medium",
    "options": [
     "Small",
     "Medium"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Badge",
  "slug": "badge",
  "short": "A small, discreet marker attached to another element to signal a notification, count, or status.",
  "context": "In certain situations, any element can carry an associated notification or alert. In those cases, we accompany the element with the Badge —a discreet visual marker that alerts the user in a prominent yet subtle way, without interrupting the flow.\n\nThe badge sits on top of or next to its host element (an icon, a tab, a menu item) to draw attention to something new or pending. It can show a count or act as a simple dot, and its color carries meaning through the semantic palette (Primary, Info, Success, Alert, Error), so the type of signal is recognizable at a glance. Two sizes are available to fit compact or more prominent contexts.",
  "keywords": [
   "badge",
   "notification",
   "count",
   "counter",
   "dot",
   "indicator",
   "alert",
   "status",
   "unread",
   "new",
   "marker",
   "pill"
  ],
  "whenToUse": [
   "Signaling a count attached to another element (unread messages, pending items, cart quantity).",
   "Showing a new or pending state with a simple dot, without a full message.",
   "Drawing subtle attention to icons, tabs, or menu items that need action.",
   "Communicating status by color using the semantic palette."
  ],
  "whenNotToUse": [
   "As a standalone label describing an element — use Label.",
   "When the user needs a full explanation or action — use Banner or a Label with context.",
   "As a primary action or clickable control on its own.",
   "Stacking multiple colors/badges on the same element, which dilutes the signal.",
   "For large numbers shown raw — cap them (e.g. \"99+\") to keep the badge compact."
  ],
  "properties": [
   {
    "property": "Size",
    "raw": "Small, Large",
    "options": [
     "Small",
     "Large"
    ]
   },
   {
    "property": "Color",
    "raw": "Primary, Info, Success, Alert, Error",
    "options": [
     "Primary",
     "Info",
     "Success",
     "Alert",
     "Error"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Banner",
  "slug": "banner",
  "short": "A prominent, section- or page-level message that informs the user about a status, event, or the consequences of an action.",
  "context": "The purpose of the Banner is to inform the user, briefly, of a pending action or of the consequences of an action taken on the screen or one of its elements. To achieve this, it offers different colors and options, all aimed at making sure the user is clearly informed and can react when needed.\n\nIts Kind carries the severity through the semantic palette (Info, Success, Alert, Error), so the tone of the message is recognizable at a glance. The banner can show just a title or add a supporting description, include an aside button to let the user act on the message, and optionally a close icon when the message is dismissable. It occupies a fixed area in the layout rather than floating, which makes it suitable for messages that should persist until acknowledged or resolved.",
  "keywords": [
   "banner",
   "message",
   "notification",
   "alert",
   "notice",
   "inline message",
   "status",
   "info",
   "success",
   "warning",
   "error",
   "callout",
   "feedback"
  ],
  "whenToUse": [
   "Communicating a page- or section-level status (system state, maintenance, results of an action).",
   "Informing the user of the consequences of an action or a pending action they should take.",
   "Messages that should persist in the layout until acknowledged or resolved.",
   "Offering an inline action related to the message via the aside button."
  ],
  "whenNotToUse": [
   "Field-level validation — use the input's detail/error text instead.",
   "Transient, low-priority feedback (\"Saved\") — use a toast if available.",
   "Blocking decisions that require a response before continuing — use a modal/dialog.",
   "Stacking several banners at once — consolidate into a single, clear message.",
   "Making a critical, action-required banner dismissable with the close icon."
  ],
  "properties": [
   {
    "property": "Kind",
    "raw": "Info, Success, Alert, Error",
    "options": [
     "Info",
     "Success",
     "Alert",
     "Error"
    ]
   },
   {
    "property": "Show description",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show aside button",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show close icon",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Breadcrumb",
  "slug": "breadcrumb",
  "short": "A navigational trail that shows the user's current location within the site hierarchy and provides one-click access back to any parent level.",
  "context": "Breadcrumbs are a secondary navigation element that helps users understand where they are within a site and how the content is structured and hierarchically organized. Each step represents a level in the hierarchy and links back up the tree, while the current page is shown as the final, non-interactive step.\n\nThey give users orientation on deep or nested structures and a fast way to move up one or several levels without relying on the browser's back button. Breadcrumbs support from 1 to 5 levels and should reflect the real content hierarchy, not the path the user happened to take to get there.",
  "keywords": [
   "breadcrumb",
   "breadcrumbs",
   "navigation",
   "secondary navigation",
   "wayfinding",
   "hierarchy",
   "path",
   "trail",
   "location",
   "levels",
   "parent page",
   "you are here"
  ],
  "whenToUse": [
   "Sites or apps with a deep or nested hierarchy (3+ levels) where users need orientation.",
   "When you want to give users a fast way to move up one or several levels without relying on the main navigation.",
   "Detail views reached from listings or categories (e.g. Category → Subcategory → Product).",
   "Flows where users can land directly (external link, search) and need context on where they are."
  ],
  "whenNotToUse": [
   "Flat sites with only one or two levels — breadcrumbs add noise without value.",
   "As the primary navigation of the page (that's the role of the menu/nav).",
   "To represent the steps of a sequential process (use a stepper/wizard instead).",
   "On mobile with long hierarchies that don't fit — prefer a contextual \"Back\" button or truncate with an ellipsis.",
   "When it would simply duplicate an already visible page title and menu."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Breadcrumbs",
    "raw": "Levels",
    "options": [
     "Levels"
    ]
   },
   {
    "property": "Breadcrumb item",
    "raw": "State",
    "options": [
     "State"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Button",
  "slug": "button",
  "short": "An interactive control that triggers an action or navigation, with hierarchy levels for primary and supporting tasks.",
  "context": "Buttons let users trigger an action or move through the interface. They are one of the most fundamental interactive elements, so their appearance communicates importance: the Level property sets the visual hierarchy —Primary for the main action of a view, Secondary and Tertiary for supporting or lower-priority ones.\n\nEach button adapts its composition through the Kind property (text only, text with a leading or trailing icon, or icon only) and comes in two sizes to fit different densities. Interaction is reflected through its states (Default, Hover, Disabled). Used consistently, buttons help users understand which action is the most important on any given screen and what will happen when they act.",
  "keywords": [
   "button",
   "action",
   "CTA",
   "call to action",
   "submit",
   "primary",
   "secondary",
   "tertiary",
   "icon button",
   "control",
   "trigger",
   "confirm"
  ],
  "whenToUse": [
   "Triggering a committed action (save, submit, confirm, delete, continue).",
   "Highlighting the main action of a view with a Primary button, supported by Secondary/Tertiary ones.",
   "Icon-only actions in compact areas (toolbars, cards) — with an accessible label/tooltip.",
   "Any interaction that does something, rather than just navigating within text."
  ],
  "whenNotToUse": [
   "In-text or plain navigation to another page — use a link.",
   "On/off toggles or settings — use Switch or Checkbox.",
   "Choosing among mutually exclusive options — use Radio buttons or a segmented control.",
   "Lining up several Primary buttons together — reserve Primary for one action per view/section.",
   "Icon-only buttons without a label for actions whose meaning isn't obvious."
  ],
  "properties": [
   {
    "property": "Level",
    "raw": "Primary, Secondary, Tertiary",
    "options": [
     "Primary",
     "Secondary",
     "Tertiary"
    ]
   },
   {
    "property": "Size",
    "raw": "Small, Medium",
    "options": [
     "Small",
     "Medium"
    ]
   },
   {
    "property": "Kind",
    "raw": "Only text, Left icon + Text, Text + Right icon, Only icon",
    "options": [
     "Only text",
     "Left icon + Text",
     "Text + Right icon",
     "Only icon"
    ]
   },
   {
    "property": "State",
    "raw": "Default, Hover, Disabled",
    "options": [
     "Default",
     "Hover",
     "Disabled"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Buttons group",
  "slug": "buttons-group",
  "short": "A set of related buttons arranged together with consistent spacing and a clear action hierarchy.",
  "context": "The Buttons group arranges related actions together as a single unit, keeping spacing, alignment, and hierarchy consistent so users can tell the primary action from its supporting ones. Instead of placing buttons manually, the component guarantees they read as a coherent set.\n\nIt can be laid out horizontally or vertically to fit the available space —vertical being especially useful on narrow or mobile layouts— and the secondary and tertiary buttons can be toggled on or off, so the group scales from a single primary action up to a full set of three. This makes it ideal for form footers, dialogs, and any place where actions live side by side.",
  "keywords": [
   "buttons group",
   "button group",
   "actions",
   "action bar",
   "form actions",
   "footer actions",
   "primary",
   "secondary",
   "tertiary",
   "horizontal",
   "vertical",
   "cta group"
  ],
  "whenToUse": [
   "Grouping the actions of a form, dialog, or card footer (e.g. Confirm + Cancel).",
   "Presenting a primary action alongside supporting ones with a consistent hierarchy.",
   "Layouts that need actions stacked vertically on narrow or mobile screens.",
   "Anywhere you want related buttons to keep uniform spacing and alignment automatically."
  ],
  "whenNotToUse": [
   "For a single, isolated action — use a plain Button.",
   "Grouping unrelated actions that don't belong to the same decision.",
   "As a toolbar of icon buttons or a set of toggles (use the appropriate icon/toggle pattern).",
   "Choosing among mutually exclusive options — use Radio buttons or a segmented control.",
   "When actions belong in different areas of the screen rather than side by side."
  ],
  "properties": [
   {
    "property": "Orientation",
    "raw": "Horizontal, Vertical",
    "options": [
     "Horizontal",
     "Vertical"
    ]
   },
   {
    "property": "Show secondary button",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show tertiary button",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Calendar",
  "slug": "calendar",
  "short": "A month grid for selecting a single date or a date range, with clear day types and selection states.",
  "context": "The Calendar displays a month as a grid of days and lets users pick a single date or a continuous range while keeping the surrounding month context visible. Seeing the days around a choice helps users make date decisions —weekends, holidays, or how far apart two dates are— that a plain text field can't convey.\n\nDays communicate their type through the week-day headers (Week vs. Weekend) and the day cells (Work day vs. Holiday), and their selection through a full set of states: default, hover, selected, disabled, and selected-disabled. For ranges, the endpoints and the middle span are shown differently (Range first, Range middle, Range last), so the extent of the selection is always clear. It is typically embedded in date input fields or shown inline where date picking is a primary task.",
  "keywords": [
   "calendar",
   "date picker",
   "datepicker",
   "date",
   "date range",
   "range",
   "month",
   "day",
   "schedule",
   "booking",
   "availability",
   "holiday"
  ],
  "whenToUse": [
   "Single-date or range selection where seeing the month context helps the decision.",
   "Picking dates influenced by weekends or holidays (bookings, scheduling, availability).",
   "Choosing a start and end date and needing to see the span between them.",
   "As the picker behind date input fields, or inline where date selection is the main task."
  ],
  "whenNotToUse": [
   "Known, simple dates (e.g. a birth date) — a text/date input is faster.",
   "Time-only or duration selection with no calendar day involved.",
   "Very constrained spaces where a full month grid doesn't fit — use a compact date input.",
   "Selecting many non-contiguous dates at scale, where a list or other pattern works better."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Week day",
    "raw": "Kind",
    "options": [
     "Kind"
    ]
   },
   {
    "property": "Calendar day",
    "raw": "Kind",
    "options": [
     "Kind"
    ]
   },
   {
    "property": "Calendar day",
    "raw": "Range",
    "options": [
     "Range"
    ]
   },
   {
    "property": "Calendar day",
    "raw": "State",
    "options": [
     "State"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Card - Product",
  "slug": "card-product",
  "short": "A self-contained surface that groups a single product's content and actions into a consistent, tappable unit.",
  "context": "A Card groups related content and actions about a single subject —a product, an entry, an item— into a self-contained surface that reads as one unit. It gives collections a consistent, scannable structure and a clear tap target, so users can compare items and act on them quickly.\n\nThe card adapts to the content it holds: it can show a label, a favorite (save) action, selectable color options, and a discount treatment when an item is on offer, and it reflects interaction through its default and hover states. Because every card in a set shares the same anatomy, the layout stays predictable no matter how the individual content varies.",
  "keywords": [
   "card",
   "product card",
   "tile",
   "item",
   "collection",
   "grid",
   "favorite",
   "save",
   "label",
   "discount",
   "offer",
   "preview"
  ],
  "whenToUse": [
   "Presenting items in a collection (products, entries, results) with a consistent layout.",
   "Making each item a clear, self-contained tap target that leads to detail or action.",
   "Surfacing item-level extras like a favorite action, label, color options, or a discount.",
   "Grids or carousels where users scan and compare multiple items."
  ],
  "whenNotToUse": [
   "A single block of page content that isn't part of a collection — use plain layout/sections.",
   "As a button — a card holds content and actions, it isn't itself a single control.",
   "When items are better read as a dense list or table (many rows, quick scanning of one attribute).",
   "Overloading a card with competing actions that blur which is primary."
  ],
  "properties": [
   {
    "property": "State",
    "raw": "Default, Hover",
    "options": [
     "Default",
     "Hover"
    ]
   },
   {
    "property": "Show label",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show favorite button",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show color options",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Discount",
    "raw": "No, Yes",
    "options": [
     "No",
     "Yes"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Cell - Featured",
  "slug": "cell-featured",
  "short": "A highlighted table cell that gives extra prominence to a standout value, with an empty state for missing content.",
  "context": "The Featured cell is a table/row building block used to give a single value extra visual weight within a data row. While most cells present information uniformly, a featured cell draws the eye to the piece of content that matters most —a key figure, a primary label, the item that should stand out— without breaking the row's structure.\n\nIt offers a Text kind for when there is content to highlight and an Empty kind for when the value is missing or not yet available, so rows stay aligned and consistent even with incomplete data. It is designed to be composed into a Cells row alongside Plain and Linkable cells.",
  "keywords": [
   "cell",
   "featured cell",
   "table cell",
   "row",
   "highlight",
   "emphasis",
   "prominent",
   "data",
   "empty state",
   "column",
   "table",
   "list"
  ],
  "whenToUse": [
   "Giving one value extra prominence within a data row (a key metric, the primary attribute).",
   "Highlighting the most important column in a table so it stands out while scanning.",
   "Keeping rows aligned when a highlighted value may be missing, thanks to the empty state.",
   "As part of a Cells row, combined with Plain and Linkable cells."
  ],
  "whenNotToUse": [
   "Ordinary data that doesn't need emphasis — use a Plain cell.",
   "Content that must navigate or select on tap — use a Linkable cell.",
   "When several cells in the same row are featured — competing emphasis cancels itself out.",
   "Outside a row/table context, as a standalone block or button."
  ],
  "properties": [
   {
    "property": "Kind",
    "raw": "Text, Empty",
    "options": [
     "Text",
     "Empty"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Cell - Linkable",
  "slug": "cell-linkable",
  "short": "An interactive table cell that navigates or selects on tap, with content kinds and full selection states.",
  "context": "The Linkable cell is an interactive row building block: unlike a plain cell that only displays information, the whole cell is a target that navigates to a detail view or selects the row. This makes it the backbone of clickable lists and selectable tables, where users act on entire rows rather than on a single control inside them.\n\nIt adapts to different content through its kinds (Text, Amount, Label, Icon) and exposes a complete set of states —default, hover, selected default, selected hover, disabled, and selected disabled— so both interaction and selection are always clear. It is designed to be composed into a Cells row alongside Plain and Featured cells.",
  "keywords": [
   "cell",
   "linkable cell",
   "interactive cell",
   "table cell",
   "row",
   "selectable",
   "clickable row",
   "navigation",
   "selected",
   "list item",
   "table",
   "link"
  ],
  "whenToUse": [
   "Rows that navigate to a detail view when tapped (clickable lists, tables).",
   "Selectable lists or tables where the whole row can be picked, with a clear selected state.",
   "Presenting different row content —text, amount, label, or icon— while keeping consistent interaction.",
   "As part of a Cells row, combined with Plain and Featured cells."
  ],
  "whenNotToUse": [
   "Read-only data that shouldn't respond to taps — use a Plain cell.",
   "Emphasizing a single standout value without interaction — use a Featured cell.",
   "When only a specific control inside the row should be actionable, not the whole cell.",
   "Mixing linkable and non-linkable cells without a visual cue that signals what's tappable."
  ],
  "properties": [
   {
    "property": "Kinds",
    "raw": "Text, Amount, Label, Icon",
    "options": [
     "Text",
     "Amount",
     "Label",
     "Icon"
    ]
   },
   {
    "property": "States",
    "raw": "Default, Hover, Selected default, Selected hover, Disabled, Selected disabled",
    "options": [
     "Default",
     "Hover",
     "Selected default",
     "Selected hover",
     "Disabled",
     "Selected disabled"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Cell - Plain",
  "slug": "cell-plain",
  "short": "A non-interactive table cell for displaying information, with an optional inline button or icon.",
  "context": "The Plain cell is the base building block for data rows: it presents information without acting as a navigation or selection target. It is the default choice for read-only tables and lists, keeping content aligned and consistent across rows.\n\nIt supports several content kinds (Text, Amount, Label, Button, Icon), so a cell can hold a plain value, a status label, an icon, or an inline button for a contained action —without making the whole row interactive. Its states are limited to Default and Disabled, reflecting that the cell itself isn't a link. It is designed to be composed into a Cells row alongside Featured and Linkable cells.",
  "keywords": [
   "cell",
   "plain cell",
   "table cell",
   "row",
   "data",
   "read-only",
   "text",
   "amount",
   "label",
   "icon",
   "inline button",
   "table",
   "list"
  ],
  "whenToUse": [
   "Displaying read-only data in tables and lists (text, amounts, labels, icons).",
   "Rows that shouldn't respond to taps but may hold a single inline action (button/icon).",
   "Keeping row content aligned and consistent across a table.",
   "As part of a Cells row, combined with Featured and Linkable cells."
  ],
  "whenNotToUse": [
   "Rows that must navigate or be selectable on tap — use a Linkable cell.",
   "Emphasizing a standout value — use a Featured cell.",
   "When the entire row should be the action target (a plain cell only supports a contained inline button)."
  ],
  "properties": [
   {
    "property": "Kinds",
    "raw": "Text, Amount, Label, Button, Icon",
    "options": [
     "Text",
     "Amount",
     "Label",
     "Button",
     "Icon"
    ]
   },
   {
    "property": "States",
    "raw": "Default, Disabled",
    "options": [
     "Default",
     "Disabled"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Cells row",
  "slug": "cells-row",
  "short": "A horizontal row that composes individual cells into a single, aligned unit of a table or list.",
  "context": "The Cells row assembles individual cells into one horizontal unit —a full row of a table or list. It is the layer that turns isolated cells into a structured, aligned record, guaranteeing consistent spacing and alignment across every row so tables stay readable no matter how the content varies.\n\nIt supports the three cell families —Plain, Featured, and Linkable— so a single row can mix read-only data, a highlighted value, and interactive targets as needed. The number of items scales from 1 to 10, letting the same component cover anything from a simple list to a wide, multi-column table.",
  "keywords": [
   "cells row",
   "row",
   "table row",
   "list row",
   "record",
   "columns",
   "cells",
   "data row",
   "table",
   "list",
   "grid",
   "alignment"
  ],
  "whenToUse": [
   "Building the rows of a table or list from Plain, Featured, and Linkable cells.",
   "Keeping spacing and alignment consistent across every row automatically.",
   "Rows that need to mix content types (data, a highlighted value, an interactive target).",
   "Scaling the same row pattern from a simple list to a wide multi-column table (1–10 items)."
  ],
  "whenNotToUse": [
   "A single cell in isolation — use the individual Cell component directly.",
   "Non-tabular content that doesn't belong to a row/record structure.",
   "Rows wider than the viewport on small screens without a plan to wrap, stack, or scroll.",
   "Complex tables needing fixed headers, sorting, or pagination logic beyond simple row layout (compose with the relevant components)."
  ],
  "properties": [
   {
    "property": "Kinds",
    "raw": "Plain, Featured, Linkable cells",
    "options": [
     "Plain",
     "Featured",
     "Linkable cells"
    ]
   },
   {
    "property": "Items",
    "raw": "1–10",
    "options": [
     "1–10"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Checkbox",
  "slug": "checkbox",
  "short": "A control for selecting one or more independent options, or toggling a single setting on or off.",
  "context": "A Checkbox lets users select one or more options from a set of independent choices, or opt in and out of a single setting. Unlike radio buttons, checkboxes are not mutually exclusive: each one can be turned on or off on its own, which makes them the right choice whenever multiple selections are valid.\n\nIt exposes clear selected and deselected kinds, and a full range of states —default, hover, error, and disabled— so validation and availability are always visible (for example, flagging a required option that hasn't been checked). Each checkbox should be paired with a clickable label describing its option, and multiple checkboxes are typically composed into a Checkbox group.",
  "keywords": [
   "checkbox",
   "check",
   "tick",
   "select",
   "multiple selection",
   "multi-select",
   "option",
   "toggle",
   "opt-in",
   "consent",
   "terms",
   "form"
  ],
  "whenToUse": [
   "Selecting multiple, non-exclusive options from a set.",
   "A single opt-in decision (accept terms, subscribe, remember me).",
   "Turning individual settings on or off where changes are confirmed later (e.g. via a Save action).",
   "Cases that need a visible error state for a required selection."
  ],
  "whenNotToUse": [
   "Mutually exclusive options where only one can be chosen — use Radio buttons.",
   "Settings that take effect immediately on toggle — use a Switch.",
   "Triggering an action — use a Button.",
   "A checkbox without a label, or one whose purpose isn't clear from its text."
  ],
  "properties": [
   {
    "property": "Kinds",
    "raw": "Deselected, Selected",
    "options": [
     "Deselected",
     "Selected"
    ]
   },
   {
    "property": "State",
    "raw": "Default, Hover, Error, Disabled",
    "options": [
     "Default",
     "Hover",
     "Error",
     "Disabled"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Checkbox group",
  "slug": "checkbox-group",
  "short": "A set of related checkboxes arranged together under a shared label, for selecting several options at once.",
  "context": "The Checkbox group brings several related checkboxes together as a single, labeled unit, so users can read and select multiple options within one clear decision. It provides the structure and consistent spacing around the individual checkboxes, and a group label that names the choice they all belong to.\n\nBecause checkboxes are independent, the group is the right pattern whenever more than one option can be selected at the same time —filters, preferences, multi-select forms. Grouping them also improves scannability and makes the relationship between options explicit, rather than leaving them as loose, disconnected controls.",
  "keywords": [
   "checkbox group",
   "checkboxes",
   "multiple selection",
   "multi-select",
   "options",
   "filters",
   "preferences",
   "group",
   "form",
   "list",
   "select many",
   "fieldset"
  ],
  "whenToUse": [
   "Presenting several related options where more than one can be selected.",
   "Filters, preferences, or multi-select sections in forms.",
   "Any group of choices that benefits from a shared label naming the decision.",
   "Keeping related checkboxes aligned and grouped instead of placed loosely."
  ],
  "whenNotToUse": [
   "A single checkbox or opt-in — use the standalone Checkbox.",
   "Mutually exclusive choices where only one is valid — use a Radio buttons group.",
   "Settings that apply immediately on toggle — use Switches.",
   "Grouping unrelated options that don't share a common decision or label."
  ],
  "properties": [],
  "propertiesNote": "Composed component — a container with a group label and repeated Checkbox items (no exposed variant properties on the group itself)."
 },
 {
  "name": "Container",
  "slug": "container",
  "short": "A layout frame that arranges content into columns of set proportions on a 12-column grid, with consistent margins and gutters.",
  "context": "The Container is the layout frame that holds a page's content and divides it into columns. It sits on a 12-column grid with consistent outer margins and gutters, and each structure fixes how many columns there are and how wide each one is — from a single full-width column to symmetric and asymmetric splits of two, three or four columns.\n\nEach column is a slot that accepts any content (components, sections or other layouts), so the same frame can host cards, forms, media or text while keeping alignment and spacing consistent across the page. Choose the structure by the relationship between the contents: equal columns for peers, wider columns for the main content, and narrow side columns to frame or inset it.",
  "keywords": [
   "container",
   "layout",
   "grid",
   "columns",
   "gutter",
   "margin",
   "structure"
  ],
  "whenToUse": [
   "Laying out page content on the shared 12-column grid with consistent margins and gutters.",
   "Placing related blocks side by side in equal or weighted columns.",
   "Centering and constraining content, such as reading-width text, with side columns.",
   "Building sections and pages that need to stay aligned with each other."
  ],
  "whenNotToUse": [
   "Spacing elements inside a component — use the component's own spacing tokens.",
   "Small inline groups such as buttons or tags — use their group components.",
   "Content that must scroll horizontally, like carousels or marquees.",
   "Narrow screens below 1025px, where content should stack in a single column."
  ],
  "properties": [
   {
    "property": "Structure",
    "raw": "100%, 50% + 50%, 33% + 33% + 33%, 25% + 25% + 25% + 25%, 8% + 84% + 8%, 16% + 66% + 16%, 25% + 50% + 25%, 8% + 42% + 42% + 8%, 16% + 34% + 34% + 16%, 42% + 58%, 34% + 66%, 25% + 75%, 16% + 84%, 58% + 42%, 66% + 34%, 75% + 25%, 84% + 16%",
    "options": [
     "100%",
     "50% + 50%",
     "33% + 33% + 33%",
     "25% + 25% + 25% + 25%",
     "8% + 84% + 8%",
     "16% + 66% + 16%",
     "25% + 50% + 25%",
     "8% + 42% + 42% + 8%",
     "16% + 34% + 34% + 16%",
     "42% + 58%",
     "34% + 66%",
     "25% + 75%",
     "16% + 84%",
     "58% + 42%",
     "66% + 34%",
     "75% + 25%",
     "84% + 16%"
    ]
   },
   {
    "property": "Gutter",
    "raw": "Yes",
    "options": [
     "Yes"
    ]
   },
   {
    "property": "Margin",
    "raw": "Yes",
    "options": [
     "Yes"
    ]
   }
  ],
  "propertiesNote": "Each column is a slot (Column 01–04) that accepts any content."
 },
 {
  "name": "Divider",
  "slug": "divider",
  "short": "A thin rule that visually separates content into groups, horizontally or vertically.",
  "context": "A Divider is a thin rule used to separate content into distinct groups, giving structure to a layout without adding heavy containers or extra labels. It helps users perceive where one section ends and another begins, improving scannability and reinforcing the grouping of related elements.\n\nIt works in two directions —horizontal to split stacked content, vertical to separate side-by-side elements— and two emphasis levels (Medium and Low), so the separation can be as subtle or as noticeable as the context requires. As a rule of thumb, use the lowest emphasis that still communicates the separation clearly.",
  "keywords": [
   "divider",
   "separator",
   "rule",
   "line",
   "hr",
   "horizontal rule",
   "vertical rule",
   "split",
   "section",
   "group",
   "border",
   "spacing"
  ],
  "whenToUse": [
   "Separating stacked sections of content (horizontal) so groups read clearly.",
   "Splitting side-by-side elements (vertical), e.g. between toolbar items or columns.",
   "Adding structure to dense layouts without introducing full containers.",
   "Reinforcing the grouping of related items in lists or menus."
  ],
  "whenNotToUse": [
   "Where whitespace already creates clear separation — a divider would add noise.",
   "As a decorative element with no grouping purpose.",
   "Between every single item in a list, which clutters the layout.",
   "To imply hierarchy or emphasis — use headings, spacing, or containers instead."
  ],
  "properties": [
   {
    "property": "Directions",
    "raw": "Horizontal, Vertical",
    "options": [
     "Horizontal",
     "Vertical"
    ]
   },
   {
    "property": "Kind",
    "raw": "Medium, Low",
    "options": [
     "Medium",
     "Low"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Dropdown",
  "slug": "dropdown",
  "short": "A trigger that reveals a list of options in an overlay, reflecting its open and filled states.",
  "context": "The Dropdown is the control that reveals a list of choices in an overlay when activated, letting users pick from a set of options without those options taking up permanent space on the screen. It is the base trigger of the dropdown pattern, keeping the interface compact until the user needs to choose.\n\nIt reflects two key conditions: whether it is currently Open (the overlay is showing) and whether it is Filled (it already holds a selected value). Paired with the Dropdown options list —and, in forms, with the Dropdown input— it covers selection from a moderate set of options where seeing everything at once isn't necessary.",
  "keywords": [
   "dropdown",
   "select",
   "menu",
   "picker",
   "options",
   "overlay",
   "combobox",
   "list",
   "choose",
   "expand",
   "open",
   "selection"
  ],
  "whenToUse": [
   "Choosing from a moderate list of options without keeping them all on screen.",
   "Keeping the layout compact until the user needs to select.",
   "As the trigger for a Dropdown options list.",
   "Selection where the current value should be shown in a filled state after choosing."
  ],
  "whenNotToUse": [
   "Just 2–3 options that fit inline — use Radio buttons or a segmented control.",
   "Very long lists that need filtering — use a searchable field.",
   "Multiple simultaneous selections better shown as a Checkbox group (unless using a multi-select dropdown pattern).",
   "Triggering an action rather than selecting a value — use a Button."
  ],
  "properties": [
   {
    "property": "Open",
    "raw": "No, Yes",
    "options": [
     "No",
     "Yes"
    ]
   },
   {
    "property": "Filled",
    "raw": "No, Yes",
    "options": [
     "No",
     "Yes"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Dropdown input",
  "slug": "dropdown-input",
  "short": "A form field that opens a list of options to choose from, with label, states, and helper/error text.",
  "context": "The Dropdown input is the form-field version of the dropdown pattern: a labeled field that, when activated, opens a list of options for the user to select from. It combines the compactness of a dropdown with the full anatomy of a form field, so selection sits naturally alongside text inputs in a form.\n\nIt supports a label, a mandatory marker, a leading icon, a badge, a tooltip for contextual help, and detail text below the field that can be informational or an error message. It covers empty and filled kinds and the complete form state range —default, hover, active, disabled, and error— so validation and availability read clearly. The Error state should be paired with the Error detail text so the user knows what to fix.",
  "keywords": [
   "dropdown input",
   "select field",
   "form field",
   "select",
   "picker",
   "options",
   "label",
   "helper text",
   "error",
   "mandatory",
   "tooltip",
   "form"
  ],
  "whenToUse": [
   "Selecting a value from a moderate set of options within a form, next to other fields.",
   "When the selection needs the full field anatomy: label, mandatory marker, helper/error text.",
   "Fields that benefit from a leading icon, badge, or tooltip for extra context.",
   "Cases requiring clear validation through the error state and error detail text."
  ],
  "whenNotToUse": [
   "Outside a form, as a simple menu trigger — use the base Dropdown.",
   "Just 2–3 options — use Radio buttons or a segmented control.",
   "Very long lists needing search — use a searchable field.",
   "Free text entry — use a text input; the dropdown input is for choosing predefined values."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Dropdown input",
    "raw": "Kinds",
    "options": [
     "Kinds"
    ]
   },
   {
    "property": "Dropdown input",
    "raw": "States",
    "options": [
     "States"
    ]
   },
   {
    "property": "Dropdown input",
    "raw": "Show label",
    "options": [
     "Show label"
    ]
   },
   {
    "property": "Dropdown input",
    "raw": "Mandatory input",
    "options": [
     "Mandatory input"
    ]
   },
   {
    "property": "Dropdown input",
    "raw": "Show icon",
    "options": [
     "Show icon"
    ]
   },
   {
    "property": "Dropdown input",
    "raw": "Show badge",
    "options": [
     "Show badge"
    ]
   },
   {
    "property": "Dropdown input",
    "raw": "Show tooltip",
    "options": [
     "Show tooltip"
    ]
   },
   {
    "property": "Dropdown input",
    "raw": "Show detail text",
    "options": [
     "Show detail text"
    ]
   },
   {
    "property": "Detail text",
    "raw": "Kind",
    "options": [
     "Kind"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Dropdown options",
  "slug": "dropdown-options",
  "short": "The list of selectable options that a dropdown reveals, built from individual single/multi-select rows.",
  "context": "The Dropdown options is the overlay list that appears when a dropdown is opened —the panel that holds the choices themselves. It is composed of individual option rows and provides the container behavior around them: single- or multi-option lists, an optional scrollbar for long lists, and an optional action button (for example, to confirm a multi-selection).\n\nEach option row supports a leading icon, a badge, a selected state, and an optional bottom divider, and it comes in single-option and multi-option kinds —the latter behaving like a checkbox row when several selections are allowed. Together they cover the full interaction inside a dropdown: default, hover, disabled, and selected states, presented consistently.",
  "keywords": [
   "dropdown options",
   "dropdown option",
   "menu items",
   "option list",
   "select options",
   "list",
   "single-select",
   "multi-select",
   "checkbox option",
   "overlay",
   "scroll",
   "menu"
  ],
  "whenToUse": [
   "Presenting the selectable choices inside a Dropdown or Dropdown input.",
   "Single-select lists, or multi-select lists where several options can be chosen at once.",
   "Long lists needing a scrollbar, or lists that need a confirm/action button.",
   "Option rows that require a leading icon, badge, or dividers for grouping and clarity."
  ],
  "whenNotToUse": [
   "As a standalone menu unrelated to a dropdown trigger — use the appropriate menu pattern.",
   "For navigation links rather than value selection.",
   "Just 2–3 always-visible options — use Radio buttons or a segmented control.",
   "When each item should behave as a full interactive row/cell in a list or table — use Cells."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Dropdown single option",
    "raw": "Kind",
    "options": [
     "Kind"
    ]
   },
   {
    "property": "Dropdown single option",
    "raw": "Selected",
    "options": [
     "Selected"
    ]
   },
   {
    "property": "Dropdown single option",
    "raw": "State",
    "options": [
     "State"
    ]
   },
   {
    "property": "Dropdown single option",
    "raw": "Show left icon",
    "options": [
     "Show left icon"
    ]
   },
   {
    "property": "Dropdown single option",
    "raw": "Show badge",
    "options": [
     "Show badge"
    ]
   },
   {
    "property": "Dropdown single option",
    "raw": "With bottom divider",
    "options": [
     "With bottom divider"
    ]
   },
   {
    "property": "Dropdown options",
    "raw": "Kinds",
    "options": [
     "Kinds"
    ]
   },
   {
    "property": "Dropdown options",
    "raw": "Show scroll bar",
    "options": [
     "Show scroll bar"
    ]
   },
   {
    "property": "Dropdown options",
    "raw": "Show button",
    "options": [
     "Show button"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "File drop",
  "slug": "file-drop",
  "short": "A drag-and-drop upload area, with dragging, uploading, and error states and a list of uploaded files.",
  "context": "The File drop lets users upload files by dragging them onto a target area or by browsing to select them. It makes uploading direct and forgiving, giving continuous feedback throughout the process so users always know what's happening with their files.\n\nIt surfaces the full lifecycle through its states —default, hover, dragging, uploading, and upload-failed (default and hover)— and can display the list of uploaded documents below the dropzone, each with its own default and disabled state. To be clear and trustworthy, it should state the accepted file types and size limits up front and always show progress and error feedback.",
  "keywords": [
   "file drop",
   "file upload",
   "upload",
   "drag and drop",
   "dropzone",
   "attach",
   "attachment",
   "import",
   "documents",
   "files",
   "browse",
   "uploading"
  ],
  "whenToUse": [
   "Uploading one or more files, especially where drag-and-drop is convenient.",
   "Flows that need visible progress and error feedback during upload.",
   "Showing the list of uploaded documents alongside the dropzone.",
   "Cases where stating accepted types and size limits up front helps users succeed."
  ],
  "whenNotToUse": [
   "Non-file inputs (plain text, values) — use the appropriate field.",
   "Trivial cases where a single simple \"browse\" button is enough and drag-and-drop adds nothing.",
   "Uploads that give no feedback on progress or errors — that breaks the pattern's purpose.",
   "Very constrained layouts where a full dropzone doesn't fit."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "File drop",
    "raw": "States",
    "options": [
     "States"
    ]
   },
   {
    "property": "File drop",
    "raw": "Show uploaded documents",
    "options": [
     "Show uploaded documents"
    ]
   },
   {
    "property": "Uploaded document",
    "raw": "States",
    "options": [
     "States"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Image",
  "slug": "image",
  "short": "A controlled frame for displaying imagery with a fixed orientation and a defined aspect ratio.",
  "context": "The Image component displays imagery inside a controlled frame with a fixed orientation and a defined aspect ratio. Rather than letting pictures dictate their own dimensions, it enforces consistent proportions so media aligns cleanly across cards, grids, and layouts, no matter the source file.\n\nIt offers vertical and horizontal orientations and a wide set of aspect ratios —from 1:1 up to 21:9 and the golden ratio— so the same component can frame avatars, thumbnails, hero images, or wide banners. Images fill the frame and are cropped to fit rather than distorted, keeping proportions correct. Picking one ratio per collection keeps galleries and grids visually consistent.",
  "keywords": [
   "image",
   "picture",
   "photo",
   "media",
   "thumbnail",
   "aspect ratio",
   "ratio",
   "crop",
   "frame",
   "cover",
   "orientation",
   "gallery"
  ],
  "whenToUse": [
   "Displaying imagery that must keep a consistent aspect ratio across a layout.",
   "Cards, grids, or galleries where every image should align to the same proportions.",
   "Framing different image types —thumbnails, hero images, wide banners— from one component.",
   "Any place where source files vary in size but the layout needs predictable dimensions."
  ],
  "whenNotToUse": [
   "Icons or logos that need exact, unscaled rendering — use the icon/logo asset directly.",
   "Imagery that must show in full without cropping (where a specific ratio can't be enforced).",
   "Decorative backgrounds handled better by layout/background styles.",
   "Mixing many different ratios within one collection, which breaks visual consistency."
  ],
  "properties": [
   {
    "property": "Orientation",
    "raw": "Vertical, Horizontal",
    "options": [
     "Vertical",
     "Horizontal"
    ]
   },
   {
    "property": "Aspect ratio",
    "raw": "1:1, 5:4, 4:3, 3:2, 16:10, 16:9, 2:1, 21:9, Golden ratio 1.618:1",
    "options": [
     "1:1",
     "5:4",
     "4:3",
     "3:2",
     "16:10",
     "16:9",
     "2:1",
     "21:9",
     "Golden ratio 1.618:1"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Input field - Date range",
  "slug": "input-field-date-range",
  "short": "A form field for selecting a start and end date, with label, states, and helper/error text.",
  "context": "The Date range is a form field specialized in capturing a period —a start date and an end date— as a single, connected input. It builds on the same field anatomy as the other inputs (label, mandatory marker, tooltip, and helper text) but is tuned for two-date entry, so users define a span in one coherent place rather than juggling two separate fields.\n\nIt covers empty and filled kinds and the full form state range —default, hover, active, error, and disabled— so validation and availability always read clearly. It should enforce that the end date is not earlier than the start, surfacing any problem through the error state and the detail info text, and it typically opens a Calendar so users can pick the range visually and see the span between both ends.",
  "keywords": [
   "date range",
   "date range picker",
   "range",
   "start date",
   "end date",
   "period",
   "from-to",
   "calendar",
   "form field",
   "helper text",
   "error",
   "booking"
  ],
  "whenToUse": [
   "Selecting a period defined by a start and end date (bookings, reports, filters by date).",
   "When the two dates belong to one decision and should be entered together.",
   "Ranges that benefit from visual picking and seeing the span via a Calendar.",
   "Cases requiring validation of the range (end ≥ start) through the error state and detail text."
  ],
  "whenNotToUse": [
   "Capturing a single date — use Input field - Date selector.",
   "Open-ended selections where only one bound is ever set.",
   "Non-date values or time-only selection.",
   "Very constrained layouts where a full range field or its Calendar can't fit comfortably."
  ],
  "properties": [
   {
    "property": "Kind",
    "raw": "Empty, Filled",
    "options": [
     "Empty",
     "Filled"
    ]
   },
   {
    "property": "States",
    "raw": "Default, Hover, Active, Error, Disabled",
    "options": [
     "Default",
     "Hover",
     "Active",
     "Error",
     "Disabled"
    ]
   },
   {
    "property": "Show label",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Mandatory input",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show tooltip",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show detail info text",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Input field - Date selector",
  "slug": "input-field-date-selector",
  "short": "A form field for entering or picking a single date, with label, states, and helper/error text.",
  "context": "The Date selector is a form field specialized in capturing a single date. It combines the full anatomy of a text input —label, mandatory marker, tooltip, and helper text— with a date-picking affordance, so choosing a date sits naturally alongside the other fields in a form.\n\nIt covers empty and filled kinds and the complete form state range —default, hover, active, disabled, and error— so availability and validation always read clearly. The Error state should be paired with the detail info text explaining what to fix, and showing the expected date format in that helper text prevents most input mistakes. It typically opens a Calendar to let users pick the date visually rather than only typing it.",
  "keywords": [
   "date selector",
   "date picker",
   "date input",
   "date field",
   "single date",
   "calendar",
   "form field",
   "label",
   "helper text",
   "error",
   "mandatory",
   "form"
  ],
  "whenToUse": [
   "Capturing a single date within a form, next to other fields.",
   "When the field needs the full form anatomy: label, mandatory marker, tooltip, helper/error text.",
   "Dates that benefit from visual picking via a Calendar, not just typing.",
   "Cases requiring clear validation through the error state and detail info text."
  ],
  "whenNotToUse": [
   "Selecting a start and end date — use Input field - Date range.",
   "Free-form or non-date values — use a standard text input.",
   "Time-only selection with no calendar date involved.",
   "Well-known dates in very compact contexts where a plain text input without a picker is enough."
  ],
  "properties": [
   {
    "property": "Kinds",
    "raw": "Empty, Filled",
    "options": [
     "Empty",
     "Filled"
    ]
   },
   {
    "property": "States",
    "raw": "Default, Hover, Active, Disabled, Error",
    "options": [
     "Default",
     "Hover",
     "Active",
     "Disabled",
     "Error"
    ]
   },
   {
    "property": "Show label",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Mandatory input",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show tooltip",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show detail info text",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Input field - Password",
  "slug": "input-field-password",
  "short": "A form field for entering a password, with a show/hide toggle, label, and helper/error text.",
  "context": "The Password field is a form input specialized in capturing sensitive credentials. It masks the characters by default and offers a visibility toggle so users can reveal what they typed to check it, balancing privacy with the ability to catch typos before submitting.\n\nIt shares the standard field anatomy —label and detail info text— and covers empty and filled kinds along with the full form state range: default, hover, active, error, and disabled. The Visible property controls whether the entry is masked or shown. To be usable, it should state the password requirements in the helper text, surface problems through the error state, and never block pasting or clear the field on a validation error.",
  "keywords": [
   "password",
   "password field",
   "credentials",
   "login",
   "sign in",
   "sign up",
   "masked input",
   "show/hide",
   "visibility toggle",
   "security",
   "form field",
   "error"
  ],
  "whenToUse": [
   "Capturing a password or sensitive credential in login, sign-up, or account forms.",
   "When users benefit from a show/hide toggle to verify what they typed.",
   "Fields that need to communicate password requirements via helper text.",
   "Cases requiring clear validation through the error state and detail info text."
  ],
  "whenNotToUse": [
   "Non-sensitive text values — use a standard text input.",
   "One-time codes / OTP / verification PINs — use the PIN code component.",
   "When masking adds no value (a field that isn't a secret).",
   "Flows that block paste or wipe the field on error — that harms usability and password managers."
  ],
  "properties": [
   {
    "property": "Kinds",
    "raw": "Empty, Filled",
    "options": [
     "Empty",
     "Filled"
    ]
   },
   {
    "property": "States",
    "raw": "Default, Hover, Active, Error, Disabled",
    "options": [
     "Default",
     "Hover",
     "Active",
     "Error",
     "Disabled"
    ]
   },
   {
    "property": "Visible",
    "raw": "No, Yes",
    "options": [
     "No",
     "Yes"
    ]
   },
   {
    "property": "Show label",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show detail info text",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Input field - Text",
  "slug": "input-field-text",
  "short": "The base single-line text input, with label, states, and helper/error text.",
  "context": "The Text field is the foundational single-line input of the form system, used to capture short free-form values —names, emails, references, and similar. It sets the standard anatomy that the other input fields build on, so forms stay consistent field to field.\n\nIt includes a label, a mandatory marker, a tooltip for contextual help, and detail info text below the field, and it covers empty and filled kinds along with the full form state range: default, hover, active, error, and disabled. The Error state should be paired with the detail text explaining what to fix, and the label should stay visible (not placeholder-only) so users always know what the field expects.",
  "keywords": [
   "text field",
   "text input",
   "input",
   "single-line",
   "form field",
   "label",
   "placeholder",
   "helper text",
   "error",
   "mandatory",
   "validation",
   "form"
  ],
  "whenToUse": [
   "Capturing short, single-line free-form text (name, email, reference, title).",
   "The default field for most form inputs that don't need a specialized variant.",
   "When the field needs the full anatomy: label, mandatory marker, tooltip, helper/error text.",
   "Cases requiring clear validation through the error state and detail info text."
  ],
  "whenNotToUse": [
   "Long or multi-line content — use Input field - Text area.",
   "Specialized values with their own field (password, date, date range, search, PIN).",
   "Choosing from predefined options — use a Dropdown input.",
   "Placeholder-only labeling that leaves the field unlabeled once the user types."
  ],
  "properties": [
   {
    "property": "Kinds",
    "raw": "Empty, Filled",
    "options": [
     "Empty",
     "Filled"
    ]
   },
   {
    "property": "States",
    "raw": "Default, Hover, Active, Error, Disabled",
    "options": [
     "Default",
     "Hover",
     "Active",
     "Error",
     "Disabled"
    ]
   },
   {
    "property": "Show label",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Mandatory input",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show tooltip",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show detail info text",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Input field - Text area",
  "slug": "input-field-text-area",
  "short": "A multi-line text field for longer content, with optional word count, footer info, and an action button.",
  "context": "The Text area is the multi-line input of the form system, used to capture longer free-form content —messages, comments, descriptions, notes— where a single line isn't enough. It keeps the standard field anatomy (label, mandatory marker, tooltip, helper text) but gives content room to breathe and be reviewed.\n\nOn top of the base field it adds optional pieces tailored to longer text: a word/character count, footer info, and a right-side action button. It covers empty and filled kinds and the full form state range —default, hover, active, error, and disabled. When there is a length limit, the word count should be visible, and the Error state should be paired with the detail text explaining what to fix.",
  "keywords": [
   "text area",
   "textarea",
   "multi-line",
   "long text",
   "comment",
   "message",
   "description",
   "notes",
   "word count",
   "character count",
   "form field",
   "error"
  ],
  "whenToUse": [
   "Capturing longer, multi-line content (messages, comments, descriptions, notes).",
   "When users need room to review and edit what they wrote.",
   "Fields with a length limit, using the word/character count to guide them.",
   "Cases needing a contained action (right button) or footer info alongside the input."
  ],
  "whenNotToUse": [
   "Short, single-line values — use Input field - Text.",
   "Specialized inputs (password, date, search, PIN) with their own field.",
   "Choosing from predefined options — use a Dropdown input.",
   "Fixing the height so short entries waste space or long ones can't be reviewed."
  ],
  "properties": [
   {
    "property": "Kinds",
    "raw": "Empty, Filled",
    "options": [
     "Empty",
     "Filled"
    ]
   },
   {
    "property": "States",
    "raw": "Default, Hover, Active, Error, Disabled",
    "options": [
     "Default",
     "Hover",
     "Active",
     "Error",
     "Disabled"
    ]
   },
   {
    "property": "Show label",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Mandatory input",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show tooltip",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show right button",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show word count",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show footer info",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Label",
  "slug": "label",
  "short": "A small, non-interactive marker that categorizes or qualifies an element by meaning, with optional icon and badge.",
  "context": "A Label is a compact, non-interactive marker used to categorize or qualify an element —to communicate a status, a category, or a state at a glance. It condenses meaning into a small piece of UI, helping users classify and scan content quickly without reading a full sentence.\n\nIts Kind carries meaning through the palette —Neutral for plain categorization, and Info, Alert, Error, or Success for semantic states— so the type of information is recognizable by color. It can include a leading icon to reinforce the meaning and a badge for an additional count or signal. Because it isn't interactive, it should never look clickable; for interactive filters or removable tokens, use Pills instead.",
  "keywords": [
   "label",
   "status",
   "tag",
   "chip",
   "category",
   "state",
   "marker",
   "badge",
   "neutral",
   "info",
   "success",
   "error"
  ],
  "whenToUse": [
   "Communicating a status or state of an element (Info, Alert, Error, Success).",
   "Categorizing or qualifying content so it's scannable at a glance.",
   "When a color-coded, non-interactive marker conveys meaning faster than text.",
   "Reinforcing meaning with an icon or adding a badge for an extra signal."
  ],
  "whenNotToUse": [
   "Interactive filters or selectable tokens — use Pills.",
   "Removable tokens (e.g. selected filters with a close action) — use Pills.",
   "Signaling a notification/count attached to another element — use Badge.",
   "As a button or link — a label must never look clickable."
  ],
  "properties": [
   {
    "property": "Kind",
    "raw": "Neutral, Info, Alert, Error, Success",
    "options": [
     "Neutral",
     "Info",
     "Alert",
     "Error",
     "Success"
    ]
   },
   {
    "property": "Show icon",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show Badge",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Pagination",
  "slug": "pagination",
  "short": "A control for moving through a large set of results split across pages, with page numbers, navigation arrows, and ellipses.",
  "context": "Pagination lets users move through a large collection of results that has been split into pages, giving them both a sense of scale (how much content there is) and direct control over where they jump. It is the right pattern when users need to navigate deliberately and return to a specific page, rather than scrolling endlessly.\n\nIt is composed of numbered page items, previous/next navigation, and ellipses that collapse long ranges so the control stays compact. Page numbers expose default, hover, and active states, so the current page is always clear, and the first/middle/last ellipses and the left/right navigation can be toggled to fit the number of pages. Always keep the current page and the overall context visible.",
  "keywords": [
   "pagination",
   "pages",
   "page navigation",
   "paging",
   "next",
   "previous",
   "page numbers",
   "ellipsis",
   "results",
   "list",
   "table",
   "navigate"
  ],
  "whenToUse": [
   "Navigating a large set of results split into discrete pages (tables, search results, listings).",
   "When users need to jump to a specific page or return to one they saw before.",
   "Giving a sense of scale — how many pages/results exist.",
   "Long ranges that need ellipses to stay compact while keeping first/last reachable."
  ],
  "whenNotToUse": [
   "Short result sets that fit on one page.",
   "Content better suited to infinite scroll or \"load more\" (feeds, continuous browsing).",
   "Sequential steps of a process — use a stepper/wizard.",
   "When users never need to return to a specific page and order isn't important."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Pagination",
    "raw": "Kind",
    "options": [
     "Kind"
    ]
   },
   {
    "property": "Pagination",
    "raw": "Show left / right navigation",
    "options": [
     "Show left",
     "right navigation"
    ]
   },
   {
    "property": "Pagination",
    "raw": "Show first / middle / last ellipsis",
    "options": [
     "Show first",
     "middle",
     "last ellipsis"
    ]
   },
   {
    "property": "Page number",
    "raw": "States",
    "options": [
     "States"
    ]
   },
   {
    "property": "Pagination left / right",
    "raw": "States",
    "options": [
     "States"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "PIN code",
  "slug": "pin-code",
  "short": "A segmented field for entering a short code across separate cells, such as a verification or one-time code.",
  "context": "The PIN code field captures a short code —a one-time password, a verification code, a security PIN— across a set of separate single-character cells. Splitting the code into individual boxes makes each character easy to read and correct, and signals clearly how many digits are expected.\n\nIt is composed of individual PIN code input cells, each showing a filled state and the interaction range —default, hover, active, error, and disabled— so progress and validation are visible per cell. To be usable it should auto-advance to the next cell as the user types, support pasting the full code at once, and surface a wrong or expired code through the error state.",
  "keywords": [
   "pin code",
   "pin",
   "otp",
   "one-time password",
   "verification code",
   "2fa",
   "security code",
   "code input",
   "segmented input",
   "confirmation",
   "digits",
   "authentication"
  ],
  "whenToUse": [
   "Entering a short verification or one-time code (OTP, 2FA, email/SMS confirmation).",
   "Codes with a fixed, known length where seeing each character helps.",
   "Flows that benefit from auto-advance and full-code paste.",
   "Cases needing clear feedback for a wrong or expired code via the error state."
  ],
  "whenNotToUse": [
   "Passwords or longer secrets — use Input field - Password.",
   "Variable-length or free-form text — use a standard text input.",
   "Very long codes where separate cells become cumbersome.",
   "Flows that can't paste the full code, which frustrates users on mobile."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "PIN code",
    "raw": "Filled",
    "options": [
     "Filled"
    ]
   },
   {
    "property": "PIN code",
    "raw": "States",
    "options": [
     "States"
    ]
   },
   {
    "property": "PIN code input",
    "raw": "Filled",
    "options": [
     "Filled"
    ]
   },
   {
    "property": "PIN code input",
    "raw": "States",
    "options": [
     "States"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Pill",
  "slug": "pill",
  "short": "A single selectable chip with a clear selected state and default, hover and disabled interactions.",
  "context": "A Pill is a compact, selectable chip used for filtering content or making quick, mutually related choices. Each Pill has a clear selected state and the interaction range —default, hover, and disabled— so the current choice is unmistakable.\n\nPills are the individual items that compose a Pills group. On their own they represent a single toggleable choice; grouped, they let users scan all options and switch selection in a single tap. Pills are not meant for primary page navigation or for triggering actions.",
  "keywords": [
   "pill",
   "chip",
   "filter chip",
   "tag",
   "toggle",
   "selectable",
   "selection",
   "choice",
   "segmented"
  ],
  "whenToUse": [
   "Representing a single, toggleable choice within a set of related options.",
   "Filtering content or switching category with a clear selected state.",
   "Composing a Pills group where each option must be scannable at a glance.",
   "Lightweight selection where a clear on/off state matters more than a full form control."
  ],
  "whenNotToUse": [
   "Primary page navigation — use Tabs or a menu.",
   "Formal single/multi selection in a form — use Radio buttons or a Checkbox group.",
   "Triggering an action — use a Button.",
   "Static, non-interactive metadata — use a Label or Badge."
  ],
  "properties": [
   {
    "property": "Selected",
    "raw": "No selected, Selected",
    "options": [
     "No selected",
     "Selected"
    ]
   },
   {
    "property": "State",
    "raw": "Default, Hover, Disabled",
    "options": [
     "Default",
     "Hover",
     "Disabled"
    ]
   },
   {
    "property": "Text",
    "raw": "Editable",
    "options": [
     "Editable"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Pills group",
  "slug": "pills-group",
  "short": "A set of selectable pills for filtering or quick, related choices, with clear selected states.",
  "context": "A Pills group is a horizontal set of compact, selectable pills used for filtering content or making quick, mutually related choices. Because all options are visible at once, users can scan them and toggle a selection in a single tap, which makes pills ideal for lightweight filtering and category switching.\n\nIt is composed of individual Pill items, each with a clear selected state and the interaction range —default, hover, and disabled— so the current choice is unmistakable. The group scales from 1 to 10 items. Selection should be obvious and, depending on the use, allow one or several active pills; pills are not meant for primary page navigation.",
  "keywords": [
   "pills",
   "pill group",
   "chips",
   "filters",
   "filter chips",
   "toggle",
   "categories",
   "quick filters",
   "selection",
   "segmented",
   "tags",
   "choices"
  ],
  "whenToUse": [
   "Filtering content or switching between categories with all options visible.",
   "Quick, related choices users can toggle in a single tap.",
   "Sets of options that fit on screen and benefit from at-a-glance scanning (1–10 items).",
   "Lightweight selection where a clear selected state matters more than a full form control."
  ],
  "whenNotToUse": [
   "Primary page navigation — use tabs or a menu.",
   "Formal single/multi selection in a form — use Radio buttons or a Checkbox group.",
   "Long option lists that don't fit on screen — use a Dropdown.",
   "Triggering actions — use a Button."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Pills group",
    "raw": "Items",
    "options": [
     "Items"
    ]
   },
   {
    "property": "Pill",
    "raw": "Selected",
    "options": [
     "Selected"
    ]
   },
   {
    "property": "Pill",
    "raw": "State",
    "options": [
     "State"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Placeholder",
  "slug": "placeholder",
  "short": "A neutral filler that reserves space for content that is not yet defined.",
  "context": "A Placeholder is a neutral, low-emphasis block used to reserve space for content that hasn't been defined yet. During layout and prototyping it stands in for images, sections, or components still to come, so the structure and spacing of a screen can be evaluated before the real content exists.\n\nIts purpose is intentionally generic: it communicates \"something goes here\" without implying any specific content or style. Because it carries no real information, it should always be replaced with the final content before hand-off or production —a lingering placeholder signals an unfinished screen.",
  "keywords": [
   "placeholder",
   "filler",
   "dummy",
   "mockup",
   "wireframe",
   "prototype",
   "layout",
   "stand-in",
   "empty",
   "reserved space",
   "skeleton",
   "draft"
  ],
  "whenToUse": [
   "Prototyping and layout exploration, before the real content is ready.",
   "Reserving space and structure so spacing and composition can be evaluated.",
   "Standing in for images, sections, or components still to be designed.",
   "Communicating \"content goes here\" in early-stage screens."
  ],
  "whenNotToUse": [
   "In a finished or production flow — replace it with the real content first.",
   "As a loading state for content that will populate at runtime — use a skeleton/loading pattern.",
   "To convey real information of any kind.",
   "As a substitute for an empty state with its own message and guidance."
  ],
  "properties": [],
  "propertiesNote": "Single component — a neutral filler with no exposed variant properties."
 },
 {
  "name": "Radio buttons group",
  "slug": "radio-buttons-group",
  "short": "A set of mutually exclusive options where selecting one clears the others, with an optional group label.",
  "context": "A Radio buttons group presents a set of mutually exclusive options: only one can be selected at a time, and choosing a new one clears the previous selection. It is the right pattern whenever a single choice must be made from a small set of options that are all worth showing at once.\n\nIt is composed of individual Radio button items —each with a selected state and the interaction range (default, hover, disabled)— and an optional group label naming the decision. The group scales from 1 to 5 items. Because all options stay visible, users can compare them directly; providing a sensible default selection helps them move faster.",
  "keywords": [
   "radio buttons",
   "radio group",
   "radio",
   "single selection",
   "single choice",
   "mutually exclusive",
   "options",
   "select one",
   "form",
   "choice",
   "fieldset",
   "pick one"
  ],
  "whenToUse": [
   "Choosing one option from a small set (about 2–5) that are all worth showing.",
   "When users benefit from comparing all options at once, visible side by side.",
   "Decisions that need a clear group label and a sensible default selection.",
   "Mutually exclusive choices in a form."
  ],
  "whenNotToUse": [
   "Multiple selections are valid — use a Checkbox group.",
   "Many options that don't all fit — use a Dropdown.",
   "A single on/off setting — use a Switch or a lone Checkbox.",
   "Quick, lightweight filtering — use Pills."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Radio buttons group",
    "raw": "Items",
    "options": [
     "Items"
    ]
   },
   {
    "property": "Radio buttons group",
    "raw": "Show label",
    "options": [
     "Show label"
    ]
   },
   {
    "property": "Radio button",
    "raw": "Selected",
    "options": [
     "Selected"
    ]
   },
   {
    "property": "Radio button",
    "raw": "States",
    "options": [
     "States"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Rating",
  "slug": "rating",
  "short": "A star-based control to display or capture a score from 0 to 5.",
  "context": "The Rating component represents a score on a five-star scale, either to display an existing value (an average review, a quality score) or to let users submit their own. Stars are an instantly recognizable, compact way to communicate evaluation, so users grasp the level without reading a number.\n\nIt is composed of individual star fragments that show empty or full fill and default/hover states, and the whole component covers scores from 0 to 5 stars. When precision matters, the exact numeric value should be shown alongside the stars. Ratings are for evaluative, subjective scores —not for representing arbitrary quantities or progress.",
  "keywords": [
   "rating",
   "stars",
   "star rating",
   "score",
   "review",
   "feedback",
   "evaluation",
   "five stars",
   "quality",
   "ranking",
   "vote",
   "average"
  ],
  "whenToUse": [
   "Displaying an average or individual score (reviews, quality, satisfaction).",
   "Capturing a user's subjective evaluation on a familiar 5-star scale.",
   "When an at-a-glance visual score communicates faster than a number.",
   "Alongside the numeric value when precision matters."
  ],
  "whenNotToUse": [
   "Representing arbitrary quantities or counts — use text or a badge.",
   "Showing progress or completion — use a progress indicator.",
   "Scales that aren't 0–5 or need finer granularity.",
   "Non-evaluative data that isn't a rating."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Rating",
    "raw": "Kinds",
    "options": [
     "Kinds"
    ]
   },
   {
    "property": "Rating star",
    "raw": "Fill",
    "options": [
     "Fill"
    ]
   },
   {
    "property": "Rating star",
    "raw": "State",
    "options": [
     "State"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Search field",
  "slug": "search-field",
  "short": "A field for entering a query to search or filter content, with an optional submit button.",
  "context": "The Search field lets users enter a query to find or filter content. It is a specialized input focused on retrieval: users type a term and either filter results as they go or submit to run the search, making it the entry point for finding things quickly across a dataset or page.\n\nIt covers empty and filled kinds and the full interaction range —default, hover, active, error, and disabled— and can show a submit button when search is triggered explicitly rather than as-you-type. It should give clear affordances to submit and to clear the query, and surface a no-results or error situation through the appropriate state.",
  "keywords": [
   "search",
   "search field",
   "search bar",
   "search input",
   "filter",
   "query",
   "find",
   "lookup",
   "magnifier",
   "autocomplete",
   "clear",
   "submit"
  ],
  "whenToUse": [
   "Letting users find or filter content by typing a query.",
   "Datasets, lists, or pages where locating something quickly is a common task.",
   "Search that runs as-you-type or on submit (with the optional button).",
   "When users need clear ways to submit and clear the query."
  ],
  "whenNotToUse": [
   "Choosing from predefined options — use a Dropdown or Dropdown input.",
   "General text entry unrelated to search — use Input field - Text.",
   "Search that is a primary task but hidden behind an icon with no visible field.",
   "Very small datasets where a simple filter (pills, tabs) is clearer than a search field."
  ],
  "properties": [
   {
    "property": "Filled",
    "raw": "No, Yes",
    "options": [
     "No",
     "Yes"
    ]
   },
   {
    "property": "States",
    "raw": "Default, Hover, Active, Error, Disabled",
    "options": [
     "Default",
     "Hover",
     "Active",
     "Error",
     "Disabled"
    ]
   },
   {
    "property": "Show Button",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Switch",
  "slug": "switch",
  "short": "A toggle for turning a single setting on or off, taking effect immediately.",
  "context": "A Switch toggles a single setting between two states —on and off— and applies the change immediately, without needing a separate save action. Its physical, toggle-like appearance signals that flipping it has an instant effect, which makes it the right control for settings and preferences that take effect on the spot.\n\nIt exposes selected (on/off) and the interaction range —default, hover, and disabled— and can show an inline text label describing the setting. The label should name the setting itself, not the current state, and because the change is instant, a switch shouldn't be used where the user expects to confirm before it applies.",
  "keywords": [
   "switch",
   "toggle",
   "on/off",
   "setting",
   "preference",
   "enable",
   "disable",
   "active",
   "instant",
   "boolean",
   "control",
   "flip"
  ],
  "whenToUse": [
   "Turning a single setting on or off with an immediate effect.",
   "Settings and preferences panels where changes apply on the spot.",
   "Binary states best expressed as a physical toggle (enabled/disabled).",
   "When an inline label naming the setting improves clarity."
  ],
  "whenNotToUse": [
   "Changes that need a separate Save/confirm step — use a Checkbox.",
   "Multiple options or a multi-select — use a Checkbox group.",
   "Mutually exclusive choices — use Radio buttons.",
   "Triggering an action rather than persisting a state — use a Button."
  ],
  "properties": [
   {
    "property": "Selected",
    "raw": "No, Yes",
    "options": [
     "No",
     "Yes"
    ]
   },
   {
    "property": "State",
    "raw": "Default, Hover, Disabled",
    "options": [
     "Default",
     "Hover",
     "Disabled"
    ]
   },
   {
    "property": "Show text",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Tabs group - Desktop",
  "slug": "tabs-group-desktop",
  "short": "Desktop tabs for switching between peer views within the same context, scaling from 2 to 10 items.",
  "context": "Tabs group - Desktop lets users switch between several peer views that live within the same context, keeping them in place while changing what's shown below. It organizes related content into parallel sections the user can move between freely, without navigating away from the current screen.\n\nIt is composed of individual Single tab items —each with a selected state, position (first, middle, last), and the interaction range (default, hover), plus optional icon and badge— and the group scales from 2 to 10 tabs. Exactly one tab should be selected at a time, and labels should be short and parallel. Tabs are for switching views, not for sequential steps or triggering actions.",
  "keywords": [
   "tabs",
   "tab group",
   "tabbed navigation",
   "sections",
   "views",
   "switch view",
   "desktop",
   "panels",
   "segmented",
   "selected tab",
   "navigation",
   "content switch"
  ],
  "whenToUse": [
   "Switching between peer views that belong to the same context, without leaving the screen.",
   "Organizing related content into parallel sections users move between freely.",
   "Desktop layouts with room for 2–10 horizontal tabs.",
   "When tabs benefit from icons or badges (e.g. a count on a section)."
  ],
  "whenNotToUse": [
   "Sequential steps of a process — use a stepper/wizard.",
   "Primary site navigation between top-level destinations — use a menu/nav.",
   "Triggering actions rather than switching views — use Buttons.",
   "Small screens where the tabs don't fit — use Tabs group - Mobile.",
   "So many sections they overflow the tab bar — reconsider the structure."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Tabs group - Desktop",
    "raw": "Items",
    "options": [
     "Items"
    ]
   },
   {
    "property": "Single tab",
    "raw": "Position",
    "options": [
     "Position"
    ]
   },
   {
    "property": "Single tab",
    "raw": "Selected",
    "options": [
     "Selected"
    ]
   },
   {
    "property": "Single tab",
    "raw": "State",
    "options": [
     "State"
    ]
   },
   {
    "property": "Single tab",
    "raw": "Show icon",
    "options": [
     "Show icon"
    ]
   },
   {
    "property": "Single tab",
    "raw": "Show badge",
    "options": [
     "Show badge"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Tabs group - Mobile",
  "slug": "tabs-group-mobile",
  "short": "The mobile adaptation of tabs for switching between peer views, with a collapsible open/closed state.",
  "context": "Tabs group - Mobile adapts the tab pattern to small screens, letting users switch between peer views within the same context where horizontal space is limited. It keeps the same mental model as desktop tabs —parallel sections the user moves between without leaving the screen— but fits the constraints of a mobile layout.\n\nThe group has a collapsible Closed/Open state so the full set of tabs can be revealed on demand instead of crowding the viewport, and each Single tab exposes active/default states, a position (first, middle, last), and optional icon and badge. Exactly one tab stays active at a time, and the selected view should remain reachable even when the group is collapsed.",
  "keywords": [
   "tabs",
   "mobile tabs",
   "tab group",
   "tabbed navigation",
   "sections",
   "views",
   "switch view",
   "mobile",
   "collapsible",
   "responsive",
   "active tab",
   "content switch"
  ],
  "whenToUse": [
   "Switching between peer views on small screens where horizontal space is tight.",
   "Mobile layouts that need a collapsible tab set to save space.",
   "Organizing related content into parallel sections without leaving the screen.",
   "When tabs benefit from icons or badges on mobile."
  ],
  "whenNotToUse": [
   "Desktop layouts with room for a full horizontal tab bar — use Tabs group - Desktop.",
   "Sequential steps of a process — use a stepper/wizard.",
   "Primary app navigation between top-level destinations — use a bottom nav/menu.",
   "Triggering actions rather than switching views — use Buttons."
  ],
  "properties": [
   {
    "property": "Element",
    "raw": "Property",
    "options": [
     "Property"
    ]
   },
   {
    "property": "Tabs group - Mobile",
    "raw": "State",
    "options": [
     "State"
    ]
   },
   {
    "property": "Single tab",
    "raw": "Position",
    "options": [
     "Position"
    ]
   },
   {
    "property": "Single tab",
    "raw": "State",
    "options": [
     "State"
    ]
   },
   {
    "property": "Single tab",
    "raw": "Show icon",
    "options": [
     "Show icon"
    ]
   },
   {
    "property": "Single tab",
    "raw": "Show badge",
    "options": [
     "Show badge"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Text group",
  "slug": "text-group",
  "short": "A composable content block combining title, label, text, icon, and an optional action, in default or contained style.",
  "context": "A Text group is a composable content block that assembles the common pieces of a text section —title, label, body text, icon, and an optional action button— into one consistent, reusable unit. Instead of laying out these elements by hand each time, the component guarantees consistent hierarchy and spacing across every text section in the product.\n\nEach part can be toggled on or off (title, label, text, icon, button), so the same component covers anything from a simple paragraph to a full titled section with an action. It comes in two treatments: Default and Contained (wrapped in a surface for more emphasis). Keep the natural hierarchy —label/title first, then text, then action— so the block reads clearly.",
  "keywords": [
   "text group",
   "text block",
   "content block",
   "section",
   "title",
   "label",
   "body text",
   "heading",
   "description",
   "contained",
   "composable",
   "layout"
  ],
  "whenToUse": [
   "Building consistent text sections with a title, body, and optional action.",
   "When you want hierarchy and spacing handled by the component rather than by hand.",
   "Blocks that need to flex —toggling title, label, icon, or button on or off.",
   "Giving a text section extra emphasis with the contained treatment."
  ],
  "whenNotToUse": [
   "A single standalone piece of text — use a plain text style.",
   "Interactive rows of data — use Cells / Cells row.",
   "Page-level messages or alerts — use Banner.",
   "Recreating the block manually with loose layers instead of the component."
  ],
  "properties": [
   {
    "property": "Kind",
    "raw": "Default, Contained",
    "options": [
     "Default",
     "Contained"
    ]
   },
   {
    "property": "Show title",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show label",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show text",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show icon",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   },
   {
    "property": "Show button",
    "raw": "On / Off",
    "options": [
     "On",
     "Off"
    ]
   }
  ],
  "propertiesNote": ""
 },
 {
  "name": "Tooltip",
  "slug": "tooltip",
  "short": "A small overlay that shows brief contextual help or a label on hover or press, positioned relative to its trigger.",
  "context": "A Tooltip is a small overlay that surfaces brief, contextual information —a label, a definition, a hint— when the user hovers over or presses its trigger. It provides supporting detail on demand without cluttering the interface, keeping the base layout clean while help is one interaction away.\n\nIts text is editable and its arrow adapts to eight positions (top, bottom, left, right, and the four corners), so it can point at its trigger from wherever there's room without covering it. The copy should stay short, and because tooltips aren't reliably reachable on touch, essential information or actions must never live only inside one.",
  "keywords": [
   "tooltip",
   "hint",
   "popover",
   "hover",
   "help",
   "contextual help",
   "label",
   "info",
   "overlay",
   "description",
   "on hover",
   "explanation"
  ],
  "whenToUse": [
   "Showing brief supporting detail on demand (a definition, a hint, an icon's meaning).",
   "Clarifying icon-only controls with an accessible label.",
   "Keeping the base layout clean while help stays one interaction away.",
   "Pointing at a trigger from the best available side using the eight positions."
  ],
  "whenNotToUse": [
   "Essential information or actions — tooltips aren't reliable on touch devices.",
   "Long or rich content — use a popover, modal, or inline text.",
   "Persistent messages that should always be visible — use Label, Banner, or helper text.",
   "Content that must be keyboard/screen-reader reachable as primary information."
  ],
  "properties": [
   {
    "property": "State",
    "raw": "Default, Hover/Pressed",
    "options": [
     "Default",
     "Hover/Pressed"
    ]
   },
   {
    "property": "Position",
    "raw": "Top, Top left, Top right, Bottom, Bottom left, Bottom right, Left, Right",
    "options": [
     "Top",
     "Top left",
     "Top right",
     "Bottom",
     "Bottom left",
     "Bottom right",
     "Left",
     "Right"
    ]
   },
   {
    "property": "Text",
    "raw": "Editable",
    "options": [
     "Editable"
    ]
   }
  ],
  "propertiesNote": ""
 }
];
