import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import igDelicioso1 from "@/assets/instagram/ig-deliciosos-1-DTVfIS9jseG.jpg";
import igDelicioso2 from "@/assets/instagram/ig-deliciosos-2-DTSy45hDj1t.jpg";
import igDelicioso3 from "@/assets/instagram/ig-deliciosos-3-DTNfaDUjr17.jpg";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const headerVariants = fadeUp(32, 0.8);
  const cardVariants = scaleIn(0.96, 0.5);
  const gridVariants = staggerContainer(0.14, 0.2);

  const products = [
    {
      image: igDelicioso1,
      title: "Carrot cake sin TACC",
      description: "Carrot cake húmedo con especias, ideal para celebraciones. Se prepara solo a pedido.",
    },
    {
      image: igDelicioso2,
      title: "Alfajores de maicena",
      description: "Clásicos alfajores sin gluten, listos para la merienda o para compartir.",
    },
    {
      image: igDelicioso3,
      title: "Arrollado salado",
      description: "Relleno con atún, queso crema, huevo, aceitunas y zanahoria. Ideal para picadas.",
    },
  ];

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/543515157731?text=Hola!%20Me%20gustaría%20consultar%20sobre%20sus%20productos",
      "_blank"
    );
  };

  return (
    <section id="productos" ref={ref} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">
            Nuestros Productos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Deliciosos y <span className="text-primary">sin gluten</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubrí nuestra variedad de productos artesanales, elaborados con
            amor y los mejores ingredientes sin TACC.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={cardVariants}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              whileHover={{ y: -8 }}
              className="product-card group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-sage-light text-sage-dark text-xs font-semibold rounded-full">
                    Sin Gluten
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(20, 0.6)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mt-12"
        >
          <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
            <MessageCircle size={20} />
            Consultanos por WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
