import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@/assets/logo_celicake.png";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/543515157731?text=Hola!%20Quiero%20hacer%20un%20pedido",
      "_blank"
    );
  };

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-cream-dark/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="#inicio" className="group flex items-center gap-3">
                <img
                  src={logoSrc}
                  alt="CeliCake"
                  className="h-12 w-12 object-contain drop-shadow-[0_8px_14px_rgba(35,20,12,0.18)]"
                />
                <div className="leading-tight">
                  <span className="block font-display text-2xl text-foreground transition-colors duration-300 group-hover:text-warm-brown">
                    CeliCake
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-foreground/60 transition-colors duration-300 group-hover:text-warm-brown/80">
                    sin gluten
                  </span>
                </div>
              </a>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-button"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* CTA */}
              <div className="hidden md:flex">
                <Button
                  onClick={handleWhatsApp}
                  className="rounded-full bg-primary/90 text-secondary px-7 py-3 text-[11px] uppercase tracking-[0.32em] border border-primary/40 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-background hover:border-secondary/70 hover:shadow-elevated"
                >
                  <MessageCircle size={16} />
                  Pedir
                </Button>
              </div>

              {/* Mobile button */}
              <button
                className="md:hidden rounded-full border border-secondary/30 bg-background/90 p-2 text-secondary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-background hover:border-secondary/70"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="md:hidden bg-cream border-t border-cream-dark/60"
              >
                <div className="px-4 py-6 flex flex-col gap-5">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="nav-button w-full justify-center"
                    >
                      {item.label}
                    </a>
                  ))}

                  <Button
                    onClick={handleWhatsApp}
                    className="mt-4 rounded-full bg-primary/90 text-secondary px-7 py-3 text-[11px] uppercase tracking-[0.32em] border border-primary/40 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-background hover:border-secondary/70 hover:shadow-elevated"
                  >
                    <MessageCircle size={16} />
                    Pedir por WhatsApp
                  </Button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
