import { motion } from "framer-motion";
import { MessageCircle, Instagram, Heart } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import logoSrc from "@/assets/logo_celicake.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="relative overflow-hidden border-t border-cream-dark/70 bg-background/95 pt-24 pb-10"
    >
      {/* Ambient decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-rose-light/40 blur-[120px] float-soft" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-sage-light/40 blur-[120px] float-slower" />
      </div>

      <motion.div
        variants={staggerContainer(0.18, 0.12)}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Main */}
        <motion.div
          variants={fadeUp(24, 0.7)}
          className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr]"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="group mb-5 flex items-center justify-center gap-4 md:justify-start">
              <img
                src={logoSrc}
                alt="CeliCake"
                className="h-16 w-16 object-contain drop-shadow-[0_10px_18px_rgba(35,20,12,0.25)] transition-transform duration-500 ease-out group-hover:rotate-2 group-hover:scale-[1.06]"
              />
              <div>
                <h3 className="font-display text-3xl text-secondary transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                  CeliCake
                </h3>
                <span className="block text-[11px] uppercase tracking-[0.35em] text-foreground/60">
                  Pastelería sin gluten
                </span>
              </div>
            </div>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-foreground/70 md:mx-0">
              Elaboramos pastelería artesanal <strong>100% sin gluten</strong>,
              pensada para celíacos y para quienes buscan sabores reales,
              seguros y hechos con amor.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage/25 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-secondary">
              Apto celíacos · SIN TACC
            </span>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-foreground/60">
              Navegación
            </p>
            <nav className="flex flex-col items-center gap-3 text-sm">
              {["Inicio", "Productos", "Nosotros", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="footer-button"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-foreground/60">
              Contacto
            </p>

            <div className="flex justify-center gap-4 md:justify-start">
              {[
                {
                  icon: MessageCircle,
                  href: "https://wa.me/543515157731",
                  label: "WhatsApp",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/celicake_",
                  label: "Instagram",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-icon-button group"
                >
                  <Icon
                    size={22}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>

            <p className="mt-6 text-sm text-foreground/70">
              Pedidos coordinados en <br />
              <strong>Córdoba, Argentina</strong>
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeUp(16, 0.5)}
          className="my-12 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
        />

        {/* Bottom */}
        <motion.div
          variants={fadeUp(16, 0.5)}
          className="flex flex-col items-center justify-between gap-4 text-sm text-foreground/60 sm:flex-row"
        >
          <p>
            © {currentYear} CeliCake · Hecho artesanalmente sin gluten
          </p>

          <p className="flex items-center gap-1">
            Hecho con{" "}
            <Heart
              size={14}
              className="text-rose fill-rose drop-shadow-sm"
            />{" "}
            y mucho cuidado
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
