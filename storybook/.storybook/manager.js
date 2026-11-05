import { addons } from 'storybook/manager-api';

// Section pages keep their full titles ("<Version> - Documentation" / "<Version> - Playground")
// so ids and URLs stay unique and stable, but the sidebar shows just "<Version>": the
// coloured icon in front (docs page vs story) already tells the two apart.
const SUFFIX = / - (Documentation|Playground)$/;

addons.setConfig({
  sidebar: {
    renderLabel: (item) => (typeof item.name === 'string' ? item.name.replace(SUFFIX, '') : item.name),
  },
});
