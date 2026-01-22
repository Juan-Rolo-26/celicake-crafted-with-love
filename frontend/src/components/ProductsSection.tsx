import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import igDelicioso1 from "@/assets/instagram/ig-deliciosos-1-DTVfIS9jseG.jpg";
import igDelicioso2 from "@/assets/instagram/ig-deliciosos-2-DTSy45hDj1t.jpg";
import igDelicioso3 from "@/assets/instagram/ig-deliciosos-3-DTNfaDUjr17.jpg";
import igPost1 from "@/assets/instagram/ig-post-1-DTiJDYFjt79.jpg";
import igProduct1 from "@/assets/instagram/ig-product-1-DTfnOoGkSgS.jpg";
import igProduct3 from "@/assets/instagram/ig-product-3-DTatXGbkcQc.jpg";
import igPost2 from "@/assets/instagram/ig-post-2-DTpyrr5jqA4.jpg";
import igPost3 from "@/assets/instagram/ig-post-3-DTnIx7GjhYP.jpg";
import igPostAlt from "@/assets/instagram/ig-post-4-DTk0aSEjlRR.jpg";
import igCapture207 from "@/assets/instagram/Captura de pantalla 2026-01-22 024207.png";
import igCapture010 from "@/assets/instagram/Captura de pantalla 2026-01-22 024010.png";
import igCapture025 from "@/assets/instagram/Captura de pantalla 2026-01-22 024025.png";
import igCapture039 from "@/assets/instagram/Captura de pantalla 2026-01-22 024039.png";
import igCapture058 from "@/assets/instagram/Captura de pantalla 2026-01-22 024058.png";
import igCapture112 from "@/assets/instagram/Captura de pantalla 2026-01-22 024112.png";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const headerVariants = fadeUp(32, 0.8);
  const cardVariants = scaleIn(0.96, 0.5);
  const gridVariants = staggerContainer(0.14, 0.2);

  const productImages = [
    igProduct1,
    igCapture207,
    igProduct3,
    igDelicioso1,
    igDelicioso2,
    igDelicioso3,
    igPost1,
    igPost2,
    igPost3,
    igPostAlt,
    igCapture010,
    igCapture025,
    igCapture039,
    igCapture058,
    igCapture112,
  ];

  return (
    <section id="productos" ref={ref} className="py-24 bg-background border-b border-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.35em] text-foreground/70 mb-4">
            Productos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary mb-6">
            Dulces seguros, <span className="text-primary">sabores que enamoran</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Pastelería SIN GLUTEN con textura real, cuidada para celíacos y para
            quienes buscan algo rico y confiable.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6"
        >
          {productImages.map((image, index) => (
            <motion.div
              key={`${index}-product`}
              variants={cardVariants}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-cream-dark/60 bg-card/90 shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={image}
                  alt={`Producto CeliCake ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
