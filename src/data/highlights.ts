import type { Highlight } from "../types";

/**
 * Highlights / features.
 *
 * Highlights are an optional feature controlled by features.highlights.
 * This array is empty by default. Populate when highlight content is available.
 */
export const highlights: Highlight[] = [
  {
    id: "h1",
    title: { en: "Specialty Beans", ar: "حبوب مختصة" },
    description: {
      en: "Sourced from the finest farms around the world.",
      ar: "مستوردة من أجود المزارع حول العالم.",
    },
    icon: "Coffee",
  },
  {
    id: "h2",
    title: { en: "Cozy Atmosphere", ar: "أجواء مريحة" },
    description: {
      en: "A perfect place to relax, work, or catch up.",
      ar: "المكان المثالي للاسترخاء، العمل، أو اللقاء بالأصدقاء.",
    },
    icon: "Armchair",
  },
  {
    id: "h3",
    title: { en: "Artisan Pastries", ar: "مخبوزات طازجة" },
    description: {
      en: "Baked fresh daily by our expert pastry chefs.",
      ar: "تُخبز طازجة يومياً على يد أمهر الطهاة.",
    },
    icon: "Croissant",
  },
];
