export default function DispatchBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white py-space-xl">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-space-lg sm:p-space-xl relative overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="flex flex-col gap-2 text-center lg:text-left max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-label-urgency text-label-urgency font-bold w-fit mx-auto lg:mx-0 shadow-sm">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                IMMEDIATE BRISTOL DISPATCH DESK
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-white tracking-tight">
                Need Roadside Tyre Help in Bristol Right Now?
              </h2>
              <p className="font-body-lg text-body-lg text-blue-100">
                BS Mobile Tyres Bristol: Rapid mobile tyre fitting and roadside assistance across all Bristol
                postcodes and surrounding arteries. Speak directly to our local coordinator in seconds.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-space-sm w-full sm:w-auto shrink-0">
              <a
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-headline-md text-headline-md font-bold shadow-xl transition-all"
                href="tel:01174054733"
              >
                <span className="material-symbols-outlined text-[24px]">call</span>
                <span>Call 01174054733</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-blue-950/80 hover:bg-blue-950 text-white font-headline-md text-label-md font-semibold transition-all"
                href="https://share.google/BOxYzZAiYI0ynBs2m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px] text-amber-400">star</span>
                <span>Google Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
