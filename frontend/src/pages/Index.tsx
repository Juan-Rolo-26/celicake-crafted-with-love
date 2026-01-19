import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GlutenFreeSection from "@/components/GlutenFreeSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ProductListSection from "@/components/ProductListSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import InstagramSection from "@/components/InstagramSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GlutenFreeSection />
        <AboutSection />
        <ProductsSection />
        <ProductListSection />
        <HowToOrderSection />
        <InstagramSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default Index;
