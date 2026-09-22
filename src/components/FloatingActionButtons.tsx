export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3">
      <a
        aria-label="Chat with us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:brightness-95 active:scale-95 transition-all"
        href="https://wa.me/441174054733"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </a>
      <a
        aria-label="Call BS Mobile Tyres Bristol"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-container text-on-primary shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:brightness-95 active:scale-95 transition-all"
        href="tel:01174054733"
      >
        <span className="material-symbols-outlined text-[28px]">call</span>
      </a>
    </div>
  );
}
