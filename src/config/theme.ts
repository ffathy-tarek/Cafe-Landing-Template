/**
 * Centralized theme configuration.
 *
 * Visual direction: Warm Premium
 * - Deep warm black / obsidian base
 * - Cream / soft neutral text
 * - Copper accent system (restrained & elegant)
 *
 * These values are the single source of truth.
 * They are mirrored as CSS custom properties in index.css
 * via Tailwind v4's @theme directive.
 */
export const theme = {
  colors: {
    /** Deep warm black — primary background */
    bgDark: "#0F0E0C",
    /** Dark surface — cards, elevated elements */
    surface: "#161412",
    /** Slightly lighter surface — hover states, secondary cards */
    surfaceLight: "#1E1B18",

    /** Cream — primary text on dark backgrounds */
    cream: "#F5F0EB",
    /** Muted text — secondary/supporting text */
    muted: "#A8A096",

    /** Copper accent — primary accent color */
    accent: "#C87D55",
    /** Copper hover/active — darker accent */
    accentDark: "#B86C45",
    /** Light copper — subtle accent backgrounds */
    accentLight: "#D4A574",

    /** Warm border — dividers on dark surfaces */
    border: "#2A2622",
    /** Light border — dividers on light surfaces */
    borderLight: "#E0D9CE",

    /** Pure white — high-contrast elements */
    white: "#FFFFFF",
  },

  fonts: {
    /** Elegant serif for headings */
    heading: "'Playfair Display', serif",
    /** Clean sans-serif for body */
    body: "'Inter', sans-serif",
  },

  /**
   * Spacing rhythm for sections.
   * Used as reference; actual values are in CSS via Tailwind utilities.
   */
  spacing: {
    sectionY: "5rem",       // py-20
    sectionYMd: "6rem",     // md:py-24
    containerMaxWidth: "80rem", // max-w-7xl equivalent (1280px)
  },
} as const;
