import BrandingSection from "@/components/branding/branding";
import Companies from "@/components/companies/companies";
import ContactSection from "@/components/contact/contact";
import CustomizeSection from "@/components/customize/page";
import HeroSection from "@/components/hero-section/heroSection";
import TestimonialSection from "@/components/testimonial/testmonial";

const HomeView = () => {
  return (
    <main className={`main_style`}>
      <HeroSection />
      <Companies />
      <BrandingSection />
      <CustomizeSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
};

export default HomeView;