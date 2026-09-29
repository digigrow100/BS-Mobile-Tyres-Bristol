import Image from "next/image";
import tyreBalancing from "@/assets/images/02-tyre-balancing.webp";

export default function AboutHero() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700">
              <span className="material-symbols-outlined text-blue-700 text-[18px]">build_circle</span>
              <span className="font-label-urgency text-xs tracking-wider uppercase">ABOUT OUR BRISTOL TEAM</span>
            </div>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              About BS Mobile Tyres Bristol
            </h1>
            <p className="font-body-lg text-lg text-slate-600 max-w-xl leading-relaxed">
              Mobile tyre fitting and roadside assistance for drivers across Bristol.
            </p>
            <div className="pt-2">
              <a
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-amber-400 text-slate-950 font-bold text-base shadow-sm hover:bg-amber-300 hover:shadow-md active:scale-95 transition-all"
                href="tel:07338430008"
              >
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  call
                </span>
                <span>Call 07338430008</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-100 aspect-[4/3]">
              <Image
                alt="Professional technician balancing and mounting a tyre beside mobile workshop van"
                src={tyreBalancing}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
