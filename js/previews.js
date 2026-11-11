/* ==========================================================================
   Eraiki DS — live component previews.
   Each entry returns an array of variant blocks: {title, opts, html, stage}
   ========================================================================== */
(function () {
  // ---- inline line-icons (20px / 1.5 stroke via .ek-ic) ----
  const I = window.EK_ICONS; // canonical icon set (js/icons.js)
  const star = (empty, val, extra) => EK_BUILD.star(empty, val, extra);
  const ratingWidget = (n) => EK_BUILD.rating(n);

  const specimen = (label, html) => `<div class="specimen">${html}</div>`;
  const img = 'https://i.pravatar.cc/128?img=';

  // helper components
  const btn = (level, label, mod = '') => `<button class="ek-btn ek-btn--${level} ${mod}">${label}</button>`;
  const avatar = (size, kind, n) => {
    let inner = 'E';
    if (kind === 'image') inner = `<img src="${img}${n||12}" alt="">`;
    else if (kind === 'placeholder') inner = `<span class="ek-ic ek-avatar__ph">${I.user}</span>`;
    return `<span class="ek-avatar ek-avatar--${size}">${inner}</span>`;
  };

  const P = {};

  P['button'] = () => ([
    { title: 'Levels', opts: 'Primary · Secondary · Tertiary', html:
      `${specimen('Primary', btn('primary','Button'))}${specimen('Secondary', btn('secondary','Button'))}${specimen('Tertiary', btn('tertiary','Button'))}` },
    { title: 'Sizes', opts: 'Small · Medium', html:
      `${specimen('Medium', btn('primary','Button'))}${specimen('Small', btn('primary','Button','ek-btn--sm'))}` },
    { title: 'Kinds', opts: 'Only text · Left icon · Right icon · Only icon', html:
      `${specimen('Only text', btn('primary','Save'))}
       ${specimen('Left icon', `<button class="ek-btn ek-btn--primary ek-btn--icon-left">${I.plus}Add</button>`)}
       ${specimen('Right icon', `<button class="ek-btn ek-btn--primary ek-btn--icon-right">Next${I.chevronRight}</button>`)}
       ${specimen('Only icon', `<button class="ek-btn ek-btn--primary ek-btn--icon">${I.plus}</button>`)}` },
    { title: 'States', opts: 'Default · Hover · Disabled', html:
      `${specimen('Default', btn('primary','Button'))}${specimen('Disabled', btn('primary','Button','is-disabled'))}` },
  ]);

  P['buttons-group'] = () => ([
    { title: 'Horizontal', opts: 'primary · secondary · tertiary', html:
      `<div class="ek-btn-group">
        <button class="ek-btn ek-btn--primary">Confirm</button>
        <button class="ek-btn ek-btn--secondary">Cancel</button>
        <button class="ek-btn ek-btn--tertiary">Skip</button>
      </div>` },
    { title: 'Vertical', opts: '', html:
      `<div class="ek-btn-group ek-btn-group--vertical">
        <button class="ek-btn ek-btn--primary">Confirm</button>
        <button class="ek-btn ek-btn--secondary">Cancel</button>
        <button class="ek-btn ek-btn--tertiary">Skip</button>
      </div>` },
  ]);

  P['badge'] = () => ([
    { title: 'Kinds', opts: 'Dot · Number', html:
      `${specimen('Dot', '<span class="ek-badge ek-badge--dot"></span>')}
       ${specimen('Number', '<span class="ek-badge">3</span>')}` },
    { title: 'Colors', opts: 'accent · error · info · success · alert', html:
      `<span class="ek-badge">1</span><span class="ek-badge ek-badge--error">2</span><span class="ek-badge ek-badge--info">3</span><span class="ek-badge ek-badge--success">4</span><span class="ek-badge ek-badge--alert">5</span>` },
    { title: 'On an element', opts: '', html:
      `<span style="position:relative;display:inline-block">
        <button class="ek-btn ek-btn--secondary ek-btn--icon">${I.info}</button>
        <span class="ek-badge ek-badge--error" style="position:absolute;top:-6px;right:-6px">5</span>
      </span>` },
  ]);

  P['avatar'] = () => ([
    { title: 'Kinds', opts: 'Image · Initials · Placeholder', html:
      `${specimen('Image', avatar('md','image',5))}${specimen('Initials', avatar('md','initials'))}${specimen('Placeholder', avatar('md','placeholder'))}` },
    { title: 'Sizes', opts: 'Small · Medium · Large', html:
      `${specimen('Small', avatar('sm','image',8))}${specimen('Medium', avatar('md','image',8))}${specimen('Large', avatar('lg','image',8))}` },
    { title: 'Show badge', opts: 'On', html:
      `<span class="ek-avatar ek-avatar--lg">${'<img src="'+img+'15" alt="">'}<span class="ek-badge ek-badge--success ek-badge--dot ek-avatar__badge"></span></span>` },
  ]);

  P['avatar-group'] = () => ([
    { title: 'Sizes', opts: 'Small · Medium', html:
      `${specimen('Small', `<span class="ek-avatar-group">${avatar('sm','image',1)}${avatar('sm','image',2)}${avatar('sm','image',3)}<span class="ek-avatar ek-avatar--sm">+3</span></span>`)}
       ${specimen('Medium', `<span class="ek-avatar-group">${avatar('md','image',1)}${avatar('md','image',2)}${avatar('md','image',3)}<span class="ek-avatar ek-avatar--md">+5</span></span>`)}` },
  ]);

  P['switch'] = () => ([
    { title: 'States', opts: 'Off · On · Disabled', html:
      `${specimen('Off', '<span class="ek-switch"><span class="ek-switch__track"></span></span>')}
       ${specimen('On', '<span class="ek-switch is-on"><span class="ek-switch__track"></span></span>')}
       ${specimen('Disabled', '<span class="ek-switch is-disabled"><span class="ek-switch__track"></span></span>')}` },
    { title: 'With label', opts: '', html:
      `<span class="ek-switch is-on"><span class="ek-switch__track"></span><span>Email notifications</span></span>` },
  ]);

  const check = (state, label) => `<span class="ek-check ${state}"><span class="ek-check__box">${I.check.replace('ek-ic','')}</span>${label?`<span>${label}</span>`:''}</span>`;
  P['checkbox'] = () => ([
    { title: 'States', opts: 'Unchecked · Checked · Indeterminate · Disabled', html:
      `${specimen('Unchecked', check('',''))}${specimen('Checked', check('is-on',''))}${specimen('Indeterminate', check('is-indeterminate',''))}${specimen('Disabled', check('is-on is-disabled',''))}` },
    { title: 'With label', opts: '', html: check('is-on','I accept the terms') },
  ]);
  P['checkbox-group'] = () => ([
    { title: 'Group', opts: 'shared label + items', html:
      `<div class="ek-check-group"><span class="ek-group-label">Lorem ipsum:</span>
        ${check('is-on','Lorem ipsum')}${check('','Lorem ipsum')}${check('is-on','Lorem ipsum')}${check('','Lorem ipsum')}</div>` },
  ]);

  const radio = (state, label) => `<span class="ek-radio ${state}"><span class="ek-radio__dot"></span>${label?`<span>${label}</span>`:''}</span>`;
  P['radio-buttons-group'] = () => ([
    { title: 'States', opts: 'Selected · Unselected · Disabled', html:
      `${specimen('Selected', radio('is-on',''))}${specimen('Unselected', radio('',''))}${specimen('Disabled', radio('is-disabled',''))}` },
    { title: 'Group', opts: '', html:
      `<div class="ek-check-group"><span class="ek-group-label">Plan</span>
        ${radio('is-on','Monthly')}${radio('','Yearly')}${radio('','Lifetime')}</div>` },
  ]);

  // ---- inputs ----
  const field = (label, inputHtml, hint, hintCls) =>
    `<div class="ek-field"><span class="ek-field__label">${label}</span>${inputHtml}${hint?`<span class="ek-field__hint ${hintCls||''}">${hint}</span>`:''}</div>`;
  const textInput = (ph, val, mod) => `<div class="ek-input ${mod||''}"><input placeholder="${ph}" value="${val||''}"></div>`;

  // Dropdown input: a form-field SELECT trigger (non-editable value, opens the options menu).
  const ddOptions = (n = 5) => `<div class="ek-dropdown__menu">${Array.from({ length: n }, () => '<div class="ek-opt">Lorem ipsum</div>').join('')}</div>`;
  const ddInput = (o = {}) => {
    const { label = true, mand = false, icon = false, badge = false, tooltip = false,
            detail = false, filled = true, state = '', open = false, full = false, menu = true } = o;
    const err = state === 'is-error';
    const isPh = !filled;
    const face = filled ? 'Lorem ipsum' : 'Lorem ipsum...';
    return `<div class="ek-ddinput ${full ? 'ek-ddinput--full' : ''}">
      ${label ? `<span class="ek-ddinput__label">${mand ? '<span class="ek-req">*</span>' : ''}Lorem ipsum:</span>` : ''}
      <div class="ek-ddinput__row">
        <div class="ek-dropdown ${open ? 'is-open' : ''}">
          <div class="ek-input ek-input--select ${state}">
            ${icon ? I.user : ''}
            <span class="ek-ddinput__value ${isPh ? 'is-placeholder' : ''}">${face}</span>
            <span class="ek-ddinput__right">${badge ? '<span class="ek-ddinput__badge"></span>' : ''}<span class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-ddinput__toggle">${I.chevronDown}</span></span>
          </div>
          ${menu ? ddOptions(5) : ''}
        </div>
        ${tooltip ? `<span class="ek-ddinput__tooltip">${I.info}</span>` : ''}
      </div>
      ${(detail || err) ? `<span class="ek-ddinput__detail ${err ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : ''}
    </div>`;
  };
  const ddSelector = (o = {}) => ddInput(Object.assign({}, o, { menu: false }));

  // Plain text field — shared field chrome (.ek-datefield) + a 40px .ek-input--field box (functional).
  const textField = (o = {}) => {
    const { label = true, mand = false, tooltip = false, info = false, state = '', filled = false, width, full } = o;
    const stateCls = { Hover: 'is-hover', Active: 'is-focus', Error: 'is-error', Disabled: 'is-disabled' }[state] || '';
    const dis = state === 'Disabled' ? ' disabled' : '';
    const box = `<div class="ek-input ek-input--field ${stateCls}"><input type="text" value="${filled ? 'Lorem ipsum' : ''}" placeholder="Lorem ipsum..."${dis}></div>`;
    const tip = tooltip ? `<span class="ek-ddinput__tooltip">${I.info}</span>` : '';
    return `<div class="ek-datefield ek-datefield--text ${full ? 'ek-datefield--full' : ''}"${width ? ` style="width:${width}"` : ''}>
      ${label ? `<span class="ek-datefield__label">${mand ? '<span class="ek-req">*</span>' : ''}Lorem ipsum:</span>` : ''}
      <div class="ek-datefield__row">${box}${tip}</div>
      ${(info || state === 'Error') ? `<span class="ek-datefield__info ${state === 'Error' ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : ''}
    </div>`;
  };
  P['input-field-text'] = () => ([
    { title: 'Text field', opts: 'label · value · detail', html: textField({ filled: true, info: true }), stage:'stage--start' },
  ]);
  // Text area — shared field chrome + multi-line .ek-textarea box + footer (info + word count).
  const textArea = (o = {}) => {
    const { label = true, mand = false, info = false, count = false, state = '', filled = false, width, height, full } = o;
    const stateCls = { Hover: 'is-hover', Active: 'is-focus', Error: 'is-error', Disabled: 'is-disabled' }[state] || '';
    const dis = state === 'Disabled' ? ' disabled' : '';
    const val = filled ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' : '';
    const taStyle = height ? ` style="min-height:${height}"` : '';
    const box = `<div class="ek-input ek-textarea ${stateCls}"><textarea placeholder="Lorem ipsum..."${dis}${taStyle}>${val}</textarea></div>`;
    const footer = (info || count || state === 'Error')
      ? `<div class="ek-taarea__footer">${(info || state === 'Error') ? `<span class="ek-datefield__info ${state === 'Error' ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : ''}${count ? `<span class="ek-taarea__count">${val.length}/100</span>` : ''}</div>`
      : '';
    return `<div class="ek-datefield ek-datefield--area ${full ? 'ek-datefield--full' : ''}"${width ? ` style="width:${width}"` : ''}>
      ${label ? `<span class="ek-datefield__label">${mand ? '<span class="ek-req">*</span>' : ''}Lorem ipsum:</span>` : ''}
      ${box}${footer}
    </div>`;
  };
  P['input-field-text-area'] = () => ([
    { title: 'Text area', opts: 'label · value · detail · word count', html: textArea({ filled: true, info: true, count: true }), stage:'stage--start' },
  ]);
  // Masked-value dots as a single SVG (8px circles, 4px gap) — matches the Figma "Password" frame.
  const pwDots = (n = 8) => {
    const w = n * 12 - 4;
    let c = '';
    for (let i = 0; i < n; i++) c += `<circle cx="${4 + i * 12}" cy="4" r="4"/>`;
    return `<svg width="${w}" height="8" viewBox="0 0 ${w} 8" fill="currentColor" aria-hidden="true">${c}</svg>`;
  };
  // Password field: masked dots + reveal (eye) toggle; label + info follow the shared field chrome.
  const pwField = (o = {}) => {
    const { label = true, info = false, state = '', filled = false } = o;
    const stateCls = { Hover: 'is-hover', Active: 'is-active', Error: 'is-error', Disabled: 'is-disabled' }[state] || '';
    const val = filled ? 'Lorem ipsum' : '';
    const dis = state === 'Disabled' ? ' disabled' : '';
    const dots = `<span class="ek-pwbox__dots ${val ? '' : 'is-empty'}" aria-hidden="true">${pwDots(val.length || 8)}</span>`;
    const box = `<div class="ek-pwbox ${stateCls}"><span class="ek-pwbox__field"><input class="ek-pwbox__input" type="text" value="${val}"${dis}>${dots}</span><button class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-pwbox__eye" data-ek-toggle-password type="button" aria-label="Show password"><span class="ek-pwbox__off">${I.eyeOff}</span><span class="ek-pwbox__on">${I.eye}</span></button></div>`;
    return `<div class="ek-datefield">${label ? '<span class="ek-datefield__label">Lorem ipsum:</span>' : ''}${box}${(info || state === 'Error') ? `<span class="ek-datefield__info ${state === 'Error' ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : ''}</div>`;
  };
  P['input-field-password'] = () => ([
    { title: 'Password', opts: 'masked value · reveal toggle', html: pwField({ filled: true, info: true }), stage:'stage--start' },
  ]);
  P['input-field-date-selector'] = () => ([
    { title: 'Date selector', opts: 'label · DD | MM | AAAA · detail', html:
      dateField({ filled: true, info: true }), stage:'stage--start' },
  ]);
  // Shared calendar builder (overview, date-range input and per-state docs)
  const buildCalendar = (o) => {
    o = o || {};
    const YEAR = 2026, MONTH = 6; // July 2026
    const chevL = I.chevronRight.replace('M8 5l5 5-5 5', 'M12 5l-5 5 5 5');
    const dow = ['M','T','W','T','F','S','S'].map(d => `<span class="ek-calendar__dow">${d}</span>`).join('');
    const days = window.EK.calendarDays(YEAR, MONTH, o);
    const label = window.EK.monthLabel(YEAR, MONTH, !!o.year);
    const yearSel = o.year ? window.EK.yearField(YEAR) : '';
    const head = `<div class="ek-calendar__head"><span class="ek-btn ek-btn--tertiary ek-btn--icon" data-cal-nav="-1">${chevL}</span><span class="ek-calendar__label">${label}</span><span class="ek-btn ek-btn--tertiary ek-btn--icon" data-cal-nav="1">${I.chevronRight}</span></div>`;
    const button = o.button ? `<button class="ek-btn ek-btn--primary ek-btn--sm" style="width:100%;margin-top:var(--spacing-m)">Apply</button>` : '';
    const mode = (o.range || o.preview) ? 'range' : 'single';
    return `<div class="ek-calendar" data-cal-year="${YEAR}" data-cal-month="${MONTH}" data-cal-mode="${mode}"${o.year?' data-cal-monthonly="1"':''}${o.style?` style="${o.style}"`:''}>${yearSel}${head}<div class="ek-calendar__grid">${dow}${days}</div>${button}</div>`;
  };

  // A single segmented date field (DD | MM | AAAA) — the Date selector, and each half of a Date range.
  const dateField = (o = {}) => {
    const { label = true, mand = false, tooltip = false, info = false, state = '', filled = false, width, full } = o;
    const stateCls = { Hover: 'is-hover', Active: 'is-active', Error: 'is-error', Disabled: 'is-disabled' }[state] || '';
    const dis = state === 'Disabled' ? ' disabled' : '';
    const seg = (mod, ph2, max, val) => `<input class="ek-dateinput__seg ek-dateinput__seg--${mod}" inputmode="numeric" maxlength="${max}" placeholder="${ph2}" value="${filled ? val : ''}"${dis}>`;
    const input = `<div class="ek-dateinput ${stateCls}">${seg('dd', 'DD', 2, '09')}<span class="ek-dateinput__div"></span>${seg('mm', 'MM', 2, '09')}<span class="ek-dateinput__div"></span>${seg('yy', 'AAAA', 4, '2026')}</div>`;
    return `<div class="ek-datefield ${full ? 'ek-datefield--full' : ''}"${width ? ` style="width:${width}"` : ''}>
      ${label ? `<span class="ek-datefield__label">${mand ? '<span class="ek-req">*</span>' : ''}Lorem ipsum:</span>` : ''}
      <div class="ek-datefield__row">${input}${tooltip ? `<span class="ek-ddinput__tooltip">${I.info}</span>` : ''}</div>
      ${(info || state === 'Error') ? `<span class="ek-datefield__info ${state === 'Error' ? 'is-error' : ''}">Lorem ipsum sit amet.</span>` : ''}
    </div>`;
  };
  // Two date fields side by side; a single tooltip sits at the far right, next to the last input.
  const dateRange = (o = {}) => {
    const f = { label: o.label, mand: o.mand, info: o.info, state: o.state, filled: o.filled };
    return `<div class="ek-daterange ${o.full ? 'ek-daterange--full' : ''}"${o.width ? ` style="width:${o.width}"` : ''}>${dateField({ ...f, tooltip: false })}${dateField({ ...f, tooltip: o.tooltip })}</div>`;
  };
  P['input-field-date-range'] = () => ([
    { title: 'Date range', opts: 'start + end · segmented', html: dateRange({ filled: true, info: true }), stage:'stage--start' },
  ]);
  P['search-field'] = () => ([
    { title: 'Search field', opts: 'field + optional button', html: EK_BUILD.searchField({ button: true }), stage:'stage--start' },
  ]);

  P['dropdown'] = () => ([
    { title: 'Closed', opts: 'trigger at rest', html: ddInput({ label: true, filled: true }), stage:'stage--start' },
    { title: 'Open', opts: 'trigger + options', html: ddInput({ label: true, filled: true, open: true }), stage:'stage--start' },
  ]);
  P['dropdown-input'] = () => ([
    { title: 'Dropdown input', opts: 'label · value · detail', html:
      ddInput({ label: true, detail: true, filled: true, menu: false }), stage:'stage--start' },
  ]);
  P['dropdown-options'] = () => ([
    { title: 'Option kinds', opts: 'Plain · Selected · With icon · With badge · Multi', html:
      `<div class="ek-dropdown__menu" style="width:280px">
        <div class="ek-opt">Plain option</div>
        <div class="ek-opt is-selected">Selected</div>
        <div class="ek-opt">${I.user}With icon</div>
        <div class="ek-opt">With badge<span class="ek-badge ek-badge--dot" style="margin-left:auto"></span></div>
        <div class="ek-opt">${check('is-on','')}Multi-select item</div>
      </div>`, stage:'stage--start' },
  ]);

  P['divider'] = () => ([
    { title: 'Orientations', opts: 'Horizontal · Vertical', html:
      `<div style="width:200px"><hr class="ek-divider"></div><span class="ek-divider--v"></span>`, stage:'stage--center' },
    { title: 'With label', opts: '', html:
      `<div style="width:280px"><span class="ek-divider-label">OR</span></div>`, stage:'stage--center' },
  ]);

  // Label chip: optional badge dot + text, tinted per kind.
  const label = (kind, o = {}) => {
    const { badge = true, text = 'Lorem ipsum', fill = false } = o;
    const cls = ['ek-label']; if (kind) cls.push('ek-label--' + kind); if (fill) cls.push('ek-label--fill');
    return `<span class="${cls.join(' ')}">${badge ? '<span class="ek-label__dot"></span>' : ''}${text}</span>`;
  };
  P['label'] = () => ([
    { title: 'Kinds', opts: 'Neutral · Info · Alert · Error · Success', html:
      `${label('', { text: 'Neutral' })}${label('info', { text: 'Info' })}${label('alert', { text: 'Alert' })}${label('error', { text: 'Error' })}${label('success', { text: 'Success' })}` },
  ]);

  const pill = (label, mod) => `<span class="ek-pill ${mod || ''}">${label}</span>`;
  P['pill'] = () => ([
    { title: 'Pill', opts: 'accent-outline · selected fill', html:
      `<div class="ek-pills">${pill('Selected', 'is-on')}${pill('Default')}</div>` },
  ]);
  P['pills-group'] = () => ([
    { title: 'Pills group', opts: 'accent-outline · selected fill', html:
      `<div class="ek-pills">${pill('All', 'is-on')}${pill('Design')}${pill('Engineering')}${pill('Product')}</div>` },
  ]);

  P['banner'] = () => {
    const b = (mod, ico, title, body) => `<div class="ek-banner ek-banner--${mod}"><span class="ek-banner__ico">${ico}</span><div><div class="ek-banner__title">${title}</div><div class="ek-banner__body">${body}</div></div></div>`;
    return [{ title: 'Kinds', opts: 'Info · Success · Alert · Error', stage:'stage--col stage--tight', html:
      `${b('info',I.info,'Heads up','A new version is available.')}
       ${b('success',I.success,'Saved','Your changes were saved successfully.')}
       ${b('alert',I.alert,'Check this','Your trial ends in 3 days.')}
       ${b('error',I.error,'Something went wrong','We couldn’t process your request.')}` }];
  };

  P['breadcrumb'] = () => ([
    { title: 'Breadcrumb', opts: '', html:
      `<nav class="ek-crumb"><a href="#">Level 1</a><span class="ek-crumb__sep"></span><a href="#">Level 2</a><span class="ek-crumb__sep"></span><span class="ek-crumb__cur">Level 3</span></nav>`, stage:'stage--start' },
  ]);

  P['tabs-group-desktop'] = () => ([
    { title: 'Tabs — Desktop', opts: 'segmented · single select', html:
      `<div class="ek-tabs"><span class="ek-tab is-on">Overview</span><span class="ek-tab">Activity</span><span class="ek-tab">Settings</span><span class="ek-tab">Billing</span></div>`, stage:'stage--start' },
  ]);
  const tabmBox = (selected, open, opts) => EK_BUILD.tabm({ selected, open, opts });
  P['tabs-group-mobile'] = () => ([
    { title: 'Tabs — Mobile', opts: 'collapsible selector', html:
      `${specimen('Collapsed', tabmBox('Home', false))}${specimen('Open', tabmBox('Home', true))}`, stage:'stage--start' },
  ]);

  const tooltip = (pos, open) => EK_BUILD.tooltip({ pos, open });
  P['tooltip'] = () => ([
    { title: 'Tooltip', opts: 'hover the trigger', html: tooltip('top', false), stage:'stage--center' },
  ]);

  const chevLeft = I.chevronRight.replace('M8 5l5 5-5 5', 'M12 5l-5 5 5 5');
  const pgItem = (c, mod) => `<span class="ek-page ${mod || ''}">${c}</span>`;
  const pgWrap = (inner) => `<div class="ek-pagination">${inner}</div>`;
  P['pagination'] = () => ([
    { title: 'Pagination', opts: 'nav · pages · ellipsis', html:
      pgWrap(`${pgItem(chevLeft)}${pgItem('1', 'is-on')}${pgItem('2')}${pgItem('3')}${pgItem('…', 'ek-page--ellipsis')}${pgItem('12')}${pgItem(I.chevronRight)}`), stage:'stage--center' },
  ]);

  // PIN cell: functional single-char input, masked as an 8px dot when filled.
  const pinCell = (o = {}) => {
    const { state = '', filled = false, active = false } = o;
    const cls = ['ek-pin__cell'];
    const sc = { Hover: 'is-hover', Error: 'is-error', Disabled: 'is-disabled' }[state];
    if (sc) cls.push(sc);
    if (active) cls.push('is-active');
    if (filled) cls.push('is-filled');
    const dis = state === 'Disabled' ? ' disabled' : '';
    return `<div class="${cls.join(' ')}"><input inputmode="numeric" maxlength="1" value="${filled ? '1' : ''}"${dis}><span class="ek-pin__dot"></span></div>`;
  };
  const pinRow = (cells) => `<div class="ek-pin">${cells}</div>`;
  P['pin-code'] = () => ([
    { title: 'PIN code', opts: 'masked dots · auto-advance', html:
      pinRow(pinCell({ filled: true }) + pinCell({ filled: true }) + pinCell({ active: true }) + pinCell({})), stage:'stage--center' },
  ]);

  P['rating'] = () => ([
    { title: 'Rating', opts: '0–5 stars', html:
      `${specimen('4 / 5', ratingWidget(4))}${specimen('2 / 5', ratingWidget(2))}` },
  ]);

  // cells
  const cell = (mod, extra) => `<div class="ek-cell ${mod||''}">${avatar('md','image',20)}<div class="ek-cell__body"><div class="ek-cell__title">Jane Doe</div><div class="ek-cell__sub">jane@eraiki.com</div></div>${extra||''}</div>`;
  P['cell-plain'] = () => ([{ title: 'Cell — Plain', opts: '', stage:'stage--start', html: `<div class="ek-cell-plain"><span class="ek-cell-plain__content">Lorem ipsum</span></div>` }]);
  P['cell-linkable'] = () => ([{ title: 'Cell — Linkable', opts: '', stage:'stage--start', html: `<div class="ek-cell-linkable"><span class="ek-cell-linkable__content">Lorem</span></div>` }]);
  P['cell-featured'] = () => ([{ title: 'Cell — Featured', opts: '', stage:'stage--start', html: `<div class="ek-cell-featured"><span class="ek-cell-featured__value">Lorem ipsum</span></div>` }]);
  P['cells-row'] = () => ([{ title: 'Cells row', opts: '', stage:'stage--start', html:
    `<div class="ek-cells-row" style="width:100%">${['Lorem','Lorem','Lorem','Lorem'].map(t=>`<div class="ek-cell-plain"><span class="ek-cell-plain__content">${t}</span></div>`).join('')}</div>` }]);

  P['card-product'] = () => ([{ title: 'Card — Product', opts: '', stage:'stage--start', html: card({ label: true, colors: true }) }]);

  P['accordion'] = () => ([{ title: 'Accordion', opts: 'Open · Closed items', stage:'stage--start', html:
    `<div class="ek-accordion">
      <div class="ek-accordion__item is-open"><div class="ek-accordion__head"><span class="ek-accordion__title">What is Eraiki DS?</span><span class="ek-btn ek-btn--tertiary ek-btn--sm ek-btn--icon">${I.chevronDown}</span></div><div class="ek-accordion__body">A design system that unifies foundations, components and patterns.</div></div>
      <div class="ek-accordion__item"><div class="ek-accordion__head"><span class="ek-accordion__title">How do I use the tokens?</span><span class="ek-btn ek-btn--tertiary ek-btn--sm ek-btn--icon">${I.chevronDown}</span></div></div>
      <div class="ek-accordion__item"><div class="ek-accordion__head"><span class="ek-accordion__title">Is dark mode supported?</span><span class="ek-btn ek-btn--tertiary ek-btn--sm ek-btn--icon">${I.chevronDown}</span></div></div>
    </div>` }]);

  P['calendar'] = () => ([{ title: 'Calendar', opts: 'month + single day', stage:'stage--start', html: buildCalendar({ selected: 12 }) }]);

  // File drop: white box, solid border, icon + hint + Upload button, optional uploaded-docs list.
  const fileDrop = (o = {}) => {
    const S = {
      'Default': { cls: '', text: 'Upload or drag and drop', btn: 'Upload', btnCls: '' },
      'Hover': { cls: 'is-hover', text: 'Upload or drag and drop', btn: 'Upload', btnCls: 'is-hover' },
      'Dragging': { cls: 'is-dragging', text: 'Upload or drag and drop', btn: 'Upload', btnCls: 'is-disabled' },
      'Uploading': { cls: 'is-uploading', text: 'Uploading…', btn: 'Cancel', btnCls: '', bar: true },
      'Upload failed default': { cls: 'is-error', text: 'Upload failed', btn: 'Retry', btnCls: '', bar: true },
      'Upload failed hover': { cls: 'is-error is-hover', text: 'Upload failed', btn: 'Retry', btnCls: 'is-hover', bar: true },
    };
    const s = S[o.state] || S['Default'];
    const bar = s.bar ? '<div class="ek-filedrop__bar"><div class="ek-filedrop__bar-fill" style="width:73%"></div></div>' : '';
    const input = `<div class="ek-filedrop ${s.cls}">
      <span class="ek-filedrop__hint">${I.upload}<span class="ek-filedrop__text">${s.text}</span></span>
      ${bar}
      <button class="ek-btn ek-btn--primary ${s.btnCls}">${s.btn}</button>
    </div>`;
    const docs = o.docs ? `<div class="ek-filedrop__docs">${Array.from({ length: o.docs }, (_, i) =>
      `<div class="ek-filedrop__doc${o.lastDisabled && i === o.docs - 1 ? ' is-disabled' : ''}"><span class="ek-filedrop__doc-name">document-name.jpg</span><button class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm" aria-label="Remove">${I.closeXs}</button></div>`).join('')}</div>` : '';
    return `<div class="ek-filedrop-wrap"${o.width ? ` style="width:${o.width}"` : ''}>${input}${docs}</div>`;
  };
  P['file-drop'] = () => ([{ title: 'File drop', opts: 'dropzone + uploaded files', stage:'stage--col', html:
    fileDrop({ state: 'Default', docs: 3 }) }]);

  // Single sample photo reused across every Image example (crops per aspect ratio via object-fit).
  const SAMPLE_IMG = 'assets/sections/explanation-002-img.jpg';
  const sampleImg = `<img src="${SAMPLE_IMG}" alt="">`;
  P['image'] = () => ([{ title: 'Aspect ratios', opts: 'Square · Wide · Circle', html:
    `${specimen('Square', `<span class="ek-image ek-image--sq">${sampleImg}</span>`)}
     ${specimen('Wide', `<span class="ek-image ek-image--wide">${sampleImg}</span>`)}
     ${specimen('Circle', `<span class="ek-image ek-image--sq ek-image--circle">${sampleImg}</span>`)}` }]);

  P['placeholder'] = () => ([{ title: 'Placeholder', opts: 'neutral filler block', html:
    `${specimen('Visible text', '<span class="ek-placeholder" style="width:180px;height:96px">Replace this content</span>')}
     ${specimen('Hidden text', '<span class="ek-placeholder" style="width:180px;height:96px"></span>')}` }]);

  const textGroup = (o) => EK_BUILD.textGroup(o);
  P['text-group'] = () => ([{ title: 'Text group', opts: 'icon · label · title · body · button', stage:'stage--start', html: textGroup({}) }]);

  // =========================================================================
  // Per-item demos — used by the Figma-faithful layout (window.ERAIKI_DOCS).
  // Keyed by { slug: { itemDemoKey: () => htmlString } }.
  // =========================================================================
  const accItem = (title, open, mod) =>
    `<div class="ek-accordion__item ${open?'is-open':''} ${mod||''}"><button type="button" class="ek-accordion__head"><span class="ek-accordion__title">${title}</span><span class="ek-btn ek-btn--tertiary ek-btn--sm ek-btn--icon">${I.chevronDown}</span></button><div class="ek-accordion__body">Progressive-disclosure content revealed when the header is expanded.</div></div>`;
  const accShell = (inner, style) => `<div class="ek-accordion" style="${style||''}">${inner}</div>`;

  const ITEM = {};
  ITEM['accordion'] = (sec, name) => {
    const m = {
      'Default': accShell(accItem('Section header', false) + accItem('Section header', false) + accItem('Section header', false) + accItem('Section header', false)),
      'Hover': accShell(accItem('Section header', false, 'is-hover') + accItem('Section header', false) + accItem('Section header', false) + accItem('Section header', false)),
      'Closed': accShell(accItem('Section header', false) + accItem('Section header', false) + accItem('Section header', false) + accItem('Section header', false)),
      'Open': accShell(accItem('Section header', true) + accItem('Section header', false) + accItem('Section header', false) + accItem('Section header', false)),
      'Min-width': `<div style="display:flex;flex-direction:column;align-items:center;gap:6px">${accShell(accItem('Min width', false) + accItem('Overview', false) + accItem('Details', false) + accItem('Settings', false), 'width:240px;min-width:240px')}</div>`,
      'More than one line of text': accShell(accItem('This accordion header is far too long and wraps onto a second line', false) + accItem('Section header', false) + accItem('Section header', false) + accItem('Section header', false)),
      'Two elements open at the same time': accShell(accItem('First section', true) + accItem('Second section', true) + accItem('Third section', false) + accItem('Fourth section', false)),
    };
    return m[name] || accShell(accItem('What is Eraiki DS?', true) + accItem('How do I use the tokens?', false) + accItem('Is dark mode supported?', false) + accItem('Where do I start?', false));
  };

  ITEM['avatar'] = (sec, name) => {
    const m = {
      'Image': avatar('md','image',8),
      'Placeholder': avatar('md','placeholder'),
      'Initials': avatar('md','initials'),
      'Small': `<div class="specimen">${avatar('sm','image',8)}</div>`,
      'Medium': `<div class="specimen">${avatar('md','image',8)}</div>`,
      'Large': `<div class="specimen">${avatar('lg','image',8)}</div>`,
      'Hidden badge': avatar('lg','image',15),
      'Visible badge': `<span class="ek-avatar ek-avatar--lg"><img src="${img}15" alt=""><span class="ek-badge ek-badge--error ek-avatar__badge">3</span></span>`,
      'Fixed width and height': `<div class="specimen">${avatar('sm','image',8)}</div><div class="specimen">${avatar('md','image',8)}</div><div class="specimen">${avatar('lg','image',8)}</div>`,
    };
    return m[name] || avatar('md','image',8);
  };

  // ---- avatar group ----
  const agroup = (size, n, more) => {
    let s = '';
    for (let i = 1; i <= n; i++) s += avatar(size, 'image', i);
    if (more) s += `<span class="ek-avatar ek-avatar--${size}">+${more}</span>`;
    return `<span class="ek-avatar-group">${s}</span>`;
  };
  ITEM['avatar-group'] = (sec, name) => {
    const m = {
      'Small': `<div class="specimen">${agroup('sm',3,3)}</div>`,
      'Medium': `<div class="specimen">${agroup('md',3,5)}</div>`,
      'Number of visible avatars.': agroup('md',4,12),
      'Mixing avatar types': `<span class="ek-avatar-group">${avatar('md','image',1)}${avatar('md','initials')}${avatar('md','placeholder')}</span>`,
      'Mixing different sizes': `<span class="ek-avatar-group" style="align-items:center">${avatar('sm','image',1)}${avatar('md','image',2)}${avatar('lg','image',3)}</span>`,
    };
    return m[name] || agroup('md',3,5);
  };

  // ---- badge ----
  const badge = (mod, txt) => `<span class="ek-badge ${mod||''}">${txt!=null?txt:''}</span>`;
  ITEM['badge'] = (sec, name) => {
    const m = {
      'Small': `<div class="specimen">${badge('ek-badge--dot')}</div>`,
      'Large': `<div class="specimen">${badge('','3')}</div>`,
      'Primary': badge('','1'),
      'Error': badge('ek-badge--error','2'),
      'Alert': badge('ek-badge--alert','3'),
      'Info': badge('ek-badge--info','4'),
      'Success': badge('ek-badge--success','5'),
    };
    return m[name] || `<span style="position:relative;display:inline-block"><button class="ek-btn ek-btn--secondary ek-btn--icon">${I.info}</button><span class="ek-badge ek-badge--error ek-avatar__badge">5</span></span>`;
  };

  // ---- banner ----
  const banner = (mod, ico, title, body, opts) => {
    opts = opts || {};
    const btnHtml = opts.button ? `<button class="ek-btn ek-btn--tertiary ek-btn--sm">Action</button>` : '';
    const closeHtml = opts.close ? `<span class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm" data-ek-dismiss>${I.close.replace('ek-ic','ek-ic ek-ic--s')}</span>` : '';
    const asideHtml = (btnHtml || closeHtml) ? `<div class="ek-banner__aside">${btnHtml}${closeHtml}</div>` : '';
    const bodyHtml = body ? `<div class="ek-banner__body">${body}</div>` : '';
    return `<div class="ek-banner ek-banner--${mod}"><span class="ek-banner__ico">${ico}</span><div style="flex:1"><div class="ek-banner__title">${title}</div>${bodyHtml}</div>${asideHtml}</div>`;
  };
  ITEM['banner'] = (sec, name) => {
    const m = {
      'Info': banner('info', I.info, 'Heads up', 'A new version is available.', {close:true}),
      'Error': banner('error', I.error, 'Something went wrong', 'We couldn’t process your request.', {close:true}),
      'Alert': banner('alert', I.alert, 'Check this', 'Your trial ends in 3 days.', {close:true}),
      'Success': banner('success', I.success, 'Saved', 'Your changes were saved.', {close:true}),
      'Only title + close icon': banner('info', I.info, 'Title only', '', {close:true}),
      'Only text': banner('info', I.info, 'Persistent message', 'Cannot be dismissed by the user.', {}),
      'Show aside button': banner('info', I.info, 'Update available', '', {button:true}),
      'Show description': banner('info', I.info, 'Heads up', 'A longer description accompanies the title to give more context.', {close:true}),
      'Hiding the icon': banner('info', I.info, 'The icon is always visible', '', {close:true}),
    };
    return m[name] || banner('info', I.info, 'Heads up', 'A new version is available.', {close:true});
  };

  // ---- breadcrumb ----
  const crumb = (levels, opts) => {
    opts = opts || {};
    const parts = [];
    for (let i = 0; i < levels; i++) {
      const last = i === levels - 1;
      const label = 'Level ' + (i + 1);
      if (last) parts.push(`<span class="ek-crumb__cur">${label}</span>`);
      else parts.push(`<a href="#" style="${opts.hover && i===1 ? 'color:var(--color-fill-plain-text-standard-l)' : ''}">${label}</a>`);
    }
    return `<nav class="ek-crumb">${parts.join(`<span class="ek-crumb__sep"></span>`)}</nav>`;
  };
  ITEM['breadcrumb'] = (sec, name) => {
    // don't example: two levels marked as active at the same time
    const twoActive = `<nav class="ek-crumb"><a href="#">Level 1</a><span class="ek-crumb__sep"></span><span class="ek-crumb__cur">Level 2</span><span class="ek-crumb__sep"></span><span class="ek-crumb__cur">Level 3</span></nav>`;
    const m = {
      '1 level': crumb(1),
      '2 levels': crumb(2),
      '3 levels': crumb(3),
      '4 levels': crumb(4),
      '5 levels': crumb(5),
      'Default': crumb(3),
      'Hover': crumb(3, { hover: true }),
      'Active': crumb(3),
      'More tan one active item': twoActive,
      'More than one active item': twoActive,
    };
    return m[name] || crumb(3);
  };

  // ---- button ----
  ITEM['button'] = (sec, name) => {
    const m = {
      'Medium': `<div class="specimen">${btn('primary','Button')}</div>`,
      'Small': `<div class="specimen">${btn('primary','Button','ek-btn--sm')}</div>`,
      'Primary': btn('primary','Button'),
      'Secondary': btn('secondary','Button'),
      'Tertiary': btn('tertiary','Button'),
      'Only text': btn('primary','Save'),
      'Left icon + text': `<button class="ek-btn ek-btn--primary ek-btn--icon-left">${I.plus}Add</button>`,
      'Text + right icon': `<button class="ek-btn ek-btn--primary ek-btn--icon-right">Next${I.chevronRight}</button>`,
      'Only icon': `<button class="ek-btn ek-btn--primary ek-btn--icon">${I.plus}</button>`,
      'Default': btn('primary','Button'),
      'Hover': btn('secondary','Button'),
      'Disabled': btn('primary','Button','is-disabled'),
      'Hug': btn('primary','Hug'),
      'Full width': `<button class="ek-btn ek-btn--primary" style="width:100%">Full width</button>`,
      'Min-width': `<div class="specimen">${btn('primary','OK')}</div>`,
      'Fixed height': `<div class="specimen">${btn('primary','Button')}</div>`,
      'Fixed width': btn('primary','Button'),
      'Extended texts': btn('primary','This label is far too long for a button'),
    };
    return m[name] || btn('primary','Button');
  };

  // ---- shared helpers for the remaining resolvers ----
  const pick = (map, name, def) => (name in map ? map[name] : def);
  const fld = (label, inner, mod) => `<div class="ek-field"><span class="ek-field__label">${label}</span><div class="ek-input ${mod||''}">${inner}</div></div>`;
  const inp = (val, ph) => `<input value="${val||''}" placeholder="${ph||''}">`;
  // generic input-field state set
  const inputStates = (name, base) => {
    base = base || ((v, m) => fld('Label', inp(v, 'Placeholder'), m));
    const m = {
      'Default': base('', ''), 'Dafault': base('', ''), 'Empty': base('', ''),
      'Hover': base('', 'is-hover'), 'Active': base('Typing…', 'is-focus'),
      'Error': `<div class="ek-field"><span class="ek-field__label">Label</span><div class="ek-input is-error">${inp('Wrong value')}</div><span class="ek-field__hint ek-field__hint--error">This field has an error</span></div>`,
      'Disabled': base('', 'is-disabled'), 'Filled': base('Filled value', ''),
    };
    return pick(m, name, null);
  };

  // ---- buttons-group ----
  ITEM['buttons-group'] = (sec, name) => {
    const grp = (mod, style) => `<div class="ek-btn-group ${mod||''}"${style?` style="${style}"`:''}><button class="ek-btn ek-btn--primary">Confirm</button><button class="ek-btn ek-btn--secondary">Cancel</button><button class="ek-btn ek-btn--tertiary">Skip</button></div>`;
    const m = { 'Horizontal': grp(), 'Vertical': grp('ek-btn-group--vertical'), 'Hug': grp(), 'Fill': grp('ek-btn-group--fill', 'width:100%') };
    return pick(m, name, grp());
  };

  // ---- calendar ----
  ITEM['calendar'] = (sec, name) => {
    const m = {
      'One option': buildCalendar({ selected: 12 }),
      'Range': buildCalendar({ range: [12,18] }),
      'Default': buildCalendar({}),
      'One day hover': buildCalendar({ hover: 12 }),
      'One day selected': buildCalendar({ selected: 12 }),
      'One day selected + range hover': buildCalendar({ preview: [12,16] }),
      'Range selected': buildCalendar({ range: [12,18] }),
      'Show month selector': buildCalendar({ selected: 12 }),
      'Show year selector': buildCalendar({ selected: 12, year: true }),
      'Show button': buildCalendar({ selected: 12, button: true }),
      'Min-width': buildCalendar({ selected: 12, style: 'width:280px' }),
      'Fixed width': buildCalendar({ selected: 12, style: 'width:300px' }),
      'Full width': buildCalendar({ selected: 12, style: 'width:100%' }),
      'Max-width': buildCalendar({ selected: 12, style: 'max-width:280px' }),
    };
    return pick(m, name, buildCalendar({ selected: 12 }));
  };

  // ---- card - product ----
  // Sample product photos on white (dummyjson demo CDN) — ecommerce-style placeholders
  const PRODUCTS = [
    'https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png',
    'https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20%26%20Black%20Check%20Shirt/1.png',
    "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women%27s%20Handbag/1.png",
  ];
  const card = (opts) => {
    opts = opts || {};
    const img = `<img src="${PRODUCTS[opts.product || 0]}" alt="Product">`;
    const eyebrow = opts.label ? `<span class="ek-card__eyebrow">Category</span>` : '';
    const swatches = opts.colors ? `<div class="ek-card__swatches">${[0,1,2,3,4].map(() => '<span class="ek-card__swatch"></span>').join('')}</div>` : '';
    const price = opts.discount
      ? `<div class="ek-card__price"><span class="ek-card__price-original">€49.00</span><span class="ek-card__price-sale">€39.00</span></div>`
      : `<div class="ek-card__price">€49.00</div>`;
    return `<div class="ek-card${opts.hover ? ' is-hover' : ''}"><div class="ek-card__media">${img}<button class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-card__fav" aria-label="Save">${I.heart}</button></div><div class="ek-card__body"><div class="ek-card__info">${eyebrow}<div class="ek-card__title">Product name</div>${swatches}</div>${price}</div></div>`;
  };
  ITEM['card-product'] = (sec, name) => {
    const m = { 'Default': card({ product: 0 }), 'Show discount': card({ discount: true, product: 1 }), 'Show label': card({ label: true, product: 2 }), 'Show color options': card({ colors: true, product: 0 }), 'Hover': card({ hover: true, product: 0 }) };
    return pick(m, name, card({}));
  };

  // ---- cells (featured / linkable / plain / row) ----
  const cellVar = (kind, mod, extra) => {
    let lead = avatar('md','image',20), title = 'Jane Doe', sub = 'jane@eraiki.com', trail = extra||'';
    if (kind === 'Amount') { trail = '<span class="ek-cell__amount">$1,204</span>'; }
    else if (kind === 'Label') { trail = '<span class="ek-label ek-label--info"><span class="ek-label__dot"></span>Label</span>'; }
    else if (kind === 'Icon') { trail = I.chevronRight; }
    else if (kind === 'Empty') { lead = `<span class="ek-avatar ek-avatar--md ek-avatar--more"></span>`; title='—'; sub=''; }
    return `<div class="ek-cell ${mod||''}">${lead}<div class="ek-cell__body"><div class="ek-cell__title">${title}</div>${sub?`<div class="ek-cell__sub">${sub}</div>`:''}</div>${trail}</div>`;
  };
  ITEM['cell-featured'] = (sec, name) => {
    const cell = (o) => {
      o = o || {};
      const val = o.empty ? '' : `<span class="ek-cell-featured__value">${o.text || 'Lorem ipsum'}</span>`;
      return `<div class="ek-cell-featured${o.full ? ' ek-cell-featured--full' : ''}"${o.style ? ` style="${o.style}"` : ''}>${val}</div>`;
    };
    const m = {
      'Text': cell(),
      'Empty': cell({ empty: true }),
      'Fixed width': cell({ style: 'width:180px' }),
      'Full width': `<div style="width:100%">${cell({ full: true })}</div>`,
      'Text ellipsis': cell({ text: 'Lorem ipsum sit amet consectetur', style: 'width:160px' }),
    };
    return pick(m, name, cell());
  };
  ITEM['cell-linkable'] = (sec, name) => {
    const diamond = '<svg class="ek-ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 3l7 7-7 7-7-7z"/></svg>';
    const kmod = { Amount: 'ek-cell-linkable--amount', Label: 'ek-cell-linkable--label', Icon: 'ek-cell-linkable--icon' };
    const content = (kind, text) => {
      if (kind === 'Amount') return '000.00';
      if (kind === 'Label') return '<span class="ek-label"><span class="ek-label__dot"></span>Label</span>';
      if (kind === 'Icon') return diamond;
      return text || 'Lorem';
    };
    const cell = (kind, o) => {
      o = o || {};
      return `<div class="ek-cell-linkable ${kmod[kind] || ''} ${o.state || ''}${o.full ? ' ek-cell-linkable--full' : ''}"${o.style ? ` style="${o.style}"` : ''}><span class="ek-cell-linkable__content">${content(kind, o.text)}</span></div>`;
    };
    const m = {
      'Text': cell('Text'), 'Amount': cell('Amount'), 'Label': cell('Label'), 'Icon': cell('Icon'),
      'Default': cell('Text'), 'Hover': cell('Text', { state: 'is-hover' }),
      'Selected default': cell('Text', { state: 'is-selected' }), 'Selected hover': cell('Text', { state: 'is-selected is-hover' }),
      'Disabled': cell('Text', { state: 'is-disabled' }), 'Selected disabled': cell('Text', { state: 'is-selected is-disabled' }),
      'Fixed width': cell('Text', { style: 'width:180px' }), 'Full width': `<div style="width:100%">${cell('Text', { full: true })}</div>`,
      'Min-width': cell('Amount', { style: 'width:64px' }), 'Ellipsis': `<div style="width:120px">${cell('Text', { full: true, text: 'Lorem ipsum sit amet' })}</div>`,
    };
    return pick(m, name, cell('Text'));
  };
  ITEM['cell-plain'] = (sec, name) => {
    const diamond = '<svg class="ek-ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 3l7 7-7 7-7-7z"/></svg>';
    const kmod = { Amount: 'ek-cell-plain--amount', Label: 'ek-cell-plain--label', Icon: 'ek-cell-plain--icon' };
    const content = (kind, text) => {
      if (kind === 'Amount') return '000.00';
      if (kind === 'Label') return '<span class="ek-label"><span class="ek-label__dot"></span>Label</span>';
      if (kind === 'Icon') return diamond;
      return text || 'Lorem ipsum';
    };
    const cell = (kind, o) => {
      o = o || {};
      return `<div class="ek-cell-plain ${kmod[kind] || ''} ${o.state || ''}${o.full ? ' ek-cell-plain--full' : ''}"${o.style ? ` style="${o.style}"` : ''}><span class="ek-cell-plain__content">${content(kind, o.text)}</span></div>`;
    };
    const m = {
      'Text': cell('Text'), 'Amount': cell('Amount'), 'Label': cell('Label'), 'Icon': cell('Icon'),
      'Default': cell('Text'), 'Disabled': cell('Text', { state: 'is-disabled' }),
      'Fixed width': cell('Text', { style: 'width:180px' }), 'Full width': `<div style="width:100%">${cell('Text', { full: true })}</div>`,
      'Min-width': cell('Amount', { style: 'width:64px' }), 'Ellipsis': `<div style="width:120px">${cell('Text', { full: true, text: 'Lorem ipsum sit amet' })}</div>`,
    };
    return pick(m, name, cell('Text'));
  };
  ITEM['cells-row'] = (sec, name) => {
    const pcell = (t, style) => `<div class="ek-cell-plain"${style ? ` style="${style}"` : ''}><span class="ek-cell-plain__content">${t || 'Lorem'}</span></div>`;
    const fcell = (t) => `<div class="ek-cell-featured"><span class="ek-cell-featured__value">${t || 'Lorem'}</span></div>`;
    const lcell = (t) => `<div class="ek-cell-linkable"><span class="ek-cell-linkable__content">${t || 'Lorem'}</span></div>`;
    const row = (inner) => `<div class="ek-cells-row" style="width:100%">${inner}</div>`;
    const repeat = (fn, n) => Array.from({ length: n }, () => fn()).join('');
    const m = {
      'Plain': row(repeat(() => pcell('Lorem'), 4)),
      'Featured': row(repeat(() => fcell('Lorem'), 4)),
      'Linkable': row(repeat(() => lcell('Lorem'), 4)),
      'Fill': row(repeat(() => pcell('Lorem'), 4)),
      'Width of the cells': row(pcell('Lorem') + pcell('Lorem', 'flex:0 0 96px') + pcell('Lorem')),
      'Mix kind of cells': row(pcell('Lorem') + pcell('Lorem') + lcell('Lorem') + lcell('Lorem')),
      'You don’t mix featured-type cells': row(fcell('Lorem') + pcell('Lorem') + fcell('Lorem')),
    };
    return pick(m, name, row(repeat(() => pcell('Lorem'), 4)));
  };

  // ---- checkbox ----
  ITEM['checkbox'] = (sec, name) => {
    const m = {
      'Deselected': check('', 'Lorem ipsum'), 'Selected': check('is-on', 'Lorem ipsum'),
      'Default': check('', 'Lorem ipsum'), 'Hover': check('is-hover', 'Lorem ipsum'),
      'Error': check('is-error', 'Lorem ipsum'), 'Disabled': check('is-disabled', 'Lorem ipsum'),
    };
    return pick(m, name, check('', 'Lorem ipsum'));
  };
  ITEM['checkbox-group'] = (sec, name) => {
    const items = `${check('is-on','Lorem ipsum')}${check('','Lorem ipsum')}${check('is-on','Lorem ipsum')}${check('','Lorem ipsum')}`;
    const withLabel = `<div class="ek-check-group"><span class="ek-group-label">Lorem ipsum:</span>${items}</div>`;
    const noLabel = `<div class="ek-check-group">${items}</div>`;
    return pick({ 'With label': withLabel, 'Without label': noLabel }, name, withLabel);
  };

  // ---- divider ----
  ITEM['divider'] = (sec, name) => {
    const m = {
      'Horizontal': `<div style="width:220px"><hr class="ek-divider"></div>`,
      'Vertical': `<span class="ek-divider--v"></span>`,
      'Medium': `<div style="width:220px"><hr class="ek-divider" style="border-top-color:var(--color-stroke-plain-shape-standard-l)"></div>`,
      'Low': `<div style="width:220px"><hr class="ek-divider" style="border-top-color:var(--color-stroke-plain-shape-standard-m)"></div>`,
      'Full width/height': `<div style="width:100%"><hr class="ek-divider"></div>`,
    };
    return pick(m, name, `<div style="width:220px"><hr class="ek-divider"></div>`);
  };

  // ---- dropdown ----
  ITEM['dropdown'] = (sec, name) => {
    const m = {
      'Closed': ddInput({ label: true, filled: true }),
      'Open': ddInput({ label: true, filled: true, open: true }),
      'Full width': ddInput({ label: true, filled: true, full: true }),
    };
    return pick(m, name, ddInput({ label: true, filled: true }));
  };
  ITEM['dropdown-input'] = (sec, name) => {
    // Dropdown input documents the selector only — never its options list.
    const ddInput = (o = {}) => ddSelector(o);
    const m = {
      // Kinds
      'Empty': ddInput({ filled: false }),
      'Filled': ddInput({ filled: true }),
      // States
      'Default': ddInput({ filled: true }),
      'Hover': ddInput({ filled: true, state: 'is-hover' }),
      'Active': ddInput({ filled: true, open: true }),
      'Error': ddInput({ filled: true, state: 'is-error', detail: true }),
      'Disabled': ddInput({ filled: true, state: 'is-disabled' }),
      // Options
      'Show label': ddInput({ label: true, filled: true }),
      'Without label': ddInput({ label: false, filled: true }),
      'Show icon': ddInput({ icon: true, filled: true }),
      'Show tooltip': ddInput({ tooltip: true, filled: true }),
      'Show badge': ddInput({ badge: true, filled: true }),
      'Show detail info text': ddInput({ detail: true, filled: true }),
      'Mandatory dropdown': ddInput({ mand: true, filled: true }),
    };
    return pick(m, name, ddInput({ filled: true }));
  };
  ITEM['dropdown-options'] = (sec, name) => {
    const menu = (rows) => `<div class="ek-dropdown__menu" style="width:260px">${rows}</div>`;
    const L = ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'];
    const rows = (fn) => L.map((l, i) => fn(l, i)).join('');
    const plain = () => rows((l) => `<div class="ek-opt">${l}</div>`);
    const m = {
      'One option': menu(rows((l, i) => `<div class="ek-opt ${i === 0 ? 'is-selected' : ''}">${l}</div>`)),
      'Multi option': menu(rows((l, i) => `<div class="ek-opt">${check(i === 0 ? 'is-on' : '', '')}${l}</div>`)),
      'Default': menu(plain()),
      'Hover': menu(rows((l, i) => `<div class="ek-opt"${i === 0 ? ' style="background:var(--color-fill-link-surface-standard-hover)"' : ''}>${l}</div>`)),
      'Disabled': menu(rows((l, i) => `<div class="ek-opt"${i === 0 ? ' style="opacity:.5"' : ''}>${l}</div>`)),
      'Only text': menu(plain()),
      'Show left icon': menu(rows((l) => `<div class="ek-opt">${I.user}${l}</div>`)),
      'Show badge': menu(rows((l, i) => `<div class="ek-opt">${l}${i === 0 ? '<span class="ek-badge ek-badge--dot" style="margin-left:auto"></span>' : ''}</div>`)),
      'Show scrollbar': menu(plain()),
      'Show button': menu(plain() + '<div class="ek-dropdown__foot"><button class="ek-btn ek-btn--primary">Apply</button></div>'),
      'With divider': menu(rows((l, i) => `<div class="ek-opt">${l}</div>${i === 1 ? '<hr class="ek-divider">' : ''}`)),
    };
    return pick(m, name, menu(plain()));
  };

  // ---- file drop ----
  ITEM['file-drop'] = (sec, name) => {
    const m = {
      // States
      'Default': fileDrop({ state: 'Default' }),
      'Hover': fileDrop({ state: 'Hover' }),
      'Dragging': fileDrop({ state: 'Dragging' }),
      'Uploading': fileDrop({ state: 'Uploading' }),
      'Upload failed default': fileDrop({ state: 'Upload failed default' }),
      'Upload failed hover': fileDrop({ state: 'Upload failed hover' }),
      // Options
      'Hide uploaded files': fileDrop({ state: 'Default' }),
      'Show uploaded files': fileDrop({ state: 'Default', docs: 3 }),
      // Behaviors
      'Min-width': fileDrop({ state: 'Default', width: '220px' }),
      'Max-width': fileDrop({ state: 'Default', width: '440px' }),
      'Fixed width': fileDrop({ state: 'Default', width: '320px' }),
      'Full width': fileDrop({ state: 'Default', width: '100%' }),
    };
    return pick(m, name, fileDrop({ state: 'Default' }));
  };

  // ---- image ----
  ITEM['image'] = (sec, name) => {
    const ratios = { '1:1':'1/1','5:4':'5/4','4:3':'4/3','3:2':'3/2','16:10':'16/10','16:9':'16/9','2:1':'2/1','21:9':'21/9','Golden Ratio':'1.618/1' };
    if (name in ratios) return `<span class="ek-image" style="width:160px;aspect-ratio:${ratios[name]}">${sampleImg}</span>`;
    if (name === 'Vertical') return `<span class="ek-image" style="width:96px;height:140px">${sampleImg}</span>`;
    return `<span class="ek-image ek-image--wide">${sampleImg}</span>`;
  };

  // ---- input fields (text / password / textarea / date) ----
  ITEM['input-field-text'] = (sec, name) => {
    const m = {
      // Kinds
      'Empty': textField({ filled: false }),
      'Filled': textField({ filled: true }),
      // States ("Dafault" is a typo in the Figma doc)
      'Default': textField({ filled: true }),
      'Dafault': textField({ filled: true }),
      'Hover': textField({ filled: true, state: 'Hover' }),
      'Active': textField({ filled: true, state: 'Active' }),
      'Error': textField({ filled: true, state: 'Error', info: true }),
      'Disabled': textField({ filled: true, state: 'Disabled' }),
      // Options
      'Show label': textField({ filled: true, label: true }),
      'Without label': textField({ filled: true, label: false }),
      'Show detail info text': textField({ filled: true, info: true }),
      'Show tooltip': textField({ filled: true, tooltip: true }),
      'Mandatory input': textField({ filled: true, mand: true }),
      // Behaviors
      'Min-width': textField({ filled: true, width: '220px' }),
      'Max-width': textField({ filled: true, width: '440px' }),
      'Fixed width': textField({ filled: true, width: '320px' }),
      'Full width': textField({ filled: true, full: true }),
      'Collapsed text': textField({ filled: true, width: '160px' }),
    };
    return pick(m, name, textField({ filled: true }));
  };
  ITEM['input-field-password'] = (sec, name) => {
    const m = {
      // Kinds
      'Empty': pwField({ filled: false }),
      'Filled': pwField({ filled: true }),
      // States
      'Default': pwField({ filled: true }),
      'Hover': pwField({ filled: true, state: 'Hover' }),
      'Active': pwField({ filled: true, state: 'Active' }),
      'Error': pwField({ filled: true, state: 'Error', info: true }),
      'Disabled': pwField({ filled: true, state: 'Disabled' }),
      // Options
      'Show label': pwField({ filled: true, label: true }),
      'Without label': pwField({ filled: true, label: false }),
      'Show detail info text': pwField({ filled: true, info: true }),
    };
    return pick(m, name, pwField({ filled: true }));
  };
  ITEM['input-field-text-area'] = (sec, name) => {
    const m = {
      // Kinds
      'Empty': textArea({ filled: false }),
      'Filled': textArea({ filled: true }),
      // States
      'Default': textArea({ filled: true }),
      'Hover': textArea({ filled: true, state: 'Hover' }),
      'Active': textArea({ filled: true, state: 'Active' }),
      'Error': textArea({ filled: true, state: 'Error', info: true }),
      'Disabled': textArea({ filled: true, state: 'Disabled' }),
      // Options
      'Show label': textArea({ filled: true, label: true }),
      'Mandatory input': textArea({ filled: true, mand: true }),
      'Show detail info': textArea({ filled: true, info: true }),
      'Show word count': textArea({ filled: true, count: true }),
      // Behaviors
      'Min-width': textArea({ filled: true, width: '220px' }),
      'Max-width': textArea({ filled: true, width: '440px' }),
      'Fixed width': textArea({ filled: true, width: '320px' }),
      'Full width': textArea({ filled: true, full: true }),
      'Min-height': textArea({ filled: true, height: '64px' }),
      'Max-height': textArea({ filled: true, height: '160px' }),
      'Fixed height': textArea({ filled: true, height: '120px' }),
    };
    return pick(m, name, textArea({ filled: true }));
  };
  ITEM['input-field-date-selector'] = (sec, name) => {
    const m = {
      // Kinds
      'Empty': dateField({ filled: false }),
      'Filled': dateField({ filled: true }),
      // States (resting state is named "Empty" in Figma)
      'Hover': dateField({ filled: true, state: 'Hover' }),
      'Active': dateField({ filled: true, state: 'Active' }),
      'Error': dateField({ filled: true, state: 'Error', info: true }),
      'Disabled': dateField({ filled: true, state: 'Disabled' }),
      // Options
      'With label': dateField({ filled: true, label: true }),
      'Without label': dateField({ filled: true, label: false }),
      'Show tooltip': dateField({ filled: true, tooltip: true }),
      'Show detail info': dateField({ filled: true, info: true }),
      'Mandatory input': dateField({ filled: true, mand: true }),
      // Behaviors
      'Fixed width': dateField({ filled: true, width: '220px' }),
      'Full width': dateField({ filled: true, full: true }),
    };
    // 'Empty' appears in both Kinds and States → resting empty field
    return pick(m, name, dateField({ filled: false }));
  };
  ITEM['input-field-date-range'] = (sec, name) => {
    const m = {
      // Kinds
      'Empty': dateRange({ filled: false }),
      'Filled': dateRange({ filled: true }),
      // States
      'Default': dateRange({ filled: true }),
      'Hover': dateRange({ filled: true, state: 'Hover' }),
      'Active': dateRange({ filled: true, state: 'Active' }),
      'Error': dateRange({ filled: true, state: 'Error', info: true }),
      'Disabled': dateRange({ filled: true, state: 'Disabled' }),
      // Options
      'Show label': dateRange({ filled: true, label: true }),
      'Without label': dateRange({ filled: true, label: false }),
      'Show tooltip': dateRange({ filled: true, tooltip: true }),
      'Show detail info': dateRange({ filled: true, info: true }),
      'Mandatory inputs': dateRange({ filled: true, mand: true }),
      // Behaviors
      'Min-width': dateRange({ filled: true }),
      'Fixed width': dateRange({ filled: true, width: '360px' }),
      'Full width': dateRange({ filled: true, full: true }),
    };
    return pick(m, name, dateRange({ filled: true }));
  };

  // ---- label ----
  ITEM['label'] = (sec, name) => {
    const m = {
      // Kinds
      'Neutral': label(''),
      'Info': label('info'),
      'Alert': label('alert'),
      'Error': label('error'),
      'Success': label('success'),
      // Options
      'With badge': label('', { badge: true }),
      'Only text': label('', { badge: false }),
      // Behaviors
      'Hug': label('', { text: 'Lorem' }),
      'Number of words': label('', { text: 'Lorem ipsum dolor' }),
      'Fill': label('', { fill: true }),
    };
    return pick(m, name, label(''));
  };

  // ---- pagination ----
  ITEM['pagination'] = (sec, name) => {
    const m = {
      // Kinds
      'Numbers': pgWrap(`${pgItem('1', 'is-on')}${pgItem('2')}${pgItem('3')}${pgItem('4')}${pgItem('5')}`),
      'Show left navigation': pgWrap(`${pgItem(chevLeft)}${pgItem('1', 'is-on')}${pgItem('2')}${pgItem('3')}`),
      'Show right navigation': pgWrap(`${pgItem('1', 'is-on')}${pgItem('2')}${pgItem('3')}${pgItem(I.chevronRight)}`),
      'Ellipsis': pgWrap(`${pgItem('1', 'is-on')}${pgItem('2')}${pgItem('3')}${pgItem('…', 'ek-page--ellipsis')}${pgItem('12')}`),
      // States (single page item)
      'Default': pgWrap(pgItem('1')),
      'Hover': pgWrap(pgItem('1', 'is-hover')),
      'Active': pgWrap(pgItem('1', 'is-on')),
    };
    return pick(m, name, pgWrap(`${pgItem(chevLeft)}${pgItem('1', 'is-on')}${pgItem('2')}${pgItem('3')}${pgItem('…', 'ek-page--ellipsis')}${pgItem('12')}${pgItem(I.chevronRight)}`));
  };

  // ---- pill ----
  ITEM['pill'] = (sec, name) => {
    const m = {
      // Selected (kinds)
      'No selected': pill('Lorem ipsum'),
      'Selected': pill('Lorem ipsum', 'is-on'),
      // States (all describe the unselected pill)
      'Default': pill('Lorem ipsum'),
      'Hover': pill('Lorem ipsum', 'is-hover'),
      'Disabled': pill('Lorem ipsum', 'is-disabled'),
    };
    return pick(m, name, pill('Lorem ipsum', 'is-on'));
  };

  // ---- pills group ----
  ITEM['pills-group'] = (sec, name) => {
    const m = {
      // Selected (kinds)
      'No selected': pill('Lorem ipsum'),
      'Selected': pill('Lorem ipsum', 'is-on'),
      // States
      'Default': pill('Lorem ipsum'),
      'No selected - Hover': pill('Lorem ipsum', 'is-hover'),
      'No selected - Disabled': pill('Lorem ipsum', 'is-disabled'),
      'Selected - Hover': pill('Lorem ipsum', 'is-on is-hover'),
      'Selected - Disabled': pill('Lorem ipsum', 'is-on is-disabled'),
    };
    return pick(m, name, `<div class="ek-pills">${pill('All', 'is-on')}${pill('Design')}${pill('Product')}</div>`);
  };

  // ---- pin code ----
  ITEM['pin-code'] = (sec, name) => {
    const four = (fn) => [0, 1, 2, 3].map(fn).join('');
    const m = {
      // Filled
      'No': pinRow(four(() => pinCell({}))),
      'Yes': pinRow(four(() => pinCell({ filled: true }))),
      // States
      'Default': pinRow(four(() => pinCell({}))),
      'Hover': pinRow(four((i) => pinCell({ state: i === 0 ? 'Hover' : '' }))),
      'Active': pinRow(four((i) => pinCell({ active: i === 0 }))),
      'Error': pinRow(four(() => pinCell({ state: 'Error', filled: true }))),
      'Disabled': pinRow(four(() => pinCell({ state: 'Disabled', filled: true }))),
    };
    return pick(m, name, pinRow(pinCell({ filled: true }) + pinCell({ filled: true }) + pinCell({ active: true }) + pinCell({})));
  };

  // ---- placeholder ----
  ITEM['placeholder'] = (sec, name) => {
    const ph = (style, text = 'Replace this content') => `<span class="ek-placeholder" style="${style}">${text}</span>`;
    const m = {
      // Options
      'Visible text': ph('width:180px;height:96px'),
      'Hidden text': ph('width:180px;height:96px', ''),
      // Behaviors
      'Min-width': ph('', ''),
      'Fixed width': ph('width:200px;height:88px'),
      'Full width': ph('width:100%;height:80px'),
      'Full height': `<div style="height:120px;display:flex;align-items:stretch">${ph('width:180px;height:100%')}</div>`,
    };
    return pick(m, name, ph('width:180px;height:96px'));
  };

  // ---- radio buttons group ----
  ITEM['radio-buttons-group'] = (sec, name) => {
    const opts = ['Option one', 'Option two', 'Option three', 'Option four'];
    // Always a group of four; the first option carries the documented state.
    const grp = (firstCls, label) =>
      `<div class="ek-check-group">${label ? `<span class="ek-group-label">${label}</span>` : ''}${opts.map((o, i) => radio(i === 0 ? firstCls : '', o)).join('')}</div>`;
    const m = {
      // Selected
      'No': grp('', 'Lorem ipsum'), 'Yes': grp('is-on', 'Lorem ipsum'),
      // States
      'No selected - Default': grp('', 'Lorem ipsum'), 'No selected - Hover': grp('is-hover', 'Lorem ipsum'),
      'No selected - Disabled': grp('is-disabled', 'Lorem ipsum'),
      'Selected - Default': grp('is-on', 'Lorem ipsum'), 'Selected - Hover': grp('is-on is-hover', 'Lorem ipsum'),
      'Selected - Disabled': grp('is-on is-disabled', 'Lorem ipsum'),
      // Options
      'With label': grp('is-on', 'Lorem ipsum'),
      'Without label': grp('is-on'),
    };
    return pick(m, name, grp('is-on', 'Lorem ipsum'));
  };

  // ---- rating ----
  ITEM['rating'] = (sec, name) => {
    const byName = { '0 stars':0,'1 star':1,'2 stars':2,'3 stars':3,'4 stars':4,'5 stars':5 };
    if (name in byName) return ratingWidget(byName[name]);
    if (name === 'Hover') {
      // Score 2; pointer over star 4 → empty stars 3–4 show the darker preview border, fill unchanged.
      let s = ''; for (let i = 1; i <= 5; i++) s += star(i > 2, i, (i === 3 || i === 4) ? 'is-preview' : '');
      return `<span class="ek-rating" data-value="2">${s}</span>`;
    }
    if (name === 'Linear growth') return ratingWidget(3);
    if (name === 'Non-linear growth') {
      // Anti-pattern: non-contiguous fill (stars 1, 2 and 4) — what must NOT happen.
      const filled = new Set([1, 2, 4]);
      let s = ''; for (let i = 1; i <= 5; i++) s += star(!filled.has(i), i);
      return `<span class="ek-rating" data-value="4">${s}</span>`;
    }
    return ratingWidget(4);
  };

  // ---- search field ----
  ITEM['search-field'] = (sec, name) => {
    const sf = (o) => EK_BUILD.searchField(o);
    const m = {
      // Filled
      'No': sf(), 'Yes': sf({ value: 'Design system' }),
      // Options
      'Show button': sf({ button: true }), 'Hide button': sf(),
      // States
      'Default': sf(), 'Hover': sf({ mod: 'is-hover' }), 'Active': sf({ value: 'Design system', mod: 'is-focus' }),
      'Error': sf({ value: 'Design system', mod: 'is-error' }), 'Disabled': sf({ mod: 'is-disabled' }),
      // Behaviors
      'Min-width': sf({ width: '160px' }),
      'Full width': sf({ width: '100%', button: true }),
      'Fixed width': sf({ width: '280px' }),
      'Collapsed text': sf({ width: '220px', value: 'A very long search query that gets truncated' }),
      'Trigger': sf({ value: 'Design system', button: true }),
      'Delete option': sf({ value: 'Design system' }),
      'Independents hovers': sf({ button: true }),
    };
    return pick(m, name, sf({ button: true }));
  };

  // ---- switch ----
  ITEM['switch'] = (sec, name) => {
    const sw = (on, cls, label = 'Email notifications') => `<span class="ek-switch ${on?'is-on':''} ${cls||''}"><span class="ek-switch__track"></span>${label?`<span>${label}</span>`:''}</span>`;
    const m = {
      // Selected
      'No': sw(false,''), 'Yes': sw(true,''),
      // States
      'Default': sw(true,''), 'Hover': sw(true,'is-hover'), 'Disabled': sw(true,'is-disabled'),
      // Options
      'Show text': sw(true,'','Email notifications'), 'Hide text': sw(true,'',''),
    };
    return pick(m, name, sw(true,''));
  };

  // ---- tabs ----
  ITEM['tabs-group-desktop'] = (sec, name) => {
    const labels = ['Overview', 'Activity', 'Settings', 'Billing'];
    const tab = (l, cls) => `<span class="ek-tab ${cls||''}">${l}</span>`;
    const grp = (fn) => `<div class="ek-tabs">${labels.map(fn).join('')}</div>`;
    const m = {
      // States
      'Default': grp((l, i) => tab(l, i === 0 ? 'is-on' : '')),
      'Hover': grp((l, i) => tab(l, i === 0 ? 'is-on' : i === 1 ? 'is-hover' : '')),
      // Behaviors — single is correct; multi (two selected) is the anti-pattern
      'Single option': grp((l, i) => tab(l, i === 0 ? 'is-on' : '')),
      'Multi select': grp((l, i) => tab(l, (i === 0 || i === 2) ? 'is-on' : '')),
    };
    return pick(m, name, grp((l, i) => tab(l, i === 0 ? 'is-on' : '')));
  };
  ITEM['tabs-group-mobile'] = (sec, name) => {
    return pick({
      'Default': tabmBox('Home', false),   // collapsed: only current tab
      'Open': tabmBox('Home', true),        // expanded: full list
      'Selected': tabmBox('Search', true),  // a chosen tab marked active
    }, name, tabmBox('Home', false));
  };

  // ---- text group ----
  ITEM['text-group'] = (sec, name) => {
    const m = {
      // Kinds
      'Default': textGroup({}),
      'Contained': textGroup({ contained: true }),
      // Options
      'Hide label': textGroup({ label: false }),
      'Hide button': textGroup({ button: false }),
      'Hide text': textGroup({ text: false }),
      'Hide icon': textGroup({ icon: false }),
      // Behaviors
      'Change heading size': textGroup({ headingSize: 'var(--font-size-heading-l)' }),
      'Change body text size': textGroup({ bodySize: 'var(--font-size-body-m)' }),
      'Change container background color': textGroup({ contained: true, bg: 'var(--color-fill-plain-surface-standard-s)' }),
    };
    return pick(m, name, textGroup({}));
  };

  // ---- tooltip ----
  ITEM['tooltip'] = (sec, name) => {
    const posClass = { 'Top': 'top', 'Top left': 'top-left', 'Top right': 'top-right', 'Left': 'left', 'Right': 'right', 'Bottom': 'bottom', 'Bottom left': 'bottom-left', 'Bottom right': 'bottom-right' };
    if (name in posClass) return tooltip(posClass[name], true);
    const m = {
      'Default': tooltip('top', false),   // hidden: only the trigger
      'Hover': tooltip('top', true),       // revealed on hover
      'Outside the canvas': tooltip('top', true),
    };
    return pick(m, name, tooltip('top', true));
  };

  window.ERAIKI_PREVIEWS = P;
  window.ERAIKI_ITEM_DEMOS = ITEM;
})();
