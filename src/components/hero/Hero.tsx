import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { brand } from "../../data/brand";
import { useLocaleString } from "../../hooks/useLocaleString";
import { useLocale } from "../../context/LocaleContext";

export function Hero() {
  const brandName = useLocaleString(brand.name);
  const brandDescription = useLocaleString(brand.description || { en: "", ar: "" });
  const locale = useLocale();

  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Layered Atmosphere */}
      <div className="absolute inset-0 z-0 bg-bg-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55 scale-105"
          style={{ backgroundImage: "url('/images/hero/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/85 via-bg-dark/55 to-bg-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(13,11,9,0.65)_100%)]" />

        {/* Decorative Steam */}
        <div className="absolute left-1/2 top-[18%] -translate-x-1/2 flex items-end gap-3 opacity-70" aria-hidden="true">
          <span className="steam-wisp block w-1 h-16 rounded-full bg-gradient-to-t from-accent-light/0 via-accent-light/40 to-accent-light/0 blur-[2px]" />
          <span className="steam-wisp steam-wisp-delay block w-1 h-20 rounded-full bg-gradient-to-t from-accent-light/0 via-accent-light/50 to-accent-light/0 blur-[2px]" />
          <span className="steam-wisp steam-wisp-delay-2 block w-1 h-14 rounded-full bg-gradient-to-t from-accent-light/0 via-accent-light/35 to-accent-light/0 blur-[2px]" />
        </div>
      </div>

      {/* Content Container */}
      <Container className="relative z-10 text-center flex flex-col items-center pt-20 pb-10 px-4">
        <span className="text-meta text-accent-light mb-3 inline-flex items-center gap-2">
          <span className="w-6 h-px bg-accent" aria-hidden="true" />
          {locale === "en" ? "Roasted Daily" : "يُحمَّص يوميًا"}
          <span className="w-6 h-px bg-accent" aria-hidden="true" />
        </span>

        {/* Title */}
        <h1 className="text-display text-cream mb-3 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] max-w-4xl">
          {brandName}
        </h1>

        {/* Subtitle / Description */}
        {brandDescription && (
          <p className="text-xs sm:text-sm md:text-base font-light text-cream/80 max-w-md mx-auto leading-relaxed drop-shadow-md">
            {brandDescription}
          </p>
        )}

        {/* Buttons - Controlled Gap & Top Margin */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mt-20 sm:mt-28 w-full max-w-[180px] sm:max-w-xs mx-auto">
          <Button
            as="button"
            size="sm"
            className="w-full sm:w-auto text-xs py-2 px-4 font-medium justify-center"
            onClick={() => {
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {locale === "en" ? "Explore Menu" : "استكشف القائمة"}
          </Button>

          <Button
            as="button"
            variant="outline"
            size="sm"
            className="w-full sm:w-auto border-accent/40 hover:bg-accent/10 text-xs py-2 px-4 font-medium justify-center"
            onClick={() => {
              document.getElementById("visit-us")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {locale === "en" ? "Visit Us" : "موقعنا"}
          </Button>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-dark to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}