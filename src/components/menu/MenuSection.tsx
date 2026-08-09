import { menuCategories } from "../../data/menu";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { MenuCategoryNav } from "./MenuCategoryNav";
import { MenuItemRow } from "./MenuItemRow";
import { useLocaleString } from "../../hooks/useLocaleString";

export function MenuSection() {
  const categoryIds = menuCategories.map(c => c.id);
  const activeCategoryId = useScrollSpy(categoryIds, 140);

  return (
    <section
      id="menu"
      className="scroll-mt-20 py-20 sm:py-28 w-full flex justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        style={{ backgroundImage: "url('/images/menu/main/main_photo.png')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/90 to-bg-dark" aria-hidden="true" />
      </div>

      <Container className="relative z-10 w-full max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6 opacity-100">
        {/* Header */}
        <SectionHeader
          title={{ en: "Our Menu", ar: "قائمتنا" }}
          subtitle={{
            en: "Explore our carefully curated selection of beverages and treats.",
            ar: "استكشف تشكيلتنا المختارة بعناية من المشروبات والحلويات.",
          }}
          kicker={{ en: "Discover", ar: "اكتشف" }}
        />

        {/* Sticky Category Navigation */}
        <MenuCategoryNav categories={menuCategories} activeCategoryId={activeCategoryId} />

        {/* Categories & Items List */}
        <div className="w-full space-y-16 md:space-y-20 mt-8 opacity-100">
          {menuCategories.map((category) => (
            <CategoryGroup key={category.id} category={category} />
          ))}
        </div>

      </Container>
    </section>
  );
}

function CategoryGroup({ category }: { category: typeof menuCategories[0] }) {
  const name = useLocaleString(category.name);

  return (
    <div id={category.id} className="scroll-mt-36 w-full">
      {/* Category Header with Divider Lines */}
      <div className="flex items-center justify-center gap-4 mb-8 md:mb-10 w-full">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" aria-hidden="true" />
        <h3
          className="text-xl sm:text-2xl font-semibold text-accent-light text-center shrink-0 px-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {name}
        </h3>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" aria-hidden="true" />
      </div>

      {/* Menu Item Rows */}
      <div className="flex flex-col gap-4 w-full">
        {category.items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}