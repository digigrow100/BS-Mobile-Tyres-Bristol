import Image from "next/image";
import technicianVan from "@/assets/images/01-technician-service-van.webp";

export default function AboutIntro() {
  return (
    <section className="w-full bg-slate-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-white aspect-[16/10]">
              <Image
                alt="Professional mobile tyre fitting on-site roadside in Bristol"
                src={technicianVan}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <p className="font-body-md text-base sm:text-lg text-slate-700 leading-relaxed">
              BS Mobile Tyres Bristol provides fast, dependable mobile tyre fitting and roadside assistance
              throughout Bristol and the surrounding communities. Whether you&apos;re stuck with a puncture at the
              roadside, parked on your home driveway, or at your workplace, we bring the garage directly to you.
            </p>
            <p className="font-body-md text-base sm:text-lg text-slate-700 leading-relaxed">
              Our fully equipped mobile service units carry commercial tyre changers, digital wheel balancers, and
              emergency equipment to resolve tyre issues safely and swiftly on-site without the hassle or delay of
              garage visits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
