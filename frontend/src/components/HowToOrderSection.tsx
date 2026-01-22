import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, MessageCircle, ShoppingBag, Truck } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const HowToOrderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const headerVariants = fadeUp(32, 0.8);
  const stepVariants = scaleIn(0.96, 0.5);
  const stepsGridVariants = staggerContainer(0.16, 0.2);

  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "WhatsApp",
      description: "Escribinos y contanos qué querés",
    },
    {
      icon: ShoppingBag,
      number: "02",
      title: "Elección",
      description: "Elegís producto, tamaño y detalles",
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Confirmación",
      description: "Confirmamos pedido y disponibilidad",
    },
    {
      icon: Truck,
      number: "04",
      title: "Entrega",
      description: "Coordinamos entrega o retiro",
    },
  ];

  return (
    <section id="como-pedir" ref={ref} className="py-24 bg-background border-b border-cream-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.35em] text-foreground/70 mb-4">
            Cómo pedir
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary mb-6">
            Tu pedido en <span className="text-primary">4 pasos simples</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Respondemos rápido, dentro del día. Coordinamos juntos cada detalle.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stepsGridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              whileHover={{ y: -6 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  variants={fadeUp(12, 0.4)}
                  className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border"
                />
              )}

              <div className="step-card relative">
                {/* Number Badge */}
                <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-cream border border-cream-dark/40 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-sage-dark" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-secondary mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/80 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp(20, 0.6)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-secondary shadow-elevated hover:shadow-soft transition-all duration-300"
          >
            Hacer mi pedido
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
