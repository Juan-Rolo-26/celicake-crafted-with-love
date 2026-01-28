import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";
import MovingBackground from "@/components/ui/MovingBackground";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const headerVariants = fadeUp(28, 0.8);
  const gridVariants = staggerContainer(0.12, 0.2);
  const cardVariants = scaleIn(0.97, 0.45);

  const testimonials = [
    {
      name: "Juli G.",
      text: "Por fin una torta SIN GLUTEN que es igual o mejor que la tradicional.",
      rating: "★★★★★",
    },
    {
      name: "Marcos R.",
      text: "Textura increíble y cero miedo por la contaminación.",
      rating: "★★★★★",
    },
    {
      name: "Sofi L.",
      text: "El box degustación voló en casa. Todo riquísimo.",
      rating: "★★★★★",
    },
    {
      name: "Vale P.",
      text: "Se nota lo artesanal y el cuidado en cada detalle.",
      rating: "★★★★★",
    },
    {
      name: "Agus M.",
      text: "Me sentí segura y feliz, algo que cuesta encontrar.",
      rating: "★★★★★",
    },
    {
      name: "Lara T.",
      text: "Pedidos fáciles por WhatsApp y sabores reales.",
      rating: "★★★★★",
    },
  ];

  return (
    <section id="opiniones" ref={ref} className="py-24 bg-cream border-b border-cream-dark/20 relative overflow-hidden">
      <MovingBackground color="text-primary/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.35em] text-foreground/70 mb-4">
            Opiniones
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary mb-4">
            Lo que dicen quienes ya probaron
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Rico, seguro y hecho con amor. Así lo viven nuestros clientes SIN TACC.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="rounded-3xl border border-cream-dark/60 bg-card/90 p-6 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-2 text-foreground/70 text-sm uppercase tracking-[0.2em]">
                <Star className="h-4 w-4 text-rose" />
                {item.rating}
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed">{item.text}</p>
              <p className="mt-4 font-display text-lg text-secondary">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp(20, 0.6)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-12 rounded-3xl border border-cream-dark/60 bg-cream/80 p-8 shadow-elevated"
        >
          <p className="text-foreground/70 uppercase tracking-[0.3em] text-xs">
            Testimonio destacado
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            “Soy celíaca y me cuesta confiar. En CeliCake sentí tranquilidad desde
            el primer mensaje. Probé la torta de chocolate y fue un viaje: húmeda,
            intensa, perfecta. Volví a pedir para mi cumple y todos quedaron
            sorprendidos, nadie notó que era SIN TACC.”
          </p>
          <p className="mt-4 text-foreground font-display text-lg">— Florencia A.</p>
        </motion.div>

        <motion.div
          variants={fadeUp(20, 0.6)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mt-10"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-secondary shadow-elevated hover:shadow-soft transition-all duration-300"
          >
            Quiero probar
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
