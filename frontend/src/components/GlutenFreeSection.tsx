import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";
import GlutenFreeBadge from "./GlutenFreeBadge";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const GlutenFreeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const headerVariants = fadeUp(32, 0.8);
  const cardVariants = scaleIn(0.98, 0.45);
  const gridVariants = staggerContainer(0.14, 0.2);

  const checklist = [
    "Utensilios exclusivos para productos SIN GLUTEN",
    "Superficies desinfectadas y separadas",
    "Almacenamiento seguro de materias primas",
    "Proveedores certificados SIN TACC",
    "Producción por turnos para evitar cruces",
    "Etiquetado claro y trazable",
  ];

  return (
    <section
      id="sin-gluten"
      ref={ref}
      className="py-24 bg-background border-b border-cream-dark/20 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <motion.div
        aria-hidden
        className="absolute top-0 right-0 w-64 h-64 bg-cream/35 rounded-full -translate-y-1/2 translate-x-1/2"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <GlutenFreeBadge size="lg" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary mb-6">
            Sin TACC y sin contaminación cruzada, de verdad
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Sabemos lo importante que es sentir seguridad real. Por eso cuidamos
            procesos, espacios y materias primas para proteger cada pedido.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 md:grid-cols-2"
        >
          {checklist.map((item) => (
            <motion.div
              key={item}
              variants={cardVariants}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              whileHover={{ y: -6 }}
              className="flex items-start gap-4 rounded-3xl border border-cream-dark/40 bg-cream p-6 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-light text-sage-dark">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg text-secondary">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          variants={fadeUp(20, 0.6)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-16 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-3 bg-cream border border-cream-dark/40 px-6 py-3 rounded-full shadow-soft">
            <CheckCircle className="w-5 h-5 text-sage" />
            <span className="text-foreground font-medium">
              Queremos que te sientas seguro/a en cada pedido.
            </span>
          </div>
          <p className="text-sm text-foreground/70 max-w-2xl mx-auto">
            Siempre consultanos por alergias adicionales (lácteos, frutos secos, etc.).
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-secondary shadow-elevated hover:shadow-soft transition-all duration-300"
          >
            Soy celíaco/a, quiero pedir seguro
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GlutenFreeSection;
