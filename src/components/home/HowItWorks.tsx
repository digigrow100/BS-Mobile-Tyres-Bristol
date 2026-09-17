const STEPS = [
  {
    number: 1,
    title: "Contact Us",
    description:
      "Tell us your location (postcode, motorway marker, or drop a WhatsApp pin) and what help you need with your car or van.",
    footerIcon: "phone_in_talk",
    footerLabel: "Instant Phone or Online Chat",
    footerClassName: "text-blue-700",
  },
  {
    number: 2,
    title: "We Come to You",
    description:
      "Our fully stocked mobile service van comes directly to your location with live GPS updates and an accurate arrival ETA.",
    footerIcon: "near_me",
    footerLabel: "30-45 Min Average Arrival",
    footerClassName: "text-blue-700",
  },
  {
    number: 3,
    title: "Get Back on the Road",
    description:
      "Our certified technician completes the tyre change, jump start, or repair safely so you can resume your journey with total peace of mind.",
    footerIcon: "check_circle",
    footerLabel: "Safety Checked & Cleared",
    footerClassName: "text-emerald-700",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl flex flex-col items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-label-urgency text-label-urgency uppercase font-bold">
            EASY &amp; STRESS-FREE
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-slate-900 tracking-tight">
            How It Works — Simple as 1, 2, 3
          </h2>
          <p className="font-body-md text-body-md text-slate-600">
            Mobile Tyre Fitting &amp; Roadside Services across Bristol and surrounding areas. Transparent, fast, and
            fully equipped mobile workshops ready for every vehicle challenge. No subscription fee needed — pay only
            for what you book.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-blue-50/60 p-space-lg rounded-3xl flex flex-col items-center text-center relative"
            >
              <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-headline-xl text-headline-xl font-bold mb-space-md shadow-md">
                {step.number}
              </div>
              <h3 className="font-headline-md text-headline-md font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-slate-600">{step.description}</p>
              <div className={`mt-4 inline-flex items-center gap-1 font-label-md text-label-md font-bold ${step.footerClassName}`}>
                <span className="material-symbols-outlined text-[18px]">{step.footerIcon}</span>
                <span>{step.footerLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
