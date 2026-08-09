import { features } from "../../config/features";
import { galleryImages } from "../../data/gallery";
import { useOptionalLocaleString } from "../../hooks/useLocaleString";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

export function GallerySection() {
  if (!features.gallery || galleryImages.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="scroll-mt-20 py-20 md:py-28 w-full flex justify-center relative overflow-hidden bg-bg-dark">
      <Container className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header Centered */}
        <div className="w-full text-center">
          <SectionHeader
            title={{ en: "Gallery", ar: "معرض الصور" }}
            subtitle={{
              en: "A glimpse into our world. The atmosphere, the craft, the moments.",
              ar: "لمحة من عالمنا. الأجواء، الحرفية، واللحظات الجميلة.",
            }}
            kicker={{ en: "Experience", ar: "التجربة" }}
          />
        </div>

        {/* Dynamic Grid Layout (Shows all images without limits or hanging issues) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12 w-full">
          {galleryImages.map((img) => {
            const altText = useOptionalLocaleString(img.alt) || "";

            return (
              <div
                key={img.id}
                className="relative group overflow-hidden rounded-2xl bg-surface border border-border/60 h-64 sm:h-72 w-full"
              >
                <img
                  src={img.src}
                  alt={altText}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBVbmF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
                  }}
                />

                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}