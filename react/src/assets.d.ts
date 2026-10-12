// Section sample images are inlined into the bundle as data URLs (see build.mjs).
declare module '*.webp' { const src: string; export default src; }
declare module '*.svg' { const src: string; export default src; }
