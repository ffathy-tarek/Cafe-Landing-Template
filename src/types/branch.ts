import type { LocalizedString } from "./common";

/**
 * A physical branch / location of the business.
 */
export type Branch = {
  /** Stable unique identifier */
  id: string;

  /** Optional localized branch name (useful in multi-branch mode) */
  name?: LocalizedString;

  /** Localized street address */
  address: LocalizedString;

  /** Optional URL to an embedded or linked map */
  mapUrl?: string;

  /** Optional geographic coordinates for future map integration */
  coordinates?: {
    lat: number;
    lng: number;
  };

  /** Phone number */
  phone?: string;

  /** Optional localized opening hours description */
  openingHours?: LocalizedString;
};
