import Image from "next/image";
import technicianVan from "@/assets/images/01-technician-service-van.webp";

export default function ServicesHero() {
  return (
    <section className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter py-space-xl lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8]">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
              <span className="font-label-urgency text-label-urgency tracking-wider uppercase">
                OUR SERVICES IN BRISTOL
              </span>
            </div>
            <h1 className="font-display-hero text-headline-xl-mobile lg:text-display-hero text-on-surface tracking-tight font-extrabold">
              Mobile Tyre &amp; Roadside Services in Bristol
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl">
              Convenient mobile tyre fitting and roadside assistance wherever you need us in Bristol.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-4 rounded-xl bg-[#FACC15] text-[#0F172A] font-headline-md text-label-md font-bold shadow-sm hover:brightness-95 transition-all w-full sm:w-auto"
                href="tel:07338430008"
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  phone_in_talk
                </span>
                <span>Call 07338430008</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-4 rounded-xl bg-[#1D4ED8] text-white font-headline-md text-label-md font-semibold hover:bg-[#1D4ED8]/90 transition-all w-full sm:w-auto"
                href="#services-grid"
              >
                <span>View Services</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-secondary font-label-sm text-label-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#1D4ED8] text-[18px]">verified</span>
                <span>Bristol &amp; Surrounding Areas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#1D4ED8] text-[18px]">schedule</span>
                <span>Rapid Response Dispatch</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-surface-container aspect-[16/10]">
              <Image
                alt="BS Mobile Tyres technician fitting a tyre roadside in Bristol"
                src={technicianVan}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
