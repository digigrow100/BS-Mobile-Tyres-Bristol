import Layout from "@/layouts/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import QuickServicesTiles from "@/components/contact/QuickServicesTiles";
import CtaBanner from "@/components/shared/CtaBanner";

export default function Contact() {
  return (
    <Layout
      title="Contact Us | BS Mobile Tyres Bristol"
      description="Contact BS Mobile Tyres Bristol for mobile tyre fitting and roadside assistance. Call 07338430008 or request assistance online."
    >
      <div className="flex flex-col w-full">
        <ContactHero />
        <section className="w-full bg-surface py-20">
          <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <ContactInfoCards />
              <ContactForm />
            </div>
          </div>
        </section>
        <QuickServicesTiles />
        <CtaBanner
          badgeLabel="Immediate Roadside Help"
          heading="Need Help Now?"
          description="For quicker roadside assistance, call us directly."
        />
      </div>
    </Layout>
  );
}
