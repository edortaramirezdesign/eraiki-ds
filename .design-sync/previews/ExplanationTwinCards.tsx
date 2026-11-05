import { ExplanationTwinCards } from '@eraiki/react';

export const TextImage = () => (
  <ExplanationTwinCards label="Sustainability" title="Homes that use half the energy of a standard build" primaryAction="Read the report" secondaryAction="Talk to us">
    Passive design, triple glazing and heat-recovery ventilation keep every room comfortable all year with minimal running costs.
  </ExplanationTwinCards>
);
export const ImageText = () => (
  <ExplanationTwinCards order="image-text" label="Interiors" title="Light, calm rooms designed around daily routines" primaryAction="See interiors" secondaryAction="Book a consultation">
    We map how each family uses its home before drawing a single wall, so storage, light and circulation fall into place.
  </ExplanationTwinCards>
);
