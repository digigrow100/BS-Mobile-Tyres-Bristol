import Layout from "@/layouts/Layout";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhyChooseUsCompact from "@/components/about/WhyChooseUsCompact";
import AboutCta from "@/components/about/AboutCta";
import LocationCtaBar from "@/components/shared/LocationCtaBar";

export default function AboutUs() {
  return (
    <Layout
      title="About Us | BS Mobile Tyres Bristol"
      description="Learn about BS Mobile Tyres Bristol's mobile tyre fitting and roadside assistance team serving Bristol and surrounding areas."
    >
      <div className="flex flex-col w-full font-body-md text-slate-800 antialiased">
        <AboutHero />
        <LocationCtaBar
          heading="Need Our Bristol Team at Your Location?"
          description="Tell us where you are and we'll send a technician straight to you"
        />
        <AboutIntro />
        <WhatWeDo />
        <WhyChooseUsCompact />
        <AboutCta />
      </div>
    </Layout>
  );
}
