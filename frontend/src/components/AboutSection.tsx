import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, ShieldCheck, Users } from "lucide-react";
import carlaImage from "@/assets/carla-teicher.jpg";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";
import MovingBackground from "@/components/ui/MovingBackground";

const AboutSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const contentVariants = staggerContainer(0.16, 0.12);
  const textVariants = fadeUp(24, 0.85);
  const imageVariants = scaleIn(0.96, 0.9);

  const values = [
    {
      icon: ShieldCheck,
      label: "Seguridad real",
      text: "Producción 100% sin gluten y sin contaminación cruzada.",
    },
    {
      icon: Heart,
      label: "Cocina con propósito",
      text: "Cada receta nace para que nadie se quede sin algo rico.",
    },
    {
      icon: Users,
      label: "Familia que acompaña",
      text: "El amor de casa está presente en cada paso de CeliCake.",
    },
  ];

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative overflow-hidden border-y border-cream-dark/40 bg-cream py-28"
    >
      <MovingBackground color="text-rose-dark/5" />
      <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-rose-light/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-sage-light/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <motion.span
              variants={textVariants}
              className="mb-4 inline-flex rounded-full border border-rose-dark/20 bg-rose-light/70 px-5 py-2 text-xs uppercase tracking-[0.24em] text-rose-dark"
            >
              Sobre Nosotros
            </motion.span>

            <motion.h2
              variants={textVariants}
              className="font-display text-4xl leading-[1.05] text-secondary sm:text-5xl"
            >
              Esta soy yo,
              <br />
              <span className="italic">Carla Teicher (La Cacu)</span>
            </motion.h2>

            <motion.div
              variants={textVariants}
              className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80"
            >
              <p>
                Hace varios años comenzamos este emprendimiento porque a una de
                mis 4 hijos le detectaron celiaquía a los 2 añitos.
              </p>
              <p>
                En ese momento no había tantas opciones como hoy, y siempre le
                prometimos que nunca le iban a faltar cosas ricas para comer.
              </p>
              <p>
                Gracias a ella me di cuenta de lo que realmente me gustaba
                hacer, y por eso lo sigo hasta el día de hoy.
              </p>
            </motion.div>

            <motion.blockquote
              variants={textVariants}
              className="mt-8 rounded-3xl border border-cream-dark bg-white/70 p-6 text-secondary shadow-soft"
            >
              <p className="font-display text-2xl leading-tight">
                "Necesito que todas las personas con celiaquía puedan comer
                rico."
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/60">
                Carla - CeliCake
              </p>
            </motion.blockquote>

            <motion.p
              variants={textVariants}
              className="mt-7 text-base text-foreground/75"
            >
              Mi familia me apoya en cada paso que doy, y esa fuerza es parte
              de todo lo que hacemos en CeliCake.
            </motion.p>

            <motion.div
              variants={contentVariants}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {values.map(({ icon: Icon, label, text }) => (
                <motion.article
                  key={label}
                  variants={textVariants}
                  className="rounded-2xl border border-cream-dark/70 bg-white/80 p-4 shadow-soft"
                >
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sage/20 text-sage-dark">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <p className="font-display text-xl leading-tight text-secondary">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={contentVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.figure
              variants={imageVariants}
              className="w-full max-w-[580px] rounded-[2rem] border border-cream-dark/60 bg-white p-3 shadow-elevated"
            >
              <div className="rounded-[1.5rem] bg-cream-dark/30 p-2">
                <img
                  src={carlaImage}
                  alt="Carla Teicher preparando recetas sin gluten"
                  className="h-[500px] w-full rounded-[1.25rem] object-contain sm:h-[610px] lg:h-[730px]"
                />
              </div>
              <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-secondary">
                Carla en su cocina
              </figcaption>
            </motion.figure>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
