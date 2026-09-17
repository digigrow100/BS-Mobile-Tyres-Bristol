const LOCATIONS = [
  { label: "At Home", icon: "home", highlight: false },
  { label: "At Work", icon: "apartment", highlight: false },
  { label: "On the Motorway / Roadside", icon: "warning", highlight: true },
];

export default function LocationSelector() {
  return (
    <section className="w-full bg-blue-600 text-white py-space-md shadow-md">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-amber-300 text-slate-900 flex items-center justify-center font-bold shrink-0">
            <span className="material-symbols-outlined text-[24px]">location_searching</span>
          </span>
          <div>
            <span className="font-headline-md text-headline-md font-bold block text-white">
              Where do you need us in Bristol?
            </span>
            <span className="font-body-sm text-body-sm text-blue-100">
              Select your current location for instant arrival quote
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full md:w-auto">
          {LOCATIONS.map((location) => (
            <a
              key={location.label}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all text-center ${
                location.highlight
                  ? "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md"
                  : "bg-blue-700/80 hover:bg-blue-800 text-white"
              }`}
              href="tel:07338430008"
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  location.highlight ? "text-slate-950" : "text-amber-300"
                }`}
              >
                {location.icon}
              </span>
              <span className="font-headline-md text-label-md font-bold">{location.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
