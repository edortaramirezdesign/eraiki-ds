import { Explanation005, sectionImages } from '@eraiki/react';

const gallery = [sectionImages.portrait2, sectionImages.landscape, sectionImages.portrait3, sectionImages.banner, sectionImages.portrait, sectionImages.backdrop];

export const Default = () => (
  <Explanation005 label="Gallery" title="A decade of homes, one consistent way of building" images={gallery}>
    Browse a selection of the houses, apartments and workshops we have designed and built since 2015.
  </Explanation005>
);
