export default function TrustBar() {
  return (
    <div className="w-full bg-surface-container-lowest shadow-sm">
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-700 via-blue-600 to-amber-400" />
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter py-space-sm flex flex-wrap items-center justify-between gap-space-md">
        <div className="flex flex-wrap items-center gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="font-headline-md text-headline-md tracking-tight text-blue-700 font-bold">
              BS Mobile Tyres Bristol
            </span>
            <span className="font-label-sm text-label-sm text-secondary bg-blue-50 px-2 py-0.5 rounded-full font-medium ml-1">
              Bristol &amp; Surrounding Areas • Mobile Dispatch
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-secondary font-label-md text-label-md">
            <span className="text-secondary/40">|</span>
            <a
              href="https://share.google/BOxYzZAiYI0ynBs2m"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-700 transition-colors"
            >
              <span className="material-symbols-outlined text-amber-500 text-[18px]">star</span> 4.9/5 TrustScore •
              Find us on Google
            </a>
            <span className="text-secondary/40">•</span>
            <span>Mobile Tyre Service Across Bristol</span>
          </div>
        </div>
        <div className="flex items-center gap-space-sm">
          <a
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors font-label-md text-label-md"
            href="https://wa.me/447338430008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">chat</span>
            <span className="hidden sm:inline">WhatsApp Chat</span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-300 text-slate-900 hover:bg-amber-400 transition-colors font-headline-md text-label-md font-bold shadow-sm"
            href="tel:07338430008"
          >
            <span className="material-symbols-outlined text-[18px] text-slate-900">call</span>
            <span>07338430008</span>
          </a>
        </div>
      </div>
    </div>
  );
}
