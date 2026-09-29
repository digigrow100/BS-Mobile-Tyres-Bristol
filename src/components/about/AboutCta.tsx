export default function AboutCta() {
  return (
    <section className="w-full bg-slate-900 text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col space-y-2 text-center md:text-left max-w-xl">
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need Tyre Help in Bristol?
            </h2>
            <p className="font-body-lg text-slate-300">
              Call BS Mobile Tyres Bristol for mobile tyre and roadside assistance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-amber-400 text-slate-950 font-bold text-base shadow-sm hover:bg-amber-300 active:scale-95 transition-all"
              href="tel:07338430008"
            >
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                call
              </span>
              <span>Call 07338430008</span>
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-slate-800 text-white font-bold text-base shadow-sm hover:bg-slate-700 active:scale-95 transition-all"
              href="https://share.google/BOxYzZAiYI0ynBs2m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                <path d="M12 5c1.59 0 3.03.55 4.16 1.63l3.12-3.12C17.38 1.7 14.88 1 12 1 7.42 1 3.52 3.61 1.65 7.45l3.77 2.92C6.31 7.4 8.92 5 12 5z" />
                <path d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.72 2.89c2.18-2.01 3.7-4.99 3.7-8.71z" />
                <path d="M5.42 14.63C5.15 13.82 5 12.93 5 12s.15-1.82.42-2.63L1.65 6.45C.6 8.54 0 10.19 0 12s.6 3.46 1.65 5.55l3.77-2.92z" />
                <path d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.72-2.89c-1.07.72-2.44 1.16-4.21 1.16-3.08 0-5.69-2.4-6.58-5.37L1.65 15.91C3.52 20.39 7.42 23 12 23z" />
              </svg>
              <span>View Us on Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
