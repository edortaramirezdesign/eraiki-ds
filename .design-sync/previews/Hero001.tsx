import { Hero001 } from '@eraiki/react';

export const Default = () => (
  <Hero001 label="New collection" title="Designed in the Basque Country, built to last a lifetime" primaryAction="Explore the collection">
    Handmade furniture from local oak and ash, finished by the same workshop that has shaped it for three generations.
  </Hero001>
);
export const WithoutArrows = () => (
  <Hero001 showNav={false} label="Studio" title="Spaces that feel calm from the first step" primaryAction="Book a visit">
    We plan, build and furnish homes with a single team, from the first sketch to the last cushion.
  </Hero001>
);
