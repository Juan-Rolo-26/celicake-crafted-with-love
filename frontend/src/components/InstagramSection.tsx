import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import igPost1 from "@/assets/instagram/ig-post-1-DTiJDYFjt79.jpg";
import igPost2 from "@/assets/instagram/ig-post-2-DTpyrr5jqA4.jpg";
import igPost3 from "@/assets/instagram/ig-post-3-DTnIx7GjhYP.jpg";
import igPost4 from "@/assets/instagram/ig-post-4-DTk0aSEjlRR.jpg";
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
      image: igPost1,
      alt: "Bocamatero libre de gluten con alfajores y palitos dulces",
      href: "https://www.instagram.com/p/DTiJDYFjt79/",
    },
    {
      image: igPost2,
      alt: "Dulzuras para compartir con masas secas y tarta de ricota",
      href: "https://www.instagram.com/p/DTpyrr5jqA4/",
    },
    {
      image: igPost3,
      alt: "Carrot cake sin TACC y sin azucar agregada",
      href: "https://www.instagram.com/p/DTnIx7GjhYP/",
    },
    {
      image: igPost4,
      alt: "Budines con crema pastelera y dulce de leche",
      href: "https://www.instagram.com/p/DTk0aSEjlRR/",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-rose-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
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
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {instagramImages.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              whileHover={{ y: -6 }}
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
              Seguinos en Instagram
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
