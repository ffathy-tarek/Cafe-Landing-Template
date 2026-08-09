import type { LocalizedString } from "../../types";
import { useLocaleString } from "../../hooks/useLocaleString";
import { useOptionalLocaleString } from "../../hooks/useLocaleString";

/**
 * SectionHeader — reusable section heading with optional subtitle and copper accent line.
 *
 * Supports centered or start-aligned layout.
 * Automatically resolves bilingual strings via useLocaleString.
 */

type SectionHeaderProps = {
  /** Localized section title */
  title: LocalizedString;
  /** Optional localized subtitle / description */
  subtitle?: LocalizedString;
  /** Optional localized kicker text (small label above the title) */
  kicker?: LocalizedString;
  /** Layout alignment */
  align?: "center" | "start";
  /** Show the decorative copper divider line */
  showDivider?: boolean;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  kicker,
  align = "center",
  showDivider = true,
  className = "",
}: SectionHeaderProps) {
  const resolvedTitle = useLocaleString(title);
  const resolvedSubtitle = useOptionalLocaleString(subtitle);
  const resolvedKicker = useOptionalLocaleString(kicker);

  const alignClass = align === "center" ? "text-center items-center" : "text-start items-start";

  return (
    <header
      className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClass} ${className}`}
    >
      {resolvedKicker && (
        <span className="inline-flex items-center gap-2 text-meta text-accent-light">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          {resolvedKicker}
        </span>
      )}

      <h2 className="text-section-title text-cream">{resolvedTitle}</h2>

      {showDivider && (
        <span
          className={`copper-line mt-1 ${align === "center" ? "mx-auto" : ""}`}
          aria-hidden="true"
        />
      )}

      {resolvedSubtitle && (
        <p className="text-body text-muted max-w-2xl mt-1">
          {resolvedSubtitle}
        </p>
      )}
    </header>
  );
}
