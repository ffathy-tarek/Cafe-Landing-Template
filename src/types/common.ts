/**
 * Supported locale codes.
 * The application language is controlled via siteConfig.language.
 */
export type Locale = "en" | "ar";

/**
 * A bilingual string value used throughout the application.
 * Every user-facing text that needs localization uses this type.
 */
export type LocalizedString = {
  en: string;
  ar: string;
};
