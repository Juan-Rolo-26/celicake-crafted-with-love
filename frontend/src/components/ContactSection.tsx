import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const [details, setDetails] = useState("");

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/543515157731?text=Hola!%20Quiero%20hacer%20un%20pedido",
      "_blank"
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hola! Quiero hacer un pedido.",
      name ? `Nombre: ${name}` : null,
      order ? `Pedido: ${order}` : null,
      details ? `Detalles: ${details}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/543515157731?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative py-28 bg-cream border-b border-cream-dark/20 overflow-hidden"
    >
      {/* manchas suaves */}
      <div className="absolute -top-24 right-20 h-72 w-72 rounded-full bg-rose-light/40 blur-3xl" />
      <div className="absolute bottom-10 left-16 h-64 w-64 rounded-full bg-sage-light/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-secondary mb-6">
            Acompañamos tu pedido
            <br />
            <span className="italic">de principio a fin</span>
          </h2>

          <p className="text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Respondemos cada mensaje de forma personal.
            Sin automatismos, sin apuro, con el cuidado que merece lo SIN TACC.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10"
        >
          {/* CONTACTO DIRECTO */}
          <motion.div
            variants={cardReveal}
            className="rounded-[40px] border border-cream-dark/60 bg-background/90 p-10 shadow-elevated"
          >
            <h3 className="font-display text-2xl text-secondary mb-4">
              Contacto directo
            </h3>

            <p className="text-foreground/75 leading-relaxed mb-8">
              Si no sabés qué elegir, si tenés dudas o necesitás algo especial,
              escribinos. Te guiamos con calma y claridad.
            </p>

            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="rounded-full bg-primary text-secondary px-8 py-4 text-[11px] uppercase tracking-[0.35em] shadow-soft hover:scale-105 transition-transform"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </Button>

            <p className="mt-4 text-sm text-foreground/65">
              Respondemos rápido y con atención real.
            </p>

            <div className="mt-10 rounded-[28px] border border-cream-dark/60 bg-cream/40 p-6">
              <h4 className="font-display text-lg text-secondary mb-2">
                Instagram
              </h4>
              <p className="text-foreground/75 mb-4">
                Ideas reales, pedidos del día y novedades.
              </p>

              <Button
                variant="outline"
                className="rounded-full border-secondary/30 bg-background text-secondary hover:border-secondary/60"
                asChild
              >
                <a
                  href="https://instagram.com/celicake_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} />
                  @celicake_
                </a>
              </Button>

              <p className="mt-4 text-sm text-foreground/65">
                Atención en Córdoba, Argentina.
              </p>
            </div>
          </motion.div>

          {/* FORMULARIO */}
          <motion.div
            variants={cardReveal}
            className="rounded-[36px] border border-cream-dark/60 bg-background/85 p-10 shadow-soft"
          >
            <h3 className="font-display text-2xl text-secondary mb-2">
              Dejanos tu mensaje
            </h3>
            <p className="text-sm text-foreground/70 mb-8">
              Leemos todo personalmente 💛
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Tu nombre"
                className="rounded-2xl bg-cream/60 border-cream-dark/60 focus-visible:ring-primary"
              />
              <Input
                value={order}
                onChange={(event) => setOrder(event.target.value)}
                placeholder="¿Qué te gustaría pedir?"
                className="rounded-2xl bg-cream/60 border-cream-dark/60 focus-visible:ring-primary"
              />
              <Textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                placeholder="Contanos la ocasión o cualquier detalle importante"
                className="rounded-2xl min-h-[140px] bg-cream/60 border-cream-dark/60 focus-visible:ring-primary"
              />

              <Button
                type="submit"
                className="mt-4 w-full rounded-full bg-primary text-secondary px-6 py-4 text-[11px] uppercase tracking-[0.35em] shadow-soft hover:scale-105 transition-transform"
              >
                Quiero asesoramiento
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
