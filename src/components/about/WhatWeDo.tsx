import Image from "next/image";
import tyreBalancing from "@/assets/images/02-tyre-balancing.webp";
import technicianVan from "@/assets/images/01-technician-service-van.webp";
import jumpStart from "@/assets/images/03-jump-start-service.webp";

const CAPABILITIES = [
  {
    title: "Mobile Tyre Fitting",
    description: "Puncture repairs and new tyre replacements fitted right on your driveway or work car park.",
    image: tyreBalancing,
  },
  {
    title: "Emergency Tyre Help",
    description: "Rapid roadside tyre assistance across Bristol motorways, ring roads, and urban routes.",
    image: technicianVan,
  },
  {
    title: "Roadside Assistance",
    description: "12V/24V jump starts, emergency fuel delivery, and vehicle transport when you are stranded.",
    image: jumpStart,
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-8">
        <div className="flex flex-col items-start mb-12 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-label-urgency text-xs tracking-wider uppercase">
            OUR CORE CAPABILITIES
          </span>
          <h2 className="font-headline-lg text-3xl font-extrabold text-slate-900 tracking-tight">What We Do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAPABILITIES.map((item) => (
            <div key={item.title} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-100 mb-6">
                <Image alt={item.title} src={item.image} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="font-body-sm text-sm text-slate-600 leading-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
