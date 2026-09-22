import Image from "next/image";
import tyreBalancing from "@/assets/images/02-tyre-balancing.webp";
import jumpStartImg from "@/assets/images/03-jump-start-service.webp";
import fuelDelivery from "@/assets/images/04-fuel-delivery.webp";
import technicianVan from "@/assets/images/01-technician-service-van.webp";
import homeFitting from "@/assets/images/05-home-tyre-fitting.webp";

const SERVICES = [
  {
    slug: "mobile-tyre-fitting",
    title: "Mobile Tyre Fitting",
    description: "Mobile tyre fitting brought directly to your location in Bristol.",
    image: tyreBalancing,
  },
  {
    slug: "jump-start",
    title: "Jump Start",
    description: "Help getting your vehicle started when the battery lets you down.",
    image: jumpStartImg,
  },
  {
    slug: "fuel-delivery",
    title: "Fuel Delivery",
    description: "Emergency fuel assistance when you run out during your journey.",
    image: fuelDelivery,
  },
  {
    slug: "emergency-tyre-fitting",
    title: "Emergency Tyre Fitting",
    description: "Mobile tyre help for unexpected tyre problems around Bristol.",
    image: technicianVan,
  },
  {
    slug: "home-tyre-fitting",
    title: "Home Tyre Fitting",
    description: "Have your tyres fitted conveniently at your home.",
    image: homeFitting,
  },
];

export default function ServicesCapabilities() {
  return (
    <section className="w-full bg-surface py-16 lg:py-20 scroll-mt-20" id="services-grid">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="max-w-2xl mb-space-xl">
          <span className="font-label-urgency text-label-urgency text-[#1D4ED8] uppercase tracking-wider block mb-space-xs">
            Complete Breakdown &amp; Tyre Solutions
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
            Comprehensive Roadside Assistance
          </h2>
          <p className="font-body-md text-body-md text-secondary mt-space-xs">
            Delivered directly to your driveway, roadside verge, or commercial site throughout Bristol.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                <Image
                  alt={service.title}
                  src={service.image}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{service.title}</h3>
                  <p className="font-body-md text-body-md text-secondary mt-space-xs line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <div className="pt-space-md mt-space-md">
                  <a
                    className="inline-flex items-center gap-1.5 font-headline-md text-label-md font-bold text-[#1D4ED8] hover:text-[#1D4ED8]/80 group"
                    href="tel:01174054733"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
