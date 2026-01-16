import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Leaf, CheckCircle } from "lucide-react";
import GlutenFreeBadge from "./GlutenFreeBadge";

const GlutenFreeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "100% Libre de Gluten",
      description: "Productos elaborados sin trigo, avena, cebada ni centeno. Seguros para celíacos.",
    },
    {
      icon: Heart,
      title: "Elaboración Cuidada",
      description: "Cada producto es preparado con dedicación y atención en cada detalle.",
    },
    {
      icon: Leaf,
      title: "Ingredientes Seleccionados",
      description: "Usamos ingredientes de calidad, naturales y libres de contaminación cruzada.",
    },
  ];

  return (
    <section
      id="sin-gluten"
      ref={ref}
      className="py-24 bg-sage-light relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <GlutenFreeBadge size="lg" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Productos <span className="text-primary">100% Sin TACC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entendemos la importancia de una alimentación segura. Por eso,
            todos nuestros productos son completamente libres de gluten,
            pensados especialmente para personas celíacas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-soft">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              Elaboración sin contaminación cruzada
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlutenFreeSection;
