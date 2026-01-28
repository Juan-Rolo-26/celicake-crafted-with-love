import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@/assets/logo_celicake.png";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
          scrolled
            ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-stone-100"
            : "bg-transparent py-6 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="relative z-50 flex items-center gap-2 group">
              <img
                src={logoSrc}
                alt="CeliCake"
                className={cn(
                  "transition-all duration-500 object-contain drop-shadow-md",
                  scrolled ? "h-10 w-10" : "h-12 w-12"
                )}
              />
              <div className="flex flex-col">
                <span className={cn(
                  "font-logo text-2xl transition-colors duration-300",
                  scrolled ? "text-stone-900" : "text-white"
                )}>
                  CeliCake
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:tracking-[0.25em]",
                    scrolled ? "text-stone-600 hover:text-stone-900" : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button
                onClick={handleWhatsApp}
                variant="ghost"
                size="icon"
                className={cn(
                  "hidden md:flex rounded-full transition-colors duration-300 hover:bg-white/10",
                  scrolled ? "text-stone-800 hover:bg-stone-100" : "text-white hover:text-white"
                )}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
              </Button>

              {/* Mobile Toggle */}
              <button
                className={cn(
                  "md:hidden p-2 transition-colors",
                  scrolled ? "text-stone-800" : "text-white"
                )}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-stone-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-2xl font-serif text-stone-200 hover:text-white transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  onClick={handleWhatsApp}
                  className="mt-8 bg-white text-stone-900 hover:bg-stone-200 rounded-full px-8 py-6 text-xs uppercase tracking-widest"
                >
                  Hacer Pedido
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
