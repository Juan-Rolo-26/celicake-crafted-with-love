import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerVariants = staggerContainer(0.18, 0.2);
  const itemVariants = fadeUp(28, 0.8);
  const badgeVariants = scaleIn(0.95, 0.4);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/543515157731?text=Hola!%20Quiero%20hacer%20un%20pedido",
      "_blank"
    );
  };

  return (
    <section ref={ref} className="py-24 bg-sage relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        aria-hidden
        className="absolute top-0 left-0 w-64 h-64 bg-sage-dark/10 rounded-full -translate-y-1/2 -translate-x-1/2"
        animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 w-80 h-80 bg-sage-dark/10 rounded-full translate-y-1/2 translate-x-1/2"
        animate={{ y: [0, 10, 0], x: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center"
        >
          {/* Decorative Heart */}
          <motion.div variants={badgeVariants} className="inline-block mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="w-12 h-12 text-primary-foreground fill-rose" />
            </motion.div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6 leading-tight"
          >
            Sabores artesanales,
            <br />
            seguros y sin gluten
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto"
          >
            Hacé tu pedido hoy y disfrutá de productos elaborados con amor y
            dedicación. ¡Te esperamos!
          </motion.p>

          <motion.div variants={badgeVariants}>
            <Button
              variant="hero"
              size="xl"
              onClick={handleWhatsApp}
              className="bg-card text-foreground hover:bg-card/90"
            >
              <MessageCircle size={22} />
              Pedí tu producto ahora
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
