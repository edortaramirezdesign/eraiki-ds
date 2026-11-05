import { ValuesFeaturesHighlightList } from '@eraiki/react';

export const Default = () => (
  <ValuesFeaturesHighlightList label="How it works" title="Four steps from idea to home"
    items={[
      { icon: 'search', title: 'Discovery', text: 'We visit the site, listen to how you live and agree on a brief and a budget.' },
      { icon: 'image', title: 'Design', text: 'Plans, 3D views and a materials board, refined together until every room feels right.' },
      { icon: 'check', title: 'Permits', text: 'We prepare and submit the full application and handle every question from the council.' },
      { icon: 'heart', title: 'Construction', text: 'Our own team builds, with weekly updates and a fixed handover date.' },
    ]} />
);
