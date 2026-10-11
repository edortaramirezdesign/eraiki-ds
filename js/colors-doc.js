/* Colors documentation — single source of truth for the Colors foundation.
 * Holds the hierarchy (Primitives / Fill / Stroke / Semantic), every token, each
 * group's description, the design.md metadata, and the render helpers. Consumed by
 * BOTH the docs portal (js/app.js) and the Storybook stories, so they never drift.
 * Exposes window.ERAIKI_COLORS. */
(function () {
  const esc = (s) => (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const cdRows = (base, pairs) => pairs.map((p) => [p[0], base + p[1]]);

  const COLOR_DOC = [
    { h: 'Primitives', lvl: 40, desc: 'When we talk about primitive colours, we are referring to the colours that have been chosen for this project in an agnostic manner, without relating them to any type of use case or related functionality.', children: [
      { h: 'Primitives / Primary', lvl: 24, desc: 'We understand primary colour to be the main or reference colour of your visual identity. We will use these colours mainly for CTAs, although you can also use them in other small colour elements that you want to highlight.', rows: cdRows('--color-primitives-primary-', [['900','900'],['600','600'],['300','300']]) },
      { h: 'Primitives / Gray', lvl: 24, desc: 'Grey colours will have a multitude of applications: texts, backgrounds for certain sections or components, borders… it is difficult to precisely define when we will use this shade.', rows: cdRows('--color-primitives-gray-', [['600','600'],['500','500'],['400','400'],['300','300'],['200','200'],['100','100'],['000','000']]) },
      { h: 'Primitives / Red', lvl: 24, desc: 'As a general rule, we will use red when we want to represent a certain alarm or urgency.', rows: cdRows('--color-primitives-red-', [['300','300'],['100','100']]) },
      { h: 'Primitives / Orange', lvl: 24, desc: 'As a general rule, we will use orange to represent a certain level of importance, but without it being quite an alarm or an emergency.', rows: cdRows('--color-primitives-orange-', [['300','300'],['100','100']]) },
      { h: 'Primitives / Blue', lvl: 24, desc: 'We turn to blue when all we want is to inform in a simple, neutral way.', rows: cdRows('--color-primitives-blue-', [['300','300'],['100','100']]) },
      { h: 'Primitives / Green', lvl: 24, desc: 'We will use the colour green to reinforce positive or satisfactory messages.', rows: cdRows('--color-primitives-green-', [['300','300'],['100','100']]) },
    ] },
    { h: 'Fill', lvl: 40, desc: 'Fill colours are those intended to fill a shape or typeface.', children: [
      { h: 'Fill / Link', lvl: 32, desc: 'When a colour is of the fill type but also of the link type, it means that that shape or text will be clickable. For this very reason, these colours have different states, helping the user to understand how the interactive part of that element works.', children: [
        { h: 'Fill / Link / Surface', lvl: 24, desc: 'We will apply Fill / Link / Surface colours when we need to fill in a container or a clickable geometric shape that the user can interact with. Something as simple as a CTA, for example.', rows: cdRows('--color-fill-link-surface-', [['Accent Active','accent-active'],['Accent Hover','accent-hover'],['Accent Default','accent-default'],['Accent Disabled','accent-disabled'],['Standard Active','standard-active'],['Standard Hover','standard-hover'],['Standard Default','standard-default'],['Standard Disabled','standard-disabled']]) },
        { h: 'Fill / Link / Text', lvl: 24, desc: 'The colours of the Fill / Link / Text type will be applied, as their name suggests, as a fill for any text that is clickable and has some interaction behind it.', rows: cdRows('--color-fill-link-text-', [['Active','active'],['Hover','hover'],['Default','default'],['Disabled','disabled']]) },
      ] },
      { h: 'Fill / Plain', lvl: 32, desc: 'While Fill / Link colours were designed for interactive elements, Fill / Plain colours are intended for all shapes or text that do not have any interaction behind them. Therefore the colours are not subject to states — they simply carry different levels of importance.', children: [
        { h: 'Fill / Plain / Surface', lvl: 24, desc: 'The Fill / Plain / Surface colours are designed for all geometric shapes or containers that, for some reason, have a decorative background colour.', rows: cdRows('--color-fill-plain-surface-', [['Accent','accent'],['Standard XL','standard-xl'],['Standard L','standard-l'],['Standard M','standard-m'],['Standard S','standard-s'],['Base','base']]) },
        { h: 'Fill / Plain / Text', lvl: 24, desc: 'Fill / Plain / Text colours fill any non-interactive text, at the level of emphasis its role calls for.', rows: cdRows('--color-fill-plain-text-', [['Accent','accent'],['Standard L','standard-l'],['Standard M','standard-m'],['Standard S','standard-s'],['Inverse','inverse'],['On color','oncolor']]) },
      ] },
    ] },
    { h: 'Stroke', lvl: 40, desc: 'Stroke colours are meant for the outline of a shape, icon or input — borders, dividers and rings rather than fills.', children: [
      { h: 'Stroke / Link', lvl: 32, desc: 'Stroke / Link colours outline interactive elements, so they carry states (default, hover, active, disabled) that signal the element can be interacted with.', children: [
        { h: 'Stroke / Link / Icon', lvl: 24, desc: 'Outlines for icons that are part of an interactive control, across their states.', rows: cdRows('--color-stroke-link-icon-', [['Active','active'],['Hover','hover'],['Default','default'],['Disabled','disabled'],['Inverse','inverse'],['On color','oncolor']]) },
        { h: 'Stroke / Link / Input', lvl: 24, desc: 'Outlines for form inputs, covering their default, hover, active, disabled and error states.', rows: cdRows('--color-stroke-link-input-', [['Active','active'],['Hover','hover'],['Default','default'],['Disabled','disabled'],['Error','error']]) },
        { h: 'Stroke / Link / Surface', lvl: 24, desc: 'Outlines for interactive surfaces such as buttons and chips, across their accent and standard states.', rows: cdRows('--color-stroke-link-surface-', [['Accent Active','accent-active'],['Accent Hover','accent-hover'],['Accent Default','accent-default'],['Accent Disabled','accent-disabled'],['Standard Active','standard-active'],['Standard Hover','standard-hover'],['Standard Default','standard-default'],['Standard Disabled','standard-disabled']]) },
      ] },
      { h: 'Stroke / Plain', lvl: 32, desc: 'Stroke / Plain colours outline non-interactive elements, so they have no states — only levels of emphasis.', children: [
        { h: 'Stroke / Plain / Icon', lvl: 24, desc: 'Outlines for decorative or static icons.', rows: [['Standard M','--color-stroke-plain-icons-standard-m'],['Standard S','--color-stroke-plain-icons-standard-s'],['Inverse','--color-stroke-plain-icon-inverse'],['On color','--color-stroke-plain-icon-oncolor']] },
        { h: 'Stroke / Plain / Shape', lvl: 24, desc: 'Outlines for static shapes, containers and dividers.', rows: cdRows('--color-stroke-plain-shape-', [['Accent','accent'],['Standard L','standard-l'],['Standard M','standard-m'],['Inverse','inverse'],['On color','oncolor']]) },
      ] },
    ] },
    { h: 'Semantic', lvl: 40, desc: 'Semantic colours carry a fixed meaning across the system — alert, error, information and success — each in a medium and a subtle variant.', children: [
      { h: 'Semantic / Alert', lvl: 24, desc: 'Used to flag something that needs attention or caution, short of a full error.', rows: cdRows('--color-semantic-alert-', [['Alert M','m'],['Alert S','s']]) },
      { h: 'Semantic / Error', lvl: 24, desc: 'Used to signal a failure, a blocking problem or a destructive action.', rows: cdRows('--color-semantic-error-', [['Error M','m'],['Error S','s']]) },
      { h: 'Semantic / Info', lvl: 24, desc: 'Used for neutral, informational messages and hints.', rows: cdRows('--color-semantic-info-', [['Info M','m'],['Info S','s']]) },
      { h: 'Semantic / Success', lvl: 24, desc: 'Used to confirm a positive or successful outcome.', rows: cdRows('--color-semantic-success-', [['Success M','m'],['Success S','s']]) },
    ] },
  ];

  const COLOR_DESIGN_MD_INTRO = `**Short description**
A two-tier, fully themed color system: agnostic **Primitives** aliased into semantic **Fill** and **Stroke** tokens (Link/Plain × Surface/Text/Icon/Input/Shape), plus a **Semantic** status set.

**Context**
Primitives hold the raw values and flip between light and dark; semantic tokens reference primitives, so most adapt to the theme automatically. A few semantic tokens alias a *different* primitive in dark mode (flagged with *dark: …*).`;

  const COLOR_META = {"--color-primitives-primary-900": {"light": "`#DF5F27`", "dark": "`#DD602A`"}, "--color-primitives-primary-600": {"light": "`#EB6C38`", "dark": "`#EB6C38`"}, "--color-primitives-primary-300": {"light": "`#EB6C38` · 40%", "dark": "`#F57642` · 40%"}, "--color-primitives-complementary-600": {"light": "`#212D30`", "dark": "`#212D30`"}, "--color-primitives-gray-600": {"light": "`#1E1F24`", "dark": "`#EFEFF0`"}, "--color-primitives-gray-500": {"light": "`#1E1F24` · 72%", "dark": "`#EFEFF0` · 72%"}, "--color-primitives-gray-400": {"light": "`#1E1F24` · 56%", "dark": "`#EFEFF0` · 56%"}, "--color-primitives-gray-300": {"light": "`#1E1F24` · 26%", "dark": "`#EFEFF0` · 32%"}, "--color-primitives-gray-200": {"light": "`#1E1F24` · 12%", "dark": "`#EFEFF0` · 16%"}, "--color-primitives-gray-100": {"light": "`#1E1F24` · 3%", "dark": "`#EFEFF0` · 12%"}, "--color-primitives-gray-000": {"light": "`#FFFFFF`", "dark": "`#1E1F24`"}, "--color-primitives-red-300": {"light": "`#D02020`", "dark": "`#D02020`"}, "--color-primitives-red-100": {"light": "`#D02020` · 8%", "dark": "`#D02020` · 16%"}, "--color-primitives-orange-300": {"light": "`#F0A21D`", "dark": "`#F0A21D`"}, "--color-primitives-orange-100": {"light": "`#F0A21D` · 16%", "dark": "`#F0A21D` · 16%"}, "--color-primitives-blue-300": {"light": "`#3A99EC`", "dark": "`#3A99EC`"}, "--color-primitives-blue-100": {"light": "`#3A99EC` · 16%", "dark": "`#3A99EC` · 16%"}, "--color-primitives-green-300": {"light": "`#34A654`", "dark": "`#34A654`"}, "--color-primitives-green-100": {"light": "`#34A654` · 16%", "dark": "`#34A654` · 16%"}, "--color-fill-plain-surface-accent": {"alias": "`primary-600`"}, "--color-fill-plain-surface-complementary": {"alias": "`complementary-600`"}, "--color-fill-plain-surface-standard-xl": {"alias": "`gray-600` *(dark: gray-500)*"}, "--color-fill-plain-surface-standard-l": {"alias": "`gray-300`"}, "--color-fill-plain-surface-standard-m": {"alias": "`gray-200`"}, "--color-fill-plain-surface-standard-s": {"alias": "`gray-100`"}, "--color-fill-plain-surface-base": {"alias": "`gray-000`"}, "--color-fill-plain-text-accent": {"alias": "`primary-600`"}, "--color-fill-plain-text-standard-l": {"alias": "`gray-600`"}, "--color-fill-plain-text-standard-m": {"alias": "`gray-500`"}, "--color-fill-plain-text-standard-s": {"alias": "`gray-300`"}, "--color-fill-plain-text-inverse": {"alias": "`gray-000`"}, "--color-fill-plain-text-oncolor": {"alias": "`gray-000` *(dark: gray-600)*"}, "--color-fill-link-surface-accent-active": {"alias": "`primary-900`"}, "--color-fill-link-surface-accent-hover": {"alias": "`primary-900`"}, "--color-fill-link-surface-accent-default": {"alias": "`primary-600`"}, "--color-fill-link-surface-accent-disabled": {"alias": "`primary-300`"}, "--color-fill-link-surface-standard-active": {"alias": "`gray-200`"}, "--color-fill-link-surface-standard-hover": {"alias": "`gray-200`"}, "--color-fill-link-surface-standard-default": {"alias": "`gray-100`"}, "--color-fill-link-surface-standard-disabled": {"alias": "`gray-100`"}, "--color-fill-link-text-active": {"alias": "`gray-600`"}, "--color-fill-link-text-hover": {"alias": "`gray-600`"}, "--color-fill-link-text-default": {"alias": "`gray-500`"}, "--color-fill-link-text-disabled": {"alias": "`gray-400`"}, "--color-stroke-link-icon-active": {"alias": "`gray-600`"}, "--color-stroke-link-icon-hover": {"alias": "`gray-600`"}, "--color-stroke-link-icon-default": {"alias": "`gray-500`"}, "--color-stroke-link-icon-disabled": {"alias": "`gray-400`"}, "--color-stroke-link-icon-inverse": {"alias": "`gray-000`"}, "--color-stroke-link-icon-oncolor": {"alias": "`gray-000` *(dark: gray-600)*"}, "--color-stroke-link-input-active": {"alias": "`primary-600`"}, "--color-stroke-link-input-hover": {"alias": "`gray-400`"}, "--color-stroke-link-input-default": {"alias": "`gray-300`"}, "--color-stroke-link-input-disabled": {"alias": "`gray-300`"}, "--color-stroke-link-input-error": {"alias": "`red-300`"}, "--color-stroke-link-surface-accent-active": {"alias": "`primary-900`"}, "--color-stroke-link-surface-accent-hover": {"alias": "`primary-900`"}, "--color-stroke-link-surface-accent-default": {"alias": "`primary-600`"}, "--color-stroke-link-surface-accent-disabled": {"alias": "`primary-300`"}, "--color-stroke-link-surface-standard-active": {"alias": "`gray-400`"}, "--color-stroke-link-surface-standard-hover": {"alias": "`gray-300`"}, "--color-stroke-link-surface-standard-default": {"alias": "`gray-200`"}, "--color-stroke-link-surface-standard-disabled": {"alias": "`gray-200`"}, "--color-stroke-plain-icons-standard-m": {"alias": "`gray-600`"}, "--color-stroke-plain-icons-standard-s": {"alias": "`gray-400`"}, "--color-stroke-plain-icon-inverse": {"alias": "`gray-000`"}, "--color-stroke-plain-icon-oncolor": {"alias": "`gray-000` *(dark: gray-600)*"}, "--color-stroke-plain-shape-accent": {"alias": "`primary-600`"}, "--color-stroke-plain-shape-standard-l": {"alias": "`gray-300`"}, "--color-stroke-plain-shape-standard-m": {"alias": "`gray-200`"}, "--color-stroke-plain-shape-inverse": {"alias": "`gray-000`"}, "--color-stroke-plain-shape-oncolor": {"alias": "`gray-000` *(dark: gray-600)*"}, "--color-semantic-alert-m": {"alias": "`orange-300`"}, "--color-semantic-alert-s": {"alias": "`orange-100`"}, "--color-semantic-error-m": {"alias": "`red-300`"}, "--color-semantic-error-s": {"alias": "`red-100`"}, "--color-semantic-info-m": {"alias": "`blue-300`"}, "--color-semantic-info-s": {"alias": "`blue-100`"}, "--color-semantic-success-m": {"alias": "`green-300`"}, "--color-semantic-success-s": {"alias": "`green-100`"}};

  function colorRowHTML(name, token) {
    return `<div class="cdoc">`
      + `<div class="cdoc__ex theme-dark"><span class="cdoc__chip" style="background:var(${token})"></span></div>`
      + `<div class="cdoc__ex cdoc__ex--light"><span class="cdoc__chip" style="background:var(${token})"></span></div>`
      + `<div class="cdoc__name">${esc(name)}</div>`
      + `<div class="cdoc__token"><code class="cdoc__pill">${esc(token)}</code></div>`
      + `</div>`;
  }
  function colorHeading(h) {
    const parts = h.split(' / ');
    if (parts.length < 2) return esc(h);
    const last = parts.pop();
    return `<span class="cdoc-head__path">${esc(parts.join(' / ') + ' / ')}</span>${esc(last)}`;
  }
  function colorNodeHTML(node) {
    const tag = node.lvl >= 40 ? 'h2' : node.lvl === 32 ? 'h3' : 'h4';
    const cls = node.lvl >= 40 ? 'cdoc-block--section' : node.lvl === 32 ? 'cdoc-block--sub' : 'cdoc-block--group';
    let html = `<div class="cdoc-head"><${tag} class="cdoc-head__title">${colorHeading(node.h)}</${tag}><p class="cdoc-head__desc">${esc(node.desc)}</p></div>`;
    if (node.rows) html += `<div class="cdoc-rows">${node.rows.map((r) => colorRowHTML(r[0], r[1])).join('')}</div>`;
    if (node.children) html += `<div class="cdoc-divider"></div>` + node.children.map(colorNodeHTML).join(`<div class="cdoc-divider"></div>`);
    return `<div class="cdoc-block ${cls}">${html}</div>`;
  }
  function buildColorDesignMd() {
    let out = '## Colors\n\n' + COLOR_DESIGN_MD_INTRO + '\n';
    function walk(node) {
      const hashes = node.lvl >= 40 ? '##' : node.lvl === 32 ? '###' : '####';
      out += '\n' + hashes + ' ' + node.h + '\n' + node.desc + '\n';
      if (node.rows) {
        const isPrim = node.rows[0][1].indexOf('--color-primitives-') === 0;
        if (isPrim) {
          out += '\n| Token | Light | Dark |\n|---|---|---|\n';
          node.rows.forEach((r) => { const m = COLOR_META[r[1]] || {}; out += '| `' + r[1] + '` | ' + (m.light || '—') + ' | ' + (m.dark || '—') + ' |\n'; });
        } else {
          out += '\n| Token | Alias |\n|---|---|\n';
          node.rows.forEach((r) => { const m = COLOR_META[r[1]] || {}; out += '| `' + r[1] + '` | ' + (m.alias || '—') + ' |\n'; });
        }
      }
      if (node.children) node.children.forEach(walk);
    }
    COLOR_DOC.forEach(walk);
    return out;
  }
  // The full Colors page body, exactly as the docs portal renders it.
  function pageHTML() {
    return `<div class="cdoc-page">` + COLOR_DOC.map(colorNodeHTML).join(`<div class="cdoc-divider cdoc-divider--section"></div>`) + `</div>`
      + `<div class="cdoc-divider cdoc-divider--section"></div>`
      + `<div class="cdoc-designmd"><h2 class="doc-section__title">Design.md</h2><p class="doc-section__intro">The specific guidelines for colours in the general design.md file.</p><div class="design-md"><pre>${esc(buildColorDesignMd())}</pre></div></div>`;
  }

  const api = { COLOR_DOC, COLOR_META, COLOR_DESIGN_MD_INTRO, colorNodeHTML, buildColorDesignMd, pageHTML };
  if (typeof window !== 'undefined') window.ERAIKI_COLORS = api;
})();
