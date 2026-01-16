import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import cakeImage from "@/assets/cake-product.jpg";
import breadImage from "@/assets/bread-product.jpg";
import pastriesImage from "@/assets/pastries-product.jpg";
import heroImage from "@/assets/hero-bakery.jpg";

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Using product images as Instagram preview grid
  const instagramImages = [
    { image: cakeImage, alt: "Torta artesanal" },
    { image: breadImage, alt: "Pan sin gluten" },
    { image: pastriesImage, alt: "Repostería dulce" },
    { image: heroImage, alt: "Productos Celicake" },
  ];

  return (
    <section ref={ref} className="py-24 bg-rose-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Instagram className="w-10 h-10 text-rose-dark mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Seguinos en <span className="text-rose-dark">Instagram</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Descubrí nuestras creaciones, novedades y momentos dulces en
            @celicake_
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {instagramImages.map((item, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/celicake_"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-rose-dark/0 group-hover:bg-rose-dark/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="soft" size="lg" asChild>
            <a
              href="https://instagram.com/celicake_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
              Seguinos en Instagram
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
