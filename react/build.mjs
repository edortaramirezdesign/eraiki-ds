// Bundles src/ into dist/index.js (ESM, React external). Types come from `tsc`.
// Also writes dist/eraiki.css = the repo's single-source tokens.css + css/components.css
// (concatenated verbatim, never edited) so consumers import one stylesheet.
import { build } from 'esbuild';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

await build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  jsx: 'automatic',
  target: 'es2020',
  external: ['react', 'react/jsx-runtime', 'react-dom'],
  // Section sample images/logos are inlined as data URLs (src/sections/images.ts).
  loader: { '.webp': 'dataurl', '.jpg': 'dataurl', '.svg': 'dataurl' },
  logLevel: 'info',
});

mkdirSync('dist', { recursive: true });
const css = ['../tokens.css', '../css/components.css']
  .map((f) => `/* ---- ${f.replace('../', '')} ---- */\n${readFileSync(new URL(f, import.meta.url), 'utf8')}`)
  .join('\n');
writeFileSync('dist/eraiki.css', css);
console.log('  dist/eraiki.css written');
