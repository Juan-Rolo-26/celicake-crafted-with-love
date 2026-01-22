import { motion } from "framer-motion";
import { MessageCircle, Instagram, Heart } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative overflow-hidden bg-background/95 border-t border-cream-dark/70 pt-20 pb-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-rose-light/40 blur-3xl" />
        <div className="absolute -bottom-20 left-12 h-60 w-60 rounded-full bg-sage-light/40 blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main footer */}
        <motion.div
          variants={fadeUp(20, 0.6)}
          className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <img
                src="/images/logo_celicake.png"
                alt="CeliCake"
                className="h-14 w-14 object-contain"
              />
              <div>
                <h3 className="font-display text-2xl text-secondary">
                  CeliCake
                </h3>
                <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/60">
                  SIN TACC
                </span>
              </div>
            </div>

            <p className="text-foreground/70 text-sm max-w-sm">
              Pastelería artesanal sin gluten, pensada para celíacos y para quienes buscan comer rico y seguro.
            </p>

            <span className="mt-5 inline-flex rounded-full bg-sage/30 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-secondary">
              Apto celíacos
            </span>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-foreground/60">
              Navegación
            </p>
            <nav className="flex flex-col gap-3 text-sm">
              {["Inicio", "Productos", "Nosotros", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-foreground/60">
              Contacto
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {[ 
                { icon: MessageCircle, href: "https://wa.me/543515157731" },
                { icon: Instagram, href: "https://instagram.com/celicake_" }
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full border border-secondary/30 bg-background/90 flex items-center justify-center text-secondary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/70 hover:bg-secondary hover:text-background"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>

            <p className="mt-5 text-sm text-foreground/70">
              Coordinamos pedidos en <strong>Córdoba, Argentina</strong>
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeUp(16, 0.5)}
          className="my-10 h-px bg-foreground/10"
        />

        {/* Bottom */}
        <motion.div
          variants={fadeUp(16, 0.5)}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60"
        >
          <p>© {currentYear} CeliCake · Pastelería sin gluten</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={14} className="text-rose fill-rose" /> y mucho cuidado.
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
