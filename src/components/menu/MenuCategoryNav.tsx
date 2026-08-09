import type { MenuCategory } from "../../types";
import { useLocaleString } from "../../hooks/useLocaleString";
import { Container } from "../ui/Container";

type MenuCategoryNavProps = {
  categories: MenuCategory[];
  activeCategoryId: string;
};

export function MenuCategoryNav({ categories, activeCategoryId }: MenuCategoryNavProps) {
  return (
    <div className="sticky top-[64px] z-40 w-full glass-nav border-y border-white/10 py-3 mb-14 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]">
      <Container className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-0">
        <ul className="w-full flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth px-2">
          {categories.map((category) => (
            <li key={category.id} className="shrink-0">
              <NavItem category={category} isActive={activeCategoryId === category.id} />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

function NavItem({ category, isActive }: { category: MenuCategory; isActive: boolean }) {
  const name = useLocaleString(category.name);

  return (
    <a
      href={`#${category.id}`}
      className={[
        "block py-2 px-4 text-sm font-medium transition-all duration-300 relative whitespace-nowrap rounded-full border",
        isActive
          ? "text-white bg-accent border-accent shadow-[0_6px_18px_-6px_rgba(190,110,61,0.6)]"
          : "text-cream/70 border-transparent hover:text-cream hover:bg-surface-light",
      ].join(" ")}
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById(category.id);
        if (el) {
          const yOffset = -140;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }}
    >
      {name}
    </a>
  );
}
