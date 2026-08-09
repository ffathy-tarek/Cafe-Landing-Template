/**
 * Feature flags for optional sections.
 *
 * When a feature is disabled, its section must not render.
 * When a feature is enabled but has no usable data, its section must still not render.
 */
export const features = {
  /** Show the highlights / features section */
  highlights: false,

  /** Show the gallery section */
  gallery: true,
} as const;
