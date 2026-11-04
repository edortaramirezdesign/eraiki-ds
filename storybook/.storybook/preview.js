// Consume the design system straight from the repo — the real token DEFINITION —
// so every story (foundations, components, patterns, sections) uses the same source.
import '../../tokens.css';        // the token definition (single source of truth)
import '../../css/components.css'; // component styles, built on those tokens
import '../../js/eraiki.js';       // optional runtime for interactive components

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    layout: 'centered',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
    backgrounds: { disable: true },
    options: {
      // Sidebar order mirrors the custom repo's nav exactly (js/app.js buildNav +
      // FOUNDATIONS / ERAIKI_COMPONENTS / SECTIONS order). Names not yet present as
      // stories are simply skipped; '*' lets anything new fall in afterwards.
      // Anything not listed sorts alphabetically, so each section family reads
      // "<Version> - Documentation", "<Version> - Playground", next version…
      storySort: {
        method: 'alphabetical',
        order: [
          'Foundations', [
            'Theming', 'Colors', ['Primitives', 'Fill', 'Stroke', 'Semantic'],
            'Typography', ['Display', 'Headings', 'Labels', 'Body', 'Detail'], 'Spacing', 'Corner radius',
            'Border width', 'Elevations', 'Breakpoints', 'Icons', '*',
          ],
          'Components', [
            'Accordion', 'Avatar', 'Avatar group', 'Badge', 'Banner', 'Breadcrumb',
            'Button', 'Buttons group', 'Calendar', 'Card - Product', 'Cell - Featured',
            'Cell - Linkable', 'Cell - Plain', 'Cells row', 'Checkbox', 'Checkbox group',
            'Divider', 'Dropdown', 'Dropdown input', 'Dropdown options', 'File drop',
            'Image', 'Input field - Date range', 'Input field - Date selector',
            'Input field - Password', 'Input field - Text', 'Input field - Text area',
            'Label', 'Pagination', 'PIN code', 'Pill', 'Pills group', 'Placeholder',
            'Radio buttons group', 'Rating', 'Search field', 'Switch',
            'Tabs group - Desktop', 'Tabs group - Mobile', 'Text group', 'Tooltip', '*',
          ],
          'Sections', [
            'Hero', 'Values & Features', 'Explanations', 'Marquee', 'Contact',
            'Navigation Bar', 'Images & Galleries', 'Stats', 'Testimonials',
            'Brands & Logos', 'Footer', 'CTA', 'Grids', 'FAQs', 'Team', 'Tabs',
            'Process', 'Pricing', 'Video', '*',
          ],
          '*',
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Eraiki theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      document.documentElement.setAttribute('data-theme', context.globals.theme || 'light');
      return story();
    },
  ],
};

export default preview;
