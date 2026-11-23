/* ==========================================================================
   Eraiki DS — Marketing sections: config/docs + live markup builders. Single source for the
   portal (js/app.js) and the Storybook stories, so the two never drift.
   Depends on window.EK_ICONS (js/icons.js) and window.EK_BUILD (js/builders.js).
   ========================================================================== */
(function () {
  const SECTIONS = [
    { slug: 'hero', name: 'Hero', desc: 'Above-the-fold intro: headline, supporting copy and primary actions.', versions: [
      { slug: 'hero-image-slider', name: 'Hero Image Slider', shot: 'hero-image-slider', node: '1316-18543',
        short: 'Full-bleed image hero with the headline and actions anchored to the bottom.',
        description: "Hero Image Slider is a full-bleed image hero: a large photograph fills the block, a dark scrim keeps the copy legible, and the content sits at the bottom. The message — an eyebrow, a big heading and a short paragraph — occupies the lower-left, with a primary action and a pair of previous / next arrows along the base.\n\nText and controls use the system's dark (on-image) tokens, and it is built from the Text group and Button components. Use it above the fold to set the tone with a single strong image and one clear call to action; the arrows suit a rotating set of slides.",
        keywords: ['hero', 'image hero', 'full-bleed', 'above the fold', 'banner', 'headline', 'cta', 'carousel', 'scrim', 'landing'],
        whenToUse: [
          'Opening a page above the fold with a strong, full-bleed image.',
          'Pairing a headline and one primary action over photography.',
          'A rotating hero with previous / next controls.',
          'Setting the tone or mood before the rest of the page.',
        ],
        whenNotToUse: [
          'When no high-quality, meaningful image is available.',
          'Dense content or several competing actions — keep it to one message.',
          "When text contrast over the image can't be guaranteed without the scrim.",
          'Utility pages where a plain header is more appropriate.',
        ],
        frameDesktop: 'The image fills the block; the headline sits lower-left with the actions along the bottom.',
        frameMobile: 'The image and copy stack full-width, with the actions below the text.' },
      { slug: 'hero-split-columns', name: 'Hero Split Columns', shot: 'hero-split-columns', node: '1316-18548',
        short: 'Full-screen image hero with two text columns anchored to the bottom.',
        description: 'Hero Split Columns spreads its content across the bottom of a full-screen image: the headline — an eyebrow and a large title — sits on the left, while a short paragraph and a primary action sit in a narrower column on the right. A dark scrim keeps both columns legible over the photography.\n\nThe two columns share the same on-image (dark) tokens and are built from the Text group and Button components; on smaller screens they stack, heading first. Use it when the headline and the supporting copy each deserve their own space over a strong image.',
        keywords: ['hero', 'image hero', 'full-screen', 'two columns', 'split heading', 'above the fold', 'headline', 'cta', 'scrim', 'editorial'],
        whenToUse: [
          'Giving the headline and the supporting copy their own columns over an image.',
          'A wide, editorial hero above the fold.',
          'Balancing a big statement on the left with detail and a CTA on the right.',
          'Setting the tone with a single strong, full-screen image.',
        ],
        whenNotToUse: [
          'Narrow layouts where two columns would crowd — use a single-column hero.',
          'When no strong, meaningful image is available.',
          'When several competing actions are needed — keep it to one primary CTA.',
          "When text contrast over the image can't be guaranteed without the scrim.",
        ],
        frameDesktop: 'The headline sits bottom-left; the paragraph and CTA sit bottom-right.',
        frameMobile: 'The columns stack — heading first, then the paragraph and CTA.' },
      { slug: 'hero-marquee-gallery', name: 'Hero Marquee Gallery', shot: 'hero-marquee-gallery', node: '1484-30375',
        short: 'A centered intro over a full-bleed, auto-scrolling image marquee.',
        description: "Hero Marquee Gallery opens a page with a centered intro — an eyebrow, a large title, a short paragraph and two actions — above a full-bleed row of images in alternating sizes (square and tall) that scrolls slowly past both edges in a seamless loop.\n\nThe intro is built from the Text group and Button components on a Container 100%, and the images use Corner radius M. The marquee stops for users who prefer reduced motion. Use it to open a page with one shared message and an image-led, editorial feel.",
        keywords: ['hero', 'image gallery', 'marquee', 'auto-scroll', 'centered intro', 'full-bleed', 'above the fold', 'cta', 'editorial', 'carousel'],
        whenToUse: [
          'Opening a page with one centered message and an image-led, editorial feel.',
          'Showing the breadth of a catalogue or service through imagery rather than copy.',
          'Adding subtle, ambient motion above the fold.',
          'A lighter, image-led alternative to a full-screen photo hero.',
        ],
        whenNotToUse: [
          'When a single strong photo should carry the hero — use Hero Image Slider or Hero Split Columns.',
          "When there aren't enough quality images to fill the row.",
          'When each image must be read, captioned or clicked — motion makes that hard.',
          'When motion has to be kept to a minimum.',
        ],
        frameDesktop: 'The intro and both CTAs sit centered above an edge-to-edge row of mixed-size images scrolling left.',
        frameMobile: 'Same order, narrower: the intro stays centered and the image row shows about two images at a time.' },
    ] },
    { slug: 'values-features', name: 'Values & Features', desc: 'Grids and lists that communicate product value and features.', versions: [
      { slug: 'values-icon-grid', name: 'Values & Features Icon Grid', shot: 'values-icon-grid', node: '1316-18293',
        short: 'A centered intro above a row of four icon-led feature cards.',
        description: 'Values & Features Icon Grid leads with a short, centered message — an eyebrow, a heading, a line of copy and a pair of actions — and follows it with a row of four feature cards. Each card is a small icon box, a short title and a line of supporting copy, so a set of benefits reads as one calm, scannable grid rather than a wall of text.\n\nThe intro is a Text group with a primary and a secondary action; the cards reuse the same icon-box, title and body building blocks on a muted surface. On smaller screens the four cards stack into a single column and the actions move under one another. Use it to summarise the core values or features of a product in one glanceable band.',
        keywords: ['values', 'features', 'benefits', 'feature grid', 'icon cards', 'value props', 'highlights', 'text boxes', 'four columns', 'feature list'],
        whenToUse: [
          'Summarising three to four core values or features in one scannable row.',
          'Pairing a short pitch with a set of icon-led benefit cards.',
          'Giving each benefit equal weight in a calm, even grid.',
          'An overview band before deeper feature or pricing sections.',
        ],
        whenNotToUse: [
          'A single feature that deserves a full text + media block — use an Explanation.',
          'Long, detailed descriptions per item — cards are meant to stay short.',
          'More items than fit comfortably in one row — consider a list or multiple rows.',
          'When each item needs its own call to action — these cards have none.',
        ],
        frameDesktop: 'The intro sits centered above four equal feature cards in a row.',
        frameMobile: 'The four cards stack into one column and the actions stack too.' },
      { slug: 'values-highlight-list', name: 'Values & Features Highlight List', shot: 'values-highlight-list', node: '1316-18682',
        short: 'A heading and a vertical feature list beside a tall image.',
        description: 'Values & Features Highlight List puts a heading and a vertical list of features on one side and a tall image on the other. The first item is highlighted on a muted surface and carries a line of supporting copy, while the rest stay as compact title-only rows — a simple way to lead with one key feature and let the others follow.\n\nEach row pairs an accent-filled icon box with its title, reusing the Text group building blocks so type and spacing match the rest of the system. On smaller screens the list stacks above the image. Use it to walk through a handful of features next to a supporting visual.',
        keywords: ['values', 'features', 'feature list', 'benefits', 'text + image', 'highlighted item', 'icon list', 'vertical list', 'image', 'showcase'],
        whenToUse: [
          'Walking through a handful of features next to a supporting image.',
          'Leading with one key feature (highlighted, with copy) over a list of others.',
          'Pairing a vertical, icon-led list with a tall product visual.',
          'A calmer alternative to an even grid when one item should stand out.',
        ],
        whenNotToUse: [
          'Giving every feature equal weight — use the even grid of Values & Features Icon Grid.',
          'When there is no relevant image to sit beside the list.',
          'Long descriptions on every row — only the lead item is meant to expand.',
          'More items than read comfortably as a single vertical column.',
        ],
        frameDesktop: 'The heading and feature list sit left; a tall image fills the right.',
        frameMobile: 'The heading and list stack first, with the image below them.' },
      { slug: 'values-numbered-list', name: 'Values & Features Numbered List', shot: 'values-numbered-list', node: '1316-18724',
        short: 'A heading over an image paired with a numbered feature list.',
        description: 'Values & Features Numbered List opens with a heading, then sets a tall image beside a numbered list. Each row pairs an index and a short title with a line of supporting copy, and thin rules separate one row from the next — so a sequence of features or steps reads in a clear, ordered rhythm next to a supporting visual.\n\nThe list reuses the Text group type styles: a muted number, a compact bold title and a quieter description. On smaller screens the image moves above the list and each row stacks its title over its description. Use it to walk through an ordered set of features, principles or steps.',
        keywords: ['values', 'features', 'numbered list', 'steps', 'ordered list', 'text + image', 'principles', 'index', 'feature list', 'dividers'],
        whenToUse: [
          'Walking through an ordered set of features, principles or steps.',
          'Pairing a numbered list with a supporting image.',
          'When the sequence or count of items matters (01–04).',
          'A denser, index-led alternative to icon cards.',
        ],
        whenNotToUse: [
          'When order does not matter — an unnumbered list or grid reads calmer.',
          'Very long lists — the numbering and rules get heavy.',
          'When each item needs an icon or its own action.',
          'When there is no relevant image to sit beside the list.',
        ],
        frameDesktop: 'The heading sits above an image on the left and a numbered list on the right.',
        frameMobile: 'The image moves above the list; each row stacks its title over its description.' },
      { slug: 'values-staggered-cards', name: 'Values & Features Staggered Cards', shot: 'values-staggered-cards', node: '1316-20821',
        short: 'A centered intro over three staggered illustrated cards.',
        description: 'Values & Features Staggered Cards leads with a centered message — an eyebrow, a heading, a line of copy and a pair of actions — then presents three feature cards that step down the page in a staggered rhythm. Each card pairs a short heading with an abstract illustration and a line of supporting copy, so a small set of features reads as a light, editorial layout rather than a rigid row.\n\nThe intro reuses the Text group and Button components; the cards sit on a muted surface with illustrations exported from the design. On smaller screens the stagger flattens and the three cards stack into a single column. Use it to present three headline features with a more expressive, illustrated treatment.',
        keywords: ['values', 'features', 'staggered', 'cards', 'illustrations', 'masonry', 'feature cards', 'editorial', 'offset grid', 'three columns'],
        whenToUse: [
          'Presenting three headline features with an illustrated, editorial feel.',
          'When a staggered, less rigid layout suits the brand.',
          'Pairing each feature with an abstract illustration rather than an icon.',
          'A more expressive alternative to the even grid of Values & Features Icon Grid.',
        ],
        whenNotToUse: [
          'More than three items — the stagger and illustrations get unwieldy.',
          'When features must line up for direct comparison — use an even grid.',
          'When you have no illustrations and only icons or text.',
          'Dense, information-heavy features that need a compact list.',
        ],
        frameDesktop: 'A centered intro above three cards that step down 0/80/160px.',
        frameMobile: 'The stagger flattens and the three cards stack into one column.' },
    ] },
    { slug: 'explanations', name: 'Explanations', desc: 'Alternating text + media blocks that explain how something works.', versions: [
      { slug: 'explanation-banner-card', name: 'Explanation Banner Card', shot: 'explanation-banner-card', node: '1282-33698',
        short: 'Full-bleed image banner with a contained text card that explains one idea.',
        description: 'Explanation Banner Card introduces or explains a single idea by laying a contained text card over a full-bleed image. The image sets the context or mood; the card — an eyebrow, a heading, a short paragraph and one call to action — carries the message and keeps it readable on top of the photography.\n\nThe card is the Text group component in its contained variant, so its type scale, spacing and button states stay consistent with the rest of the system. Keep it to one clear message and a single primary action — the image is supporting context, not the content itself, so the copy should still make sense if the picture never loads.',
        keywords: ['explanation', 'card on image', 'image banner', 'overlay card', 'feature', 'text on image', 'editorial', 'storytelling', 'call to action', 'contained'],
        whenToUse: [
          'Explaining a single concept, feature or benefit with a supporting image behind it.',
          'Adding visual context or mood to a short, self-contained message.',
          'Breaking up a long page with an editorial, image-led moment.',
          'Driving one clear action from an image-rich section.',
        ],
        whenNotToUse: [
          'Comparing several features at once — use a grid of cards or a feature list.',
          'Dense or detailed content that would compete with the image for attention.',
          'When no meaningful image is available — use a plain text section instead.',
          'When the message needs more than one action — keep it to a single primary CTA.',
        ],
        frameDesktop: 'The image spans the full width with the text card anchored to the top-left.',
        frameMobile: 'The banner narrows and the card sits at almost full width over the image.' },
      { slug: 'explanation-split-media', name: 'Explanation Split Media', shot: 'explanation-split-media', node: '1282-33926',
        short: 'Two columns pairing a text block with a supporting image.',
        description: 'Explanation Split Media places a text block beside a supporting image to explain an idea while giving it a strong visual anchor. The text carries an eyebrow, a large heading, a short paragraph and up to two actions; the image sits in the opposite column and can lead or follow the text.\n\nBoth columns are built from existing components — the Text group and the Image — so type, spacing and button states stay consistent. Alternate the image side between consecutive sections to create rhythm down a long page, and keep each block focused on a single idea.',
        keywords: ['explanation', 'text and image', 'image and text', 'two columns', 'feature', 'media', 'side by side', 'editorial', 'alternating', 'storytelling'],
        whenToUse: [
          'Explaining an idea that benefits from a single supporting image alongside it.',
          'Alternating text and image blocks to give a long page rhythm.',
          'Pairing a short narrative with a product shot, photo or illustration.',
          'Offering up to two actions — a primary and a secondary — next to the explanation.',
        ],
        whenNotToUse: [
          'Showing many items at once — use a grid or a list of cards.',
          'When the image adds no meaning — a plain text section is lighter.',
          'Dense, reference-style content that needs the full width to stay readable.',
          'When more than two actions are needed — keep the choice simple.',
        ],
        overviewKind: 'text-image',
        options: [
          { name: 'Text + image', kind: 'text-image', desc: 'The text leads on the left with the image in the right column.' },
          { name: 'Image + text', kind: 'image-text', desc: 'The image leads on the left with the text in the right column.' },
        ],
        frameDesktop: 'Text and image sit side by side in two equal columns; the image can lead or follow.',
        frameMobile: 'The columns stack — image on top, text below — with the buttons in a vertical stack.' },
      { slug: 'explanation-twin-cards', name: 'Explanation Twin Cards', shot: 'explanation-twin-cards', node: '1282-34004',
        short: 'Two equal cards: a text panel beside an image panel.',
        description: 'Explanation Twin Cards splits the section into two equal cards — one holding the copy, the other an image — sitting side by side with a hairline gap. The text card carries an eyebrow, a large heading, a short paragraph and up to two actions; the image card holds a single landscape photo cropped to fill.\n\nBoth cards share the same rounded shape and height, so the pairing reads as one balanced unit rather than a banner with an overlay. Use it to explain an idea that deserves equal weight for words and picture, and alternate the image side between sections to keep a long page moving.',
        keywords: ['explanation', 'two cards', 'text and image', 'image and text', 'split panel', 'feature', 'media', 'side by side', 'landscape', 'alternating'],
        whenToUse: [
          'Giving the copy and the image equal visual weight in one balanced unit.',
          'Explaining an idea with a single supporting landscape image.',
          'Alternating the image side across consecutive sections for rhythm.',
          'Offering up to two actions — a primary and a secondary — beside the copy.',
        ],
        whenNotToUse: [
          'Showing several items at once — use a grid or a list of cards.',
          'When the image should dominate — use a full-bleed banner instead.',
          'Dense, reference-style content that needs the full width to stay readable.',
          'When more than two actions are needed — keep the choice simple.',
        ],
        overviewKind: 'text-image',
        options: [
          { name: 'Text + image', kind: 'text-image', desc: 'The text card leads on the left with the image card on the right.' },
          { name: 'Image + text', kind: 'image-text', desc: 'The image card leads on the left with the text card on the right.' },
        ],
        frameDesktop: 'Two equal cards side by side — a text panel and an image panel — with a hairline gap.',
        frameMobile: 'The cards stack — the text panel on top, the image panel below it.' },
      { slug: 'explanation-triple-panel', name: 'Explanation Triple Panel', shot: 'explanation-triple-panel', node: '1316-18477',
        short: 'A header over a three-panel row of two images and a text card.',
        description: 'Explanation Triple Panel leads with a short header — an eyebrow and a heading — and follows it with a row of three equal panels: two images and a text card carrying its own eyebrow, heading, paragraph and action. It works as a compact showcase where a couple of visuals and a message share equal billing.\n\nThe panels are built from the Image and Text group components and keep a consistent height and rounded shape, so the trio reads as one band. On narrow screens the row stacks into a single column. Use it to open a topic with supporting imagery, or to pair a gallery moment with a clear call to action.',
        keywords: ['explanation', 'three panels', 'showcase', 'gallery', 'images and text', 'feature', 'media row', 'editorial', 'header', 'card'],
        whenToUse: [
          'Introducing a topic with a short header and a small set of supporting visuals.',
          'Showing two images alongside a message and a single action.',
          'A compact showcase band inside a longer page.',
          'Pairing a gallery moment with a clear call to action.',
        ],
        whenNotToUse: [
          'Large galleries or many images — use a dedicated gallery or grid.',
          'When one image should dominate — use a full-bleed banner instead.',
          'Dense, text-heavy content that needs the full width to stay readable.',
          'When more than one primary action is needed per panel.',
        ],
        frameDesktop: 'A header above three equal panels — two images and a text card — in one row.',
        frameMobile: 'The header stays on top and the three panels stack into a single column.' },
      { slug: 'explanation-image-marquee', name: 'Explanation Image Marquee', shot: 'explanation-image-marquee', node: '1316-18630',
        short: 'A contained text intro above an auto-scrolling image marquee.',
        description: 'Explanation Image Marquee opens with a contained text block — an eyebrow, a large heading and a short paragraph — and follows it with a full-bleed image marquee that scrolls horizontally, edge to edge: images drift off the left and reappear from the right in a slow, seamless loop. The narrow measure keeps the copy readable while the moving strip gives the section an ambient, editorial finish.\n\nThe text uses the Text group component and the strip is built from the Image component. The marquee loops continuously and stops for users who prefer reduced motion. Use it to introduce a topic and let a set of related visuals drift past to carry the mood — not to present images that need to be read or clicked.',
        keywords: ['explanation', 'text and marquee', 'image marquee', 'carousel', 'auto-scroll', 'infinite scroll', 'motion', 'full-bleed', 'editorial', 'contained'],
        whenToUse: [
          'Introducing a topic while a band of related images drifts slowly past.',
          'Adding subtle, ambient motion and an editorial finish to a section.',
          'Showing a set of interchangeable, related visuals as one continuous loop.',
          'Pairing a narrow, readable text measure with full-width, moving imagery.',
        ],
        whenNotToUse: [
          'When each image must be read, captioned or clicked — motion makes that hard; use a static grid.',
          'A single hero image — use a full-bleed banner instead.',
          'Dense content that needs the full width for the text.',
          'When motion would distract from the primary message or task.',
        ],
        frameDesktop: 'A contained text block, then a full-width image marquee scrolling left.',
        frameMobile: 'The text spans the column with the image marquee scrolling below it.' },
      { slug: 'explanation-dark-card', name: 'Explanation Dark Card', shot: 'explanation-dark-card', node: '1316-20697',
        short: 'A dark card with copy and an image, over a full-bleed background.',
        description: "Explanation Dark Card sets a dark, self-contained card over a full-bleed background image. Inside the card the copy sits on the left — an eyebrow, a large heading, a short paragraph and a primary action — with a supporting image on the right. The dark surface and light text let it sit confidently on top of busy photography.\n\nThe card uses the dark surface with the system's dark text tokens, and is built from the Container, Text group, Button and Image components. Use it for a bold, focused statement over imagery — a single message and one action, not a dense block of content.",
        keywords: ['explanation', 'dark card', 'card on image', 'overlay', 'feature', 'hero', 'editorial', 'dark mode', 'image background', 'statement'],
        whenToUse: [
          'Making a bold, focused statement over a background image.',
          'Pairing a short message and one action with a supporting image.',
          'Adding contrast and depth with a dark card on photography.',
          'A confident, editorial section break within a long page.',
        ],
        whenNotToUse: [
          'Dense or detailed content — the dark card suits a short statement.',
          'When no strong background image is available — use a plain section.',
          'When several actions or links are needed — keep it to one primary action.',
          "When text contrast over the image can't be guaranteed without the card.",
        ],
        frameDesktop: 'A dark card over a background image: text on the left, image on the right.',
        frameMobile: 'The card fills the width with the text stacked above the image.' },
    ] },
    { slug: 'marquee', name: 'Marquee', desc: 'Continuously scrolling row of logos or text.', versions: [
      { slug: 'marquee-logo-strip', name: 'Marquee Logo Strip', shot: 'marquee-logo-strip', node: '1282-33648',
        short: 'A centered intro over a continuously scrolling row of brand logos.',
        description: 'Marquee Logo Strip pairs a short, centered message — an eyebrow, a heading, a line of copy and a primary action — with a row of brand or press logos that scrolls continuously beneath it. The logos are muted to a single tint and split by thin dividers, so the strip reads as quiet social proof without competing with the message.\n\nThe intro uses the Text group component and the strip is a pure-CSS marquee (two duplicated logo groups looping seamlessly) that stops for users who prefer reduced motion. Use it to show the brands, press or partners you work with as an ambient band of logos.',
        keywords: ['marquee', 'logos', 'brands', 'press', 'social proof', 'logo strip', 'carousel', 'auto-scroll', 'partners', 'ticker'],
        whenToUse: [
          'Showing the brands, press or partners you work with as social proof.',
          'An ambient, continuously moving band of logos under a short intro.',
          'Fitting many logos into a compact, scrolling strip.',
          'Reinforcing credibility without a static, cramped logo grid.',
        ],
        whenNotToUse: [
          'When each logo must be read carefully or clicked — motion makes that hard.',
          'Just a few logos that fit comfortably — a static row is calmer.',
          'When the logos need their real brand colour — this strip mutes them to one tint.',
          'When motion would distract from a primary conversion goal.',
        ],
        frameDesktop: 'A centered intro above a full-width row of logos scrolling left.',
        frameMobile: 'The intro narrows and the logo row keeps scrolling below it.' },
      { slug: 'marquee-logo-tiles', name: 'Marquee Logo Tiles', shot: 'marquee-logo-tiles', node: '1494-3311',
        short: 'A centered intro over two rows of logo tiles scrolling in opposite directions.',
        description: 'Marquee Logo Tiles pairs a centered intro — an eyebrow, a large title, a short paragraph and two actions — with two full-width rows of square logo tiles that scroll continuously in opposite directions. Each logo keeps its own colours inside a soft tile, and both edges fade into the background so the rows feel endless.\n\nThe intro is built from the Text group and Button components, and the rows are a pure-CSS marquee that moves at the same speed as every other marquee in the system and stops for users who prefer reduced motion. Use it when you have many partners, integrations or clients and want them to read as a rich, lively wall rather than a single quiet strip.',
        keywords: ['marquee', 'logos', 'logo wall', 'tiles', 'brands', 'partners', 'integrations', 'clients', 'social proof', 'auto-scroll'],
        whenToUse: [
          'Showing a large set of partners, integrations or clients at a glance.',
          'When the logos should keep their own colours and read as a lively wall.',
          'A colourful band of social proof under a short, centered intro.',
          'Filling a wide screen without building a static, cramped logo grid.',
        ],
        whenNotToUse: [
          'Just a handful of logos — use Marquee Logo Strip or a static row.',
          'When each logo must be read carefully or clicked — motion makes that hard.',
          'When the logos must look muted and uniform — Marquee Logo Strip tints them to one colour.',
          'When motion would distract from a primary conversion goal.',
        ],
        frameDesktop: 'A centered intro with two actions above two full-width rows of logo tiles; the rows scroll in opposite directions and fade at both edges.',
        frameMobile: 'The intro narrows and the two rows show about three tiles at a time, still scrolling and fading at the edges.' },
    ] },
    { slug: 'contact', name: 'Contact', desc: 'Contact section pairing copy with a form or details.',
      description: 'A Contact section pairs a short, persuasive message with a form so people can reach out without leaving the page. On one side a text group sets the intent — an eyebrow, a headline and a line of supporting copy; on the other, a compact form collects the essentials and closes with a single primary action.\n\nIt is composed entirely from existing components (Text group, Input field, Text area, Button), so labels, states, spacing and focus behaviour stay consistent with the rest of the system. Keep the form short — every extra field lowers completion — and reserve it for genuine two-way contact rather than long applications.',
      keywords: ['contact', 'contact form', 'form', 'get in touch', 'text + form', 'lead capture', 'enquiry', 'message', 'support', 'reach out'],
      whenToUse: [
        'Letting people send a message, enquiry or request straight from a marketing or product page.',
        'Pairing a short pitch or reassurance with the form that captures the response.',
        'Lightweight lead capture where a handful of fields is enough.',
        "A dedicated 'get in touch' area at the end of a landing page.",
      ],
      whenNotToUse: [
        'Long or multi-step forms and applications — use a dedicated form flow.',
        'Account, billing or settings forms inside the product — use the standard form patterns.',
        'Only displaying contact details with no input — use a plain text or info block.',
        'Collecting sensitive data without the appropriate consent and security treatment.',
      ],
      versions: [
      { slug: 'contact-split-form', name: 'Contact Split Form', shot: 'contact-split-form', node: '1282-33736',
        frameDesktop: 'Two columns side by side: the message and its supporting copy on the left, the form on the right.',
        frameMobile: 'The two columns collapse into a single stack — the message first, then the form below it.',
        options: [
          { name: 'Text + Form', kind: 'text-form', desc: 'The message leads on the left and the form follows on the right — the default reading order.' },
          { name: 'Form + Text', kind: 'form-text', desc: 'The form leads on the left with the message on the right — for when completing the form is the primary action.' },
        ] },
    ] },
    { slug: 'navigation-bar', name: 'Navigation Bar', desc: 'Top-level site navigation with brand, links and actions.', versions: [] },
    { slug: 'images-galleries', name: 'Images & Galleries', desc: 'Layouts for showcasing single images or galleries.', versions: [] },
    { slug: 'stats', name: 'Stats', desc: 'Highlighted metrics and key numbers.', versions: [] },
    { slug: 'testimonials', name: 'Testimonials', desc: 'Customer quotes and social proof.', versions: [
      { slug: 'testimonials-image-cards', name: 'Testimonials Image Cards', shot: 'testimonials-image-cards', node: '1282-33518',
        short: 'Portrait cards with customer quotes under a heading with slider arrows.',
        description: "Testimonials Image Cards builds trust by putting real customers front and centre: each card pairs a portrait with a short quote and the author's name and role, while the label and heading frame the social proof. Use it on landing and product pages close to a call to action, where credibility helps people decide.\n\nThe header is a Container 50% + 50% — a Text group (label + heading) on the left and previous / next arrows (Button) on the right — over a Container of four 25% cards. Each card is a dark portrait with a bottom scrim so the quote stays legible. On mobile the cards become a horizontal carousel with the next card peeking in.",
        keywords: ['testimonials', 'reviews', 'social proof', 'quotes', 'customers', 'trust', 'carousel', 'slider', 'portraits', 'endorsement'],
        whenToUse: [
          'Showing short quotes from customers, partners or users to build credibility.',
          'Putting a face to each endorsement so it feels personal and real.',
          'Supporting a sales or sign-up page right before or after a call to action.',
        ],
        whenNotToUse: [
          'Long case studies or detailed reviews — use an article or a case-study section.',
          'Ratings, scores or aggregated reviews — use a stats or rating pattern.',
          'Quotes without a photo of the person — use a text-only quote or a simple card grid.',
        ],
        frameDesktop: 'The label and heading sit left with the prev/next arrows bottom-right; four portrait cards fill the 25% columns below, each with its quote and author over the photo.',
        frameMobile: 'The heading wraps on the left with the arrows beside it; the cards turn into a horizontal carousel, with the next card peeking in from the right.' },
      { slug: 'testimonials-quote-marquee', name: 'Testimonials Quote Marquee', shot: 'testimonials-quote-marquee', node: '1595-5005',
        short: 'A centered intro over an auto-scrolling row of quote cards with the author’s avatar.',
        description: "Testimonials Quote Marquee shows a wall of social proof in motion: a centered intro — an eyebrow, a large heading, a short paragraph and two actions — above a full-bleed row of quote cards that drifts slowly past both edges in a seamless loop.\n\nEach card is a Quote card fragment — a quote icon, the quote in Heading S and the author with an Avatar, name and role — on the base surface with Corner radius M. The marquee stops for users who prefer reduced motion. Use it when you have many short testimonials and want them to feel abundant without taking much space.",
        keywords: ['testimonials', 'reviews', 'social proof', 'quotes', 'marquee', 'auto-scroll', 'avatars', 'customers', 'trust', 'carousel'],
        whenToUse: [
          'Showing many short testimonials as a continuous wall of social proof.',
          'Adding subtle motion to a landing page without competing with the main message.',
          'Putting a face and a role to each quote with the author’s avatar.',
        ],
        whenNotToUse: [
          'A few long or detailed testimonials — use Testimonials Image Cards or a case study.',
          'When each quote must be read carefully — motion makes that harder; use a static grid.',
          'When motion has to be kept to a minimum.',
        ],
        frameDesktop: 'The intro and both actions sit centered above a full-bleed row of quote cards that scrolls slowly to the left in a seamless loop.',
        frameMobile: 'Same order, narrower: the intro stays centered and the row shows one card at a time, with the next one peeking in.' },
    ] },
    { slug: 'brands-logos', name: 'Brands & Logos', desc: 'Logo walls establishing credibility.', versions: [] },
    { slug: 'footer', name: 'Footer', desc: 'Site-wide footer with navigation and legal.', versions: [] },
    { slug: 'cta', name: 'CTA', desc: 'Focused call-to-action band.', versions: [] },
    { slug: 'grids', name: 'Grids', desc: 'Reusable content grid layouts.', versions: [] },
    { slug: 'faqs', name: 'FAQs', desc: 'Frequently asked questions, usually as accordions.', versions: [
      { slug: 'faqs-split-list', name: 'FAQs Split List', shot: 'faqs-split-list', node: '1585-4732',
        short: 'A heading on the left beside a list of expandable questions on the right.',
        description: 'FAQs Split List answers common questions in a compact, scannable way: a heading — an eyebrow and a large title — sits in a narrow left column, and the questions stack in a wide right column as expandable cards. Opening a question reveals its answer and closes the one that was open, so the list stays short.\n\nThe layout is a Container 34% + 66%; each question is a FAQ item fragment — a question in Heading S with a tertiary icon button (plus / minus) and an answer in Body L — on the base surface with Corner radius M. On mobile the heading stacks above the list. Use it near the end of a page to clear up doubts before a call to action.',
        keywords: ['faq', 'faqs', 'questions', 'answers', 'accordion', 'expandable', 'help', 'support', 'two columns', 'split'],
        whenToUse: [
          'Answering the questions people ask most, right where doubts arise.',
          'Keeping long answers out of the way until someone asks for them.',
          'Clearing up objections near a sign-up or purchase call to action.',
        ],
        whenNotToUse: [
          'Content everyone needs to read — put it in the page, not behind a question.',
          'Long help articles or documentation — link to a help centre instead.',
          'A single question — use a plain text block.',
        ],
        frameDesktop: 'The heading sits in the narrow left column (34%) and the questions stack in the wide right column (66%); the open question shows its answer.',
        frameMobile: 'The heading sits on top and the questions stack below it at full width.' },
    ] },
    { slug: 'team', name: 'Team', desc: 'Team member profiles.', versions: [
      { slug: 'team-portrait-grid', name: 'Team Portrait Grid', shot: 'team-portrait-grid', node: '1625-4863',
        short: 'A heading over a grid of member portraits with their number, name and role.',
        description: "Team Portrait Grid introduces the people behind a team, club or community. A short heading leads into a grid of portrait cards — each a 3:4 photo with a member number, the person's name and their role — so the group reads as a set of real faces rather than a list.\n\nThe header is a Container 50% + 50% — a Text group on the left and a tertiary action on the right — and both card rows are Containers 25% × 4 of Member cards, built with the system type styles. On mobile the grid becomes two columns.",
        keywords: ['team', 'people', 'members', 'portraits', 'grid', 'profiles', 'community', 'about us', 'faces', 'cards'],
        whenToUse: [
          'Introducing the members of a team, club or community with a face for each.',
          'Showing a group where every person carries the same weight.',
          'Putting faces to an About us or community page.',
          'Pairing each portrait with short facts: number, name and role.',
        ],
        whenNotToUse: [
          'Leadership bios or long profiles — use a dedicated team page.',
          'One or two people — use a split text + image section.',
          'When there are no real portraits to show.',
          'Very large directories — use a searchable list instead.',
        ],
        frameDesktop: 'The label and heading sit left with a tertiary action bottom-right; eight portrait cards fill two rows of 25% columns below, each with a member number, name and role.',
        frameMobile: 'The heading and action stack above the portraits, which form a two-column grid.' },
    ] },
    { slug: 'tabs', name: 'Tabs', desc: 'Tabbed content sections.', versions: [] },
    { slug: 'process', name: 'Process', desc: 'Step-by-step process or timeline.', versions: [] },
    { slug: 'pricing', name: 'Pricing', desc: 'Pricing tiers and comparison.', versions: [] },
    { slug: 'video', name: 'Video', desc: 'Embedded or featured video sections.', versions: [] },
    // ---- Saas sections (Figma page 004): product UI blocks for SaaS screens. `category`
    // groups them apart from the Marketing sections in Storybook and the React docs.
    { slug: 'table', name: 'Table', category: 'Saas sections', desc: 'Data tables with a title and filters.', versions: [
      { slug: 'table', name: 'Table', shot: 'table', node: '1650-35461',
        short: 'A data table with a title and filters over rows of cells, in its desktop and mobile breakpoints.',
        description: 'Table presents structured data in rows and columns so people can scan, compare and filter it. A header bar carries the table’s title and its controls — a switch and dropdown filters in a slot that accepts other actions — and the table below is built from Cells columns: a Featured header cell over Plain cells for each column, so every value lines up with its row and its heading.\n\nOn desktop the columns share the available width and the controls sit in the header. On mobile the controls move behind a menu button and the table scrolls horizontally, keeping the first column fixed so each row stays identified while the rest of the data is browsed.',
        keywords: ['table', 'data table', 'rows', 'columns', 'cells', 'filters', 'dataset', 'dashboard', 'saas', 'grid'],
        whenToUse: [
          'Showing many records that share the same attributes, one per row.',
          'Letting people compare values across rows and columns.',
          'Filtering or toggling what a dataset shows from the table header.',
          'Dashboards, reports and back-office screens in SaaS products.',
        ],
        whenNotToUse: [
          'A few values or a single record — use a list or a card.',
          'Items with rich content such as images or long text — use cards.',
          'Showing trends or proportions — use a chart.',
          'Interactive rows that open a detail — use Linkable cells.',
        ],
        behaviors: [
          { name: 'Sticky first column', kind: 'sticky', desc: 'On mobile the table keeps all its columns instead of stacking them. The first column stays pinned on the left, set apart by a divider, while the columns to its right scroll sideways underneath it — so every row stays identified however far you scroll.' },
        ],
        frameDesktop: 'The title sits on the left and the controls on the right — a switch and three dropdown filters. Below, the table fills the width: eight Cells columns, each a Featured header cell over Plain cells, sharing the space equally.',
        frameMobile: 'The switch and filters collapse into a single menu button next to the title. The table keeps its columns and scrolls sideways, with the first column pinned and set apart by a divider so every row stays identified.' },
    ] },
    { slug: 'notifications', name: 'Notifications', category: 'Saas sections', desc: 'Pending items that need a decision.', versions: [
      { slug: 'notifications', name: 'Notifications', shot: 'notifications', node: '1657-2528',
        short: 'A card that gathers the tasks waiting for a decision, with a counter and a link to the full inbox.',
        description: 'Notifications brings together the items that need someone’s attention — approvals, sign-offs or suggestions raised by people or automated agents — so they can be reviewed at a glance without leaving the current screen. A heading with a counter label says how many items are waiting, and each item is a Task fragment: an icon tile, a title, a short description with its source and timing, and a status label on the right.\n\nThe list shows the most relevant items only, and a primary action at the bottom opens the full inbox. The card is built from the system type styles, Label and Button, and all its colors come from tokens, so it works in light and dark themes.',
        keywords: ['notifications', 'inbox', 'tasks', 'approvals', 'pending', 'agents', 'alerts', 'dashboard', 'saas', 'triage'],
        whenToUse: [
          'Surfacing a few items that wait for a decision or a sign-off.',
          'Dashboards where people triage requests raised by others or by automated agents.',
          'Showing how many items are pending and linking to the complete list.',
          'Highlighting urgent items with a status label.',
        ],
        whenNotToUse: [
          'Long lists that need filters or bulk actions — use a Table.',
          'Transient feedback after an action — use a toast or a Banner.',
          'Notices that block the flow until they are answered — use a dialog.',
          'A single message with no actions — use a Banner.',
        ],
        frameDesktop: 'The heading and its counter label sit on top, the pending tasks stack below as Task fragments — icon tile, title, description and a status label — and a primary button closes the card to open the full inbox.',
        frameMobile: 'Same structure at full mobile width: the tasks keep their layout and their descriptions wrap onto more lines, while spacing and type follow the Mobile size tokens.' },
    ] },
    { slug: 'kpis', name: 'KPIs', category: 'Saas sections', desc: 'Key metrics at a glance.', versions: [
      { slug: 'kpis', name: 'KPIs', shot: 'kpis', node: '1663-2263',
        short: 'A row of cards that highlight key metrics, each with its value, status and context.',
        description: 'KPIs highlights the few numbers that matter most on a dashboard so they can be read at a glance. Each metric is a single KPI card fragment: an icon tile coloured by tone — Info, Success, Alert or Error — next to the metric’s label, an optional status label on the right, the value in Display M with its unit in Heading M, and a short caption that explains where the number comes from.\n\nThe same fragment covers every metric: its options show or hide the icon, the status label and the caption, and the tone of the icon tile is chosen from the card itself. On desktop the cards sit in a row and wrap onto a new row when they no longer fit; on mobile they stack in a single column. All colours come from tokens, so the cards follow the light and dark themes.',
        keywords: ['kpis', 'metrics', 'stats', 'dashboard', 'numbers', 'cards', 'status', 'overview', 'saas', 'analytics'],
        whenToUse: [
          'Highlighting the key numbers of a dashboard or overview screen.',
          'Showing a value together with its status against a target.',
          'Giving each metric a short context, such as its period or source.',
          'Comparing a few metrics of the same kind side by side.',
        ],
        whenNotToUse: [
          'Many figures or detailed breakdowns — use a Table.',
          'Trends over time — use a chart.',
          'Marketing numbers on a landing page — use a stats section.',
          'Pending items that need a decision — use Notifications.',
        ],
        states: [
          { name: 'Default', kind: 'state-default', desc: 'At rest the card shows a light standard border. The whole card is interactive: it can be selected to open the detail behind the metric.' },
          { name: 'Hover', kind: 'state-hover', desc: 'When the pointer is over the card the border darkens to the hover tone, signalling that it can be clicked.' },
          { name: 'Active', kind: 'state-active', desc: 'While the card is pressed, or when it is the selected metric, the border takes the active tone.' },
        ],
        behaviors: [
          { name: 'Wrap', kind: 'wrap', desc: 'On desktop the cards keep their width and sit side by side. When the container is narrower than all the cards together, the ones that don’t fit wrap onto a new row, starting again from the left and keeping the same gap between rows as between cards — here three cards fit and the fourth drops below the first.' },
        ],
        frameDesktop: 'The KPI cards sit side by side, one per metric, and wrap onto a new row when they no longer fit — three per row with the fourth below the first. Each card shows an icon tile in the tone of the metric with its label, a status label on the right, the value in large type with its unit, and a short caption that gives context.',
        frameMobile: 'The same cards stack in a single column at full mobile width, keeping their content and order; spacing and type follow the Mobile size tokens.' },
    ] },
  ];
  SECTIONS.sort((a, b) => a.name.localeCompare(b.name));
  const SECTION_BUILD = {
    // kind: 'text-form' (text left, form right — default) or 'form-text' (reversed)
    'contact-split-form': (kind) => {
      // Only what is actually visible in Figma: no icon, no info/tooltip/required,
      // no textarea footer, and a single primary submit button.
      const field = () => `<div class="ek-datefield ek-datefield--text ek-datefield--full">
        <span class="ek-datefield__label">Lorem ipsum:</span>
        <div class="ek-datefield__row"><div class="ek-input ek-input--field"><input type="text" placeholder="Lorem ipsum..."></div></div></div>`;
      const textarea = () => `<div class="ek-datefield ek-datefield--area ek-datefield--full">
        <span class="ek-datefield__label">Lorem ipsum:</span>
        <div class="ek-input ek-textarea"><textarea placeholder="Lorem ipsum..."></textarea></div></div>`;
      const text = `<div class="ek-textgroup ek-contact__text">
          <div class="ek-textgroup__top">
            <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
            <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
          </div>
        </div>`;
      const form = `<form class="ek-contact__form" onsubmit="return false">${field()}${field()}${field()}${textarea()}<div><button class="ek-btn ek-btn--primary">Lorem ipsum</button></div></form>`;
      const cols = kind === 'form-text' ? [form, text] : [text, form];
      return `<div class="ek-container ek-contact">${cols.map((c) => `<div class="ek-container__col" style="--ek-span:6">${c}</div>`).join('')}</div>`;
    },
    // Explanation Banner Card — full-bleed image banner with a contained Text group card
    // (icon and secondary/tertiary buttons hidden in Figma → single primary button).
    // Built on Container (100%) in Figma's Dark mode, so the card is the dark surface.
    'explanation-banner-card': () => `<div class="ek-container ek-explain theme-dark" style="background-image:url('assets/sections/explanation-003-img.webp')"><div class="ek-container__col" style="--ek-span:12"><div class="ek-textgroup ek-textgroup--contained"><div class="ek-textgroup__top">
      <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h3 class="ek-textgroup__title">Nam a bibendum nunc eget tincidunt eros</h3></div>
      <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
    </div><button class="ek-btn ek-btn--primary">Lorem ipsum</button></div></div></div>`,
    // Explanation Split Media — two columns: Text group (eyebrow, large heading, body,
    // primary + secondary buttons) and a supporting image. kind: 'text-image'
    // (text left) or 'image-text' (image left).
    'explanation-split-media': (kind) => {
      const text = `<div class="ek-textgroup ek-explain2__text">
        <div class="ek-textgroup__top">
          <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
          <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
        </div>
        <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
      </div>`;
      const media = `<img src="assets/sections/explanation-002-img.webp" alt="" loading="lazy">`;
      // Container 8% + 42% + 42% + 8%: the outer 8% columns stay empty (inset).
      const [a, b] = kind === 'image-text' ? [media, text] : [text, media];
      const col = (c, cls) => `<div class="ek-container__col ${cls}" style="--ek-span:5">${c}</div>`;
      return `<div class="ek-container ek-explain2"><div class="ek-container__col ek-explain2__spacer" style="--ek-span:1"></div>${col(a, a === media ? 'ek-explain2__media' : 'ek-explain2__textcol')}${col(b, b === media ? 'ek-explain2__media' : 'ek-explain2__textcol')}<div class="ek-container__col ek-explain2__spacer" style="--ek-span:1"></div></div>`;
    },
    // Explanation Twin Cards — two equal cards side by side: a text card + an image card.
    // kind: 'text-image' (text left) or 'image-text' (image left).
    'explanation-twin-cards': (kind) => {
      const text = `<div class="ek-container__col ek-explain3__text" style="--ek-span:6"><div class="ek-textgroup">
        <div class="ek-textgroup__top">
          <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
          <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
        </div>
        <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
      </div></div>`;
      const media = `<div class="ek-container__col ek-explain3__media" style="--ek-span:6;background-image:url('assets/sections/explanation-003-img.webp')"></div>`;
      // Container 50% + 50% with no margin and no gutter: both halves run edge to edge.
      const cols = kind === 'image-text' ? [media, text] : [text, media];
      return `<div class="ek-container ek-explain3">${cols.join('')}</div>`;
    },
    // Explanation Triple Panel — header (eyebrow + heading only) over a row of three equal
    // panels: two images and a text card (eyebrow, heading, body, primary button).
    'explanation-triple-panel': () => {
      const head = `<div class="ek-textgroup ek-explain4__head"><div class="ek-textgroup__top"><div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div></div></div>`;
      const img = (n) => `<div class="ek-explain4__img" style="background-image:url('assets/sections/explanation-004-img${n}.webp')"></div>`;
      const card = `<div class="ek-explain4__card"><div class="ek-textgroup">
        <div class="ek-textgroup__top">
          <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h3 class="ek-textgroup__title">Lorem ipsum dolor sit amet</h3></div>
          <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
        </div>
        <button class="ek-btn ek-btn--primary">Lorem ipsum</button>
      </div></div>`;
      // Two Containers: 100% (header) over 33% + 33% + 33% (panels).
      const col = (c, span) => `<div class="ek-container__col" style="--ek-span:${span}">${c}</div>`;
      return `<div class="ek-explain4"><div class="ek-container ek-explain4__top">${col(head, 12)}</div><div class="ek-container ek-explain4__block">${col(img(1), 4)}${col(img(2), 4)}${col(card, 4)}</div></div>`;
    },
    // Explanation Image Marquee — contained text intro (left half) over a full-bleed row of
    // images (four on desktop, two on mobile). No button.
    'explanation-image-marquee': () => {
      const text = `<div class="ek-explain5__text ek-textgroup"><div class="ek-textgroup__top">
        <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
        <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
      </div></div>`;
      const img = `<div class="ek-explain5__img" style="background-image:url('assets/sections/explanation-002-img.webp')"></div>`;
      const group = `<div class="ek-explain5__mgroup" style="--ek-marquee-items:6">${img.repeat(6)}</div>`;
      // Header on Container 100%; the image row stays an infinite marquee (full bleed).
      return `<div class="ek-explain5"><div class="ek-container ek-explain5__contained"><div class="ek-container__col" style="--ek-span:12">${text}</div></div><div class="ek-explain5__fluid"><div class="ek-explain5__marquee">${group}${group}</div></div></div>`;
    },
    // Hero Image Slider — Container 50% + 50% over a full-bleed image (dark scrim), in Dark
    // mode: text group with primary button (bottom-left) + prev/next arrows (bottom-right).
    // The frame is only a mobile inset (16) — desktop runs edge to edge.
    'hero-image-slider': () => `<div class="ek-hero-frame"><div class="ek-container ek-hero theme-dark" style="background-image:linear-gradient(to bottom,rgba(0,0,0,.2),rgba(0,0,0,.64)),url('assets/sections/explanation-003-img.webp')">
      <div class="ek-container__col ek-hero__textcol" style="--ek-span:6">
        <div class="ek-textgroup ek-hero__text"><div class="ek-textgroup__top">
          <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
          <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
        </div>
        <button class="ek-btn ek-btn--primary">Lorem ipsum</button></div>
      </div>
      <div class="ek-container__col ek-hero__navcol" style="--ek-span:6">
        <div class="ek-hero__nav">
          <button class="ek-btn ek-btn--secondary ek-btn--icon" aria-label="Previous">${EK_ICONS.chevronLeft}</button>
          <button class="ek-btn ek-btn--secondary ek-btn--icon" aria-label="Next">${EK_ICONS.chevronRight}</button>
        </div>
      </div>
    </div></div>`,
    // Hero Split Columns — Container 50% + 50% over a full-bleed image (dark scrim), in Dark
    // mode: heading (bottom-left, 3XL above the bottom) + paragraph & primary button (bottom-right, 480 wide).
    'hero-split-columns': () => `<div class="ek-container ek-hero2 theme-dark" style="background-image:linear-gradient(to bottom,rgba(0,0,0,.2),rgba(0,0,0,.64)),url('assets/sections/explanation-003-img.webp')">
      <div class="ek-container__col ek-hero2__headcol" style="--ek-span:6">
        <div class="ek-hero2__heading-group">
          <div class="ek-textgroup__eyebrow">Lorem ipsum</div>
          <h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2>
        </div>
      </div>
      <div class="ek-container__col ek-hero2__asidecol" style="--ek-span:6">
        <div class="ek-hero2__aside">
          <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
          <button class="ek-btn ek-btn--primary">Lorem ipsum</button>
        </div>
      </div>
    </div>`,
    // Hero Marquee Gallery — two Containers 100%: centered intro (eyebrow, heading L, body,
    // primary + secondary) over a full-bleed, continuously scrolling row of images in
    // alternating sizes (square / tall), Corner radius M.
    'hero-marquee-gallery': () => {
      const order = [2, 1, 3, 4, 5, 1, 3, 4];
      const imgs = order.map((n, i) => `<img class="ek-hero3__img${i % 2 ? ' ek-hero3__img--tall' : ''}" src="assets/sections/hero-marquee-gallery-${n}.webp" alt="" loading="lazy">`).join('');
      const group = `<div class="ek-hero3__group" style="--ek-marquee-items:${order.length}">${imgs}</div>`;
      return `<div class="ek-hero3">
        <div class="ek-container ek-sec-intro"><div class="ek-container__col" style="--ek-span:12">
          <div class="ek-hero3__intro">
            <div class="ek-hero3__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
            <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
            <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
          </div>
        </div></div>
        <div class="ek-container ek-sec-strip"><div class="ek-container__col" style="--ek-span:12">
          <div class="ek-hero3__strip"><div class="ek-hero3__lane">${group}${group}</div></div>
        </div></div>
      </div>`;
    },
    // Marquee Logo Strip — two Containers 100%: centered intro (eyebrow, heading L, body,
    // primary + secondary) over a continuously scrolling row of brand logos (exported from
    // Figma as SVG, muted to one tint) split by dividers.
    'marquee-logo-strip': () => {
      const logos = [1, 2, 3, 4, 5, 6, 7, 8];
      const items = logos.map(n => `<img class="ek-marquee1__logo" src="assets/sections/marquee-logo-${n}.svg" alt="" loading="lazy"><span class="ek-marquee1__divider" aria-hidden="true"></span>`).join('');
      const grp = `<div class="ek-marquee1__group" style="--ek-marquee-items:${logos.length}">${items}</div>`;
      const text = `<div class="ek-marquee1__text">
        <div class="ek-marquee1__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
        <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
        <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
      </div>`;
      return `<div class="ek-marquee1"><div class="ek-container ek-sec-intro"><div class="ek-container__col" style="--ek-span:12">${text}</div></div><div class="ek-container ek-sec-strip"><div class="ek-container__col" style="--ek-span:12"><div class="ek-marquee1__strip"><div class="ek-marquee1__lane">${grp}${grp}</div></div></div></div></div>`;
    },
    // Marquee Logo Tiles — two Containers 100%: centered intro (eyebrow, heading L, body,
    // primary + secondary) over two rows of square logo tiles that scroll in opposite
    // directions and fade out at both edges. Logos are the Figma shapes, in their own colours.
    'marquee-logo-tiles': () => {
      const rows = [
        Array.from({ length: 19 }, (_, i) => i + 1),
        [1, ...Array.from({ length: 18 }, (_, i) => i + 20), 19],
      ];
      const tile = n => `<span class="ek-marquee2__tile"><img src="assets/sections/logo-tile-${String(n).padStart(2, '0')}.svg" alt="" loading="lazy"></span>`;
      const row = (logos, i) => {
        const grp = `<div class="ek-marquee2__group" style="--ek-marquee-items:${logos.length}">${logos.map(tile).join('')}</div>`;
        return `<div class="ek-marquee2__lane${i ? ' ek-marquee2__lane--reverse' : ''}">${grp}${grp}</div>`;
      };
      return `<div class="ek-marquee2">
        <div class="ek-container ek-sec-intro"><div class="ek-container__col" style="--ek-span:12">
          <div class="ek-marquee2__intro">
            <div class="ek-marquee2__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
            <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
            <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
          </div>
        </div></div>
        <div class="ek-container ek-sec-strip"><div class="ek-container__col" style="--ek-span:12">
          <div class="ek-marquee2__strip">${rows.map(row).join('')}</div>
        </div></div>
      </div>`;
    },
    // Values & Features Icon Grid — a centered intro (eyebrow, heading, body, primary +
    // secondary actions) above a row of four feature cards, each an icon box, a
    // short title and a line of copy.
    'values-icon-grid': () => {
      const cards = [
        'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.',
        'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.',
        'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.',
        'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.',
      ].map(body => `<div class="ek-container__col" style="--ek-span:3"><div class="ek-values1__card">
        <span class="ek-textgroup__icon">${EK_ICONS.info}</span>
        <h3 class="ek-textgroup__title">Lorem ipsum</h3>
        <p class="ek-textgroup__body">${body}</p>
      </div></div>`).join('');
      const intro = `<div class="ek-values1__intro">
        <div class="ek-values1__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
        <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
        <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
      </div>`;
      // Two Containers: 100% (intro) over 25% × 4 (cards, M gutter).
      return `<div class="ek-values1"><div class="ek-container ek-values1__top"><div class="ek-container__col" style="--ek-span:12">${intro}</div></div><div class="ek-container ek-values1__boxes">${cards}</div></div>`;
    },
    // Values & Features Highlight List — heading + a vertical feature list on the left (first
    // item highlighted, with body copy; the rest are title-only rows) next to a
    // tall image on the right. Icons sit in small accent-filled boxes.
    'values-highlight-list': () => {
      const feats = [
        { t: 'Lorem ipsum dolor sit amet', b: 'Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat.' },
        { t: 'Lorem ipsum dolor sit amet', b: 'Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat.' },
        { t: 'Lorem ipsum dolor sit amet', b: 'Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat.' },
        { t: 'Lorem ipsum dolor sit amet', b: 'Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat.' },
      ].map((it, i) => `<button type="button" class="ek-values2__item${i === 0 ? ' is-active' : ''}" aria-expanded="${i === 0}" data-index="${i}">
        <span class="ek-values2__icon">${EK_ICONS.info}</span>
        <span class="ek-values2__text"><span class="ek-textgroup__title">${it.t}</span><span class="ek-values2__body"><span class="ek-values2__body-inner"><span class="ek-textgroup__body ek-body-m">${it.b}</span></span></span></span>
      </button>`).join('');
      // One image per feature, stacked; the active item's image fades in (js/eraiki.js).
      const media = ['values-002-img', 'explanation-004-img1', 'explanation-004-img2', 'explanation-003-img']
        .map((f, i) => `<img class="ek-values2__img${i === 0 ? ' is-active' : ''}" src="assets/sections/${f}.webp" alt="" loading="lazy">`).join('');
      // Container 100% with no margin; its column carries the 4XL inset around the row.
      return `<div class="ek-container ek-values2"><div class="ek-container__col ek-values2__inner" style="--ek-span:12"><div class="ek-values2__row">
        <div class="ek-values2__col">
          <div class="ek-values2__intro"><div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div></div>
          <div class="ek-values2__list">${feats}</div>
        </div>
        <div class="ek-values2__mediacol"><div class="ek-values2__media">${media}</div></div>
      </div></div></div>`;
    },
    // Values & Features Numbered List — a heading, then an image beside a numbered list.
    // Each row pairs a number + title with a description, divided by thin rules.
    'values-numbered-list': () => {
      const items = ['01', '02', '03', '04'].map(n => `<div class="ek-values3__item">
        <div class="ek-values3__label"><span class="ek-values3__num ek-label-m">${n}.</span><span class="ek-values3__title ek-body-l ek-strong">Lorem ipsum dolor</span></div>
        <p class="ek-values3__desc ek-body-m">Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat.</p>
      </div>`).join('');
      // Two Containers: 100% (heading) over 50% + 50% (image + list).
      return `<div class="ek-values3">
        <div class="ek-container ek-values3__top"><div class="ek-container__col" style="--ek-span:12"><div class="ek-values3__head"><div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div></div></div></div>
        <div class="ek-container ek-values3__row">
          <div class="ek-container__col ek-values3__mediacol" style="--ek-span:6"><div class="ek-values3__media"><img src="assets/sections/values-002-img.webp" alt="" loading="lazy"></div></div>
          <div class="ek-container__col ek-values3__listcol" style="--ek-span:6"><div class="ek-values3__list">${items}</div></div>
        </div>
      </div>`;
    },
    // Values & Features Staggered Cards — a centered intro over three staggered cards, each a
    // heading, an abstract illustration (exported from Figma) and a line of copy.
    'values-staggered-cards': () => {
      const body = 'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.';
      const cards = [1, 2, 3].map(n => `<div class="ek-container__col ek-values4__col" style="--ek-span:4"><div class="ek-values4__card">
        <h3 class="ek-textgroup__title">Lorem ipsum</h3>
        <div class="ek-values4__illus"><img src="assets/sections/values-004-illus-${n}.svg" alt=""></div>
        <p class="ek-textgroup__body">${body}</p>
      </div></div>`).join('');
      const intro = `<div class="ek-values4__intro">
        <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
        <p class="ek-textgroup__body">${body}</p>
        <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
      </div>`;
      // Two Containers: 100% (intro) over 33% × 3 (cards, stepped down XXL / 5XL).
      return `<div class="ek-values4"><div class="ek-container ek-values4__top"><div class="ek-container__col" style="--ek-span:12">${intro}</div></div><div class="ek-container ek-values4__grid">${cards}</div></div>`;
    },
    // Testimonials Image Cards — Container 50% + 50% header (Text group: label + heading L;
    // prev / next arrows bottom-right) over a Container of four 25% portrait cards (quote +
    // author over a dark photo with a bottom scrim). Mobile: the cards become a carousel.
    'testimonials-image-cards': () => {
      const items = [
        { img: 1, quote: '“Their fast shipping & branding made us stand out. We save hours every day”', name: 'Julek Cesar', role: 'CEO of Lorem ipsum' },
        { img: 2, quote: '“We’ve really made a mark in the market. It’s incredible how much time we save each day!”', name: 'Klaudia Czarna', role: 'CEO of Dolor sit' },
        { img: 3, quote: '“With their speedy shipping and eye-catching branding, we’ve truly distinguished ourselves”', name: 'Jessica Mercedes', role: 'Marketer at Amet' },
        { img: 1, quote: '“Their fast shipping & branding made us stand out. We save hours every day”', name: 'Julek Cesar', role: 'CEO of Lorem ipsum' },
      ];
      const card = (it) => `<div class="ek-container__col" style="--ek-span:3"><figure class="ek-testi1__card theme-dark" style="background-image:linear-gradient(to bottom,rgba(0,0,0,.16) 0%,rgba(0,0,0,.1) 45%,rgba(0,0,0,.86) 100%),url('assets/sections/testimonials-001-img${it.img}.webp')">
        <blockquote class="ek-testi1__quote ek-heading-s">${it.quote}</blockquote>
        <figcaption class="ek-testi1__author"><span class="ek-testi1__name ek-body-m ek-strong">${it.name}</span><span class="ek-testi1__role ek-detail-m">${it.role}</span></figcaption>
      </figure></div>`;
      return `<div class="ek-testi1">
        <div class="ek-container ek-testi1__top">
          <div class="ek-container__col ek-testi1__headcol" style="--ek-span:6"><div class="ek-textgroup ek-testi1__head"><div class="ek-textgroup__top"><div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Testimonials</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div></div></div></div>
          <div class="ek-container__col ek-testi1__navcol" style="--ek-span:6"><div class="ek-testi1__nav">
            <button class="ek-btn ek-btn--secondary ek-btn--icon is-disabled" aria-label="Previous" disabled>${EK_ICONS.chevronLeft}</button>
            <button class="ek-btn ek-btn--secondary ek-btn--icon" aria-label="Next">${EK_ICONS.chevronRight}</button>
          </div></div>
        </div>
        <div class="ek-container ek-testi1__track">${items.map(card).join('')}</div>
      </div>`;
    },
    // Team Portrait Grid — Container 50% + 50% (Text group left, tertiary action bottom-right)
    // over two Containers 25% × 4 of Member cards (3:4 portrait; number (Label M, accent)
    // over the name (Heading S); role in Body M).
    'team-portrait-grid': () => {
      const members = [
        ['Ana R.', 'No. 0412', 'Carpenter · Davenport'], ['Tomás V.', 'No. 0087', 'Line cook · Waddell'],
        ['Ruth O.', 'No. 0028', 'Nurse · Davenport'], ['Jesse L.', 'No. 0339', 'Electrician · Santa Cruz'],
        ['Mara K.', 'No. 0263', 'Teacher · Scott Creek'], ['Kai M.', 'No. 0204', 'Shaper · Año Nuevo'],
        ['Ines D.', 'No. 0151', 'Dentist · Pigeon Point'], ['Nico B.', 'No. 0377', 'Fisherman · Half Moon Bay'],
      ].map(([name, no, role], i) => ({ name, no, role, img: `assets/sections/team-portrait-${String(i + 1).padStart(2, '0')}.webp` }));
      const card = (m) => `<div class="ek-container__col" style="--ek-span:3"><figure class="ek-team1__card">
        <div class="ek-team1__img"><img src="${m.img}" alt="" loading="lazy"></div>
        <figcaption class="ek-team1__info"><span class="ek-team1__namerow"><span class="ek-team1__no ek-label-m">${m.no}</span><span class="ek-team1__name ek-heading-s">${m.name}</span></span><span class="ek-team1__role ek-body-m">${m.role}</span></figcaption>
      </figure></div>`;
      return `<div class="ek-team1">
        <div class="ek-container ek-team1__top">
          <div class="ek-container__col ek-team1__headcol" style="--ek-span:6"><div class="ek-textgroup ek-team1__head"><div class="ek-textgroup__top"><div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div></div></div></div>
          <div class="ek-container__col ek-team1__actioncol" style="--ek-span:6"><button class="ek-btn ek-btn--tertiary">Lorem ipsum</button></div>
        </div>
        <div class="ek-container ek-team1__row">${members.slice(0, 4).map(card).join('')}</div>
        <div class="ek-container ek-team1__row ek-team1__row--last">${members.slice(4).map(card).join('')}</div>
      </div>`;
    },
    // FAQs Split List — Container 34% + 66%: a Text group (label, Heading L, body, primary) on the left and a
    // list of FAQ items on the right. Each item: a question (Heading S) with a tertiary icon
    // button (plus / minus); one item open at a time (js/eraiki.js).
    'faqs-split-list': () => {
      const q = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?';
      const a = 'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.';
      const item = (open) => `<div class="ek-faq1__item${open ? ' is-open' : ''}">
        <div class="ek-faq1__q"><h3 class="ek-faq1__question ek-heading-s">${q}</h3><button type="button" class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-faq1__toggle" aria-expanded="${open}" aria-label="Show answer"><span class="ek-faq1__plus">${EK_ICONS.plus}</span><span class="ek-faq1__minus">${EK_ICONS.minus}</span></button></div>
        <div class="ek-faq1__a"><div class="ek-faq1__a-inner"><p class="ek-textgroup__body">${a}</p></div></div>
      </div>`;
      return `<div class="ek-container ek-faq1">
        <div class="ek-container__col" style="--ek-span:4"><div class="ek-textgroup ek-faq1__head"><div class="ek-textgroup__top"><div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div><p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p></div><button class="ek-btn ek-btn--primary">Lorem ipsum</button></div></div>
        <div class="ek-container__col" style="--ek-span:8"><div class="ek-faq1__list">${[true, false, false, false, false, false].map(item).join('')}</div></div>
      </div>`;
    },
    // Testimonials Quote Marquee — two Containers 100%: centered intro (eyebrow, Heading L, body,
    // primary + secondary) over a full-bleed, auto-scrolling row of Quote cards (quote icon,
    // quote in Heading S, author with Avatar + name + role).
    'testimonials-quote-marquee': () => {
      const quote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem leo, mollis non diam eu, venenatis feugiat est.';
      const card = (n) => `<figure class="ek-testi2__card">
        <div class="ek-testi2__quote"><span class="ek-testi2__icon">${EK_ICONS.quote}</span><blockquote class="ek-heading-s">${quote}</blockquote></div>
        <figcaption class="ek-testi2__author"><span class="ek-avatar ek-avatar--md"><img src="assets/sections/testimonials-001-img${n}.webp" alt="" loading="lazy"></span><span class="ek-testi2__who"><span class="ek-testi2__name ek-body-l ek-strong">Lorem ipsum</span><span class="ek-testi2__role ek-detail-m">Lorem ipsum dolor</span></span></figcaption>
      </figure>`;
      const items = [1, 2, 3, 1, 2];
      const group = `<div class="ek-testi2__group" style="--ek-marquee-items:${items.length}">${items.map(card).join('')}</div>`;
      return `<div class="ek-testi2">
        <div class="ek-container ek-sec-intro"><div class="ek-container__col" style="--ek-span:12">
          <div class="ek-testi2__intro">
            <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
            <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
            <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
          </div>
        </div></div>
        <div class="ek-container ek-sec-strip"><div class="ek-container__col" style="--ek-span:12">
          <div class="ek-testi2__strip"><div class="ek-testi2__lane">${group}${group}</div></div>
        </div></div>
      </div>`;
    },
    // Explanation Dark Card — dark (complementary) card over a full-bleed background image.
    // Left column: heading (top) + body & primary button (bottom); right: an image.
    // Built on Container (100%) in Figma's Dark mode: the column is the dark card, holding a
    // Text group (eyebrow, heading, body, primary button) and a square image.
    'explanation-dark-card': () => `<div class="ek-container ek-explain6 theme-dark" style="background-image:url('assets/sections/explanation-006-bg.webp')">
      <div class="ek-container__col ek-explain6__card" style="--ek-span:12">
        <div class="ek-explain6__col">
          <div class="ek-textgroup ek-explain6__text">
            <div class="ek-textgroup__top">
              <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
              <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
            </div>
            <button class="ek-btn ek-btn--primary">Lorem ipsum</button>
          </div>
        </div>
        <div class="ek-explain6__mediacol"><div class="ek-explain6__media" style="background-image:url('assets/sections/explanation-002-img.webp')"></div></div>
      </div>
    </div>`,
    // ---- Saas sections ----
    // Table — header (Heading S title; switch + three dropdown filters, a menu button on
    // mobile) over eight Cells columns (Featured header over 13 Plain cells). Mobile: the
    // table scrolls sideways with the first column pinned.
    // kind 'sticky' forces the mobile layout at 375px (docs Behaviors block).
    'table': (kind) => {
      const dd = `<div class="ek-ddinput ek-table1__filter"><div class="ek-ddinput__row"><div class="ek-dropdown"><div class="ek-input ek-input--select"><span class="ek-ddinput__value is-placeholder">Lorem ipsum...</span><span class="ek-ddinput__right"><span class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-ddinput__toggle">${EK_ICONS.chevronDown}</span></span></div><div class="ek-dropdown__menu">${'<div class="ek-opt">Lorem ipsum</div>'.repeat(5)}</div></div></div></div>`;
      const col = () => `<div class="ek-cells-column ek-table1__col"><div class="ek-cell-featured"><span class="ek-cell-featured__value">Lorem ipsum</span></div>${'<div class="ek-cell-plain"><span class="ek-cell-plain__content">Lorem ipsum</span></div>'.repeat(13)}</div>`;
      return `<div class="ek-saas"><div class="ek-table1${kind === 'sticky' ? ' ek-table1--mobile' : ''}">
        <div class="ek-table1__head">
          <h3 class="ek-table1__title ek-heading-s">Lorem ipsum</h3>
          <div class="ek-table1__options"><span class="ek-switch"><span class="ek-switch__track"></span><span>Lorem ipsum</span></span>${dd}${dd}${dd}</div>
          <button class="ek-btn ek-btn--secondary ek-btn--icon ek-table1__menu" aria-label="Table options">${EK_ICONS.menu}</button>
        </div>
        <div class="ek-table1__scroll"><div class="ek-table1__grid">${Array.from({ length: 8 }, col).join('')}</div></div>
      </div></div>`;
    },
    // Notifications — card (Surface Base, border, radius M, L inset): Heading S title + Info
    // label counter, Task fragments (icon tile, Body L title, Body M description, Alert label)
    // and a primary button with a right chevron.
    'notifications': () => {
      const tasks = [
        ['home', 'Place 6 boarders on 5W and 6W', 'Bed Placement Agent · on hold until the feed catches up'],
        ['logout', 'Fast-track 5 discharges on 6W', 'Discharge Agent · 14 min ago'],
        ['truck', 'Accept ICU transfer from Valley', 'Transfer Agent · needs sign-off'],
      ];
      const task = ([ic, t, d]) => `<li class="ek-notif1__task"><div class="ek-notif1__main"><span class="ek-notif1__tile">${EK_ICONS[ic]}</span><div class="ek-notif1__text"><span class="ek-notif1__title ek-body-l">${t}</span><span class="ek-notif1__desc ek-body-m">${d}</span></div></div><span class="ek-label ek-label--alert"><span class="ek-label__dot"></span>Urgent</span></li>`;
      return `<div class="ek-saas"><section class="ek-notif1">
        <div class="ek-notif1__head"><h3 class="ek-notif1__heading ek-heading-s">Needs your call</h3><span class="ek-label ek-label--info"><span class="ek-label__dot"></span>7 waiting</span></div>
        <ul class="ek-notif1__tasks">${tasks.map(task).join('')}</ul>
        <div class="ek-notif1__foot"><button class="ek-btn ek-btn--primary ek-btn--icon-right">Open agent inbox ${EK_ICONS.chevronRight}</button></div>
      </section></div>`;
    },
    // KPIs — KPI cards (one fragment: tone of the icon tile, status / icon / caption on or off;
    // states Default / Hover / Active on the border) in a wrapping row; one column on mobile.
    // kind 'state-*' renders a single card in that state (docs States block).
    'kpis': (kind) => {
      const tones = [['info', 'infoCircle'], ['success', 'checkCircle'], ['alert', 'bell'], ['error', 'alertCircle']];
      const card = ([tone, ic], state) => `<a href="#" class="ek-kpi1__card${state ? ' is-' + state : ''}" onclick="return false">
        <span class="ek-kpi1__head"><span class="ek-kpi1__name"><span class="ek-kpi1__tile ek-kpi1__tile--${tone}">${EK_ICONS[ic]}</span><span class="ek-kpi1__label ek-body-l ek-strong">Messages today</span></span><span class="ek-label ek-label--success"><span class="ek-label__dot"></span>Under 10 sec</span></span>
        <span class="ek-kpi1__body"><span class="ek-kpi1__value"><span class="ek-display-m">1.280</span><span class="ek-heading-m">%</span></span><span class="ek-kpi1__caption ek-body-m">Since midnight</span></span>
      </a>`;
      if (kind && kind.startsWith('state-')) {
        const st = kind.slice(6);
        return `<div class="ek-saas"><div class="ek-kpi1">${card(tones[0], st === 'default' ? '' : st)}</div></div>`;
      }
      return `<div class="ek-saas"><div class="ek-kpi1">${tones.map((t) => card(t)).join('')}</div></div>`;
    },
  };
  // Every section root carries .ek-section — the hook for the entrance reveal in js/eraiki.js.
  Object.keys(SECTION_BUILD).forEach(k => {
    const build = SECTION_BUILD[k];
    SECTION_BUILD[k] = (...a) => build(...a).replace(/^(\s*<[a-z]+ class=")/, '$1ek-section ');
  });
  window.ERAIKI_SECTIONS = SECTIONS;
  window.ERAIKI_SECTIONS_BUILD = SECTION_BUILD;
})();
