import dynamic from "next/dynamic";

const BristolMap = dynamic(() => import("./BristolMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-400 font-body-sm text-body-sm">
      Loading map...
    </div>
  ),
});

const AREAS = [
  "Bristol City Centre (BS1)",
  "Clifton & Redland (BS8, BS6)",
  "Filton & Patchway (BS34)",
  "Bedminster & Southville (BS3)",
  "M4, M5 & M32 Junctions",
  "Fishponds & Staple Hill (BS16)",
  "Brislington & Keynsham",
  "Avonmouth & M49",
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="w-full bg-slate-900 text-white py-space-xl scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 text-blue-200 font-label-urgency text-label-urgency uppercase w-fit">
            <span className="material-symbols-outlined text-[16px] text-amber-400">pin_drop</span>
            <span>BRISTOL OPERATIONAL RADAR</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-white tracking-tight">
            Covering All Bristol Postcodes, Motorways &amp; Surrounding Arteries
          </h2>
          <p className="font-body-md text-body-md text-slate-300 leading-relaxed">
            Covering all BS postcodes, M4, M5, M32, M49, Clifton, Filton, Bedminster, and Central Bristol. Our
            distributed mobile tyre vans are stationed in close proximity to every major Bristol artery.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {AREAS.map((area) => (
              <span key={area} className="px-3 py-1 rounded-lg bg-slate-800 text-white font-label-md text-label-md">
                {area}
              </span>
            ))}
          </div>
          <div className="bg-slate-800/80 p-space-md rounded-2xl flex flex-col sm:flex-row gap-2 items-stretch mt-space-sm">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </span>
              <input
                className="w-full pl-10 pr-4 py-3 bg-slate-900 text-white rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 font-body-sm text-body-sm"
                placeholder="Enter your Bristol postcode (e.g. BS1, BS3, BS8, BS34)..."
                type="text"
              />
            </div>
            <a
              className="px-5 py-3 rounded-xl bg-amber-400 text-slate-950 font-headline-md text-label-md font-bold flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors"
              href="tel:07338430008"
            >
              <span>Check Dispatch</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-800 p-space-md rounded-3xl shadow-xl flex flex-col gap-3">
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden">
            <BristolMap />
            <div className="absolute bottom-3 left-3 z-[400] bg-slate-900/90 px-3 py-1.5 rounded-xl text-white font-mono-data text-label-sm backdrop-blur-md pointer-events-none">
              <span>Live Bristol Coverage Map</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="bg-slate-900/60 p-2 rounded-xl">
              <span className="block font-headline-md text-headline-md text-amber-300 font-bold">24/7</span>
              <span className="font-body-sm text-[12px] text-slate-400">All Year Round</span>
            </div>
            <div className="bg-slate-900/60 p-2 rounded-xl">
              <span className="block font-headline-md text-headline-md text-white font-bold">30-45m</span>
              <span className="font-body-sm text-[12px] text-slate-400">Average Response</span>
            </div>
            <div className="bg-slate-900/60 p-2 rounded-xl">
              <span className="block font-headline-md text-headline-md text-white font-bold">100%</span>
              <span className="font-body-sm text-[12px] text-slate-400">Mobile Vans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
