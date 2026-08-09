import { brand } from "../../data/brand";
import { social } from "../../data/social";
import { contact } from "../../data/contact";
import { useLocaleString } from "../../hooks/useLocaleString";
import { useLocale } from "../../context/LocaleContext";

export function Footer() {
  const brandName = useLocaleString(brand.name);
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#menu", label: { en: "Menu", ar: "القائمة" } },
    { href: "#gallery", label: { en: "Gallery", ar: "المعرض" } },
    { href: "#visit-us", label: { en: "Visit Us", ar: "موقعنا" } },
  ];

  // Fallbacks to guarantee links are valid
  const whatsappUrl = contact.whatsappUrl || (contact.phone ? `https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}` : "#");
  const instagramUrl = social.instagram || "#";
  const facebookUrl = social.facebook || "#";

  return (
    <footer className="w-full border-t border-border bg-bg-dark py-10 px-4 sm:px-6 lg:px-12 mt-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Main Footer Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">

          {/* Left: Brand & Logo */}
          <div className="flex items-center justify-center md:justify-start gap-3 w-full md:w-1/3">
            <a href="#" className="flex items-center gap-3 focus:outline-none group">
              <img
                src={brand.logo}
                alt=""
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:rotate-3"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="font-semibold text-lg text-cream" style={{ fontFamily: "var(--font-heading)" }}>
                {brandName}
              </span>
            </a>
          </div>

          {/* Center: Navigation Links */}
          <nav 
            aria-label="Footer Navigation" 
            className="flex items-center justify-center w-full md:w-1/3"
          >
            <ul className="flex items-center gap-8 justify-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link-underline text-sm font-medium text-muted hover:text-accent-light transition-colors"
                  >
                    {locale === "en" ? link.label.en : link.label.ar}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Social Icons (Guaranteed Render) */}
          <div className="flex items-center justify-center md:justify-end gap-3 w-full md:w-1/3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:-translate-y-0.5"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>

        </div>

        {/* Bottom: Copyright */}
        <div className="pt-6 border-t border-border/20 flex justify-center items-center text-xs text-muted text-center">
          <p>© {currentYear} {brandName}. {locale === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}</p>
        </div>

      </div>
    </footer>
  );
}