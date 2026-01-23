import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GlutenFreeSection from "@/components/GlutenFreeSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ProductListSection from "@/components/ProductListSection";
import MarqueeSection from "@/components/MarqueeSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductListSection />
        <ProductsSection />
        <AboutSection />
        <GlutenFreeSection />
        <MarqueeSection />
        <HowToOrderSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default Index;
