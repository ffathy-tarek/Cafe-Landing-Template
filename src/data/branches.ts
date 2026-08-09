import type { Branch } from "../types";

/**
 * Branch / location data.
 *
 * The architecture supports multiple branches.
 * The active branch is controlled by siteConfig.activeBranch.
 *
 * Demo values are clearly marked — replace with real business information.
 */
export const branches: Branch[] = [
  {
    id: "main",
    name: {
      en: "Main Branch",
      ar: "الفرع الرئيسي",
    },
    address: {
      en: "[Demo] 123 Coffee Street, Downtown",
      ar: "[تجريبي] ١٢٣ شارع القهوة، وسط المدينة",
    },
    phone: "+1 (555) 000-0000",
    openingHours: {
      en: "Daily: 7:00 AM – 11:00 PM",
      ar: "يوميًا: ٧:٠٠ صباحًا – ١١:٠٠ مساءً",
    },
  },
];
