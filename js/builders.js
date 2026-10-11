/* ==========================================================================
   Eraiki DS — shared component builders (single source of truth).
   One builder per composite component, consumed by BOTH previews.js
   (overview + doc rows) and playgrounds.js (live render), so the markup can
   never drift between surfaces. Depends on window.EK_ICONS (js/icons.js).
   ========================================================================== */
(function () {
  var I = window.EK_ICONS;
  // Component-specific decorative glyphs (used only by their builder).
  var TT_ICON = '<svg class="ek-ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7.5"/><path d="M10 9.5v4"/><circle cx="10" cy="6.5" r="0.6" fill="currentColor" stroke="none"/></svg>';
  var TG_ICON = '<svg class="ek-ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M7 10h6M10 7v6"/></svg>';

  // Rating star (exact Figma geometry) — defined once, shared by star()/rating().
  var STAR = '<svg viewBox="0 0 20 20" fill="none"><path d="M9.54845 1.69653C9.73316 1.32227 10.2668 1.32227 10.4515 1.69653L12.8426 6.54134C12.916 6.68996 13.0577 6.79297 13.2217 6.8168L18.5683 7.5937C18.9813 7.65372 19.1462 8.16128 18.8474 8.4526L14.9786 12.2238C14.8599 12.3394 14.8057 12.5061 14.8338 12.6695L15.7471 17.9944C15.8176 18.4058 15.3859 18.7195 15.0164 18.5253L10.2343 16.0111C10.0876 15.934 9.91238 15.934 9.76568 16.0111L4.98356 18.5253C4.61415 18.7195 4.18239 18.4058 4.25294 17.9944L5.16625 12.6695C5.19426 12.5061 5.14011 12.3394 5.02143 12.2238L1.15262 8.4526C0.853752 8.16128 1.01867 7.65372 1.43169 7.5937L6.77826 6.8168C6.94227 6.79297 7.08405 6.68996 7.15739 6.54134L9.54845 1.69653Z"/></svg>';

  window.EK_BUILD = {
    // Rating star cell. (empty, value, extraClass)
    star: function (empty, val, extra) {
      return '<span class="ek-star ' + (empty ? 'is-empty' : '') + ' ' + (extra || '') + '" data-val="' + (val || 1) + '">' + STAR + '</span>';
    },
    // Rating widget: five stars filled up to n.
    rating: function (n) {
      var s = '';
      for (var i = 1; i <= 5; i++) s += this.star(i > n, i);
      return '<span class="ek-rating" data-value="' + n + '">' + s + '</span>';
    },
    // Tooltip: trigger + positioned bubble. { pos, open, text }
    tooltip: function (o) {
      o = o || {};
      var pos = o.pos || 'top';
      var text = o.text || 'Lorem ipsum sit amet';
      return '<span class="ek-tooltip ' + (o.open ? 'is-open' : '') + '">' +
        '<span class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-tooltip__trigger">' + I.info + '</span>' +
        '<span class="ek-tooltip__bubble ek-tooltip__bubble--' + pos + '">' + text + '</span></span>';
    },
    // Text group: icon · label · title · body · button. { contained, label, title, text, icon, button, headingSize, bodySize, bg }
    textGroup: function (o) {
      o = o || {};
      var label = o.label !== false, title = o.title !== false, text = o.text !== false,
        icon = o.icon !== false, button = o.button !== false;
      var cls = 'ek-textgroup' + (o.contained ? ' ek-textgroup--contained' : '');
      var style = (o.contained && o.bg) ? ' style="background:' + o.bg + '"' : '';
      var iconEl = icon ? '<span class="ek-textgroup__icon">' + TG_ICON + '</span>' : '';
      var labelEl = label ? '<div class="ek-textgroup__eyebrow">Lorem ipsum</div>' : '';
      // Size overrides receive a font-size token (e.g. var(--font-size-heading-l));
      // derive the matching line-height token so both stay driven by the DS scale.
      var lhFor = function (sizeVar) { return String(sizeVar).replace('--font-size-', '--line-height-'); };
      var titleEl = title ? '<h3 class="ek-textgroup__title"' + (o.headingSize ? ' style="font-size:' + o.headingSize + ';line-height:' + lhFor(o.headingSize) + '"' : '') + '>Lorem ipsum dolor</h3>' : '';
      var headEl = (labelEl || titleEl) ? '<div class="ek-textgroup__head">' + labelEl + titleEl + '</div>' : '';
      var bodyEl = text ? '<p class="ek-textgroup__body"' + (o.bodySize ? ' style="font-size:' + o.bodySize + ';line-height:' + lhFor(o.bodySize) + '"' : '') + '>Cras lorem leo, mollis nec nunc quis, ultrices vestibulum enim.</p>' : '';
      var btnEl = button ? '<button class="ek-btn ek-btn--primary">Lorem ipsum</button>' : '';
      return '<div class="' + cls + '"' + style + '><div class="ek-textgroup__top">' + iconEl + headEl + bodyEl + '</div>' + btnEl + '</div>';
    },
    // Search field: field + optional submit button. { value, mod, disabled, width, button }
    searchField: function (o) {
      o = o || {};
      var mod = o.mod || '';
      var width = o.width ? ' style="width:' + o.width + '"' : '';
      var dis = o.disabled ? ' disabled' : '';
      var clear = '<span data-ek-clear class="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm">' + I.closeXs + '</span>';
      var btn = o.button ? '<button class="ek-btn ek-btn--primary ' + (o.disabled ? 'is-disabled' : '') + '">Search</button>' : '';
      return '<div class="ek-search"' + width + '><div class="ek-input ' + mod + '">' + I.search +
        '<input value="' + (o.value || '') + '" placeholder="Search…"' + dis + '>' + clear + '</div>' + btn + '</div>';
    },
    // Tabs — Mobile: collapsible selector. { selected, open, opts }
    tabm: function (o) {
      o = o || {};
      var selected = o.selected || 'Home';
      var opts = o.opts || ['Home', 'Search', 'Profile', 'Settings'];
      var list = opts.map(function (x) {
        return '<span class="ek-tabm__opt ' + (x === selected ? 'is-on' : '') + '">' + x + '</span>';
      }).join('');
      return '<div class="ek-tabm ' + (o.open ? 'is-open' : '') + '">' +
        '<div class="ek-tabm__head"><span class="ek-tabm__label">' + selected + '</span><span class="ek-btn ek-btn--tertiary ek-btn--icon">' + I.chevronDown + '</span></div>' +
        '<div class="ek-tabm__list">' + list + '</div></div>';
    },
  };
})();
