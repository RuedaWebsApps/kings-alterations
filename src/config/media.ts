/**
 * Centralized intro-video configuration.
 * To replace the video: drop the new files in /public, update the paths here, and (optionally)
 * regenerate posters with ffmpeg (see README). No component changes needed.
 */
export const INTRO_VIDEO = {
  /** Horizontal 16:9 (1280x720). Used from the md breakpoint (tablet and up). */
  desktop: {
    src: "/kings-intro-desktop.mp4",
    poster: "/kings-intro-desktop-poster.webp",
    width: 1280,
    height: 720,
  },
  /** Vertical 9:16 (720x1280). Used on phones. */
  mobile: {
    src: "/kings-intro-mobile.mp4",
    poster: "/kings-intro-mobile-poster.webp",
    width: 720,
    height: 1280,
  },
  /** Must match the Tailwind `md` breakpoint used for the layout switch. */
  desktopMediaQuery: "(min-width: 768px)",
} as const;
