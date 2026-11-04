import { join } from 'node:path';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/html-vite',
  // Autodocs entries (each component's docs page) are labelled "Documentation", not "Docs".
  docs: { defaultName: 'Documentation' },
  // Serve the repo's icon SVGs (and any other asset) at /assets, so the Icons story
  // can reference the same files the portal does — assets/icons/<num>-<name>.svg.
  staticDirs: [{ from: join(process.cwd(), '..', 'assets'), to: '/assets' }],
  // Let Vite import the design system straight from the repo (one level up),
  // so Storybook consumes the real token definitions — no copy, no drift.
  async viteFinal(cfg) {
    cfg.server = cfg.server || {};
    cfg.server.fs = cfg.server.fs || {};
    cfg.server.fs.allow = [...(cfg.server.fs.allow || []), join(process.cwd(), '..')];
    return cfg;
  },
};
export default config;
