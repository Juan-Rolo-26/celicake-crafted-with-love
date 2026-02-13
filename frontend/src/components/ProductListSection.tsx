import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import igCapture010 from "@/assets/instagram/Captura de pantalla 2026-01-22 024010.png";
import igCapture025 from "@/assets/instagram/Captura de pantalla 2026-01-22 024025.png";
import igCapture039 from "@/assets/instagram/Captura de pantalla 2026-01-22 024039.png";
import igCapture112 from "@/assets/instagram/Captura de pantalla 2026-01-22 024112.png";
import igDelicioso3 from "@/assets/instagram/ig-deliciosos-3-DTNfaDUjr17.jpg";
import { fadeUp, staggerContainer } from "@/lib/motion";
import MovingBackground from "@/components/ui/MovingBackground";

const ProductListSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const categories = [
    {
      title: "Sin Azúcar Agregada",
      tone: "rose",
      image: igCapture010,
      items: [
        "Budines sin azúcar agregada",
        "Alfajores sin azúcar agregada con nueces",
        "Galletitas con frutos secos (15 unidades aprox.)",
      ],
    },
    {
      title: "Sin Azúcar Y Sin Harinas",
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
      title: "Sin Lácteos",
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
      subtitle: "Tartas, Budines Y Alfajores",
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
      subtitle: "Clásicos Y Panificados",
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
      className="relative bg-background pb-2 overflow-hidden"
    >
      <MovingBackground color="text-secondary/5" />
      {/* fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-rose-light/50 blur-3xl float-slow" />
        <div className="absolute bottom-10 left-10 h-52 w-52 rounded-full bg-sage-light/50 blur-3xl float-slower" />
      </div>

      <div className="relative w-full">
        {/* HEADER */}
        <motion.div
          variants={fadeUp(24, 0.7)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto mb-2 flex min-h-[18vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:min-h-[22vh] sm:px-6 lg:px-8"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-secondary">
            Nuestra Carta, Pensada Para Cuidarte
          </h2>

          <p className="text-sm text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Cada producto se elabora a pedido, con ingredientes seguros y procesos
            cuidados, para que disfrutes sin gluten y con total tranquilidad.
          </p>

          <div className="flex justify-center gap-3 flex-wrap text-[10px] uppercase tracking-[0.35em]">
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
          className="space-y-0"
        >
          {categories.map((cat, index) => {
            const isReversed = index % 2 !== 0;
            const panelStyle = tonePanel[cat.tone as keyof typeof tonePanel];
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp(20, 0.5)}
                className="group w-full overflow-hidden bg-background/80 menu-card"
              >
                <div className={`grid md:grid-cols-2 ${isReversed ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className="relative">
                    <img
                      src={cat.image}
                      alt={`Categoria ${cat.title}`}
                      className="h-full w-full object-cover min-h-[260px] md:min-h-[560px] transition-[filter,opacity,transform] duration-500 ease-out group-hover:brightness-105 group-hover:opacity-95"
                    />
                  </div>
                  <div className={`menu-panel flex flex-col items-center justify-center px-6 py-10 text-center sm:px-10 sm:py-12 md:px-12 md:py-14 ${panelStyle}`}>
                    <h3 className="font-display text-3xl sm:text-5xl text-secondary capitalize">
                      {cat.title}
                    </h3>
                    {cat.subtitle && (
                      <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-secondary/60 sm:text-xs">
                        {cat.subtitle}
                      </p>
                    )}
                    <div className="mt-6 h-px w-24 bg-secondary/35" />
                    <ul className="mt-6 w-full max-w-xl space-y-3">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="menu-item rounded-xl border border-secondary/15 bg-white/55 px-5 py-3 text-center text-sm leading-relaxed text-secondary/85 sm:text-base"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 h-px w-24 bg-secondary/35" />
                    <Button
                      onClick={handleWhatsApp}
                      variant="outline"
                      size="sm"
                      className="mt-7 self-center rounded-none border-secondary/60 bg-transparent px-6 text-[11px] uppercase tracking-[0.28em] text-secondary hover:bg-secondary/10 sm:text-xs"
                    >
                      Hacé Tu Pedido
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
