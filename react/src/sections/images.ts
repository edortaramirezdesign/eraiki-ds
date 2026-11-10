// Sample imagery for the sections, inlined as data URLs so they render anywhere the
// bundle loads (no asset hosting needed). Photos are compressed WebP copies of
// ../../../assets/sections/*.jpg; logos and illustrations are the original SVGs.
import photoLandscape from './assets/explanation-003-img.webp';
import photoBanner from './assets/explanation-001-bg.webp';
import photoBackdrop from './assets/explanation-006-bg.webp';
import photoPortrait from './assets/explanation-002-img.webp';
import photoPortrait2 from './assets/explanation-004-img1.webp';
import photoPortrait3 from './assets/explanation-004-img2.webp';
import gallery1 from './assets/hero-marquee-gallery-1.webp';
import gallery2 from './assets/hero-marquee-gallery-2.webp';
import gallery3 from './assets/hero-marquee-gallery-3.webp';
import gallery4 from './assets/hero-marquee-gallery-4.webp';
import gallery5 from './assets/hero-marquee-gallery-5.webp';
import logo1 from '../../../assets/sections/marquee-logo-1.svg';
import logo2 from '../../../assets/sections/marquee-logo-2.svg';
import logo3 from '../../../assets/sections/marquee-logo-3.svg';
import logo4 from '../../../assets/sections/marquee-logo-4.svg';
import logo5 from '../../../assets/sections/marquee-logo-5.svg';
import logo6 from '../../../assets/sections/marquee-logo-6.svg';
import logo7 from '../../../assets/sections/marquee-logo-7.svg';
import logo8 from '../../../assets/sections/marquee-logo-8.svg';
import tile01 from '../../../assets/sections/logo-tile-01.svg';
import tile02 from '../../../assets/sections/logo-tile-02.svg';
import tile03 from '../../../assets/sections/logo-tile-03.svg';
import tile04 from '../../../assets/sections/logo-tile-04.svg';
import tile05 from '../../../assets/sections/logo-tile-05.svg';
import tile06 from '../../../assets/sections/logo-tile-06.svg';
import tile07 from '../../../assets/sections/logo-tile-07.svg';
import tile08 from '../../../assets/sections/logo-tile-08.svg';
import tile09 from '../../../assets/sections/logo-tile-09.svg';
import tile10 from '../../../assets/sections/logo-tile-10.svg';
import tile11 from '../../../assets/sections/logo-tile-11.svg';
import tile12 from '../../../assets/sections/logo-tile-12.svg';
import tile13 from '../../../assets/sections/logo-tile-13.svg';
import tile14 from '../../../assets/sections/logo-tile-14.svg';
import tile15 from '../../../assets/sections/logo-tile-15.svg';
import tile16 from '../../../assets/sections/logo-tile-16.svg';
import tile17 from '../../../assets/sections/logo-tile-17.svg';
import tile18 from '../../../assets/sections/logo-tile-18.svg';
import tile19 from '../../../assets/sections/logo-tile-19.svg';
import tile20 from '../../../assets/sections/logo-tile-20.svg';
import tile21 from '../../../assets/sections/logo-tile-21.svg';
import tile22 from '../../../assets/sections/logo-tile-22.svg';
import tile23 from '../../../assets/sections/logo-tile-23.svg';
import tile24 from '../../../assets/sections/logo-tile-24.svg';
import tile25 from '../../../assets/sections/logo-tile-25.svg';
import tile26 from '../../../assets/sections/logo-tile-26.svg';
import tile27 from '../../../assets/sections/logo-tile-27.svg';
import tile28 from '../../../assets/sections/logo-tile-28.svg';
import tile29 from '../../../assets/sections/logo-tile-29.svg';
import tile30 from '../../../assets/sections/logo-tile-30.svg';
import tile31 from '../../../assets/sections/logo-tile-31.svg';
import tile32 from '../../../assets/sections/logo-tile-32.svg';
import tile33 from '../../../assets/sections/logo-tile-33.svg';
import tile34 from '../../../assets/sections/logo-tile-34.svg';
import tile35 from '../../../assets/sections/logo-tile-35.svg';
import tile36 from '../../../assets/sections/logo-tile-36.svg';
import tile37 from '../../../assets/sections/logo-tile-37.svg';
import illus1 from '../../../assets/sections/values-004-illus-1.svg';
import illus2 from '../../../assets/sections/values-004-illus-2.svg';
import illus3 from '../../../assets/sections/values-004-illus-3.svg';

/** Placeholder images used by the sections when no `image` / `images` / `logos` prop is given. */
export const sectionImages = {
  /** Wide landscape photo (heroes, Explanation Twin Cards). */
  landscape: photoLandscape,
  /** Wide photo for the Explanation Banner Card banner. */
  banner: photoBanner,
  /** Wide backdrop for Explanation Dark Card. */
  backdrop: photoBackdrop,
  /** Portrait photos (Explanation Split Media / 004 / 005 / 006, Values & Features Highlight List / 003). */
  portrait: photoPortrait,
  portrait2: photoPortrait2,
  portrait3: photoPortrait3,
  /** Five interior photos for the Hero Marquee Gallery image row. */
  gallery: [gallery1, gallery2, gallery3, gallery4, gallery5],
  /** Eight monochrome brand logos (168×72) for Marquee Logo Strip. */
  logos: [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8],
  /** Two rows of colour logo shapes (48×48) for Marquee Logo Tiles. */
  logoTiles: [[tile01, tile02, tile03, tile04, tile05, tile06, tile07, tile08, tile09, tile10, tile11, tile12, tile13, tile14, tile15, tile16, tile17, tile18, tile19], [tile01, tile20, tile21, tile22, tile23, tile24, tile25, tile26, tile27, tile28, tile29, tile30, tile31, tile32, tile33, tile34, tile35, tile36, tile37, tile19]] as [string[], string[]],
  /** Three abstract illustrations for Values & Features Staggered Cards. */
  illustrations: [illus1, illus2, illus3],
};
