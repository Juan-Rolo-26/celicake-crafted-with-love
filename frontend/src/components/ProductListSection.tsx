import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import igCapture010 from "@/assets/instagram/Captura de pantalla 2026-01-22 024010.png";
import igCapture025 from "@/assets/instagram/Captura de pantalla 2026-01-22 024025.png";
import igCapture039 from "@/assets/instagram/Captura de pantalla 2026-01-22 024039.png";
import igCapture112 from "@/assets/instagram/Captura de pantalla 2026-01-22 024112.png";
import igDelicioso3 from "@/assets/instagram/ig-deliciosos-3-DTNfaDUjr17.jpg";
import { fadeUp, staggerContainer } from "@/lib/motion";

const ProductListSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const categories = [
    {
      title: "Sin azúcar agregada",
      tone: "rose",
      image: igCapture010,
      items: [
        "Budines sin azúcar agregada",
        "Alfajores sin azúcar agregada con nueces",
        "Galletitas con frutos secos (15 unidades aprox.)",
      ],
    },
    {
      title: "Sin azúcar y sin harinas",
      tone: "cream",
      image: igCapture025,
      items: [
        "Pepas de membrillo (14 / 15 unidades)",
        "Palitos dual choco blanco / negro",
        "Conitos rellenos con dulce de leche y baño de chocolate",
        "Bonobon",
        "Conitos con coco y dulce de leche",
      ],
    },
    {
      title: "Sin lácteos",
      tone: "sage",
      image: igCapture112,
      items: [
        "Budín de manzana con nueces",
        "Budín de limón con glaseado",
        "Budín de zanahorias",
        "Pancitos trenzados saladitos",
        "Pan trenzado dulce",
        "Empanadas de carne (6 unidades)",
      ],
    },
    {
      title: "Dulce",
      subtitle: "Tartas, budines y alfajores",
      tone: "rose",
      image: igCapture039,
      items: [
        "Tartas grandes (26 cm)",
        "Tartitas individuales (lemon pie, marquise, frutillas, peras)",
        "Budines clásicos y rellenos",
        "Carrot cake",
        "Alfajores de maicena y bañados en chocolate",
        "Tiramisú (2 porciones)",
        "Bonobon",
      ],
    },
    {
      title: "Salado",
      subtitle: "Clásicos y panificados",
      tone: "sage",
      image: igDelicioso3,
      items: [
        "Pan de lomito",
        "Criollitos (mínimo 8)",
        "Chipa (20 unidades)",
        "Pizzas y calzones",
        "Sandwichitos de miga",
        "Tartas y canastitas",
        "Milanesas (pollo o carne)",
        "Ñoquis de papa (500 g)",
      ],
    },
  ];

  const tonePanel = {
    rose: "bg-blush/45",
    sage: "bg-sage/15",
    cream: "bg-cream/90",
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/543515157731?text=Hola!%20Quiero%20consultar%20sobre%20la%20carta%20de%20CeliCake",
      "_blank"
    );
  };

  return (
    <section
      id="lista-productos"
      ref={ref}
      className="relative py-24 bg-muted border-b border-cream-dark/30"
    >
      {/* fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-rose-light/50 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-52 w-52 rounded-full bg-sage-light/50 blur-3xl" />
      </div>

      <div className="relative w-full">
        {/* HEADER */}
        <motion.div
          variants={fadeUp(24, 0.7)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center mb-14"
        >
          <h2 className="mt-5 font-display text-3xl sm:text-4xl text-secondary">
            Nuestra carta, pensada para cuidarte
          </h2>

          <p className="mt-4 text-sm text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Cada producto se elabora a pedido, con ingredientes seguros y procesos
            cuidados, para que disfrutes sin gluten y con total tranquilidad.
          </p>

          <div className="mt-6 flex justify-center gap-3 flex-wrap text-[10px] uppercase tracking-[0.35em]">
            {["Sin TACC", "Apto celíacos", "Hecho a pedido"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-cream-dark/60 bg-background/80 px-4 py-2"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CARTA POR CATEGORIA */}
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-12"
        >
          {categories.map((cat, index) => {
            const isReversed = index % 2 !== 0;
            const panelStyle = tonePanel[cat.tone as keyof typeof tonePanel];
            const itemsText = cat.items.join(", ");
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp(20, 0.5)}
                className="w-full overflow-hidden border-y border-cream-dark/60 bg-background/80"
              >
                <div className={`grid md:grid-cols-2 ${isReversed ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className="relative">
                    <img
                      src={cat.image}
                      alt={`Categoria ${cat.title}`}
                      className="h-full w-full object-cover min-h-[260px] md:min-h-[560px]"
                    />
                  </div>
                  <div className={`flex flex-col justify-center px-10 py-12 md:px-16 md:py-16 text-center md:text-left ${panelStyle}`}>
                    <h3 className="font-display text-4xl sm:text-6xl text-secondary lowercase">
                      {cat.title}
                    </h3>
                    {cat.subtitle && (
                      <p className="mt-4 text-[12px] uppercase tracking-[0.35em] text-secondary/60">
                        {cat.subtitle}
                      </p>
                    )}
                    <div className="mt-6 h-px w-24 bg-secondary/35 mx-auto md:mx-0" />
                    <p className="mt-6 text-base sm:text-lg text-secondary/75 leading-relaxed max-w-xl">
                      {itemsText}
                    </p>
                    <div className="mt-6 h-px w-24 bg-secondary/35 mx-auto md:mx-0" />
                    <Button
                      onClick={handleWhatsApp}
                      variant="outline"
                      size="sm"
                      className="mt-6 self-center md:self-start rounded-none border-secondary/60 bg-transparent text-[12px] uppercase tracking-[0.35em] text-secondary hover:bg-secondary/10"
                    >
                      Hacé tu pedido
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ProductListSection;
