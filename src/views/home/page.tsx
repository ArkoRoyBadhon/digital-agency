import BrandingSection from "@/components/branding/page";
import Companies from "@/components/companies/page";
import ContactSection from "@/components/contact/page";
import CustomizeSection from "@/components/customize/page";
import HeroSection from "@/components/hero-section/heroSection";
import TestimonialSection from "@/components/testimonial/page";
import dynamic from "next/dynamic";


const HomeView = () => {
  return (
    <>
      <HeroSection />
      <Companies />
      <BrandingSection />
      <CustomizeSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HomeView;

// export default dynamic (() => Promise.resolve(HomeView), {ssr: false})
