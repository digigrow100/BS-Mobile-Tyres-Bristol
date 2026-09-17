import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/bs-mobile-tyres-logo-trimmed.webp";

const SERVICE_LINKS = [
  { label: "Mobile Tyre Fitting", slug: "mobile-tyre-fitting" },
  { label: "Jump Start", slug: "jump-start" },
  { label: "Fuel Delivery", slug: "fuel-delivery" },
  { label: "Emergency Tyre Fitting", slug: "emergency-tyre-fitting" },
  { label: "Home Tyre Fitting", slug: "home-tyre-fitting" },
  { label: "Car Recovery", slug: "car-recovery" },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Areas We Cover", href: "/#coverage" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface mt-auto">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
        <div className="flex flex-col gap-space-md">
          <div className="inline-flex w-fit rounded-lg bg-white p-2 shadow-sm">
            <Image src={logo} alt="BS Mobile Tyres Bristol" className="h-10 w-auto" />
          </div>
          <p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
            Rapid mobile tyre fitting, emergency puncture replacements, and roadside tyre assistance across
            Bristol, BS postcodes, M4, M5, M32, and surrounding areas.
          </p>
          <div className="flex items-center gap-space-xs text-primary-fixed">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="font-label-sm text-label-sm font-semibold">
              Certified Technicians • Rapid 30-45m Dispatch
            </span>
          </div>
          <a
            href="https://share.google/BOxYzZAiYI0ynBs2m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-label-md text-label-md"
          >
            <span className="material-symbols-outlined text-[18px]">star</span>
            <span>Find Us &amp; Reviews on Google</span>
          </a>
        </div>

        <div className="flex flex-col gap-space-sm">
          <span className="font-title-sm text-title-sm text-inverse-on-surface uppercase tracking-wider mb-space-xs">
            Services
          </span>
          {SERVICE_LINKS.map((service) => (
            <Link
              key={service.slug}
              className="font-body-sm text-body-sm text-surface-variant hover:text-primary-fixed transition-colors"
              href={`/services#${service.slug}`}
            >
              {service.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-space-sm">
          <span className="font-title-sm text-title-sm text-inverse-on-surface uppercase tracking-wider mb-space-xs">
            Quick Links
          </span>
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              className="font-body-sm text-body-sm text-surface-variant hover:text-primary-fixed transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-space-sm">
          <span className="font-title-sm text-title-sm text-inverse-on-surface uppercase tracking-wider mb-space-xs">
            Direct Contact
          </span>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5">call</span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-surface-variant">24/7 Phone Dispatch</span>
              <a
                className="font-mono-data text-mono-data text-inverse-on-surface hover:text-primary-fixed transition-colors"
                href="tel:07338430008"
              >
                07338430008
              </a>
            </div>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5">
              location_on
            </span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-surface-variant">Operational Zone</span>
              <span className="font-body-sm text-body-sm text-inverse-on-surface">Bristol, UK</span>
            </div>
          </div>
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-emerald-400 text-[20px] shrink-0 mt-0.5">chat</span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-surface-variant">Instant WhatsApp</span>
              <a
                className="font-body-sm text-body-sm text-inverse-on-surface hover:text-primary-fixed transition-colors"
                href="https://wa.me/447338430008"
                target="_blank"
                rel="noopener noreferrer"
              >
                07338430008
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-highest/10">
        <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter py-space-md flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left">
          <span className="font-body-sm text-body-sm text-surface-variant">
            © {new Date().getFullYear()} BS Mobile Tyres Bristol. All rights reserved. Bristol Mobile Tyre Fitting
            &amp; Roadside Assistance.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            <Link className="font-label-sm text-label-sm text-surface-variant hover:text-inverse-on-surface transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="font-label-sm text-label-sm text-surface-variant hover:text-inverse-on-surface transition-colors" href="#">
              Terms &amp; Conditions
            </Link>
            <Link className="font-label-sm text-label-sm text-surface-variant hover:text-inverse-on-surface transition-colors" href="#">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
