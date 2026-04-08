import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BentoCategories from "@/components/BentoCategories";
import FeaturedGigs from "@/components/FeaturedGigs";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BentoCategories />
      <FeaturedGigs />
      <HowItWorks />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
