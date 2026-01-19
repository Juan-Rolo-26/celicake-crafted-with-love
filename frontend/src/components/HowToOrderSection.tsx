import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ShoppingBag, Truck } from "lucide-react";
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
      title: "Escribinos",
      description: "Contactanos por WhatsApp y contanos qué necesitás",
    },
    {
      icon: ShoppingBag,
      number: "02",
      title: "Elegí tu producto",
      description: "Seleccioná entre nuestra variedad de productos artesanales",
    },
    {
      icon: Truck,
      number: "03",
      title: "Coordinamos entrega",
      description: "Acordamos fecha, horario y lugar de entrega o retiro",
    },
  ];

  return (
    <section id="pedidos" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">
            Cómo Pedir
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Tu pedido en <span className="text-primary">3 simples pasos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hacer tu pedido es muy fácil. Seguí estos pasos y pronto estarás
            disfrutando de productos artesanales sin gluten.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stepsGridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
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
                  className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border"
                />
              )}

              <div className="step-card relative">
                {/* Number Badge */}
                <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-sage-light flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-sage-dark" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
