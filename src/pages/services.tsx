import Layout from "@/layouts/Layout";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesCapabilities from "@/components/services/ServicesCapabilities";
import HowItWorksSimple from "@/components/services/HowItWorksSimple";
import CtaBanner from "@/components/shared/CtaBanner";
import LocationCtaBar from "@/components/shared/LocationCtaBar";

export default function Services() {
  return (
    <Layout
      title="Services | BS Mobile Tyres Bristol"
      description="Mobile tyre fitting, jump starts, fuel delivery, emergency tyre fitting, home tyre fitting, and car recovery across Bristol."
    >
      <div className="flex flex-col w-full">
        <ServicesHero />
        <LocationCtaBar
          heading="Which Bristol Tyre Service Do You Need?"
          description="Select your situation and we'll match you with the right service"
        />
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
