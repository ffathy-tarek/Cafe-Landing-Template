import { useLocale } from "../context/LocaleContext";
import type { LocalizedString } from "../types";

/**
 * Hook that resolves a LocalizedString to the correct value
 * based on the current locale.
 *
 * Usage:
 * ```tsx
 * const name = useLocaleString(item.name);
 * // Returns "Latte" when locale is "en", "لاتيه" when locale is "ar"
 * ```
 *
 * Also exports a non-hook utility `getLocaleString` for use outside components.
 */
export function useLocaleString(value: LocalizedString): string {
  const locale = useLocale();
  return value[locale];
}

/**
 * Resolves an optional LocalizedString.
 * Returns undefined if the value is not provided.
 */
export function useOptionalLocaleString(
  value: LocalizedString | undefined
): string | undefined {
  const locale = useLocale();
  if (!value) return undefined;
  return value[locale];
}
