const BENEFITS = [
  {
    icon: "local_shipping",
    title: "Mobile Service",
    description: "We travel directly to your exact location with fully self-powered mobile tyre fitting equipment.",
  },
  {
    icon: "pin_drop",
    title: "Bristol Coverage",
    description: "Full coverage across all Bristol postcodes, the M4, M5, M32, and surrounding Avon routes.",
  },
  {
    icon: "car_repair",
    title: "Convenient Roadside Help",
    description: "No recovery waits or garage queues—get tyre help where your vehicle is parked.",
  },
  {
    icon: "handyman",
    title: "Multiple Vehicle Services",
    description: "From tyre replacements to jump starts and emergency fuel delivery.",
  },
];

export default function WhyChooseUsCompact() {
  return (
    <section className="w-full bg-slate-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-8">
        <div className="mb-12">
          <h2 className="font-headline-lg text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose BS Mobile Tyres Bristol
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[26px]">{benefit.icon}</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="font-body-sm text-sm text-slate-600 leading-normal">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
