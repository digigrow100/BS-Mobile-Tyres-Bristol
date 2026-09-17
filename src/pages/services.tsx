import Layout from "@/layouts/Layout";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesCapabilities from "@/components/services/ServicesCapabilities";
import HowItWorksSimple from "@/components/services/HowItWorksSimple";
import CtaBanner from "@/components/shared/CtaBanner";

export default function Services() {
  return (
    <Layout
      title="Services | BS Mobile Tyres Bristol"
      description="Mobile tyre fitting, jump starts, fuel delivery, emergency tyre fitting, home tyre fitting, and car recovery across Bristol."
    >
      <div className="flex flex-col w-full">
        <ServicesHero />
        <ServicesCapabilities />
        <HowItWorksSimple />
        <CtaBanner
          badgeLabel="Direct Dispatch"
          heading="Need Mobile Tyre Help in Bristol?"
          description="Speak directly to our mobile dispatch for immediate assistance across Bristol."
        />
      </div>
    </Layout>
  );
}
