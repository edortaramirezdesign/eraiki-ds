// Sample imagery for the sections, inlined as data URLs so they render anywhere the
// bundle loads (no asset hosting needed). Photos are compressed WebP copies of
// ../../../assets/sections/*.jpg; logos and illustrations are the original SVGs.
import photoLandscape from './assets/explanation-003-img.webp';
import photoBanner from './assets/explanation-001-bg.webp';
import photoBackdrop from './assets/explanation-006-bg.webp';
import photoPortrait from './assets/explanation-002-img.webp';
import photoPortrait2 from './assets/explanation-004-img1.webp';
import photoPortrait3 from './assets/explanation-004-img2.webp';
import logo1 from '../../../assets/sections/marquee-logo-1.svg';
import logo2 from '../../../assets/sections/marquee-logo-2.svg';
import logo3 from '../../../assets/sections/marquee-logo-3.svg';
import logo4 from '../../../assets/sections/marquee-logo-4.svg';
import logo5 from '../../../assets/sections/marquee-logo-5.svg';
import logo6 from '../../../assets/sections/marquee-logo-6.svg';
import logo7 from '../../../assets/sections/marquee-logo-7.svg';
import logo8 from '../../../assets/sections/marquee-logo-8.svg';
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
  /** Portrait photos (Explanation Split Media / 004 / 005 / 006, Values & Features 002 / 003). */
  portrait: photoPortrait,
  portrait2: photoPortrait2,
  portrait3: photoPortrait3,
  /** Eight monochrome brand logos (168×72) for Marquee Logo Strip. */
  logos: [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8],
  /** Three abstract illustrations for Values & Features 004. */
  illustrations: [illus1, illus2, illus3],
};
