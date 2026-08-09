import type { Locale } from "../types";

/**
 * Central site configuration.
 * Developers control global behavior here.
 */
export const siteConfig = {
  /** Active language — controls all displayed text and document direction */
  language: "en" as Locale,

  /** Whether the business has multiple branches */
  multiBranch: false,

  /** The ID of the currently active branch (must match a branch in branches data) */
  activeBranch: "main",
} as const;
