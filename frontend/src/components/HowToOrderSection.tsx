import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, MessageCircle, ShoppingBag, Truck } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";
import MovingBackground from "@/components/ui/MovingBackground";

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
    <section id="como-pedir" ref={ref} className="py-24 bg-cream-dark/30 border-b border-cream-dark/20 relative overflow-hidden">
      <MovingBackground color="text-secondary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-secondary mb-6 drop-shadow-sm">
            Tu pedido en <span className="text-primary italic">4 pasos simples</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-medium">
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
                  className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-secondary/10"
                />
              )}

              <div className="step-card relative bg-white border border-white/60 shadow-md hover:shadow-xl transition-all duration-500 rounded-3xl p-8 flex flex-col items-center text-center">
                {/* Number Badge */}
                <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-sm ring-4 ring-bg-cream/50">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-cream/50 border border-cream-dark flex items-center justify-center mb-6 shadow-nop">
                  <step.icon className="w-9 h-9 text-secondary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-medium">
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
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-xs uppercase tracking-[0.3em] text-secondary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Hacer mi pedido
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
