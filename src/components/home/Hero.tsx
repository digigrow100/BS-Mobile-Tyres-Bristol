import Image from "next/image";
import technicianVan from "@/assets/images/01-technician-service-van.webp";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50/70 via-surface-container-lowest to-surface-container-low py-space-xl overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-sm w-fit">
            <span className="w-6 h-6 rounded-full bg-amber-300 flex items-center justify-center text-slate-900 shadow-sm">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            </span>
            <span className="font-label-urgency text-label-urgency text-blue-700 uppercase">
              RAPID BRISTOL MOBILE SERVICE
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-label-sm text-label-sm text-secondary">30–45m Avg Response</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-slate-900 leading-[1.1] tracking-tight">
            Mobile Tyre Fitting Bristol <br className="hidden sm:inline" />
            <span className="relative inline-block text-blue-700">
              Straight to You
              <svg
                className="absolute left-0 -bottom-2 w-full h-3 text-amber-400 overflow-visible"
                fill="none"
                viewBox="0 0 250 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 10C65 3 185 3 247 10" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
              </svg>
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-slate-700 max-w-xl leading-relaxed">
            Rapid mobile tyre fitting and roadside tyre assistance in Bristol. Whether you&apos;re stranded roadside,
            parked at work, or at home, our certified technicians come directly to you across Bristol and
            surrounding areas with zero fuss.
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-headline-md text-headline-md font-bold shadow-md hover:shadow-lg transition-all"
              href="tel:07338430008"
            >
              <span>Book Tyre Help</span>
              <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-headline-md text-headline-md font-bold shadow-md hover:shadow-lg transition-all"
              href="tel:07338430008"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Call 07338430008</span>
            </a>
          </div>
          <div className="pt-space-sm flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm text-slate-800 font-label-md text-label-md">
              <span className="material-symbols-outlined text-blue-600 text-[18px]">local_shipping</span>
              <span>Mobile Service</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm text-slate-800 font-label-md text-label-md">
              <span className="material-symbols-outlined text-amber-500 text-[18px]">map</span>
              <span>Bristol &amp; Surrounding Areas</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm text-slate-800 font-label-md text-label-md">
              <span className="material-symbols-outlined text-blue-600 text-[18px]">minor_crash</span>
              <span>Roadside Tyre Assistance in Bristol</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm text-slate-800 font-label-md text-label-md">
              <span className="material-symbols-outlined text-amber-500 text-[18px]">bolt</span>
              <span>Fast Response</span>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2 text-slate-600 font-body-sm text-body-sm">
            <div className="flex -space-x-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs shadow-sm">
                BS
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 text-slate-900 font-bold text-xs shadow-sm">
                24/7
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white font-bold text-xs shadow-sm">
                AA+
              </span>
            </div>
            <span>Trusted by thousands of Bristol motorists every year. No subscription required.</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-300/30 to-amber-200/30 rounded-3xl blur-2xl -z-10" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
            <div className="relative w-full h-[300px] sm:h-[420px] rounded-2xl overflow-hidden">
              <Image
                alt="UK mobile tyre fitting technician safely installing a tyre roadside"
                src={technicianVan}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-slate-900/95 text-white p-4 rounded-2xl shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="font-headline-md text-label-md font-bold text-amber-300 uppercase tracking-wider">
                    Mobile Dispatch Active
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-950 text-blue-200 font-mono-data text-label-sm">
                  Van #314
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 shrink-0 font-bold">
                  <span className="material-symbols-outlined text-[24px]">engineering</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-headline-md text-body-md font-bold text-white truncate">
                    Technician arriving in 30-45 mins
                  </span>
                  <span className="font-body-sm text-body-sm text-slate-300 truncate">
                    Equipped mobile workshop on wheels across Bristol with Live GPS
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-surface-container-lowest text-slate-900 px-3.5 py-2 rounded-2xl shadow-lg">
            <span className="material-symbols-outlined text-blue-600 text-[22px]">verified</span>
            <div className="flex flex-col">
              <span className="font-headline-md text-label-sm font-bold text-slate-900 leading-tight">
                City &amp; Guilds
              </span>
              <span className="font-body-sm text-[11px] text-slate-500 leading-tight">Master Technicians</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
