import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bakery.jpg";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const HeroSection = () => {
  const heroContainer = staggerContainer(0.16, 0.2);
  const heroItem = fadeUp(24, 0.7);
  const badgeItem = scaleIn(0.96, 0.5);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/543515157731?text=Hola!%20Quiero%20hacer%20un%20pedido",
      "_blank"
    );
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-20 left-10 h-60 w-60 rounded-full bg-rose-light/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-[38%] bg-sage-light/60 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-cream/80 via-transparent to-rose-light/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center"
        >
          <div>
            <motion.span
              variants={heroItem}
              className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-warm-brown shadow-soft"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Celicake sin TACC
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight"
            >
              Repostería sin gluten con
              <span className="text-primary"> alma artesanal</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-xl"
            >
              Recetas cuidadas por Carla Teicher para que disfrutes lo dulce y
              lo salado sin preocuparte. Todo hecho a mano, fresco y con
              ingredientes seleccionados.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.div variants={badgeItem}>
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="rounded-2xl bg-foreground text-background px-8 py-4 text-base shadow-elevated hover:shadow-soft hover:translate-y-[-2px]"
                >
                  <MessageCircle size={20} />
                  Pedidos por WhatsApp
                </Button>
              </motion.div>
              <motion.div variants={badgeItem}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-foreground/15 bg-card/80 text-foreground hover:border-primary/40"
                  asChild
                >
                  <a href="#lista-productos">Ver lista completa</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="mt-10 grid gap-3 sm:grid-cols-3 text-sm text-muted-foreground"
            >
              <motion.div
                variants={badgeItem}
                className="rounded-2xl bg-white/80 px-4 py-3 shadow-soft"
              >
                100% sin gluten
              </motion.div>
              <motion.div
                variants={badgeItem}
                className="rounded-2xl bg-white/80 px-4 py-3 shadow-soft"
              >
                Opciones sin lácteos
              </motion.div>
              <motion.div
                variants={badgeItem}
                className="rounded-2xl bg-white/80 px-4 py-3 shadow-soft"
              >
                Sin azúcar agregada
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={heroItem} className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-rose-light/80 shadow-soft" />
            <div className="absolute -bottom-8 right-8 h-24 w-24 rounded-full bg-sage-light/80 shadow-soft" />

            <motion.div
              variants={badgeItem}
              className="relative rounded-[32px] bg-card/85 p-3 shadow-elevated ring-1 ring-cream-dark/60 backdrop-blur-sm"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <img
                src={heroImage}
                alt="Productos artesanales de Celicake"
                className="h-[420px] w-full rounded-[26px] object-cover"
              />
              <div className="absolute top-5 left-5 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
                Sin TACC
              </div>
            </motion.div>

            <motion.div
              variants={badgeItem}
              className="absolute -bottom-10 left-6 rounded-3xl bg-white/90 px-5 py-4 shadow-elevated"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Especialidad
              </p>
              <p className="mt-2 font-display text-lg text-foreground">
                Budines, alfajores y panes frescos
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#sin-gluten"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Descubrí más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
