import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const ProductListSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const headerVariants = fadeUp(28, 0.8);
  const gridVariants = staggerContainer(0.12, 0.2);
  const cardVariants = scaleIn(0.97, 0.45);

  const toneStyles = {
    rose: {
      badge: "bg-rose-light text-rose-dark",
      icon: "text-rose-dark",
      border: "border-rose-light/60",
      glow: "bg-rose-light/60",
    },
    sage: {
      badge: "bg-sage-light text-sage-dark",
      icon: "text-sage-dark",
      border: "border-sage-light/70",
      glow: "bg-sage-light/60",
    },
    cream: {
      badge: "bg-cream-dark/60 text-warm-brown",
      icon: "text-warm-brown",
      border: "border-cream-dark/60",
      glow: "bg-cream-dark/50",
    },
  };

  const productCategories = [
    {
      title: "Sin azúcar agregada",
      tone: "rose",
      items: [
        "Budines sin azúcar agregada",
        "Alfajores sin azúcar agregada con nueces",
        "Galletitas con frutos secos (15 unidades aprox.)",
      ],
    },
    {
      title: "Sin azúcar y sin harinas",
      tone: "cream",
      items: [
        "Pepas de membrillo (14/15 unidades)",
        "Palitos dual choco blanco / choco negro",
        "Conitos rellenos con dulce de leche y baño de chocolate",
        "Bonobon",
        "Conitos con coco y dulce de leche",
      ],
    },
    {
      title: "Sin lácteos",
      tone: "sage",
      items: [
        "Budín de manzana con nueces",
        "Budín de limón con glaseado",
        "Budín de zanahorias",
        "Pancitos trenzados saladitos",
        "Pan trenzado dulce",
        "Empanadas de carne (bandeja por 6 unidades)",
      ],
    },
    {
      title: "Dulce",
      subtitle: "Tartas y galletitas",
      tone: "rose",
      items: [
        "Tartas grandes (26 cm diámetro)",
        "Tartitas individuales (Marquise, Lemon pie, frutillas, peras, Bonobon)",
        "Facturas/medialunas rellenas con crema pastelera y/o dulce de leche (bandeja mínima de 6)",
        "Galletitas con chispas de chocolate (12 unidades)",
        "Galletas con frutos secos (12 unidades)",
        "Galletitas tapitas de alfajor (12 unidades)",
        "Alfajores ojitos rellenos con crema pastelera y/o dulce de leche",
      ],
    },
    {
      title: "Dulce",
      subtitle: "Budines y alfajores",
      tone: "rose",
      items: [
        "Budín de vainilla con glaseado",
        "Budín de manzana con nueces",
        "Budín cítrico con nueces",
        "Carrot cake",
        "Budín de coco",
        "Budín de coco con dulce de leche",
        "Budín de limón",
        "Budín de naranja con nueces",
        "Budín marmolado con nueces",
        "Budín de vainilla relleno con pastelera y dulce de leche",
        "Tiramisú (2 porciones abundantes)",
        "Alfajores de maicena con nueces y dulce de leche",
        "Alfajores bañados en chocolate con nueces",
        "Alfajores con relleno de Bonobon con o sin baño de chocolate blanco/negro",
        "Bonobon",
        "Tartitas individuales (cabsha, coco, pastafrola, batata)",
      ],
    },
    {
      title: "Salado",
      subtitle: "Clásicos",
      tone: "sage",
      items: [
        "Pan de lomito",
        "Criollitos (mínimo 8 unidades)",
        "Chipa (20 unidades)",
        "Palitos salados de queso",
        "Pan tipo lactal",
        "Tartas individuales de jamón y queso",
        "Tarta de verduras (acelga y cebolla)",
        "Tarta de choclo",
        "Milanesas de pollo (500 grs)",
        "Milanesa de carne (500 grs)",
        "Empanadas de carne (mínimo 6 unidades)",
        "Ñoquis de papa (bandeja de 500 grs)",
        "Canastitas de verduras (mínimo 6 unidades)",
      ],
    },
    {
      title: "Salado",
      subtitle: "Pizzas y panificados",
      tone: "sage",
      items: [
        "Pizzas: napolitana, jamón y queso, mozzarella, 4 quesos",
        "Calzones: 4 quesos, jamón y queso, mozzarella, tomate cherry y aceitunas negras",
        "Sandwichitos de miga (jamón y queso, 8 unidades)",
        "Pancitos individuales",
        "Pancitos individuales saborizados",
        "Pancitos de hamburguesa",
      ],
    },
  ];

  return (
    <section
      id="lista-productos"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-cream via-rose-light/40 to-cream"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-16 right-10 h-36 w-36 rounded-full bg-rose-light/70 blur-3xl" />
        <div className="absolute bottom-10 left-6 h-28 w-28 rounded-3xl bg-sage-light/60 blur-2xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Lista de productos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Opciones dulces y saladas para cada momento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo preparado con cariño, libre de gluten y con alternativas sin
            azúcar agregada, sin harinas y sin lácteos.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {productCategories.map((category) => {
            const tone = toneStyles[category.tone as keyof typeof toneStyles];
            return (
              <motion.div
                key={`${category.title}-${category.subtitle ?? "base"}`}
                variants={cardVariants}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`relative overflow-hidden rounded-3xl border ${tone.border} bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated`}
              >
                <div className={`absolute -top-12 -right-12 h-28 w-28 rounded-full blur-2xl ${tone.glow}`} />
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${tone.badge}`}
                  >
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p className="text-sm text-muted-foreground">
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {category.items.map((item) => (
                    <li
                      key={`${category.title}-${item}`}
                      className="flex items-start gap-2"
                    >
                      <Check className={`mt-0.5 h-4 w-4 ${tone.icon}`} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductListSection;
