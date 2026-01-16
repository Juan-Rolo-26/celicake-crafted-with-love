import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import cakeImage from "@/assets/cake-product.jpg";
import breadImage from "@/assets/bread-product.jpg";
import pastriesImage from "@/assets/pastries-product.jpg";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      image: cakeImage,
      title: "Tortas Artesanales",
      description: "Tortas decoradas para cumpleaños, eventos especiales y celebraciones. Personalizadas según tu gusto.",
    },
    {
      image: breadImage,
      title: "Panificados Sin Gluten",
      description: "Pan fresco, pan de molde, medialunas y más. El sabor del pan casero, 100% libre de gluten.",
    },
    {
      image: pastriesImage,
      title: "Repostería Dulce",
      description: "Galletitas, alfajores, macarons y delicias dulces para endulzar tu día sin preocupaciones.",
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
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
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
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
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
