import type { LocalizedString } from "./common";

/**
 * A highlight / feature card for the business.
 */
export type Highlight = {
  /** Stable unique identifier */
  id: string;

  /** Localized title */
  title: LocalizedString;

  /** Localized description */
  description: LocalizedString;

  /** Optional Lucide icon name for visual representation */
  icon?: string;
};
