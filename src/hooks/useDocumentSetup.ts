import { useEffect } from "react";
import { useLocale } from "../context/LocaleContext";
import { brand } from "../data/brand";

/**
 * Sets the document's `dir` and `lang` attributes based on the current locale,
 * and dynamically updates document title and meta descriptions.
 */
export function useDocumentSetup(): void {
  const locale = useLocale();

  useEffect(() => {
    // 1. Direction and Language
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;

    // 2. SEO & Meta data
    const title = locale === "ar" ? brand.name.ar : brand.name.en;
    document.title = title;

    // Update Open Graph and Standard title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    if (brand.description) {
      const desc = locale === "ar" ? brand.description.ar : brand.description.en;
      if (desc) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", desc);
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", desc);
      }
    }
  }, [locale]);
}
