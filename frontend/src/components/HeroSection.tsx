import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import igDelicioso1 from "@/assets/instagram/ig-deliciosos-1-DTVfIS9jseG.jpg";
import igDelicioso2 from "@/assets/instagram/ig-deliciosos-2-DTSy45hDj1t.jpg";
import igPost2 from "@/assets/instagram/ig-post-2-DTpyrr5jqA4.jpg";
import igPost3 from "@/assets/instagram/ig-post-3-DTnIx7GjhYP.jpg";
import igPost4 from "@/assets/instagram/ig-post-4-DTk0aSEjlRR.jpg";
import igProduct1 from "@/assets/instagram/ig-product-1-DTfnOoGkSgS.jpg";
import igProduct3 from "@/assets/instagram/ig-product-3-DTatXGbkcQc.jpg";

const HeroSection = () => {
  const heroImages = [
    igPost4,
    igPost3,
    igPost2,
    igProduct1,
    igProduct3,
    igDelicioso1,
    igDelicioso2,
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [heroImages.length]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale }}
      >
        <AnimatePresence mode="popLayout" custom={activeIndex}>
          <motion.img
            key={heroImages[activeIndex]}
            src={heroImages[activeIndex]}
            alt="CeliCake High Pastry"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay Gradients for Depth */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col items-center"
        >


          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-logo text-[15vw] md:text-[9rem] lg:text-[11rem] leading-[0.85] text-white drop-shadow-2xl mix-blend-overlay"
          >
            CeliCake
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 text-lg md:text-2xl font-light tracking-[0.2em] uppercase text-white/90 max-w-2xl"
          >
            Alta Pastelería <span className="font-serif italic capitalize text-accent">Sin Gluten</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12"
          >
            <Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-white/90 px-8 py-6 text-xs uppercase tracking-[0.25em] transition-all duration-500 hover:scale-105"
              onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Descubrir la carta
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/70 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
