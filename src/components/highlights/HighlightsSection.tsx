import { Coffee, Sofa, Croissant, Star } from "lucide-react";
import { features } from "../../config/features";
import { highlights } from "../../data/highlights";
import { useLocaleString } from "../../hooks/useLocaleString";
import { Container } from "../ui/Container";

// Mapping string names to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  Coffee: Coffee,
  Armchair: Sofa,
  Croissant: Croissant,
  Default: Star,
};

export function HighlightsSection() {
  if (!features.highlights || highlights.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-surface border-y border-border relative overflow-hidden">
      {/* Ambient accent glow, purely decorative */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-accent/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight) => (
            <HighlightCard key={highlight.id} highlight={highlight} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function HighlightCard({ highlight }: { highlight: typeof highlights[0] }) {
  const title = useLocaleString(highlight.title);
  const description = useLocaleString(highlight.description);

  const IconComponent = highlight.icon && iconMap[highlight.icon]
    ? iconMap[highlight.icon]
    : iconMap.Default;

  return (
    <div className="card-premium card-premium-hover flex flex-col items-center text-center group p-8 md:p-10">
      <div className="w-16 h-16 rounded-2xl bg-bg-dark border border-accent/25 flex items-center justify-center text-accent-light mb-6 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(190,110,61,0.25)]">
        <IconComponent size={30} strokeWidth={1.5} />
      </div>
      <h3
        className="text-subheading text-cream mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-body text-muted leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}
