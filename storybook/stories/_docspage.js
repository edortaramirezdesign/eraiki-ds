// Custom Docs page layout: just the live component (Eraiki preview block: theme,
// breakpoint and preview/code controls) at the very top,
// then the written documentation — no controls/props table. Shared by every component's
// generated story via parameters.docs.page. Plain React.createElement (no JSX) to avoid
// any JSX-transform config in this @storybook/html-vite setup. (The interactive controls
// still live in the Playground story's own Controls panel.)
import React from 'react';
import { Title, Description } from '@storybook/addon-docs/blocks';
import { EkPreview } from './_preview.js';

export const DocsPage = () => React.createElement(
  React.Fragment,
  null,
  React.createElement(Title, null),
  React.createElement(EkPreview, null),
  React.createElement(Description, null),
);
