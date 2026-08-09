import { createContext, useContext } from "react";
import type { Locale } from "../types";
import { siteConfig } from "../config/siteConfig";

/**
 * Locale context.
 *
 * Provides the current locale to the entire application.
 * The locale is controlled exclusively by siteConfig.language —
 * there is no user-facing language switcher.
 */
const LocaleContext = createContext<Locale>(siteConfig.language);

/**
 * Provider component that wraps the application.
 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  return (
    <LocaleContext.Provider value={siteConfig.language}>
      {children}
    </LocaleContext.Provider>
  );
}

/**
 * Hook to access the current locale.
 */
export function useLocale(): Locale {
  return useContext(LocaleContext);
}
