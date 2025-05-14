
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferingsSection from "@/components/OfferingsSection";
import WhyMeSection from "@/components/WhyMeSection";
import LearningSection from "@/components/LearningSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <OfferingsSection />
        <WhyMeSection />
        <LearningSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
