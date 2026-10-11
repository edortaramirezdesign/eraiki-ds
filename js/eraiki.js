/* ==========================================================================
   Eraiki DS — component behaviours (vanilla, zero-dependency).
   Global event delegation on document, so it works with statically pasted
   markup AND with dynamically injected HTML. Just include this file + the
   CSS, and use the .ek-* markup.
   ========================================================================== */
(function () {
  const closest = (el, sel) => (el && el.closest ? el.closest(sel) : null);

  function setDropdownText(dd, text) {
    const face = dd.querySelector(':scope > .ek-input .ek-ddinput__value, :scope > .ek-input span, :scope > .ek-input input');
    if (!face) return;
    if (face.tagName === 'INPUT') face.value = text;
    else { face.textContent = text; face.classList.remove('is-placeholder'); }
  }
  function closeDropdowns(except) {
    document.querySelectorAll('.ek-dropdown.is-open').forEach(d => { if (d !== except) d.classList.remove('is-open'); });
  }
  // Re-draw the password SVG dots to match the typed length (grey placeholder of 8 when empty).
  function renderPwDots(input) {
    const box = input.closest('.ek-pwbox'); if (!box) return;
    const dots = box.querySelector('.ek-pwbox__dots'); if (!dots) return;
    const n = input.value.length;
    const count = n || 8;
    const w = count * 12 - 4;
    let c = '';
    for (let i = 0; i < count; i++) c += '<circle cx="' + (4 + i * 12) + '" cy="4" r="4"/>';
    dots.innerHTML = '<svg width="' + w + '" height="8" viewBox="0 0 ' + w + ' 8" fill="currentColor" aria-hidden="true">' + c + '</svg>';
    dots.classList.toggle('is-empty', n === 0);
  }
  function fillRating(r, v) {
    r.querySelectorAll('[data-val]').forEach(s => {
      const sv = parseInt(s.getAttribute('data-val'), 10);
      s.classList.toggle('is-empty', sv > v);
      s.classList.remove('is-preview');
    });
  }
  // Hover preview: only darken the border of not-yet-selected stars up to the cursor.
  // The yellow fill is applied on click, never on hover (matches Figma).
  function previewRating(r, v) {
    const cur = parseInt(r.getAttribute('data-value') || '0', 10);
    r.querySelectorAll('[data-val]').forEach(s => {
      const sv = parseInt(s.getAttribute('data-val'), 10);
      s.classList.toggle('is-preview', sv > cur && sv <= v);
    });
  }
  function clearRatingPreview(r) {
    r.querySelectorAll('[data-val]').forEach(s => s.classList.remove('is-preview'));
  }

  // ---------------- calendar helpers (exposed for previews/playgrounds) ----------------
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  function calendarDays(year, month, opts) {
    opts = opts || {};
    const startDow = (new Date(year, month, 1).getDay() + 6) % 7; // Monday = 0
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDays = new Date(year, month, 0).getDate();
    const cell = (n, cls) => `<span class="ek-calendar__day ${cls}"><span class="ek-calendar__num">${n}</span></span>`;
    let html = '';
    for (let i = startDow; i > 0; i--) html += cell(prevDays - i + 1, 'is-muted');
    for (let d = 1; d <= daysInMonth; d++) {
      let cls = '';
      if (opts.selected === d) cls = 'is-on';
      else if (opts.range) { const a = opts.range[0], b = opts.range[1]; if (d === a) cls = 'is-range-start'; else if (d === b) cls = 'is-range-end'; else if (d > a && d < b) cls = 'is-range-middle'; }
      else if (opts.preview) { const a = opts.preview[0], b = opts.preview[1]; if (d === a) cls = 'is-range-start'; else if (d === b) cls = 'is-range-preview is-range-preview-end'; else if (d > a && d < b) cls = 'is-range-preview'; }
      else if (opts.hover === d) cls = 'is-hover';
      html += cell(d, cls);
    }
    const trailing = (7 - ((startDow + daysInMonth) % 7)) % 7;
    for (let d = 1; d <= trailing; d++) html += cell(d, 'is-muted');
    return html;
  }
  function monthLabel(year, month, monthOnly) { return monthOnly ? MONTHS[month] : MONTHS[month] + ' ' + year; }
  function yearField(current) {
    const chev = '<svg class="ek-ic ek-ic--s" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8l4 4 4-4"/></svg>';
    const check = '<svg class="ek-ic ek-opt__check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5l4 4 8-9"/></svg>';
    let opts = '';
    for (let y = current - 2; y <= current + 2; y++) opts += `<div class="ek-opt${y === current ? ' is-selected' : ''}">${y}${y === current ? check : ''}</div>`;
    return `<div class="ek-field ek-calendar__year"><span class="ek-field__label">Year:</span><div class="ek-dropdown"><div class="ek-input"><span style="flex:1">Year…</span>${chev}</div><div class="ek-dropdown__menu">${opts}</div></div></div>`;
  }
  window.EK = window.EK || {};
  window.EK.calendarDays = calendarDays;
  window.EK.monthLabel = monthLabel;
  window.EK.yearField = yearField;

  // ---------------- click ----------------
  document.addEventListener('click', function (e) {
    const t = e.target;

    // Calendar month navigation (prev / next)
    const calNav = closest(t, '[data-cal-nav]');
    if (calNav) {
      const cal = calNav.closest('.ek-calendar');
      if (cal) {
        let y = parseInt(cal.dataset.calYear, 10), m = parseInt(cal.dataset.calMonth, 10);
        m += parseInt(calNav.dataset.calNav, 10);
        if (m < 0) { m += 12; y--; } else if (m > 11) { m -= 12; y++; }
        cal.dataset.calYear = y; cal.dataset.calMonth = m;
        delete cal.dataset.calRangeStart; // reset any pending range when changing month
        const label = cal.querySelector('.ek-calendar__label');
        if (label) label.textContent = monthLabel(y, m, cal.dataset.calMonthonly === '1');
        const grid = cal.querySelector('.ek-calendar__grid');
        if (grid) {
          const dow = Array.from(grid.querySelectorAll('.ek-calendar__dow')).map(x => x.outerHTML).join('');
          grid.innerHTML = dow + calendarDays(y, m);
        }
      }
      return;
    }

    // Accordion — one open at a time within its container
    const accHead = closest(t, '.ek-accordion__head');
    if (accHead) {
      const item = accHead.closest('.ek-accordion__item');
      const acc = accHead.closest('.ek-accordion');
      const willOpen = !item.classList.contains('is-open');
      if (acc) acc.querySelectorAll('.ek-accordion__item.is-open').forEach(i => i.classList.remove('is-open'));
      if (willOpen) item.classList.add('is-open');
      return;
    }

    // Switch
    const sw = closest(t, '.ek-switch');
    if (sw && !sw.classList.contains('is-disabled')) { sw.classList.toggle('is-on'); return; }

    // Checkbox
    const chk = closest(t, '.ek-check');
    if (chk && !chk.classList.contains('is-disabled')) { chk.classList.remove('is-indeterminate'); chk.classList.toggle('is-on'); return; }

    // Radio — one per group
    const rad = closest(t, '.ek-radio');
    if (rad && !rad.classList.contains('is-disabled')) {
      const grp = rad.closest('.ek-check-group') || rad.parentElement;
      grp.querySelectorAll('.ek-radio').forEach(r => r.classList.remove('is-on'));
      rad.classList.add('is-on');
      return;
    }

    // Pills — toggle
    const pill = closest(t, '.ek-pill');
    if (pill && !pill.classList.contains('is-disabled')) { pill.classList.toggle('is-on'); return; }

    // Tabs
    const tab = closest(t, '.ek-tab');
    if (tab) {
      const tabs = tab.closest('.ek-tabs');
      if (tabs) tabs.querySelectorAll('.ek-tab').forEach(x => x.classList.remove('is-on'));
      tab.classList.add('is-on');
      return;
    }

    // Tabs — Mobile (collapsible selector): header toggles open; option selects + collapses
    const tmHead = closest(t, '.ek-tabm__head');
    if (tmHead) { tmHead.closest('.ek-tabm').classList.toggle('is-open'); return; }
    const tmOpt = closest(t, '.ek-tabm__opt');
    if (tmOpt) {
      const tm = tmOpt.closest('.ek-tabm');
      tm.querySelectorAll('.ek-tabm__opt').forEach(o => o.classList.remove('is-on'));
      tmOpt.classList.add('is-on');
      const lbl = tm.querySelector('.ek-tabm__label');
      if (lbl) lbl.textContent = tmOpt.textContent;
      tm.classList.remove('is-open');
      return;
    }

    // Pagination (numeric pages)
    const page = closest(t, '.ek-page');
    if (page && /^\d+$/.test(page.textContent.trim())) {
      const pg = page.closest('.ek-pagination');
      pg.querySelectorAll('.ek-page').forEach(x => x.classList.remove('is-on'));
      page.classList.add('is-on');
      return;
    }

    // Rating star (click to set)
    const star = closest(t, '.ek-rating [data-val]');
    if (star) {
      const r = star.closest('.ek-rating');
      const v = parseInt(star.getAttribute('data-val'), 10);
      r.setAttribute('data-value', v);
      fillRating(r, v);
      return;
    }

    // Password show/hide. .ek-pwbox masks via CSS (transparent text + SVG dots), so only
    // toggle is-revealed; the legacy .ek-input password toggles the real input type.
    const eye = closest(t, '[data-ek-toggle-password]');
    if (eye) {
      const box = eye.closest('.ek-pwbox, .ek-input');
      if (box) box.classList.toggle('is-revealed');
      if (box && box.classList.contains('ek-input')) {
        const inp = box.querySelector('input');
        if (inp) inp.type = inp.type === 'password' ? 'text' : 'password';
      }
      return;
    }

    // Dismiss (banner, chips…)
    const dismiss = closest(t, '[data-ek-dismiss]');
    if (dismiss) { const box = dismiss.closest('.ek-banner, .ek-label'); if (box) box.remove(); return; }

    // File drop: remove an uploaded document row
    const fileDel = closest(t, '.ek-filedrop__doc .ek-btn');
    if (fileDel) { const row = fileDel.closest('.ek-filedrop__doc'); if (row && !row.classList.contains('is-disabled')) row.remove(); return; }

    // Search clear
    const clr = closest(t, '[data-ek-clear]');
    if (clr) { const inp = clr.closest('.ek-input').querySelector('input'); if (inp) { inp.value = ''; inp.focus(); } return; }

    // Dropdown option select (before the toggle check)
    const opt = closest(t, '.ek-dropdown__menu .ek-opt');
    if (opt) {
      const menu = opt.closest('.ek-dropdown__menu');
      const multi = opt.querySelector('.ek-check');
      if (multi) { multi.classList.toggle('is-on'); return; } // multi-select: keep open
      menu.querySelectorAll('.ek-opt').forEach(o => o.classList.remove('is-selected'));
      opt.classList.add('is-selected');
      const dd = opt.closest('.ek-dropdown');
      if (dd) { setDropdownText(dd, opt.textContent.trim()); dd.classList.remove('is-open'); }
      // Calendar year selector → jump the calendar to the chosen year
      const calY = opt.closest('.ek-calendar__year') && opt.closest('.ek-calendar');
      if (calY) {
        const y = parseInt(opt.textContent, 10);
        const m = parseInt(calY.dataset.calMonth, 10);
        calY.dataset.calYear = y;
        const lbl = calY.querySelector('.ek-calendar__label');
        if (lbl) lbl.textContent = monthLabel(y, m, calY.dataset.calMonthonly === '1');
        const grid = calY.querySelector('.ek-calendar__grid');
        if (grid) { const dow = Array.from(grid.querySelectorAll('.ek-calendar__dow')).map(x => x.outerHTML).join(''); grid.innerHTML = dow + calendarDays(y, m); }
      }
      return;
    }

    // Dropdown open/close (click on its trigger input)
    const trigger = closest(t, '.ek-dropdown > .ek-input');
    if (trigger) {
      const dd = trigger.closest('.ek-dropdown');
      const open = dd.classList.contains('is-open');
      closeDropdowns(dd);
      dd.classList.toggle('is-open', !open);
      return;
    }

    // Calendar day
    const day = closest(t, '.ek-calendar__day');
    if (day && !day.classList.contains('is-muted')) {
      const cal = day.closest('.ek-calendar');
      const n = parseInt(day.textContent, 10);
      const RANGE_CLASSES = ['is-on', 'is-range-start', 'is-range-middle', 'is-range-end'];
      const clearSel = () => cal.querySelectorAll('.ek-calendar__day').forEach(d => d.classList.remove.apply(d.classList, RANGE_CLASSES));
      if (cal.dataset.calMode === 'range') {
        if (!cal.dataset.calRangeStart) {
          // first click: start a fresh range, drop the previous selection
          clearSel();
          day.classList.add('is-on');
          cal.dataset.calRangeStart = n;
        } else {
          // second click: close the range (swap if picked backwards)
          let a = parseInt(cal.dataset.calRangeStart, 10), b = n;
          if (b < a) { const tmp = a; a = b; b = tmp; }
          clearSel();
          cal.querySelectorAll('.ek-calendar__day').forEach(d => {
            if (d.classList.contains('is-muted')) return;
            const v = parseInt(d.textContent, 10);
            if (a === b && v === a) d.classList.add('is-on');
            else if (v === a) d.classList.add('is-range-start');
            else if (v === b) d.classList.add('is-range-end');
            else if (v > a && v < b) d.classList.add('is-range-middle');
          });
          delete cal.dataset.calRangeStart; // range complete → next click restarts
        }
      } else {
        clearSel();
        day.classList.add('is-on');
      }
      return;
    }

    // File drop (click to "browse")
    const drop = closest(t, '.ek-filedrop');
    if (drop) { drop.classList.add('is-active'); setTimeout(() => drop.classList.remove('is-active'), 200); return; }

    // Click outside any dropdown → close
    if (!closest(t, '.ek-dropdown')) closeDropdowns(null);
  });

  // ---------------- rating hover preview ----------------
  document.addEventListener('mouseover', function (e) {
    const star = closest(e.target, '.ek-rating [data-val]');
    if (!star) return;
    const r = star.closest('.ek-rating');
    previewRating(r, parseInt(star.getAttribute('data-val'), 10));
  });
  document.addEventListener('mouseout', function (e) {
    const r = closest(e.target, '.ek-rating');
    if (!r) return;
    clearRatingPreview(r);
  });

  // ---------------- PIN code auto-advance ----------------
  document.addEventListener('input', function (e) {
    const cell = closest(e.target, '.ek-pin input');
    if (cell) {
      cell.value = cell.value.replace(/\D/g, '').slice(0, 1);
      cell.closest('.ek-pin__cell').classList.toggle('is-filled', !!cell.value);
      if (cell.value) {
        const cells = [...cell.closest('.ek-pin').querySelectorAll('input')];
        const next = cells[cells.indexOf(cell) + 1];
        if (next) next.focus();
      }
      return;
    }
    // Password: redraw SVG dots to match what's typed
    const pw = closest(e.target, '.ek-pwbox__input');
    if (pw) { renderPwDots(pw); return; }
    // Date range: numeric-only segments with auto-advance (DD → MM → AAAA)
    const seg = closest(e.target, '.ek-dateinput__seg');
    if (seg) {
      seg.value = seg.value.replace(/\D/g, '').slice(0, seg.maxLength);
      if (seg.value.length >= seg.maxLength) {
        const segs = [...seg.closest('.ek-dateinput').querySelectorAll('.ek-dateinput__seg')];
        const next = segs[segs.indexOf(seg) + 1];
        if (next) next.focus();
      }
    }
  });
  document.addEventListener('keydown', function (e) {
    const cell = closest(e.target, '.ek-pin input');
    if (!cell || e.key !== 'Backspace' || cell.value) return;
    const cells = [...cell.closest('.ek-pin').querySelectorAll('input')];
    const prev = cells[cells.indexOf(cell) - 1];
    if (prev) { prev.focus(); prev.value = ''; }
  });

  // ---------------- file drop drag states ----------------
  ['dragover', 'dragenter'].forEach(ev => document.addEventListener(ev, function (e) {
    const drop = closest(e.target, '.ek-filedrop');
    if (drop) { e.preventDefault(); drop.classList.add('is-dragging'); }
  }));
  ['dragleave', 'drop'].forEach(ev => document.addEventListener(ev, function (e) {
    const drop = closest(e.target, '.ek-filedrop');
    if (drop) { e.preventDefault(); drop.classList.remove('is-dragging'); }
  }));

  // expose a no-op init for parity with component libraries
  window.Eraiki = { init: function () {} };
})();
