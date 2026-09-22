import Layout from "@/layouts/Layout";
import Hero from "@/components/home/Hero";
import LocationCtaBar from "@/components/shared/LocationCtaBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import CoverageSection from "@/components/home/CoverageSection";
import DispatchBanner from "@/components/home/DispatchBanner";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <Layout
      title="BS Mobile Tyres Bristol | Mobile Tyre Fitting & Roadside Assistance"
      description="Rapid mobile tyre fitting and roadside assistance across Bristol and surrounding areas. Call 01174054733 for 30-45 minute dispatch, 24/7."
    >
      <div className="flex flex-col w-full">
        <Hero />
        <LocationCtaBar
          heading="Where do you need us in Bristol?"
          description="Select your current location for instant arrival quote"
        />
        <ServicesGrid />
        <WhyChooseUs />
        <HowItWorks />
        <CoverageSection />
        <DispatchBanner />
        <Faq />
      </div>
    </Layout>
  );
}
