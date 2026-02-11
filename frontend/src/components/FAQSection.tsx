import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp } from "@/lib/motion";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const headerVariants = fadeUp(28, 0.8);

  const faqs = [
    {
      question: "¿Es apto celíacos? ¿Qué significa Sin TACC?",
      answer:
        "Sí, trabajamos 100% SIN TACC. Significa que no usamos trigo, avena, cebada ni centeno.",
    },
    {
      question: "¿Hay contaminación cruzada?",
      answer:
        "No. Usamos utensilios exclusivos, espacios separados y procesos cuidados para evitar cruces.",
    },
    {
      question: "¿Hacen sin lactosa / sin azúcar?",
      answer:
        "Sí, tenemos opciones sin lactosa y sin azúcar. Consultanos disponibilidad.",
    },
    {
      question: "¿Cómo se pagan los pedidos?",
      answer:
        "Aceptamos medios habituales. Te contamos opciones al confirmar el pedido.",
    },
    {
      question: "¿Con cuánta anticipación pedir?",
      answer:
        "Recomendamos avisar con tiempo porque trabajamos por encargo y con cupos.",
    },
    {
      question: "¿Entregas/envíos?",
      answer:
        "Coordinamos entregas y retiros en Córdoba Capital y alrededores. Consultanos por envío.",
    },
    {
      question: "¿Hacen tortas para cumpleaños/eventos?",
      answer:
        "Sí, hacemos tortas y boxes para eventos y fechas especiales.",
    },
    {
      question: "¿Se puede personalizar?",
      answer:
        "Sí, podemos adaptar sabores, tamaños y decoración.",
    },
    {
      question: "¿Qué ingredientes usan?",
      answer:
        "Ingredientes seleccionados, frescos y con foco en calidad y seguridad SIN TACC.",
    },
    {
      question: "¿Dónde están / zona?",
      answer:
        "Trabajamos en Córdoba, Argentina. Coordinamos retiro o envío.",
    },
  ];

  return (
    <section id="preguntas" ref={ref} className="py-24 bg-sage-light/30 border-b border-sage/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            Dudas Comunes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-secondary mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-warm-brown/80 max-w-2xl mx-auto">
            Te respondemos todo para que pidas con confianza y disfrutes sin preocupaciones.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp(16, 0.6)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="rounded-3xl border border-sage/20 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-elevated"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index + 1}`}
                className="border-b border-sage/10 last:border-0 px-2"
              >
                <AccordionTrigger className="text-left font-display text-xl text-secondary hover:text-primary transition-colors py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-warm-brown/90 text-base leading-relaxed pb-5 px-1">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
