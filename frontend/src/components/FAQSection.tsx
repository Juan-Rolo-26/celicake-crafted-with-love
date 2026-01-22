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
        "Coordinamos entregas y retiros en [ZONA]. Consultanos por envío.",
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
        "Trabajamos en [ZONA], [CIUDAD]. Coordinamos retiro o envío.",
    },
  ];

  return (
    <section id="preguntas" ref={ref} className="py-24 bg-background border-b border-cream-dark/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.35em] text-foreground/70 mb-4">
            Preguntas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-foreground/80">
            Te respondemos todo para que pidas con confianza.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp(16, 0.6)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="rounded-3xl border border-cream-dark/60 bg-card/90 p-6 shadow-soft"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index + 1}`}
                className="border-cream-dark/40"
              >
                <AccordionTrigger className="text-left font-display text-lg text-secondary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-sm leading-relaxed">
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
