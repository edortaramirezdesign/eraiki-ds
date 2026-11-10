// Eraiki preview block for the Docs pages (components and sections) — replaces Storybook's
// Canvas/Primary toolbar (reload, zooms, open in new tab) with the three controls that
// matter for the design system:
//   · Theme       Light / Dark   — renders the story with that theme only in this preview
//   · Breakpoint  Desktop / Mobile — Desktop fills the block at 100% (real size, its own
//                 responsive rules apply to the window width); Mobile is a real 375px
//                 frame, so the mobile media queries and tokens apply as in production
//   · View        Preview / Code — swaps the live element for its HTML (with Copy)
// The story is rendered in an iframe of Storybook's own preview (iframe.html?id=…), the
// same thing Storybook does for non-inline stories, with `globals=theme:…` for the theme.
// Plain React.createElement (no JSX), like the rest of this html-vite setup.
import React from 'react';
import { useOf, Source } from '@storybook/addon-docs/blocks';
import { playgroundRender, playgroundArgs, componentSourceTransform } from './_component.js';
import { sectionRender, sectionSourceTransform } from './_section.js';

const h = React.createElement;
const MOBILE_WIDTH = 375;
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

// Readable HTML: one tag per line, indented by depth (text stays on its tag's line).
export function formatHtml(html) {
  const tokens = String(html).replace(/>\s+</g, '><').split(/(<[^>]+>)/).filter((t) => t.trim() !== '');
  const out = [];
  let depth = 0;
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    const pad = '  '.repeat(Math.max(depth, 0));
    if (/^<\//.test(t)) { depth -= 1; out.push('  '.repeat(Math.max(depth, 0)) + t); continue; }
    if (/^</.test(t)) {
      const name = (t.match(/^<([a-zA-Z0-9-]+)/) || [])[1] || '';
      const selfClosing = VOID.has(name.toLowerCase()) || /\/>$/.test(t) || /^<!/.test(t);
      // <tag>text</tag> on one line
      if (!selfClosing && tokens[i + 1] && !/^</.test(tokens[i + 1]) && tokens[i + 2] === `</${name}>`) {
        out.push(pad + t + tokens[i + 1].trim() + tokens[i + 2]); i += 2; continue;
      }
      out.push(pad + t);
      if (!selfClosing) depth += 1;
      continue;
    }
    out.push(pad + t.trim());
  }
  return out.join('\n');
}

function codeFor(ek) {
  if (!ek) return '';
  if (ek.kind === 'component') return formatHtml(componentSourceTransform(playgroundRender(ek.slug, playgroundArgs(ek.slug))));
  if (ek.kind === 'section') return formatHtml(sectionSourceTransform(sectionRender(ek.slug)));
  return '';
}

function Segmented({ label, value, options, onChange }) {
  return h('div', { className: 'ek-pv__group', role: 'radiogroup', 'aria-label': label },
    options.map((o) => h('button', {
      key: o.value, type: 'button', role: 'radio', 'aria-checked': value === o.value,
      className: 'ek-pv__btn' + (value === o.value ? ' is-active' : ''),
      onClick: () => onChange(o.value),
    }, o.label)));
}

// Auto-height iframe of the story (same-origin, so we can measure its content).
// `width`: the frame's CSS width (null = fill the block, so Desktop is real size and
// responsive to the window). Never zoomed: if a fixed width ever exceeds the block it is
// scaled down only as a last resort.
function StoryFrame({ storyId, theme, width }) {
  const ref = React.useRef(null);
  const boxRef = React.useRef(null);
  const [height, setHeight] = React.useState(160);
  const [boxW, setBoxW] = React.useState(0);
  const src = `iframe.html?id=${encodeURIComponent(storyId)}&viewMode=story&globals=theme:${theme}&ek-embed=1`;
  React.useEffect(() => {
    const box = boxRef.current;
    if (!box || !('ResizeObserver' in window)) return undefined;
    const ro = new ResizeObserver(() => setBoxW(box.clientWidth));
    ro.observe(box); setBoxW(box.clientWidth);
    return () => ro.disconnect();
  }, []);
  React.useEffect(() => {
    const f = ref.current;
    if (!f) return undefined;
    let ro = null;
    const measure = () => {
      const d = f.contentDocument;
      const root = d && d.getElementById('storybook-root');
      if (!root) return;
      const hgt = Math.ceil(root.getBoundingClientRect().height);
      if (hgt) setHeight(hgt);
      if (!ro && 'ResizeObserver' in window) { ro = new ResizeObserver(measure); ro.observe(root); }
    };
    const timer = setInterval(measure, 300); // until the story renders; images and fonts
    const stop = setTimeout(() => clearInterval(timer), 10000);
    f.addEventListener('load', measure);
    return () => { clearInterval(timer); clearTimeout(stop); f.removeEventListener('load', measure); if (ro) ro.disconnect(); };
  }, [src]);
  const frameW = width || boxW || 0;
  const scale = width && boxW && width > boxW ? boxW / width : 1;
  return h('div', { ref: boxRef, className: 'ek-pv__fit', style: { height: `${Math.ceil(height * scale)}px` } },
    h('iframe', {
      ref, src, title: 'Preview', className: 'ek-pv__frame', scrolling: 'no',
      style: { width: frameW ? `${frameW}px` : '100%', height: `${height}px`, transform: scale < 1 ? `scale(${scale})` : 'none', transformOrigin: 'top left' },
    }));
}

export const EkPreview = ({ of }) => {
  const resolved = useOf(of || 'story', ['story']);
  const story = resolved.story;
  const ek = (story.parameters && story.parameters.ek) || null;
  const pageTheme = (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme')) || 'light';
  const [theme, setTheme] = React.useState(pageTheme === 'dark' ? 'dark' : 'light');
  const [bp, setBp] = React.useState('desktop');
  const [view, setView] = React.useState('preview');
  const code = React.useMemo(() => codeFor(ek), [ek && ek.slug]);
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(done, () => {});
  };

  const toolbar = h('div', { className: 'ek-pv__bar' },
    h(Segmented, { label: 'Theme', value: theme, onChange: setTheme, options: [{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }] }),
    h(Segmented, { label: 'Breakpoint', value: bp, onChange: setBp, options: [{ value: 'desktop', label: 'Desktop' }, { value: 'mobile', label: 'Mobile' }] }),
    h('span', { className: 'ek-pv__spacer' }),
    view === 'code' ? h('button', { type: 'button', className: 'ek-pv__copy', onClick: copy }, copied ? 'Copied' : 'Copy code') : null,
    h(Segmented, { label: 'View', value: view, onChange: setView, options: [{ value: 'preview', label: 'Preview' }, { value: 'code', label: 'Code' }] }));

  const body = view === 'code'
    ? h('div', { className: 'ek-pv__code' }, h(Source, { code, language: 'html', dark: true }))
    : h('div', { className: 'ek-pv__stage' + (bp === 'mobile' ? ' is-mobile' : '') },
      h(StoryFrame, { key: `${theme}-${bp}`, storyId: story.id, theme, width: bp === 'mobile' ? MOBILE_WIDTH : null }));

  return h('div', { className: 'ek-pv sb-unstyled' + (ek && ek.kind === 'section' ? ' ek-pv--wide' : '') }, toolbar, body);
};
