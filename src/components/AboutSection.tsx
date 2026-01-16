import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-bakery.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Elaboración artesanal en Celicake"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-light rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage-light rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-medium mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Celicake
              <br />
              <span className="text-primary">Carla Teicher</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Celicake nace del amor por la cocina y el cuidado de quienes
                necesitan una alimentación sin gluten. Cada producto es
                elaborado de forma artesanal, con ingredientes seleccionados y
                dedicación en cada detalle.
              </p>
              <p>
                Sabemos lo importante que es para vos poder disfrutar de
                productos ricos, seguros y hechos con amor. Por eso, trabajamos
                con los más altos estándares de calidad para garantizar que cada
                bocado sea una experiencia especial.
              </p>
              <p>
                Nuestra pasión es crear repostería y panadería que te haga
                sentir que no te estás perdiendo de nada. Porque comer sin
                gluten también puede ser delicioso.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-sage-light text-sage-dark rounded-full text-sm font-medium">
                Artesanal
              </span>
              <span className="px-4 py-2 bg-rose-light text-rose-dark rounded-full text-sm font-medium">
                Con amor
              </span>
              <span className="px-4 py-2 bg-cream-dark text-warm-brown rounded-full text-sm font-medium">
                Seguro
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
