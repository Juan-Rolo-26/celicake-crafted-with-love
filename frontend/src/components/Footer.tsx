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
      className="relative overflow-hidden border-t border-white/10 bg-secondary pt-24 pb-10 text-white"
    >
      {/* Ambient decoration for dark mode */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-rose-dark/20 blur-[150px] opacity-60" />
        <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-sage-dark/20 blur-[150px] opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent blur-3xl opacity-30" />
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
                className="h-20 w-20 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-transform duration-500 ease-out group-hover:rotate-2 group-hover:scale-[1.06] brightness-125"
              />
              <div>
                <h3 className="font-display text-4xl text-white transition-transform duration-500 ease-out group-hover:-translate-y-0.5 text-shadow-sm">
                  CeliCake
                </h3>
                <span className="block text-[10px] uppercase tracking-[0.4em] text-white/50 font-medium mt-1">
                  Pastelería sin gluten
                </span>
              </div>
            </div>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-white/70 md:mx-0">
              Elaboramos pastelería artesanal <strong className="text-white">100% sin gluten</strong>,
              pensada para celíacos y para quienes buscan sabores reales,
              seguros y hechos con amor.
            </p>

            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-6 py-2.5 text-[10px] uppercase tracking-[0.35em] text-white backdrop-blur-sm">
              Apto celíacos · SIN TACC
            </span>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <p className="mb-8 text-[11px] uppercase tracking-[0.4em] text-white/40 font-bold">
              Navegación
            </p>
            <nav className="flex flex-col items-center gap-4 text-sm font-light">
              {["Inicio", "Productos", "Nosotros", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/70 transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full font-serif text-lg"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <p className="mb-8 text-[11px] uppercase tracking-[0.4em] text-white/40 font-bold">
              Contacto
            </p>

            <div className="flex justify-center gap-5 md:justify-start mb-8">
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
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white hover:text-secondary hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              Pedidos coordinados en <br />
              <strong className="text-white text-base font-serif">Córdoba, Argentina</strong>
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeUp(16, 0.5)}
          className="my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Bottom */}
        <motion.div
          variants={fadeUp(16, 0.5)}
          className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 sm:flex-row uppercase tracking-wider"
        >
          <p>
            © {currentYear} CeliCake · Hecho artesanalmente
          </p>

          <p className="flex items-center gap-2">
            Hecho con{" "}
            <Heart
              size={12}
              className="text-rose-400 fill-rose-400 animate-pulse"
            />{" "}
            y mucho cuidado
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
