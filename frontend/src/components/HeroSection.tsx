import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const textY = useTransform(scrollYProgress, [0, 0.45], ["0%", "-18%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, [heroImages.length]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={heroImages[activeIndex]}
            src={heroImages[activeIndex]}
            alt="Textura de pasteleria artesanal CeliCake"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-secondary/25" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-secondary/35 via-secondary/20 to-transparent"
          aria-hidden
        />
      </motion.div>

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h1 className="font-logo text-[clamp(4rem,13vw,10.5rem)] leading-[0.9] tracking-[0.01em] text-background drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              CeliCake
            </h1>
            <p className="mt-6 text-[clamp(1rem,2vw,1.4rem)] uppercase tracking-[0.35em] text-background/80">
              Sin gluten
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-background/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
      >
        <div className="h-10 w-6 rounded-full border border-background/40 flex items-start justify-center">
          <motion.span
            className="mt-2 h-1.5 w-1.5 rounded-full bg-background/80"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
