import Image from "next/image";
import tyreBalancing from "@/assets/images/tyre-balancing.svg";

export default function ContactHero() {
  return (
    <section className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8]">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
              <span className="font-label-urgency text-label-urgency tracking-wider uppercase">GET IN TOUCH</span>
            </div>
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-on-surface tracking-tight">
              Contact BS Mobile Tyres Bristol
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl">
              Need mobile tyre or roadside assistance in Bristol? Get in touch with us.
            </p>
            <div className="pt-space-xs">
              <a
                className="inline-flex items-center gap-space-sm px-space-xl py-space-md rounded-full bg-[#FACC15] text-[#0F172A] font-title-sm text-title-sm hover:bg-[#eab308] transition-colors shadow-sm focus:outline-none"
                href="tel:07338430008"
              >
                <span className="material-symbols-outlined text-[24px]">call</span>
                <span>Call 07338430008</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-surface-container shadow-md aspect-[1.34/1]">
              <Image
                alt="BS Mobile Tyres Bristol technician working at service van"
                src={tyreBalancing}
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
