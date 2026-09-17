import Layout from "@/layouts/Layout";
import TrustBar from "@/components/home/TrustBar";
import Hero from "@/components/home/Hero";
import LocationSelector from "@/components/home/LocationSelector";
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
      description="Rapid mobile tyre fitting and roadside assistance across Bristol and surrounding areas. Call 07338430008 for 30-45 minute dispatch, 24/7."
    >
      <div className="flex flex-col w-full">
        <TrustBar />
        <Hero />
        <LocationSelector />
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
