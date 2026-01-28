import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";
import GlutenFreeBadge from "./GlutenFreeBadge";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";
import MovingBackground from "@/components/ui/MovingBackground";

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
      className="py-24 bg-sage/10 border-b border-sage/20 relative overflow-hidden"
    >
      <MovingBackground color="text-sage-dark/10" />

      {/* Decorative Elements - Kept but made subtle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-sage-dark mb-6 drop-shadow-sm">
            Sin TACC y sin contaminación cruzada
          </h2>
          <p className="text-xl text-sage-dark/80 max-w-2xl mx-auto font-medium">
            Seguridad real. Cuidamos cada proceso para proteger tu salud.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {checklist.map((item) => (
            <motion.div
              key={item}
              variants={cardVariants}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex items-start gap-4 rounded-3xl border border-white/50 bg-white/80 backdrop-blur-sm p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage/20 text-sage-dark shadow-inner">
                <ShieldCheck className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <div>
                <p className="font-display text-lg text-secondary font-medium leading-tight">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default GlutenFreeSection;
