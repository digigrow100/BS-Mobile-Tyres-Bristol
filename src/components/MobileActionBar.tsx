export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-inverse-surface p-space-sm shadow-[0_-4px_16px_rgba(0,0,0,0.25)] flex items-center gap-space-sm">
      <a
        className="flex-1 inline-flex items-center justify-center gap-space-xs h-[52px] px-space-md rounded-lg bg-primary-container text-on-primary font-headline-md text-headline-md tracking-tight active:bg-primary shadow-[0_0_0_2px_rgba(249,115,22,0.3)]"
        href="tel:07338430008"
      >
        <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
        <span>Call 07338430008</span>
      </a>
      <a
        className="inline-flex items-center justify-center gap-space-xs h-[52px] px-space-md rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md active:bg-surface-bright"
        href="https://wa.me/447338430008"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-[22px]">chat</span>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
