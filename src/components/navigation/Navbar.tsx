import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "../../data/brand";
import { useLocaleString } from "../../hooks/useLocaleString";
import { useLocale } from "../../context/LocaleContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const brandName = useLocaleString(brand.name);
  const locale = useLocale();

  const navLinks = [
    { href: "#menu", label: { en: "Menu", ar: "القائمة" } },
    { href: "#gallery", label: { en: "Gallery", ar: "المعرض" } },
    { href: "#visit-us", label: { en: "Visit Us", ar: "موقعنا" } },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? "glass-nav border-b border-white/10 py-3.5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
          {/* Logo & Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label={brandName}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={brand.logo}
              alt=""
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
              decoding="async"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="font-serif font-semibold text-xl sm:text-2xl text-cream tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
              {brandName}
            </span>
          </a>

          {/* Desktop Navigation - Pushed completely to the right */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link-underline text-sm font-medium text-cream/80 hover:text-cream transition-colors py-1 px-2"
                  >
                    {locale === "en" ? link.label.en : link.label.ar}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden text-cream hover:text-accent-light transition-colors p-2 rounded-full hover:bg-surface-light focus:outline-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Wrapper */}
      <div className={`md:hidden ${isMobileMenuOpen ? "relative z-50" : "pointer-events-none"}`}>
        <div
          className={`fixed inset-0 bg-bg-dark/85 backdrop-blur-sm transition-opacity duration-300 z-40 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMobileMenu}
        />

        <div
          className={`fixed top-0 bottom-0 z-50 w-72 max-w-[80vw] bg-surface border-white/10 flex flex-col p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            locale === "ar" ? "left-0 border-r" : "right-0 border-l"
          } ${
            isMobileMenuOpen
              ? "translate-x-0 pointer-events-auto"
              : locale === "ar"
              ? "-translate-x-full pointer-events-none"
              : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
            <span className="font-semibold text-lg text-cream" style={{ fontFamily: "var(--font-heading)" }}>
              {brandName}
            </span>
            <button
              onClick={closeMobileMenu}
              className="text-cream/70 hover:text-white p-1.5 rounded-full hover:bg-surface-light transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-3 text-lg font-medium text-cream hover:text-accent-light hover:bg-surface-light rounded-xl transition-colors py-3 px-3"
                  onClick={closeMobileMenu}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {locale === "en" ? link.label.en : link.label.ar}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}