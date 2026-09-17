import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Areas We Cover", href: "/#coverage" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return router.pathname === "/";
    return href.startsWith("/") && !href.includes("#") && router.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-inverse-surface shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <div className="h-20 max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter h-full flex items-center justify-between gap-space-md">
        <Link
          className="flex items-center gap-space-xs text-inverse-on-surface hover:text-primary-fixed transition-colors min-w-0"
          href="/"
        >
          <div className="w-10 h-10 shrink-0 rounded-lg bg-primary-container flex items-center justify-center text-on-primary font-headline-md text-headline-md">
            <span className="material-symbols-outlined text-[24px]">tire_repair</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-headline-md text-[16px] sm:text-headline-md tracking-tight uppercase leading-none text-inverse-on-surface truncate">
              BS Mobile Tyres Bristol
            </span>
            <span className="font-label-sm text-label-sm text-surface-dim uppercase tracking-wider truncate">
              Bristol &amp; Surrounding Areas
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-space-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`px-space-sm py-space-xs rounded-lg transition-colors font-label-md text-label-md ${
                isActive(link.href)
                  ? "bg-surface-container-highest text-on-surface font-bold"
                  : "text-inverse-on-surface hover:bg-surface-container-highest hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <a
            className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-bright transition-colors font-label-md text-label-md"
            href="https://wa.me/447338430008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>WhatsApp</span>
          </a>
          <a
            className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-all shadow-[0_0_0_3px_rgba(249,115,22,0.28)] font-label-md text-label-md"
            href="tel:07338430008"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span className="hidden sm:inline font-bold">Call Now</span>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-surface-container-highest text-on-surface"
          >
            <span className="material-symbols-outlined text-[24px]">{isMenuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="xl:hidden bg-inverse-surface border-t border-white/10 px-gutter-mobile py-space-sm flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`px-space-md py-space-md rounded-lg transition-colors font-label-md text-label-md ${
                isActive(link.href)
                  ? "bg-surface-container-highest text-on-surface font-bold"
                  : "text-inverse-on-surface hover:bg-surface-container-highest hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
