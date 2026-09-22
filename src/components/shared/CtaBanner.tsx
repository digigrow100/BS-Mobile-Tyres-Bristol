interface CtaBannerProps {
  badgeLabel: string;
  heading: string;
  description: string;
}

export default function CtaBanner({ badgeLabel, heading, description }: CtaBannerProps) {
  return (
    <section className="w-full bg-[#0F172A] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter flex flex-col items-center text-center gap-space-md">
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-white/10 text-[#FACC15]">
          <span className="material-symbols-outlined text-[18px]">bolt</span>
          <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">{badgeLabel}</span>
        </div>
        <h2 className="font-headline-xl text-headline-xl-mobile lg:text-display-hero tracking-tight text-white">
          {heading}
        </h2>
        <p className="font-body-lg text-body-lg text-slate-300 max-w-xl">{description}</p>
        <div className="pt-space-sm flex flex-wrap items-center justify-center gap-space-md w-full sm:w-auto">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-4 rounded-full bg-[#FACC15] text-[#0F172A] font-title-sm text-title-sm hover:bg-[#eab308] transition-colors shadow-lg focus:outline-none"
            href="tel:01174054733"
          >
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              call
            </span>
            <span>Call 01174054733</span>
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-4 rounded-full bg-slate-800 text-white font-title-sm text-title-sm hover:bg-slate-700 transition-colors shadow-sm"
            href="https://share.google/BOxYzZAiYI0ynBs2m"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">public</span>
            <span>View Us on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
