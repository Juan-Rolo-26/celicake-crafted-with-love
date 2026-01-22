import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import igDelicioso1 from "@/assets/instagram/ig-deliciosos-1-DTVfIS9jseG.jpg";
import igDelicioso2 from "@/assets/instagram/ig-deliciosos-2-DTSy45hDj1t.jpg";
import igDelicioso3 from "@/assets/instagram/ig-deliciosos-3-DTNfaDUjr17.jpg";
import igProduct1 from "@/assets/instagram/ig-product-1-DTfnOoGkSgS.jpg";
import igProduct2 from "@/assets/instagram/ig-product-2-DTc2ADBjvV0.jpg";
import igProduct3 from "@/assets/instagram/ig-product-3-DTatXGbkcQc.jpg";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const headerVariants = fadeUp(32, 0.8);
  const gridVariants = staggerContainer(0.12, 0.2);
  const cardVariants = scaleIn(0.95, 0.4);

  // Latest Instagram post previews
  const instagramImages = [
    {
      image: igProduct1,
      alt: "Torta de chocolate artesanal sin gluten",
    },
    {
      image: igDelicioso1,
      alt: "Galletitas bañadas en chocolate",
    },
    {
      image: igProduct2,
      alt: "Postre sin gluten con fruta",
    },
    {
      image: igDelicioso2,
      alt: "Pastelería artesanal de temporada",
    },
    {
      image: igProduct3,
      alt: "Brownies y dulces clásicos",
    },
    {
      image: igDelicioso3,
      alt: "Budines y opciones sin azúcar",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background border-b border-cream-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <Instagram className="w-10 h-10 text-rose-dark mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary mb-4">
            Momentos dulces en <span className="text-secondary">Instagram</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto">
            Mirá lo último, novedades y pedidos reales en @celicake_.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-12"
        >
          {instagramImages.map((item, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/celicake_"
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              whileHover={{ y: -4 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-rose-dark/0 group-hover:bg-rose-dark/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(20, 0.6)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center"
        >
          <Button variant="soft" size="lg" asChild>
            <a
              href="https://instagram.com/celicake_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
              Ver Instagram
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
