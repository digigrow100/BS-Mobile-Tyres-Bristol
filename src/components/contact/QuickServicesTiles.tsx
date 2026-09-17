import Image from "next/image";
import Link from "next/link";
import tyreBalancing from "@/assets/images/tyre-balancing.svg";
import jumpStart from "@/assets/images/jump-start.svg";
import fuelDelivery from "@/assets/images/fuel-delivery.svg";
import technicianVan from "@/assets/images/technician-van.svg";
import homeFitting from "@/assets/images/home-fitting.svg";
import carRecovery from "@/assets/images/car-recovery.svg";

const SERVICES = [
  { slug: "mobile-tyre-fitting", title: "Mobile Tyre Fitting", image: tyreBalancing },
  { slug: "jump-start", title: "Jump Start", image: jumpStart },
  { slug: "fuel-delivery", title: "Fuel Delivery", image: fuelDelivery },
  { slug: "emergency-tyre-fitting", title: "Emergency Tyre Fitting", image: technicianVan },
  { slug: "home-tyre-fitting", title: "Home Tyre Fitting", image: homeFitting },
  { slug: "car-recovery", title: "Car Recovery", image: carRecovery },
];

export default function QuickServicesTiles() {
  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter flex flex-col gap-space-xl">
        <div className="flex flex-col items-center text-center gap-space-xs">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Roadside &amp; Tyre Services</h2>
          <p className="font-body-md text-body-md text-secondary max-w-xl">
            Select a service for more details or call us directly.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              className="group flex flex-col bg-surface rounded-2xl overflow-hidden p-space-sm gap-space-sm transition-transform hover:-translate-y-1 shadow-sm"
              href={`/services#${service.slug}`}
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container">
                <Image
                  alt={service.title}
                  src={service.image}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 px-space-xs pb-space-xs">
                <span className="font-title-sm text-label-md text-on-surface line-clamp-1 font-semibold">
                  {service.title}
                </span>
                <span className="inline-flex items-center text-[#1D4ED8] font-label-sm text-label-sm font-semibold group-hover:underline mt-space-xs">
                  View Service →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
