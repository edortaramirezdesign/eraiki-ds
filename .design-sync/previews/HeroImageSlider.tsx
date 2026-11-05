import { HeroImageSlider } from '@eraiki/react';

export const Default = () => (
  <HeroImageSlider label="New collection" title="Designed in the Basque Country, built to last a lifetime" primaryAction="Explore the collection">
    Handmade furniture from local oak and ash, finished by the same workshop that has shaped it for three generations.
  </HeroImageSlider>
);
export const WithoutArrows = () => (
  <HeroImageSlider showNav={false} label="Studio" title="Spaces that feel calm from the first step" primaryAction="Book a visit">
    We plan, build and furnish homes with a single team, from the first sketch to the last cushion.
  </HeroImageSlider>
);
