import type { LocalizedString } from "./common";

/**
 * A single image in the gallery.
 */
export type GalleryImage = {
  /** Stable unique identifier */
  id: string;

  /** Path to the image (relative to public/) */
  src: string;

  /** Optional localized alt text for accessibility */
  alt?: LocalizedString;
};
