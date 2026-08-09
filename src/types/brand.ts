import type { LocalizedString } from "./common";

/**
 * Brand identity for the business.
 */
export type Brand = {
  /** Localized business name */
  name: LocalizedString;

  /** Path to the logo image (relative to public/) */
  logo: string;

  /** Optional localized short description / tagline */
  description?: LocalizedString;
};
