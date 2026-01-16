import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlutenFreeBadge from "./GlutenFreeBadge";
import heroImage from "@/assets/hero-bakery.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/543515157731?text=Hola!%20Quiero%20hacer%20un%20pedido",
      "_blank"
    );
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Productos artesanales de Celicake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Gluten Free Badge */}
            <div className="mb-6">
              <GlutenFreeBadge size="md" />
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
              Panadería y repostería artesanal{" "}
              <span className="text-primary">100% libre de gluten</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Hecho con amor, cuidado y dedicación para personas celíacas. Cada
              producto es elaborado artesanalmente con ingredientes
              seleccionados.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={handleWhatsApp}
                className="group"
              >
                <MessageCircle
                  size={22}
                  className="group-hover:scale-110 transition-transform"
                />
                Hacé tu pedido por WhatsApp
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#productos">Ver productos</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-light/80 text-sage-dark text-sm font-medium">
                ✓ 100% Sin TACC
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-light/80 text-rose-dark text-sm font-medium">
                ✓ Artesanal
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-dark/80 text-warm-brown text-sm font-medium">
                ✓ Hecho con amor
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#sin-gluten" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Descubrí más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
