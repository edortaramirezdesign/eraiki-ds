/* ==========================================================================
   Eraiki DS — Sections: config/docs + live markup builders. Single source for the
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
        short: 'A centered intro over a full-bleed image marquee switched by progress tabs.',
        description: "Hero Marquee Gallery opens a page with a centered intro — an eyebrow, a large title, a short paragraph and two actions — above a full-bleed row of images in alternating sizes that runs past both edges. Below it, a set of tabs with a progress bar switches the gallery between topics (for example Buy, Sell and Rent), moving to the next one as each bar fills.\n\nThe intro is built from the Text group and Button components on the light surface tokens, and the active tab's progress bar uses the accent colour.",
        keywords: ['hero', 'image gallery', 'marquee', 'tabs', 'progress tabs', 'centered intro', 'full-bleed', 'above the fold', 'cta', 'categories'],
        whenToUse: [
          'Opening a page that serves several paths or audiences with one shared message.',
          'Showing the breadth of a catalogue or service through imagery rather than copy.',
          'Letting visitors preview each path (e.g. buy, sell, rent) without leaving the hero.',
          'A lighter, image-led alternative to a full-screen photo hero.',
        ],
        whenNotToUse: [
          'When there is only one path — use Hero Image Slider or Hero Split Columns.',
          "When there aren't enough quality images to fill every tab.",
          'When the tab content must be read or compared side by side — rotating tabs hide it.',
          'When motion has to be kept to a minimum.',
        ],
        frameDesktop: 'The intro and both CTAs sit centered above an edge-to-edge row of mixed-size images; the tabs sit centered below.',
        frameMobile: 'Same order, narrower: the intro stays centered, the image row shows about two images at a time and the tabs span the width.' },
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
        description: 'Explanation Image Marquee opens with a contained text block — an eyebrow, a large heading and a short paragraph set in the left half of the column — and follows it with a full-bleed image marquee that scrolls horizontally, edge to edge: images drift off the left and reappear from the right in a slow, seamless loop. The narrow measure keeps the copy readable while the moving strip gives the section an ambient, editorial finish.\n\nThe text uses the Text group component and the strip is built from the Image component. The marquee loops continuously with a pure-CSS animation (two duplicated groups) and stops for users who prefer reduced motion. Use it to introduce a topic and let a set of related visuals drift past to carry the mood — not to present images that need to be read or clicked.',
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
        frameDesktop: 'A contained text block on the left, then a full-width image marquee scrolling left.',
        frameMobile: 'The text spans the column with the image marquee scrolling below it.' },
      { slug: 'explanation-dark-card', name: 'Explanation Dark Card', shot: 'explanation-dark-card', node: '1316-20697',
        short: 'A dark card with copy and an image, over a full-bleed background.',
        description: "Explanation Dark Card sets a dark, self-contained card over a full-bleed background image. Inside the card the copy sits on the left — an eyebrow and a large heading at the top, a short paragraph and a primary action at the bottom — with a supporting image on the right. The dark surface and light text let it sit confidently on top of busy photography.\n\nThe card uses the complementary surface with the system's dark text tokens, and is built from the Text group, Button and Image components. Use it for a bold, focused statement over imagery — a single message and one action, not a dense block of content.",
        keywords: ['explanation', 'dark card', 'card on image', 'overlay', 'feature', 'hero', 'editorial', 'complementary', 'image background', 'statement'],
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
    { slug: 'testimonials', name: 'Testimonials', desc: 'Customer quotes and social proof.', versions: [] },
    { slug: 'brands-logos', name: 'Brands & Logos', desc: 'Logo walls establishing credibility.', versions: [] },
    { slug: 'footer', name: 'Footer', desc: 'Site-wide footer with navigation and legal.', versions: [] },
    { slug: 'cta', name: 'CTA', desc: 'Focused call-to-action band.', versions: [] },
    { slug: 'grids', name: 'Grids', desc: 'Reusable content grid layouts.', versions: [] },
    { slug: 'faqs', name: 'FAQs', desc: 'Frequently asked questions, usually as accordions.', versions: [] },
    { slug: 'team', name: 'Team', desc: 'Team member profiles.', versions: [] },
    { slug: 'tabs', name: 'Tabs', desc: 'Tabbed content sections.', versions: [] },
    { slug: 'process', name: 'Process', desc: 'Step-by-step process or timeline.', versions: [] },
    { slug: 'pricing', name: 'Pricing', desc: 'Pricing tiers and comparison.', versions: [] },
    { slug: 'video', name: 'Video', desc: 'Embedded or featured video sections.', versions: [] },
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
            <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-m">Nam a bibendum nunc eget tincidunt eros</h2></div>
            <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
          </div>
        </div>`;
      const form = `<form class="ek-contact__form" onsubmit="return false">${field()}${field()}${field()}${textarea()}<div><button class="ek-btn ek-btn--primary">Lorem ipsum</button></div></form>`;
      return `<div class="ek-contact">${kind === 'form-text' ? form + text : text + form}</div>`;
    },
    // Explanation Banner Card — full-bleed image banner with a contained Text group card
    // (icon and secondary/tertiary buttons hidden in Figma → single primary button).
    'explanation-banner-card': () => `<div class="ek-explain" style="background-image:url('assets/sections/explanation-001-bg.jpg')">${EK_BUILD.textGroup({ icon: false, contained: true })}</div>`,
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
      const media = `<div class="ek-explain2__media"><img src="assets/sections/explanation-002-img.jpg" alt="" loading="lazy"></div>`;
      return `<div class="ek-explain2">${kind === 'image-text' ? media + text : text + media}</div>`;
    },
    // Explanation Twin Cards — two equal cards side by side: a text card + an image card.
    // kind: 'text-image' (text left) or 'image-text' (image left).
    'explanation-twin-cards': (kind) => {
      const text = `<div class="ek-explain3__text"><div class="ek-textgroup">
        <div class="ek-textgroup__top">
          <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Lorem ipsum dolor sit amet, consecte adipiscing elit</h2></div>
          <p class="ek-textgroup__body">Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat. Pellentesque fringilla tellus dolor, a fermentum massa finibus id.</p>
        </div>
        <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
      </div></div>`;
      const media = `<div class="ek-explain3__media" style="background-image:url('assets/sections/explanation-003-img.jpg')"></div>`;
      return `<div class="ek-explain3">${kind === 'image-text' ? media + text : text + media}</div>`;
    },
    // Explanation Triple Panel — header (eyebrow + heading only) over a row of three equal
    // panels: two images and a text card (eyebrow, heading, body, primary button).
    'explanation-triple-panel': () => {
      const head = `<div class="ek-textgroup ek-explain4__head"><div class="ek-textgroup__top"><div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum</h2></div></div></div>`;
      const img = (n) => `<div class="ek-explain4__img" style="background-image:url('assets/sections/explanation-004-img${n}.jpg')"></div>`;
      const card = `<div class="ek-explain4__card"><div class="ek-textgroup">
        <div class="ek-textgroup__top">
          <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h3 class="ek-textgroup__title">Lorem ipsum</h3></div>
          <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
        </div>
        <button class="ek-btn ek-btn--primary">Lorem ipsum</button>
      </div></div>`;
      return `<div class="ek-explain4">${head}<div class="ek-explain4__block">${img(1)}${img(2)}${card}</div></div>`;
    },
    // Explanation Image Marquee — contained text intro (left half) over a full-bleed row of
    // images (four on desktop, two on mobile). No button.
    'explanation-image-marquee': () => {
      const text = `<div class="ek-explain5__text ek-textgroup"><div class="ek-textgroup__top">
        <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-xl">Lorem ipsum dolor sit amet, consecte adipiscing elit</h2></div>
        <p class="ek-textgroup__body">Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat. Pellentesque fringilla tellus dolor, a fermentum massa finibus id.</p>
      </div></div>`;
      const img = `<div class="ek-explain5__img" style="background-image:url('assets/sections/explanation-002-img.jpg')"></div>`;
      const group = `<div class="ek-explain5__mgroup">${img.repeat(6)}</div>`;
      return `<div class="ek-explain5"><div class="ek-explain5__contained">${text}</div><div class="ek-explain5__fluid"><div class="ek-explain5__marquee">${group}${group}</div></div></div>`;
    },
    // Hero Image Slider — full-bleed image hero (dark scrim), content anchored bottom:
    // text (lower-left) + actions (primary button and prev/next arrows). Light text.
    'hero-image-slider': () => `<div class="ek-hero theme-dark" style="background-image:linear-gradient(to bottom,rgba(0,0,0,.2),rgba(0,0,0,.64)),url('assets/sections/explanation-003-img.jpg')">
      <div class="ek-hero__row--text">
        <div class="ek-textgroup ek-hero__text"><div class="ek-textgroup__top">
          <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-xl">Lorem ipsum dolor sit amet, consecte adipiscing elit</h2></div>
          <p class="ek-textgroup__body">Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat. Pellentesque fringilla tellus dolor, a fermentum massa finibus id.</p>
        </div></div>
      </div>
      <div class="ek-hero__actions">
        <button class="ek-btn ek-btn--primary">Mauris id lectus</button>
        <div class="ek-hero__nav">
          <button class="ek-btn ek-btn--secondary ek-btn--icon" aria-label="Previous">${EK_ICONS.chevronLeft}</button>
          <button class="ek-btn ek-btn--secondary ek-btn--icon" aria-label="Next">${EK_ICONS.chevronRight}</button>
        </div>
      </div>
    </div>`,
    // Hero Split Columns — full-screen image (dark scrim); two text columns anchored bottom:
    // heading (left) + paragraph & primary button (right). Light text.
    'hero-split-columns': () => `<div class="ek-hero2 theme-dark" style="background-image:linear-gradient(to bottom,rgba(0,0,0,.2),rgba(0,0,0,.64)),url('assets/sections/explanation-003-img.jpg')">
      <div class="ek-hero2__row">
        <div class="ek-hero2__heading-group">
          <div class="ek-textgroup__eyebrow">Lorem ipsum</div>
          <h2 class="ek-textgroup__title ek-heading-xl">Lorem ipsum dolor sit amet, consecte adipiscing elit</h2>
        </div>
        <div class="ek-hero2__aside">
          <p class="ek-textgroup__body">Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat. Pellentesque fringilla tellus dolor, a fermentum massa finibus id.</p>
          <button class="ek-btn ek-btn--primary">Lorem ipsum</button>
        </div>
      </div>
    </div>`,
    // Hero Marquee Gallery — centered intro (eyebrow, heading XL, body, primary + secondary)
    // over a full-bleed, continuously scrolling row of images in alternating sizes
    // (square / tall), then progress tabs. The active tab's bar fills on a loop.
    'hero-marquee-gallery': () => {
      const imgs = [2, 1, 3, 4, 5, 1].map((n, i) => `<img class="ek-hero3__img${i % 2 ? ' ek-hero3__img--tall' : ''}" src="assets/sections/hero-marquee-gallery-${n}.jpg" alt="" loading="lazy">`).join('');
      const group = `<div class="ek-hero3__group">${imgs}</div>`;
      const tabs = ['Comprar', 'Vender', 'Alquilar'].map((t, i) => `<button type="button" role="tab" aria-selected="${i === 0}" class="ek-hero3__tab${i === 0 ? ' is-active' : ''}"><span class="ek-hero3__tab-label">${t}</span><span class="ek-hero3__track"><span class="ek-hero3__progress"></span></span></button>`).join('');
      return `<div class="ek-hero3">
        <div class="ek-hero3__intro">
          <div class="ek-hero3__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-xl">Lorem ipsum dolor sit amet consecte adipiscing</h2></div>
          <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
          <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
        </div>
        <div class="ek-hero3__strip"><div class="ek-hero3__lane">${group}${group}</div></div>
        <div class="ek-hero3__tabs" role="tablist">${tabs}</div>
      </div>`;
    },
    // Marquee Logo Strip — centered intro + a continuously scrolling row of brand logos
    // (exported from Figma as SVG, muted to one tint) split by dividers.
    'marquee-logo-strip': () => {
      const items = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `<img class="ek-marquee1__logo" src="assets/sections/marquee-logo-${n}.svg" alt="" loading="lazy"><span class="ek-marquee1__divider" aria-hidden="true"></span>`).join('');
      const grp = `<div class="ek-marquee1__group">${items}</div>`;
      const text = `<div class="ek-marquee1__text">
        <div class="ek-marquee1__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-m">Lorem ipsum</h2></div>
        <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.</p>
        <button class="ek-btn ek-btn--primary">Lorem ipsum</button>
      </div>`;
      return `<div class="ek-marquee1">${text}<div class="ek-marquee1__strip"><div class="ek-marquee1__lane">${grp}${grp}</div></div></div>`;
    },
    // Values & Features Icon Grid — a centered intro (eyebrow, heading, body, primary +
    // secondary actions) above a row of four feature cards, each an icon box, a
    // short title and a line of copy.
    'values-icon-grid': () => {
      const cards = [
        'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum.',
        'Integer quis rhoncus leo. Fusce in sodales lorem, at fermentum massa. Donec auctor velit sit amet.',
        'Pellentesque fringilla tellus dolor, a fermentum massa finibus id. Mauris cursus aliquet turpis non.',
        'Donec auctor velit sit amet orci pretium, ut semper arcu consequat. Cras lorem leo mollis non diam.',
      ].map(body => `<div class="ek-values1__card">
        <span class="ek-textgroup__icon">${EK_ICONS.info}</span>
        <h3 class="ek-textgroup__title">Lorem ipsum</h3>
        <p class="ek-textgroup__body">${body}</p>
      </div>`).join('');
      const intro = `<div class="ek-values1__intro">
        <div class="ek-values1__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
        <p class="ek-textgroup__body">Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum.</p>
        <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
      </div>`;
      return `<div class="ek-values1">${intro}<div class="ek-values1__boxes">${cards}</div></div>`;
    },
    // Values & Features Highlight List — heading + a vertical feature list on the left (first
    // item highlighted, with body copy; the rest are title-only rows) next to a
    // tall image on the right. Icons sit in small accent-filled boxes.
    'values-highlight-list': () => {
      const feats = [
        { t: 'Lorem ipsum dolor sit amet', b: 'Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat.' },
        { t: 'Lorem ipsum dolor sit amet', b: 'Pellentesque fringilla tellus dolor, a fermentum massa finibus id. Integer quis rhoncus leo, vel dignissim.' },
        { t: 'Lorem ipsum dolor sit amet', b: 'Donec auctor velit sit amet orci pretium, ut semper arcu consequat. Cras lorem leo, mollis non diam eu.' },
        { t: 'Lorem ipsum dolor sit amet', b: 'Fusce in sodales lorem, at fermentum massa. Nam scelerisque iaculis bibendum, quis rhoncus leo tempor.' },
      ].map((it, i) => `<button type="button" class="ek-values2__item${i === 0 ? ' is-active' : ''}">
        <span class="ek-values2__icon">${EK_ICONS.info}</span>
        <span class="ek-values2__text"><span class="ek-textgroup__title">${it.t}</span><span class="ek-values2__body"><span class="ek-values2__body-inner"><span class="ek-textgroup__body">${it.b}</span></span></span></span>
      </button>`).join('');
      return `<div class="ek-values2"><div class="ek-values2__inner"><div class="ek-values2__row">
        <div class="ek-values2__col">
          <div class="ek-values2__intro"><div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Lorem ipsum dolor sit amet</h2></div></div>
          <div class="ek-values2__list">${feats}</div>
        </div>
        <div class="ek-values2__media"><img src="assets/sections/values-002-img.jpg" alt="" loading="lazy"></div>
      </div></div></div>`;
    },
    // Values & Features Numbered List — a heading, then an image beside a numbered list.
    // Each row pairs a number + title with a description, divided by thin rules.
    'values-numbered-list': () => {
      const items = ['01', '02', '03', '04'].map(n => `<div class="ek-values3__item">
        <div class="ek-values3__label"><span class="ek-values3__num ek-label-m">${n}.</span><span class="ek-values3__title ek-body-l ek-strong">Lorem ipsum dolor</span></div>
        <p class="ek-values3__desc ek-body-m">Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat.</p>
      </div>`).join('');
      return `<div class="ek-values3"><div class="ek-values3__inner">
        <div class="ek-values3__head"><div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">We help expert-led teams structure their communication</h2></div></div>
        <div class="ek-values3__row">
          <div class="ek-values3__media"><img src="assets/sections/values-002-img.jpg" alt="" loading="lazy"></div>
          <div class="ek-values3__list">${items}</div>
        </div>
      </div></div>`;
    },
    // Values & Features Staggered Cards — a centered intro over three staggered cards, each a
    // heading, an abstract illustration (exported from Figma) and a line of copy.
    'values-staggered-cards': () => {
      const body = 'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.';
      const cards = [1, 2, 3].map(n => `<div class="ek-values4__card">
        <h3 class="ek-textgroup__title">Lorem ipsum</h3>
        <div class="ek-values4__illus"><img src="assets/sections/values-004-illus-${n}.svg" alt=""></div>
        <p class="ek-textgroup__body">${body}</p>
      </div>`).join('');
      const intro = `<div class="ek-values4__intro">
        <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-l">Nam a bibendum nunc eget tincidunt eros</h2></div>
        <p class="ek-textgroup__body">${body}</p>
        <div class="ek-btn-group"><button class="ek-btn ek-btn--primary">Lorem ipsum</button><button class="ek-btn ek-btn--secondary">Lorem ipsum</button></div>
      </div>`;
      return `<div class="ek-values4">${intro}<div class="ek-values4__grid">${cards}</div></div>`;
    },
    // Explanation Dark Card — dark (complementary) card over a full-bleed background image.
    // Left column: heading (top) + body & primary button (bottom); right: an image.
    'explanation-dark-card': () => `<div class="ek-explain6" style="background-image:url('assets/sections/explanation-006-bg.jpg')">
      <div class="ek-explain6__card theme-dark">
        <div class="ek-explain6__col">
          <div class="ek-textgroup__head"><div class="ek-textgroup__eyebrow">Lorem ipsum</div><h2 class="ek-textgroup__title ek-heading-xl">Lorem ipsum dolor sit amet</h2></div>
          <div class="ek-explain6__foot"><p class="ek-textgroup__body">Mauris cursus aliquet turpis non placerat. Donec auctor velit sit amet orci pretium, ut semper arcu consequat. Pellentesque fringilla tellus dolor, a fermentum massa finibus id.</p><button class="ek-btn ek-btn--primary">Lorem ipsum</button></div>
        </div>
        <div class="ek-explain6__media" style="background-image:url('assets/sections/explanation-002-img.jpg')"></div>
      </div>
    </div>`,
  };
  window.ERAIKI_SECTIONS = SECTIONS;
  window.ERAIKI_SECTIONS_BUILD = SECTION_BUILD;
})();
