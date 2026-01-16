import { MessageCircle, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-background mb-2">
              Celicake
            </h3>
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
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-background/50 text-sm">
          <p>© {currentYear} Celicake - Carla Teicher. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={14} className="text-rose fill-rose" /> para personas celíacas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
