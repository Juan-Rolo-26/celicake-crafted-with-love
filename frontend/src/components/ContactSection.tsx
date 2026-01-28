// @ts-nocheck
import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MovingBackground from "@/components/ui/MovingBackground";

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
      className="relative py-28 bg-rose/10 border-b border-rose/20 overflow-hidden"
    >
      <MovingBackground color="text-rose-dark/10" count={15} />

      {/* Decorative Blobs */}
      <div className="absolute -top-24 right-20 h-96 w-96 rounded-full bg-white/40 blur-[100px] mix-blend-overlay" />
      <div className="absolute bottom-10 left-16 h-80 w-80 rounded-full bg-rose/20 blur-[100px] mix-blend-multiply" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* HEADER */}
        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-secondary mb-6 drop-shadow-sm">
            Acompañamos tu pedido
            <br />
            <span className="italic text-rose-dark">de principio a fin</span>
          </h2>

          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
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
            className="rounded-[40px] border border-white/60 bg-white/90 backdrop-blur-md p-10 shadow-xl"
          >
            <h3 className="font-display text-3xl text-secondary mb-4">
              Contacto directo
            </h3>

            <p className="text-foreground/75 leading-relaxed mb-8 text-lg">
              Si no sabés qué elegir, si tenés dudas o necesitás algo especial,
              escribinos. Te guiamos con calma y claridad.
            </p>

            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="rounded-full bg-sage text-white hover:bg-sage-dark px-10 py-6 text-xs uppercase tracking-[0.35em] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle size={20} className="mr-3" />
              Escribir por WhatsApp
            </Button>

            <p className="mt-4 text-sm text-foreground/60 font-medium ml-2">
              Respondemos rápido y con atención real.
            </p>

            <div className="mt-12 rounded-[28px] border border-rose/30 bg-rose/10 p-8">
              <h4 className="font-display text-xl text-rose-dark mb-2">
                Instagram
              </h4>
              <p className="text-foreground/75 mb-6 text-base">
                Ideas reales, pedidos del día y novedades.
              </p>

              <Button
                variant="outline"
                className="rounded-full border-rose-dark/30 bg-white text-rose-dark hover:bg-rose-dark hover:text-white hover:border-transparent transition-all duration-300"
                asChild
              >
                <a
                  href="https://instagram.com/celicake_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} className="mr-2" />
                  Seguinos en @celicake_
                </a>
              </Button>

              <p className="mt-4 text-sm text-foreground/60 font-medium">
                Atención en Córdoba, Argentina.
              </p>
            </div>
          </motion.div>

          {/* FORMULARIO */}
          <motion.div
            variants={cardReveal}
            className="rounded-[36px] border border-white/60 bg-white/80 backdrop-blur-md p-10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose/20 rounded-bl-[100px] -z-10" />

            <h3 className="font-display text-3xl text-secondary mb-2">
              Dejanos tu mensaje
            </h3>
            <p className="text-sm text-foreground/70 mb-8 font-medium uppercase tracking-wider">
              Leemos todo personalmente 💛
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">Nombre</label>
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Tu nombre completo"
                  className="rounded-2xl bg-white border-rose/20 focus:border-rose focus:ring-rose/20 h-12 shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">Pedido</label>
                <Input
                  value={order}
                  onChange={(event) => setOrder(event.target.value)}
                  placeholder="¿Qué te gustaría pedir?"
                  className="rounded-2xl bg-white border-rose/20 focus:border-rose focus:ring-rose/20 h-12 shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 font-bold ml-1">Detalles</label>
                <Textarea
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  placeholder="Contanos la ocasión o cualquier detalle importante..."
                  className="rounded-2xl min-h-[160px] bg-white border-rose/20 focus:border-rose focus:ring-rose/20 resize-none shadow-sm"
                />
              </div>

              <Button
                type="submit"
                className="mt-6 w-full rounded-full bg-secondary text-white hover:bg-black px-6 py-6 text-xs uppercase tracking-[0.35em] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
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
