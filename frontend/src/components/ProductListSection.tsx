import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import igDelicioso3 from "@/assets/instagram/ig-deliciosos-3-DTNfaDUjr17.jpg";
import igPost2 from "@/assets/instagram/ig-post-2-DTpyrr5jqA4.jpg";
import igPost4 from "@/assets/instagram/ig-post-4-DTk0aSEjlRR.jpg";
import igProduct1 from "@/assets/instagram/ig-product-1-DTfnOoGkSgS.jpg";
import breadProduct from "@/assets/bread-product.jpg";
import { fadeUp, staggerContainer } from "@/lib/motion";

const ProductListSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const categories = [
    {
      title: "Sin azúcar agregada",
      tone: "rose",
      image: igDelicioso3,
      items: [
        "Budines sin azúcar agregada",
        "Alfajores sin azúcar agregada con nueces",
        "Galletitas con frutos secos (15 unidades aprox.)",
      ],
    },
    {
      title: "Sin azúcar y sin harinas",
      tone: "cream",
      image: igProduct1,
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
      image: igPost2,
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
      image: igPost4,
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
      image: breadProduct,
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

  const toneColor = {
    rose: "bg-rose/60",
    sage: "bg-sage/80",
    cream: "bg-secondary/30",
  };

  const tonePanel = {
    rose: "bg-rose/15 border-rose/30",
    sage: "bg-sage/15 border-sage/30",
    cream: "bg-cream/80 border-cream-dark/70",
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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          variants={fadeUp(24, 0.7)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-foreground/70">
            <Sparkles className="h-4 w-4 text-primary" />
            Carta artesanal SIN TACC
          </span>

          <h2 className="mt-5 font-display text-3xl sm:text-4xl text-secondary">
            Nuestra carta, pensada para cuidarte
          </h2>

          <p className="mt-4 text-sm text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Cada producto se elabora a pedido, con ingredientes seguros y procesos
            cuidados, para que disfrutes sin gluten y con total tranquilidad.
          </p>

          <div className="mt-6 flex justify-center gap-3 flex-wrap text-[10px] uppercase tracking-[0.35em]">
            <span className="rounded-full border border-sage/40 bg-sage/25 px-4 py-2">
              SIN TACC
            </span>
            <span className="rounded-full border border-cream-dark/60 bg-background/80 px-4 py-2">
              Apto celíacos
            </span>
            <span className="rounded-full border border-cream-dark/60 bg-background/80 px-4 py-2">
              Hecho a pedido
            </span>
          </div>
        </motion.div>

        {/* CARTA POR CATEGORIA */}
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-14"
        >
          {categories.map((cat, index) => {
            const isReversed = index % 2 !== 0;
            const panelStyle = tonePanel[cat.tone as keyof typeof tonePanel];
            return (
            <motion.div
              key={cat.title}
              variants={fadeUp(20, 0.5)}
              className="overflow-hidden rounded-[36px] border border-cream-dark/60 bg-background/80 shadow-elevated"
            >
              <div className={`grid md:grid-cols-[1.1fr_0.9fr] ${isReversed ? "md:grid-cols-[0.9fr_1.1fr]" : ""}`}>
                <div className={`relative ${isReversed ? "md:order-2" : ""}`}>
                  <img
                    src={cat.image}
                    alt={`Categoria ${cat.title}`}
                    className="h-full w-full object-cover min-h-[260px] md:min-h-[420px]"
                  />
                </div>
                <div className={`flex flex-col justify-center px-8 py-10 md:px-10 md:py-12 text-center md:text-left border-t md:border-t-0 border-cream-dark/50 ${panelStyle}`}>
                  <h3 className="font-display text-3xl sm:text-4xl text-secondary">
                    {cat.title}
                  </h3>
                  {cat.subtitle && (
                    <p className="mt-3 text-sm uppercase tracking-[0.25em] text-secondary/60">
                      {cat.subtitle}
                    </p>
                  )}
                  <div className="mt-6 h-px w-24 bg-secondary/30 mx-auto md:mx-0" />
                  <ul className="mt-6 grid gap-2 text-sm text-secondary/75 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span
                          className={`mt-2 h-1.5 w-1.5 rounded-full ${toneColor[cat.tone]}`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 h-px w-24 bg-secondary/30 mx-auto md:mx-0" />
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    size="sm"
                    className="mt-6 self-center md:self-start rounded-full text-[11px] uppercase tracking-[0.35em]"
                  >
                    Hacé tu pedido
                  </Button>
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(20, 0.6)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mt-16"
        >
          <p className="mb-5 text-sm text-foreground/70">
            Trabajamos con cupos semanales y producción cuidada.  
            Consultanos por disponibilidad o alergias adicionales.
          </p>

          <Button
            onClick={handleWhatsApp}
            className="rounded-full bg-primary text-secondary px-6 py-3 text-[11px] uppercase tracking-[0.35em] hover:scale-105 transition-transform"
          >
            <MessageCircle size={16} />
            Consultanos y armamos tu pedido
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductListSection;
