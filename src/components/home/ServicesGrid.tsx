import Image from "next/image";
import tyreBalancing from "@/assets/images/02-tyre-balancing.webp";
import jumpStart from "@/assets/images/03-jump-start-service.webp";
import fuelDelivery from "@/assets/images/04-fuel-delivery.webp";
import technicianVan from "@/assets/images/01-technician-service-van.webp";
import homeFitting from "@/assets/images/05-home-tyre-fitting.webp";
import carRecovery from "@/assets/images/06-car-recovery-towing.webp";

const SERVICES = [
  {
    slug: "mobile-tyre-fitting",
    title: "Mobile Tyre Fitting",
    description:
      "Punctures, brand-new replacement tyres, digital balancing, and new valve installation fitted directly on your driveway or roadside verge.",
    cta: "Book Tyre Fitting",
    badge: { label: "Most Requested", icon: "tire_repair", className: "bg-blue-700 text-white" },
    image: tyreBalancing,
    ctaClassName: "bg-blue-50 text-blue-800 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    slug: "jump-start",
    title: "Jump Start Service",
    description:
      "Dead battery roadside recovery with industrial 12V/24V surge-protected booster packs and on-site alternator testing.",
    cta: "Request Jump Start",
    badge: { label: "Rapid 30m", icon: "bolt", className: "bg-slate-900 text-amber-300" },
    image: jumpStart,
    ctaClassName: "bg-blue-50 text-blue-800 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    slug: "fuel-delivery",
    title: "Fuel Delivery",
    description:
      "Ran out of fuel on the M-way or rural lane? Fast roadside delivery of 10-20 litres of premium petrol or diesel with priming service.",
    cta: "Get Fuel Delivered",
    badge: { label: "Petrol & Diesel", icon: "local_gas_station", className: "bg-amber-400 text-slate-950" },
    image: fuelDelivery,
    ctaClassName: "bg-blue-50 text-blue-800 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    slug: "emergency-tyre-fitting",
    title: "Emergency Tyre Fitting",
    description:
      "Urgent motorway hard shoulder blowouts, shredded sidewalls, and pothole rim fractures handled around the clock with safety beacons.",
    cta: "Emergency Dispatch",
    badge: { label: "24/7 Priority", icon: "emergency", className: "bg-red-600 text-white" },
    image: technicianVan,
    ctaClassName: "bg-amber-100 text-amber-950 group-hover:bg-amber-400",
  },
  {
    slug: "home-tyre-fitting",
    title: "Home Tyre Fitting",
    description:
      "Skip waiting in cold garage queues. Convenient scheduled or same-day tyre replacements right outside your front door while you relax.",
    cta: "Schedule Home Visit",
    badge: { label: "Driveway Booking", icon: "home_repair_service", className: "bg-emerald-700 text-white" },
    image: homeFitting,
    ctaClassName: "bg-blue-50 text-blue-800 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    slug: "car-recovery",
    title: "Car Recovery & Towing",
    description:
      "Full mechanical breakdown recovery. Safe hydraulic tilt-and-slide transport for cars, vans, 4x4s, and electric vehicles to any UK destination.",
    cta: "Arrange Recovery",
    badge: { label: "Tilt & Slide", icon: "rv_hookup", className: "bg-blue-900 text-white" },
    image: carRecovery,
    ctaClassName: "bg-blue-50 text-blue-800 group-hover:bg-blue-600 group-hover:text-white",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-label-urgency text-label-urgency uppercase">
            <span className="material-symbols-outlined text-[16px]">build_circle</span>
            <span>COMPREHENSIVE ON-DEMAND FLEET</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-slate-900 tracking-tight">
            Our Mobile Tyre &amp; Roadside Services
          </h2>
          <p className="font-body-md text-body-md text-slate-600">
            Mobile Tyre Fitting &amp; Roadside Services across Bristol and surrounding areas. Transparent, fast, and
            fully equipped mobile workshops ready for every vehicle challenge. No subscription fee needed — pay only
            for what you book.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              className="group bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col scroll-mt-24"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <Image
                  alt={service.title}
                  src={service.image}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3 left-3 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm ${service.badge.className}`}
                >
                  <span className="material-symbols-outlined text-[16px]">{service.badge.icon}</span>
                  {service.badge.label}
                </span>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between gap-space-md">
                <div>
                  <h3 className="font-headline-md text-headline-md text-slate-900 font-bold mb-1">
                    {service.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-slate-600">{service.description}</p>
                </div>
                <a
                  className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl font-headline-md text-label-md font-bold transition-colors ${service.ctaClassName}`}
                  href="tel:07338430008"
                >
                  <span>{service.cta}</span>
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
