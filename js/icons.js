/* ==========================================================================
   Eraiki DS — canonical icon set (single source of truth).
   Shared by previews.js and playgrounds.js via window.EK_ICONS, so the same
   glyph never diverges between the overview and the playground.
   Stroke/fill come from the .ek-ic CSS class (icon-size / icon-stroke tokens).
   ========================================================================== */
(function () {
  var svg = function (inner, cls) {
    return '<svg class="ek-ic ' + (cls || '') + '" viewBox="0 0 20 20" aria-hidden="true">' + inner + '</svg>';
  };
  window.EK_ICONS = {
    check: svg('<path d="M4 10.5l4 4 8-9"/>'),
    chevronDown: svg('<path d="M5 8l5 5 5-5"/>'),
    chevronRight: svg('<path d="M8 5l5 5-5 5"/>'),
    chevronLeft: svg('<path d="M12 5l-5 5 5 5"/>'),
    search: svg('<circle cx="9" cy="9" r="5"/><path d="M17 17l-3.5-3.5"/>'),
    eye: svg('<path d="M2 10C3.6 6.6 6.5 4.5 10 4.5C13.5 4.5 16.4 6.6 18 10C16.4 13.4 13.5 15.5 10 15.5C6.5 15.5 3.6 13.4 2 10Z"/><path d="M12 10.0242C12 11.0991 11.1046 11.9704 10 11.9704C8.89543 11.9704 8 11.0991 8 10.0242C8 8.94942 8.89543 8.0781 10 8.0781C11.1046 8.0781 12 8.94942 12 10.0242Z"/>'),
    eyeOff: svg('<path d="M17 16.25L4.5 3.75M8.5 8.70131C8.18882 9.04438 8 9.49503 8 9.98859C8 11.0634 8.89543 11.9347 10 11.9347C10.5093 11.9347 10.9741 11.7495 11.3272 11.4445M17.0323 11.9347C17.7209 10.904 18 10.0634 18 10.0634C18 10.0634 16.1795 4.25 10 4.25C9.65308 4.25 9.31989 4.26832 9 4.30291M14.5 14.4579C13.3522 15.1901 11.8744 15.7079 10 15.6773C3.89744 15.5775 2 10.0634 2 10.0634C2 10.0634 2.88155 7.2484 5.5 5.5361"/>'),
    calendar: svg('<rect x="3" y="4" width="14" height="13" rx="1.5"/><path d="M3 8h14M7 2v4M13 2v4"/>'),
    plus: svg('<path d="M10 4v12M4 10h12"/>'),
    trash: svg('<path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10"/>'),
    info: svg('<circle cx="10" cy="10" r="8"/><path d="M10 9v5M10 6.2v.2"/>'),
    alert: svg('<path d="M10 3l8 14H2z"/><path d="M10 8v4M10 14.5v.2"/>'),
    success: svg('<circle cx="10" cy="10" r="8"/><path d="M6 10.5l2.5 2.5L14 7.5"/>'),
    error: svg('<circle cx="10" cy="10" r="8"/><path d="M13 7l-6 6M7 7l6 6"/>'),
    upload: svg('<path d="M4.571 13.048C3.151 13.048 2 12.159 2 10.856C2 9.553 3.151 8.497 4.571 8.497C4.668 8.497 4.763 8.502 4.857 8.511V8.497H4.893C4.869 8.325 4.857 8.15 4.857 7.972C4.857 5.656 6.904 3.778 9.429 3.778C11.138 3.778 12.629 4.639 13.413 5.914C13.605 5.889 13.8 5.875 14 5.875C16.209 5.875 18 7.518 18 9.545C18 11.214 16.786 12.486 15.125 12.905M9.874 16.222V10.201M12.5 12.684L9.874 10.201L7.25 12.684"/>'),
    user: svg('<circle cx="10" cy="6.5" r="3"/><path d="M4 16.5c0-3 2.5-5 6-5s6 2 6 5"/>'),
    image: svg('<rect x="3" y="4" width="14" height="12" rx="1.5"/><circle cx="7.5" cy="8.5" r="1.5"/><path d="M4 15l4-4 3 3 3-3 2 2"/>'),
    heart: svg('<path d="M10 16.5S3.5 12.2 3.5 7.9A3.3 3.3 0 0110 6a3.3 3.3 0 016.5 1.9c0 4.3-6.5 8.6-6.5 8.6z"/>'),
    close: svg('<path d="M5 5l10 10M15 5L5 15"/>'),
    closeXs: svg('<path d="M7 7l6 6M13 7l-6 6"/>'),
    closeSm: svg('<path d="M5 5l10 10M15 5L5 15"/>', 'ek-ic--s'),
  };
})();
