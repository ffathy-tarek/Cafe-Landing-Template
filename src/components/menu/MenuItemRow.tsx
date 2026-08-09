import type { MenuItem } from "../../types";
import { useLocaleString, useOptionalLocaleString } from "../../hooks/useLocaleString";
import { Badge } from "../ui/Badge";

type MenuItemRowProps = {
  item: MenuItem;
};

export function MenuItemRow({ item }: MenuItemRowProps) {
  const name = useLocaleString(item.name);
  const description = useOptionalLocaleString(item.description);

  const isSpecial = item.id.includes("001");
  const specialLabel = useLocaleString({ en: "Signature", ar: "مميز" });

  return (
    <article className="flex gap-4 sm:gap-6 items-center group ticket-leader pb-5 mb-2 w-full max-w-4xl mx-auto transition-colors">
      {/* Optional Thumbnail Image */}
      {item.image && (
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-surface border border-border">
          <img
            src={item.image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).parentElement!.style.display = "none";
            }}
          />
        </div>
      )}

      {/* Content Container */}
      <div className="flex-1 min-w-0 flex flex-col justify-center mx-auto">
        {/* Title, Badge, Dotted Leader, Price Row */}
        <div className="flex items-center gap-2 w-full">
          <h3
            className="text-base sm:text-lg font-semibold text-cream shrink-0 m-0"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {name}
          </h3>

          {isSpecial && (
            <Badge variant="accent" className="shrink-0 bg-signature/20 text-accent-light border-signature/30 px-2 py-0.5">
              {specialLabel}
            </Badge>
          )}

          {/* Dotted Line Leader */}
          <div className="flex-1 border-b border-dotted border-white/15 mx-1 min-w-[15px] translate-y-0.5" />

          {/* Price */}
          <div className="text-price text-accent-light shrink-0 whitespace-nowrap">
            {item.price} <span className="text-[10px] font-normal text-cream/50 uppercase tracking-wider">EGP</span>
          </div>
        </div>

        {/* Optional Description */}
        {description && (
          <p className="text-xs sm:text-sm text-cream/60 mt-2 leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
