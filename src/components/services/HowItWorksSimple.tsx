const STEPS = [
  { number: "01", title: "Call Us", description: "Tell us your location and what help you need." },
  { number: "02", title: "We Come to You", description: "Mobile roadside help comes to your location." },
  { number: "03", title: "Back on the Road", description: "We complete the required service." },
];

export default function HowItWorksSimple() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-xl mx-auto mb-space-xl">
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">How It Works</h2>
          <p className="font-body-md text-body-md text-secondary mt-space-xs">
            Three simple steps to get you moving again quickly in Bristol.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col p-space-lg bg-surface rounded-2xl">
              <div className="font-mono-data text-headline-lg font-extrabold text-[#1D4ED8] mb-space-xs">
                {step.number}
              </div>
              <h3 className="font-title-sm text-title-sm font-bold text-on-surface mb-space-xs">{step.title}</h3>
              <p className="font-body-md text-body-md text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
