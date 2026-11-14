// Section entrance reveal — same behaviour as js/eraiki.js. The section canvas
// (.ek-section) shows at once; what sits in its Container columns fades in from a
// 12px blur a moment later, the first time the section scrolls into view. Styling
// lives in css/components.css (ek-reveal-fade / ek-reveal-blur).
const REVEAL_DELAY = 200, REVEAL_STEP = 60, REVEAL_MAX_STEPS = 6, REVEAL_DURATION = 400;

function revealItems(root: Element): HTMLElement[] {
  const items: HTMLElement[] = [];
  const containers = [root.matches('.ek-container') ? root : null, ...Array.from(root.querySelectorAll('.ek-container'))]
    .filter((c): c is Element => {
      if (!c) return false;
      if (c === root) return true;
      const anc = c.parentElement?.closest('.ek-container');
      return !anc || !root.contains(anc);
    });
  containers.forEach(c => Array.from(c.children).forEach(col => {
    if (col.children.length) items.push(...(Array.from(col.children) as HTMLElement[]));
    else items.push(col as HTMLElement);
  }));
  if (!root.matches('.ek-container')) Array.from(root.children).forEach(ch => {
    if (!ch.matches('.ek-container') && !ch.querySelector('.ek-container')) items.push(ch as HTMLElement);
  });
  return items
    .filter(el => getComputedStyle(el).animationName === 'none')
    .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
}

/** Arms every `.ek-section` inside `scope` (now and as they mount) and reveals each one
 *  when it scrolls into view. Returns a cleanup. No-op with reduced motion. */
export function observeSectionReveal(scope: Element): () => void {
  if (typeof IntersectionObserver === 'undefined') return () => {};
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return () => {};
  const timers: number[] = [];
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const root = e.target; io.unobserve(root);
    root.setAttribute('data-ek-reveal', 'in');
    const items = root.querySelectorAll<HTMLElement>('[data-ek-reveal-item]');
    const last = REVEAL_DELAY + Math.min(items.length - 1, REVEAL_MAX_STEPS) * REVEAL_STEP + REVEAL_DURATION;
    timers.push(window.setTimeout(() => {
      root.setAttribute('data-ek-reveal', 'done');
      items.forEach(el => { el.removeAttribute('data-ek-reveal-item'); el.style.removeProperty('--ek-reveal-delay'); });
    }, last + 50));
  }), { threshold: 0.1 });
  const arm = (root: Element) => {
    if (root.hasAttribute('data-ek-reveal')) return;
    revealItems(root).forEach((el, i) => {
      el.setAttribute('data-ek-reveal-item', '');
      el.style.setProperty('--ek-reveal-delay', `${REVEAL_DELAY + Math.min(i, REVEAL_MAX_STEPS) * REVEAL_STEP}ms`);
    });
    root.setAttribute('data-ek-reveal', 'pending');
    io.observe(root);
  };
  const scan = (node: Node) => {
    if (!(node instanceof Element)) return;
    if (node.matches('.ek-section')) arm(node);
    node.querySelectorAll('.ek-section').forEach(arm);
  };
  scan(scope);
  const mo = new MutationObserver(list => list.forEach(m => m.addedNodes.forEach(scan)));
  mo.observe(scope, { childList: true, subtree: true });
  return () => { mo.disconnect(); io.disconnect(); timers.forEach(clearTimeout); };
}
