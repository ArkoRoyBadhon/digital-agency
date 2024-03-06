import BrandingSection from "@/components/branding/branding";
import Companies from "@/components/companies/page";
import ContactSection from "@/components/contact/page";
import CustomizeSection from "@/components/customize/page";
import FooterSection from "@/components/footer/footer";
import HeroSection from "@/components/hero-section/heroSection";
import Navbar from "@/components/navbar/page";
import TestimonialSection from "@/components/testimonial/page";

export default function Home() {
  return (
    <div className="main_style">
      {/* <Navbar /> */}
      <HeroSection />
      <Companies />
      <BrandingSection />
      <CustomizeSection />
      <TestimonialSection />
      <ContactSection />
      
    </div>
  );
}
