export default function ContactInfoCards() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-space-md">
      <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-[#1D4ED8]/10 text-[#1D4ED8] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[28px]">phone_in_talk</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Phone</span>
            <span className="font-headline-md text-headline-md text-on-surface">07338430008</span>
          </div>
        </div>
        <div>
          <a
            className="inline-flex items-center justify-center gap-space-xs w-full py-space-sm px-space-md rounded-xl bg-[#FACC15] text-[#0F172A] font-title-sm text-title-sm hover:bg-[#eab308] transition-colors shadow-sm"
            href="tel:07338430008"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span>Call Now</span>
          </a>
        </div>
      </div>

      <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-[#1D4ED8]/10 text-[#1D4ED8] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[28px]">pin_drop</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Service Area</span>
            <span className="font-headline-md text-headline-md text-on-surface">Bristol, UK</span>
          </div>
        </div>
        <p className="font-body-md text-body-md text-secondary pt-space-xs">
          Mobile tyre and roadside services across Bristol and surrounding areas.
        </p>
      </div>

      <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-[#1D4ED8]/10 text-[#1D4ED8] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[28px]">stars</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
              Verified Listing
            </span>
            <span className="font-headline-md text-headline-md text-on-surface">Google Business Profile</span>
          </div>
        </div>
        <div>
          <a
            className="inline-flex items-center justify-center gap-space-xs w-full py-space-sm px-space-md rounded-xl bg-surface-container-high text-on-surface font-title-sm text-title-sm hover:bg-surface-dim transition-colors"
            href="https://share.google/BOxYzZAiYI0ynBs2m"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View BS Mobile Tyres Bristol on Google</span>
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
}
