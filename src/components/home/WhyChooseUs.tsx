const BENEFITS = [
  {
    icon: "local_shipping",
    title: "Mobile Service",
    description:
      "Every recovery van is a state-of-the-art mobile fitting centre carrying computerized balancers, pneumatic guns, and premium brand tyres.",
  },
  {
    icon: "tire_repair",
    title: "Emergency Tyre Fitting Bristol",
    description:
      "No towing required for blown tyres. We install, balance, and safely dispose of your old tyres on the spot without interrupting your day.",
  },
  {
    icon: "car_crash",
    title: "Roadside Assistance",
    description:
      "Highways Agency compliant safety procedures, amber beacons, reflective zones, and prompt help when you are vulnerable on dark or fast routes.",
  },
  {
    icon: "public",
    title: "Bristol & Surrounding Areas",
    description:
      "Strategically stationed mobile dispatch hubs across Bristol, Clifton, Filton, Bedminster, and outer motorways ensuring rapid dispatch times anywhere in Greater Bristol.",
  },
  {
    icon: "verified_user",
    title: "Professional Service",
    description:
      "Fully insured, certified master tyre technicians trained in the latest TPMS diagnostics, run-flat tyres, EV high-load requirements, and wheel alignments.",
  },
  {
    icon: "handyman",
    title: "Multiple Roadside Services",
    description:
      "One friendly contact solves all common roadside headaches: tyres, dead batteries, lockouts, and wrong fuel or empty tank top-ups.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-label-urgency text-label-urgency uppercase mb-2">
              <span className="material-symbols-outlined text-[16px]">sentiment_very_satisfied</span>
              <span>WHY CHOOSE OUR FLEET</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-slate-900 tracking-tight">
              Why Bristol Drivers Trust Our Mobile Service
            </h2>
          </div>
          <p className="font-body-md text-body-md text-slate-600 max-w-md">
            Built around warmth, genuine roadside care, and rapid arrival for Bristol motorists. We treat stranded
            drivers like family, with clear upfront rates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                <span className="material-symbols-outlined text-[26px]">{benefit.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md font-bold text-slate-900">{benefit.title}</h3>
              <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
