import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const headerVariants = fadeUp(28, 0.8);
  const gridVariants = staggerContainer(0.12, 0.2);
  const cardVariants = scaleIn(0.97, 0.45);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/543515157731?text=Hola!%20Quiero%20hacer%20un%20pedido",
      "_blank"
    );
  };

  return (
    <section id="contacto" ref={ref} className="py-24 bg-cream border-b border-cream-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.35em] text-foreground/70 mb-4">
            Pedidos / Contacto
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary mb-4">
            Tu pedido SIN TACC, acompañado de verdad
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Escribinos y te ayudamos a elegir lo mejor para vos. Artesanal, seguro y hecho con amor.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="rounded-[36px] border border-cream-dark/60 bg-card/95 p-8 shadow-elevated"
          >
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <h3 className="font-display text-2xl text-secondary">WhatsApp</h3>
                <p className="mt-3 text-foreground/80">
                  ¿No sabés por dónde empezar? Te guiamos paso a paso.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-sage/25 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-secondary">
                Apto celíacos · SIN TACC
              </span>
            </div>

            <Button
              onClick={handleWhatsApp}
              className="mt-6 rounded-full bg-primary text-secondary text-[11px] uppercase tracking-[0.3em] px-6 py-3"
            >
              <MessageCircle size={18} />
              Pedir por WhatsApp
            </Button>
            <p className="mt-3 text-sm text-foreground/70">
              Te respondemos rápido y con atención personalizada.
            </p>

            <div className="mt-8 rounded-3xl border border-cream-dark/60 bg-background/80 p-6">
              <h4 className="font-display text-lg text-secondary">Instagram</h4>
              <p className="mt-2 text-foreground/80">
                Mirá ideas reales y pedidos del día en [INSTAGRAM].
              </p>
              <Button
                variant="outline"
                size="lg"
                className="mt-4 rounded-full border-secondary/30 bg-card/90 text-secondary hover:border-secondary/60"
                asChild
              >
                <a href="https://instagram.com/celicake_" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} />
                  Ver Instagram
                </a>
              </Button>
              <p className="mt-4 text-sm text-foreground/70">
                Consultanos y coordinamos en [ZONA], [CIUDAD].
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="rounded-[32px] border border-cream-dark/60 bg-background/80 p-8 shadow-soft"
          >
            <h3 className="font-display text-2xl text-secondary mb-2">
              Si preferís, dejá tu mensaje
            </h3>
            <p className="text-foreground/70 text-sm mb-6">
              No es automático, leemos cada mensaje 💛
            </p>
            <div className="space-y-4">
              <Input
                placeholder="¿Cómo te llamás?"
                className="rounded-2xl border-cream-dark/60 bg-cream/60 focus-visible:ring-primary"
              />
              <Input
                placeholder="¿Qué te gustaría pedir?"
                className="rounded-2xl border-cream-dark/60 bg-cream/60 focus-visible:ring-primary"
              />
              <Textarea
                placeholder="Contanos para qué ocasión"
                className="rounded-2xl min-h-[120px] border-cream-dark/60 bg-cream/60 focus-visible:ring-primary"
              />
            </div>
            <Button
              className="mt-6 w-full rounded-full bg-primary text-secondary text-[11px] uppercase tracking-[0.3em]"
            >
              Quiero que me asesoren
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
