import { motion } from "framer-motion";
import { MessageCircle, Instagram, Heart } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerVariants = staggerContainer(0.12, 0.1);

  return (
    <motion.footer
      className="bg-foreground py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeUp(20, 0.6)} className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <img
                src="/images/logo_celicake.png"
                alt="Celicake"
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
              />
              <h3 className="font-display text-2xl font-semibold text-background">
                Celicake
              </h3>
            </div>
            <p className="text-background/70 text-sm">
              Panadería y repostería artesanal
              <br />
              100% libre de gluten
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/543515157731"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <MessageCircle size={22} />
            </a>
            <a
              href="https://instagram.com/celicake_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Instagram size={22} />
            </a>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-background/70 text-sm mb-2">
              WhatsApp: +54 351 515 7731
            </p>
            <a
              href="https://instagram.com/celicake_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 text-sm hover:text-primary transition-colors"
            >
              @celicake_
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={fadeUp(16, 0.5)} className="h-px bg-background/10 my-8" />

        {/* Copyright */}
        <motion.div
          variants={fadeUp(16, 0.5)}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-background/50 text-sm"
        >
          <p>© {currentYear} Celicake - Carla Teicher. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={14} className="text-rose fill-rose" /> para personas celíacas
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
