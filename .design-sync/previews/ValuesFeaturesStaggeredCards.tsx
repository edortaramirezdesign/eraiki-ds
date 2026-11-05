import { ValuesFeaturesStaggeredCards } from '@eraiki/react';

export const Default = () => (
  <ValuesFeaturesStaggeredCards label="Services" title="One studio for the whole journey" primaryAction="See services" secondaryAction="Get a quote"
    items={[
      { title: 'Architecture', text: 'New builds, extensions and full renovations, designed around your site and budget.' },
      { title: 'Construction', text: 'Our own builders and trusted local trades, managed under one contract.' },
      { title: 'Interiors', text: 'Kitchens, joinery and furniture made in our workshop to fit each room.' },
    ]}>
    Design, build and furnish with a single team that is accountable for the result.
  </ValuesFeaturesStaggeredCards>
);
