import { useState } from "react";

const FAQS = [
  {
    question: "How fast can a mobile tyre van reach me in an emergency?",
    answer:
      "Our Bristol average response window is 30 to 45 minutes across all BS postcodes, motorways (M4, M5, M32, M49) and local dual carriageways. When you call 01174054733, we pinpoint the closest mobile tyre van via live GPS and provide an accurate real-time arrival estimate.",
  },
  {
    question: "Do I need to belong to a motoring club or pay monthly membership?",
    answer:
      "No! We operate on a transparent on-demand basis. There are zero membership cards, zero recurring subscriptions, and zero sign-up fees. You only pay for the service you actually receive when you call.",
  },
  {
    question: "Can you change run-flat or electric vehicle (EV) tyres on-site?",
    answer:
      "Yes. Every mobile workshop van is fitted with high-specification pneumatic mounting equipment capable of mounting stiff run-flat sidewalls and high-load XL rated tyres engineered specifically for electric vehicles like Teslas, BMWs, and Polestars.",
  },
  {
    question: "What if my tyre cannot be repaired due to sidewall puncture?",
    answer:
      "Our vans carry a comprehensive inventory of new budget, mid-range, and premium tyres (Michelin, Goodyear, Continental, Pirelli). If a safe British Standard puncture repair isn't possible, our technician will supply and fit a brand new matching replacement immediately.",
  },
  {
    question: "What forms of roadside payment do you accept?",
    answer:
      "Every technician carries a contactless card terminal accepting all major UK debit/credit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and bank transfers for verified fleet accounts.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-surface-container-lowest py-space-xl scroll-mt-20">
      <div className="max-w-[860px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center mb-space-xl flex flex-col items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-label-urgency text-label-urgency uppercase font-bold">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-slate-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="font-body-md text-body-md text-slate-600">
            Clear answers about response times, payment, tyre stock, and how our mobile service operates.
          </p>
        </div>
        <div className="flex flex-col gap-space-sm">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`bg-surface-container-low rounded-2xl overflow-hidden ${isOpen ? "bg-blue-50/70" : ""}`}
              >
                <button
                  className="w-full p-space-lg text-left flex items-center justify-between gap-4 font-headline-md text-headline-md font-bold text-blue-700 hover:text-blue-800 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-slate-500 transition-transform duration-200">
                    {isOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-space-lg pb-space-lg text-slate-700 font-body-md text-body-md">{faq.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
