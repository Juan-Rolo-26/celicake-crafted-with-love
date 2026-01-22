import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/instagram/ig-product-2-DTc2ADBjvV0.jpg";
import { staggerContainer } from "@/lib/motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const chipReveal = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative py-28 bg-cream border-b border-cream-dark/20 overflow-hidden"
    >
      {/* manchas suaves de fondo */}
      <div className="absolute -top-24 right-20 h-72 w-72 rounded-full bg-rose-light/40 blur-3xl" />
      <div className="absolute bottom-10 left-16 h-64 w-64 rounded-full bg-sage-light/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* IMAGEN */}
          <motion.div variants={imageReveal} className="relative">
            <div className="relative rounded-[48px] overflow-hidden shadow-elevated bg-card p-4">
              <img
                src={aboutImage}
                alt="Pastelería artesanal sin gluten CeliCake"
                className="w-full h-[420px] lg:h-[520px] object-cover rounded-[40px]"
              />
            </div>
          </motion.div>

          {/* TEXTO */}
          <div>
            <motion.span
              variants={fadeUpSoft}
              className="block text-[11px] uppercase tracking-[0.35em] text-secondary/60 mb-6"
            >
              Nuestra historia
            </motion.span>

            <motion.h2
              variants={fadeUpSoft}
              className="font-display text-4xl sm:text-5xl leading-[1.05] text-secondary mb-8"
            >
              Artesanal, consciente
              <br />
              <span className="italic">y sin gluten</span>
            </motion.h2>

            <motion.div
              variants={fadeUpSoft}
              className="space-y-5 text-foreground/75 leading-relaxed max-w-xl"
            >
              <p>
                En CeliCake creemos que comer sin gluten no debería ser una
                limitación, sino una experiencia placentera y segura.
                Cada receta nace del respeto por los ingredientes y por
                quienes confían en nosotros.
              </p>
              <p>
                Trabajamos de manera artesanal, con procesos cuidados y sin
                contaminación cruzada. Elegimos tomarnos el tiempo necesario
                para que cada producto llegue a tu mesa con tranquilidad y sabor real.
              </p>
            </motion.div>

            {/* BLOQUE HISTORIA */}
            <motion.div
              variants={fadeUpSoft}
              className="mt-8 rounded-[32px] border border-cream-dark/60 bg-background/80 p-6 text-sm text-foreground/75 shadow-soft max-w-xl"
            >
              <p className="font-semibold text-secondary mb-2">
                Cómo empezó CeliCake
              </p>
              <p>
                Nacimos buscando un “rico de verdad” para personas celíacas.
                Empezamos con pedidos pequeños y hoy seguimos trabajando
                con el mismo cuidado, la misma dedicación y el mismo compromiso.
              </p>
            </motion.div>

            {/* VALORES */}
            <motion.div
              variants={container}
              className="flex flex-wrap gap-3 mt-10"
            >
              {[
                "Seguridad SIN TACC",
                "Ingredientes seleccionados",
                "Procesos cuidados",
                "Hecho a pedido",
              ].map((value) => (
                <motion.span
                  key={value}
                  variants={chipReveal}
                  className="rounded-full bg-sage/25 px-4 py-2 text-sm text-secondary"
                >
                  {value}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={fadeUpSoft}
              href="#contacto"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-[11px] uppercase tracking-[0.35em] text-secondary shadow-elevated hover:scale-105 transition-transform"
            >
              Hablemos de tu pedido
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
