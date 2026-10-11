/* ==========================================================================
   Eraiki DS — component playgrounds (Overview emulator).
   Per component: `props` (enum → dropdown, bool → switch) + `render(state)`
   returning the live component markup (reusing the .ek-* classes).
   The engine (app.js) builds the controls and re-renders the stage on change.
   ========================================================================== */
(function () {
  const chevron = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ek-ic"><path d="M5 8l5 5 5-5"/></svg>';

  const P = {};

  // Accordion — custom playground: 4 fragments coexisting; pick one to manipulate,
  // open/close it (only one open at a time), and choose its state when open.
  P['accordion'] = {
    custom: true,
    // 4 fixed fragments; the controls only affect the selected one (the rest stay put).
    state: () => ({ sel: 0, items: [
      { open: true, state: 'Default' }, { open: false, state: 'Default' },
      { open: false, state: 'Default' }, { open: false, state: 'Default' },
    ] }),
    controls: (st) => {
      const f = st.items[st.sel];
      const ctrls = [
        { name: 'Fragment', type: 'enum', options: ['1', '2', '3', '4'], value: String(st.sel + 1) },
        { name: 'Open', type: 'bool', value: f.open },
      ];
      if (f.open) ctrls.push({ name: 'State', type: 'enum', options: ['Default', 'Hover', 'Pressed'], value: f.state });
      return ctrls;
    },
    onChange: (st, prop, val) => {
      if (prop === 'Fragment') st.sel = parseInt(val, 10) - 1;
      else if (prop === 'Open') st.items[st.sel].open = val;      // only the selected one
      else if (prop === 'State') st.items[st.sel].state = val;
    },
    render: (st) => {
      const item = (i) => {
        const f = st.items[i];
        const cls = ['ek-accordion__item'];
        if (f.open) {
          cls.push('is-open');
          if (f.state === 'Hover') cls.push('is-hover');
          if (f.state === 'Pressed') cls.push('is-pressed');
        }
        return `<div class="${cls.join(' ')}"><button type="button" class="ek-accordion__head"><span class="ek-accordion__title">Fragment ${i + 1}</span><span class="ek-btn ek-btn--tertiary ek-btn--sm ek-btn--icon">${chevron}</span></button><div class="ek-accordion__body">Progressive-disclosure content for fragment ${i + 1}.</div></div>`;
      };
      return `<div class="ek-accordion" style="width:420px;max-width:100%">${[0, 1, 2, 3].map(item).join('')}</div>`;
    },
  };

  // ---- icons ----
  const ic = (inner) => `<svg class="ek-ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
  const I = window.EK_ICONS; // canonical icon set (js/icons.js)
  const AVATAR_IMG = 'https://i.pravatar.cc/128?img=8';

  // ---- Button ----
  P['button'] = {
    props: [
      { name: 'Level', type: 'enum', options: ['Primary', 'Secondary', 'Tertiary'], value: 'Primary' },
      { name: 'Size', type: 'enum', options: ['Medium', 'Small'], value: 'Medium' },
      { name: 'Kind', type: 'enum', options: ['Only text', 'Left icon + text', 'Text + right icon', 'Only icon'], value: 'Only text' },
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Disabled'], value: 'Default' },
    ],
    render: (s) => {
      const cls = ['ek-btn', 'ek-btn--' + s.Level.toLowerCase()];
      if (s.Size === 'Small') cls.push('ek-btn--sm');
      if (s.State === 'Hover') cls.push('is-hover');
      if (s.State === 'Disabled') cls.push('is-disabled');
      if (s.Kind === 'Only icon') { cls.push('ek-btn--icon'); return `<button class="${cls.join(' ')}">${I.plus}</button>`; }
      let inner = 'Button';
      if (s.Kind === 'Left icon + text') { cls.push('ek-btn--icon-left'); inner = I.plus + 'Button'; }
      else if (s.Kind === 'Text + right icon') { cls.push('ek-btn--icon-right'); inner = 'Button' + I.chevronRight; }
      return `<button class="${cls.join(' ')}">${inner}</button>`;
    },
  };

  // ---- Badge ----
  P['badge'] = {
    props: [
      { name: 'Size', type: 'enum', options: ['Small', 'Large'], value: 'Small' },
      { name: 'Color', type: 'enum', options: ['Primary', 'Error', 'Alert', 'Info', 'Success'], value: 'Primary' },
    ],
    render: (s) => {
      const color = s.Color === 'Primary' ? '' : 'ek-badge--' + s.Color.toLowerCase();
      if (s.Size === 'Small') return `<span class="ek-badge ${color} ek-badge--dot"></span>`;
      return `<span class="ek-badge ${color}">3</span>`;
    },
  };

  // ---- Avatar ---- custom: el switch Badge revela dos dropdowns dependientes (tamaño + color)
  P['avatar'] = {
    custom: true,
    state: () => ({ Kind: 'Image', Size: 'Medium', Badge: false, BadgeSize: 'Small', BadgeColor: 'Primary' }),
    controls: (st) => {
      const ctrls = [
        { name: 'Kind', type: 'enum', options: ['Image', 'Placeholder', 'Initials'], value: st.Kind },
        { name: 'Size', type: 'enum', options: ['Small', 'Medium', 'Large'], value: st.Size },
        { name: 'Badge', type: 'bool', value: st.Badge },
      ];
      if (st.Badge) {
        ctrls.push({ name: 'Badge size', type: 'enum', options: ['Small', 'Large'], value: st.BadgeSize });
        ctrls.push({ name: 'Badge color', type: 'enum', options: ['Primary', 'Error', 'Alert', 'Info', 'Success'], value: st.BadgeColor });
      }
      return ctrls;
    },
    onChange: (st, prop, val) => {
      if (prop === 'Kind') st.Kind = val;
      else if (prop === 'Size') st.Size = val;
      else if (prop === 'Badge') st.Badge = val;
      else if (prop === 'Badge size') st.BadgeSize = val;
      else if (prop === 'Badge color') st.BadgeColor = val;
    },
    render: (st) => {
      const size = 'ek-avatar--' + { Small: 'sm', Medium: 'md', Large: 'lg' }[st.Size];
      let inner = 'E';
      if (st.Kind === 'Image') inner = `<img src="${AVATAR_IMG}" alt="">`;
      else if (st.Kind === 'Placeholder') inner = `<span class="ek-ic ek-avatar__ph">${I.user}</span>`;
      let badge = '';
      if (st.Badge) {
        const color = { Primary: '', Error: 'ek-badge--error', Alert: 'ek-badge--alert', Info: 'ek-badge--info', Success: 'ek-badge--success' }[st.BadgeColor];
        badge = st.BadgeSize === 'Small'
          ? `<span class="ek-badge ek-badge--dot ${color} ek-avatar__badge"></span>`
          : `<span class="ek-badge ${color} ek-avatar__badge">1</span>`;
      }
      return `<span class="ek-avatar ${size}">${inner}${badge}</span>`;
    },
  };

  // ---- Switch ----
  P['switch'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Disabled'], value: 'Default' },
      { name: 'Selected', type: 'bool', value: true },
      { name: 'Text', type: 'bool', value: true },
    ],
    render: (s) => {
      const cls = ['ek-switch'];
      if (s.Selected) cls.push('is-on');
      if (s.State === 'Hover') cls.push('is-hover');
      if (s.State === 'Disabled') cls.push('is-disabled');
      return `<span class="${cls.join(' ')}"><span class="ek-switch__track"></span>${s.Text ? '<span>Email notifications</span>' : ''}</span>`;
    },
  };

  // ---- Checkbox ----
  P['checkbox'] = {
    props: [
      { name: 'Selected', type: 'bool', value: false },
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Error', 'Disabled'], value: 'Default' },
      { name: 'Label', type: 'bool', value: true },
    ],
    render: (s) => {
      const cls = ['ek-check'];
      if (s.Selected) cls.push('is-on');
      if (s.State === 'Hover') cls.push('is-hover');
      else if (s.State === 'Error') cls.push('is-error');
      else if (s.State === 'Disabled') cls.push('is-disabled');
      return `<span class="${cls.join(' ')}"><span class="ek-check__box">${I.check}</span>${s.Label ? '<span>Lorem ipsum</span>' : ''}</span>`;
    },
  };

  // ---- Label ----
  const chevronRightSm = '<svg class="ek-ic ek-ic--s" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5l5 5-5 5"/></svg>';
  const chevronLeftSm = '<svg class="ek-ic ek-ic--s" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5l-5 5 5 5"/></svg>';

  // ---- Pills group (single pill) ----

  // ---- Tabs group - Desktop ----
  P['tabs-group-desktop'] = {
    props: [
      { name: 'Selected', type: 'enum', options: ['Overview', 'Activity', 'Settings'], value: 'Overview' },
    ],
    render: (s) => {
      const tabs = ['Overview', 'Activity', 'Settings'];
      return `<div class="ek-tabs">${tabs.map(t => `<span class="ek-tab ${t === s.Selected ? 'is-on' : ''}">${t}</span>`).join('')}</div>`;
    },
  };

  // ---- Tabs group - Mobile ----
  P['tabs-group-mobile'] = {
    props: [
      { name: 'Open', type: 'bool', value: false },
      { name: 'Selected', type: 'enum', options: ['Home', 'Search', 'Profile', 'Settings'], value: 'Home' },
    ],
    render: (s) => EK_BUILD.tabm({ selected: s.Selected, open: s.Open }),
  };

  // ---- Breadcrumb ----
  P['breadcrumb'] = {
    props: [
      { name: 'Levels', type: 'enum', options: ['1', '2', '3', '4', '5'], value: '3' },
    ],
    render: (s) => {
      const n = parseInt(s.Levels, 10);
      const parts = [];
      for (let i = 0; i < n; i++) {
        const last = i === n - 1;
        const label = 'Level ' + (i + 1);
        parts.push(last ? `<span class="ek-crumb__cur">${label}</span>` : `<a href="#">${label}</a>`);
      }
      return `<nav class="ek-crumb">${parts.join(`<span class="ek-crumb__sep"></span>`)}</nav>`;
    },
  };

  // extra icons for this batch
  const avImg = (n) => `<span class="ek-avatar %S%"><img src="https://i.pravatar.cc/128?img=${n}" alt=""></span>`;

  // ---- Avatar group ----
  P['avatar-group'] = {
    props: [
      { name: 'Avatars', type: 'enum', options: ['1', '2', '3', '4'], value: '4' },
      { name: 'Size', type: 'enum', options: ['Small', 'Medium'], value: 'Medium' },
      { name: 'Overflow', type: 'bool', value: true },
    ],
    render: (s) => {
      const n = parseInt(s.Avatars, 10);
      const sz = { Small: 'ek-avatar--sm', Medium: 'ek-avatar--md' }[s.Size];
      const av = (i) => `<span class="ek-avatar ${sz}"><img src="https://i.pravatar.cc/128?img=${i}" alt=""></span>`;
      const shown = s.Overflow ? n - 1 : n;
      let html = '';
      for (let i = 1; i <= shown; i++) html += av(i);
      if (s.Overflow) html += `<span class="ek-avatar ${sz}">+5</span>`;
      return `<span class="ek-avatar-group">${html}</span>`;
    },
  };

  // ---- Banner ----
  P['banner'] = {
    props: [
      { name: 'Kind', type: 'enum', options: ['Info', 'Error', 'Alert', 'Success'], value: 'Info' },
      { name: 'Description', type: 'bool', value: true },
      { name: 'Button', type: 'bool', value: false },
      { name: 'Closable', type: 'bool', value: true },
    ],
    render: (s) => {
      const icons = { Info: I.info, Error: I.error, Alert: I.alert, Success: I.success };
      const desc = s.Description ? `<div class="ek-banner__body">A longer description accompanies the title to give more context.</div>` : '';
      const btn = s.Button ? `<button class="ek-btn ek-btn--tertiary ek-btn--sm" style="align-self:center">Action</button>` : '';
      const close = s.Closable ? `<span class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm" data-ek-dismiss style="margin-left:auto">${I.closeSm}</span>` : '';
      return `<div class="ek-banner ek-banner--${s.Kind.toLowerCase()}"><span class="ek-banner__ico">${icons[s.Kind]}</span><div style="flex:1"><div class="ek-banner__title">Heads up</div>${desc}</div>${btn}${close}</div>`;
    },
  };

  // ---- Buttons group ----
  P['buttons-group'] = {
    props: [
      { name: 'Buttons', type: 'enum', options: ['1', '2', '3'], value: '3' },
      { name: 'Orientation', type: 'enum', options: ['Horizontal', 'Vertical'], value: 'Horizontal' },
    ],
    render: (s) => {
      const n = parseInt(s.Buttons, 10);
      const labels = ['Confirm', 'Cancel', 'Skip'];
      const levels = ['primary', 'secondary', 'tertiary'].slice(0, n);
      const mod = s.Orientation === 'Vertical' ? ' ek-btn-group--vertical' : '';
      return `<div class="ek-btn-group${mod}">${levels.map((lv, i) => `<button class="ek-btn ek-btn--${lv}">${labels[i]}</button>`).join('')}</div>`;
    },
  };

  // ---- Calendar ----
  P['calendar'] = {
    props: [
      { name: 'Mode', type: 'enum', options: ['Single', 'Range'], value: 'Single' },
      { name: 'Month selector', type: 'bool', value: true },
      { name: 'Year selector', type: 'bool', value: false },
      { name: 'Button', type: 'bool', value: false },
    ],
    render: (s) => {
      const YEAR = 2026, MONTH = 6; // July 2026
      const dow = ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => `<span class="ek-calendar__dow">${d}</span>`).join('');
      const opts = s.Mode === 'Range' ? { range: [12, 18] } : { selected: 12 };
      const days = window.EK.calendarDays(YEAR, MONTH, opts);
      const yearOn = s['Year selector'];
      const yearSel = yearOn ? window.EK.yearField(YEAR) : '';
      const head = s['Month selector'] ? `<div class="ek-calendar__head"><span class="ek-btn ek-btn--tertiary ek-btn--icon" data-cal-nav="-1">${chevronLeftSm}</span><span class="ek-calendar__label">${window.EK.monthLabel(YEAR, MONTH, yearOn)}</span><span class="ek-btn ek-btn--tertiary ek-btn--icon" data-cal-nav="1">${chevronRightSm}</span></div>` : '';
      const button = s.Button ? `<button class="ek-btn ek-btn--primary ek-btn--sm" style="width:100%;margin-top:var(--spacing-m)">Apply</button>` : '';
      return `<div class="ek-calendar" data-cal-year="${YEAR}" data-cal-month="${MONTH}" data-cal-mode="${s.Mode === 'Range' ? 'range' : 'single'}"${yearOn ? ' data-cal-monthonly="1"' : ''}>${yearSel}${head}<div class="ek-calendar__grid">${dow}${days}</div>${button}</div>`;
    },
  };

  // ---- Card - Product ----
  const heartIcon = ic('<path d="M10 16.5S3.5 12.2 3.5 7.9A3.3 3.3 0 0110 6a3.3 3.3 0 016.5 1.9c0 4.3-6.5 8.6-6.5 8.6z"/>');
  const CARD_PRODUCT_ART = '<img src="https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png" alt="Product">';
  P['card-product'] = {
    props: [
      { name: 'Label', type: 'bool', value: false },
      { name: 'Color options', type: 'bool', value: false },
      { name: 'Discount', type: 'bool', value: false },
    ],
    render: (s) => {
      const eyebrow = s.Label ? `<span class="ek-card__eyebrow">Category</span>` : '';
      const swatches = s['Color options'] ? `<div class="ek-card__swatches">${[0,1,2,3,4].map(() => '<span class="ek-card__swatch"></span>').join('')}</div>` : '';
      const price = s.Discount
        ? `<div class="ek-card__price"><span class="ek-card__price-original">€49.00</span><span class="ek-card__price-sale">€39.00</span></div>`
        : `<div class="ek-card__price">€49.00</div>`;
      return `<div class="ek-card"><div class="ek-card__media">${CARD_PRODUCT_ART}<button class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-card__fav" aria-label="Save">${heartIcon}</button></div><div class="ek-card__body"><div class="ek-card__info">${eyebrow}<div class="ek-card__title">Product name</div>${swatches}</div>${price}</div></div>`;
    },
  };

  // ---- Cells (shared builder) ----
  const cellMarkup = (kind, mod, extraStyle) => {
    const lead = `<span class="ek-avatar ek-avatar--md"><img src="${AVATAR_IMG}" alt=""></span>`;
    let trail = '';
    if (kind === 'Amount') trail = '<span class="ek-cell__amount">$1,204</span>';
    else if (kind === 'Label') trail = '<span class="ek-label"><span class="ek-label__dot"></span>Label</span>';
    else if (kind === 'Icon') trail = I.chevronRight;
    return `<div class="ek-cell ${mod || ''}"${extraStyle ? ` style="${extraStyle}"` : ''}>${lead}<div class="ek-cell__body"><div class="ek-cell__title">Jane Doe</div><div class="ek-cell__sub">jane@eraiki.com</div></div>${trail}</div>`;
  };
  const cellStateStyle = (state) => {
    if (state === 'Hover') return 'background:var(--color-fill-link-surface-standard-hover)';
    if (state === 'Selected') return 'background:var(--color-fill-link-surface-standard-active)';
    if (state === 'Disabled') return 'opacity:.5;pointer-events:none';
    return '';
  };

  // ---- Cell - Featured ----
  P['cell-featured'] = {
    props: [
      { name: 'Kind', type: 'enum', options: ['Text', 'Empty'], value: 'Text' },
    ],
    render: (s) => s.Kind === 'Empty'
      ? `<div class="ek-cell-featured"></div>`
      : `<div class="ek-cell-featured"><span class="ek-cell-featured__value">Lorem ipsum</span></div>`,
  };

  // ---- Cell - Linkable ----
  P['cell-linkable'] = {
    props: [
      { name: 'Kind', type: 'enum', options: ['Text', 'Amount', 'Label', 'Icon'], value: 'Text' },
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Selected default', 'Selected hover', 'Disabled', 'Selected disabled'], value: 'Default' },
    ],
    render: (s) => {
      const kmod = { Amount: 'ek-cell-linkable--amount', Label: 'ek-cell-linkable--label', Icon: 'ek-cell-linkable--icon' };
      const state = { 'Default': '', 'Hover': 'is-hover', 'Selected default': 'is-selected', 'Selected hover': 'is-selected is-hover', 'Disabled': 'is-disabled', 'Selected disabled': 'is-selected is-disabled' }[s.State] || '';
      let content = 'Lorem';
      if (s.Kind === 'Amount') content = '000.00';
      else if (s.Kind === 'Label') content = '<span class="ek-label"><span class="ek-label__dot"></span>Label</span>';
      else if (s.Kind === 'Icon') content = ic('<path d="M10 3l7 7-7 7-7-7z"/>');
      return `<div class="ek-cell-linkable ${kmod[s.Kind] || ''} ${state}"><span class="ek-cell-linkable__content">${content}</span></div>`;
    },
  };

  // ---- Cell - Plain ----
  P['cell-plain'] = {
    props: [
      { name: 'Kind', type: 'enum', options: ['Text', 'Amount', 'Label', 'Icon'], value: 'Text' },
      { name: 'State', type: 'enum', options: ['Default', 'Disabled'], value: 'Default' },
    ],
    render: (s) => {
      const kmod = { Amount: 'ek-cell-plain--amount', Label: 'ek-cell-plain--label', Icon: 'ek-cell-plain--icon' };
      let content = 'Lorem ipsum';
      if (s.Kind === 'Amount') content = '000.00';
      else if (s.Kind === 'Label') content = '<span class="ek-label"><span class="ek-label__dot"></span>Label</span>';
      else if (s.Kind === 'Icon') content = ic('<path d="M10 3l7 7-7 7-7-7z"/>');
      const state = s.State === 'Disabled' ? 'is-disabled' : '';
      return `<div class="ek-cell-plain ${kmod[s.Kind] || ''} ${state}"><span class="ek-cell-plain__content">${content}</span></div>`;
    },
  };

  const ddCheck = '<svg class="ek-ic ek-opt__check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5l4 4 8-9"/></svg>';
  const chk = (on, label) => `<span class="ek-check ${on ? 'is-on' : ''}"><span class="ek-check__box">${I.check}</span><span>${label}</span></span>`;
  const field = (label, inner, mod, hint, hintCls) => `<div class="ek-field"><span class="ek-field__label">${label || '&nbsp;'}</span><div class="ek-input ${mod || ''}">${inner}</div>${hint ? `<span class="ek-field__hint ${hintCls || ''}">${hint}</span>` : ''}</div>`;
  const inputStateMod = (st) => ({ Default: '', Active: 'is-focus', Hover: 'is-hover', Error: 'is-error', Disabled: 'is-disabled' }[st] || '');


  // ---- Dropdown input ----


  // ---- Image ----

  // ---- Input field - Date range ----


  // ---- Input field - Date selector ----
  // ---- Input field - Password ----
  // ---- Input field - Text ----
  // ---- Input field - Text area ----


  // ---- Text group ----
  P['text-group'] = {
    props: [
      { name: 'Kind', type: 'enum', options: ['Default', 'Contained'], value: 'Default' },
      { name: 'Icon', type: 'bool', value: true },
      { name: 'Label', type: 'bool', value: true },
      { name: 'Text', type: 'bool', value: true },
      { name: 'Button', type: 'bool', value: true },
    ],
    render: (s) => EK_BUILD.textGroup({ contained: s.Kind === 'Contained', icon: s.Icon, label: s.Label, text: s.Text, button: s.Button }),
  };

  // ---- Tooltip ----
  P['tooltip'] = {
    props: [
      { name: 'Position', type: 'enum', options: ['Top', 'Top left', 'Top right', 'Left', 'Right', 'Bottom', 'Bottom left', 'Bottom right'], value: 'Top' },
    ],
    render: (s) => EK_BUILD.tooltip({ pos: s.Position.toLowerCase().replace(' ', '-') }),
  };

  // =========================================================================
  // Per-component control overrides (batch). Later assignments win.
  // =========================================================================
  const pgLabel = (show, mand, text) => show ? `<span class="ek-field__label">${mand ? '<span class="ek-req">*</span> ' : ''}${text || 'Label'}</span>` : '';
  const pgTip = (show) => show ? `<span style="display:inline-flex;color:var(--color-stroke-plain-icons-standard-s);cursor:help">${I.info}</span>` : '';
  const pgDetail = (show, err, txt) => show ? `<span class="ek-field__hint ${err ? 'ek-field__hint--error' : ''}">${err ? 'This field has an error' : (txt || 'Detail text')}</span>` : '';

  // ---- Cells row ----
  P['cells-row'] = {
    props: [
      { name: 'Kind', type: 'enum', options: ['Plain', 'Featured', 'Linkable'], value: 'Plain' },
      { name: 'Items', type: 'enum', options: ['2', '3', '4', '5', '6'], value: '4' },
    ],
    render: (s) => {
      const n = parseInt(s.Items, 10);
      const one = () => {
        if (s.Kind === 'Featured') return '<div class="ek-cell-featured"><span class="ek-cell-featured__value">Lorem</span></div>';
        if (s.Kind === 'Linkable') return '<div class="ek-cell-linkable"><span class="ek-cell-linkable__content">Lorem</span></div>';
        return '<div class="ek-cell-plain"><span class="ek-cell-plain__content">Lorem</span></div>';
      };
      return `<div class="ek-cells-row" style="width:100%">${Array.from({ length: n }, one).join('')}</div>`;
    },
  };

  // ---- Checkbox group ----
  P['checkbox-group'] = {
    props: [
      { name: 'Checks', type: 'enum', options: ['2', '3', '4', '5'], value: '4' },
      { name: 'Label', type: 'bool', value: true },
    ],
    render: (s) => {
      const n = parseInt(s.Checks, 10);
      let items = '';
      for (let i = 0; i < n; i++) items += chk(i % 2 === 0, 'Lorem ipsum');
      return `<div class="ek-check-group">${s.Label ? '<span class="ek-group-label">Lorem ipsum:</span>' : ''}${items}</div>`;
    },
  };

  // ---- Divider ----
  P['divider'] = {
    props: [
      { name: 'Direction', type: 'enum', options: ['Vertical', 'Horizontal'], value: 'Horizontal' },
      { name: 'Level', type: 'enum', options: ['Medium', 'Low'], value: 'Medium' },
    ],
    render: (s) => {
      const color = s.Level === 'Low' ? 'var(--color-stroke-plain-shape-standard-m)' : 'var(--color-stroke-plain-shape-standard-l)';
      if (s.Direction === 'Vertical') return `<span class="ek-divider--v" style="border-left-color:${color}"></span>`;
      return `<div style="width:240px"><hr class="ek-divider" style="border-top-color:${color}"></div>`;
    },
  };

  // ---- Dropdown ----
  P['dropdown'] = {
    props: [
      { name: 'Open', type: 'bool', value: false },
      { name: 'Filled', type: 'bool', value: true },
      { name: 'Label', type: 'bool', value: true },
    ],
    render: (s) => {
      const isPh = !s.Filled;
      const face = s.Filled ? 'Lorem ipsum' : 'Lorem ipsum...';
      const opts = Array.from({ length: 5 }, () => '<div class="ek-opt">Lorem ipsum</div>').join('');
      return `<div class="ek-ddinput">
        ${s.Label ? '<span class="ek-ddinput__label">Lorem ipsum:</span>' : ''}
        <div class="ek-ddinput__row">
          <div class="ek-dropdown ${s.Open ? 'is-open' : ''}">
            <div class="ek-input ek-input--select">
              <span class="ek-ddinput__value ${isPh ? 'is-placeholder' : ''}">${face}</span>
              <span class="ek-ddinput__right"><span class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-ddinput__toggle">${chevron}</span></span>
            </div>
            <div class="ek-dropdown__menu">${opts}</div>
          </div>
        </div>
      </div>`;
    },
  };

  // ---- Dropdown input ----
  P['dropdown-input'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Active', 'Error', 'Disabled'], value: 'Default' },
      { name: 'Filled', type: 'bool', value: false },
      { name: 'Label', type: 'bool', value: true },
      { name: 'Left icon', type: 'bool', value: false },
      { name: 'Tooltip', type: 'bool', value: false },
      { name: 'Badge', type: 'bool', value: false },
      { name: 'Detail text', type: 'bool', value: false },
      { name: 'Mandatory', type: 'bool', value: false },
    ],
    render: (s) => {
      const err = s.State === 'Error';
      const open = s.State === 'Active';
      const lead = s['Left icon'] ? I.user : '';
      const isPh = !s.Filled;
      const face = s.Filled ? 'Lorem ipsum' : 'Lorem ipsum...';
      const label = s.Label
        ? `<span class="ek-ddinput__label">${s.Mandatory ? '<span class="ek-req">*</span>' : ''}Lorem ipsum:</span>`
        : '';
      const badge = s.Badge ? '<span class="ek-ddinput__badge"></span>' : '';
      const tip = s.Tooltip ? `<span class="ek-ddinput__tooltip">${I.info}</span>` : '';
      const detail = (s['Detail text'] || err)
        ? `<span class="ek-ddinput__detail ${err ? 'is-error' : ''}">Lorem ipsum sit amet.</span>`
        : '';
      return `<div class="ek-ddinput">
        ${label}
        <div class="ek-ddinput__row">
          <div class="ek-dropdown ${open ? 'is-open' : ''}">
            <div class="ek-input ek-input--select ${inputStateMod(s.State)}">
              ${lead}
              <span class="ek-ddinput__value ${isPh ? 'is-placeholder' : ''}">${face}</span>
              <span class="ek-ddinput__right">${badge}<span class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-ddinput__toggle">${chevron}</span></span>
            </div>
            <div class="ek-dropdown__menu"><div class="ek-opt">Lorem ipsum</div><div class="ek-opt">Dolor sit amet</div><div class="ek-opt">Consectetur</div></div>
          </div>
          ${tip}
        </div>
        ${detail}
      </div>`;
    },
  };

  // ---- Dropdown options ----
  P['dropdown-options'] = {
    props: [
      { name: 'Kind', type: 'enum', options: ['Single', 'Multi'], value: 'Single' },
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Disabled'], value: 'Default' },
      { name: 'Left icon', type: 'bool', value: false },
      { name: 'Badge', type: 'bool', value: false },
      { name: 'Button', type: 'bool', value: false },
      { name: 'Divider', type: 'bool', value: false },
    ],
    render: (s) => {
      const multi = s.Kind === 'Multi';
      const stateStyle = s.State === 'Hover' ? 'background:var(--color-fill-link-surface-standard-hover)' : (s.State === 'Disabled' ? 'opacity:.5;pointer-events:none' : '');
      const lead = s['Left icon'] ? I.user : '';
      const trailing = s.Badge ? '<span class="ek-badge ek-badge--dot" style="margin-left:auto"></span>' : '';
      const first = `<div class="ek-opt" style="${stateStyle}">${multi ? chk(true, '') : ''}${lead}<span>Option A</span>${trailing}</div>${s.Divider ? '<hr class="ek-divider">' : ''}`;
      const rest = ['Option B', 'Option C', 'Option D', 'Option E'].map(l => multi ? `<div class="ek-opt">${chk(false, l)}</div>` : `<div class="ek-opt">${l}</div>`).join('');
      const button = s.Button ? '<div class="ek-dropdown__foot"><button class="ek-btn ek-btn--primary">Apply</button></div>' : '';
      return `<div class="ek-dropdown__menu" style="width:280px">${first}${rest}${button}</div>`;
    },
  };

  // ---- File drop ----
  P['file-drop'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Dragging', 'Uploading', 'Upload failed default', 'Upload failed hover'], value: 'Default' },
      { name: 'Uploaded files', type: 'bool', value: false },
    ],
    render: (s) => {
      const S = {
        'Default': { cls: '', text: 'Upload or drag and drop', btn: 'Upload', btnCls: '' },
        'Hover': { cls: 'is-hover', text: 'Upload or drag and drop', btn: 'Upload', btnCls: 'is-hover' },
        'Dragging': { cls: 'is-dragging', text: 'Upload or drag and drop', btn: 'Upload', btnCls: 'is-disabled' },
        'Uploading': { cls: 'is-uploading', text: 'Uploading…', btn: 'Cancel', btnCls: '', bar: true },
        'Upload failed default': { cls: 'is-error', text: 'Upload failed', btn: 'Retry', btnCls: '', bar: true },
        'Upload failed hover': { cls: 'is-error is-hover', text: 'Upload failed', btn: 'Retry', btnCls: 'is-hover', bar: true },
      };
      const c = S[s.State] || S['Default'];
      const bar = c.bar ? '<div class="ek-filedrop__bar"><div class="ek-filedrop__bar-fill" style="width:73%"></div></div>' : '';
      const input = `<div class="ek-filedrop ${c.cls}"><span class="ek-filedrop__hint">${I.upload}<span class="ek-filedrop__text">${c.text}</span></span>${bar}<button class="ek-btn ek-btn--primary ${c.btnCls}">${c.btn}</button></div>`;
      const docs = s['Uploaded files'] ? `<div class="ek-filedrop__docs">${[0, 1, 2].map(() => `<div class="ek-filedrop__doc"><span class="ek-filedrop__doc-name">document-name.jpg</span><button class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm" aria-label="Remove">${I.closeXs}</button></div>`).join('')}</div>` : '';
      return `<div class="ek-filedrop-wrap">${input}${docs}</div>`;
    },
  };

  // ---- Image ----
  P['image'] = {
    props: [
      { name: 'Orientation', type: 'enum', options: ['Horizontal', 'Vertical'], value: 'Horizontal' },
      { name: 'Aspect ratio', type: 'enum', options: ['1:1', '5:4', '4:3', '3:2', '16:10', '16:9', '2:1', '21:9', 'Golden ratio'], value: '4:3' },
    ],
    render: (s) => {
      const map = { '1:1': '1/1', '5:4': '5/4', '4:3': '4/3', '3:2': '3/2', '16:10': '16/10', '16:9': '16/9', '2:1': '2/1', '21:9': '21/9', 'Golden ratio': '1.618/1' };
      let r = map[s['Aspect ratio']];
      if (s.Orientation === 'Vertical') { const p = r.split('/'); r = p[1] + '/' + p[0]; }
      const w = s.Orientation === 'Vertical' ? '150px' : '240px';
      return `<span class="ek-image" style="width:${w};aspect-ratio:${r}"><img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80" alt=""></span>`;
    },
  };

  // ---- Input field - Date selector ----
  P['input-field-date-selector'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Active', 'Error', 'Disabled'], value: 'Default' },
      { name: 'Filled', type: 'bool', value: false },
      { name: 'Label', type: 'bool', value: true },
      { name: 'Tooltip', type: 'bool', value: false },
      { name: 'Detail text', type: 'bool', value: false },
      { name: 'Mandatory', type: 'bool', value: false },
    ],
    render: (s) => {
      const stateCls = { Hover: 'is-hover', Active: 'is-active', Error: 'is-error', Disabled: 'is-disabled' }[s.State] || '';
      const dis = s.State === 'Disabled' ? ' disabled' : '';
      const seg = (mod, ph, max, val) => `<input class="ek-dateinput__seg ek-dateinput__seg--${mod}" inputmode="numeric" maxlength="${max}" placeholder="${ph}" value="${s.Filled ? val : ''}"${dis}>`;
      const input = `<div class="ek-dateinput ${stateCls}">${seg('dd', 'DD', 2, '09')}<span class="ek-dateinput__div"></span>${seg('mm', 'MM', 2, '09')}<span class="ek-dateinput__div"></span>${seg('yy', 'AAAA', 4, '2026')}</div>`;
      const tip = s.Tooltip ? `<span class="ek-ddinput__tooltip">${I.info}</span>` : '';
      const info = (s['Detail text'] || s.State === 'Error') ? `<span class="ek-datefield__info ${s.State === 'Error' ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : '';
      const label = s.Label ? `<span class="ek-datefield__label">${s.Mandatory ? '<span class="ek-req">*</span>' : ''}Lorem ipsum:</span>` : '';
      return `<div class="ek-datefield">${label}<div class="ek-datefield__row">${input}${tip}</div>${info}</div>`;
    },
  };

  // ---- Input field - Date range ----
  P['input-field-date-range'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Active', 'Error', 'Disabled'], value: 'Default' },
      { name: 'Filled', type: 'bool', value: false },
      { name: 'Label', type: 'bool', value: true },
      { name: 'Tooltip', type: 'bool', value: false },
      { name: 'Detail text', type: 'bool', value: false },
      { name: 'Mandatory', type: 'bool', value: false },
    ],
    render: (s) => {
      const stateCls = { Hover: 'is-hover', Active: 'is-active', Error: 'is-error', Disabled: 'is-disabled' }[s.State] || '';
      const dis = s.State === 'Disabled' ? ' disabled' : '';
      const seg = (mod, ph2, max, val) => `<input class="ek-dateinput__seg ek-dateinput__seg--${mod}" inputmode="numeric" maxlength="${max}" placeholder="${ph2}" value="${s.Filled ? val : ''}"${dis}>`;
      const one = (withTip) => {
        const input = `<div class="ek-dateinput ${stateCls}">${seg('dd', 'DD', 2, '09')}<span class="ek-dateinput__div"></span>${seg('mm', 'MM', 2, '09')}<span class="ek-dateinput__div"></span>${seg('yy', 'AAAA', 4, '2026')}</div>`;
        const tip = withTip ? `<span class="ek-ddinput__tooltip">${I.info}</span>` : '';
        const info = (s['Detail text'] || s.State === 'Error') ? `<span class="ek-datefield__info ${s.State === 'Error' ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : '';
        const label = s.Label ? `<span class="ek-datefield__label">${s.Mandatory ? '<span class="ek-req">*</span>' : ''}Lorem ipsum:</span>` : '';
        return `<div class="ek-datefield">${label}<div class="ek-datefield__row">${input}${tip}</div>${info}</div>`;
      };
      return `<div class="ek-daterange">${one(false)}${one(s.Tooltip)}</div>`;
    },
  };

  // ---- Input field - Password ----
  P['input-field-password'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Active', 'Error', 'Disabled'], value: 'Default' },
      { name: 'Filled', type: 'bool', value: false },
      { name: 'Label', type: 'bool', value: true },
      { name: 'Detail text', type: 'bool', value: false },
    ],
    render: (s) => {
      const stateCls = { Hover: 'is-hover', Active: 'is-active', Error: 'is-error', Disabled: 'is-disabled' }[s.State] || '';
      const label = s.Label ? '<span class="ek-datefield__label">Lorem ipsum:</span>' : '';
      const info = (s['Detail text'] || s.State === 'Error') ? `<span class="ek-datefield__info ${s.State === 'Error' ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : '';
      const val = s.Filled ? 'Lorem ipsum' : '';
      const dis = s.State === 'Disabled' ? ' disabled' : '';
      const n = val.length || 8; const w = n * 12 - 4; let c = ''; for (let i = 0; i < n; i++) c += `<circle cx="${4 + i * 12}" cy="4" r="4"/>`;
      const dotsSvg = `<svg width="${w}" height="8" viewBox="0 0 ${w} 8" fill="currentColor" aria-hidden="true">${c}</svg>`;
      const box = `<div class="ek-pwbox ${stateCls}"><span class="ek-pwbox__field"><input class="ek-pwbox__input" type="text" value="${val}"${dis}><span class="ek-pwbox__dots ${val ? '' : 'is-empty'}" aria-hidden="true">${dotsSvg}</span></span><button class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-pwbox__eye" data-ek-toggle-password type="button" aria-label="Show password"><span class="ek-pwbox__off">${I.eyeOff}</span><span class="ek-pwbox__on">${I.eye}</span></button></div>`;
      return `<div class="ek-datefield">${label}${box}${info}</div>`;
    },
  };

  // ---- Input field - Text ----
  P['input-field-text'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Active', 'Error', 'Disabled'], value: 'Default' },
      { name: 'Filled', type: 'bool', value: false },
      { name: 'Label', type: 'bool', value: true },
      { name: 'Detail text', type: 'bool', value: false },
      { name: 'Tooltip', type: 'bool', value: false },
      { name: 'Mandatory', type: 'bool', value: false },
    ],
    render: (s) => {
      const stateCls = { Hover: 'is-hover', Active: 'is-focus', Error: 'is-error', Disabled: 'is-disabled' }[s.State] || '';
      const dis = s.State === 'Disabled' ? ' disabled' : '';
      const val = s.Filled ? 'Lorem ipsum' : '';
      const label = s.Label ? `<span class="ek-datefield__label">${s.Mandatory ? '<span class="ek-req">*</span>' : ''}Lorem ipsum:</span>` : '';
      const info = (s['Detail text'] || s.State === 'Error') ? `<span class="ek-datefield__info ${s.State === 'Error' ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : '';
      const box = `<div class="ek-input ek-input--field ${stateCls}"><input type="text" value="${val}" placeholder="Lorem ipsum..."${dis}></div>`;
      const tip = s.Tooltip ? `<span class="ek-ddinput__tooltip">${I.info}</span>` : '';
      return `<div class="ek-datefield ek-datefield--text">${label}<div class="ek-datefield__row">${box}${tip}</div>${info}</div>`;
    },
  };

  // ---- Input field - Text area ----
  P['input-field-text-area'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Active', 'Error', 'Disabled'], value: 'Default' },
      { name: 'Filled', type: 'bool', value: false },
      { name: 'Label', type: 'bool', value: true },
      { name: 'Detail text', type: 'bool', value: false },
      { name: 'Word count', type: 'bool', value: false },
      { name: 'Mandatory', type: 'bool', value: false },
    ],
    render: (s) => {
      const stateCls = { Hover: 'is-hover', Active: 'is-focus', Error: 'is-error', Disabled: 'is-disabled' }[s.State] || '';
      const dis = s.State === 'Disabled' ? ' disabled' : '';
      const val = s.Filled ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' : '';
      const label = s.Label ? `<span class="ek-datefield__label">${s.Mandatory ? '<span class="ek-req">*</span>' : ''}Lorem ipsum:</span>` : '';
      const box = `<div class="ek-input ek-textarea ${stateCls}"><textarea placeholder="Lorem ipsum..."${dis}>${val}</textarea></div>`;
      const err = s.State === 'Error';
      const footer = (s['Detail text'] || s['Word count'] || err)
        ? `<div class="ek-taarea__footer">${(s['Detail text'] || err) ? `<span class="ek-datefield__info ${err ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : ''}${s['Word count'] ? `<span class="ek-taarea__count">${val.length}/100</span>` : ''}</div>`
        : '';
      return `<div class="ek-datefield ek-datefield--area">${label}${box}${footer}</div>`;
    },
  };

  // ---- Label ----
  P['label'] = {
    props: [
      { name: 'Kind', type: 'enum', options: ['Neutral', 'Info', 'Alert', 'Error', 'Success'], value: 'Neutral' },
      { name: 'Badge', type: 'bool', value: true },
    ],
    render: (s) => {
      const kind = s.Kind === 'Neutral' ? '' : 'ek-label--' + s.Kind.toLowerCase();
      const cls = ['ek-label']; if (kind) cls.push(kind);
      return `<span class="${cls.join(' ')}">${s.Badge ? '<span class="ek-label__dot"></span>' : ''}Lorem ipsum</span>`;
    },
  };

  // ---- Pagination ----
  P['pagination'] = {
    props: [
      { name: 'Pages', type: 'enum', options: ['3', '4', '5'], value: '4' },
      { name: 'Previous', type: 'bool', value: true },
      { name: 'Next', type: 'bool', value: true },
      { name: 'Ellipsis', type: 'bool', value: false },
    ],
    render: (s) => {
      const n = parseInt(s.Pages, 10);
      let pages = '';
      for (let i = 1; i <= n; i++) pages += `<span class="ek-page ${i === 1 ? 'is-on' : ''}">${i}</span>`;
      const prev = s.Previous ? `<span class="ek-page">${chevronLeftSm}</span>` : '';
      const next = s.Next ? `<span class="ek-page">${chevronRightSm}</span>` : '';
      const ell = s.Ellipsis ? `<span class="ek-page ek-page--ellipsis">…</span><span class="ek-page">12</span>` : '';
      return `<div class="ek-pagination">${prev}${pages}${ell}${next}</div>`;
    },
  };

  // ---- PIN code ----
  P['pin-code'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Active', 'Error', 'Disabled'], value: 'Default' },
      { name: 'Filled', type: 'bool', value: false },
    ],
    render: (s) => {
      const dis = s.State === 'Disabled' ? ' disabled' : '';
      const cell = (i) => {
        const cls = ['ek-pin__cell'];
        if (s.State === 'Error' || s.State === 'Disabled') cls.push(s.State === 'Error' ? 'is-error' : 'is-disabled');
        else if (i === 0 && s.State === 'Hover') cls.push('is-hover');
        else if (i === 0 && s.State === 'Active') cls.push('is-active');
        if (s.Filled) cls.push('is-filled');
        return `<div class="${cls.join(' ')}"><input inputmode="numeric" maxlength="1" value="${s.Filled ? '1' : ''}"${dis}><span class="ek-pin__dot"></span></div>`;
      };
      return `<div class="ek-pin">${[0, 1, 2, 3].map(cell).join('')}</div>`;
    },
  };

  // ---- Pills group ----
  P['pill'] = {
    props: [
      { name: 'Selected', type: 'bool', value: false },
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Disabled'], value: 'Default' },
    ],
    render: (s) => {
      const cls = ['ek-pill'];
      if (s.Selected) cls.push('is-on');
      if (s.State === 'Hover') cls.push('is-hover');
      if (s.State === 'Disabled') cls.push('is-disabled');
      return `<div class="ek-pills"><span class="${cls.join(' ')}">Design</span></div>`;
    },
  };

  P['pills-group'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Disabled'], value: 'Default' },
      { name: 'Pills', type: 'enum', options: ['1', '2', '3', '4', '5', '6', '7', '8'], value: '4' },
    ],
    render: (s) => {
      const n = parseInt(s.Pills, 10);
      const labels = ['All', 'Design', 'Product', 'Engineering', 'Marketing', 'Sales', 'Support', 'Finance'];
      const stateCls = { Hover: 'is-hover', Disabled: 'is-disabled' }[s.State] || '';
      let out = '';
      for (let i = 0; i < n; i++) {
        const cls = ['ek-pill'];
        if (i === 0) cls.push('is-on');
        if (i === 0 && stateCls) cls.push(stateCls);
        out += `<span class="${cls.join(' ')}">${labels[i]}</span>`;
      }
      return `<div class="ek-pills">${out}</div>`;
    },
  };

  // ---- Placeholder ----
  P['placeholder'] = {
    props: [
      { name: 'Text', type: 'bool', value: true },
    ],
    render: (s) => `<span class="ek-placeholder" style="width:220px;height:110px">${s.Text ? 'Replace this content' : ''}</span>`,
  };

  // ---- Radio buttons group ----
  P['radio-buttons-group'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Disabled'], value: 'Default' },
      { name: 'Label', type: 'bool', value: true },
      { name: 'Selected', type: 'bool', value: false },
    ],
    render: (s) => {
      const stateCls = s.State === 'Hover' ? 'is-hover' : s.State === 'Disabled' ? 'is-disabled' : '';
      const radio = (on, cls, label) => `<span class="ek-radio ${on ? 'is-on' : ''} ${cls}"><span class="ek-radio__dot"></span><span>${label}</span></span>`;
      const items = [radio(s.Selected, stateCls, 'Option one'), radio(false, '', 'Option two'), radio(false, '', 'Option three')];
      return `<div class="ek-check-group">${s.Label ? '<span class="ek-group-label">Choose one</span>' : ''}${items.join('')}</div>`;
    },
  };

  // ---- Rating ----
  P['rating'] = {
    props: [
      { name: 'Stars', type: 'enum', options: ['0', '1', '2', '3', '4', '5'], value: '4' },
    ],
    render: (s) => EK_BUILD.rating(parseInt(s.Stars, 10)),
  };

  // ---- Search field ----
  P['search-field'] = {
    props: [
      { name: 'State', type: 'enum', options: ['Default', 'Hover', 'Active', 'Error', 'Disabled'], value: 'Default' },
      { name: 'Filled', type: 'bool', value: false },
      { name: 'Button', type: 'bool', value: true },
    ],
    render: (s) => EK_BUILD.searchField({ value: s.Filled ? 'Design system' : '', mod: inputStateMod(s.State), disabled: s.State === 'Disabled', button: s.Button }),
  };


  window.ERAIKI_PLAYGROUNDS = P;
})();
