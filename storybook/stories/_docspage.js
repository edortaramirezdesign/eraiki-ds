// Custom Docs page layout: just the live component (Primary canvas) at the very top,
// then the written documentation — no controls/props table. Shared by every component's
// generated story via parameters.docs.page. Plain React.createElement (no JSX) to avoid
// any JSX-transform config in this @storybook/html-vite setup. (The interactive controls
// still live in the Playground story's own Controls panel.)
import React from 'react';
import { Title, Primary, Description } from '@storybook/addon-docs/blocks';

export const DocsPage = () => React.createElement(
  React.Fragment,
  null,
  React.createElement(Title, null),
  React.createElement(Primary, null),
  React.createElement(Description, null),
);
